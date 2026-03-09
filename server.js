const path = require("path");
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, "data");
const HIKMA_PATH = path.join(DATA_DIR, "hikma-data.json");
const USERS_PATH = path.join(DATA_DIR, "users.json");

function loadJson(filePath, fallback) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load JSON:", filePath, err);
    return fallback;
  }
}

function saveJson(filePath, value) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(value, null, 2), "utf8");
  } catch (err) {
    console.error("Failed to save JSON:", filePath, err);
  }
}

const hikmaStore = loadJson(HIKMA_PATH, { hikam: [], topics: [] });
const HIKAM = Array.isArray(hikmaStore.hikam) ? hikmaStore.hikam : [];
const TOPICS = Array.isArray(hikmaStore.topics) ? hikmaStore.topics : [];

let usersStore = loadJson(USERS_PATH, { users: {} });
if (!usersStore || typeof usersStore !== "object") {
  usersStore = { users: {} };
}
if (!usersStore.users || typeof usersStore.users !== "object") {
  usersStore.users = {};
}

function saveUsers() {
  saveJson(USERS_PATH, usersStore);
}

function getTopicByKey(key) {
  if (!key) return null;
  return TOPICS.find((t) => t.key === key) || null;
}

function computeTopicsForQuote(quote) {
  const result = [];
  const tags = Array.isArray(quote.tags) ? quote.tags : [];
  const text = quote.text_ar || "";

  function add(topicKey) {
    if (!topicKey) return;
    if (!result.includes(topicKey)) result.push(topicKey);
  }

  tags.forEach((tag) => {
    if (tag === "صبر") add("sabr");
    if (tag === "جهاد") {
      add("sabr");
      add("quwa");
    }
    if (["حكمة", "قيمة", "محبة", "إيمان", "دين"].includes(tag)) add("hikma");
    if (["علم", "تعلم", "علماء", "فقه", "حساب", "حجة", "خلق"].includes(tag)) add("ilm");
    if (["إمامة", "قدوة"].includes(tag)) add("leadership");
    if (
      [
        "أخلاق",
        "أدب",
        "حلم",
        "صمت",
        "جوار",
        "صلة",
        "حقوق",
        "إحسان",
        "أسرة",
        "محبة",
        "إخوان"
      ].includes(tag)
    )
      add("akhlaq");
    if (["أدب", "حلم", "صمت", "تواضع"].includes(tag)) add("tawadu");
    if (["عزة", "كرامة", "جهاد", "شجاعة", "هوى", "نوم"].includes(tag)) add("quwa");
    if (["عمل", "عبادة", "إخلاص", "طاعة", "نصح"].includes(tag)) add("work");
    if (["قلب", "إيمان", "دين", "حياة", "صحبة", "جوار"].includes(tag)) add("life");
    if (["مال", "نائل", "أموال"].includes(tag)) add("wealth");
  });

  if (!result.length) {
    if (text.includes("الصبر") || text.includes("صبر")) add("sabr");
    if (text.includes("علم") || text.includes("عِلْم")) add("ilm");
    if (text.includes("مال") || text.includes("أموال")) add("wealth");
  }

  if (!result.length) add("life");
  return result;
}

function getQuoteById(id) {
  const num = typeof id === "string" ? parseInt(id, 10) : id;
  if (Number.isNaN(num)) return null;
  return HIKAM.find((q) => q.id === num) || null;
}

function addDerivedFields(quote) {
  if (!quote) return null;
  const topics = computeTopicsForQuote(quote);
  return { ...quote, topics };
}

const HIKMA_PALETTES = ["classic", "emerald", "cream", "sand", "navy"];

const WALLPAPER_SIZES = {
  iphone: { width: 1290, height: 2796 },
  "2560x1440": { width: 2560, height: 1440 },
  "1920x1080": { width: 1920, height: 1080 }
};

const WALLPAPER_PALETTE_COLORS = {
  classic: {
    bg: "#1a1a1a",
    border: "#f5f5f0",
    text: "#f5f5f0",
    person: "rgba(245,245,240,0.75)",
    logo: "rgba(245,245,240,0.4)"
  },
  emerald: {
    bg: "#0a1f12",
    border: "#b8860b",
    text: "#e8c547",
    person: "rgba(232,197,71,0.9)",
    logo: "rgba(232,197,71,0.45)"
  },
  cream: {
    bg: "#f2ede2",
    border: "#1a3324",
    text: "#0f2618",
    person: "rgba(15,38,24,0.8)",
    logo: "rgba(15,38,24,0.45)"
  },
  sand: {
    bg: "#e5ddd2",
    border: "#4a3728",
    text: "#2c2118",
    person: "rgba(44,33,24,0.85)",
    logo: "rgba(44,33,24,0.45)"
  },
  navy: {
    bg: "#0f1729",
    border: "#94a3b8",
    text: "#e2e8f0",
    person: "rgba(226,232,240,0.85)",
    logo: "rgba(148,163,184,0.5)"
  }
};

