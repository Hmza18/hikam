# Hikma Platform – Backend & Frontend

Node/Express backend and static frontend for the Hikma platform (حِكَم المعصومين الأربعة عشر)، serving hikam data, topics, favorites, and design helpers for Instagram cards and wallpapers.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the server

```bash
npm run dev
```

The app will start on `http://localhost:4000` by default.

- The existing static frontend (`index.html`, `styles.css`, `script.js`) is served from the project root.
- Backend APIs are available under the `/api` prefix.

You can open `http://localhost:4000` in your browser to use the current Hikma UI.

## Data model

All core data is stored as JSON files under `data/`:

- `data/hikma-data.json` – hikam (quotes) and topics.
- `data/users.json` – per-user favorites and preferences (keyed by a simple `userId` string provided by the frontend).

### Hikma

Each hikma (quote) has:

- `id` – numeric identifier.
- `text_ar` – Arabic text of the hikma.
- `person`, `person_key` – name and key for the imam / prophet / lady.
- `source_ar`, `book_key` – bibliographic source.
- `tags` – array of Arabic tags used to infer topics.
- `tafseer_ar` – explanation / tafseer text.

Topics are pre-defined in the same file and are also inferred automatically from tags and text.

## API overview

All endpoints are prefixed with `/api`.

### Health

- **GET** `/api/health` – basic health check, returns hikam and topic counts.

### Hikam (quotes)

- **GET** `/api/hikam`
  - Query params (optional):
    - `person_key` – filter by `person_key` (e.g. `imam_ali`, `prophet`).
    - `topic_key` – filter by inferred topic key (e.g. `sabr`, `hikma`).
    - `limit` – max items (default 50, max 200).
    - `offset` – offset for pagination (default 0).
  - Response: `{ total, count, items: [ { ...hikma, topics: [...] } ] }`.

- **GET** `/api/hikam/random`
  - Same filters as `/api/hikam` (`person_key`, `topic_key`).
  - Returns a single random hikma (with `topics` field).

- **GET** `/api/hikam/:id`
  - Returns a single hikma by id with inferred `topics`.

### Tafseer / explanation

- **GET** `/api/hikam/:id/tafseer`
  - Returns `{ id, text_ar, person, source_ar, tafseer_ar }` for the hikma.

- **PUT** `/api/hikam/:id/tafseer`
  - Body: `{ "tafseer_ar": "نص التفسير..." }`
  - Updates and persists the tafseer for that hikma in `data/hikma-data.json`.

This gives you a simple storage / editing flow for tafseer, and can be wired to a future generation flow (LLM) on top of this endpoint.

### Topics

- **GET** `/api/topics`
  - Returns all topics with a `hikam_count` field.

- **GET** `/api/topics/:key`
  - Returns topic info plus a light list of hikam `{ id, text_ar, person, source_ar }` for that topic.

- **GET** `/api/topics/:key/hikam`
  - Returns `{ topic, total, items: [...] }` where `items` are full hikam objects (with `topics`).

### User preferences (palette, wallpaper, etc.)

User data is keyed by an arbitrary `userId` string chosen by the frontend (e.g. stored in `localStorage` and sent in the URL).

- **GET** `/api/users/:userId/preferences`
  - Returns:
    - `palette` – one of `classic`, `emerald`, `cream`, `sand`, `navy`.
    - `wallpaperFormat` – `iphone` or `desktop`.
    - `wallpaperResolution` – `2560x1440` or `1920x1080` (only used for desktop).

- **PATCH** `/api/users/:userId/preferences`
  - Body (all optional, validated):
    - `palette`
    - `wallpaperFormat`
    - `wallpaperResolution`
  - Returns updated preferences.

This lets you persist the color palette and wallpaper settings server-side instead of only using `localStorage`.

### Favorites / bookmarks

Favorites are stored as an array of hikma ids per `userId` in `data/users.json`.

- **GET** `/api/users/:userId/favorites`
  - Query param (optional):
    - `include=full` – if set, returns full hikam objects; otherwise just ids.
  - Response:
    - Without `include=full`: `{ userId, favorites: [1, 7, 20] }`
    - With `include=full`: `{ userId, favorites: [ { ...hikma }, ... ] }`

- **POST** `/api/users/:userId/favorites`
  - Body: `{ "hikmaId": 12 }`
  - Adds the hikma to the user’s favorites (idempotent) and returns updated ids.

- **DELETE** `/api/users/:userId/favorites/:hikmaId`
  - Removes the hikma id from the favorites list. Returns `204 No Content`.

### Instagram design generation flow (config)

These endpoints generate canonical design configurations (text + palette + dimensions) to support your existing Instagram / wallpaper flows. Image rendering can remain in the frontend for now (e.g. via `html2canvas`) or be moved server-side later without changing the contract.

- **POST** `/api/hikam/:id/instagram-card`
  - Body (optional): `{ "palette": "emerald" }`
  - Response:
    - `hikmaId`
    - `palette` – validated and defaulted to `classic`.
    - `dimensions` – `{ width: 1080, height: 1080 }`.
    - `colors` – `{ bg, border, text, person, logo }` based on the palette.
    - `text_ar`, `person`

You can feed this directly to the existing Instagram-card layout in the frontend.

### Wallpaper generation flow (config)

- **POST** `/api/hikam/:id/wallpaper`
  - Body:
    - `palette` (optional, default `classic`)
    - `format` – `"iphone"` or `"desktop"` (optional, default `"iphone"`)
    - `resolution` – `"2560x1440"` or `"1920x1080"` (only used for `"desktop"`)
  - Response:
    - `hikmaId`
    - `format`
    - `resolution` (null for iPhone, string for desktop)
    - `width`, `height` – concrete pixel dimensions.
    - `colors` – `{ bg, border, text, person, logo }`
    - `text_ar`, `person`

The response matches the constants already used in `script.js`, so you can plug it into your existing canvas-based wallpaper generator or move the rendering to the backend later.

## Wiring the frontend

The current frontend still uses an in-memory array of hikam in `script.js`. To migrate gradually to the backend APIs:

1. Replace the local `quotes` array with calls to:
   - `GET /api/hikam/random` for the main “حكمة جديدة” button.
   - `GET /api/hikam?person_key=...&topic_key=...` for filtered views.
2. Use `GET /api/topics` and `GET /api/topics/:key/hikam` for the topic explorer.
3. Use:
   - `/api/users/:userId/preferences` to sync palette and wallpaper settings.
   - `/api/users/:userId/favorites` to store favorites across devices (or at least server-side per anonymous `userId`).
4. For Instagram and wallpaper flows, call the config endpoints, then render using your existing HTML/Canvas setup.

This keeps the backend clean and RESTful while allowing you to evolve the frontend without breaking changes.

