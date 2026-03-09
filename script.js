/**
 * حِكَم المعصومين الأربعة عشر (ع) — من النبي محمد (ص) إلى الإمام المهدي (عج)
 * الأقوال من مصادر شيعية موثوقة (نهج البلاغة، الكافي، تحف العقول، بحار الأنوار، معاني الأخبار).
 */

(function () {
  "use strict";

  const quotes = [
    {
      id: 1,
      text_ar:
        "لِسَانُ الْعَاقِلِ وَرَاءَ قَلْبِهِ، وَقَلْبُ الْأَحْمَقِ وَرَاءَ لِسَانِهِ",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar:
        "نهج البلاغة، الحكمة ٣٦ (مروية أيضاً في كتاب الزهد للحسين بن سعيد، الكافي ١/٧١، الخصال ١/١١)",
      book_key: "nahj-36",
      tags: ["حكمة", "عقل"],
      tafseer_ar:
        "العاقل يزن كلامه قبل أن ينطق: يفكر ثم يتكلم، فلا يندم. والأحمق يتكلم ثم يفكر، فيقع في الزلل. الدرس: التأني والتفكر قبل الكلام من علامات العقل؛ واللسان السليم يتبع القلب السليم.",
    },
    {
      id: 2,
      text_ar:
        "الْفَقِيهُ كُلُّ الْفَقِيهِ مَنْ لَمْ يُقَنِّطِ النَّاسَ مِنْ رَحْمَةِ اللَّهِ، وَلَمْ يُؤْيِسْهُمْ مِنْ رَوْحِ اللَّهِ، وَلَمْ يُؤْمِنْهُمْ مِنْ مَكْرِ اللَّهِ",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، الحكمة ٩٠ (مروية في الكافي ١/٣٦، معاني الأخبار للصدوق ص ٢٢٦)",
      book_key: "nahj-90",
      tags: ["فقه", "رجاء", "خوف"],
      tafseer_ar:
        "الفقه الحقيقي يجمع بين الرجاء والخوف: لا يقطع رجاء العبد من رحمة الله، ولا يغفل عن عقوبته. التوازن بين الرجاء والخشية يبني إيماناً سليماً. الدرس: الداعية والفقيه يبعث الأمل دون تفريط، ويذكر بالعاقبة دون إياس.",
    },
    {
      id: 3,
      text_ar: "قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُهُ",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، الحكمة ٨١",
      book_key: "nahj-81",
      tags: ["حكمة", "قيمة"],
      tafseer_ar:
        "قيمة المرء تُقاس بما يحسنه من علم أو عمل أو خلق؛ النفع الذي يقدمه للآخرين هو ميزانه. الدرس: السعي لإتقان ما نفعله وإحسانه يرفع قدرنا ويجعل لوجودنا معنى.",
    },
    {
      id: 4,
      text_ar:
        "مَا تَشَاوَرَ قَوْمٌ إِلَّا هُدُوا إِلَى رُشْدِهِمْ. اللَّؤْمُ أَنْ لَا تُشْكَرَ النِّعْمَةُ",
      person: "الإمام الحسن المجتبى (ع)",
      person_key: "imam_hasan",
      source_ar: "تحف العقول، من حكم الإمام الحسن بن علي (ع)",
      book_key: "tuhaf-hasan",
      tags: ["شورى", "شكر"],
      tafseer_ar:
        "الشورى تهدي إلى الرشد وتجمع العقول؛ وجحود النعمة أو عدم شكرها لؤم. الدرس: استشارة أهل الرأي تثمر قراراً أصوب، وشكر النعم واجب أخلاقي وديني.",
    },
    {
      id: 5,
      text_ar:
        "رَأْسُ الْعَقْلِ مُعَاشَرَةُ النَّاسِ بِالْجَمِيلِ، وَبِالْعَقْلِ تُدْرَكُ الدَّارَانِ جَمِيعاً",
      person: "الإمام الحسن المجتبى (ع)",
      person_key: "imam_hasan",
      source_ar: "تحف العقول، من حكم الإمام الحسن (ع)",
      book_key: "tuhaf-hasan-2",
      tags: ["عقل", "أخلاق"],
      tafseer_ar:
        "أعلى العقل أن تعاشر الناس بالجميل من القول والفعل؛ والعقل وسيلة فلاح الدنيا والآخرة. الدرس: حسن المعاشرة ثمرة العقل، والعقل طريق السعادة في الدارين.",
    },
    {
      id: 6,
      text_ar: "مَوْتٌ فِي عِزٍّ خَيْرٌ مِنْ حَيَاةٍ فِي ذُلٍّ",
      person: "الإمام الحسين (ع)",
      person_key: "imam_hussain",
      source_ar: "تحف العقول، من كلام الإمام الحسين بن علي (ع)",
      book_key: "tuhaf-hussain",
      tags: ["عزة", "كرامة"],
      tafseer_ar:
        "الموت مع العزة والكرامة خير من حياة يذل فيها المرء ويُهان. الكرامة أصيلة في الإنسان ولا تُباع. الدرس: لا نقدّم البقاء على حساب الكرامة؛ العزة مبدأ لا مساومة عليه.",
    },
    {
      id: 7,
      text_ar:
        "لَا تُصَاحِبُوا أَهْلَ الْبِدَعِ وَلَا تُجَالِسُوهُمْ فَتَصِيرُوا عِنْدَ النَّاسِ كَوَاحِدٍ مِنْهُمْ. قَالَ رَسُولُ اللَّهِ (ص): الْمَرْءُ عَلَى دِينِ خَلِيلِهِ وَقَرِينِهِ",
      person: "الإمام جعفر الصادق (ع)",
      person_key: "imam_sadiq",
      source_ar: "الكافي، ج ٢، ص ٦٤٢",
      book_key: "kafi-2-642",
      tags: ["صحبة", "دين"],
      tafseer_ar:
        "صحبة أهل البدع ومجالستهم تجرّ إلى التشبه بهم في أعين الناس، والمرء يُنسب إلى دين خليله. الاختيار في الصحبة يؤثر في الاعتقاد والسلوك. الدرس: نختار من نجالس؛ الصحبة الصالحة تحفظ الدين والعقل.",
    },
    /* النبي محمد (ص) */
    {
      id: 8,
      text_ar: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
      person: "النبي محمد (ص)",
      person_key: "prophet",
      source_ar: "مستدرك الوسائل، بحار الأنوار، وسائل الشيعة",
      book_key: "prophet-ahl",
      tags: ["أخلاق", "أسرة"],
      tafseer_ar:
        "خير الناس من يكون خيراً لأهله وذويه؛ الإحسان يبدأ من البيت. الدرس: صلاح المرء يُقاس بحسن تعامله مع أسرته قبل غيره.",
    },
    {
      id: 9,
      text_ar: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ وَمُسْلِمَةٍ",
      person: "النبي محمد (ص)",
      person_key: "prophet",
      source_ar: "الكافي، بحار الأنوار، وسائل الشيعة",
      book_key: "prophet-ilm",
      tags: ["علم", "تعلم"],
      tafseer_ar:
        "طلب العلم واجب على كل مسلم ومسلمة؛ لا فرق بين الرجل والمرأة في وجوب التعلم. الدرس: العلم فريضة دينية وحق إنساني.",
    },
    {
      id: 10,
      text_ar: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
      person: "النبي محمد (ص)",
      person_key: "prophet",
      source_ar: "الكافي، تحف العقول، بحار الأنوار",
      book_key: "prophet-islam",
      tags: ["إسلام", "أخلاق"],
      tafseer_ar:
        "من علامات حسن إسلام المرء أن يترك ما لا يعنيه من قول أو فعل؛ عدم التدخل في شؤون الآخرين دون فائدة. الدرس: ترك الفضول وكف اللسان من كمال الإسلام.",
    },
    {
      id: 11,
      text_ar: "الْمَرْءُ عَلَى دِينِ خَلِيلِهِ فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ",
      person: "النبي محمد (ص)",
      person_key: "prophet",
      source_ar: "الكافي، تحف العقول، وسائل الشيعة",
      book_key: "prophet-khalil",
      tags: ["صحبة", "دين"],
      tafseer_ar:
        "المرء يُقاس بدين وخلق خليله؛ الصحبة تؤثر في الاعتقاد والسلوك. الدرس: نختار الأصدقاء بحكمة لأنهم يحددون مسارنا.",
    },
    /* فاطمة الزهراء (ع) */
    {
      id: 12,
      text_ar: "مَنْ أَصْعَدَ إِلَى اللَّهِ خَالِصَ عِبَادَتِهِ أَهْبَطَ اللَّهُ لَهُ أَفْضَلَ مَصْلَحَتِهِ",
      person: "فاطمة الزهراء (ع)",
      person_key: "fatima",
      source_ar: "بحار الأنوار، أمالي الطوسي، بلاغة الزهراء",
      book_key: "fatima-ibada",
      tags: ["عبادة", "إخلاص"],
      tafseer_ar:
        "من رفع إلى الله عبادته خالصةً من رياء، أنزل الله له أفضل ما يصلح حاله في الدنيا والآخرة. الدرس: الإخلاص في العبادة يثمر صلاحاً في الحياة.",
    },
    {
      id: 13,
      text_ar: "الْجَارُ ثُمَّ الدَّارُ",
      person: "فاطمة الزهراء (ع)",
      person_key: "fatima",
      source_ar: "بحار الأنوار، أربعين حديث فاطمة الزهراء (ع)",
      book_key: "fatima-jar",
      tags: ["جوار", "أخلاق"],
      tafseer_ar:
        "كانت (ع) إذا دعت تدعو للجيران قبل الدار؛ تقديم حق الجار وحاجته. الدرس: الجار له حق عظيم؛ نبدأ به في الدعاء والإحسان.",
    },
    {
      id: 14,
      text_ar: "نَحْنُ وَسِيلَتُهُ فِي خَلْقِهِ، وَنَحْنُ خَاصَّتُهُ وَمَحَلُّ قُدْسِهِ",
      person: "فاطمة الزهراء (ع)",
      person_key: "fatima",
      source_ar: "بحار الأنوار، خطب الزهراء (ع)",
      book_key: "fatima-wasila",
      tags: ["أهل البيت", "ولاية"],
      tafseer_ar:
        "أهل البيت (ع) وسيلة الله في خلقه وخاصته؛ التمسك بهم طريق الهدى. الدرس: الولاية لأهل البيت من صميم الدين.",
    },
    /* أمير المؤمنين (ع) - إضافات */
    {
      id: 15,
      text_ar: "مَنْ نَصَبَ نَفْسَهُ لِلنَّاسِ إِمَاماً فَلْيَبْدَأْ بِتَعْلِيمِ نَفْسِهِ قَبْلَ تَعْلِيمِ غَيْرِهِ",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، الحكمة ٧٣",
      book_key: "nahj-73",
      tags: ["إمامة", "قدوة"],
      tafseer_ar:
        "من جعل نفسه إماماً للناس فليعلم نفسه أولاً؛ القائد يبدأ بإصلاح ذاته. الدرس: التعليم بالقدوة؛ لا نأمر بالمعروف قبل أن نفعله.",
    },
    {
      id: 16,
      text_ar: "الْعِلْمُ حَيَاةُ الْقُلُوبِ وَضِيَاءُ الْأَبْصَارِ",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، خطب ورسائل",
      book_key: "nahj-ilm",
      tags: ["علم", "قلب"],
      tafseer_ar:
        "العلم يحيي القلوب ويُنير البصائر؛ بدونه تموت القلوب وتعمى الأبصار. الدرس: طلب العلم من أعظم ما يحيي النفس.",
    },
    /* الإمام الحسن (ع) - إضافة */
    {
      id: 17,
      text_ar: "الْعَقْلُ حِلْيَةٌ وَالْأَدَبُ كَسْوَتُهُ وَالصَّمْتُ زَيْنٌ وَالْعِلْمُ نُورٌ",
      person: "الإمام الحسن المجتبى (ع)",
      person_key: "imam_hasan",
      source_ar: "تحف العقول، من حكم الإمام الحسن (ع)",
      book_key: "tuhaf-hasan-3",
      tags: ["عقل", "أدب"],
      tafseer_ar:
        "العقل حلية، والأدب كسوته، والصمت زين، والعلم نور. الدرس: الجمع بين العقل والأدب والصمت والعلم يكمّل الإنسان.",
    },
    /* الإمام الحسين (ع) - إضافة */
    {
      id: 18,
      text_ar: "إِنَّ اللَّهَ اشْتَرَى مِنَ الْمُؤْمِنِينَ أَنْفُسَهُمْ وَأَمْوَالَهُمْ بِأَنَّ لَهُمُ الْجَنَّةَ",
      person: "الإمام الحسين (ع)",
      person_key: "imam_hussain",
      source_ar: "تحف العقول، كلام الإمام الحسين (ع)، مع استشهاد بالقرآن",
      book_key: "tuhaf-hussain-2",
      tags: ["جهاد", "إيمان"],
      tafseer_ar:
        "الله اشترى من المؤمنين أنفسهم وأموالهم بالجنة؛ البذل في سبيل الله ثمنه الجنة. الدرس: الإيمان يقتضي الاستعداد لبذل النفس والمال في الحق.",
    },
    /* الإمام زين العابدين (ع) */
    {
      id: 19,
      text_ar: "إِنَّ أَبْغَضَ النَّاسِ إِلَى اللَّهِ مَنْ يَقْتَدِي بِسُنَّةِ إِمَامٍ وَلَا يَقْتَدِي بِأَعْمَالِهِ",
      person: "الإمام علي زين العابدين (ع)",
      person_key: "imam_sajjad",
      source_ar: "تحف العقول، بلاغة الإمام السجاد (ع)",
      book_key: "tuhaf-sajjad",
      tags: ["اقتداء", "عمل"],
      tafseer_ar:
        "أبغض الناس إلى الله من يتبع إماماً في القول ولا يتبعه في العمل؛ الاقتداء يكون بالعمل لا بالقول فقط. الدرس: نقتدي بأهل البيت بأفعالنا لا بألسنتنا فقط.",
    },
    {
      id: 20,
      text_ar: "حَقُّ الْجَارِ أَنْ لَا تَسْتَطِيلَ عَلَيْهِ بِالْبِنَاءِ فَتَحْجُبَ عَنْهُ الرِّيحَ",
      person: "الإمام علي زين العابدين (ع)",
      person_key: "imam_sajjad",
      source_ar: "رسالة الحقوق، تحف العقول",
      book_key: "sajjad-rights",
      tags: ["جوار", "حقوق"],
      tafseer_ar:
        "من حق الجار ألا تبنى بناءً يمنع عنه الريح؛ لا تضرّ بجوارك. الدرس: حقوق الجار تمتد إلى عدم الإضرار به في مسكنه وهواه.",
    },
    /* الإمام الباقر (ع) */
    {
      id: 21,
      text_ar: "إِنَّمَا يُدَاقُّ اللَّهُ الْعِبَادَ فِي الْحِسَابِ يَوْمَ الْقِيَامَةِ عَلَى قَدْرِ مَا آتَاهُمْ مِنَ الْعُقُولِ فِي الدُّنْيَا",
      person: "الإمام محمد الباقر (ع)",
      person_key: "imam_baqir",
      source_ar: "الكافي، كتاب العقل والجهل",
      book_key: "kafi-aql-baqir",
      tags: ["عقل", "حساب"],
      tafseer_ar:
        "الله يحاسب العباد يوم القيامة على قدر ما أعطاهم من العقول في الدنيا؛ من أُعطي عقلاً كُلف به. الدرس: العقل نعمة ومحل مساءلة؛ نستخدمه في الخير.",
    },
    {
      id: 22,
      text_ar: "لَمَّا خَلَقَ اللَّهُ الْعَقْلَ اسْتَنْطَقَهُ ثُمَّ قَالَ: وَعِزَّتِي وَجَلَالِي مَا خَلَقْتُ خَلْقاً هُوَ أَحَبُّ إِلَيَّ مِنْكَ",
      person: "الإمام محمد الباقر (ع)",
      person_key: "imam_baqir",
      source_ar: "الكافي، كتاب العقل والجهل، تحف العقول",
      book_key: "kafi-aql-creation",
      tags: ["عقل", "خلق"],
      tafseer_ar:
        "الله تعالى وصف العقل بأنه أحب الخلق إليه بعد استنطاقه؛ العقل من أعظم النعم. الدرس: تكريم العقل واستعماله من تعظيم نعمة الله.",
    },
    /* الإمام الصادق (ع) - إضافات */
    {
      id: 23,
      text_ar: "الْعَقْلُ مَا عُبِدَ بِهِ الرَّحْمَنُ وَاكْتُسِبَ بِهِ الْجِنَانُ",
      person: "الإمام جعفر الصادق (ع)",
      person_key: "imam_sadiq",
      source_ar: "الكافي، كتاب العقل والجهل",
      book_key: "kafi-aql-sadiq",
      tags: ["عقل", "عبادة"],
      tafseer_ar:
        "العقل هو ما يُعبد به الرحمن ويُكتسب به الجنان؛ به نعرف الله ونعمل لآخرتنا. الدرس: العقل أداة العبادة والفلاح.",
    },
    {
      id: 24,
      text_ar: "مَا مِنْ شَيْءٍ أَحْسَنَ مِنْ حِلْمٍ وَسَكَتٍ، وَمَا مِنْ شَيْءٍ أَسْوَأَ مِنْ جَهْلٍ وَصَخَبٍ",
      person: "الإمام جعفر الصادق (ع)",
      person_key: "imam_sadiq",
      source_ar: "تحف العقول، من حكم الإمام الصادق (ع)",
      book_key: "tuhaf-sadiq",
      tags: ["حلم", "صمت"],
      tafseer_ar:
        "لا شيء أحسن من حلم وسكوت، ولا شيء أسوأ من جهل وصخب. الدرس: الحلم مع الصمت جمال؛ الجهل مع الصخب قبح.",
    },
    /* الإمام الكاظم (ع) */
    {
      id: 25,
      text_ar: "نَوْمُ الْعَاقِلِ أَفْضَلُ مِنْ سَهَرِ الْجَاهِلِ. مَا قُسِمَ بَيْنَ الْعِبَادِ أَفْضَلُ مِنَ الْعَقْلِ",
      person: "الإمام موسى الكاظم (ع)",
      person_key: "imam_kadhim",
      source_ar: "تحف العقول، الكافي، كلام الإمام الكاظم لهشام بن الحكم",
      book_key: "kadhim-hisham",
      tags: ["عقل", "نوم"],
      tafseer_ar:
        "نوم العاقل خير من سهر الجاهل؛ وأفضل ما قُسم بين العباد العقل. الدرس: العقل أفضل المواهب؛ والعاقل أنفع في نومه من الجاهل في سهره.",
    },
    {
      id: 26,
      text_ar: "إِنَّ لِلَّهِ عَلَى النَّاسِ حَجَّتَيْنِ: حَجَّةً ظَاهِرَةً وَحَجَّةً بَاطِنَةً. فَالظَّاهِرَةُ الرُّسُلُ وَالْأَنْبِيَاءُ وَالْأَئِمَّةُ، وَالْبَاطِنَةُ الْعُقُولُ",
      person: "الإمام موسى الكاظم (ع)",
      person_key: "imam_kadhim",
      source_ar: "الكافي، تحف العقول",
      book_key: "kadhim-hujja",
      tags: ["حجة", "عقل"],
      tafseer_ar:
        "لله على الناس حجتان: ظاهرة (الرسل والأئمة) وباطنة (العقول). الدرس: العقل حجة داخلية؛ والأئمة حجة ظاهرة؛ بهما نصل إلى الحق.",
    },
    /* الإمام الرضا (ع) */
    {
      id: 27,
      text_ar: "صَدِيقُ كُلِّ امْرِئٍ عَقْلُهُ، وَعَدُوُّهُ جَهْلُهُ",
      person: "الإمام علي الرضا (ع)",
      person_key: "imam_rida",
      source_ar: "الكافي، تحف العقول، عيون أخبار الرضا",
      book_key: "rida-aql",
      tags: ["عقل", "جهل"],
      tafseer_ar:
        "صديق المرء عقله وعدوه جهله؛ العقل يوصلك والجهل يعاديك. الدرس: نستعين بالعقل ونتجنب الجهل في كل أمر.",
    },
    {
      id: 28,
      text_ar: "مَنْ وَصَلَ أَخَاهُ بِنَائِلٍ فَقَدْ وَصَلَ اللَّهَ",
      person: "الإمام علي الرضا (ع)",
      person_key: "imam_rida",
      source_ar: "تحف العقول، عيون أخبار الرضا",
      book_key: "rida-silat",
      tags: ["صلة", "إحسان"],
      tafseer_ar:
        "من وصل أخاه بنائل (عطية أو معروف) فقد وصل الله؛ الإحسان إلى المؤمنين قربة. الدرس: صلة الرحم والإخوان من صلة الله.",
    },
    /* الإمام الجواد (ع) */
    {
      id: 29,
      text_ar: "مَنْ أَطَاعَ هَوَاهُ أَعْطَى عَدُوَّهُ مُنَاهُ",
      person: "الإمام محمد الجواد (ع)",
      person_key: "imam_jawad",
      source_ar: "تحف العقول، بحار الأنوار",
      book_key: "jawad-hawa",
      tags: ["هوى", "طاعة"],
      tafseer_ar:
        "من أطاع هواه أعطى عدوه ما يريد؛ طاعة الهوى تضعف المرء وتقوي خصمه. الدرس: كبح الهوى يحفظ المرء من أعدائه.",
    },
    {
      id: 30,
      text_ar: "الْعُلَمَاءُ غُرَبَاءٌ لِكَثْرَةِ الْجُهَّالِ بَيْنَهُمْ",
      person: "الإمام محمد الجواد (ع)",
      person_key: "imam_jawad",
      source_ar: "تحف العقول، بحار الأنوار",
      book_key: "jawad-ulama",
      tags: ["علماء", "غربة"],
      tafseer_ar:
        "العلماء غرباء لكثرة الجهلاء بينهم؛ قلّة العالم وكثرة الجاهل. الدرس: العالم يبقى غريباً في مجتمع لا يقدر العلم؛ نقدّر العلماء.",
    },
    /* الإمام الهادي (ع) */
    {
      id: 31,
      text_ar: "النَّاسُ أَعْدَاءُ مَا جَهِلُوا",
      person: "الإمام علي الهادي (ع)",
      person_key: "imam_hadi",
      source_ar: "تحف العقول، بحار الأنوار",
      book_key: "hadi-jahl",
      tags: ["جهل", "عداوة"],
      tafseer_ar:
        "الناس أعداء ما جهلوا؛ الجهل يورث العداوة للشيء. الدرس: التعلم يزيل العداوة والتحامل؛ نطلب العلم لنتصالح مع الحق.",
    },
    {
      id: 32,
      text_ar: "الْمُؤْمِنُ يَحْتَاجُ إِلَى ثَلَاثِ خِصَالٍ: تَوْفِيقٍ مِنَ اللَّهِ، وَوَاعِظٍ مِنْ نَفْسِهِ، وَقَبُولٍ مِمَّنْ يَنْصَحُهُ",
      person: "الإمام علي الهادي (ع)",
      person_key: "imam_hadi",
      source_ar: "تحف العقول، بحار الأنوار",
      book_key: "hadi-thalath",
      tags: ["إيمان", "نصح"],
      tafseer_ar:
        "المؤمن يحتاج إلى توفيق من الله، وواعظ من نفسه، وقبول ممن ينصحه. الدرس: نجمع بين التوفيق والمحاسبة والقبول للنصح.",
    },
    /* الإمام العسكري (ع) */
    {
      id: 33,
      text_ar: "مِنْ أَكْبَرِ الذُّنُوبِ الْكِذْبُ، وَالْبُخْلُ، وَالْجُبْنُ",
      person: "الإمام الحسن العسكري (ع)",
      person_key: "imam_askari",
      source_ar: "تحف العقول، ميزان الحكمة، بحار الأنوار",
      book_key: "askari-kabair",
      tags: ["ذنوب", "أخلاق"],
      tafseer_ar:
        "من أكبر الذنوب الكذب والبخل والجبن؛ ثلاث خصال تهدم الدين والدنيا. الدرس: نتحرى الصدق والجود والشجاعة.",
    },
    {
      id: 34,
      text_ar: "الْعَقْلُ وَالْأَدَبُ أَفْضَلُ مِنَ الْعِلْمِ وَالْمَالِ",
      person: "الإمام الحسن العسكري (ع)",
      person_key: "imam_askari",
      source_ar: "تحف العقول، وصايا الإمام العسكري (ع)",
      book_key: "askari-aql",
      tags: ["عقل", "أدب"],
      tafseer_ar:
        "العقل والأدب أفضل من العلم والمال؛ العلم والمال ينفعان مع العقل والأدب. الدرس: نربّي العقل والأدب قبل الاكتفاء بالعلم والمال.",
    },
    /* الإمام المهدي (عج) */
    {
      id: 35,
      text_ar: "أَمَّا الْحَوَادِثُ الْوَاقِعَةُ فَارْجِعُوا فِيهَا إِلَى رُوَاةِ حَدِيثِنَا فَإِنَّهُمْ حُجَّتِي عَلَيْكُمْ وَأَنَا حُجَّةُ اللَّهِ",
      person: "الإمام المهدي (عج)",
      person_key: "imam_mahdi",
      source_ar: "إكمال الدين للصدوق، بحار الأنوار، توقيعات الإمام المهدي",
      book_key: "mahdi-hawadith",
      tags: ["رجوع", "فقه"],
      tafseer_ar:
        "في الحوادث الواقعة ارجعوا إلى رواة حديثنا فهم حجتي عليكم وأنا حجة الله. الدرس: في زمن الغيبة نرجع إلى الفقهاء الراوين لحديث أهل البيت.",
    },
    {
      id: 36,
      text_ar: "لَا تَظُنُّوا أَنَّ مَنْ لَمْ يَعْمَلْ بِمَا عَلِمَ لَنْ يَفُوزَ بِمَا يَرْجُو",
      person: "الإمام المهدي (عج)",
      person_key: "imam_mahdi",
      source_ar: "بحار الأنوار، توقيعات الإمام المهدي (عج)",
      book_key: "mahdi-amal",
      tags: ["علم", "عمل"],
      tafseer_ar:
        "لا تظنوا أن من لم يعمل بما علم لن يفوز بما يرجو؛ العلم بلا عمل لا ينجي. الدرس: العمل بالعلم شرط الفوز؛ نطبق ما نعلم.",
    },
    {
      id: 37,
      text_ar: "مَنْ أَحَبَّنَا أَهْلَ الْبَيْتِ فَلْيَسْعَ فِي حَوَائِجِ إِخْوَانِهِ وَيُؤْنِسَهُمْ فِي وَحْشَتِهِمْ",
      person: "الإمام المهدي (عج)",
      person_key: "imam_mahdi",
      source_ar: "بحار الأنوار، كمال الدين، توقيعات الإمام المهدي",
      book_key: "mahdi-ikhwan",
      tags: ["محبة", "إخوان"],
      tafseer_ar:
        "من أحبنا أهل البيت فليسع في حوائج إخوانه ويؤنسهم في وحشتهم. الدرس: محبة أهل البيت تظهر بالسعي في حوائج المؤمنين وإيناسهم.",
    },
    /* إضافات جديدة لزيادة عدد الحِكَم */
    {
      id: 38,
      text_ar: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ",
      person: "النبي محمد (ص)",
      person_key: "prophet",
      source_ar: "بحار الأنوار، مكارم الأخلاق، وسائل الشيعة",
      book_key: "prophet-makarim",
      tags: ["أخلاق", "دين"],
      tafseer_ar:
        "غاية بعثة النبي (ص) إكمال مكارم الأخلاق في الناس؛ فالدين ليس طقوساً فحسب بل هو تهذيب للنفس والخلق. الدرس: كل عبادة لا تثمر أخلاقاً زكية ناقصة الثمرة.",
    },
    {
      id: 39,
      text_ar: "اِرْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
      person: "النبي محمد (ص)",
      person_key: "prophet",
      source_ar: "الكافي، بحار الأنوار، ميزان الحكمة",
      book_key: "prophet-rahma",
      tags: ["أخلاق", "إحسان"],
      tafseer_ar:
        "الرحمة بالخلق سبب لنيل رحمة الخالق؛ ما تبذله من لين وشفقة يعود عليك خيره. الدرس: لا يُحرَم العبد من رحمة الله إلا إذا قسا قلبه على عباده.",
    },
    {
      id: 40,
      text_ar: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضاً",
      person: "النبي محمد (ص)",
      person_key: "prophet",
      source_ar: "الكافي، بحار الأنوار، مستدرك الوسائل",
      book_key: "prophet-bunyan",
      tags: ["إخوان", "أخلاق"],
      tafseer_ar:
        "شُبِّه المؤمنون بالبنيان المتماسك؛ كل جزء يسند الآخر. الدرس: ضعفك يُقوَّى بأخيك، وقوّتك تُسند غيرك؛ فلا مكان للفردية المعزولة.",
    },
    /* أمير المؤمنين (ع) – من نهج البلاغة */
    {
      id: 41,
      text_ar: "مَنْ عَظَّمَ صِغَارَ الْمَصَائِبِ ابْتَلَاهُ اللَّهُ بِكِبَارِهَا",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، من حِكم أمير المؤمنين (ع)",
      book_key: "nahj-sigar",
      tags: ["صبر", "حكمة"],
      tafseer_ar:
        "من يجزع من أدنى المصائب لا يحتمل أعظمها؛ فيؤدَّب بالبلاء الأكبر. الدرس: تربية النفس على الصبر في الصغائر تمهيد لتحمل الشدائد الكبرى.",
    },
    {
      id: 42,
      text_ar: "مَا مَزَحَ امْرُؤٌ مَزْحَةً إِلَّا مَجَّ مِنْ عَقْلِهِ مَجَّةً",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، من حِكم أمير المؤمنين (ع)",
      book_key: "nahj-mazh",
      tags: ["حكمة", "أدب"],
      tafseer_ar:
        "المزاح إذا تجاوز حدَّه أذهب من وقار العقل؛ كل مزحة غير منضبطة تنقص من هيبة صاحبها. الدرس: الاعتدال في المزاح جزء من أدب المؤمن.",
    },
    {
      id: 43,
      text_ar: "مَنْهُومَانِ لَا يَشْبَعَانِ: طَالِبُ عِلْمٍ وَطَالِبُ دُنْيَا",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، من حِكم أمير المؤمنين (ع)",
      book_key: "nahj-manhuman",
      tags: ["علم", "حياة"],
      tafseer_ar:
        "اثنان لا يشبعان: من يطلب العلم ومن يطلب الدنيا؛ لكن بينهما بون شاسع. الدرس: إن كان لا بد من النهم فليكن نهماً في طلب العلم والمعرفة لا في جمع الدنيا.",
    },
    {
      id: 44,
      text_ar: "مَنْ كَرُمَتْ عَلَيْهِ نَفْسُهُ هَانَتْ عَلَيْهِ شَهْوَتُهُ",
      person: "أمير المؤمنين علي بن أبي طالب (ع)",
      person_key: "imam_ali",
      source_ar: "نهج البلاغة، من حِكم أمير المؤمنين (ع)",
      book_key: "nahj-karama",
      tags: ["كرامة", "هوى"],
      tafseer_ar:
        "من عظُمَت عنده نفسه لم يَهن أمام شهوته؛ كرامة النفس أقوى من إغراء الشهوة. الدرس: تعزيز كرامة النفس سبيل عملي لكسر التبعية للهوى.",
    },
    /* الإمام جعفر الصادق (ع) – إضافات */
    {
      id: 45,
      text_ar: "كُونُوا لَنَا زَيْناً وَلَا تَكُونُوا عَلَيْنَا شَيْناً",
      person: "الإمام جعفر الصادق (ع)",
      person_key: "imam_sadiq",
      source_ar: "الكافي، كتاب الإيمان والكفر، تحف العقول",
      book_key: "sadiq-zayn",
      tags: ["إيمان", "أخلاق"],
      tafseer_ar:
        "أمر الإمام شيعته أن يكونوا زينةً لأهل البيت لا سبباً للعيب عليهم؛ بأخلاقهم وأمانتهم وصدقهم. الدرس: الانتساب لأهل البيت مسؤولية سلوك قبل أن يكون شعاراً.",
    },
    {
      id: 46,
      text_ar: "لَيْسَ مِنَّا مَنْ لَمْ يُحَاسِبْ نَفْسَهُ كُلَّ يَوْمٍ",
      person: "الإمام جعفر الصادق (ع)",
      person_key: "imam_sadiq",
      source_ar: "الكافي، كتاب الإيمان والكفر، بحار الأنوار",
      book_key: "sadiq-muhasaba",
      tags: ["إيمان", "عمل"],
      tafseer_ar:
        "المؤمن يراجع أعماله كل يوم؛ يحاسب نفسه قبل أن يُحاسَب. الدرس: المحاسبة اليومية طريق لإصلاح العيوب وتثبيت الطاعات.",
    },
    /* الإمام موسى الكاظم (ع) – إضافة */
    {
      id: 47,
      text_ar: "لَيْسَ مِنَ الْحِكْمَةِ الْمُنَاظَرَةُ مَعَ الْجَاهِلِ",
      person: "الإمام موسى الكاظم (ع)",
      person_key: "imam_kadhim",
      source_ar: "تحف العقول، مواعظ الإمام الكاظم (ع)",
      book_key: "kadhim-jahil",
      tags: ["حكمة", "عقل"],
      tafseer_ar:
        "الجدال مع الجاهل يضيع الوقت ولا يهديه؛ إذ لا يطلب حقاً بل غلبة. الدرس: لا تستهلك طاقتك في مناظرات عقيمة؛ وجّهها لمن يطلب الحق.",
    },
  ];

  const TOPICS = [
    {
      key: "sabr",
      name_ar: "الصبر",
      description: "الصبر على البلاء، وطول النفس في طريق الطاعة، والثبات عند الشدائد.",
      long_description:
        "موضوعات تتعلّق بالصبر على البلاء، وحسن تحمّل الامتحانات الإلهية، وطول النفس في طريق الطاعة والثبات على الحق.",
    },
    {
      key: "hikma",
      name_ar: "الحكمة",
      description: "ميزان الكلام، وبناء البصيرة، والنظر العميق إلى الحياة.",
      long_description:
        "حِكَم تتناول معنى الحكمة وبناء البصيرة، وكيف يزن المؤمن كلماته وقراراته بنور العقل والإيمان.",
    },
    {
      key: "ilm",
      name_ar: "العلم",
      description: "فضل طلب العلم، وشرف العالم، وفقه الدين.",
      long_description:
        "أقوال في طلب العلم وفضله، وشرف العالم والفقيه، وكيف يكون العلم حياةً للقلوب وضياءً للأبصار.",
    },
    {
      key: "leadership",
      name_ar: "القيادة",
      description: "معاني الإمامة والقدوة ومسؤولية من يتصدر للناس.",
      long_description:
        "حِكَم عن الإمامة والقدوة، ومسؤولية من ينصب نفسه قائداً للناس في التعليم والتوجيه والعمل قبل القول.",
    },
    {
      key: "wealth",
      name_ar: "المال",
      description: "المال كنعمة ومسؤولية، والبذل في سبيل الله.",
      long_description:
        "نظرات متوازنة للمال بوصفه نعمةً وأمانة، وفضيلة البذل في سبيل الله وخدمة الخلق وعدم التعلّق بالدنيا.",
    },
    {
      key: "akhlaq",
      name_ar: "الأخلاق",
      description: "الصدق، والرفق، وصلة الرحم، وحسن المعاشرة.",
      long_description:
        "باب يشمل مكارم الأخلاق: الصدق، والجود، وصلة الرحم، وحسن العشرة مع الأهل والناس، وحقوق الجار والإخوان.",
    },
    {
      key: "tawadu",
      name_ar: "التواضع",
      description: "خفض الجناح، وكسر الكِبر، ورؤية النقص في النفس.",
      long_description:
        "حِكَم تربي على خفض الجناح، وكسر الكِبر، وتقديم الآخرين، ورؤية النفس مقصّرة مهما عملت.",
    },
    {
      key: "quwa",
      name_ar: "القوة",
      description: "العزة والشجاعة وضبط الهوى أمام الفتن.",
      long_description:
        "قوة المؤمن في عزّته وشجاعته وضبطه لهواه، لا في الظلم ولا في كسر كرامة الآخرين.",
    },
    {
      key: "life",
      name_ar: "الحياة",
      description: "معنى الحياة الطيبة وقيمة الإنسان ومساره.",
      long_description:
        "تأملات في معنى الحياة الطيبة، وقيمة الإنسان بما يحسن، وكيف يُصنع المعنى في العمر والوجود.",
    },
    {
      key: "work",
      name_ar: "العمل",
      description: "العمل بالعلم، والسعي الجاد، وترجمة الإيمان إلى فعل.",
      long_description:
        "حِكَم تؤكد أن العلم بلا عمل لا ينجي، وأن الإيمان يُترجَم إلى عملٍ نافع وسعي جاد في الدنيا والآخرة.",
    },
  ];

  function getTopicByKey(key) {
    if (!key) return null;
    return (
      TOPICS.find(function (t) {
        return t.key === key;
      }) || null
    );
  }

  function computeTopicsForQuote(quote) {
    var result = [];
    var tags = Array.isArray(quote.tags) ? quote.tags : [];
    var text = quote.text_ar || "";

    function add(topicKey) {
      if (!topicKey) return;
      if (result.indexOf(topicKey) === -1) result.push(topicKey);
    }

    tags.forEach(function (tag) {
      if (tag === "صبر") add("sabr");
      if (tag === "جهاد") {
        add("sabr");
        add("quwa");
      }
      if (["حكمة", "قيمة", "محبة", "إيمان", "دين"].indexOf(tag) !== -1) add("hikma");
      if (["علم", "تعلم", "علماء", "فقه", "حساب", "حجة", "خلق"].indexOf(tag) !== -1) add("ilm");
      if (["إمامة", "قدوة"].indexOf(tag) !== -1) add("leadership");
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
          "إخوان",
        ].indexOf(tag) !== -1
      )
        add("akhlaq");
      if (["أدب", "حلم", "صمت", "تواضع"].indexOf(tag) !== -1) add("tawadu");
      if (["عزة", "كرامة", "جهاد", "شجاعة", "هوى", "نوم"].indexOf(tag) !== -1) add("quwa");
      if (["عمل", "عبادة", "إخلاص", "طاعة", "نصح"].indexOf(tag) !== -1) add("work");
      if (["قلب", "إيمان", "دين", "حياة", "صحبة", "جوار"].indexOf(tag) !== -1) add("life");
      if (["مال", "نائل", "أموال"].indexOf(tag) !== -1) add("wealth");
    });

    if (!result.length) {
      if (text.indexOf("الصبر") !== -1 || text.indexOf("صبر") !== -1) add("sabr");
      if (text.indexOf("علم") !== -1 || text.indexOf("عِلْم") !== -1) add("ilm");
      if (text.indexOf("مال") !== -1 || text.indexOf("أموال") !== -1) add("wealth");
    }

    if (!result.length) add("life");

    return result;
  }

  function quoteHasTopic(quote, topicKey) {
    if (!topicKey) return true;
    var topics = computeTopicsForQuote(quote);
    return topics.indexOf(topicKey) !== -1;
  }

  function getQuotesByTopic(topicKey) {
    if (!topicKey) return [];
    return quotes.filter(function (q) {
      return quoteHasTopic(q, topicKey);
    });
  }

  let quoteTextEl, personEl, sourceEl, filterSelect, topicFilterSelect, newQuoteBtn;
  let currentQuote = null;
  let landingViewEl, mainViewEl, hikmaPageEl, hikmaBackEl, hikmaTafseerEl, hikmaSourceEl;
  let topicPageEl, topicBackEl, topicTitleEl, topicDescriptionEl, topicHikamListEl;
  let currentTopicKey = null;
  let lastView = "main";
  let hikmaInstagramTextEl, hikmaInstagramPersonEl, hikmaInstagramCardEl, hikmaDownloadBtnEl;
  let hikmaWallpaperBtnEl, hikmaWallpaperSourceEl, wallpaperFormatRadios, wallpaperResolutionSelect, wallpaperResolutionWrap;
  const HIKMA_PALETTES = ["classic", "emerald", "cream", "sand", "navy"];
  const HIKMA_PALETTE_STORAGE_KEY = "hikma-palette";
  const WALLPAPER_SIZES = {
    iphone: { width: 1290, height: 2796 },
    "2560x1440": { width: 2560, height: 1440 },
    "1920x1080": { width: 1920, height: 1080 },
  };

  var WALLPAPER_PALETTE_COLORS = {
    classic: {
      bg: "#1a1a1a",
      border: "#f5f5f0",
      text: "#f5f5f0",
      person: "rgba(245,245,240,0.75)",
      logo: "rgba(245,245,240,0.4)",
    },
    emerald: {
      bg: "#0a1f12",
      border: "#b8860b",
      text: "#e8c547",
      person: "rgba(232,197,71,0.9)",
      logo: "rgba(232,197,71,0.45)",
    },
    cream: {
      bg: "#f2ede2",
      border: "#1a3324",
      text: "#0f2618",
      person: "rgba(15,38,24,0.8)",
      logo: "rgba(15,38,24,0.45)",
    },
    sand: {
      bg: "#e5ddd2",
      border: "#4a3728",
      text: "#2c2118",
      person: "rgba(44,33,24,0.85)",
      logo: "rgba(44,33,24,0.45)",
    },
    navy: {
      bg: "#0f1729",
      border: "#94a3b8",
      text: "#e2e8f0",
      person: "rgba(226,232,240,0.85)",
      logo: "rgba(148,163,184,0.5)",
    },
  };

  function getQuoteById(id) {
    const num = parseInt(id, 10);
    return quotes.find(function (q) {
      return q.id === num;
    }) || null;
  }

  function getFilteredQuotes() {
    const personValue = filterSelect ? filterSelect.value : "";
    const topicValue = topicFilterSelect ? topicFilterSelect.value : "";
    return quotes.filter(function (q) {
      if (personValue && q.person_key !== personValue) return false;
      if (topicValue && !quoteHasTopic(q, topicValue)) return false;
      return true;
    });
  }

  function getRandomQuote(list) {
    if (!list || list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  }

  function renderQuote(quote) {
    currentQuote = quote;
    if (!quote) {
      if (quoteTextEl) quoteTextEl.textContent = "لا توجد حِكَم معروضة لهذا الاختيار حالياً.";
      if (personEl) personEl.textContent = "";
      if (sourceEl) sourceEl.textContent = "";
      return;
    }
    if (quoteTextEl) quoteTextEl.textContent = quote.text_ar;
    if (personEl) personEl.textContent = quote.person;
    if (sourceEl) sourceEl.textContent = "المصدر: " + quote.source_ar;
  }

  function showMainView() {
    if (landingViewEl) landingViewEl.hidden = false;
    if (hikmaPageEl) hikmaPageEl.hidden = true;
    if (topicPageEl) topicPageEl.hidden = true;
    history.replaceState(null, "", window.location.pathname || "/");
    lastView = "main";
  }

  function showHikmaPage(quote) {
    if (!quote) return;
    currentQuote = quote;
    if (landingViewEl) landingViewEl.hidden = true;
    if (topicPageEl) topicPageEl.hidden = true;
    if (hikmaPageEl) hikmaPageEl.hidden = false;
    history.replaceState(null, "", "#hikma/" + quote.id);

    if (hikmaTafseerEl) hikmaTafseerEl.textContent = quote.tafseer_ar || "";
    if (hikmaSourceEl) hikmaSourceEl.textContent = "المصدر: " + quote.source_ar;
    if (hikmaInstagramTextEl) hikmaInstagramTextEl.textContent = quote.text_ar;
    if (hikmaInstagramPersonEl) hikmaInstagramPersonEl.textContent = quote.person;
  }

  function showTopicPage(topicKey) {
    var topic = getTopicByKey(topicKey);
    currentTopicKey = topicKey;
    lastView = "topic";

    if (!topic || !topicPageEl) {
      showMainView();
      return;
    }

    if (landingViewEl) landingViewEl.hidden = true;
    if (hikmaPageEl) hikmaPageEl.hidden = true;
    topicPageEl.hidden = false;

    history.replaceState(null, "", "#topic/" + topicKey);

    if (topicTitleEl) topicTitleEl.textContent = topic.name_ar;
    if (topicDescriptionEl)
      topicDescriptionEl.textContent = topic.long_description || topic.description || "";

    if (topicHikamListEl) {
      var list = getQuotesByTopic(topicKey);
      topicHikamListEl.innerHTML = "";

      if (!list.length) {
        var empty = document.createElement("p");
        empty.className = "topic-page-description";
        empty.textContent = "لا توجد حِكَم لهذا الموضوع حالياً.";
        topicHikamListEl.appendChild(empty);
      } else {
        list.forEach(function (quote) {
          var card = document.createElement("article");
          card.className = "topic-hikma-card";

          var textEl = document.createElement("p");
          textEl.className = "topic-hikma-text";
          textEl.textContent = quote.text_ar;

          var meta = document.createElement("div");
          meta.className = "topic-hikma-meta";

          var person = document.createElement("p");
          person.className = "topic-hikma-person";
          person.textContent = quote.person;

          var source = document.createElement("p");
          source.className = "topic-hikma-source";
          source.textContent = "المصدر: " + quote.source_ar;

          meta.appendChild(person);
          meta.appendChild(source);

          var openBtn = document.createElement("button");
          openBtn.type = "button";
          openBtn.className = "primary-button topic-hikma-open";
          openBtn.textContent = "فتح الحكمة كاملة";
          openBtn.addEventListener("click", function () {
            lastView = "topic";
            showHikmaPage(quote);
          });

          card.appendChild(textEl);
          card.appendChild(meta);
          card.appendChild(openBtn);

          topicHikamListEl.appendChild(card);
        });
      }
    }
  }

  function routeFromHash() {
    const hash = window.location.hash || "";

    const topicMatch = hash.match(/^#topic\/([a-zA-Z0-9_-]+)$/);
    if (topicMatch) {
      showTopicPage(topicMatch[1]);
      return;
    }

    const hikmaMatch = hash.match(/^#hikma\/(\d+)$/);
    if (hikmaMatch) {
      const quote = getQuoteById(hikmaMatch[1]);
      if (quote) {
        lastView = "main";
        showHikmaPage(quote);
        return;
      }
    }

    if (hash === "#topics") {
      showMainView();
      var topicsSection = document.getElementById("topics");
      if (topicsSection) {
        topicsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    showMainView();
  }

  function downloadInstagramCard() {
    if (!hikmaInstagramCardEl || !currentQuote) return;
    if (typeof html2canvas === "undefined") {
      alert("تحميل الصورة غير متاح حالياً. جرّب لاحقاً.");
      return;
    }
    html2canvas(hikmaInstagramCardEl, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    }).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "hikma-" + currentQuote.id + ".png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  function getCurrentPalette() {
    var radio = document.querySelector('input[name="hikma-palette"]:checked');
    return radio && HIKMA_PALETTES.includes(radio.value) ? radio.value : "classic";
  }

  function getWallpaperFormat() {
    var radio = document.querySelector('input[name="hikma-wallpaper-format"]:checked');
    return radio ? radio.value : "iphone";
  }

  function getWallpaperResolution() {
    var sel = document.getElementById("wallpaper-resolution");
    if (!sel) return "2560x1440";
    var v = sel.value;
    return v === "1920x1080" ? "1920x1080" : "2560x1440";
  }

  /**
   * Render wallpaper to canvas (no html2canvas — avoids off-screen/layout issues).
   * Returns a canvas element ready for toDataURL/download.
   */
  function renderWallpaperToCanvas(quote, format, palette, width, height) {
    var colors = WALLPAPER_PALETTE_COLORS[palette] || WALLPAPER_PALETTE_COLORS.classic;
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Base background (card background color)
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    // Subtle vignette similar to Instagram wrapper
    var maxRadius = Math.max(width, height) * 0.7;
    var vignette = ctx.createRadialGradient(width / 2, height / 2, width * 0.1, width / 2, height / 2, maxRadius);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.18)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);

    // Double border frame (outer + inner) similar to Instagram card
    var borderColor = colors.border || colors.text;
    // Thicker, more pronounced frame
    var outerThickness = Math.max(4, Math.round(width * 0.008));
    var innerThickness = Math.max(2, Math.round(width * 0.0045));
    var gap = Math.round(outerThickness * 1.5); // wider space between outer and inner

    ctx.strokeStyle = borderColor;

    // Outer border
    ctx.lineWidth = outerThickness;
    var outerOffset = outerThickness / 2;
    ctx.strokeRect(outerOffset, outerOffset, width - outerThickness, height - outerThickness);

    // Inner border
    var innerMargin = outerThickness + gap;
    var innerOffset = innerMargin + innerThickness / 2;
    var innerWidth = width - 2 * innerMargin - innerThickness;
    var innerHeight = height - 2 * innerMargin - innerThickness;
    if (innerWidth > 0 && innerHeight > 0) {
      ctx.lineWidth = innerThickness;
      ctx.strokeRect(innerOffset, innerOffset, innerWidth, innerHeight);
    }

    // Extra breathing room so the frame feels more substantial
    var paddingPct = format === "iphone" ? 0.12 : 0.14;
    var maxTextWidth = width * (1 - 2 * paddingPct);
    var centerX = width / 2;
    // Slightly larger typography so the Hikma feels more like a poster
    var quoteFontSize = format === "iphone" ? Math.round(width * 0.06) : Math.round(width * 0.036);
    var personFontSize = format === "iphone" ? Math.round(width * 0.034) : Math.round(width * 0.024);
    var logoFontSize = Math.round(width * 0.02);
    var lineHeight = 1.65;
    var quoteFont = "700 " + quoteFontSize + "px Amiri, serif";
    var personFont = "600 " + personFontSize + "px Amiri, serif";
    var logoFont = "600 " + logoFontSize + "px Amiri, serif";

    ctx.direction = "rtl";
    ctx.textAlign = "center";

    function wrapLines(text, font, maxW) {
      ctx.font = font;
      var words = text.split(/\s+/);
      var lines = [];
      var current = "";
      for (var i = 0; i < words.length; i++) {
        var test = current ? current + " " + words[i] : words[i];
        var m = ctx.measureText(test);
        if (m.width <= maxW) {
          current = test;
        } else {
          if (current) lines.push(current);
          current = words[i];
        }
      }
      if (current) lines.push(current);
      return lines;
    }

    var quoteLines = wrapLines(quote.text_ar, quoteFont, maxTextWidth);
    var lineHeightPx = quoteFontSize * lineHeight;
    var totalQuoteHeight = quoteLines.length * lineHeightPx;
    var personGap = personFontSize * 0.8;
    var logoAreaHeight = height * (format === "iphone" ? 0.08 : 0.06);
    var safeTop = format === "iphone" ? height * 0.22 : height * 0.12;
    var safeBottom = format === "iphone" ? height * 0.20 : height * 0.18;
    var contentHeight = totalQuoteHeight + personGap + personFontSize;
    var availableVertical = height - safeTop - safeBottom - logoAreaHeight;
    var contentTop = safeTop + Math.max(0, (availableVertical - contentHeight) / 2);
    var startY = contentTop + quoteFontSize;

    ctx.fillStyle = colors.text;
    ctx.font = quoteFont;
    for (var j = 0; j < quoteLines.length; j++) {
      ctx.fillText(quoteLines[j], centerX, startY + j * lineHeightPx);
    }

    var personY = startY + quoteLines.length * lineHeightPx + personGap;
    ctx.fillStyle = colors.person;
    ctx.font = personFont;
    ctx.fillText(quote.person, centerX, personY);

    ctx.fillStyle = colors.logo;
    ctx.font = logoFont;
    var logoY = height - logoAreaHeight / 2;
    ctx.fillText("\u062D\u0643\u0645", centerX, logoY);

    return canvas;
  }

  function downloadWallpaper() {
    if (!currentQuote) {
      alert("الرجاء فتح حكمة أولاً.");
      return;
    }
    var format = getWallpaperFormat();
    var palette = getCurrentPalette();
    var size;
    if (format === "iphone") {
      size = WALLPAPER_SIZES.iphone;
    } else {
      var res = getWallpaperResolution();
      size = WALLPAPER_SIZES[res] || WALLPAPER_SIZES["2560x1440"];
    }
    function doRender() {
      try {
        var canvas = renderWallpaperToCanvas(currentQuote, format, palette, size.width, size.height);
        if (!canvas) {
          alert("لم يتم إنشاء الخلفية. جرّب مرة أخرى.");
          return;
        }
        var link = document.createElement("a");
        link.download = "hikma-wallpaper-" + currentQuote.id + "-" + format + ".png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (err) {
        console.error("Wallpaper error:", err);
        alert("لم يتم إنشاء الخلفية. جرّب مرة أخرى.");
      }
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(doRender).catch(doRender);
    } else {
      doRender();
    }
  }

  function toggleWallpaperResolutionVisibility() {
    var format = getWallpaperFormat();
    if (wallpaperResolutionWrap) {
      wallpaperResolutionWrap.hidden = format !== "desktop";
      wallpaperResolutionWrap.setAttribute("aria-hidden", format !== "desktop");
    }
  }

  function showRandomQuote() {
    const list = getFilteredQuotes();
    const quote = getRandomQuote(list);
    renderQuote(quote);
  }

  function init() {
    quoteTextEl = document.getElementById("quote-text");
    personEl = document.getElementById("quote-person");
    sourceEl = document.getElementById("quote-source");
    filterSelect = document.getElementById("person-filter");
    topicFilterSelect = document.getElementById("topic-filter");
    newQuoteBtn = document.getElementById("new-quote-btn");
    landingViewEl = document.getElementById("landing-view");
    mainViewEl = document.getElementById("main-view");
    hikmaPageEl = document.getElementById("hikma-page");
    hikmaBackEl = document.getElementById("hikma-back");
    hikmaTafseerEl = document.getElementById("hikma-tafseer-text");
    hikmaSourceEl = document.getElementById("hikma-source");
    hikmaInstagramTextEl = document.getElementById("hikma-instagram-text");
    hikmaInstagramPersonEl = document.getElementById("hikma-instagram-person");
    hikmaInstagramCardEl = document.getElementById("hikma-instagram-card");
    hikmaDownloadBtnEl = document.getElementById("hikma-download-btn");
    hikmaWallpaperBtnEl = document.getElementById("hikma-wallpaper-btn");
    hikmaWallpaperSourceEl = document.getElementById("hikma-wallpaper-source");
    wallpaperFormatRadios = document.querySelectorAll('input[name="hikma-wallpaper-format"]');
    wallpaperResolutionSelect = document.getElementById("wallpaper-resolution");
    wallpaperResolutionWrap = document.getElementById("wallpaper-resolution-wrap");
    topicPageEl = document.getElementById("topic-page");
    topicBackEl = document.getElementById("topic-back");
    topicTitleEl = document.getElementById("topic-title");
    topicDescriptionEl = document.getElementById("topic-description");
    topicHikamListEl = document.getElementById("topic-hikam-list");

    if (!quoteTextEl || !personEl || !sourceEl) return;

    showRandomQuote();
    routeFromHash();

    if (newQuoteBtn) {
      newQuoteBtn.addEventListener("click", showRandomQuote);
    }
    if (filterSelect) {
      filterSelect.addEventListener("change", showRandomQuote);
    }
    if (topicFilterSelect) {
      topicFilterSelect.addEventListener("change", showRandomQuote);
    }

    window.addEventListener("hashchange", routeFromHash);

    var quoteCard = document.getElementById("quote-card");
    if (quoteCard) {
      quoteCard.addEventListener("click", function () {
        if (currentQuote) {
          lastView = "main";
          showHikmaPage(currentQuote);
        }
      });
      quoteCard.addEventListener("keydown", function (e) {
        if ((e.key === "Enter" || e.key === " ") && currentQuote) {
          e.preventDefault();
          lastView = "main";
          showHikmaPage(currentQuote);
        }
      });
    }

    if (hikmaBackEl) {
      hikmaBackEl.addEventListener("click", function (e) {
        e.preventDefault();
        if (lastView === "topic" && currentTopicKey) {
          showTopicPage(currentTopicKey);
        } else {
          showMainView();
          var explore = document.getElementById("explore");
          if (explore) {
            explore.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    }

    if (topicBackEl) {
      topicBackEl.addEventListener("click", function (e) {
        e.preventDefault();
        currentTopicKey = null;
        showMainView();
        var topicsSection = document.getElementById("topics");
        if (topicsSection) {
          topicsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    var topicCards = document.querySelectorAll(".topic-card[data-topic-key]");
    topicCards.forEach(function (card) {
      card.addEventListener("click", function () {
        var key = card.getAttribute("data-topic-key");
        if (key) {
          showTopicPage(key);
        }
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (href === "#") return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    if (hikmaDownloadBtnEl) {
      hikmaDownloadBtnEl.addEventListener("click", downloadInstagramCard);
    }

    if (hikmaWallpaperBtnEl) {
      hikmaWallpaperBtnEl.addEventListener("click", downloadWallpaper);
    }
    toggleWallpaperResolutionVisibility();
    if (wallpaperFormatRadios && wallpaperFormatRadios.length) {
      wallpaperFormatRadios.forEach(function (radio) {
        radio.addEventListener("change", toggleWallpaperResolutionVisibility);
      });
    }

    /* Palette selector: apply saved or default, then listen for changes */
    var paletteRadios = document.querySelectorAll('input[name="hikma-palette"]');
    var cardWrapper = hikmaInstagramCardEl && hikmaInstagramCardEl.closest(".hikma-instagram-card-wrapper");
    function applyPalette(value) {
      if (!HIKMA_PALETTES.includes(value)) value = "classic";
      if (hikmaInstagramCardEl) hikmaInstagramCardEl.setAttribute("data-palette", value);
      if (cardWrapper) cardWrapper.setAttribute("data-palette", value);
      try {
        localStorage.setItem(HIKMA_PALETTE_STORAGE_KEY, value);
      } catch (e) {}
      paletteRadios.forEach(function (radio) {
        radio.checked = radio.value === value;
      });
    }
    var savedPalette = null;
    try {
      savedPalette = localStorage.getItem(HIKMA_PALETTE_STORAGE_KEY);
    } catch (e) {}
    applyPalette(savedPalette && HIKMA_PALETTES.includes(savedPalette) ? savedPalette : "classic");
    paletteRadios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (this.checked) applyPalette(this.value);
      });
    });
  }

  /* ----- Gallery carousel ----- */
  function initGallery() {
    const track = document.getElementById("gallery-track");
    const prevBtn = document.getElementById("gallery-prev");
    const nextBtn = document.getElementById("gallery-next");
    const dotsContainer = document.getElementById("gallery-dots");
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    const slides = track.querySelectorAll(".gallery-slide");
    const total = slides.length;
    if (total === 0) return;

    let currentIndex = 0;

    function goToSlide(index) {
      currentIndex = (index + total) % total;
      track.style.setProperty("--current-index", String(currentIndex));
      dotsContainer.querySelectorAll("[role=tab]").forEach(function (dot, i) {
        dot.setAttribute("aria-selected", i === currentIndex ? "true" : "false");
      });
    }

    function prev() {
      goToSlide(currentIndex - 1);
    }
    function next() {
      goToSlide(currentIndex + 1);
    }

    dotsContainer.innerHTML = "";
    for (var i = 0; i < total; i++) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.role = "tab";
      btn.setAttribute("aria-label", "صورة " + (i + 1));
      btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      (function (idx) {
        btn.addEventListener("click", function () {
          goToSlide(idx);
        });
      })(i);
      dotsContainer.appendChild(btn);
    }

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

    var touchStartX = 0;
    var touchEndX = 0;
    track.parentElement.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    track.parentElement.addEventListener(
      "touchend",
      function (e) {
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (document.dir === "rtl") {
            if (diff > 0) next();
            else prev();
          } else {
            if (diff > 0) next();
            else prev();
          }
        }
      },
      { passive: true }
    );

    document.addEventListener("keydown", function (e) {
      var region = document.querySelector(".gallery-carousel");
      if (!region || !region.contains(document.activeElement)) return;
      var isRtl = document.documentElement.getAttribute("dir") === "rtl";
      if (e.key === "ArrowRight") {
        e.preventDefault();
        isRtl ? prev() : next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        isRtl ? next() : prev();
      }
    });

    goToSlide(0);
  }

  function initTheme() {
    var STORAGE_KEY = "hikma-theme";
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");

    function getPreferredTheme() {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return stored;
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
      return "dark";
    }

    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      if (btn) {
        btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
        btn.setAttribute("aria-label", theme === "light" ? "تفعيل المظهر الداكن" : "تفعيل المظهر الفاتح");
      }
    }

    function toggleTheme() {
      var current = root.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    }

    applyTheme(getPreferredTheme());

    if (btn) {
      btn.addEventListener("click", toggleTheme);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init();
      initGallery();
      initTheme();
    });
  } else {
    init();
    initGallery();
    initTheme();
  }
})();