function getUserRecord(userId) {
  if (!userId) return null;
  if (!usersStore.users[userId]) {
    usersStore.users[userId] = {
      favorites: [],
      preferences: {
        palette: "classic",
        wallpaperFormat: "iphone",
        wallpaperResolution: "2560x1440"
      }
    };
    saveUsers();
  }
  return usersStore.users[userId];
}

const api = express.Router();

api.get("/health", (req, res) => {
  res.json({ status: "ok", hikamCount: HIKAM.length, topicCount: TOPICS.length });
});

api.get("/hikam", (req, res) => {
  const personKey = req.query.person_key || "";
  const topicKey = req.query.topic_key || "";
  const limit = Math.min(parseInt(req.query.limit, 10) || 50, 200);
  const offset = parseInt(req.query.offset, 10) || 0;

  let list = HIKAM;
  if (personKey) {
    list = list.filter((q) => q.person_key === personKey);
  }
  if (topicKey) {
    list = list.filter((q) => computeTopicsForQuote(q).includes(topicKey));
  }

  const total = list.length;
  const slice = list.slice(offset, offset + limit).map(addDerivedFields);

  res.json({
    total,
    count: slice.length,
    items: slice
  });
});

api.get("/hikam/random", (req, res) => {
  const personKey = req.query.person_key || "";
  const topicKey = req.query.topic_key || "";

  let list = HIKAM;
  if (personKey) {
    list = list.filter((q) => q.person_key === personKey);
  }
  if (topicKey) {
    list = list.filter((q) => computeTopicsForQuote(q).includes(topicKey));
  }

  if (!list.length) {
    return res.status(404).json({ error: "لا توجد حِكَم لهذا الاختيار." });
  }

  const random = list[Math.floor(Math.random() * list.length)];
  res.json(addDerivedFields(random));
});

api.get("/hikam/:id", (req, res) => {
  const quote = getQuoteById(req.params.id);
  if (!quote) return res.status(404).json({ error: "الحكمة غير موجودة." });
  res.json(addDerivedFields(quote));
});

api.get("/hikam/:id/tafseer", (req, res) => {
  const quote = getQuoteById(req.params.id);
  if (!quote) return res.status(404).json({ error: "الحكمة غير موجودة." });
  res.json({
    id: quote.id,
    text_ar: quote.text_ar,
    person: quote.person,
    source_ar: quote.source_ar,
    tafseer_ar: quote.tafseer_ar || ""
  });
});

api.put("/hikam/:id/tafseer", (req, res) => {
  const quote = getQuoteById(req.params.id);
  if (!quote) return res.status(404).json({ error: "الحكمة غير موجودة." });

  const tafseer = (req.body && req.body.tafseer_ar) || "";
  if (typeof tafseer !== "string" || !tafseer.trim()) {
    return res.status(400).json({ error: "tafseer_ar يجب أن يكون نصاً غير فارغ." });
  }

  quote.tafseer_ar = tafseer.trim();
  saveJson(HIKMA_PATH, { hikam: HIKAM, topics: TOPICS });
  res.json(addDerivedFields(quote));
});

api.get("/topics", (req, res) => {
  const items = TOPICS.map((t) => {
    const count = HIKAM.filter((q) => computeTopicsForQuote(q).includes(t.key)).length;
    return { ...t, hikam_count: count };
  });
  res.json(items);
});

api.get("/topics/:key", (req, res) => {
  const topic = getTopicByKey(req.params.key);
  if (!topic) return res.status(404).json({ error: "الموضوع غير موجود." });
  const hikam = HIKAM.filter((q) => computeTopicsForQuote(q).includes(topic.key)).map(
    (q) => ({
      id: q.id,
      text_ar: q.text_ar,
      person: q.person,
      source_ar: q.source_ar
    })
  );
  res.json({ ...topic, hikam });
});

api.get("/topics/:key/hikam", (req, res) => {
  const topic = getTopicByKey(req.params.key);
  if (!topic) return res.status(404).json({ error: "الموضوع غير موجود." });

  const list = HIKAM.filter((q) => computeTopicsForQuote(q).includes(topic.key)).map(
    addDerivedFields
  );
  res.json({
    topic,
    total: list.length,
    items: list
  });
});

api.get("/users/:userId/preferences", (req, res) => {
  const user = getUserRecord(req.params.userId);
  if (!user) return res.status(400).json({ error: "userId مطلوب." });
  res.json({ userId: req.params.userId, preferences: user.preferences });
});

api.patch("/users/:userId/preferences", (req, res) => {
  const user = getUserRecord(req.params.userId);
  if (!user) return res.status(400).json({ error: "userId مطلوب." });

  const body = req.body || {};
  const prefs = user.preferences;

  if (body.palette) {
    if (!HIKMA_PALETTES.includes(body.palette)) {
      return res.status(400).json({ error: "لوحة ألوان غير معروفة." });
    }
    prefs.palette = body.palette;
  }

  if (body.wallpaperFormat) {
    if (!["iphone", "desktop"].includes(body.wallpaperFormat)) {
      return res.status(400).json({ error: "شكل الخلفية غير مدعوم." });
    }
    prefs.wallpaperFormat = body.wallpaperFormat;
  }

  if (body.wallpaperResolution) {
    if (!["2560x1440", "1920x1080"].includes(body.wallpaperResolution)) {
      return res.status(400).json({ error: "دقة الخلفية غير مدعومة." });
    }
    prefs.wallpaperResolution = body.wallpaperResolution;
  }

  saveUsers();
  res.json({ userId: req.params.userId, preferences: prefs });
});

api.get("/users/:userId/favorites", (req, res) => {
  const user = getUserRecord(req.params.userId);
  if (!user) return res.status(400).json({ error: "userId مطلوب." });
  const include = (req.query.include || "").toString();
  const ids = Array.isArray(user.favorites) ? user.favorites : [];

  if (include === "full") {
    const items = ids
      .map((id) => getQuoteById(id))
      .filter(Boolean)
      .map(addDerivedFields);
    return res.json({ userId: req.params.userId, favorites: items });
  }

  res.json({ userId: req.params.userId, favorites: ids });
});

api.post("/users/:userId/favorites", (req, res) => {
  const user = getUserRecord(req.params.userId);
  if (!user) return res.status(400).json({ error: "userId مطلوب." });

  const hikmaId = req.body && req.body.hikmaId;
  const quote = getQuoteById(hikmaId);
  if (!quote) return res.status(404).json({ error: "الحكمة غير موجودة." });

  if (!Array.isArray(user.favorites)) user.favorites = [];
  if (!user.favorites.includes(quote.id)) {
    user.favorites.push(quote.id);
    saveUsers();
  }

  res.status(201).json({
    userId: req.params.userId,
    favorites: user.favorites
  });
});

api.delete("/users/:userId/favorites/:hikmaId", (req, res) => {
  const user = getUserRecord(req.params.userId);
  if (!user) return res.status(400).json({ error: "userId مطلوب." });

  const quote = getQuoteById(req.params.hikmaId);
  if (!quote) return res.status(404).json({ error: "الحكمة غير موجودة." });

  if (!Array.isArray(user.favorites)) user.favorites = [];
  user.favorites = user.favorites.filter((id) => id !== quote.id);
  saveUsers();

  res.status(204).send();
});

api.post("/hikam/:id/instagram-card", (req, res) => {
  const quote = getQuoteById(req.params.id);
  if (!quote) return res.status(404).json({ error: "الحكمة غير موجودة." });

  const body = req.body || {};
  const palette =
    body.palette && HIKMA_PALETTES.includes(body.palette) ? body.palette : "classic";
  const colors = WALLPAPER_PALETTE_COLORS[palette] || WALLPAPER_PALETTE_COLORS.classic;

  res.json({
    hikmaId: quote.id,
    palette,
    dimensions: { width: 1080, height: 1080 },
    colors,
    text_ar: quote.text_ar,
    person: quote.person
  });
});

api.post("/hikam/:id/wallpaper", (req, res) => {
  const quote = getQuoteById(req.params.id);
  if (!quote) return res.status(404).json({ error: "الحكمة غير موجودة." });

  const body = req.body || {};
  const palette =
    body.palette && HIKMA_PALETTES.includes(body.palette) ? body.palette : "classic";
  const format = body.format === "desktop" ? "desktop" : "iphone";

  let resolutionKey = "2560x1440";
  if (format === "desktop" && body.resolution === "1920x1080") {
    resolutionKey = "1920x1080";
  }

  const size =
    format === "iphone" ? WALLPAPER_SIZES.iphone : WALLPAPER_SIZES[resolutionKey];
  const colors = WALLPAPER_PALETTE_COLORS[palette] || WALLPAPER_PALETTE_COLORS.classic;

  res.json({
    hikmaId: quote.id,
    format,
    resolution: format === "iphone" ? null : resolutionKey,
    width: size.width,
    height: size.height,
    colors,
    text_ar: quote.text_ar,
    person: quote.person
  });
});

app.use("/api", api);

app.use(
  express.static(ROOT_DIR, {
    index: "index.html"
  })
);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Hikma backend listening on http://localhost:${PORT}`);
});

