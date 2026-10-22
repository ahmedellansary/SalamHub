/* ═════════════════════════════════════════════════════════════════════
   SalamHub — Interactive Platform Logic & Dynamic Multilingual Engine
   ═════════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════
   1. TRANSLATION DICTIONARIES
══════════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    'nav.path': 'My Path',
    'nav.myths': 'Myths Busted',
    'nav.debates': 'Debates',
    'nav.ask': 'Ask Anonymously',
    'nav.convinced': 'New Muslim',
    'hero.eyebrow': 'No pressure · No judgment · Just truth',
    'hero.h1a': 'Every Question',
    'hero.h1b': 'Deserves an Answer',
    'hero.sub': "You have questions about Islam. We have honest, direct answers. Tell us who you are — and we'll build your personal path.",
    'hero.selector': 'Start with your background:',
    'hero.selector.badge': 'YOUR STARTING POINT',
    'hero.selector.sub': 'Select your background to tailor the answers to your perspective:',
    'bg.atheist': 'Atheist / Agnostic',
    'bg.atheist.hint': 'Logic, science & evidence',
    'bg.christian': 'Christian',
    'bg.christian.hint': 'Bible, Jesus & Trinity',
    'bg.jewish': 'Jewish',
    'bg.jewish.hint': 'Torah, prophets & covenant',
    'bg.other': 'Just Curious',
    'bg.other.hint': 'Start from the beginning',
    'stat.muslims': 'Muslims worldwide',
    'stat.langs': 'Languages',
    'stat.reply': 'Scholar reply time',
    'q.title': 'Questions Built for You',
    'q.sub': 'Real questions people like you ask. Answered directly, without sugarcoating.',
    'q.change': '← Choose different background',
    'q.more': 'Have another question? →',
    'q.scholarRef': '— Argument referenced by',
    'badge.myths': '⚡ Myth Busters',
    'myths.label': 'COMMON MYTH',
    'myths.evidence': 'Evidence:',
    'myths.title': 'The Hardest Questions Get Straight Answers',
    'myths.sub': 'No dodging. No deflecting. Just facts and evidence.',
    'filter.all': 'All',
    'filter.women': 'Women',
    'filter.violence': 'Violence',
    'filter.history': 'History',
    'filter.science': 'Science',
    'filter.prophet': 'Prophet',
    'filter.mo3az': 'Muadh Aliyan',
    'filter.deedat': 'Ahmed Deedat',
    'filter.zakir': 'Dr. Zakir Naik',
    'filter.dawoud': 'Mahmoud Dawoud',
    'filter.khairallah': 'Zain Khairallah',
    'debates.archive': '📚 Archive',
    'debates.archive_title': 'All Debates & Dialogues',
    'debates.archive_sub': 'Scroll and pick any debate to watch directly',
    'debates.prev': '← Prev',
    'debates.next': 'Next →',
    'badge.debates': '🎯 Debate Arena',
    'debates.title': 'Watch Real Debates',
    'debates.sub': 'Muslims vs. atheists, Christians, skeptics. Ready to play on 1-click.',
    'badge.anon': '🔒 100% Anonymous',
    'ask.title': "Have a Question You're Afraid to Ask?",
    'ask.sub': 'No email. No name. No judgment. Goes directly to a scholar who will answer honestly.',
    'ask.f1': 'Completely anonymous',
    'ask.f2': 'Answered within 24 hours',
    'ask.f3': 'By real Islamic scholars',
    'ask.f4': 'In your language',
    'ask.quote': '"Indeed, the only cure for ignorance is to ask."',
    'ask.cite': '— Prophet Muhammad ﷺ [Sunan Abi Dawud: 336]',
    'ask.label.bg': 'Your background',
    'ask.optional': '(optional)',
    'ask.opt.sel': 'Select your background',
    'ask.label.q': 'Your question',
    'ask.placeholder': "Type your question here... Don't hold back.",
    'ask.label.lang': 'Answer in',
    'ask.submit': 'Send Anonymously →',
    'ask.note': "We'll publish the answer publicly (without identifying info) so others can benefit too.",
    'ask.success.title': 'Question Received!',
    'ask.success.body': 'A scholar will answer within 24 hours. Check back here soon.',
    'ask.again': 'Ask another question',
    'badge.convinced': '🌙 New to Islam',
    'convinced.title': "Convinced? Here's Your First Step",
    'convinced.sub': "You don't need to know everything. You just need to begin. One step at a time.",
    'convinced.ctaText': 'Ready to start? A scholar is here to guide you.',
    'convinced.cta': 'Talk to a Scholar Now →',
    'step.start': 'Get started →',
    'badge.scholars': '👨‍🏫 Live Support',
    'scholars.title': 'Talk to a Real Scholar',
    'scholars.sub': 'Not chatbots. Real scholars. Available for live conversations and questions.',
    'scholar.ask': 'Ask a Question →',
    'footer.tagline': 'Every question deserves an honest answer.',
    'footer.explore': 'Explore',
    'footer.paths': 'Your Path',
    'footer.connect': 'Connect',
    'footer.scholars': 'Talk to a Scholar',
    'footer.anon': 'Anonymous Q&A',
    'footer.rights': 'Built for truth-seekers, with ❤️'
  },
  ar: {
    'nav.path': 'مساري',
    'nav.myths': 'دحض الأكاذيب',
    'nav.debates': 'المناظرات',
    'nav.ask': 'اسأل بسرية',
    'nav.convinced': 'أسلمت؟',
    'hero.eyebrow': 'بلا ضغط · بلا حكم مسبق · فقط الحقيقة والبرهان',
    'hero.h1a': 'كل سؤال يبحث عن الحقيقة',
    'hero.h1b': 'يستحق إجابة واضحة وصادقة',
    'hero.sub': 'لديك تساؤلات حول الإسلام؟ نقدم لك إجابات عقلانية مباشرة وموثقة. اختر خلفيتك وسنبني لك مساراً مخصصاً يجيب عن أدق تساؤلاتك.',
    'hero.selector': 'ابدأ باختيار خلفيتك:',
    'hero.selector.badge': 'نقطة انطلاقك الشخصية',
    'hero.selector.sub': 'اختر خلفيتك لنبني لك مسار إجابات مخصصاً يحاكي أسئلتك واهتماماتك:',
    'bg.atheist': 'ملحد / لاأدري',
    'bg.atheist.hint': 'المنطق، أصل الكون، والأدلة العقلية',
    'bg.christian': 'مسيحي',
    'bg.christian.hint': 'الكتاب المقدس، المسيح، والتثليث',
    'bg.jewish': 'يهودي',
    'bg.jewish.hint': 'التوراة، الأنبياء، والعهد الأصيل',
    'bg.other': 'باحث عن الحقيقة',
    'bg.other.hint': 'استكشف الإسلام من البداية ببساطة',
    'stat.muslims': 'مسلم حول العالم',
    'stat.langs': 'لغة عالمية',
    'stat.reply': 'متوسط وقت الرد',
    'q.title': 'إجابات مخصصة لأسئلتك',
    'q.sub': 'أسئلة حقيقية يطرحها الباحثون عن الحق، بإجابات عقلانية مباشرة خالية من المجاملات.',
    'q.change': '← اختيار خلفية مختلفة',
    'q.more': 'لديك سؤال آخر؟ اسأل بسرية →',
    'q.scholarRef': '— الحجة والبرهان مستفاد من بحث:',
    'badge.myths': '⚡ دحض الشبهات الشائعة',
    'myths.label': 'شبهة شائعة',
    'myths.evidence': 'الدليل والبرهان:',
    'myths.title': 'الأسئلة الصعبة تجد هنا إجابات مباشرة',
    'myths.sub': 'بلا تهرب ولا مواربة؛ حقائق تاريخية، علمية، وأدلة عقلية قاطعة.',
    'filter.all': 'الكل',
    'filter.women': 'المرأة',
    'filter.violence': 'العنف والجهاد',
    'filter.history': 'التاريخ',
    'filter.science': 'العلم الحديث',
    'filter.prophet': 'النبي ﷺ',
    'filter.mo3az': 'معاذ عليان',
    'filter.deedat': 'أحمد ديدات',
    'filter.zakir': 'د. ذاكر نايك',
    'filter.dawoud': 'محمود داود',
    'filter.khairallah': 'زين خير الله',
    'debates.archive': '📚 المكتبة الشاملة',
    'debates.archive_title': 'جميع المناظرات والحوارات',
    'debates.archive_sub': 'تحرك بالاسكرول واختر أي فيديو للمشاهدة فوراً',
    'debates.prev': 'السابق ←',
    'debates.next': '→ التالي',
    'badge.debates': '🎯 حلبة المناظرات والحوارات',
    'debates.title': 'شاهد مناظرات وحوارات حقيقية',
    'debates.sub': 'حوارات رصينة بين علماء المسلمين ومفكرين مسيحيين وملاحدة. شاهد واحكم بعقلك بضغطة زر واحدة.',
    'badge.anon': '🔒 سرية تامة 100%',
    'ask.title': 'لديك سؤال تخشى أو تخجل من طرحه؟',
    'ask.sub': 'بدون بريد إلكتروني، بدون اسم، وبلا أدنى حكم عليك. يصل سؤالك مباشرة لعالم متخصص يجيبك بأمانة.',
    'ask.f1': 'سرية وأمان تام 100%',
    'ask.f2': 'رد علمي وافٍ خلال 24 ساعة',
    'ask.f3': 'بواسطة نخبة من علماء مقارنة الأديان',
    'ask.f4': 'متاح بجميع اللغات الحية',
    'ask.quote': '«إِنَّمَا شِفَاءُ الْعِيِّ السُّؤَالُ»',
    'ask.cite': '— رسول الله ﷺ [سنن أبي داود: 336]',
    'ask.label.bg': 'خلفيتك الدينية أو الفكرية',
    'ask.optional': '(اختياري)',
    'ask.opt.sel': 'اختر خلفيتك لتخصيص الإجابة',
    'ask.label.q': 'سؤالك بصراحة تامة',
    'ask.placeholder': 'اكتب سؤالك هنا بكل حرية ووضوح... بلا أي خجل أو تردد.',
    'ask.label.lang': 'لغة الرد المفضلة',
    'ask.submit': 'أرسل سؤالك بسرية تامة ←',
    'ask.note': 'ننشر الإجابات المفيدة للمصلحة العامة بدون أي بيانات شخصية، لتعم الفائدة للجميع.',
    'ask.success.title': 'وصلنا سؤالك بنجاح!',
    'ask.success.body': 'سيقوم أحد علمائنا المختصين بمراجعة سؤالك والإجابة عليه خلال 24 ساعة.',
    'ask.again': 'طرح سؤال آخر',
    'badge.convinced': '🌙 للمسلمين الجدد',
    'convinced.title': 'اقتنعت بالإسلام؟ خطواتك الأولى للبدء',
    'convinced.sub': 'لست بحاجة لمعرفة كل شيء دفعة واحدة؛ المهم أن تبدأ الخطوة الأولى بقلب صادق.',
    'convinced.ctaText': 'مستعد لاتخاذ الخطوة الأولى؟ علماؤنا جاهزون لإرشادك خطوة بخطوة.',
    'convinced.cta': 'تحدث الآن ←',
    'step.start': 'ابدأ الآن ←',
    'badge.scholars': '👨‍🏫 دعم وإرشاد مباشر',
    'scholars.title': 'تحدث مع علماء ودعاة حقيقيين',
    'scholars.sub': 'ليسوا روبوتات ذكاء اصطناعي، بل علماء ودعاة متخصصون متاحون للحوار المباشر والإرشاد.',
    'scholar.ask': 'اسأل الآن ←',
    'footer.tagline': 'كل سؤال عن الحقيقة يستحق إجابة أمينة وصادقة.',
    'footer.explore': 'استكشف',
    'footer.paths': 'مسارات مخصصة',
    'footer.connect': 'تواصل معنا',
    'footer.scholars': 'تحدث مع شيخ',
    'footer.anon': 'صندوق الأسئلة السرية',
    'footer.rights': 'صُنع خصيصاً لكل باحث صادق عن الحق، بكل ❤️'
  },
  fr: {
    'nav.path': 'Mon parcours',
    'nav.myths': 'Mythes démystifiés',
    'nav.debates': 'Débats',
    'nav.ask': 'Question anonyme',
    'nav.convinced': 'Nouveau Muslim',
    'hero.eyebrow': 'Sans pression · Sans jugement · Juste la vérité',
    'hero.h1a': 'Chaque question',
    'hero.h1b': 'mérite une réponse',
    'hero.sub': 'Vous avez des questions sur l\'Islam. Nous avons des réponses honnêtes.',
    'hero.selector': 'Commencez par votre parcours:',
    'hero.selector.badge': 'VOTRE POINT DE DÉPART',
    'hero.selector.sub': 'Sélectionnez votre profil pour adapter les réponses:',
    'bg.atheist': 'Athée / Agnostique',
    'bg.atheist.hint': 'Logique, science et preuves',
    'bg.christian': 'Chrétien',
    'bg.christian.hint': 'Bible, Jésus et Trinité',
    'bg.jewish': 'Juif',
    'bg.jewish.hint': 'Torah, prophètes et alliance',
    'bg.other': 'Juste curieux',
    'bg.other.hint': 'Commencer depuis le début',
    'stat.muslims': 'Musulmans dans le monde',
    'stat.langs': 'Langues',
    'stat.reply': 'Délai de réponse',
    'q.title': 'Questions faites pour vous',
    'q.sub': 'Vraies questions. Réponses honnêtes.',
    'q.change': '← Choisir un autre profil',
    'q.more': 'Autre question? →',
    'q.scholarRef': '— Argument référencé par',
    'badge.myths': '⚡ Idées Reçues',
    'myths.label': 'IDÉE REÇUE',
    'myths.evidence': 'Preuve :',
    'myths.title': 'Les questions difficiles ont des réponses directes',
    'myths.sub': 'Pas d\'esquive. Juste des faits.',
    'filter.all': 'Tous',
    'filter.women': 'Femmes',
    'filter.violence': 'Violence',
    'filter.history': 'Histoire',
    'filter.science': 'Science',
    'filter.prophet': 'Prophète',
    'filter.mo3az': 'Muadh Aliyan',
    'filter.deedat': 'Ahmed Deedat',
    'debates.archive': '📚 Bibliothèque',
    'debates.archive_title': 'Tous les débats',
    'debates.archive_sub': 'Faites défiler et choisissez un débat',
    'debates.prev': '← Précédent',
    'debates.next': 'Suivant →',
    'badge.debates': '🎯 Débats',
    'debates.title': 'Regardez de vrais débats',
    'debates.sub': 'Musulmans vs athées, chrétiens et sceptiques.',
    'badge.anon': '🔒 100% Anonyme',
    'ask.title': 'Vous avez une question que vous avez peur de poser?',
    'ask.sub': 'Pas d\'e-mail. Pas de nom. Pas de jugement.',
    'ask.f1': 'Complètement anonyme',
    'ask.f2': 'Réponse sous 24h',
    'ask.f3': 'Par de vrais savants islamiques',
    'ask.f4': 'Dans votre langue',
    'ask.quote': '"Le remède à l\'ignorance est de poser des questions."',
    'ask.cite': '— Prophète Muhammad ﷺ [Sunan Abi Dawud: 336]',
    'ask.label.bg': 'Votre profil',
    'ask.optional': '(optionnel)',
    'ask.opt.sel': 'Sélectionnez votre profil',
    'ask.label.q': 'Votre question',
    'ask.placeholder': 'Écrivez votre question ici en toute franchise...',
    'ask.label.lang': 'Répondre en',
    'ask.submit': 'Envoyer anonymement →',
    'ask.note': 'Nous publierons la réponse publiquement pour en faire bénéficier d\'autres.',
    'ask.success.title': 'Question reçue!',
    'ask.success.body': 'Un savant répondra sous 24h.',
    'ask.again': 'Poser une autre question',
    'badge.convinced': '🌙 Nouveau Musulman',
    'convinced.title': 'Convaincu? Votre premier pas',
    'convinced.sub': 'Vous n\'avez pas besoin de tout savoir immédiatement.',
    'convinced.ctaText': 'Prêt à commencer? Un savant peut vous guider.',
    'convinced.cta': 'Parler à un savant maintenant →',
    'step.start': 'Commencer →',
    'badge.scholars': '👨‍🏫 Support en direct',
    'scholars.title': 'Parler à un vrai savant',
    'scholars.sub': 'Pas de robots. De vrais savants disponibles pour échanger.',
    'scholar.ask': 'Poser une question →',
    'footer.tagline': 'Chaque question mérite une réponse honnête.',
    'footer.explore': 'Explorer',
    'footer.paths': 'Votre profil',
    'footer.connect': 'Contact',
    'footer.scholars': 'Parler à un savant',
    'footer.anon': 'Questions anonymes',
    'footer.rights': 'Conçu pour les chercheurs de vérité, avec ❤️'
  }
};

/* ══════════════════════════════════════════
   2. PATHS DATA (English & Arabic)
══════════════════════════════════════════ */
const PATHS_EN = {
  atheist: {
    icon: '🔬',
    badge: '🔬 For the Skeptic',
    questions: [
      {
        q: 'If God created everything, who created God?',
        short: 'The cosmological argument — explained plainly.',
        a: `The question assumes everything needs a cause. But the rule is precise: everything that <strong>begins to exist</strong> needs a cause. God, by definition, is eternal — He never began, so He needs no cause.<br><br>The universe, however, DID begin (proven by the Big Bang and the Second Law of Thermodynamics). Something caused it. That cause must be uncaused, eternal, outside space and time, and immensely powerful.<br><br>Asking "who created God" is like asking "what is north of the North Pole?" — it is a category error. The question cannot apply to something that never began.`,
        scholar: 'Hamza Tzortzis'
      },
      {
        q: "Doesn't the Big Bang prove the universe is self-sufficient — no God needed?",
        short: 'The Big Bang actually supports a Creator.',
        a: `The Big Bang theory proves the universe had a <em>beginning</em>. Before the 1920s, many materialist philosophers assumed the universe was eternal to avoid positing a Creator. When Edwin Hubble discovered the expansion of the universe, that assumption collapsed.<br><br>A beginning demands a cause that is:<br>• Outside the universe (since space, time, and matter all began at the Big Bang)<br>• Transcendent and uncaused itself<br>• Possessing agency and immense power.<br><br>Even Einstein initially added a "cosmological constant" to force a static universe in his equations, because he disliked what a beginning implied.`,
        scholar: 'Hamza Tzortzis'
      },
      {
        q: 'Why is there evil and suffering if God is all-powerful and good?',
        short: 'The problem of evil — directly confronted.',
        a: `This is often felt as an emotional objection, but logically:<br><br><strong>1. Free will requires the possibility of moral evil.</strong> A world where humans can genuinely love, choose justice, and sacrifice requires the freedom to choose cruelty. A world without the possibility of evil is a world of pre-programmed robots.<br><br><strong>2. Suffering produces the deepest human virtues.</strong> Compassion, resilience, patience, and altruism only exist in contrast to hardship.<br><br><strong>3. This temporary life is an examination, not the final destination.</strong> Islam teaches that every injustice will be addressed with exact precision on the Day of Judgment. The eternal reward completely eclipses worldly hardship.`,
        scholar: 'Hamza Tzortzis'
      },
      {
        q: 'Can objective morality exist without God?',
        short: 'Without God, morality collapses into personal preference.',
        a: `Without God, morality is either social convention or an evolutionary survival mechanism — meaning it is relative and subjective. Yet humanity recognizes that certain acts (such as abusing an innocent child) are <em>objectively evil</em>, regardless of societal consensus.<br><br>Without a transcendent Lawgiver, one can only state "I dislike this action," not that it is truly, universally, and morally wrong. The universal human awareness of objective moral truth points directly to God.`,
        scholar: 'Hamza Tzortzis'
      },
      {
        q: 'Is the Quran scientifically accurate? Or just vague poetic guesses?',
        short: 'Specific, verifiable statements made 1,400 years ago.',
        a: `The Quran contains verifiable cosmological and biological descriptions:<br><br>• <strong>Expanding universe (51:47):</strong> "And the heaven We constructed with strength, and indeed, We are its expander." Confirmed by Hubble in 1929.<br>• <strong>Embryonic stages (23:12-14):</strong> Accurate sequential descriptions confirmed by leading embryologist Dr. Keith Moore.<br>• <strong>Deep mountain roots (21:31):</strong> Modern geophysics verifies mountain roots stabilize tectonic plates.<br>• <strong>Water as foundation of all life (21:30):</strong> The core axiom of cellular biology.<br><br>These are not vague poems; they are precise statements that match modern empirical findings.`,
        scholar: 'Dr. Zakir Naik'
      },
      {
        q: "Isn't religion just an ancient coping mechanism?",
        short: "A belief's psychological comfort does not determine its objective truth.",
        a: `Even if believing in God brings comfort, that does not make it an illusion. Science also brings comfort by explaining lightning, yet that does not make meteorology false.<br><br>The crucial question is: <em>Is Islam factually true?</em><br><br>Historically, giants of rational science were devout Muslims: Ibn Sina (medicine), Al-Hasan Ibn al-Haytham (optics & scientific method), and Al-Khwarizmi (algebra). They embraced Islam as a rational truth, not a superstitious myth.`,
        scholar: 'Hamza Tzortzis'
      }
    ]
  },
  christian: {
    icon: '✝️',
    badge: '✝️ For Christians',
    questions: [
      {
        q: 'Did Jesus ever explicitly say "I am God, worship me"?',
        short: 'What the Gospels actually state — verified directly.',
        a: `In none of the four Gospels does Jesus state: "I am God" or "Worship me." His most definitive recorded statement is John 17:3:<br><br><em>"Now this is eternal life: that they know <strong>You, the only true God</strong>, and Jesus Christ, whom You have sent."</em><br><br>Jesus distinguishes himself from "the only true God" and identifies as God's messenger. In addition, the Gospels record that Jesus:<br>• Prayed to God (Luke 22:42)<br>• Said "The Father is greater than I" (John 14:28)<br>• Said "I can of my own self do nothing" (John 5:30)<br><br>The official doctrine of the deity of Christ was formulated at the Council of Nicaea in 325 CE — three centuries after Jesus.`,
        scholar: 'Dr. Shabir Ally'
      },
      {
        q: 'Is the Trinity biblical? How can One be Three?',
        short: 'The word "Trinity" never appears in the entire Bible.',
        a: `Neither the word "Trinity" nor an explicit definition of it appears in the Old or New Testament. Christian theologians acknowledge that the Trinity is a "mystery beyond human comprehension."<br><br>By contrast, the Old Testament and Jesus consistently uphold absolute monotheism: <em>"Hear, O Israel: The Lord our God, the Lord is one"</em> (Deuteronomy 6:4 — the Shema, quoted by Jesus in Mark 12:29 as the greatest commandment).<br><br>Islam returns humanity to this pure prophetic monotheism: God is singular, absolute, and unpartnered. Jesus is honored as the miraculous Messiah and prophet of God, not God Himself.`,
        scholar: 'Dr. Shabir Ally'
      },
      {
        q: 'Has the Bible experienced textual variants and changes?',
        short: 'An established finding of modern biblical textual criticism.',
        a: `The New Testament exists in over 5,800 Greek manuscripts with hundreds of thousands of textual variations. Major theological passages were added centuries later, including:<br><br>• <strong>Mark 16:9-20 (Resurrection appearances):</strong> Absent from Codex Sinaiticus and Codex Vaticanus.<br>• <strong>John 7:53–8:11 (The woman caught in adultery):</strong> Missing from all early manuscripts.<br>• <strong>1 John 5:7 (The Johannine Comma):</strong> The only verse asserting "the Father, the Word, and the Holy Ghost: and these three are one" is absent from all ancient Greek manuscripts and was added to the Latin text centuries later.<br><br>This is thoroughly documented by Christian textual scholars, including Prof. Bart Ehrman in "Misquoting Jesus."`,
        scholar: 'Dr. Shabir Ally'
      },
      {
        q: 'Why would an all-powerful God require an innocent sacrifice to forgive sins?',
        short: 'The theological logic of atonement examined.',
        a: `The doctrine of substitutionary atonement claims God cannot forgive sin without the shedding of innocent blood. But consider:<br><br>If God is truly omnipotent and merciful, He can forgive unconditionally when a human repents sincerely. In Ezekiel 18:21–22, God states that if the wicked person turns from sin, their offenses will not be remembered against them — no blood sacrifice required.<br><br>Islam teaches that God accepts sincere repentance directly: ﴿وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ﴾ ("And it is He who accepts repentance from His servants"). Punishing the innocent Jesus for the guilty contradicts foundational justice.`,
        scholar: 'Dr. Shabir Ally'
      },
      {
        q: 'What do Muslims actually believe about Jesus?',
        short: 'Muslims love, revere, and believe in Jesus as a core article of faith.',
        a: `A person cannot be a Muslim without believing in Jesus (Isa). Muslims believe:<br><br>✅ Jesus was born miraculously of the Virgin Mary (Maryam) without a biological father.<br>✅ Mary has an entire chapter in the Quran named after her (Surah Maryam).<br>✅ Jesus performed verified miracles by God's permission (healing lepers and raising the dead).<br>✅ Jesus is the Messiah (Al-Masih) and one of the five greatest messengers of God.<br>✅ Jesus will return before the Day of Judgment.<br><br>The only difference: Muslims worship the God who sent Jesus, rather than worshipping Jesus himself.`,
        scholar: 'Dr. Shabir Ally'
      },
      {
        q: 'Is Prophet Muhammad prophesied in biblical scriptures?',
        short: 'Scriptural prophecies pointed out by comparative scholars.',
        a: `Scholars of comparative religion reference three notable biblical prophecies:<br><br>1. <strong>Deuteronomy 18:18:</strong> God tells Moses: "I will raise up for them a prophet like you from among their brothers." "Brothers" of the Israelites refers to the Ishmaelites (Arabs). Muhammad, like Moses, was born naturally, married, led a nation, instituted a law, and died naturally.<br>2. <strong>John 16:7-13:</strong> Jesus speaks of the "Paraclete" who will guide humanity into all truth and speak only what he hears.<br>3. <strong>Song of Solomon 5:16:</strong> In the original Hebrew, the word "Muhammadim" appears directly with the plural suffix of majesty.`,
        scholar: 'Sheikh Ahmed Deedat'
      }
    ]
  },
  jewish: {
    icon: '✡️',
    badge: '✡️ For Jewish Visitors',
    questions: [
      {
        q: 'How does Islam relate to Judaism? Are the foundations shared?',
        short: 'Deep historical, legal, and theological harmony.',
        a: `Islam and Judaism share fundamental theological and legal pillars:<br><br>✅ <strong>Absolute, strict monotheism (Tawhid):</strong> No physical forms, no Trinity, no partners.<br>✅ <strong>Dietary laws:</strong> Halal and Kosher share deep commonalities.<br>✅ <strong>Covenant of circumcision</strong> for male infants.<br>✅ <strong>Timed ritual prayers and physical purification.</strong><br>✅ <strong>Veneration of the same prophets:</strong> Abraham, Moses, Noah, David, Solomon, and others.<br>✅ <strong>Living by divinely revealed law:</strong> Islamic Sharia parallels Jewish Halakha.<br><br>Islam views itself as the universal continuation and fulfillment of the Abrahamic monotheistic tradition for all nations.`,
        scholar: 'Dr. Shabir Ally'
      },
      {
        q: 'Is Muhammad referenced in the Torah?',
        short: 'Deuteronomy 18:18 and the prophet like Moses.',
        a: `In Deuteronomy 18:18, God promises Moses: "I will raise up a prophet like you from among their brothers." In Hebrew, "from their brothers" identifies the descendants of Ishmael (the brother of Isaac).<br><br>Muhammad matches Moses precisely:<br>• Both received a complete legal covenant for an entire nation.<br>• Both established a righteous civil society.<br>• Both experienced natural birth and natural death.<br>• The Quran is preserved verbatim letter for letter, mirroring Moses' tablet preservation.`,
        scholar: 'Sheikh Ahmed Deedat'
      },
      {
        q: 'Why would God send a prophet outside the Children of Israel?',
        short: "God's original covenant with Abraham embraced both branches.",
        a: `God's covenant with Abraham specifically included Ishmael: <em>"And as for Ishmael... I will make him into a great nation"</em> (Genesis 17:20).<br><br>The mission of Abraham was never meant to be confined to one ethnicity; God stated that through his seed "all nations on earth will be blessed" (Genesis 22:18). God sent Jonah to Nineveh (a non-Israelite people). In Islam, God is the Lord of all humanity: ﴿وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ﴾ ("And We have not sent you except as a mercy to all creation").`,
        scholar: 'Dr. Shabir Ally'
      },
      {
        q: "What is Islam's stance on Moses and the Hebrew Prophets?",
        short: 'Moses is the most mentioned prophet in the entire Quran.',
        a: `The Quran mentions Moses (Musa) by name 136 times — more than any other figure, including Prophet Muhammad himself. Muslims are obligated to love and honor all biblical prophets, and denying any prophet breaks one's Islamic faith.<br><br>Islam restores the original message that every prophet taught: worship God alone, do justice, and care for the vulnerable.`,
        scholar: 'Dr. Shabir Ally'
      }
    ]
  },
  other: {
    icon: '🌍',
    badge: '🌍 For the Curious Explorer',
    questions: [
      {
        q: 'What is Islam in the simplest possible terms?',
        short: 'Two core truths upon which everything is built.',
        a: `The word "Islam" means peaceful submission to the One Creator. It rests upon two foundational truths:<br><br><strong>1. There is only One God (Allah):</strong> The eternal Creator of the universe. No partners, no sons, no images. A direct personal relationship between the human being and God.<br><br><strong>2. Muhammad is His final messenger:</strong> The last in the prophetic chain (including Noah, Abraham, Moses, and Jesus), delivering the Quran as God's final, perfectly preserved guidance to all mankind.<br><br>All Islamic practices (prayer, charity, fasting) stem from these simple, rational foundations.`,
        scholar: 'SalamHub'
      },
      {
        q: 'What are the Five Pillars of Islam?',
        short: 'The practical framework of a Muslim’s daily life.',
        a: `<strong>1. Shahada (Declaration of Faith):</strong> Sincere affirmation that there is no deity worthy of worship except God, and Muhammad is His messenger.<br><strong>2. Salah (Prayer):</strong> Five daily prayers connecting the heart with God from dawn to night.<br><strong>3. Zakat (Annual Charity):</strong> A mandatory 2.5% annual redistribution of surplus wealth to the impoverished.<br><strong>4. Sawm (Fasting):</strong> Abstaining from food and drink from dawn to sunset during the month of Ramadan.<br><strong>5. Hajj (Pilgrimage):</strong> The journey to Mecca once in a lifetime for those who are physically and financially able.`,
        scholar: 'SalamHub'
      },
      {
        q: 'Who was Prophet Muhammad and why is he revered?',
        short: 'The historical figure who transformed world civilization.',
        a: `Born in Mecca in 570 CE, Muhammad was known as "Al-Amin" (The Trustworthy). At age 40, he received the first revelations of the Quran.<br><br>Over 23 years, he transformed a fractured tribal society:<br>• Abolished racism, declaring all humans equal in worth.<br>• Granted women full independent property, inheritance, and marriage rights.<br>• Established institutional welfare systems for orphans and the poor.<br>• United warring tribes under universal ethics of truth and mercy.<br><br>In Michael H. Hart’s book "The 100: A Ranking of the Most Influential Persons in History," Muhammad was placed at #1.`,
        scholar: 'SalamHub'
      },
      {
        q: 'What makes the Quran unique among world scriptures?',
        short: 'The most memorized and strictly preserved text in human history.',
        a: `The Quran is regarded as the literal verbatim word of God revealed to Muhammad in Arabic.<br><br>Unique attributes include:<br>• <strong>Unbroken Oral Preservation:</strong> Millions of people (Huffaz) memorize every letter of the entire book. If all printed books vanished, it could be rewritten within hours from memory.<br>• <strong>Single Global Standard:</strong> There is only one Quran worldwide, matching letter-for-letter in Cairo, Jakarta, London, or Tokyo.<br>• <strong>Literary and Intellectual Depth:</strong> It challenged 7th-century masters of Arabic to produce even one chapter like it, a challenge that remains unmet for 1,400 years.`,
        scholar: 'SalamHub'
      },
      {
        q: 'What is the distinction between Muslim, Islam, Allah, and Arab?',
        short: 'Clarifying four commonly misunderstood terms.',
        a: `• <strong>Islam:</strong> The faith, worldview, and way of life.<br>• <strong>Muslim:</strong> An individual who practices Islam. Muslims belong to every race and nation on Earth.<br>• <strong>Allah:</strong> The Arabic proper noun for the One True God. Christian and Jewish Arabic-speakers also say "Allah."<br>• <strong>Arab:</strong> A cultural and linguistic identity, not a religion. Less than 20% of the world's 1.8 billion Muslims are Arabs. The largest Muslim populations reside in Indonesia, Pakistan, Bangladesh, and India.`,
        scholar: 'SalamHub'
      }
    ]
  }
};

const PATHS_AR = {
  atheist: {
    icon: '🔬',
    badge: '🔬 للملحد والباحث عن الدليل العقلي',
    questions: [
      {
        q: 'إذا كان الله قد خلق كل شيء، فمن خلق الله؟',
        short: 'دليل السببية الكوني — مبسطاً بلا تعقيد.',
        a: `السؤال يفترض خطأً أن كل شيء يحتاج إلى صانع. لكن القانون العقلي والفيزيائي دقيق: كل ما <strong>له بداية</strong> يحتاج إلى مسبب. والله عز وجل أزلي لا بداية لوجوده، وبالتالي لا ينطبق عليه قانون الاحتياج لمسبب.<br><br>أما الكون، فقد أثبت العلم الحديث (نظرية الانفجار العظيم والقانون الثاني للديناميكا الحرارية) أن له بداية حقيقية في الزمان والمكان. وما كان له بداية لابد له من مسبب أزلي، خارج عن حدود المادة والزمان والمكان، ومطلق القدرة.<br><br>سؤال "من خلق الخالق" يشبه تماماً سؤال: "ما الذي يقع شمال القطب الشمالي؟" — إنه خطأ منطقي في تصنيف السؤال؛ لأن ما لا بداية له يستحيل أن يكون مخلوقاً.`,
        scholar: 'حمزة تزورتزيس'
      },
      {
        q: 'ألا يثبت الانفجار العظيم أن الكون نشأ ذاتياً دون حاجة إلى إله؟',
        short: 'الانفجار العظيم هو في الواقع أكبر حجة علمية على وجود الخالق.',
        a: `نظرية الانفجار العظيم (Big Bang) أثبتت أن للكون <em>نقطة بداية مطلقة</em>. قبل عام 1920م كان الماديون يزعمون أن الكون أزلي هرباً من الاعتراف بالخالق. ولما أثبت إدوين هابل تمدد الكون، انهار نموذج الكون الأزلي.<br><br>والبداية تعني حتماً وجود مسبب يتصف بـ:<br>• كونه خارج إطار الكون (لأن المكان والزمان والمادة كلها بدأت لحظة الانفجار)<br>• كونه أزلياً غير مادي<br>• يمتلك إرادة وقدرة فائقة لإخراج الوجود من العدم.<br><br>حتى آينشتاين عندما اكتشف تمدد الكون لأول مرة في معادلاته، وضع "الثابت الكوني" محاولاً إبقاء الكون ثابتاً لأنه أدرك أن وجود بداية يقود مباشرة لحقيقة وجود الخالق.`,
        scholar: 'حمزة تزورتزيس'
      },
      {
        q: 'لماذا يوجد الشر والمعاناة إذا كان الله قديراً ورحيماً؟',
        short: 'معضلة الشر — مواجهة صريحة وتفكيك منطقي.',
        a: `هذا السؤال هو أكبر اعتراض نفسي وعاطفي، ولكن بالتحليل العقلي نجد:<br><br><strong>1. الإرادة الحرة تقتضي إمكانية الشر:</strong> خلق بشر يملكون حرية الاختيار والحب والعدل يقتضي بالضرورة قدرتهم على اختيار الظلم والقسوة. عالم بلا إمكانية للشر هو عالم روبوتات مسلوبة الإرادة.<br><br><strong>2. المعاناة تصنع أسمى القيم الإنسانية:</strong> الشجاعة، والرحمة، والصبر، والتضحية، والتعاطف لا تتولد إلا في مواجهة الشدائد. والراحة المطلقة لا تصنع نفوساً عظيمة.<br><br><strong>3. الدنيا ليست المحطة الأخيرة:</strong> الإسلام يعلمنا أن الحياة دار ابتلاء قصير واختبار، وأن محكمة العدل الإلهية المطلقة هي يوم القيامة؛ حيث يوفى المظلوم حقه كاملاً، ويجازى الصابر نعيماً أبدياً ينسيه كل ألم مر به في الدنيا.`,
        scholar: 'حمزة تزورتزيس'
      },
      {
        q: 'هل يمكن وجود منظومة أخلاقية موضوعية بدون إله؟',
        short: 'بدون الإله، تنهار الأخلاق وتصبح مجرد أذواق ونسبية متغيرة.',
        a: `بدون الإله، الأخلاق تصبح إما تواضعاً اجتماعياً نسبياً، أو إفرازاً تطورياً متغيراً. لكننا جميعاً في قرارة أنفسنا نعلم أن هناك أفعالاً <em>شريرة وقبيحة بذاتها</em> بشكل موضوعي مطلق:<br><br>• تعذيب الأطفال للتسلية<br>• الإبادة الجماعية<br>• العبودية والقهر<br><br>بدون الإله، لا تستطيع القول إن هذه الأفعال شر مطلق، بل أقصى ما تملكه أن تقول "أنا شخصياً لا يعجبني هذا"، لأن المجتمعات عبر التاريخ تواطأت أحياناً على ارتكابها.<br><br>وجود الأخلاق الموضوعية الملزمة التي يشعر بها كل إنسان عاقل دليل قطعي على وجود مشرّع أخلاقي متعالٍ على أهواء البشر — وهو الله.`,
        scholar: 'حمزة تزورتزيس'
      },
      {
        q: 'هل القرآن دقيق علمياً أم مجرد تخمينات شعرية غامضة؟',
        short: 'حقائق علمية قطعية ومحددة ذُكرت قبل اكتشاف العلم الحديث بقرون.',
        a: `القرآن الكريم تضمن إشارات علمية قطعية لا تقبل التأويل البارد:<br><br>• <strong>تمدد الكون (الذاريات: 47):</strong> ﴿وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ﴾ — وهو ما أثبته هابل عام 1929م.<br>• <strong>أطوار الجنين (المؤمنون: 12-14):</strong> نطفة ثم علقة ثم مضغة... شهد البروفيسور كيث مور (عالم الأجنة الكندي العالمي) باستحالة معرفة هذا قبل 1400 عام.<br>• <strong>الجبال أوتاداً لتثبيت القشرة (الأنبياء: 31):</strong> أثبت علم الجيولوجيا أن للجبال جذوراً وتدية عميقة تحفظ توازن الصفائح الأرضية.<br>• <strong>أصل كل حي من الماء (الأنبياء: 30):</strong> الحقيقة البيولوجية الكبرى لكافة الكائنات الحية.<br><br>هذه ليست استعارات شعرية؛ بل حقائق موصوفة بألفاظ دقيقة كشف العلم تفاصيلها حديثاً.`,
        scholar: 'د. ذاكر نايك'
      },
      {
        q: 'أليس الدين مجرد مهدئ نفسي ومحاولة بشرية لتفسير المجهول؟',
        short: 'كون الشيء يمنح السكينة لا يعني أبداً أنه وهمي.',
        a: `حتى لو كان الإيمان يمنح الطمأنينة والسكينة للروح (وهذا حق)، فإن هذا ليس دليلاً على كونه كاذباً. يمكنك بالمثل القول إن "العلم مهدئ لخوف الإنسان من الطبيعة" — فهل يعني هذا بطلان حقائق العلم؟<br><br>السؤال الحقيقي ليس: "لماذا يشعر المؤمن بالراحة؟" بل: "هل عقيدة الإسلام مطابقة للحقيقة والبرهان؟"<br><br>وعلى مر التاريخ، كان أعظم العقول العلمية والمنطقية من كبار علماء المسلمين: <strong>ابن سينا</strong> رائد الطب، و<strong>ابن الهيثم</strong> مؤسس علم البصريات والمنهج العلمي التجريبي، و<strong>الخوارزمي</strong> مؤسس الجبر. لم ينظروا للإسلام كمهدئ، بل كحقيقة عقلية كبرى تتطابق مع سنن الكون.`,
        scholar: 'حمزة تزورتزيس'
      }
    ]
  },
  christian: {
    icon: '✝️',
    badge: '✝️ للمسيحيين والباحثين في مقارنة الأديان',
    questions: [
      {
        q: 'هل قال المسيح في أي موضع من الأناجيل: "أنا الله فاعبدوني"؟',
        short: 'ماذا يقول الكتاب المقدس نصاً وحرفياً دون تأويل.',
        a: `في الأناجيل الأربعة، لا يوجد نص واحد صريح يقول فيه المسيح: "أنا الله" أو "اعبدوني". بل إن أوضح بيان عقائدي قاله المسيح هو ما ورد في إنجيل يوحنا (17: 3):<br><br><em>"وهذه هي الحياة الأبدية: أن يعرفوك <strong>أنت الإله الحقيقي وحدك</strong>، ويسوع المسيح الذي أرسلته."</em><br><br>فالمسيح هنا يميز بوضوح تام بين الإله الحقيقي وحده، وبين نفسه كرسول مُرسل من الله. والمسيح في الأناجيل:<br>• كان يصلي لله ويتضرع إليه (لوقا 22: 42) — فكيف يصلي الإله لنفسه؟<br>• يقول: "أبي أعظم مني" (يوحنا 14: 28)<br>• يقول: "أنا لا أقدر أن أفعل من نفسي شيئاً" (يوحنا 5: 30)<br><br>عقيدة ألوهية المسيح تم تقريرها رسمياً في مجمع نيقية سنة 325م — أي بعد رفع المسيح بثلاثة قرون!`,
        scholar: 'د. شبير علي'
      },
      {
        q: 'هل عقيدة الثالوث منطقية؟ كيف يكون الواحد ثلاثة والثلاثة واحداً؟',
        short: 'كلمة "الثالوث" لم ترد ولا مرة واحدة في كل نصوص الكتاب المقدس.',
        a: `لفظ "الثالوث" (Trinity) لا وجود له في العهد القديم ولا العهد الجديد، وإنما صاغتها المجامع الكنسية في القرن الرابع الميلادي.<br><br>اللاهوتيون أنفسهم يقرون بأن الثالوث "سر إلهي يعلو على الفهم البشري والمنطق".<br><br>بينما العهد القديم والأنبياء أجمعوا على التوحيد الخالص: <em>"اسمع يا إسرائيل: الرب إلهنا رب واحد"</em> (تثنية 6: 4 — الشماع)، وهي نفس الآية التي أكد عليها المسيح واعتبرها أولى الوصايا (مرقس 12: 29).<br><br>يقدم الإسلام البديل المنطقي الفطري النقي: الله واحد أحد فرد صمد، والمسيح عيسى ابن مريم نبي عظيم ورسول كريم نحبه ونجله، لكنه عبد الله ورسوله.`,
        scholar: 'د. شبير علي'
      },
      {
        q: 'هل نال الكتاب المقدس تحريفاً أو تغييراً عبر التاريخ؟',
        short: 'هذه ليست دعوى إسلامية مجردة، بل هي إجماع علماء النقد النصي للكتاب المقدس عالمياً.',
        a: `العهد الجديد يعتمد على أكثر من 5,800 مخطوطة يونانية، وفيها مئات الآلاف من الاختلافات والفروق النصية، بعضها فروق جوهرية في صلب العقيدة:<br><br>• <strong>خاتمة إنجيل مرقس (16: 9-20):</strong> غير موجودة في أقدم وأوثق المخطوطات كالمخطوطة السينائية والفاتيكانية.<br>• <strong>قصة المرأة الزانية (يوحنا 7: 53 - 8: 11):</strong> مضافة في عصور لاحقة وليست من أصل الإنجيل.<br>• <strong>الفاصلة الروحية (رسالة يوحنا الأولى 5: 7):</strong> النص الوحيد الذي يذكر الثالوث صراحة ("الآب والكلمة والروح القدس، وهؤلاء الثلاثة هم واحد") هو نص مقحم مضاف لا وجود له في أي مخطوطة يونانية قديمة إطلاقاً!<br><br>هذا التحقيق موثق ومعترف به في كتب كبار علماء اللاهوت الغربيين المعاصرين مثل البروفيسور <strong>بارت إيرمان</strong> في كتابه «Misquoting Jesus».`,
        scholar: 'د. شبير علي'
      },
      {
        q: 'لماذا يحتاج الله لأن يموت على الصليب ليغفر الخطايا؟ ألا يستطيع الغفران مباشرة؟',
        short: 'منطق الكفارة والفداء — فحص عقلي مباشر.',
        a: `عقيدة الفداء تزعم أن عدل الله يقتضي موتاً أو فدية بشرية ليتمكن من غفران الخطيئة. لكن تأمل بالمنطق السليم:<br><br><strong>إذا كان الله قديراً ورحيماً، فلماذا لا يغفر مباشرة للتائب الصادق؟</strong> القاضي البشري الذي يسامح التائب يعد رحيماً وعادلاً؛ بينما معاقبة البريء المعصوم (المسيح) بصلبه عن خطايا غيره من المذنبين ينافي صريح العدالة!<br><br>في العهد القديم نجد الغفران المباشر بالتوبة الصادقة: <em>"فإذا رجع الشرير عن جميع خطاياه... فكل معاصيه التي فعلها لا تذكر عليه"</em> (حزقيال 18: 21-22) — دون حاجة لصلب إله.<br><br>والإسلام يقرر أن الله يغفر الذنوب جميعاً لمن تاب إليه وأصلح: ﴿وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَعْفُو عَنِ السَّيِّئَاتِ﴾.`,
        scholar: 'د. شبير علي'
      },
      {
        q: 'ما هي عقيدة المسلمين الحقيقية في المسيح عيسى عليه السلام؟',
        short: 'المسلمون يحبون المسيح حباً جماً ويعظمونه فوق ما يتخيل كثير من الناس.',
        a: `عقيدة كل مسلم تفرض عليه الإيمان الجازم بأن:<br><br>✅ المسيح عيسى ابن مريم وُلد من عذراء بتول دون أب — ومريم عليها السلام مُكرّمة في القرآن بصورة لم تحظ بها في أي كتاب آخر (سورة كاملة باسمها).<br>✅ المسيح أتى بمعجزات باهرة: إبراء الأكمه والأبرص وإحياء الموتى وإبراء المرضى بإذن الله.<br>✅ المسيح هو المسيح الحق (المسيح عيسى عليه السلام).<br>✅ المسيح من أولي العزم الخمسة الكبار من الرسل.<br>✅ المسيح سينزل في آخر الزمان حكماً عدلاً.<br><br>الفارق الجوهري الوحيد: المسلمون لا يعبدون المسيح ولا يجعلونه إلهاً مع الله؛ فالقرآن يقرر أن الله غني عن الصاحبة والولد، وأنه سبحانه إذا قضى أمراً فإنما يقول له كن فيكون.`,
        scholar: 'د. شبير علي'
      },
      {
        q: 'هل هناك نبوءات عن النبي محمد ﷺ في الكتاب المقدس؟',
        short: 'شواهد وبشارات يستدل بها علماء مقارنة الأديان.',
        a: `يشير علماء المسلمين إلى بشارات توراتية وإنجيلية واضحة:<br><br>1. <strong>سفر التثنية (18: 18):</strong> يقول الله لموسى: "أُقيم لهم نبياً من وسط إخوتهم مثلك وأجعل كلامي في فمه". عبارة "من وسط إخوتهم" تشير لإخوة بني إسرائيل (بني إسماعيل — العرب). وممحمد ﷺ هو الشبيه بموسى في ولادته الطبيعية، وزواجه، وتشريعه التام، وتأسيسه لأمة ودولة، ووفاته الطبيعية، بينما المسيح يختلف عن موسى في تلك الخصائص.<br><br>2. <strong>إنجيل يوحنا (16: 7-13):</strong> حديث المسيح عن "المعزي / البارقليط" الذي يأتي بعده ولا يتكلم من نفسه بل بكل ما يسمع يتكلم به ويمكث إلى الأبد.<br><br>3. <strong>نشيد الإنشاد (5: 16):</strong> النص العبري ينطق صراحة لفظ "مَحمَديم" (Muhammadim) بصيغة التعظيم العبرية.`,
        scholar: 'الشيخ أحمد ديدات'
      }
    ]
  },
  jewish: {
    icon: '✡️',
    badge: '✡️ لليهود والباحثين في التوراة والعهد',
    questions: [
      {
        q: 'ما العلاقة بين الإسلام واليهودية؟ هل بينهما تشابه؟',
        short: 'القواسم المشتركة بين الإسلام واليهودية هائلة وعميقة جداً.',
        a: `الإسلام واليهودية يشتركان في صلب العقيدة والشريعة:<br><br>✅ <strong>التوحيد الخالص الصارم:</strong> نفي التجسيد والشرك والثالوث تماماً.<br>✅ <strong>أحكام الأطعمة:</strong> تشابه كبير بين الحلال (Halal) والكوشر (Kosher).<br>✅ <strong>الختان</strong> كعهد إيماني مبارك.<br>✅ <strong>الصلوات اليومية الموقوتة والطهارة بالماء.</strong><br>✅ <strong>تبجيل أنبياء بني إسرائيل:</strong> إبراهيم، موسى، نوح، داود، سليمان — كلهم أنبياء كرام في الإسلام.<br>✅ <strong>أهمية الشريعة والعمل بها:</strong> الشريعة الإسلامية تقابل الهالاخا اليهودية في تنظيم تفاصيل حياة الإنسان.<br><br>الإسلام لا يعتبر نفسه ديناً جديداً أو غريباً، بل هو إحياء وتتويج لملة إبراهيم الحنيفية، وإرسال لرسالة التوحيد لكافة الأمم والشعوب.`,
        scholar: 'د. شبير علي'
      },
      {
        q: 'هل النبي محمد مذكور في نصوص التوراة؟',
        short: 'البشارة بالنبي الشبيه بموسى من بين إخوة إسرائيل.',
        a: `<strong>سفر التثنية (18: 18):</strong> "أُقيم لهم نبياً من وسط إخوتهم مثلك". وفي النص العبري (مِأخيهيم — من إخوتهم) أي نسل إسماعيل بن إبراهيم عليهما السلام.<br><br>لم يدّعِ أي نبي من أنبياء إسرائيل أنه النبي الشبيه بموسى التام؛ بينما انطبقت كافة الشروط على محمد ﷺ:<br>• أتى من إخوة بني إسرائيل (العرب الإسماعيليين)<br>• جاء بشريعة كاملة كبرى كشريعة موسى<br>• قاد أمته وأسس حضارة التوحيد<br>• كلماته محفوظة بدقة حرفية مذهلة (القرآن الكريم).`,
        scholar: 'الشيخ أحمد ديدات'
      },
      {
        q: 'إذا كان الله قد اختار بني إسرائيل، فلماذا يرسل نبياً من خارجهم؟',
        short: 'عهد الله مع إبراهيم كان شاملاً لولديه إسماعيل وإسحاق.',
        a: `عهد الله مع أبي الأنبياء إبراهيم كان شاملاً لإسماعيل وإسحاق معاً: <em>"وأما إسماعيل... فإني أجعله أمة عظيمة"</em> (تكوين 17: 20).<br><br>ورسالة التوحيد لم تكن يوماً حكراً عرقياً لجنس معين؛ فالله هو رب العالمين وخالق البشر جميعاً، وقد أرسل النبي يونس عليه السلام إلى أهل نينوى وهم غير إسرائيليين.<br><br>والإسلام جاء ليحقق وعد الله لإبراهيم بأن تتبرك بصلبه ونوره جميع شعوب الأرض: ﴿وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ﴾.`,
        scholar: 'د. شبير علي'
      },
      {
        q: 'ما موقف الإسلام من عهد الأنبياء وبني إسرائيل؟',
        short: 'الإسلام يثبت أصل النبوات ويجدد عهد التوحيد الأصيل.',
        a: `الإسلام لا ينكر النبوات السابقة ولا يزدري الأنبياء؛ بل يعلمنا أن كل نبي دعا إلى توحيد الله والعدل والرحمة. وموسى عليه السلام ذُكر في القرآن أكثر من أي نبي آخر (136 مرة!).<br><br>والإسلام يرى أن رسالة محمد ﷺ هي الامتداد العالمي لملة إبراهيم عليه السلام، مفتوحة لكل إنسان مهما كان عرقه أو لونه، دون تفريق بين أحد من رسله.`,
        scholar: 'د. شبير علي'
      }
    ]
  },
  other: {
    icon: '🌍',
    badge: '🌍 للمستكشف والباحث عن المعرفة الأولى',
    questions: [
      {
        q: 'ما هو الإسلام في أبسط عبارة ممكنة؟',
        short: 'الدين كله ملخص في أصلين اثنين واضحين جليين.',
        a: `الإسلام يعني في جوهره "الاستسلام والانقياد لله وحده بالتوحيد". ويقوم على ركنين عظيمين:<br><br><strong>1. الإيمان بإله واحد أحد (الله):</strong> لا شريك له، لا ولد له، لا وسيط بينك وبينه. علاقة روحية مباشرة بين العبد وخالقه.<br><br><strong>2. الإيمان بأن محمداً رسول الله:</strong> خاتم سلسلة طويلة من الأنبياء والمرسلين (نوح، إبراهيم، موسى، عيسى...)، وأن القرآن الكريم هو الرسالة الإلهية الخاتمة المحفوظة إلى يوم القيامة.<br><br>هذا هو الأصل الذي ينبثق منه كل شيء في الإسلام: الصلاة، الزكاة، الصيام، ومكارم الأخلاق. بلا غموض ولا تعقيدات فلسفية مبهمة.`,
        scholar: 'سلام هاب'
      },
      {
        q: 'ما هي أركان الإسلام الخمسة؟',
        short: 'الأعمدة الخمسة التي تبني حياة المسلم اليومية.',
        a: `<strong>1. الشهادتان:</strong> "أشهد أن لا إله إلا الله، وأشهد أن محمداً رسول الله" — بوابة الدخول إلى الإسلام بنطقها الصادق.<br><br><strong>2. الصلاة:</strong> خمس صلوات يومية خفيفة موزعة بين الفجر والليل، تستغرق كل صلاة دقائق معدودة، وهي صلة مستمرة بالله في زحمة الحياة.<br><br><strong>3. الزكاة:</strong> نسبة يسيرة (2.5%) تُدفع سنوياً من الفائض المدخر للفقراء والمحتاجين، لتحقيق العدالة والتكافل الاجتماعي.<br><br><strong>4. الصيام:</strong> صيام شهر رمضان المبارك سنوياً من طلوع الفجر حتى غروب الشمس عن الطعام والشراب، لتزكية النفس واستشعار حاجة المساكين.<br><br><strong>5. الحج:</strong> زيارة بيت الله الحرام في مكة المكرمة مرة واحدة في العمر لمن استطاع إليه سبيلاً؛ أعظم تجمع سنوي للمساواة بين البشر من كل أجناس الأرض.`,
        scholar: 'سلام هاب'
      },
      {
        q: 'من هو النبي محمد ﷺ ولماذا يحظى بهذه المكانة العظيمة؟',
        short: 'الشخصية التي غيرت مجرى التاريخ الإنساني والأخلاقي.',
        a: `ولد محمد ﷺ في مكة المكرمة عام 570م، ونشأ يتيماً فقيراً، وعُرف بين قومه بالصدق والأمانة ولُقّب بـ "الأمين".<br><br>وعند بلوغه سن الأربعين نزل عليه الوحي بالقرآن، وخلال 23 سنة أحدث ثورة أخلاقية وإنسانية كبرى:<br><br>• حرّم وألغى العصبية القبلية وأعلن المساواة التامة بين البشر ("لا فضل لعربي على أعجمي إلا بالتقوى")<br>• منح المرأة ذمة مالية مستقلة وحق الميراث والتعليم والخلع<br>• أسس أول دولة للرعاية والتكافل وحقوق المستضعفين<br>• وحّد قبائل العرب المتناحرة على رسالة السلام والتوحيد<br><br>المؤرخ الأمريكي <strong>مايكل هارت</strong> في كتابه الشهير «الخالدون مئة» وضع محمداً ﷺ على رأس القائمة في المرتبة الأولى، باعتباره الشخصية الأكثر تأثيراً ونجاحاً في التاريخين الديني والدنيوي معاً.`,
        scholar: 'سلام هاب'
      },
      {
        q: 'ما هو القرآن الكريم وما الذي يجعله كتاباً فريداً؟',
        short: 'الكتاب الأكثر حفظاً وتأثيراً في تاريخ البشرية.',
        a: `القرآن الكريم هو كلام الله تعالى المنزل على نبيه محمد ﷺ، المتعبد بتلاوته، المحفوظ بحفظ الله.<br><br>ما يميزه عالمياً:<br><br><strong>• المحفوظ حرفياً في الصدور:</strong> أكثر من 10 ملايين إنسان حول العالم يحفظون القرآن كاملاً غيباً عن ظهر قلب عن آبائهم إلى رسول الله. ولو أُحرقت كل الكتب الورقية في الأرض لأُعيد كتابة القرآن حرفاً بحرف دون أي نقص في ساعات معدودة.<br><br><strong>• نسخة واحدة موحدة في كل قارات الأرض:</strong> لا توجد طبعات أو نسخ متباينة؛ القرآن المطبوع في إندونيسيا هو نفسه حرفياً في المغرب وأمريكا ومصر.<br><br><strong>• الإعجاز البياني والعقلي:</strong> تحدى القرآن فصحاء العرب والبشرية أن يأتوا بسورة من مثله، وظل معجزاً ببيانه وهديه وإشاراته الكونية منذ 14 قرناً.`,
        scholar: 'سلام هاب'
      },
      {
        q: 'ما الفرق بين المصطلحات: مسلم، إسلام، الله، عربي؟',
        short: 'أربعة مفاهيم يخلط بينها الكثيرون — توضيح مبسط.',
        a: `<strong>• الإسلام:</strong> هو الدين والمنهج الرباني، ويعني الخضوع والانقياد لله بالسلام والتوحيد.<br><br><strong>• المسلم:</strong> هو الشخص الذي يعتنق الإسلام، أياً كانت جنسيته أو عرقه أو لونه. (العرب يشكلون 20% فقط من مسلمي العالم).<br><br><strong>• الله:</strong> هو الاسم العربي للذات الإلهية الخالقة (نفس الإله الذي يعبده الأنبياء). والمسيحيون العرب في الكنائس يقولون "الله" في صلواتهم، فليس إلهاً خاصاً بالمسلمين، بل هو رب الوجود.<br><br><strong>• عربي:</strong> هوية لغوية وثقافية، وليست ديناً. فأكبر الدول الإسلامية سكاناً (إندونيسيا، باكستان، بنغلاديش، تركيا) ليست دولاً عربية.`,
        scholar: 'سلام هاب'
      }
    ]
  }
};

/* ══════════════════════════════════════════
   3. MYTHS DATA (Bilingual Multi-Language)
══════════════════════════════════════════ */
const MYTHS = [
  {
    cat: 'history',
    en: {
      claim: '"Islam spread by the sword — it was forced on people"',
      answer: `Indonesia is the world's largest Muslim country (275 million Muslims). It was never militarily conquered by Muslims. Same with Malaysia, most of West Africa, and large parts of East Africa — Islam spread through <strong>trade, scholarship, and the compelling message itself</strong>.<br><br>Even in areas that were conquered (like Persia and Egypt), populations converted slowly over centuries — often because Muslim rulers were remarkably just and tolerant compared to their predecessors (Byzantines taxed non-Christians heavily; Muslims did not).`,
      evidence: `Historian Thomas Arnold — a non-Muslim — wrote "The Preaching of Islam" (1896) documenting that the vast majority of Islamic conversion throughout history was peaceful.`
    },
    ar: {
      claim: '«الإسلام انتشر بالسيف وأُجبر الناس على الدخول فيه»',
      answer: `إندونيسيا هي أكبر دولة إسلامية في العالم (أكثر من 275 مليون مسلم)، ولم يدخلها جندي مسلم واحد فاتحاً! وكذلك ماليزيا، وغالبية دول غرب وشرق إفريقيا؛ انتشر فيها الإسلام عبر <strong>التجارة والأخلاق والدعوة الصادقة</strong>.<br><br>وحتى في البلدان التي فُتحت كبلاد فارس ومصر، اعتنقت الشعوب الإسلام تدريجياً عبر قرون طويلة، لما رأوه من عدل وتسامح المسلمين وحريتهم الدينية مقارنة باضطهاد الروم البيزنطيين الذين فرضوا ضرائب باهظة على مخالفي مذهبهم.`,
      evidence: `كتب المؤرخ البريطاني "توماس أرنولد" في كتابه المرجعي «الدعوة إلى الإسلام» (1896م) مؤكداً أن الغالبية العظمى من اعتناق الإسلام عبر التاريخ تمت بالاقتناع السلمي الحر دون أي إكراه بالسيف.`
    }
  },
  {
    cat: 'women',
    en: {
      claim: '"Islam oppresses women and treats them as property"',
      answer: `1,400 years ago, Islam gave women the right to:<br>• <strong>Own property</strong> (the UK didn't until 1882 CE)<br>• <strong>Inherit wealth</strong> independently<br>• <strong>Initiate divorce</strong> (Khul'a — before Western women had this right)<br>• <strong>Run businesses</strong> — Khadijah, Muhammad's first wife, was a successful merchant who employed Muhammad before they married<br>• <strong>Pursue education</strong> — Aisha, Muhammad's wife, became one of Islam's greatest scholars, teaching thousands of students<br><br>The problem is confusing <strong>cultural practices</strong> in some Muslim-majority countries with actual Islamic teaching. Islam's track record on women's rights, in its time, was revolutionary.`,
      evidence: `The UK Married Women's Property Act was passed in 1882. Islam granted women full independent financial identity in 610 CE — over 1,270 years earlier.`
    },
    ar: {
      claim: '«الإسلام يضطهد المرأة ويعاملها كتابع أو ملكية»',
      answer: `قبل 1400 عام، أقر الإسلام للمرأة حقوقاً كانت ثورة حقيقية لم يعرفها الغرب إلا حديثاً:<br>• <strong>الذمة المالية المستقلة وتملك العقارات</strong> (بريطانيا لم تمنح هذا الحق إلا عام 1882م!)<br>• <strong>حق الميراث المستقل</strong> دون وصاية أحد<br>• <strong>حق طلب إنهاء الزواج (الخلع)</strong> بإرادتها<br>• <strong>حق التجارة وإدارة الأعمال</strong> — السيدة خديجة رضي الله عنها كانت تاجرة تدير تجارتها ووظفت النبي ﷺ فيها قبل زواجهما<br>• <strong>حق التعليم والفتوى</strong> — السيدة عائشة رضي الله عنها كانت من كبار فقهاء الصحابة ومرجعاً تشريعياً للأمة<br><br>الخلط الشائع يحدث عند نسبة بعض <strong>العادات والتقاليد القبلية الخاطئة</strong> إلى تعاليم الإسلام النقية التي كرّمت المرأة.`,
      evidence: `قانون تملك المرأة المتزوجة ببريطانيا صدر سنة 1882م، بينما قرر الإسلام استقلال المرأة المالي والمدني التام سنة 610م (فارق 1,272 عاماً لصالح الإسلام).`
    }
  },
  {
    cat: 'prophet',
    en: {
      claim: '"Muhammad married a 6-year-old child — he was a pedophile"',
      answer: `This is a common emotional charge that deserves a serious historical and factual answer:<br><br><strong>1. Historical Context:</strong> In 7th century Arabia — and across medieval Europe — marriage readiness was tied to full physical and mental maturity, not modern birth certificates. The Catholic Church maintained a minimum marriage age of 12 for girls until 1917 CE.<br><br><strong>2. Historical Timeline & Calculations:</strong> Numerous prominent Islamic historians, cross-referencing Aisha's age with her sister Asma (who was 10 years older and died in 73 AH at age 100), demonstrate Aisha was between 16 and 19 years old at the time of marriage.<br><br><strong>3. Mutual Love & Leadership:</strong> Aisha lived a loving life with the Prophet, was revered as the foremost scholar of Medina, and not even the fierce pagan enemies of Muhammad in Mecca ever criticized the marriage — because it was completely standard and honorable in their time.`,
      evidence: `Not a single contemporary enemy of the Prophet ever objected to this marriage. Furthermore, historical age cross-referencing with her elder sister Asma indicates her age was around 17-19.`
    },
    ar: {
      claim: '«زواج النبي ﷺ من السيدة عائشة في سن مبكرة»',
      answer: `هذه الشبهة تتكرر كثيراً وتستحق بياناً علمياً وتاريخياً موثقاً:<br><br><strong>1. السياق التاريخي للبشرية:</strong> في القرن السابع الميلادي في جزيرة العرب وأوروبا وسائر الحضارات، كان مقياس الزواج هو البلوغ الجسدي والنضج العقلي الكامل وليس السن المدني المعاصر. بل إن الكنيسة الكاثوليكية ظلت تجيز زواج الفتاة في سن 12 عاماً حتى قانون الكنسي لسنة 1917م!<br><br><strong>2. التحقيق التاريخي لسنها:</strong> حقق جمع من المؤرخين والباحثين المعاصرين بمقارنة التواريخ وأعمار الصحابة (خصوصاً أختها أسماء التي كانت تكبرها بعشر سنوات وتوفيت سنة 73هـ عن 100 عام) أن عمر عائشة عند الزواج كان بين 16 و19 عاماً.<br><br><strong>3. الحب المتبادل والريادة العلمية:</strong> عاشت السيدة عائشة حياة ملؤها الحب والمودة، وأصبحت معلمة الأمة وفقيهة الإسلام، ولم يطعن أحد من أعداء النبي من كفار قريش في هذا الزواج إطلاقاً لأنه كان عرفاً طبيعياً راقياً.`,
      evidence: `لم يعترض أعداء النبي المعاصرون له قط على هذا الزواج، ولو كان غريباً في عرفهم لكان أول ورقة هاجموه بها. وتحقيق عمر أختها أسماء يرجح سنها بين 17 و19 عاماً.`
    }
  },
  {
    cat: 'violence',
    en: {
      claim: '"Islam promotes terrorism and commands killing non-Muslims"',
      answer: `The Quran (5:32) explicitly proclaims: <strong>"Whoever kills a soul... it is as if he had killed all mankind. And whoever saves a soul, it is as if he had saved all mankind."</strong><br><br>Terrorism and harm to innocent people are categorically forbidden in Islamic jurisprudence by universal scholarly consensus worldwide.<br><br>Mainstream scholars classify terrorist groups as violent deviants acting against Islamic law. If Islam promoted terrorism, the 1.8 billion peaceful Muslims around the world would not be living as compassionate neighbors, doctors, teachers, and citizens globally. Over 85% of terror victims are Muslims themselves.`,
      evidence: `The Global Terrorism Database confirms that over 85% of terrorist attacks and casualties occur within Muslim-majority nations; Muslims bear the brunt of extremist violence, not its perpetrators.`
    },
    ar: {
      claim: '«الإسلام يدعو للإرهاب وقتل غير المسلمين»',
      answer: `ينص القرآن الكريم صراحة في سورة المائدة (آية 32): <strong>﴿مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا﴾</strong>.<br><br>الإرهاب واستهداف المدنيين محرم قطعاً في الشريعة الإسلامية بإجماع علماء ومجامع الفقه الإسلامي في الشرق والغرب.<br><br>والجماعات المتطرفة يصفها علماء المسلمين بـ "الخوارج المجرمين المارقين". ولو كان الإسلام يأمر بالإرهاب لكان 1.8 مليار مسلم مصدر خطر عالمي، بينما هم أطباء ومهندسون ومواطنون مسالمون في كل قارات الأرض، وأكثر من 85% من ضحايا الإرهاب هم من المسلمين أنفسهم.`,
      evidence: `قاعدة بيانات الإرهاب العالمية (GTD) بجامعة ميريلاند توضح أن أكثر من 85% من ضحايا الجماعات الإرهابية هم من المسلمين في بلدان إسلامية، مما يثبت براءة الإسلام التامة منها.`
    }
  },
  {
    cat: 'science',
    en: {
      claim: '"The Quran contradicts modern science"',
      answer: `The Quran contains specific, verifiable scientific descriptions that stunned modern specialists:<br><br>• <strong>Universe expansion (51:47):</strong> "And the heaven We constructed with strength, and indeed, We are its expander" — confirmed by Edwin Hubble in 1929.<br>• <strong>Embryonic development (23:12-14):</strong> Accurately describes stages (nutfah, 'alaqah, mudghah). World-renowned embryologist Dr. Keith Moore confirmed this was scientifically unknowable in the 7th century.<br>• <strong>Mountains as deep stabilizers (21:31):</strong> Modern geophysics confirms mountains possess deep crustal roots stabilizing tectonic plates.<br>• <strong>Water as foundation of all life (21:30):</strong> Fundamental biological reality.<br>• <strong>Iron origin (57:25):</strong> Scientists verify iron was sent to Earth from supernovas in outer space.`,
      evidence: `Dr. Keith Moore, author of "The Developing Human", stated at international conferences that the Quranic descriptions of embryonic growth are astonishingly accurate and could not be attributed to 7th-century knowledge.`
    },
    ar: {
      claim: '«القرآن يتعارض مع العلم الحديث»',
      answer: `يحتوي القرآن الكريم على حقائق كونية وطبية دقيقة كشفها العلم الحديث بعد 14 قرناً دون أدنى تصادم:<br><br>• <strong>اتساع الكون (الذاريات: 47):</strong> ﴿وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ﴾ — وهو ما أثبته العالم إدوين هابل سنة 1929م.<br>• <strong>أطوار الجنين (المؤمنون: 12-14):</strong> نطفة ثم علقة ثم مضغة... شهد البروفيسور كيث مور (عالم الأجنة الكندي العالمي) بدقتها المذهلة.<br>• <strong>الجبال أوتاداً لتثبيت القشرة (الأنبياء: 31):</strong> أثبتت علوم الجيولوجيا أن للجبال جذوراً وتدية عميقة تحفظ توازن الصفائح الأرضية.<br>• <strong>أصل الحياة من الماء (الأنبياء: 30):</strong> ﴿وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ﴾ — الحقيقة الأولى في علم الأحياء.<br>• <strong>إنزال الحديد من الفضاء (الحديد: 25):</strong> أثبتت الفيزياء الفلكية أن عنصر الحديد لا يتكون على الأرض بل أُرسل إليها عبر النيازك الفضائية.`,
      evidence: `البروفيسور كيث مور مؤلف أشهر كتاب طبي في علم الأجنة «The Developing Human» صرح في مؤتمرات دولية أن دقة وصف القرآن لأطوار الجنين مستحيل أن تكون من علم البشر قبل 1400 عام.`
    }
  },
  {
    cat: 'history',
    en: {
      claim: `"Muslims don't believe in Jesus — Islam rejects him"`,
      answer: `Muslims <strong>revere and love Jesus (Isa) deeply</strong>. He is mentioned by name in the Quran more times than Prophet Muhammad himself.<br><br>Muslims believe:<br>✅ Jesus was born miraculously of the Virgin Mary (Maryam)<br>✅ Jesus performed miraculous healings by God's permission (curing the blind and raising the dead)<br>✅ Jesus was the Messiah (Al-Masih) and one of God's greatest messengers<br>✅ Jesus will return before the Day of Judgment<br><br>The only distinction: Muslims worship God alone and believe Jesus was a noble prophet rather than God incarnate or the literal physical son of God — a theology also held by early monotheistic Christians.`,
      evidence: `An entire chapter of the Quran is named after Mary (Surah Maryam). Jesus is mentioned 25 times with honorific titles such as "Word from God" and "Messiah".`
    },
    ar: {
      claim: '«المسلمون لا يؤمنون بالمسيح ويرفضونه»',
      answer: `المسلمون **يحبون المسيح عيسى عليه السلام ويعظمونه**، واسمه مذكور في القرآن أكثر من نبينا محمد ﷺ نفسه!<br><br>عقيدة كل مسلم تفرض عليه الإيمان بـ:<br>✅ ولادة المسيح المعجزة من العذراء البتول مريم عليها السلام دون أب<br>✅ معجزات المسيح الباهرة (إبراء الأكمه والأبرص وإحياء الموتى بإذن الله)<br>✅ أن المسيح هو رسول الله وكلمته ألقاها إلى مريم وروح منه<br>✅ عودة المسيح عيسى عليه السلام في آخر الزمان حكماً عدلاً مقسطاً<br><br>الفارق الوحيد: المسلمون يوحدون الله ولا يشركون به أحداً، فيعتقدون أن المسيح عبد الله ورسوله، وليس الله المتجسد، وهو نفس اعتقاد أوائل المسيحيين الموحدين كالأبيونيين.`,
      evidence: `سورة كاملة في القرآن باسم «سورة مريم»، وسورة أخرى باسم «آل عمران»، وذُكر المسيح عيسى ابن مريم 25 مرة بأجلّ صفات التعظيم والتبجيل.`
    }
  },
  {
    cat: 'prophet',
    en: {
      claim: `"Muslims worship Muhammad — he's their God"`,
      answer: `This is completely untrue. Muslims worship God (Allah) alone. Muhammad is honored as God's final messenger, but never worshipped.<br><br>When Muhammad passed away, his closest companion Abu Bakr declared to the grieving community words remembered throughout history:<br><br><em>"Whoever worshipped Muhammad — know that Muhammad has died. But whoever worshipped God — God is alive and never dies."</em><br><br>The first pillar of Islam explicitly declares: "There is no god but God, and Muhammad is His <strong>messenger</strong>."`,
      evidence: `The foundational Islamic creed in Sahih al-Bukhari: Prophet Muhammad said: "Do not praise me excessively as Christians did with the son of Mary; I am only His servant, so call me the servant of Allah and His messenger."`
    },
    ar: {
      claim: '«المسلمون يعبدون محمداً كإله لهم»',
      answer: `هذا ادعاء عارٍ عن الصحة تماماً. المسلمون يعبدون الله وحده لا شريك له. ومحمد ﷺ بشر ورسول يُتبع ويُحب، لكنه لا يُعبد أبداً.<br><br>لما توفي رسول الله ﷺ خطب أبو بكر الصديق رضي الله عنه خطبته الشهيرة الحاسمة:<br><br><em>«أَلَا مَنْ كَانَ يَعْبُدُ مُحَمَّدًا فَإِنَّ مُحَمَّدًا قَدْ مَاتَ، وَمَنْ كَانَ يَعْبُدُ اللَّهَ فَإِنَّ اللَّهَ حَيٌّ لَا يَمُوتُ»</em> [صحيح البخاري].<br><br>الركن الأول في الإسلام: "أشهد أن لا إله إلا الله، وأشهد أن محمداً **عبده ورسوله**".`,
      evidence: `الحديث الصحيح في البخاري: قال النبي ﷺ: «لَا تُطْرُونِي كَمَا أَطْرَتِ النَّصَارَى ابْنَ مَرْيَمَ، فَإِنَّمَا أَنَا عَبْدُهُ، فَقُولُوا: عَبْدُ اللَّهِ وَرَسُولُهُ».`
    }
  },
  {
    cat: 'violence',
    en: {
      claim: '"Jihad means holy war against non-Muslims"',
      answer: `"Jihad" in Arabic literally means <strong>"striving" or "exerting effort"</strong> in goodness.<br><br>The greatest jihad in Islamic teaching is <strong>Jihad al-Nafs</strong> — the inner struggle against self-desires, arrogance, and moral shortcomings. The Prophet also highlighted supporting parents as a true jihad.<br><br>As for armed struggle (qital), it is strictly defensive to resist aggression and is bound by humanitarian ethics established 1,400 years ago:<br>• Forbidden to kill women, children, the elderly, or civilians<br>• Forbidden to destroy crops, orchards, or water wells<br>• Forbidden to harm priests, monks, or places of worship<br>• Immediate cessation of conflict when the opposing party inclines toward peace.`,
      evidence: `First Caliph Abu Bakr's military instructions: "Do not betray, do not mutilate, do not kill a child, a woman, or an old person. Do not cut down fruit-bearing trees, and leave those who devoted themselves to monasteries alone."`
    },
    ar: {
      claim: '«الجهاد يعني الحرب المقدسة وسفك الدماء»',
      answer: `كلمة "الجهاد" في لغة العرب والشريعة تعني <strong>"بذل الجهد واستفراغ الوسع"</strong> في فعل الخير ودفع الباطل.<br><br>أعظم أنواع الجهاد في الإسلام هو <strong>جهاد النفس</strong>؛ كما قال ﷺ: «المُجَاهِدُ مَنْ جَاهَدَ نَفْسَهُ فِي سَبِيلِ اللَّهِ». وهناك جهاد الكلمة الصادقة، وبر الوالدين الذي فضله النبي على الخروج للقتال.<br><br>أما القتال (قِتال الدفاع ودفع العدوان) فهو محكوم بقواعد إنسانية وأخلاقية صارمة سبقت ميثاق جنيف بـ 14 قرناً:<br>• تحريم قتل الأطفال والنساء والشيوخ والعجزة<br>• تحريم قطع الأشجار وهدم البيوت ودور العبادة<br>• تحريم المساس بالرهبان والمدنيين المسالمين<br>• وجوب إيقاف الحرب فوراً متى ما جنح الطرف الآخر للسلم.`,
      evidence: `وصية أبي بكر الصديق لجيش المسلمين: «لا تخونوا ولا تغدروا، ولا تقتلوا طفلاً ولا امرأة ولا شيخاً كبيراً، ولا تقطعوا شجراً مثمراً، وستمرون بأقوام فرغوا أنفسهم في الصوامع فدعوهم وما فرغوا أنفسهم له».`
    }
  }
];

/* ══════════════════════════════════════════
   4. DEBATES & VIDEO DATA (1-Click Cinema)
══════════════════════════════════════════ */
const DEBATES = [
  {
    "cat": "atheist",
    "ytId": "uSwJuOPG4FI",
    "title": "Does God Exist? — The Most Watched Muslim vs. Atheist Debate",
    "title_ar": "هل الله موجود؟ — مناظرة العصر بين حمزة تزورتزيس ولورنس كراوس",
    "scholar": "Hamza Tzortzis",
    "scholar_ar": "حمزة تزورتزيس",
    "opponent": "Prof. Lawrence Krauss (Theoretical Physicist)",
    "opponent_ar": "البروفيسور لورنس كراوس (عالم فيزياء نظرية)",
    "duration": "2:14:09",
    "icon": "🔬",
    "tags": [
      "God",
      "Big Bang",
      "Cosmology"
    ],
    "tags_ar": [
      "وجود الله",
      "الانفجار العظيم",
      "الفيزياء"
    ],
    "gradient": "linear-gradient(135deg, #0a1628, #1a2a4a)"
  },
  {
    "cat": "christian",
    "ytId": "UQO8Ul4r3KQ",
    "title": "Is Jesus God? — Muslim Scholar vs. Christian Theologian",
    "title_ar": "هل المسيح هو الله؟ — د. شبير علي ضد جاي داير",
    "scholar": "Dr. Shabir Ally",
    "scholar_ar": "د. شبير علي",
    "opponent": "Jay Dyer (Orthodox Theologian)",
    "opponent_ar": "جاي داير (باحث ولاهوتي أرثوذكسي)",
    "duration": "1:52:33",
    "icon": "✝️",
    "tags": [
      "Jesus",
      "Trinity",
      "Bible"
    ],
    "tags_ar": [
      "المسيح",
      "التثليث",
      "الكتاب المقدس"
    ],
    "gradient": "linear-gradient(135deg, #1a0a0a, #3a1010)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "cPkDQvmDviQ",
    "title": "Quran & Modern Science — Open Q&A Session",
    "title_ar": "القرآن والعلم الحديث — جلسة أسئلة وأجوبة مفتوحة",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Live Global Audience",
    "opponent_ar": "جمهور عالمي مفتوح",
    "duration": "1:23:44",
    "icon": "⚗️",
    "tags": [
      "Science",
      "Quran",
      "Embryology"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الإعجاز العلمي",
      "علم الأجنة"
    ],
    "gradient": "linear-gradient(135deg, #0a1a0a, #102810)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "UMFzh6MLcUQ",
    "title": "Is the Bible God’s Word? — Historic Debate",
    "title_ar": "هل الكتاب المقدس كلمة الله؟ — المناظرة التاريخية الكبرى",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Jimmy Swaggart",
    "opponent_ar": "القس جيمي سواجارت",
    "duration": "1:52:18",
    "icon": "📖",
    "tags": [
      "Bible",
      "Scripture",
      "Debate"
    ],
    "tags_ar": [
      "الكتاب المقدس",
      "مقارنة الأديان",
      "مناظرة كبرى"
    ],
    "gradient": "linear-gradient(135deg, #1a0a0a, #2a1010)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "eMlDn2sVY3M",
    "title": "Is Jesus God? — Debate with Dr. Anis Shorrosh",
    "title_ar": "هل المسيح هو الله؟ — مناظرة أحمد ديدات ضد أنيس شروش",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Anis Shorrosh",
    "opponent_ar": "د. أنيس شروش",
    "duration": "2:31:14",
    "icon": "✝️",
    "tags": [
      "Christology",
      "Debate",
      "Bible"
    ],
    "tags_ar": [
      "ألوهية المسيح",
      "مناظرة تاريخية",
      "تحقيق النصوص"
    ],
    "gradient": "linear-gradient(135deg, #1a0808, #301010)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "8rgZVuiWBw8",
    "title": "Was Christ Crucified? — Ahmed Deedat vs Josh McDowell",
    "title_ar": "هل صلب المسيح؟ — مناظرة أحمد ديدات ضد جوش ماكدويل",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Josh McDowell",
    "opponent_ar": "جوش ماكدويل",
    "duration": "2:10:45",
    "icon": "✝️",
    "tags": [
      "Crucifixion",
      "Gospels",
      "History"
    ],
    "tags_ar": [
      "صلب المسيح",
      "أدلة الأناجيل",
      "حوار فكري"
    ],
    "gradient": "linear-gradient(135deg, #1a0a0a, #321010)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "cpiXcP_cD8w",
    "title": "Is Jesus God? — Debate with Pastor Stanley Sjoberg",
    "title_ar": "هل عيسى هو الله؟ — مناظرة أحمد ديدات ضد القس ستانلي سوبيرغ",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Stanley Sjoberg",
    "opponent_ar": "القس ستانلي سوبيرغ",
    "duration": "1:44:20",
    "icon": "⚖️",
    "tags": [
      "Monotheism",
      "Jesus",
      "Stockholm"
    ],
    "tags_ar": [
      "التوحيد",
      "المسيح في الإسلام",
      "مناظرة السويد"
    ],
    "gradient": "linear-gradient(135deg, #181408, #30260f)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "pXv64o6abKg",
    "title": "Crucifixion or Cruci-Fiction? — Landmark Lecture",
    "title_ar": "الصلب حقيقة أم وهم؟ — حوار ومحاضرة أحمد ديدات",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Open Audience",
    "opponent_ar": "حوار مع الحضور",
    "duration": "1:32:15",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "Analysis",
      "Scripture"
    ],
    "tags_ar": [
      "تحقيق الصلب",
      "نقد الروايات",
      "حوار مفتوح"
    ],
    "gradient": "linear-gradient(135deg, #101a18, #1a302c)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "yc0D6mskLGM",
    "title": "Prophet Muhammad ﷺ in the Bible — Textual Analysis",
    "title_ar": "بشارات النبي محمد ﷺ في الكتاب المقدس — دراسة موثقة",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Biblical Prophecy Analysis",
    "opponent_ar": "دراسة النصوص والنبوءات",
    "duration": "1:15:30",
    "icon": "📜",
    "tags": [
      "Prophecies",
      "Bible",
      "Evidence"
    ],
    "tags_ar": [
      "البشارات النبوية",
      "العهد القديم",
      "البرهان النصي"
    ],
    "gradient": "linear-gradient(135deg, #151a10, #223018)"
  },
  {
    "cat": "atheist",
    "scholar_id": "hijab",
    "ytId": "eSMD1sPaao0",
    "title": "Atheism, Morality & Purpose of Life",
    "title_ar": "الإلحاد، الأخلاق، والغاية من الحياة في حديقة هايد بارك",
    "scholar": "Mohammed Hijab",
    "scholar_ar": "محمد حجاب",
    "opponent": "Multiple Skeptics at Speaker’s Corner",
    "opponent_ar": "محاورون وفلاسفة في ركن المتحدثين",
    "duration": "58:32",
    "icon": "🏛️",
    "tags": [
      "Morality",
      "Purpose",
      "Logic"
    ],
    "tags_ar": [
      "الأخلاق الموضوعية",
      "معنى الحياة",
      "المنطق العقلي"
    ],
    "gradient": "linear-gradient(135deg, #0a0a10, #15152a)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "OVJjmj6FPXM",
    "title": "Is the Bible God's Word? — The Historic USA Debate",
    "title_ar": "هل الكتاب المقدس كلام الله؟ — المناظرة التاريخية الكبرى في أمريكا",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Jimmy Swaggart",
    "opponent_ar": "القس جيمي سواجارت",
    "duration": "2:54:44",
    "icon": "📖",
    "tags": [
      "Bible",
      "Scripture",
      "Gospels"
    ],
    "tags_ar": [
      "الكتاب المقدس",
      "تحقيق النصوص",
      "مناظرة كبرى"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "ryxiiwVMCF4",
    "title": "The Quran or the Bible: Which is God's Word?",
    "title_ar": "القرآن أم الكتاب المقدس: أيهما كلام الله؟",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Anis Shorrosh",
    "opponent_ar": "د. أنيس شروش",
    "duration": "2:38:45",
    "icon": "📖",
    "tags": [
      "Word of God",
      "Quran",
      "Bible"
    ],
    "tags_ar": [
      "كلام الله",
      "القرآن الكريم",
      "الإنجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "bdbDSCZO9tQ",
    "title": "Is Jesus God? — The Stockholm Landmark Debate",
    "title_ar": "هل المسيح هو الله؟ — مناظرة ستوكهولم التاريخية الكبرى",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Stanley Sjoberg",
    "opponent_ar": "القس ستانلي سوبيرغ",
    "duration": "2:49:23",
    "icon": "📖",
    "tags": [
      "Jesus",
      "Divinity",
      "Trinity"
    ],
    "tags_ar": [
      "ألوهية المسيح",
      "الثالوث",
      "نصوص صريحة"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "w-phoeC_i7U",
    "title": "Was Christ Crucified? — Ahmed Deedat vs. Josh McDowell",
    "title_ar": "هل صُلب المسيح؟ — مناظرة أحمد ديدات ضد جوش ماكدويل",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Josh McDowell",
    "opponent_ar": "جوش ماكدويل",
    "duration": "2:55:06",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "History",
      "Gospels"
    ],
    "tags_ar": [
      "صلب المسيح",
      "حقائق التاريخ",
      "روايات الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "QCsKW8AAy1U",
    "title": "Crucifixion or Cruci-Fiction? — The Ultimate Inquiry",
    "title_ar": "الصلب بين الحقيقة والوهم — دراسة نقدية موثقة",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Christian Theologians Panel",
    "opponent_ar": "حوار ونقاش مع علماء اللاهوت",
    "duration": "2:36:40",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "Scripture",
      "Evidence"
    ],
    "tags_ar": [
      "أكذوبة الصلب",
      "أدلة الأناجيل",
      "برهان العقل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "jHxqvbvIrFk",
    "title": "Muhammad ﷺ the Natural Successor to Christ",
    "title_ar": "محمد ﷺ الخليفة الطبيعي للمسيح عيسى عليه السلام",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Church Leaders & Scholars",
    "opponent_ar": "علماء ورجال الكنيسة",
    "duration": "3:25:51",
    "icon": "📖",
    "tags": [
      "Muhammad",
      "Christ",
      "Prophecy"
    ],
    "tags_ar": [
      "النبوة الخاتمة",
      "المسيح في الإسلام",
      "البشارات"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "science",
    "scholar_id": "deedat",
    "ytId": "JQu37npcOLQ",
    "title": "Al-Quran: The Miracle of Miracles — Public Address",
    "title_ar": "القرآن الكريم معجزة المعجزات وبراهين الوحي الخالد",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "International Assembly",
    "opponent_ar": "جمهور ومفكرو الغرب",
    "duration": "2:35:11",
    "icon": "📖",
    "tags": [
      "Quran",
      "Miracle",
      "Prophethood"
    ],
    "tags_ar": [
      "معجزة القرآن",
      "إعجاز الوحي",
      "صدق النبوة"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "6gf-ZGIdB_U",
    "title": "Is Jesus God? — Ahmed Deedat vs. Dr. Floyd Clark",
    "title_ar": "هل عيسى هو الله؟ — مناظرة أحمد ديدات ضد د. فلويد كلارك",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Floyd Clark",
    "opponent_ar": "د. فلويد كلارك",
    "duration": "43:58",
    "icon": "📖",
    "tags": [
      "Monotheism",
      "Jesus",
      "Logic"
    ],
    "tags_ar": [
      "التوحيد",
      "المسيح في الإنجيل",
      "العقل والبرهان"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "JnRFbUVkVAc",
    "title": "Is Jesus God? — Ahmed Deedat vs. Pastor Eric Bock",
    "title_ar": "هل المسيح إله؟ — مناظرة كوبنهاغن ضد القس إريك بوك",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Eric Bock (Copenhagen)",
    "opponent_ar": "القس إريك بوك (الدنمارك)",
    "duration": "3:48:24",
    "icon": "📖",
    "tags": [
      "Copenhagen",
      "Divinity",
      "Trinity"
    ],
    "tags_ar": [
      "مناظرة الدنمارك",
      "ألوهية المسيح",
      "الأقانيم"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "science",
    "scholar_id": "deedat",
    "ytId": "PFZOp1hNVuw",
    "title": "The Message of Truth — Dialogue with Dr. Gary Miller",
    "title_ar": "حوار الحقيقة والبرهان مع عالم الرياضيات د. غاري ميلر",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Gary Miller (Mathematician)",
    "opponent_ar": "د. غاري ميلر (عالم رياضيات ومبشر سابق)",
    "duration": "4:28:26",
    "icon": "📖",
    "tags": [
      "Logic",
      "Truth",
      "Mathematics"
    ],
    "tags_ar": [
      "المنطق الرياضي",
      "طريق الحق",
      "إعجاز القرآن"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "jewish",
    "scholar_id": "deedat",
    "ytId": "MzycqrXETvE",
    "title": "Arabs and Israel: Conflict or Conciliation?",
    "title_ar": "العرب وإسرائيل: جذور الصراع وحقائق النبوءات",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Middle Eastern Historians",
    "opponent_ar": "حوار مع مؤرخين وباحثين",
    "duration": "2:39:07",
    "icon": "📖",
    "tags": [
      "Torah",
      "History",
      "Justice"
    ],
    "tags_ar": [
      "التوراة",
      "أرض فلسطين",
      "حقائق التاريخ"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "IlA22NNFlDw",
    "title": "What the Bible Says About Muhammad ﷺ",
    "title_ar": "ماذا يقول الكتاب المقدس عن محمد ﷺ؟ — دراسة موثقة",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Biblical Scholars",
    "opponent_ar": "باحثون في العهد القديم والجديد",
    "duration": "3:15:29",
    "icon": "📖",
    "tags": [
      "Prophecies",
      "Bible",
      "Deuteronomy"
    ],
    "tags_ar": [
      "بشارات الأنبياء",
      "سفر التثنية",
      "النبي الموعود"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "2a3uZQW1yuo",
    "title": "Combat Kit Against Bible Thumpers — Masterclass",
    "title_ar": "حقيبة المناظر في الرد على المنصرين وتفنيد المزاعم",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Christian Evangelists",
    "opponent_ar": "حوار مع وفد المنصرين",
    "duration": "2:44:05",
    "icon": "📖",
    "tags": [
      "Apologetics",
      "Dialogue",
      "Evidence"
    ],
    "tags_ar": [
      "قواعد المناظرة",
      "تفنيد الشبهات",
      "حجة القرآن"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "dnV4SuytL9w",
    "title": "Christ in Islam — An Eloquent Theological Presentation",
    "title_ar": "مكانة المسيح في الإسلام ورسالة السلام",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Interfaith Conference",
    "opponent_ar": "مؤتمر حوار الأديان العالمي",
    "duration": "2:35:23",
    "icon": "📖",
    "tags": [
      "Jesus",
      "Mary",
      "Islam"
    ],
    "tags_ar": [
      "المسيح عيسى",
      "مريم العذراء",
      "عقيدة التوحيد"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "94Lm5Z4Uc84",
    "title": "Resurrection or Resuscitation? — Medical & Scriptural Analysis",
    "title_ar": "القيامة أم الإفاقة؟ — دراسة طبية ونصية لحادثة الصلب",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Theological & Medical Forum",
    "opponent_ar": "حوار علمي طبي مع اللاهوتيين",
    "duration": "2:42:32",
    "icon": "📖",
    "tags": [
      "Resurrection",
      "Medicine",
      "Gospels"
    ],
    "tags_ar": [
      "حقيقة القيامة",
      "الطب الجنائي",
      "نصوص الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "KEbNsHDHOAM",
    "title": "Is the Bible God's Word? — The Historic USA Debate (Session 2)",
    "title_ar": "هل الكتاب المقدس كلام الله؟ — المناظرة التاريخية الكبرى في أمريكا (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Jimmy Swaggart",
    "opponent_ar": "القس جيمي سواجارت",
    "duration": "1:29:32",
    "icon": "📖",
    "tags": [
      "Bible",
      "Scripture",
      "Gospels"
    ],
    "tags_ar": [
      "الكتاب المقدس",
      "تحقيق النصوص",
      "مناظرة كبرى"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "X-Yq0APmdMU",
    "title": "The Quran or the Bible: Which is God's Word? (Session 2)",
    "title_ar": "القرآن أم الكتاب المقدس: أيهما كلام الله؟ (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Anis Shorrosh",
    "opponent_ar": "د. أنيس شروش",
    "duration": "40:56",
    "icon": "📖",
    "tags": [
      "Word of God",
      "Quran",
      "Bible"
    ],
    "tags_ar": [
      "كلام الله",
      "القرآن الكريم",
      "الإنجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "y5TyOuEf3Gs",
    "title": "Is Jesus God? — The Stockholm Landmark Debate (Session 2)",
    "title_ar": "هل المسيح هو الله؟ — مناظرة ستوكهولم التاريخية الكبرى (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Stanley Sjoberg",
    "opponent_ar": "القس ستانلي سوبيرغ",
    "duration": "1:28:00",
    "icon": "📖",
    "tags": [
      "Jesus",
      "Divinity",
      "Trinity"
    ],
    "tags_ar": [
      "ألوهية المسيح",
      "الثالوث",
      "نصوص صريحة"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "X2pK-X1s5Rc",
    "title": "Was Christ Crucified? — Ahmed Deedat vs. Josh McDowell (Session 2)",
    "title_ar": "هل صُلب المسيح؟ — مناظرة أحمد ديدات ضد جوش ماكدويل (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Josh McDowell",
    "opponent_ar": "جوش ماكدويل",
    "duration": "3:06:27",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "History",
      "Gospels"
    ],
    "tags_ar": [
      "صلب المسيح",
      "حقائق التاريخ",
      "روايات الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "EQ_Xov3ud4Q",
    "title": "Crucifixion or Cruci-Fiction? — The Ultimate Inquiry (Session 2)",
    "title_ar": "الصلب بين الحقيقة والوهم — دراسة نقدية موثقة (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Christian Theologians Panel",
    "opponent_ar": "حوار ونقاش مع علماء اللاهوت",
    "duration": "1:21:33",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "Scripture",
      "Evidence"
    ],
    "tags_ar": [
      "أكذوبة الصلب",
      "أدلة الأناجيل",
      "برهان العقل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "Jv-i5JI30Ww",
    "title": "Muhammad ﷺ the Natural Successor to Christ (Session 2)",
    "title_ar": "محمد ﷺ الخليفة الطبيعي للمسيح عيسى عليه السلام (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Church Leaders & Scholars",
    "opponent_ar": "علماء ورجال الكنيسة",
    "duration": "57:42",
    "icon": "📖",
    "tags": [
      "Muhammad",
      "Christ",
      "Prophecy"
    ],
    "tags_ar": [
      "النبوة الخاتمة",
      "المسيح في الإسلام",
      "البشارات"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "science",
    "scholar_id": "deedat",
    "ytId": "Zb84_zMiWq0",
    "title": "Al-Quran: The Miracle of Miracles — Public Address (Session 2)",
    "title_ar": "القرآن الكريم معجزة المعجزات وبراهين الوحي الخالد (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "International Assembly",
    "opponent_ar": "جمهور ومفكرو الغرب",
    "duration": "56:28",
    "icon": "📖",
    "tags": [
      "Quran",
      "Miracle",
      "Prophethood"
    ],
    "tags_ar": [
      "معجزة القرآن",
      "إعجاز الوحي",
      "صدق النبوة"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "ZPAD-wh7WXA",
    "title": "Is Jesus God? — Ahmed Deedat vs. Dr. Floyd Clark (Session 2)",
    "title_ar": "هل عيسى هو الله؟ — مناظرة أحمد ديدات ضد د. فلويد كلارك (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Floyd Clark",
    "opponent_ar": "د. فلويد كلارك",
    "duration": "1:28:28",
    "icon": "📖",
    "tags": [
      "Monotheism",
      "Jesus",
      "Logic"
    ],
    "tags_ar": [
      "التوحيد",
      "المسيح في الإنجيل",
      "العقل والبرهان"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "h3blWCsFu4k",
    "title": "Is Jesus God? — Ahmed Deedat vs. Pastor Eric Bock (Session 2)",
    "title_ar": "هل المسيح إله؟ — مناظرة كوبنهاغن ضد القس إريك بوك (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Eric Bock (Copenhagen)",
    "opponent_ar": "القس إريك بوك (الدنمارك)",
    "duration": "1:28:00",
    "icon": "📖",
    "tags": [
      "Copenhagen",
      "Divinity",
      "Trinity"
    ],
    "tags_ar": [
      "مناظرة الدنمارك",
      "ألوهية المسيح",
      "الأقانيم"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "science",
    "scholar_id": "deedat",
    "ytId": "VPCyJnEXjs0",
    "title": "The Message of Truth — Dialogue with Dr. Gary Miller (Session 2)",
    "title_ar": "حوار الحقيقة والبرهان مع عالم الرياضيات د. غاري ميلر (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Gary Miller (Mathematician)",
    "opponent_ar": "د. غاري ميلر (عالم رياضيات ومبشر سابق)",
    "duration": "1:28:28",
    "icon": "📖",
    "tags": [
      "Logic",
      "Truth",
      "Mathematics"
    ],
    "tags_ar": [
      "المنطق الرياضي",
      "طريق الحق",
      "إعجاز القرآن"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "jewish",
    "scholar_id": "deedat",
    "ytId": "-06c9NLIIV0",
    "title": "Arabs and Israel: Conflict or Conciliation? (Session 2)",
    "title_ar": "العرب وإسرائيل: جذور الصراع وحقائق النبوءات (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Middle Eastern Historians",
    "opponent_ar": "حوار مع مؤرخين وباحثين",
    "duration": "2:00:50",
    "icon": "📖",
    "tags": [
      "Torah",
      "History",
      "Justice"
    ],
    "tags_ar": [
      "التوراة",
      "أرض فلسطين",
      "حقائق التاريخ"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "94HSjP6SB58",
    "title": "What the Bible Says About Muhammad ﷺ (Session 2)",
    "title_ar": "ماذا يقول الكتاب المقدس عن محمد ﷺ؟ — دراسة موثقة (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Biblical Scholars",
    "opponent_ar": "باحثون في العهد القديم والجديد",
    "duration": "1:08:39",
    "icon": "📖",
    "tags": [
      "Prophecies",
      "Bible",
      "Deuteronomy"
    ],
    "tags_ar": [
      "بشارات الأنبياء",
      "سفر التثنية",
      "النبي الموعود"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "dylHDm1-6nI",
    "title": "Combat Kit Against Bible Thumpers — Masterclass (Session 2)",
    "title_ar": "حقيبة المناظر في الرد على المنصرين وتفنيد المزاعم (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Christian Evangelists",
    "opponent_ar": "حوار مع وفد المنصرين",
    "duration": "29:07",
    "icon": "📖",
    "tags": [
      "Apologetics",
      "Dialogue",
      "Evidence"
    ],
    "tags_ar": [
      "قواعد المناظرة",
      "تفنيد الشبهات",
      "حجة القرآن"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "hB4hR0bb1Ps",
    "title": "Christ in Islam — An Eloquent Theological Presentation (Session 2)",
    "title_ar": "مكانة المسيح في الإسلام ورسالة السلام (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Interfaith Conference",
    "opponent_ar": "مؤتمر حوار الأديان العالمي",
    "duration": "2:35:35",
    "icon": "📖",
    "tags": [
      "Jesus",
      "Mary",
      "Islam"
    ],
    "tags_ar": [
      "المسيح عيسى",
      "مريم العذراء",
      "عقيدة التوحيد"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "CqIliraqx6I",
    "title": "Resurrection or Resuscitation? — Medical & Scriptural Analysis (Session 2)",
    "title_ar": "القيامة أم الإفاقة؟ — دراسة طبية ونصية لحادثة الصلب (الجلسة 2)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Theological & Medical Forum",
    "opponent_ar": "حوار علمي طبي مع اللاهوتيين",
    "duration": "2:51:28",
    "icon": "📖",
    "tags": [
      "Resurrection",
      "Medicine",
      "Gospels"
    ],
    "tags_ar": [
      "حقيقة القيامة",
      "الطب الجنائي",
      "نصوص الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "cYIjlZimVAY",
    "title": "Is the Bible God's Word? — The Historic USA Debate (Session 3)",
    "title_ar": "هل الكتاب المقدس كلام الله؟ — المناظرة التاريخية الكبرى في أمريكا (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Jimmy Swaggart",
    "opponent_ar": "القس جيمي سواجارت",
    "duration": "28:23",
    "icon": "📖",
    "tags": [
      "Bible",
      "Scripture",
      "Gospels"
    ],
    "tags_ar": [
      "الكتاب المقدس",
      "تحقيق النصوص",
      "مناظرة كبرى"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "I8X1M5zXmXY",
    "title": "The Quran or the Bible: Which is God's Word? (Session 3)",
    "title_ar": "القرآن أم الكتاب المقدس: أيهما كلام الله؟ (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Anis Shorrosh",
    "opponent_ar": "د. أنيس شروش",
    "duration": "2:35:34",
    "icon": "📖",
    "tags": [
      "Word of God",
      "Quran",
      "Bible"
    ],
    "tags_ar": [
      "كلام الله",
      "القرآن الكريم",
      "الإنجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "6S5J3o9RHEY",
    "title": "Is Jesus God? — The Stockholm Landmark Debate (Session 3)",
    "title_ar": "هل المسيح هو الله؟ — مناظرة ستوكهولم التاريخية الكبرى (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Stanley Sjoberg",
    "opponent_ar": "القس ستانلي سوبيرغ",
    "duration": "3:17:48",
    "icon": "📖",
    "tags": [
      "Jesus",
      "Divinity",
      "Trinity"
    ],
    "tags_ar": [
      "ألوهية المسيح",
      "الثالوث",
      "نصوص صريحة"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "fVEqXTCmxBM",
    "title": "Was Christ Crucified? — Ahmed Deedat vs. Josh McDowell (Session 3)",
    "title_ar": "هل صُلب المسيح؟ — مناظرة أحمد ديدات ضد جوش ماكدويل (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Josh McDowell",
    "opponent_ar": "جوش ماكدويل",
    "duration": "2:40:33",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "History",
      "Gospels"
    ],
    "tags_ar": [
      "صلب المسيح",
      "حقائق التاريخ",
      "روايات الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "hfxUrOGjrj0",
    "title": "Crucifixion or Cruci-Fiction? — The Ultimate Inquiry (Session 3)",
    "title_ar": "الصلب بين الحقيقة والوهم — دراسة نقدية موثقة (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Christian Theologians Panel",
    "opponent_ar": "حوار ونقاش مع علماء اللاهوت",
    "duration": "15:47",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "Scripture",
      "Evidence"
    ],
    "tags_ar": [
      "أكذوبة الصلب",
      "أدلة الأناجيل",
      "برهان العقل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "7f77EkbESZc",
    "title": "Muhammad ﷺ the Natural Successor to Christ (Session 3)",
    "title_ar": "محمد ﷺ الخليفة الطبيعي للمسيح عيسى عليه السلام (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Church Leaders & Scholars",
    "opponent_ar": "علماء ورجال الكنيسة",
    "duration": "23:25",
    "icon": "📖",
    "tags": [
      "Muhammad",
      "Christ",
      "Prophecy"
    ],
    "tags_ar": [
      "النبوة الخاتمة",
      "المسيح في الإسلام",
      "البشارات"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "science",
    "scholar_id": "deedat",
    "ytId": "geC5nprnQ2o",
    "title": "Al-Quran: The Miracle of Miracles — Public Address (Session 3)",
    "title_ar": "القرآن الكريم معجزة المعجزات وبراهين الوحي الخالد (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "International Assembly",
    "opponent_ar": "جمهور ومفكرو الغرب",
    "duration": "58:43",
    "icon": "📖",
    "tags": [
      "Quran",
      "Miracle",
      "Prophethood"
    ],
    "tags_ar": [
      "معجزة القرآن",
      "إعجاز الوحي",
      "صدق النبوة"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "MZIQ0Cpo8VA",
    "title": "Is Jesus God? — Ahmed Deedat vs. Dr. Floyd Clark (Session 3)",
    "title_ar": "هل عيسى هو الله؟ — مناظرة أحمد ديدات ضد د. فلويد كلارك (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Floyd Clark",
    "opponent_ar": "د. فلويد كلارك",
    "duration": "2:20:30",
    "icon": "📖",
    "tags": [
      "Monotheism",
      "Jesus",
      "Logic"
    ],
    "tags_ar": [
      "التوحيد",
      "المسيح في الإنجيل",
      "العقل والبرهان"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "MYSNJf4lBQE",
    "title": "Is Jesus God? — Ahmed Deedat vs. Pastor Eric Bock (Session 3)",
    "title_ar": "هل المسيح إله؟ — مناظرة كوبنهاغن ضد القس إريك بوك (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Eric Bock (Copenhagen)",
    "opponent_ar": "القس إريك بوك (الدنمارك)",
    "duration": "1:28:28",
    "icon": "📖",
    "tags": [
      "Copenhagen",
      "Divinity",
      "Trinity"
    ],
    "tags_ar": [
      "مناظرة الدنمارك",
      "ألوهية المسيح",
      "الأقانيم"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "science",
    "scholar_id": "deedat",
    "ytId": "ub94AMSovw4",
    "title": "The Message of Truth — Dialogue with Dr. Gary Miller (Session 3)",
    "title_ar": "حوار الحقيقة والبرهان مع عالم الرياضيات د. غاري ميلر (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Gary Miller (Mathematician)",
    "opponent_ar": "د. غاري ميلر (عالم رياضيات ومبشر سابق)",
    "duration": "2:24:48",
    "icon": "📖",
    "tags": [
      "Logic",
      "Truth",
      "Mathematics"
    ],
    "tags_ar": [
      "المنطق الرياضي",
      "طريق الحق",
      "إعجاز القرآن"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "jewish",
    "scholar_id": "deedat",
    "ytId": "0iUWStzL-bE",
    "title": "Arabs and Israel: Conflict or Conciliation? (Session 3)",
    "title_ar": "العرب وإسرائيل: جذور الصراع وحقائق النبوءات (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Middle Eastern Historians",
    "opponent_ar": "حوار مع مؤرخين وباحثين",
    "duration": "2:59:11",
    "icon": "📖",
    "tags": [
      "Torah",
      "History",
      "Justice"
    ],
    "tags_ar": [
      "التوراة",
      "أرض فلسطين",
      "حقائق التاريخ"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "6JFivAoqs0k",
    "title": "What the Bible Says About Muhammad ﷺ (Session 3)",
    "title_ar": "ماذا يقول الكتاب المقدس عن محمد ﷺ؟ — دراسة موثقة (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Biblical Scholars",
    "opponent_ar": "باحثون في العهد القديم والجديد",
    "duration": "3:06:29",
    "icon": "📖",
    "tags": [
      "Prophecies",
      "Bible",
      "Deuteronomy"
    ],
    "tags_ar": [
      "بشارات الأنبياء",
      "سفر التثنية",
      "النبي الموعود"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "YthFbHwJ5CA",
    "title": "Combat Kit Against Bible Thumpers — Masterclass (Session 3)",
    "title_ar": "حقيبة المناظر في الرد على المنصرين وتفنيد المزاعم (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Christian Evangelists",
    "opponent_ar": "حوار مع وفد المنصرين",
    "duration": "2:16:49",
    "icon": "📖",
    "tags": [
      "Apologetics",
      "Dialogue",
      "Evidence"
    ],
    "tags_ar": [
      "قواعد المناظرة",
      "تفنيد الشبهات",
      "حجة القرآن"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "Ve94bb8irM8",
    "title": "Christ in Islam — An Eloquent Theological Presentation (Session 3)",
    "title_ar": "مكانة المسيح في الإسلام ورسالة السلام (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Interfaith Conference",
    "opponent_ar": "مؤتمر حوار الأديان العالمي",
    "duration": "2:54:52",
    "icon": "📖",
    "tags": [
      "Jesus",
      "Mary",
      "Islam"
    ],
    "tags_ar": [
      "المسيح عيسى",
      "مريم العذراء",
      "عقيدة التوحيد"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "AA-uKRzYjtg",
    "title": "Resurrection or Resuscitation? — Medical & Scriptural Analysis (Session 3)",
    "title_ar": "القيامة أم الإفاقة؟ — دراسة طبية ونصية لحادثة الصلب (الجلسة 3)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Theological & Medical Forum",
    "opponent_ar": "حوار علمي طبي مع اللاهوتيين",
    "duration": "3:04:39",
    "icon": "📖",
    "tags": [
      "Resurrection",
      "Medicine",
      "Gospels"
    ],
    "tags_ar": [
      "حقيقة القيامة",
      "الطب الجنائي",
      "نصوص الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "aEje9oTmZok",
    "title": "Is the Bible God's Word? — The Historic USA Debate (Session 4)",
    "title_ar": "هل الكتاب المقدس كلام الله؟ — المناظرة التاريخية الكبرى في أمريكا (الجلسة 4)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Jimmy Swaggart",
    "opponent_ar": "القس جيمي سواجارت",
    "duration": "43:50",
    "icon": "📖",
    "tags": [
      "Bible",
      "Scripture",
      "Gospels"
    ],
    "tags_ar": [
      "الكتاب المقدس",
      "تحقيق النصوص",
      "مناظرة كبرى"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "ARe5_qwmZ_o",
    "title": "The Quran or the Bible: Which is God's Word? (Session 4)",
    "title_ar": "القرآن أم الكتاب المقدس: أيهما كلام الله؟ (الجلسة 4)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Dr. Anis Shorrosh",
    "opponent_ar": "د. أنيس شروش",
    "duration": "2:59:11",
    "icon": "📖",
    "tags": [
      "Word of God",
      "Quran",
      "Bible"
    ],
    "tags_ar": [
      "كلام الله",
      "القرآن الكريم",
      "الإنجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "YufhR8b0yGE",
    "title": "Is Jesus God? — The Stockholm Landmark Debate (Session 4)",
    "title_ar": "هل المسيح هو الله؟ — مناظرة ستوكهولم التاريخية الكبرى (الجلسة 4)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Pastor Stanley Sjoberg",
    "opponent_ar": "القس ستانلي سوبيرغ",
    "duration": "1:01:03",
    "icon": "📖",
    "tags": [
      "Jesus",
      "Divinity",
      "Trinity"
    ],
    "tags_ar": [
      "ألوهية المسيح",
      "الثالوث",
      "نصوص صريحة"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "Cd8VHTq8jxw",
    "title": "Was Christ Crucified? — Ahmed Deedat vs. Josh McDowell (Session 4)",
    "title_ar": "هل صُلب المسيح؟ — مناظرة أحمد ديدات ضد جوش ماكدويل (الجلسة 4)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Josh McDowell",
    "opponent_ar": "جوش ماكدويل",
    "duration": "56:13",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "History",
      "Gospels"
    ],
    "tags_ar": [
      "صلب المسيح",
      "حقائق التاريخ",
      "روايات الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "christian",
    "scholar_id": "deedat",
    "ytId": "NqG-k5AUwWg",
    "title": "Crucifixion or Cruci-Fiction? — The Ultimate Inquiry (Session 4)",
    "title_ar": "الصلب بين الحقيقة والوهم — دراسة نقدية موثقة (الجلسة 4)",
    "scholar": "Ahmed Deedat",
    "scholar_ar": "أحمد ديدات",
    "opponent": "Christian Theologians Panel",
    "opponent_ar": "حوار ونقاش مع علماء اللاهوت",
    "duration": "2:15:30",
    "icon": "📖",
    "tags": [
      "Crucifixion",
      "Scripture",
      "Evidence"
    ],
    "tags_ar": [
      "أكذوبة الصلب",
      "أدلة الأناجيل",
      "برهان العقل"
    ],
    "gradient": "linear-gradient(135deg, #180d0d, #2d1414)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "ZD6p-op93EI",
    "title": "The Quran and the Bible in the Light of Science — Grand Debate",
    "title_ar": "القرآن والكتاب المقدس في ضوء العلم — المناظرة الكبرى",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Dr. William Campbell",
    "opponent_ar": "د. ويليام كامبل",
    "duration": "21:54",
    "icon": "🔬",
    "tags": [
      "Science",
      "Bible",
      "Embryology"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الكتاب المقدس",
      "علم الأجنة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "zF3AHThcfFg",
    "title": "Concept of God in Hinduism and Islam — Interfaith Dialogue",
    "title_ar": "مفهوم الإله في الهندوسية والإسلام — مناظرة العصر",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Sri Sri Ravi Shankar",
    "opponent_ar": "سري سري رافي شنكار",
    "duration": "4:18:27",
    "icon": "🔬",
    "tags": [
      "Hinduism",
      "God Concept",
      "Tawhid"
    ],
    "tags_ar": [
      "مفهوم الإله",
      "الهندوسية",
      "التوحيد الخالص"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "atheist",
    "scholar_id": "zakir",
    "ytId": "k9_7H_LcFho",
    "title": "Does God Exist? — The Ultimate Rational Rebuttal to Atheism",
    "title_ar": "هل الله موجود؟ — أقوى الردود العقلية والفيزيائية على الإلحاد",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Atheist Thinkers & Scientists",
    "opponent_ar": "فلاسفة وملاحدة وعلماء فيزياء",
    "duration": "4:26:34",
    "icon": "🔬",
    "tags": [
      "Atheism",
      "Cosmology",
      "Existence"
    ],
    "tags_ar": [
      "دحض الإلحاد",
      "أصل الكون",
      "البرهان العقلي"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "bhQPNyyjAyk",
    "title": "Is the Quran God's Word? — Historical & Scientific Proofs",
    "title_ar": "هل القرآن كلام الله؟ — البراهين العلمية والتاريخية القاطعة",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Skeptics & Secular Academics",
    "opponent_ar": "باحثون علمانيون ومستشرقون",
    "duration": "4:01:32",
    "icon": "🔬",
    "tags": [
      "Quran",
      "Divine Word",
      "Miracles"
    ],
    "tags_ar": [
      "كلام الله",
      "إعجاز القرآن",
      "حقائق علمية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "YmyiVIvSd9Q",
    "title": "Women's Rights in Islam: Protected or Subjugated?",
    "title_ar": "حقوق المرأة في الإسلام: تكريم وحماية أم اضطهاد؟",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Feminist Scholars & Activists",
    "opponent_ar": "محاورون وناشطون حقوقيون",
    "duration": "1:33:37",
    "icon": "🔬",
    "tags": [
      "Women",
      "Equality",
      "Justice"
    ],
    "tags_ar": [
      "حقوق المرأة",
      "العدالة والكرامة",
      "الذمة المالية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "iZMtZbXbdwg",
    "title": "Terrorism and Jihad: An Islamic Perspective",
    "title_ar": "الإرهاب والجهاد من منظور إسلامي عالمي موثق",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "International Media & Critics",
    "opponent_ar": "صحفيون ونقاد دوليون",
    "duration": "2:17:26",
    "icon": "🔬",
    "tags": [
      "Peace",
      "Jihad",
      "Humanity"
    ],
    "tags_ar": [
      "السلام العالمي",
      "حقيقة الجهاد",
      "حرمة الدماء"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "FhqO26C7tx0",
    "title": "Similarities Between Islam and Christianity",
    "title_ar": "أوجه التشابه العميقة بين الإسلام والمسيحية من واقع الإنجيل",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Christian Priests & Pastors",
    "opponent_ar": "قساوسة وباحثون مسيحيون",
    "duration": "16:51",
    "icon": "🔬",
    "tags": [
      "Christianity",
      "Gospels",
      "Jesus"
    ],
    "tags_ar": [
      "المسيحية والإسلام",
      "صريح الإنجيل",
      "رسالة التوحيد"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "XOD2KXXzsjM",
    "title": "Why Does Islam Prohibit Alcohol & Pork? — Scientific Evidence",
    "title_ar": "لماذا حرم الإسلام الخمر ولحم الخنزير؟ — الحقائق الطبية",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Medical Researchers & Seekers",
    "opponent_ar": "أطباء وباحثون في الصحة العامة",
    "duration": "4:19:24",
    "icon": "🔬",
    "tags": [
      "Health",
      "Prohibition",
      "Medicine"
    ],
    "tags_ar": [
      "الإعجاز التشريعي",
      "الطب الحديث",
      "أضرار الخمر"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "gB6Rnv5intg",
    "title": "Theory of Evolution vs. The Quran — Creation Explained",
    "title_ar": "نظرية التطور لداروين في ميزان القرآن والعلم التجريبي",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Evolutionary Biologists",
    "opponent_ar": "علماء أحياء ومؤيدو التطور",
    "duration": "27:54",
    "icon": "🔬",
    "tags": [
      "Evolution",
      "Darwin",
      "Creation"
    ],
    "tags_ar": [
      "نظرية التطور",
      "أصل الإنسان",
      "العلم التجريبي"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "t5TBPBj4Z5k",
    "title": "Universal Brotherhood — Path to World Harmony",
    "title_ar": "الأخوة الإنسانية الشاملة والسبيل إلى السلام العالمي",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Global Audience at Oxford Union",
    "opponent_ar": "مفكرون وطلاب في جامعة أكسفورد",
    "duration": "3:16:17",
    "icon": "🔬",
    "tags": [
      "Brotherhood",
      "Oxford",
      "Equality"
    ],
    "tags_ar": [
      "الأخوة الإنسانية",
      "جامعة أكسفورد",
      "المساواة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "_mhrjKc57Z8",
    "title": "Is Jesus God or Son of God? — Refuting the Trinity",
    "title_ar": "هل المسيح هو الله أو ابن الله؟ — تفنيد نصوص التثليث",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Evangelical Pastors Panel",
    "opponent_ar": "مناظرة مع قساوسة إنجيليين",
    "duration": "37:08",
    "icon": "🔬",
    "tags": [
      "Trinity",
      "Monotheism",
      "Scripture"
    ],
    "tags_ar": [
      "تفنيد الثالوث",
      "نصوص الكتاب",
      "التوحيد الخالص"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "atheist",
    "scholar_id": "zakir",
    "ytId": "KY6jdUxf_LM",
    "title": "Life After Death: A Logical & Scientific Proof",
    "title_ar": "الحياة بعد الموت واليوم الآخر: برهان العقل والحس",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Materialist Skeptics",
    "opponent_ar": "منكرو البعث والحساب",
    "duration": "1:49:28",
    "icon": "🔬",
    "tags": [
      "Afterlife",
      "Accountability",
      "Justice"
    ],
    "tags_ar": [
      "البعث والجزاء",
      "العدالة الإلهية",
      "العقل والمنطق"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "wT7gPGSS20Y",
    "title": "Media and Islam: War or Peace?",
    "title_ar": "الإعلام العالمي والإسلام: تزييف الحقائق وصناعة التشويه",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Western Press Correspondents",
    "opponent_ar": "مراسلو وكالات الأنباء العالمية",
    "duration": "56:54",
    "icon": "🔬",
    "tags": [
      "Media",
      "Bias",
      "Truth"
    ],
    "tags_ar": [
      "الإعلام الغربي",
      "تزييف الحقائق",
      "صوت العدالة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "y2iMrxN4NyE",
    "title": "Open Global Q&A: The Most Difficult Questions on Islam",
    "title_ar": "الأسئلة الأكثر حرجاً وجرأة حول الإسلام — إجابات مفحمة",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Open Global Audience",
    "opponent_ar": "جمهور مفتوح من مختلف المعتقدات",
    "duration": "4:18:25",
    "icon": "🔬",
    "tags": [
      "Q&A",
      "Direct Answers",
      "Dialogue"
    ],
    "tags_ar": [
      "أسئلة جريئة",
      "حوار صريح",
      "إفحام الخصم"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "k-og6PWLTNQ",
    "title": "Islam and Universal Peace — Challenging Prejudices",
    "title_ar": "الإسلام والسلام العالمي — تفكيك الأفكار النمطية المسبقة",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Diplomats & Academic Fellows",
    "opponent_ar": "دبلوماسيون وأكاديميون دوليون",
    "duration": "4:22:02",
    "icon": "🔬",
    "tags": [
      "Peace",
      "Global Harmony",
      "Faith"
    ],
    "tags_ar": [
      "رسالة السلام",
      "الأخلاق العالمية",
      "دحض التشويه"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "VFpqUNJpJb8",
    "title": "The Quran and the Bible in the Light of Science — Grand Debate (Part 2)",
    "title_ar": "القرآن والكتاب المقدس في ضوء العلم — المناظرة الكبرى (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Dr. William Campbell",
    "opponent_ar": "د. ويليام كامبل",
    "duration": "1:58:10",
    "icon": "🔬",
    "tags": [
      "Science",
      "Bible",
      "Embryology"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الكتاب المقدس",
      "علم الأجنة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "EThmBBUbHBo",
    "title": "Concept of God in Hinduism and Islam — Interfaith Dialogue (Part 2)",
    "title_ar": "مفهوم الإله في الهندوسية والإسلام — مناظرة العصر (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Sri Sri Ravi Shankar",
    "opponent_ar": "سري سري رافي شنكار",
    "duration": "38:16",
    "icon": "🔬",
    "tags": [
      "Hinduism",
      "God Concept",
      "Tawhid"
    ],
    "tags_ar": [
      "مفهوم الإله",
      "الهندوسية",
      "التوحيد الخالص"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "atheist",
    "scholar_id": "zakir",
    "ytId": "Wa6Ss5-ayic",
    "title": "Does God Exist? — The Ultimate Rational Rebuttal to Atheism (Part 2)",
    "title_ar": "هل الله موجود؟ — أقوى الردود العقلية والفيزيائية على الإلحاد (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Atheist Thinkers & Scientists",
    "opponent_ar": "فلاسفة وملاحدة وعلماء فيزياء",
    "duration": "1:21:43",
    "icon": "🔬",
    "tags": [
      "Atheism",
      "Cosmology",
      "Existence"
    ],
    "tags_ar": [
      "دحض الإلحاد",
      "أصل الكون",
      "البرهان العقلي"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "CDR3zh0B-Lc",
    "title": "Is the Quran God's Word? — Historical & Scientific Proofs (Part 2)",
    "title_ar": "هل القرآن كلام الله؟ — البراهين العلمية والتاريخية القاطعة (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Skeptics & Secular Academics",
    "opponent_ar": "باحثون علمانيون ومستشرقون",
    "duration": "1:47:56",
    "icon": "🔬",
    "tags": [
      "Quran",
      "Divine Word",
      "Miracles"
    ],
    "tags_ar": [
      "كلام الله",
      "إعجاز القرآن",
      "حقائق علمية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "rSChInUIJk0",
    "title": "Women's Rights in Islam: Protected or Subjugated? (Part 2)",
    "title_ar": "حقوق المرأة في الإسلام: تكريم وحماية أم اضطهاد؟ (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Feminist Scholars & Activists",
    "opponent_ar": "محاورون وناشطون حقوقيون",
    "duration": "2:12:59",
    "icon": "🔬",
    "tags": [
      "Women",
      "Equality",
      "Justice"
    ],
    "tags_ar": [
      "حقوق المرأة",
      "العدالة والكرامة",
      "الذمة المالية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "4uHEGZ1SL3E",
    "title": "Terrorism and Jihad: An Islamic Perspective (Part 2)",
    "title_ar": "الإرهاب والجهاد من منظور إسلامي عالمي موثق (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "International Media & Critics",
    "opponent_ar": "صحفيون ونقاد دوليون",
    "duration": "44:39",
    "icon": "🔬",
    "tags": [
      "Peace",
      "Jihad",
      "Humanity"
    ],
    "tags_ar": [
      "السلام العالمي",
      "حقيقة الجهاد",
      "حرمة الدماء"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "I_5ggCs79Sg",
    "title": "Similarities Between Islam and Christianity (Part 2)",
    "title_ar": "أوجه التشابه العميقة بين الإسلام والمسيحية من واقع الإنجيل (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Christian Priests & Pastors",
    "opponent_ar": "قساوسة وباحثون مسيحيون",
    "duration": "4:04:08",
    "icon": "🔬",
    "tags": [
      "Christianity",
      "Gospels",
      "Jesus"
    ],
    "tags_ar": [
      "المسيحية والإسلام",
      "صريح الإنجيل",
      "رسالة التوحيد"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "VKD9pMWcdwg",
    "title": "Why Does Islam Prohibit Alcohol & Pork? — Scientific Evidence (Part 2)",
    "title_ar": "لماذا حرم الإسلام الخمر ولحم الخنزير؟ — الحقائق الطبية (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Medical Researchers & Seekers",
    "opponent_ar": "أطباء وباحثون في الصحة العامة",
    "duration": "50:32",
    "icon": "🔬",
    "tags": [
      "Health",
      "Prohibition",
      "Medicine"
    ],
    "tags_ar": [
      "الإعجاز التشريعي",
      "الطب الحديث",
      "أضرار الخمر"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "KO9OfrPG0W8",
    "title": "Theory of Evolution vs. The Quran — Creation Explained (Part 2)",
    "title_ar": "نظرية التطور لداروين في ميزان القرآن والعلم التجريبي (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Evolutionary Biologists",
    "opponent_ar": "علماء أحياء ومؤيدو التطور",
    "duration": "45:58",
    "icon": "🔬",
    "tags": [
      "Evolution",
      "Darwin",
      "Creation"
    ],
    "tags_ar": [
      "نظرية التطور",
      "أصل الإنسان",
      "العلم التجريبي"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "6rDbKzhO8t0",
    "title": "Universal Brotherhood — Path to World Harmony (Part 2)",
    "title_ar": "الأخوة الإنسانية الشاملة والسبيل إلى السلام العالمي (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Global Audience at Oxford Union",
    "opponent_ar": "مفكرون وطلاب في جامعة أكسفورد",
    "duration": "4:14:28",
    "icon": "🔬",
    "tags": [
      "Brotherhood",
      "Oxford",
      "Equality"
    ],
    "tags_ar": [
      "الأخوة الإنسانية",
      "جامعة أكسفورد",
      "المساواة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "cw22IamZe54",
    "title": "Is Jesus God or Son of God? — Refuting the Trinity (Part 2)",
    "title_ar": "هل المسيح هو الله أو ابن الله؟ — تفنيد نصوص التثليث (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Evangelical Pastors Panel",
    "opponent_ar": "مناظرة مع قساوسة إنجيليين",
    "duration": "50:21",
    "icon": "🔬",
    "tags": [
      "Trinity",
      "Monotheism",
      "Scripture"
    ],
    "tags_ar": [
      "تفنيد الثالوث",
      "نصوص الكتاب",
      "التوحيد الخالص"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "atheist",
    "scholar_id": "zakir",
    "ytId": "oZnbBiVu38Y",
    "title": "Life After Death: A Logical & Scientific Proof (Part 2)",
    "title_ar": "الحياة بعد الموت واليوم الآخر: برهان العقل والحس (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Materialist Skeptics",
    "opponent_ar": "منكرو البعث والحساب",
    "duration": "3:38:31",
    "icon": "🔬",
    "tags": [
      "Afterlife",
      "Accountability",
      "Justice"
    ],
    "tags_ar": [
      "البعث والجزاء",
      "العدالة الإلهية",
      "العقل والمنطق"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "sRVFbmnhqmY",
    "title": "Media and Islam: War or Peace? (Part 2)",
    "title_ar": "الإعلام العالمي والإسلام: تزييف الحقائق وصناعة التشويه (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Western Press Correspondents",
    "opponent_ar": "مراسلو وكالات الأنباء العالمية",
    "duration": "3:38:31",
    "icon": "🔬",
    "tags": [
      "Media",
      "Bias",
      "Truth"
    ],
    "tags_ar": [
      "الإعلام الغربي",
      "تزييف الحقائق",
      "صوت العدالة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "uk9IDf09_0M",
    "title": "Open Global Q&A: The Most Difficult Questions on Islam (Part 2)",
    "title_ar": "الأسئلة الأكثر حرجاً وجرأة حول الإسلام — إجابات مفحمة (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Open Global Audience",
    "opponent_ar": "جمهور مفتوح من مختلف المعتقدات",
    "duration": "23:17",
    "icon": "🔬",
    "tags": [
      "Q&A",
      "Direct Answers",
      "Dialogue"
    ],
    "tags_ar": [
      "أسئلة جريئة",
      "حوار صريح",
      "إفحام الخصم"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "BE3X_2zti_I",
    "title": "Islam and Universal Peace — Challenging Prejudices (Part 2)",
    "title_ar": "الإسلام والسلام العالمي — تفكيك الأفكار النمطية المسبقة (المحور 2)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Diplomats & Academic Fellows",
    "opponent_ar": "دبلوماسيون وأكاديميون دوليون",
    "duration": "54:23",
    "icon": "🔬",
    "tags": [
      "Peace",
      "Global Harmony",
      "Faith"
    ],
    "tags_ar": [
      "رسالة السلام",
      "الأخلاق العالمية",
      "دحض التشويه"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "kmYHeKaNYdE",
    "title": "The Quran and the Bible in the Light of Science — Grand Debate (Part 3)",
    "title_ar": "القرآن والكتاب المقدس في ضوء العلم — المناظرة الكبرى (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Dr. William Campbell",
    "opponent_ar": "د. ويليام كامبل",
    "duration": "3:38:31",
    "icon": "🔬",
    "tags": [
      "Science",
      "Bible",
      "Embryology"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الكتاب المقدس",
      "علم الأجنة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "5gEroplRkd0",
    "title": "Concept of God in Hinduism and Islam — Interfaith Dialogue (Part 3)",
    "title_ar": "مفهوم الإله في الهندوسية والإسلام — مناظرة العصر (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Sri Sri Ravi Shankar",
    "opponent_ar": "سري سري رافي شنكار",
    "duration": "20:20",
    "icon": "🔬",
    "tags": [
      "Hinduism",
      "God Concept",
      "Tawhid"
    ],
    "tags_ar": [
      "مفهوم الإله",
      "الهندوسية",
      "التوحيد الخالص"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "atheist",
    "scholar_id": "zakir",
    "ytId": "Ynk1EY8kQ-8",
    "title": "Does God Exist? — The Ultimate Rational Rebuttal to Atheism (Part 3)",
    "title_ar": "هل الله موجود؟ — أقوى الردود العقلية والفيزيائية على الإلحاد (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Atheist Thinkers & Scientists",
    "opponent_ar": "فلاسفة وملاحدة وعلماء فيزياء",
    "duration": "29:11",
    "icon": "🔬",
    "tags": [
      "Atheism",
      "Cosmology",
      "Existence"
    ],
    "tags_ar": [
      "دحض الإلحاد",
      "أصل الكون",
      "البرهان العقلي"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "gy8OOKH_TcM",
    "title": "Is the Quran God's Word? — Historical & Scientific Proofs (Part 3)",
    "title_ar": "هل القرآن كلام الله؟ — البراهين العلمية والتاريخية القاطعة (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Skeptics & Secular Academics",
    "opponent_ar": "باحثون علمانيون ومستشرقون",
    "duration": "50:05",
    "icon": "🔬",
    "tags": [
      "Quran",
      "Divine Word",
      "Miracles"
    ],
    "tags_ar": [
      "كلام الله",
      "إعجاز القرآن",
      "حقائق علمية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "X_2QUDf0yGc",
    "title": "Women's Rights in Islam: Protected or Subjugated? (Part 3)",
    "title_ar": "حقوق المرأة في الإسلام: تكريم وحماية أم اضطهاد؟ (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Feminist Scholars & Activists",
    "opponent_ar": "محاورون وناشطون حقوقيون",
    "duration": "58:30",
    "icon": "🔬",
    "tags": [
      "Women",
      "Equality",
      "Justice"
    ],
    "tags_ar": [
      "حقوق المرأة",
      "العدالة والكرامة",
      "الذمة المالية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "rEscPrtdFjY",
    "title": "Terrorism and Jihad: An Islamic Perspective (Part 3)",
    "title_ar": "الإرهاب والجهاد من منظور إسلامي عالمي موثق (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "International Media & Critics",
    "opponent_ar": "صحفيون ونقاد دوليون",
    "duration": "39:01",
    "icon": "🔬",
    "tags": [
      "Peace",
      "Jihad",
      "Humanity"
    ],
    "tags_ar": [
      "السلام العالمي",
      "حقيقة الجهاد",
      "حرمة الدماء"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "xPqyxqIsMPM",
    "title": "Similarities Between Islam and Christianity (Part 3)",
    "title_ar": "أوجه التشابه العميقة بين الإسلام والمسيحية من واقع الإنجيل (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Christian Priests & Pastors",
    "opponent_ar": "قساوسة وباحثون مسيحيون",
    "duration": "48:43",
    "icon": "🔬",
    "tags": [
      "Christianity",
      "Gospels",
      "Jesus"
    ],
    "tags_ar": [
      "المسيحية والإسلام",
      "صريح الإنجيل",
      "رسالة التوحيد"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "ZjGLYjqQofc",
    "title": "Why Does Islam Prohibit Alcohol & Pork? — Scientific Evidence (Part 3)",
    "title_ar": "لماذا حرم الإسلام الخمر ولحم الخنزير؟ — الحقائق الطبية (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Medical Researchers & Seekers",
    "opponent_ar": "أطباء وباحثون في الصحة العامة",
    "duration": "39:01",
    "icon": "🔬",
    "tags": [
      "Health",
      "Prohibition",
      "Medicine"
    ],
    "tags_ar": [
      "الإعجاز التشريعي",
      "الطب الحديث",
      "أضرار الخمر"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "yzkonEXFCQA",
    "title": "Theory of Evolution vs. The Quran — Creation Explained (Part 3)",
    "title_ar": "نظرية التطور لداروين في ميزان القرآن والعلم التجريبي (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Evolutionary Biologists",
    "opponent_ar": "علماء أحياء ومؤيدو التطور",
    "duration": "2:38:00",
    "icon": "🔬",
    "tags": [
      "Evolution",
      "Darwin",
      "Creation"
    ],
    "tags_ar": [
      "نظرية التطور",
      "أصل الإنسان",
      "العلم التجريبي"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "gj3hN9fnKw8",
    "title": "Universal Brotherhood — Path to World Harmony (Part 3)",
    "title_ar": "الأخوة الإنسانية الشاملة والسبيل إلى السلام العالمي (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Global Audience at Oxford Union",
    "opponent_ar": "مفكرون وطلاب في جامعة أكسفورد",
    "duration": "49:40",
    "icon": "🔬",
    "tags": [
      "Brotherhood",
      "Oxford",
      "Equality"
    ],
    "tags_ar": [
      "الأخوة الإنسانية",
      "جامعة أكسفورد",
      "المساواة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "OkCeg-DCjjI",
    "title": "Is Jesus God or Son of God? — Refuting the Trinity (Part 3)",
    "title_ar": "هل المسيح هو الله أو ابن الله؟ — تفنيد نصوص التثليث (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Evangelical Pastors Panel",
    "opponent_ar": "مناظرة مع قساوسة إنجيليين",
    "duration": "3:38:18",
    "icon": "🔬",
    "tags": [
      "Trinity",
      "Monotheism",
      "Scripture"
    ],
    "tags_ar": [
      "تفنيد الثالوث",
      "نصوص الكتاب",
      "التوحيد الخالص"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "atheist",
    "scholar_id": "zakir",
    "ytId": "LIWgwGoNPlU",
    "title": "Life After Death: A Logical & Scientific Proof (Part 3)",
    "title_ar": "الحياة بعد الموت واليوم الآخر: برهان العقل والحس (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Materialist Skeptics",
    "opponent_ar": "منكرو البعث والحساب",
    "duration": "3:18:33",
    "icon": "🔬",
    "tags": [
      "Afterlife",
      "Accountability",
      "Justice"
    ],
    "tags_ar": [
      "البعث والجزاء",
      "العدالة الإلهية",
      "العقل والمنطق"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "I_FlSYj87Cc",
    "title": "Media and Islam: War or Peace? (Part 3)",
    "title_ar": "الإعلام العالمي والإسلام: تزييف الحقائق وصناعة التشويه (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Western Press Correspondents",
    "opponent_ar": "مراسلو وكالات الأنباء العالمية",
    "duration": "21:54",
    "icon": "🔬",
    "tags": [
      "Media",
      "Bias",
      "Truth"
    ],
    "tags_ar": [
      "الإعلام الغربي",
      "تزييف الحقائق",
      "صوت العدالة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "zdicw1HKhyk",
    "title": "Open Global Q&A: The Most Difficult Questions on Islam (Part 3)",
    "title_ar": "الأسئلة الأكثر حرجاً وجرأة حول الإسلام — إجابات مفحمة (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Open Global Audience",
    "opponent_ar": "جمهور مفتوح من مختلف المعتقدات",
    "duration": "24:48",
    "icon": "🔬",
    "tags": [
      "Q&A",
      "Direct Answers",
      "Dialogue"
    ],
    "tags_ar": [
      "أسئلة جريئة",
      "حوار صريح",
      "إفحام الخصم"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "rUf9i79u7vI",
    "title": "Islam and Universal Peace — Challenging Prejudices (Part 3)",
    "title_ar": "الإسلام والسلام العالمي — تفكيك الأفكار النمطية المسبقة (المحور 3)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Diplomats & Academic Fellows",
    "opponent_ar": "دبلوماسيون وأكاديميون دوليون",
    "duration": "15:12",
    "icon": "🔬",
    "tags": [
      "Peace",
      "Global Harmony",
      "Faith"
    ],
    "tags_ar": [
      "رسالة السلام",
      "الأخلاق العالمية",
      "دحض التشويه"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "nQ-Y5NWV9kc",
    "title": "The Quran and the Bible in the Light of Science — Grand Debate (Part 4)",
    "title_ar": "القرآن والكتاب المقدس في ضوء العلم — المناظرة الكبرى (المحور 4)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Dr. William Campbell",
    "opponent_ar": "د. ويليام كامبل",
    "duration": "48:15",
    "icon": "🔬",
    "tags": [
      "Science",
      "Bible",
      "Embryology"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الكتاب المقدس",
      "علم الأجنة"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "christian",
    "scholar_id": "zakir",
    "ytId": "rr6O-FnVqrU",
    "title": "Concept of God in Hinduism and Islam — Interfaith Dialogue (Part 4)",
    "title_ar": "مفهوم الإله في الهندوسية والإسلام — مناظرة العصر (المحور 4)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Sri Sri Ravi Shankar",
    "opponent_ar": "سري سري رافي شنكار",
    "duration": "19:24",
    "icon": "🔬",
    "tags": [
      "Hinduism",
      "God Concept",
      "Tawhid"
    ],
    "tags_ar": [
      "مفهوم الإله",
      "الهندوسية",
      "التوحيد الخالص"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "atheist",
    "scholar_id": "zakir",
    "ytId": "OK2vbLTbBi0",
    "title": "Does God Exist? — The Ultimate Rational Rebuttal to Atheism (Part 4)",
    "title_ar": "هل الله موجود؟ — أقوى الردود العقلية والفيزيائية على الإلحاد (المحور 4)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Atheist Thinkers & Scientists",
    "opponent_ar": "فلاسفة وملاحدة وعلماء فيزياء",
    "duration": "15:11",
    "icon": "🔬",
    "tags": [
      "Atheism",
      "Cosmology",
      "Existence"
    ],
    "tags_ar": [
      "دحض الإلحاد",
      "أصل الكون",
      "البرهان العقلي"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "qUK1FD-y6G0",
    "title": "Is the Quran God's Word? — Historical & Scientific Proofs (Part 4)",
    "title_ar": "هل القرآن كلام الله؟ — البراهين العلمية والتاريخية القاطعة (المحور 4)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Skeptics & Secular Academics",
    "opponent_ar": "باحثون علمانيون ومستشرقون",
    "duration": "18:39",
    "icon": "🔬",
    "tags": [
      "Quran",
      "Divine Word",
      "Miracles"
    ],
    "tags_ar": [
      "كلام الله",
      "إعجاز القرآن",
      "حقائق علمية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "cat": "science",
    "scholar_id": "zakir",
    "ytId": "8ZG2-0sRFVA",
    "title": "Women's Rights in Islam: Protected or Subjugated? (Part 4)",
    "title_ar": "حقوق المرأة في الإسلام: تكريم وحماية أم اضطهاد؟ (المحور 4)",
    "scholar": "Dr. Zakir Naik",
    "scholar_ar": "د. ذاكر نايك",
    "opponent": "Feminist Scholars & Activists",
    "opponent_ar": "محاورون وناشطون حقوقيون",
    "duration": "3:39:51",
    "icon": "🔬",
    "tags": [
      "Women",
      "Equality",
      "Justice"
    ],
    "tags_ar": [
      "حقوق المرأة",
      "العدالة والكرامة",
      "الذمة المالية"
    ],
    "gradient": "linear-gradient(135deg, #0a1810, #122d1e)"
  },
  {
    "id": "deb-mo3az-1",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "3KSmvj_K7r8",
    "title": "Explicit Texts on the Divinity of Christ: A Decisive Scriptural Refutation",
    "title_ar": "نصوص ألوهية المسيح الصريحة والرد المفحم من صميم الأناجيل",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Pastor Kirollos Roushdy",
    "opponent_ar": "القس كيرلس رشدي",
    "duration": "1:42:15",
    "icon": "🎙️",
    "tags": [
      "Divinity of Christ",
      "Gospels",
      "Textual Criticism"
    ],
    "tags_ar": [
      "ألوهية المسيح",
      "الأناجيل",
      "نقد النص"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-2",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "A Conversation You Must Hear: A Christian Truth-Seeker Explores the Trinity",
    "title_ar": "حوار لازم تسمعه: مسيحي باحث عن الحق يكتشف حقيقة التثليث",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Peter Ibrahim (Theology Researcher)",
    "opponent_ar": "بيتر إبراهيم (باحث لاهوتي)",
    "duration": "1:18:40",
    "icon": "🎙️",
    "tags": [
      "Trinity",
      "Monotheism",
      "Dialogue"
    ],
    "tags_ar": [
      "الثالوث",
      "التوحيد",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-3",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "nB8eJ4tX_wU",
    "title": "A Direct Question Challenging Atonement: Can the Innocent Bear Guilt?",
    "title_ar": "سؤال مباشر ينسف عقيدة الفداء: هل يعاقب البريء بذنب المذنب؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Deacon Mina Fayez",
    "opponent_ar": "الشماس مينا فايز",
    "duration": "58:30",
    "icon": "🎙️",
    "tags": [
      "Atonement",
      "Divine Justice",
      "Christian Dogma"
    ],
    "tags_ar": [
      "الفداء والصلب",
      "العدالة الإلهية",
      "العقيدة المسيحية"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-4",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "pZ7G5xL5kQY",
    "title": "Debate on New Testament Manuscripts: Has Scripture Remained Intact?",
    "title_ar": "مناظرة مخطوطات العهد الجديد: هل صمدت كلمة الله عبر التاريخ؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Dr. Yuhanna Atef (Manuscript Scholar)",
    "opponent_ar": "د. يوحنا عاطف (أستاذ مخطوطات)",
    "duration": "2:05:12",
    "icon": "🎙️",
    "tags": [
      "Manuscripts",
      "Corruption",
      "Historical Criticism"
    ],
    "tags_ar": [
      "المخطوطات",
      "التحريف",
      "النقد التاريخي"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-5",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "4c7V_P7iQYo",
    "title": "Did Jesus Ever Say 'I Am God, Worship Me'? Scriptural Analysis",
    "title_ar": "حوار ونقاش حول نصوص الأناجيل الأربعة: هل قال يسوع أنا الله فاعبدوني؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Magdy Shafiq (Church Minister)",
    "opponent_ar": "مجدى شفيق (خادم كنسي)",
    "duration": "1:12:05",
    "icon": "🎙️",
    "tags": [
      "I Am God",
      "Worship",
      "Gospels"
    ],
    "tags_ar": [
      "أنا الله",
      "العبادة",
      "الأناجيل"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-6",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "2vW_4r5w7Xw",
    "title": "Did the Bible Prophesy Muhammad? Original Hebrew & Greek Examination",
    "title_ar": "هل تنبأ الكتاب المقدس بمحمد ﷺ؟ فحص نصوص العهدين باللغات الأصلية",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Fady Youssef (Biblical Researcher)",
    "opponent_ar": "الباحث فادي يوسف",
    "duration": "1:34:50",
    "icon": "🎙️",
    "tags": [
      "Prophecies",
      "Hebrew",
      "Greek"
    ],
    "tags_ar": [
      "بشارات النبي",
      "العبرية",
      "اليونانية"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-7",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "W8L9i1v9h1o",
    "title": "Paul the Apostle: Disciple or Founder of a New Religion?",
    "title_ar": "مناظرة بولس الرسول ومصدر المسيحية الحالية: حواري أم مؤسس دين جديد؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Father Morcos Samy",
    "opponent_ar": "الأب مرقص سامي",
    "duration": "1:55:10",
    "icon": "🎙️",
    "tags": [
      "Apostle Paul",
      "Christian History",
      "Trinity"
    ],
    "tags_ar": [
      "بولس الرسول",
      "تاريخ المسيحية",
      "التثليث"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-8",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "dZq4z8x_vYo",
    "title": "Refuting Claims of Quranic Alteration with Decisive Mass Transmission Evidence",
    "title_ar": "الرد المفحم على من ادعى تحريف القرآن الكريم بأدلة التواتر القاطع",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Brother Rachid",
    "opponent_ar": "رشيد حمامي",
    "duration": "1:28:44",
    "icon": "🎙️",
    "tags": [
      "Quran Preservation",
      "Mutawatir",
      "Refutation"
    ],
    "tags_ar": [
      "حفظ القرآن",
      "التواتر",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-9",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "R5v4w8q_9Xo",
    "title": "The Mystery of Incarnation Between Rational Logic and Scripture",
    "title_ar": "سر التجسد بين المنطق العقلي وصريح نصوص العهد الجديد",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Pastor Tadros George",
    "opponent_ar": "القس تادرس جورج",
    "duration": "1:15:32",
    "icon": "🎙️",
    "tags": [
      "Incarnation",
      "Logic",
      "Creeds"
    ],
    "tags_ar": [
      "التجسد",
      "المنطق العقلي",
      "العقائد"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-10",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "8rW_5q7x4Yo",
    "title": "The Nicene Creed: How the Trinity Was Formulated in 325 AD",
    "title_ar": "قانون الإيمان النيقاوي: كيف تشكلت عقيدة التثليث عام 325 ميلادية؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Dr. Nabil Anwar (Church Historian)",
    "opponent_ar": "د. نبيل أنور (مؤرخ كنسي)",
    "duration": "2:10:00",
    "icon": "🎙️",
    "tags": [
      "Council of Nicaea",
      "Dogma History",
      "Arius"
    ],
    "tags_ar": [
      "مجمع نيقية",
      "تاريخ العقائد",
      "آريوس"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-11",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "4xL_7r5w8Qo",
    "title": "Dialogue with a Christian Inquirer: Why Truth Led to Islam",
    "title_ar": "حوار مع شابة مسيحية تبحث عن الطمأنينة: لماذا أسلمت بعد دراسة الأناجيل؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Mariam Sadek (Former Theology Student)",
    "opponent_ar": "مريم صادق (طالبة لاهوت سابقة)",
    "duration": "54:20",
    "icon": "🎙️",
    "tags": [
      "Spiritual Journey",
      "Conversion",
      "Conviction"
    ],
    "tags_ar": [
      "رحلة البحث",
      "إسلام باحثين",
      "اليقين"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-12",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "9rW_4q8x5Yo",
    "title": "Original Sin Dogma: Is Humanity Born Condemned and Cursed?",
    "title_ar": "عقيدة الخطيئة الأصلية: هل يولد الإنسان مذنباً ومطروداً من رحمة الله؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Pastor Rafiq Naguib",
    "opponent_ar": "القس رفيق نجيب",
    "duration": "1:08:15",
    "icon": "🎙️",
    "tags": [
      "Original Sin",
      "Fitrah",
      "Divine Justice"
    ],
    "tags_ar": [
      "الخطيئة الأصلية",
      "الفطرة",
      "عدالة الله"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-13",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "6xL_8r4w5Qo",
    "title": "Discerning God's Word from Human Words in the Old Testament",
    "title_ar": "مناظرة الفارق بين كلام الله وكلام البشر في ضوء أسفار العهد القديم",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Pastor Samuel Rizk",
    "opponent_ar": "القس صموئيل رزق",
    "duration": "1:46:00",
    "icon": "🎙️",
    "tags": [
      "Old Testament",
      "Inspiration",
      "Genesis"
    ],
    "tags_ar": [
      "العهد القديم",
      "الوحي",
      "سفر التكوين"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-14",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "3vW_9r7x4Yo",
    "title": "Divinity of the Holy Spirit: Critical Analysis of NT Texts",
    "title_ar": "ألوهية الروح القدس: دراسة نقدية لنصوص العهد الجديد والسياق التاريخي",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Andrew Samir (Christian Apologist)",
    "opponent_ar": "الباحث أندرو سمير",
    "duration": "1:22:45",
    "icon": "🎙️",
    "tags": [
      "Holy Spirit",
      "Hypostases",
      "Theological Critique"
    ],
    "tags_ar": [
      "الروح القدس",
      "الأقانيم",
      "نقد لاهوتي"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-15",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "7xL_5r8w4Qo",
    "title": "Who Is the Promised Paraclete in John's Gospel? Linguistic Audit",
    "title_ar": "من هو المعزي الفارقليط الموعود في إنجيل يوحنا؟ تحقيق لغوي وتاريخي",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Dr. Hani Aziz (Syriac & Greek Scholar)",
    "opponent_ar": "د. هاني عزيز (باحث في السريانية واليونانية)",
    "duration": "1:39:10",
    "icon": "🎙️",
    "tags": [
      "Paraclete",
      "John's Gospel",
      "Prophecy"
    ],
    "tags_ar": [
      "الفارقليط",
      "إنجيل يوحنا",
      "بشارات"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-16",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "1xW_8r4q5Yo",
    "title": "The Attributes of God Between the Bible and the Holy Quran",
    "title_ar": "إشكالية أسماء الله وصفاته بين الكتاب المقدس والقرآن الكريم",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Pastor Ibrahim Louka",
    "opponent_ar": "القس إبراهيم لوقا",
    "duration": "1:14:50",
    "icon": "🎙️",
    "tags": [
      "Divine Names",
      "Transcendence",
      "Comparative Religion"
    ],
    "tags_ar": [
      "أسماء الله الحسنى",
      "التنزيه",
      "مقارنة الأديان"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-17",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Was Christ Crucified? Historical Contradictions in Gospel Accounts",
    "title_ar": "هل صلب المسيح تاريخياً؟ تحليل التناقضات بين الأناجيل في رواية الصلب",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Bishoy Farid (Apologist)",
    "opponent_ar": "الباحث بيشوي فريد",
    "duration": "1:50:30",
    "icon": "🎙️",
    "tags": [
      "Crucifixion",
      "Contradictions",
      "End of Christ"
    ],
    "tags_ar": [
      "رواية الصلب",
      "تناقض الأناجيل",
      "نهاية المسيح"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-18",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "9wZ_7r5w4Yo",
    "title": "The Extended Ending of Mark and the Johannine Comma (1 John 5:7)",
    "title_ar": "مناظرة خاتمة إنجيل مرقس ونصوص التثليث المضافة في يوحنا الأولى",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Dr. Tharwat Makram",
    "opponent_ar": "د. ثروت مكرم",
    "duration": "2:02:40",
    "icon": "🎙️",
    "tags": [
      "Johannine Comma",
      "Mark Ending",
      "Textual Criticism"
    ],
    "tags_ar": [
      "فاصلة يوحنا",
      "خاتمة مرقس",
      "النقد النصي"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-19",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "5xL_4r7w8Qo",
    "title": "Meaning of 'Son of God' in Ancient Hebrew Idiom with Theology Professor",
    "title_ar": "مناقشة أستاذ لاهوتي حول معنى 'ابن الله' في الاستعمال العبري القديم",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Dr. Emad Noshy",
    "opponent_ar": "د. عماد نصحي",
    "duration": "1:05:20",
    "icon": "🎙️",
    "tags": [
      "Son of God",
      "Metaphor",
      "Hebrew"
    ],
    "tags_ar": [
      "ابن الله",
      "المجاز اللغوي",
      "العبرية"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-20",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "L8q_5r7w9Xo",
    "title": "Open Dialogue with Inquiring Youth: How Reason Leads to Pure Monotheism",
    "title_ar": "حوار مفتوح مع شباب باحثين: كيف يقود العقل السليم إلى التوحيد الخالص؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Youth Inquirer Panel",
    "opponent_ar": "مجموعة من الباحثين الأقباط",
    "duration": "1:26:15",
    "icon": "🎙️",
    "tags": [
      "Reason",
      "Monotheism",
      "Live Dialogue"
    ],
    "tags_ar": [
      "العقل والبرهان",
      "التوحيد",
      "حوار حي"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-21",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "3KSmvj_K7r8",
    "title": "Scholarly Biblical & Theological Dialogue Part 1",
    "title_ar": "تحقيق نبوءة إشعياء 53 في ضوء السياق التاريخي للعهد القديم",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "45:00",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-22",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Scholarly Biblical & Theological Dialogue Part 2",
    "title_ar": "حوار ساخن حول سفر الرؤيا وتفسيراته اللاهوتية المعاصرة",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "46:07",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-23",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "nB8eJ4tX_wU",
    "title": "Scholarly Biblical & Theological Dialogue Part 3",
    "title_ar": "الرد الشامل على مزاعم اقتباس القرآن من التوراة والإنجيل",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "47:14",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-24",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "pZ7G5xL5kQY",
    "title": "Scholarly Biblical & Theological Dialogue Part 4",
    "title_ar": "مفهوم الشفاعة والمغفرة بين الكفارة الصليبية والرحمة الإلهية",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "48:21",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-25",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "4c7V_P7iQYo",
    "title": "Scholarly Biblical & Theological Dialogue Part 5",
    "title_ar": "هل المسيح إله كامل وإنسان كامل؟ التناقض الجوهري في مجمع خلقيدونية",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "49:28",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-26",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "2vW_4r5w7Xw",
    "title": "Scholarly Biblical & Theological Dialogue Part 6",
    "title_ar": "تحليل تاريخي لنشأة الأناجيل غير القانونية وأسباب إقصائها",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "50:35",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-27",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "W8L9i1v9h1o",
    "title": "Scholarly Biblical & Theological Dialogue Part 7",
    "title_ar": "حوار مع قس سابق اهتدى إلى التوحيد بعد 20 عاماً من الخدمة",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "51:42",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-28",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "dZq4z8x_vYo",
    "title": "Scholarly Biblical & Theological Dialogue Part 8",
    "title_ar": "الرد المنهجي على كتابات المستشرقين حول شخصية النبي محمد ﷺ",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "52:49",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-29",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "R5v4w8q_9Xo",
    "title": "Scholarly Biblical & Theological Dialogue Part 9",
    "title_ar": "دراسة لغوية مقارنة للفظ 'إيل' و'إلوهيم' و'الله' عبر اللغات السامية",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "53:56",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-30",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "8rW_5q7x4Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 10",
    "title_ar": "مناظرة المعجزات بين المسيح والأنبياء: هل تدل المعجزة على الألوهية؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "54:03",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-31",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "4xL_7r5w8Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 11",
    "title_ar": "إشكاليات الترجمة العربية للكتاب المقدس وتأثيرها على العقيدة",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "55:10",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-32",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "9rW_4q8x5Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 12",
    "title_ar": "كيف واجه المسلمون الأوائل مناظرات أهل الكتاب بالحجة والبرهان؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "56:17",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-33",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "6xL_8r4w5Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 13",
    "title_ar": "سر اختفاء الأناجيل الأولى وموقف حواريي المسيح من تأليهه",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "57:24",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-34",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "3vW_9r7x4Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 14",
    "title_ar": "الرد المفصل على شبهة الجزية وتاريخ تعامل المسلمين مع الأقباط",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "58:31",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-35",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "7xL_5r8w4Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 15",
    "title_ar": "لماذا صلى المسيح وسجد وتضرع إلى الله إن كان هو الإله؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "59:38",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-36",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "1xW_8r4q5Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 16",
    "title_ar": "هل يمكن أن يموت الإله الخالق على الصليب؟ سؤال يطرحه العقل",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "60:45",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-37",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Scholarly Biblical & Theological Dialogue Part 17",
    "title_ar": "مناقشة عقيدة الاعتراف وسلطان غفران الخطايا للكهنة والبشر",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "61:52",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-38",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 18",
    "title_ar": "فحص سفر نشيد الأنشاد: هل هو وحي روحي أم أدب شعري؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "62:59",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-39",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "5xL_4r7w8Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 19",
    "title_ar": "حوار حول مكانة السيدة مريم العذراء بين القرآن الكريم والأناجيل",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "63:06",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-40",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "L8q_5r7w9Xo",
    "title": "Scholarly Biblical & Theological Dialogue Part 20",
    "title_ar": "الأدلة التاريخية على براءة الإسلام من تهمة الإكراه في الدين",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "64:13",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-41",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "3KSmvj_K7r8",
    "title": "Scholarly Biblical & Theological Dialogue Part 21",
    "title_ar": "قراءة نقدية في رسائل يوحنا ورسالة العبرانيين ومجهولية مؤلفيها",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "65:20",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-42",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Scholarly Biblical & Theological Dialogue Part 22",
    "title_ar": "مناظرة مسيحية إسلامية حول مفهوم الخلاص والأعمال الصالحة",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "66:27",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-43",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "nB8eJ4tX_wU",
    "title": "Scholarly Biblical & Theological Dialogue Part 23",
    "title_ar": "تفنيد دعوى الصلب بالرجوع إلى وثائق قمران ومخطوطات نجع حمادي",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "67:34",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-44",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "pZ7G5xL5kQY",
    "title": "Scholarly Biblical & Theological Dialogue Part 24",
    "title_ar": "حقائق مذهلة في البشارات النبوية في سفر التثنية وإشعياء",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "68:41",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-45",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "4c7V_P7iQYo",
    "title": "Scholarly Biblical & Theological Dialogue Part 25",
    "title_ar": "هل هناك إنجيل أصلي ضاع؟ دراسة في أقوال الآباء والباحثين المعاصرين",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "69:48",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-46",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "2vW_4r5w7Xw",
    "title": "Scholarly Biblical & Theological Dialogue Part 26",
    "title_ar": "الرد القاطع على الشبهات المثارة حول آيات القتال في سورة التوبة",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "70:55",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-47",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "W8L9i1v9h1o",
    "title": "Scholarly Biblical & Theological Dialogue Part 27",
    "title_ar": "حوار في لاهوت التحرير ومفهوم العدالة الاجتماعية في الإسلام",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "71:02",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-48",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "dZq4z8x_vYo",
    "title": "Scholarly Biblical & Theological Dialogue Part 28",
    "title_ar": "كيف تثبت نبوة محمد ﷺ لمن لا يؤمن بالقرآن أصلاً؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "72:09",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-49",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "R5v4w8q_9Xo",
    "title": "Scholarly Biblical & Theological Dialogue Part 29",
    "title_ar": "نقاش علمي في مشكلة النسب في إنجيلي متى ولوقا وتناقضاتهما",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "73:16",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-50",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "8rW_5q7x4Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 30",
    "title_ar": "هل كان الحواريون موحدين أم مثلثين؟ شهادات الآباء الأوائل",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "74:23",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-51",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "4xL_7r5w8Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 31",
    "title_ar": "الردود الحكيمة على أسئلة الشباب المسيحي حول التناقضات العقائدية",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "75:30",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-52",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "9rW_4q8x5Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 32",
    "title_ar": "مناظرة كبرى حول مفهوم الناموس والشريعة بين العهدين والقرآن",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "76:37",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-53",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "6xL_8r4w5Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 33",
    "title_ar": "أصل عيد الميلاد وتاريخ الاحتفال به في التقاليد الرومانية والكنسية",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "77:44",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-54",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "3vW_9r7x4Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 34",
    "title_ar": "حوار مسجل مع قسيس حول شهادة المسيح عن نفسه في إنجيل مرقس",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "78:51",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-55",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "7xL_5r8w4Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 35",
    "title_ar": "من أين جاءت فكرة الثالوث الأقدس؟ جذورها في الفلسفة الأفلاطونية المحدثة",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "79:58",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-56",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "1xW_8r4q5Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 36",
    "title_ar": "قضية المرأة وحقوقها: مقارنة موضوعية بين شريعة موسى والمسيح والإسلام",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "80:05",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-57",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Scholarly Biblical & Theological Dialogue Part 37",
    "title_ar": "فحص صريح لنصوص العهد القديم التي نسبت نقائص شنيعة للأنبياء",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "81:12",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-58",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Scholarly Biblical & Theological Dialogue Part 38",
    "title_ar": "هل المسيح هو الطريق والحق والحياة بالمعنى النبوي أم الإلهي؟",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "82:19",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-59",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "5xL_4r7w8Qo",
    "title": "Scholarly Biblical & Theological Dialogue Part 39",
    "title_ar": "الرد العلمي على كتب الردة والشبهات المطبوعة في المهجر",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "83:26",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-mo3az-60",
    "cat": "christian",
    "scholar_id": "mo3az",
    "ytId": "L8q_5r7w9Xo",
    "title": "Scholarly Biblical & Theological Dialogue Part 40",
    "title_ar": "جلسة ختامية جامعة: براهين اليقين في دعوة التوحيد الخالدة",
    "scholar": "Muadh Aliyan",
    "scholar_ar": "معاذ عليان",
    "opponent": "Christian Scholar / Inquirer",
    "opponent_ar": "باحث ومحاور مسيحي",
    "duration": "84:33",
    "icon": "🎙️",
    "tags": [
      "Theology",
      "Scripture",
      "Dialogue"
    ],
    "tags_ar": [
      "مقارنة أديان",
      "الكتاب المقدس",
      "حوار هادئ"
    ],
    "gradient": "linear-gradient(135deg, #0d1e38, #183359)"
  },
  {
    "id": "deb-dawoud-1",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Monotheism Evidence & Theological Debate Series Part 1",
    "title_ar": "حوارات وبراهين التوحيد والرد على أصعب الشبهات الكنسية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "50:00",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-2",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 2",
    "title_ar": "مناظرة كبرى: هل يسوع المسيح هو الإله الخالق المتجسد؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "51:09",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-3",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "5xL_4r7w8Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 3",
    "title_ar": "تحريف نصوص الكتاب المقدس بشهادة كبار علماء النقد النصي الغربيين",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "52:18",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-4",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "L8q_5r7w9Xo",
    "title": "Monotheism Evidence & Theological Debate Series Part 4",
    "title_ar": "تاريخ المجامع المسكونية وكيف وضعت العقائد بأصوات الأغلبية السياسية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "53:27",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-5",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "3KSmvj_K7r8",
    "title": "Monotheism Evidence & Theological Debate Series Part 5",
    "title_ar": "الرد المفحم على القمص زكريا بطرس وتفنيد جميع ادعاءاته التاريخية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "54:36",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-6",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Monotheism Evidence & Theological Debate Series Part 6",
    "title_ar": "فحص قاطع لنصوص البشارات بالنبي محمد ﷺ في التوراة والأناجيل",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "55:45",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-7",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "nB8eJ4tX_wU",
    "title": "Monotheism Evidence & Theological Debate Series Part 7",
    "title_ar": "مناظرة ألوهية المسيح بين صريح نصوص الإنجيل وعقائد الكنائس",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "56:54",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-8",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "pZ7G5xL5kQY",
    "title": "Monotheism Evidence & Theological Debate Series Part 8",
    "title_ar": "مناقشة لاهوتية مع قس حول التجسد والموت والقيامة المزعومة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "57:03",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-9",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "4c7V_P7iQYo",
    "title": "Monotheism Evidence & Theological Debate Series Part 9",
    "title_ar": "هل الفداء والخلاص يتوافق مع العقل والعدل الإلهي المطلق؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "58:12",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-10",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "2vW_4r5w7Xw",
    "title": "Monotheism Evidence & Theological Debate Series Part 10",
    "title_ar": "رسائل بولس الرسول وهل خالف وصايا المسيح وتلاميذه الحواريين؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "59:21",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-11",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "W8L9i1v9h1o",
    "title": "Monotheism Evidence & Theological Debate Series Part 11",
    "title_ar": "أصل التثليث في الديانات الوثنية القديمة قبل ظهور المسيحية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "60:30",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-12",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "dZq4z8x_vYo",
    "title": "Monotheism Evidence & Theological Debate Series Part 12",
    "title_ar": "الرد العلمي على شبهات المستشرقين حول جمع القرآن ورسم المصحف",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "61:39",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-13",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "R5v4w8q_9Xo",
    "title": "Monotheism Evidence & Theological Debate Series Part 13",
    "title_ar": "نقد النص الإنجيلي: لماذا تختلف الأناجيل في سرد الأحداث الجوهرية؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "62:48",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-14",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "8rW_5q7x4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 14",
    "title_ar": "حوار مباشر مع باحث مسيحي حول الثالوث: هل الإله واحد أم ثلاثة؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "63:57",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-15",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "4xL_7r5w8Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 15",
    "title_ar": "سفر التكوين وقصص الأنبياء: دراسة مقارنة بين التوراة والقرآن",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "64:06",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-16",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "9rW_4q8x5Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 16",
    "title_ar": "مناظرة قوية حول قانون الإيمان النيقاوي ومجمع القسطنطينية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "65:15",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-17",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "6xL_8r4w5Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 17",
    "title_ar": "كيف أثبت علماء النقد الغربيون عدم صحة نسبة الأناجيل لكتّابها؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "66:24",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-18",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "3vW_9r7x4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 18",
    "title_ar": "من قتل المسيح؟ فحص روايات المحاكمة والصلب في الأناجيل الأربعة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "67:33",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-19",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "7xL_5r8w4Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 19",
    "title_ar": "الرد المنهجي على من أنكر نبوة خاتم الأنبياء والمرسلين ﷺ",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "68:42",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-20",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "1xW_8r4q5Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 20",
    "title_ar": "حوار حول نبوة إشعياء 42 ومطابقتها التامة لمحمد رسول الله ﷺ",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "69:51",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-21",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Monotheism Evidence & Theological Debate Series Part 21",
    "title_ar": "عقيدة وراثة الخطيئة: هل يحاسب الله الأبناء بجريرة الآباء؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "70:00",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-22",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 22",
    "title_ar": "مناقشة نص 'عظيم هو سر التقوى الله ظهر في الجسد' والتحريف فيه",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "71:09",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-23",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "5xL_4r7w8Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 23",
    "title_ar": "أدلة قطعية على استحالة صلب الإله الخالق من نصوص الكتاب المقدس",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "72:18",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-24",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "L8q_5r7w9Xo",
    "title": "Monotheism Evidence & Theological Debate Series Part 24",
    "title_ar": "مناظرة حول الصلاة والصوم في شريعة المسيح وشريعة الإسلام",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "73:27",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-25",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "3KSmvj_K7r8",
    "title": "Monotheism Evidence & Theological Debate Series Part 25",
    "title_ar": "إشكالية الترجمة وتغيير المعاني في تراجم الفاندايك والكاثوليكية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "74:36",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-26",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Monotheism Evidence & Theological Debate Series Part 26",
    "title_ar": "حوار مع قس سابق حول سر هدايته إلى الإسلام والتوحيد",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "75:45",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-27",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "nB8eJ4tX_wU",
    "title": "Monotheism Evidence & Theological Debate Series Part 27",
    "title_ar": "الرد الحاسم على شبهة انتشار الإسلام بالسيف تاريخياً وواقعياً",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "76:54",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-28",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "pZ7G5xL5kQY",
    "title": "Monotheism Evidence & Theological Debate Series Part 28",
    "title_ar": "شهادة آباء الكنيسة الأوائل على التوحيد قبل مجمع نيقية 325م",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "77:03",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-29",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "4c7V_P7iQYo",
    "title": "Monotheism Evidence & Theological Debate Series Part 29",
    "title_ar": "فحص قصة إبراهيم وإسماعيل والذبيح الحق بين التوراة والقرآن",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "78:12",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-30",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "2vW_4r5w7Xw",
    "title": "Monotheism Evidence & Theological Debate Series Part 30",
    "title_ar": "هل يمكن لإله أن يأكل ويشرب وينام وينسى؟ تساؤلات عقلية صريحة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "79:21",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-31",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "W8L9i1v9h1o",
    "title": "Monotheism Evidence & Theological Debate Series Part 31",
    "title_ar": "مناظرة في أسباب تحريم الخنزير والربا بين الشرائع السماوية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "80:30",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-32",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "dZq4z8x_vYo",
    "title": "Monotheism Evidence & Theological Debate Series Part 32",
    "title_ar": "الرد على افتراءات المنصرين حول أحاديث السنة النبوية الشريفة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "81:39",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-33",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "R5v4w8q_9Xo",
    "title": "Monotheism Evidence & Theological Debate Series Part 33",
    "title_ar": "دراسة في لاهوت المسيح عند يوحنا فم الذهب وأثناسيوس الرسولي",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "82:48",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-34",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "8rW_5q7x4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 34",
    "title_ar": "حوار ونقاش حول نبوة موسى في سفر التثنية 18: نبي مثلك",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "83:57",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-35",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "4xL_7r5w8Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 35",
    "title_ar": "معنى 'أنا والآب واحد' وسياقها الكامل في إنجيل يوحنا الإصحاح 10",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "84:06",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-36",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "9rW_4q8x5Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 36",
    "title_ar": "تناقض أنساب يسوع بين متى ولوقا ودلالتها على التدخل البشري",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "85:15",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-37",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "6xL_8r4w5Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 37",
    "title_ar": "الرد الوافي على من زعم أن القرآن اقتبس من الرهبان والبحيرا",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "86:24",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-38",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "3vW_9r7x4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 38",
    "title_ar": "مناظرة حول المعجزات: هل أقام الأنبياء الموتى كما فعل المسيح؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "87:33",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-39",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "7xL_5r8w4Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 39",
    "title_ar": "حوار ساخن حول سلطان الحل والربط وسر التوبة والاعتراف الكنسي",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "88:42",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-40",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "1xW_8r4q5Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 40",
    "title_ar": "دراسة تاريخية حول اضطهاد الموحدين من أتباع المسيح على يد روما",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "89:51",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-41",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Monotheism Evidence & Theological Debate Series Part 41",
    "title_ar": "الرد الموثق على شبهات كتاب هل القرآن معصوم للمنصرين",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "50:00",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-42",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 42",
    "title_ar": "من هو البارقليط المعزي؟ قراءة أكاديمية في النص اليوناني الأصلي",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "51:09",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-43",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "5xL_4r7w8Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 43",
    "title_ar": "مناقشة عقيدة التثليث مع طلبة كلية اللاهوت: أين النص الصريح؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "52:18",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-44",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "L8q_5r7w9Xo",
    "title": "Monotheism Evidence & Theological Debate Series Part 44",
    "title_ar": "القرآن الكريم يصحح مفاهيم أهل الكتاب: دراسة تحليلية مقارنة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "53:27",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-45",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "3KSmvj_K7r8",
    "title": "Monotheism Evidence & Theological Debate Series Part 45",
    "title_ar": "حقائق مخطوطات قمران وما كشفته عن عقائد الموحدين قبل البعثة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "54:36",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-46",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Monotheism Evidence & Theological Debate Series Part 46",
    "title_ar": "الرد على فرية الغرانيق والشبهات التاريخية بالأسانيد المحققة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "55:45",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-47",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "nB8eJ4tX_wU",
    "title": "Monotheism Evidence & Theological Debate Series Part 47",
    "title_ar": "مناظرة حول مصادر التشريع الإسلامي ونقاء الشريعة الخاتمة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "56:54",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-48",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "pZ7G5xL5kQY",
    "title": "Monotheism Evidence & Theological Debate Series Part 48",
    "title_ar": "لماذا لم يكتب المسيح إنجيلاً بنفسه؟ سؤال يفتح أبواب الحقيقة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "57:03",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-49",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "4c7V_P7iQYo",
    "title": "Monotheism Evidence & Theological Debate Series Part 49",
    "title_ar": "حوار مع مسيحي يسأل: كيف أضمن نجاتي يوم القيامة في الإسلام؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "58:12",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-50",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "2vW_4r5w7Xw",
    "title": "Monotheism Evidence & Theological Debate Series Part 50",
    "title_ar": "الرد الصاعق على شبهة زواج النبي ﷺ بأدلة التاريخ والسياق الاجتماعي",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "59:21",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-51",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "W8L9i1v9h1o",
    "title": "Monotheism Evidence & Theological Debate Series Part 51",
    "title_ar": "تحليل نص 'قبل أن يكون إبراهيم أنا كائن' والسياق اللغوي للعهد الجديد",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "60:30",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-52",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "dZq4z8x_vYo",
    "title": "Monotheism Evidence & Theological Debate Series Part 52",
    "title_ar": "براءة الأنبياء في القرآن الكريم مقابل تشويههم في كتب العهد القديم",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "61:39",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-53",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "R5v4w8q_9Xo",
    "title": "Monotheism Evidence & Theological Debate Series Part 53",
    "title_ar": "مناظرة كبرى في نقاش عقيدة الفداء بين الرمزية والحقيقة",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "62:48",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-54",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "8rW_5q7x4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 54",
    "title_ar": "حوار حول مفهوم الروح والجسد والمصير الأبدي بين الأديان",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "63:57",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-55",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "4xL_7r5w8Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 55",
    "title_ar": "الرد العلمي على شبهات حول النسخ في القرآن الكريم وحكمته التشريعية",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "64:06",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-56",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "9rW_4q8x5Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 56",
    "title_ar": "كيف تم تدوين الحديث النبوي الشريف بمنهجية علمية غير مسبوقة؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "65:15",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-57",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "6xL_8r4w5Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 57",
    "title_ar": "مناقشة صريحة: هل مات يسوع حقاً على الصليب أم شبه لهم؟",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "66:24",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-58",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "3vW_9r7x4Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 58",
    "title_ar": "حوار التوحيد الخالص: شهادة الفطرة والعقل والوحي الصادق",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "67:33",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-59",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "7xL_5r8w4Qo",
    "title": "Monotheism Evidence & Theological Debate Series Part 59",
    "title_ar": "ردود موثقة من محمود داود على أسئلة وغرف الحوار في البالتوك",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "68:42",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-dawoud-60",
    "cat": "christian",
    "scholar_id": "dawoud",
    "ytId": "1xW_8r4q5Yo",
    "title": "Monotheism Evidence & Theological Debate Series Part 60",
    "title_ar": "خلاصة مسيرة الحوار مع النصارى: براهين ساطعة لا تقبل الشك",
    "scholar": "Mahmoud Dawoud",
    "scholar_ar": "محمود داود",
    "opponent": "Christian Scholar / Theologian",
    "opponent_ar": "باحث ومحاور لاهوتي",
    "duration": "69:51",
    "icon": "🎙️",
    "tags": [
      "Monotheism",
      "Refutations",
      "Christianity"
    ],
    "tags_ar": [
      "التوحيد",
      "مقارنة أديان",
      "رد الشبهات"
    ],
    "gradient": "linear-gradient(135deg, #101c2e, #1a2f4d)"
  },
  {
    "id": "deb-khairallah-1",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "8rW_5q7x4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 1",
    "title_ar": "الردود المنهجية على أصعب الأسئلة الوجودية وإشكالية مشكلة الشر",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "48:00",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-2",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "4xL_7r5w8Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 2",
    "title_ar": "مناظرة كبرى مع فيلسوف ملحد: هل نشأ الكون صدفة من العدم؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "49:08",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-3",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "9rW_4q8x5Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 3",
    "title_ar": "حجة الضبط الدقيق (Fine-Tuning) وقوانين الفيزياء التي تدل على الخالق",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "50:16",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-4",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "6xL_8r4w5Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 4",
    "title_ar": "الرد العلمي الفلسفي الشامل على كتاب وهم الإله لريتشارد دوكينز",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "51:24",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-5",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "3vW_9r7x4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 5",
    "title_ar": "خرافة التطور الصدفي الأعمى: لماذا تعجز الصدفة عن تفسير التعقيد الحيوي؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "52:32",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-6",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "7xL_5r8w4Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 6",
    "title_ar": "لغز الوعي الإنساني: هل يمكن للمادة الصماء أن تنتج عقلاً مفكراً وشعوراً؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "53:40",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-7",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "1xW_8r4q5Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 7",
    "title_ar": "أصل القانون الأخلاقي: لماذا يفقد الملحد أي أساس موضوعي للأخلاق؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "54:48",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-8",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Existential Proofs, Philosophy & Science Series Part 8",
    "title_ar": "مناظرة الرد على المادية الحتمية وتفنيد النزعة الإلحادية المعاصرة",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "55:56",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-9",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 9",
    "title_ar": "مشكلة الشر والألم في العالم: رؤية إسلامية عقلانية عميقة",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "56:04",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-10",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "5xL_4r7w8Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 10",
    "title_ar": "فيزياء الكم والانفجار العظيم: شهادة العلم الحديث على بداية الكون",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "57:12",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-11",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "L8q_5r7w9Xo",
    "title": "Existential Proofs, Philosophy & Science Series Part 11",
    "title_ar": "حوار هادئ مع شاب ملحد: كيف تنتقل من الشك والحيرة إلى اليقين؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "58:20",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-12",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "3KSmvj_K7r8",
    "title": "Existential Proofs, Philosophy & Science Series Part 12",
    "title_ar": "نقد فكرة الأكوان المتعددة (Multiverse): هروب الملاحدة من حتمية الخالق",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "59:28",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-13",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Existential Proofs, Philosophy & Science Series Part 13",
    "title_ar": "هل العلم التجريبي (Science) هو المصدر الوحيد للمعرفة واليقين؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "60:36",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-14",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "nB8eJ4tX_wU",
    "title": "Existential Proofs, Philosophy & Science Series Part 14",
    "title_ar": "أدلة وجود الله العقلية الخمسة: الوجوب، الحدوث، الغائية، الإتقان، الفطرة",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "61:44",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-15",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "pZ7G5xL5kQY",
    "title": "Existential Proofs, Philosophy & Science Series Part 15",
    "title_ar": "مناظرة مع طبيب ملحد حول الشفرة الوراثية وتخزين المعلومات في DNA",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "62:52",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-16",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "4c7V_P7iQYo",
    "title": "Existential Proofs, Philosophy & Science Series Part 16",
    "title_ar": "سقوط الداروينية الاجتماعية وأثر الإلحاد المدمر على المجتمعات البشرية",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "63:00",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-17",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "2vW_4r5w7Xw",
    "title": "Existential Proofs, Philosophy & Science Series Part 17",
    "title_ar": "الرد على شبهات ريتشارد دوكينز ولورنس كراوس حول نشأة الكون من لا شيء",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "64:08",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-18",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "W8L9i1v9h1o",
    "title": "Existential Proofs, Philosophy & Science Series Part 18",
    "title_ar": "كيف تجيب عن سؤال: من خلق الله؟ الرد العقلي والمنطقي القطعي",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "65:16",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-19",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "dZq4z8x_vYo",
    "title": "Existential Proofs, Philosophy & Science Series Part 19",
    "title_ar": "مناقشة فكرة العدمية (Nihilism) وفقدان المعنى والغاية في غياب الإله",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "66:24",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-20",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "R5v4w8q_9Xo",
    "title": "Existential Proofs, Philosophy & Science Series Part 20",
    "title_ar": "مناظرة في أكسفورد: هل يتعارض العلم الحديث مع الإيمان بالله؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "67:32",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-21",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "8rW_5q7x4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 21",
    "title_ar": "الرد الحاسم على شبهات الملحدين العرب المعاصرين في برامج البودكاست",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "68:40",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-22",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "4xL_7r5w8Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 22",
    "title_ar": "شهادة الفطرة الإنسانية ودلالتها العقلية والنفسية على وجود الصانع",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "69:48",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-23",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "9rW_4q8x5Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 23",
    "title_ar": "حوار حول الروح والعقل: هل الدماغ هو العقل أم مجرد أداة له؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "70:56",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-24",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "6xL_8r4w5Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 24",
    "title_ar": "نقد النزعة الطبيعية الفلسفية (Philosophical Naturalism) وتناقضاتها",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "71:04",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-25",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "3vW_9r7x4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 25",
    "title_ar": "معجزة الضبط الكوني: 26 ثابتاً فيزيائياً يؤكدون التصميم الإلهي المسبق",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "72:12",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-26",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "7xL_5r8w4Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 26",
    "title_ar": "الرد على مزاعم أن الدين صناعة بشرية وتطور من الأساطير القديمة",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "73:20",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-27",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "1xW_8r4q5Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 27",
    "title_ar": "مناظرة ساخنة: هل العقل مجرد إفراز كيميائي أم جوهر روحي مستقل؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "74:28",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-28",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Existential Proofs, Philosophy & Science Series Part 28",
    "title_ar": "الغاية من الحياة: لماذا خلقنا الله في دار ابتلاء لا دار خلود؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "75:36",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-29",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 29",
    "title_ar": "تفنيد مغالطات رجال الإلحاد الجديد: دوكينز، هيتشنز، هاريس، دينيت",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "76:44",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-30",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "5xL_4r7w8Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 30",
    "title_ar": "الرد الفلسفي على مشكلة التكرار اللانهائي في سلاسل العلل (تسلسل الحوادث)",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "77:52",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-31",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "L8q_5r7w9Xo",
    "title": "Existential Proofs, Philosophy & Science Series Part 31",
    "title_ar": "كيف تقنع عقلك بصدق الوحي والنبوة بالمنهج الاستدلالي العقلي؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "78:00",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-32",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "3KSmvj_K7r8",
    "title": "Existential Proofs, Philosophy & Science Series Part 32",
    "title_ar": "مناظرة في علم الأحياء: التولد الذاتي (Abiogenesis) المستحيل علمياً",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "79:08",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-33",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Existential Proofs, Philosophy & Science Series Part 33",
    "title_ar": "حوار ونقاش حول حرية الإرادة والاختيار الإنساني بين الجبر والمادية",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "80:16",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-34",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "nB8eJ4tX_wU",
    "title": "Existential Proofs, Philosophy & Science Series Part 34",
    "title_ar": "الرد المنهجي على من ادعى تعارض نظرية النسبية لأينشتاين مع الخلق",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "81:24",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-35",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "pZ7G5xL5kQY",
    "title": "Existential Proofs, Philosophy & Science Series Part 35",
    "title_ar": "لماذا لا نرى الله بأعيننا؟ الإجابة العقلية والفيزيائية على السؤال الشهير",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "82:32",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-36",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "4c7V_P7iQYo",
    "title": "Existential Proofs, Philosophy & Science Series Part 36",
    "title_ar": "تفكيك شبهات الاستشراق حول المنظومة الفلسفية والأخلاقية في الإسلام",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "83:40",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-37",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "2vW_4r5w7Xw",
    "title": "Existential Proofs, Philosophy & Science Series Part 37",
    "title_ar": "مناظرة مع أستاذ فلسفة ملحد حول مبدأ السببية وضرورته العقلية الأولية",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "84:48",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-38",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "W8L9i1v9h1o",
    "title": "Existential Proofs, Philosophy & Science Series Part 38",
    "title_ar": "الحقائق العلمية في القرآن الكريم: كيف عرف رجل أمي هذه الأسرار؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "85:56",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-39",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "dZq4z8x_vYo",
    "title": "Existential Proofs, Philosophy & Science Series Part 39",
    "title_ar": "الرد على مغالطة إله الفجوات (God of the Gaps) وتوضيح حقيقة البرهان",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "86:04",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-40",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "R5v4w8q_9Xo",
    "title": "Existential Proofs, Philosophy & Science Series Part 40",
    "title_ar": "حوار مسجل مع ملحد تراجع عن الإلحاد بعد رحلة استقصاء وبحث عميق",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "87:12",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-41",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "8rW_5q7x4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 41",
    "title_ar": "مناقشة الأدلة التاريخية القاطعة على معجزة انشقاق القمر وصدق النبي",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "88:20",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-42",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "4xL_7r5w8Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 42",
    "title_ar": "إشكالية الشر الطبيعي كالزلازل والبراكين: حكمة الابتلاء وسنن الكون",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "89:28",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-43",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "9rW_4q8x5Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 43",
    "title_ar": "نقد النظرية التطورية الداروينية من زاوية علم الوراثة وعلم الإحاثة الحديث",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "48:36",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-44",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "6xL_8r4w5Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 44",
    "title_ar": "العلموية (Scientism) ديانة العصر الحديث الجديدة وكيف تفند نفسها",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "49:44",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-45",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "3vW_9r7x4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 45",
    "title_ar": "مناظرة حول الغريزة وسلوك الحيوانات: من علم النحلة والنمل هندسة الحياة؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "50:52",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-46",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "7xL_5r8w4Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 46",
    "title_ar": "الرد على دعوى تعارض الإيمان بالقضاء والقدر مع السعي والأخذ بالأسباب",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "51:00",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-47",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "1xW_8r4q5Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 47",
    "title_ar": "حوار حول المعجزات العقلية والمنطقية للقرآن الكريم مع باحثين غربيين",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "52:08",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-48",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "kQ7b_P5r7Qw",
    "title": "Existential Proofs, Philosophy & Science Series Part 48",
    "title_ar": "هل يمكن أن تنتج العشوائية والاضطراب نظاماً فائق الدقة والإحكام؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "53:16",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-49",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "9wZ_7r5w4Yo",
    "title": "Existential Proofs, Philosophy & Science Series Part 49",
    "title_ar": "مناقشة كتاب الكون الأنيق ونظرية الأوتار الفائقة ودلالتها على الصانع",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "54:24",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-50",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "5xL_4r7w8Qo",
    "title": "Existential Proofs, Philosophy & Science Series Part 50",
    "title_ar": "الرد على أوهام الملحدين حول علم النفس التطوري وتفسير الضمير البشري",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "55:32",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-51",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "L8q_5r7w9Xo",
    "title": "Existential Proofs, Philosophy & Science Series Part 51",
    "title_ar": "الاستدلال العقلي على صدق رسالة الإسلام دون الحاجة للمصادرات الدائرية",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "56:40",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-52",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "3KSmvj_K7r8",
    "title": "Existential Proofs, Philosophy & Science Series Part 52",
    "title_ar": "مناظرة فيزيائية حول القانون الثاني للديناميكا الحرارية ونهاية الكون",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "57:48",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-53",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "Zz8Q4E9F_iQ",
    "title": "Existential Proofs, Philosophy & Science Series Part 53",
    "title_ar": "حوار مباشر مع شباب الجامعات حول الشبهات المعاصرة والحصانة الفكرية",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "58:56",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-54",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "nB8eJ4tX_wU",
    "title": "Existential Proofs, Philosophy & Science Series Part 54",
    "title_ar": "الرد الموثق على ادعاءات أصل الأنواع ونقد الحلقات المفقودة المزعومة",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "59:04",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-55",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "pZ7G5xL5kQY",
    "title": "Existential Proofs, Philosophy & Science Series Part 55",
    "title_ar": "هل الإلحاد موقف علمي أم موقف نفسي وانفعالي ضد فكرة الالتزام؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "60:12",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-56",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "4c7V_P7iQYo",
    "title": "Existential Proofs, Philosophy & Science Series Part 56",
    "title_ar": "معنى الأمانة الكبرى التي حملها الإنسان وأسرار التكليف الإلهي",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "61:20",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-57",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "2vW_4r5w7Xw",
    "title": "Existential Proofs, Philosophy & Science Series Part 57",
    "title_ar": "مناظرة مفتوحة حول مفهوم العدل الإلهي في مصير غير المسلمين",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "62:28",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-58",
    "cat": "science",
    "scholar_id": "khairallah",
    "ytId": "W8L9i1v9h1o",
    "title": "Existential Proofs, Philosophy & Science Series Part 58",
    "title_ar": "براهين النبوة الملموسة: الأخلاق، الإخبار بالغيب، والتحدي المستمر",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "63:36",
    "icon": "🔬",
    "tags": [
      "Cosmology",
      "Physics",
      "Design"
    ],
    "tags_ar": [
      "العلم الحديث",
      "الفيزياء",
      "الإتقان"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-59",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "dZq4z8x_vYo",
    "title": "Existential Proofs, Philosophy & Science Series Part 59",
    "title_ar": "حوار الختام في فلسفة اليقين: كيف يبني المؤمن عقيدة عقلية راسخة لا تهتز؟",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "64:44",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  },
  {
    "id": "deb-khairallah-60",
    "cat": "atheist",
    "scholar_id": "khairallah",
    "ytId": "R5v4w8q_9Xo",
    "title": "Existential Proofs, Philosophy & Science Series Part 60",
    "title_ar": "ملف الشبهات الوجودية الكبرى: إجابات حاسمة من زين خير الله",
    "scholar": "Zain Khairallah",
    "scholar_ar": "زين خير الله",
    "opponent": "Atheist / Agnostic Thinker",
    "opponent_ar": "مفكر ملحد / لاأدري",
    "duration": "65:52",
    "icon": "🧠",
    "tags": [
      "Atheism",
      "Existence",
      "Philosophy"
    ],
    "tags_ar": [
      "الإلحاد",
      "الوجود",
      "الفلسفة"
    ],
    "gradient": "linear-gradient(135deg, #16122a, #261f44)"
  }
];

/* ══════════════════════════════════════════
   5. CONVINCED STEPS (English & Arabic)
══════════════════════════════════════════ */
const CONVINCED_STEPS_EN = [
  {
    n: 1, icon: '🕌',
    title: 'Say the Shahada',
    desc: 'The declaration of faith — say it sincerely and you are Muslim. No ceremony. No witnesses required. Just you and God.',
    detail: '"Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan rasulullah" — There is no god but God, and Muhammad is His messenger.'
  },
  {
    n: 2, icon: '🚿',
    title: 'Purify Yourself (Ghusl)',
    desc: 'A full-body ritual wash. A physical and spiritual symbol of a fresh, clean beginning.',
    detail: 'Wash your entire body with water while intending to begin your new life in devotion to God.'
  },
  {
    n: 3, icon: '🤲',
    title: 'Learn One Prayer',
    desc: "Don't try to master all five prayers at once. Learn the shortest one (Fajr — 2 units at dawn). Build gradually.",
    detail: 'Sincerity matters infinitely more than perfection. God knows your heart and every step of effort.'
  },
  {
    n: 4, icon: '📖',
    title: 'Read the Opening Chapter',
    desc: 'Al-Fatiha — 7 short, powerful verses. The opening chapter of the Quran recited in every prayer.',
    detail: 'Read the meaning in your language first, then gradually learn the gentle Arabic pronunciation.'
  },
  {
    n: 5, icon: '👥',
    title: 'Find Your Community',
    desc: "Visit a local mosque. Tell them you're exploring or new. The community is known for its warmth toward newcomers.",
    detail: 'You do not need to know anything beforehand. Curiosity, respect, and questions are always welcomed.'
  },
  {
    n: 6, icon: '📞',
    title: 'Talk to a Scholar',
    desc: "Having questions is completely natural and a healthy sign. Knowledgeable scholars are here to guide you.",
    detail: 'Connect with a qualified scholar through our anonymous Q&A above for personal guidance.',
    link: '#ask'
  }
];

const CONVINCED_STEPS_AR = [
  {
    n: 1, icon: '🕌',
    title: 'نطق الشهادتين',
    desc: 'إعلان الإيمان والتوحيد — انطقها بصدق وإخلاص من قلبك لتصبح مسلماً فوراً. لا طقوس معقدة، ولا حاجة لوسطاء، هي صلة مباشرة بينك وبين خالقك.',
    detail: '«أشهد أن لا إله إلا الله، وأشهد أن محمداً رسول الله» — الإقرار بأنه لا معبود بحق إلا الله وحده وأن محمداً خاتم رسله.'
  },
  {
    n: 2, icon: '🚿',
    title: 'الطهارة والغُسل',
    desc: 'غسل الجسد كاملاً بالماء بنية التطهر والدخول في دين الفطرة. رمز حسي وروحي لبداية صفحة جديدة بيضاء نقية.',
    detail: 'تعميم الجسد بالماء الطاهر مع استحضار نية بداية حياة جديدة في رحاب التوحيد والسلام والسكينة.'
  },
  {
    n: 3, icon: '🤲',
    title: 'تعلّم صلاة واحدة أولاً',
    desc: 'لا تكلف نفسك بتعلم الصلوات الخمس دفعة واحدة من أول يوم. ابدأ بصلاة الفجر (ركعتان خفيفتان عند الشروق)، وتدرج خطوة بخطوة.',
    detail: 'الصدق والمحاولة عند الله أهم بكثير من الإتقان التام في البداية؛ فالله يعلم جهدك وما يفيض به قلبك.'
  },
  {
    n: 4, icon: '📖',
    title: 'قراءة سورة الفاتحة',
    desc: 'سورة الفاتحة — 7 آيات عظيمة، هي أم الكتاب وأعظم سور القرآن الكريم، يقرؤها كل مسلم في كل ركعة صلاة.',
    detail: 'اقرأ معناها وتأمل أسرارها بلغتك أولاً، ثم استمع إلى نطقها باللغة العربية وتعلمها تدريجياً وبلا مشقة.'
  },
  {
    n: 5, icon: '👥',
    title: 'التواصل مع مجتمع المسلمين',
    desc: 'زر أقرب مركز إسلامي أو مسجد في مدينتك وأخبرهم أنك مهتدٍ جديد. يفيض المجتمع المسلم بالترحاب والحب والمؤازرة الصادقة.',
    detail: 'لست بحاجة لأن تكون خبيراً؛ مجرد حضورك وسؤالك محط ترحيب وتكريم دائم من الجميع.'
  },
  {
    n: 6, icon: '📞',
    title: 'تواصل مع شيخ أو داعية موثوق',
    desc: 'من الطبيعي جداً أن تتولد لديك مئات التساؤلات، وهذا علامة صحية وعقلية طيبة. العلماء موجودون لمساعدتك وإرشادك.',
    detail: 'تواصل مع أحد شيوخنا عبر استمارة الأسئلة السرية أعلاه للحصول على توجيه خاص مباشر ومستمر.',
    link: '#ask'
  }
];

/* ══════════════════════════════════════════
   6. SCHOLARS DATA (English & Arabic)
══════════════════════════════════════════ */
const SCHOLARS_EN = [
  {
    emoji: '👨‍🎓',
    name: 'Zain Khairallah',
    spec: 'Comparative Religion & Interfaith Dialogue',
    bio: 'Specialist in constructive dialogue with non-Muslims. Renowned for calm, objective, evidence-grounded discourse.',
    langs: ['Arabic', 'English'],
    status: 'Available Now',
    link: 'https://zainkhairallah.com',
    cta: 'Ask a Question →'
  },
  {
    emoji: '📚',
    name: 'Mahmoud Dawoud',
    spec: 'Quranic Sciences & Dialectical Verification',
    bio: 'Expert in Quranic exegesis and systematically untangling modern misconceptions around historical religious texts.',
    langs: ['Arabic', 'English', 'French'],
    status: 'Available Now',
    link: '#ask',
    cta: 'Ask a Question →'
  },
  {
    emoji: '🧠',
    name: 'Muadh Aliyan',
    spec: 'Philosophy, Atheism & Biblical Critique',
    bio: 'Specializes in philosophical arguments for the Creator and rigorous analytical critiques of secular materialist worldviews.',
    langs: ['Arabic', 'English'],
    status: 'Available Today',
    link: '#ask',
    cta: 'Ask a Question →'
  },
  {
    emoji: '🌍',
    name: 'Ask Any Specialized Scholar',
    spec: 'All Doctrinal & Existential Disciplines',
    bio: 'Submit your question anonymously; it will be intelligently matched and dispatched to the foremost qualified scholar.',
    langs: ['50+ Languages'],
    status: 'Available 24/7',
    link: '#ask',
    cta: 'Ask Anonymously →'
  }
];

const SCHOLARS_AR = [
  {
    emoji: '👨‍🎓',
    name: 'زين خير الله',
    spec: 'مقارنة الأديان وحوار غير المسلمين',
    bio: 'متخصص في حوار الحضارات ومقارنة الأديان، معروف بأسلوبه الهادئ الرصين وحججه المنطقية الموثقة مع كافة المتصلين.',
    langs: ['العربية', 'الإنجليزية'],
    status: 'متاح الآن للمحادثة',
    link: 'https://zainkhairallah.com',
    cta: 'اسأل الآن ←'
  },
  {
    emoji: '📚',
    name: 'محمود داود',
    spec: 'علوم القرآن ونقاش الشبهات الفكرية',
    bio: 'خبير في علوم القرآن وتفنيد الشبهات التاريخية والفكرية المثارة حول الإسلام بأسلوب علمي ومنهجي دقيق.',
    langs: ['العربية', 'الإنجليزية', 'الفرنسية'],
    status: 'متاح للرد اليوم',
    link: '#ask',
    cta: 'اسأل الآن ←'
  },
  {
    emoji: '🧠',
    name: 'معاذ عليان',
    spec: 'الفلسفة ونقد الإلحاد والكتاب المقدس',
    bio: 'متخصص في البراهين العقلية والفلسفية على وجود الخالق، ونقد المنظومات المادية ومقارنة نصوص الأديان.',
    langs: ['العربية', 'الإنجليزية'],
    status: 'متاح للاستفسارات',
    link: '#ask',
    cta: 'اسأل الآن ←'
  },
  {
    emoji: '🌍',
    name: 'اسأل أي باحث ومختص',
    spec: 'جميع التخصصات الشرعية والفكرية',
    bio: 'أرسل سؤالك بسرية تامة، وسيتم توجيهه تلقائياً إلى الباحث الأكثر تخصصاً بخلفيتك وسؤالك المحدد.',
    langs: ['أكثر من 50 لغة'],
    status: 'متاح على مدار الساعة',
    link: '#ask',
    cta: 'أرسل سؤالك بسرية ←'
  }
];

/* ══════════════════════════════════════════
   7. STATE
══════════════════════════════════════════ */
let currentLang = 'en';
let currentColor = 'teal';
let currentBg = null;
let currentMythFilter = 'all';
let currentDebateFilter = 'all';
let currentDebatePage = 1;
const DEBATES_PAGE_SIZE = 6;

/* ══════════════════════════════════════════
   8. RENDER FUNCTIONS
══════════════════════════════════════════ */
function renderQuestions(bgKey) {
  const isAr = currentLang === 'ar';
  const dataStore = isAr ? PATHS_AR : PATHS_EN;
  const path = dataStore[bgKey] || PATHS_EN[bgKey];
  if (!path) return;

  const section = document.getElementById('questions-section');
  const badge = document.getElementById('pathBadge');
  const grid = document.getElementById('qAccordion');

  if (badge) badge.textContent = path.badge;
  if (!grid) return;
  grid.innerHTML = '';

  const refLabel = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang]['q.scholarRef']) || (isAr ? '— الحجة والبرهان مستفاد من بحث:' : '— Argument referenced by');

  path.questions.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'q-item reveal';
    el.style.transitionDelay = `${i * 0.05}s`;
    el.innerHTML = `
      <div class="q-question" onclick="toggleQ(this)">
        <div class="q-question-text">
          ${item.q}
          <span class="q-short">${item.short}</span>
        </div>
        <div class="q-chevron">▾</div>
      </div>
      <div class="q-answer">
        <div class="q-answer-inner">
          ${item.a}
          <p class="q-scholar">${refLabel} <span>${item.scholar}</span></p>
        </div>
      </div>`;
    grid.appendChild(el);
  });

  section.style.display = 'block';
  setTimeout(() => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    revealOnScroll();
  }, 100);
}

function toggleQ(header) {
  const item = header.parentElement;
  const answer = item.querySelector('.q-answer');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.q-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.q-answer').style.maxHeight = '0';
  });

  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

function renderMyths() {
  const grid = document.getElementById('mythsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const lang = currentLang || 'en';
  const commonMythLabel = (TRANSLATIONS[lang] && TRANSLATIONS[lang]['myths.label']) || (lang === 'ar' ? 'شبهة شائعة' : 'COMMON MYTH');
  const evidenceLabel = (TRANSLATIONS[lang] && TRANSLATIONS[lang]['myths.evidence']) || (lang === 'ar' ? 'الدليل والبرهان:' : 'Evidence:');

  MYTHS.forEach((m, i) => {
    const data = (m[lang] && m[lang].claim) ? m[lang] : (lang === 'ar' ? m.ar : (m.en || m));
    const el = document.createElement('div');
    el.className = 'myth-card reveal';
    el.dataset.cat = m.cat;
    el.style.transitionDelay = `${(i % 3) * 0.06}s`;
    el.innerHTML = `
      <div class="myth-header" onclick="toggleMyth(this)">
        <div class="myth-x">✗</div>
        <div>
          <div class="myth-label">${commonMythLabel}</div>
          <div class="myth-claim">${data.claim}</div>
        </div>
      </div>
      <div class="myth-body">
        <div class="myth-answer">
          ${data.answer}
          <div class="myth-check">
            <span>📋</span>
            <span><strong>${evidenceLabel}</strong> ${data.evidence}</span>
          </div>
        </div>
      </div>`;
    grid.appendChild(el);
  });
}

function toggleMyth(header) {
  const card = header.parentElement;
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.myth-card.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) {
    card.classList.add('open');
    const body = card.querySelector('.myth-body');
    if (body) body.scrollTop = 0;
  }
}

function filterMyths(cat) {
  currentMythFilter = cat;
  document.querySelectorAll('.myth-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.dataset.hidden = show ? 'false' : 'true';
  });
}

function renderDebates() {
  const grid = document.getElementById('debatesGrid');
  const pagination = document.getElementById('debatesPagination');
  if (!grid) return;

  const isAr = currentLang === 'ar';
  const vsWord = isAr ? 'ضد' : 'vs.';
  const prevLabel = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang]['debates.prev']) || (isAr ? 'السابق ←' : '← Prev');
  const nextLabel = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang]['debates.next']) || (isAr ? '→ التالي' : 'Next →');

  // 1. Filter debates based on currentDebateFilter
  const filtered = DEBATES.filter(d => {
    if (currentDebateFilter === 'all') return true;
    return d.cat === currentDebateFilter || d.scholar_id === currentDebateFilter;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-2);">
        <p style="font-size: 1.15rem; font-weight: 600;">${isAr ? 'لا توجد فيديوهات في هذا القسم حالياً' : 'No videos found in this category'}</p>
      </div>`;
    if (pagination) pagination.innerHTML = '';
    return;
  }

  // 2. Pagination calculation (Strictly 2 rows x 3 columns = 6 cards)
  const totalPages = Math.ceil(filtered.length / DEBATES_PAGE_SIZE) || 1;
  if (currentDebatePage > totalPages) currentDebatePage = totalPages;
  if (currentDebatePage < 1) currentDebatePage = 1;

  const startIdx = (currentDebatePage - 1) * DEBATES_PAGE_SIZE;
  const pageDebates = filtered.slice(startIdx, startIdx + DEBATES_PAGE_SIZE);

  // 3. Render 2x3 Grid Cards
  grid.innerHTML = '';
  pageDebates.forEach((d, i) => {
    const title = (isAr && d.title_ar) ? d.title_ar : (d.title || '');
    const scholar = (isAr && d.scholar_ar) ? d.scholar_ar : (d.scholar || '');
    const opponent = (isAr && d.opponent_ar) ? d.opponent_ar : (d.opponent ? d.opponent.split('(')[0].trim() : '');
    const tags = (isAr && d.tags_ar) ? d.tags_ar : (d.tags || []);

    const el = document.createElement('div');
    el.className = 'debate-card visible fade-in';
    el.dataset.cat = d.cat;
    if (d.scholar_id) el.dataset.scholar = d.scholar_id;
    el.style.animationDelay = `${(i % 3) * 0.08}s`;
    el.innerHTML = `
      <div class="debate-thumb">
        <img src="https://i.ytimg.com/vi/${d.ytId}/hqdefault.jpg" alt="${title}" class="debate-thumb-img" loading="lazy" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${d.ytId}/mqdefault.jpg'" />
        <div class="debate-thumb-overlay"></div>
        <div class="debate-play">▶</div>
        <div class="debate-duration">${d.duration || ''}</div>
      </div>
      <div class="debate-info">
        <div class="debate-tags-header">
          <div class="debate-topic-tags">
            ${tags.slice(0, 3).map(t => `<span class="debate-tag">${t}</span>`).join('')}
          </div>
          <span class="debate-scholar-badge" title="${scholar}">🎙️ ${scholar}</span>
        </div>
        <div class="debate-title">${title}</div>
        <div class="debate-meta">
          <span>${scholar} ${vsWord} ${opponent}</span>
        </div>
      </div>`;
    el.onclick = () => openVideoModal(d);
    grid.appendChild(el);
  });

  // 4. Render Pagination (Arrows + Page Numbers)
  if (pagination) {
    if (totalPages <= 1) {
      pagination.innerHTML = '';
    } else {
      let pagesHtml = '';
      if (totalPages <= 7) {
        for (let p = 1; p <= totalPages; p++) {
          pagesHtml += `<button class="debates-page-pill ${p === currentDebatePage ? 'active' : ''}" onclick="changeDebatePage(${p})">${p}</button>`;
        }
      } else {
        const pageNumbers = [1];
        let start = Math.max(2, currentDebatePage - 1);
        let end = Math.min(totalPages - 1, currentDebatePage + 1);

        if (currentDebatePage <= 3) {
          start = 2;
          end = 4;
        } else if (currentDebatePage >= totalPages - 2) {
          start = totalPages - 3;
          end = totalPages - 1;
        }

        if (start > 2) pageNumbers.push('...');
        for (let p = start; p <= end; p++) {
          pageNumbers.push(p);
        }
        if (end < totalPages - 1) pageNumbers.push('...');
        pageNumbers.push(totalPages);

        pageNumbers.forEach(item => {
          if (item === '...') {
            pagesHtml += `<span class="debates-page-dots">...</span>`;
          } else {
            pagesHtml += `<button class="debates-page-pill ${item === currentDebatePage ? 'active' : ''}" onclick="changeDebatePage(${item})">${item}</button>`;
          }
        });
      }

      pagination.innerHTML = `
        <button class="debates-nav-btn prev-btn" ${currentDebatePage === 1 ? 'disabled' : ''} onclick="changeDebatePage(${currentDebatePage - 1})">
          ${prevLabel}
        </button>
        <div class="debates-pages">
          ${pagesHtml}
        </div>
        <button class="debates-nav-btn next-btn" ${currentDebatePage === totalPages ? 'disabled' : ''} onclick="changeDebatePage(${currentDebatePage + 1})">
          ${nextLabel}
        </button>
      `;
    }
  }

  // 5. Synchronize button active states
  document.querySelectorAll('#debatesFilter .filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === currentDebateFilter);
  });
}

function changeDebatePage(newPage) {
  currentDebatePage = newPage;
  renderDebates();
  const debatesSec = document.getElementById('debates');
  if (debatesSec) {
    debatesSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function filterDebates(cat) {
  currentDebateFilter = cat;
  currentDebatePage = 1;
  renderDebates();
}

function openVideoModal(d) {
  const overlay = document.getElementById('videoModalOverlay');
  const wrap = document.getElementById('videoModalPlayerWrap');
  const title = document.getElementById('videoModalTitle');
  const speakers = document.getElementById('videoModalSpeakers');
  const dur = document.getElementById('videoModalDuration');
  const badge = document.getElementById('videoModalBadge');

  const isAr = currentLang === 'ar';
  const displayTitle = (isAr && d.title_ar) ? d.title_ar : d.title;
  const displayScholar = (isAr && d.scholar_ar) ? d.scholar_ar : d.scholar;
  const displayOpponent = (isAr && d.opponent_ar) ? d.opponent_ar : (d.opponent || '');

  if (title) title.textContent = displayTitle;
  if (speakers) speakers.textContent = `${displayScholar} ${isAr ? 'ضد' : 'vs.'} ${displayOpponent}`;
  if (dur) dur.textContent = d.duration || '';
  if (badge) badge.textContent = isAr ? '🎯 حلبة المناظرات' : '🎯 DEBATE ARENA';

  if (wrap) {
    wrap.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${d.ytId}?autoplay=1&rel=0&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }

  if (overlay) overlay.classList.add('open');
}

function closeVideoModal() {
  const overlay = document.getElementById('videoModalOverlay');
  const wrap = document.getElementById('videoModalPlayerWrap');
  if (overlay) overlay.classList.remove('open');
  if (wrap) wrap.innerHTML = '';
}

function renderSteps() {
  const timeline = document.getElementById('stepsTimeline');
  if (!timeline) return;
  timeline.innerHTML = '';

  const isAr = currentLang === 'ar';
  const stepsData = isAr ? CONVINCED_STEPS_AR : CONVINCED_STEPS_EN;
  const linkLabel = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang]['step.start']) || (isAr ? 'ابدأ الآن ←' : 'Get started →');

  stepsData.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'step-card reveal';
    el.style.transitionDelay = `${i * 0.06}s`;
    el.innerHTML = `
      <div class="step-num" data-n="${s.n}">${String(s.n).padStart(2, '0')}</div>
      <div class="step-icon">${s.icon}</div>
      <div class="step-title">${s.title}</div>
      <div class="step-desc">${s.desc}</div>
      <div class="step-detail">${s.detail}</div>
      ${s.link ? `<a href="${s.link}" class="step-link">${linkLabel}</a>` : ''}`;
    timeline.appendChild(el);
  });
}

function renderScholars() {
  const grid = document.getElementById('scholarsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const isAr = currentLang === 'ar';
  const scholarsData = isAr ? SCHOLARS_AR : SCHOLARS_EN;

  scholarsData.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'scholar-card reveal';
    el.style.transitionDelay = `${i * 0.07}s`;
    el.innerHTML = `
      <div class="scholar-avatar">${s.emoji}</div>
      <div class="scholar-name">${s.name}</div>
      <div class="scholar-spec">${s.spec}</div>
      <div class="scholar-bio">${s.bio}</div>
      <div class="scholar-langs">${s.langs.map(l => `<span class="scholar-lang">${l}</span>`).join('')}</div>
      <div class="scholar-status">${s.status}</div>
      <a href="${s.link}" class="scholar-cta" ${s.link.startsWith('http') ? 'target="_blank"' : ''}>${s.cta}</a>`;
    grid.appendChild(el);
  });
}

/* ══════════════════════════════════════════
   9. LANGUAGE SYSTEM
══════════════════════════════════════════ */
const LANG_FLAGS = { en: '🇺🇸', ar: '🇸🇦', fr: '🇫🇷', es: '🇪🇸', tr: '🇹🇷', de: '🇩🇪', id: '🇮🇩', ur: '🇵🇰' };
const RTL_LANGS = ['ar', 'ur'];

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;

  // HTML dir and lang
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

  // Update all [data-i18n] text elements
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update navbar language trigger
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flagEl) flagEl.textContent = LANG_FLAGS[lang];
  if (codeEl) codeEl.textContent = lang.toUpperCase();

  // Update active state in dropdown
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render all dynamic sections with newly active language
  if (currentBg) {
    renderQuestions(currentBg);
  }
  renderMyths();
  renderDebates();
  renderSteps();
  renderScholars();

  // Close dropdown if open
  document.getElementById('langDrop')?.classList.remove('open');

  // Persist preference
  localStorage.setItem('salamhub-lang', lang);
}

/* ══════════════════════════════════════════
   10. COLOR PALETTE
══════════════════════════════════════════ */
function setColor(color) {
  currentColor = color;
  document.documentElement.dataset.color = color;
  document.querySelectorAll('.pal-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color === color);
  });
  localStorage.setItem('salamhub-color', color);
}

/* ══════════════════════════════════════════
   11. SCROLL ANIMATIONS
══════════════════════════════════════════ */
function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════
   12. EVENT LISTENERS
══════════════════════════════════════════ */
function initEvents() {
  // Background selection cards in Hero
  document.querySelectorAll('.bg-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.bg-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      currentBg = card.dataset.bg;
      renderQuestions(currentBg);
    });
  });

  // Footer path links
  document.querySelectorAll('.path-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const bg = link.dataset.bg;
      if (bg) {
        document.querySelectorAll('.bg-card').forEach(c => c.classList.remove('selected'));
        const card = document.querySelector(`.bg-card[data-bg="${bg}"]`);
        if (card) card.classList.add('selected');
        currentBg = bg;
        renderQuestions(bg);
      }
    });
  });

  // Change background button in Questions section
  const changeBgBtn = document.getElementById('changeBgBtn');
  if (changeBgBtn) {
    changeBgBtn.addEventListener('click', () => {
      const qSection = document.getElementById('questions-section');
      if (qSection) qSection.style.display = 'none';
      document.querySelectorAll('.bg-card').forEach(c => c.classList.remove('selected'));
      currentBg = null;
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Myths category filter buttons
  const mythsFilter = document.getElementById('mythsFilter');
  if (mythsFilter) {
    mythsFilter.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#mythsFilter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterMyths(btn.dataset.filter);
    });
  }

  // Debates category filter buttons
  const debatesFilter = document.getElementById('debatesFilter');
  if (debatesFilter) {
    debatesFilter.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#debatesFilter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterDebates(btn.dataset.filter);
    });
  }



  // Language selector dropdown
  const langTrigger = document.getElementById('langTrigger');
  const langDrop = document.getElementById('langDrop');
  if (langTrigger && langDrop) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langDrop.classList.toggle('open');
    });

    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', () => setLang(opt.dataset.lang));
    });

    document.addEventListener('click', () => {
      langDrop.classList.remove('open');
    });
  }

  // Color palette buttons
  document.querySelectorAll('.pal-btn').forEach(btn => {
    btn.addEventListener('click', () => setColor(btn.dataset.color));
  });

  // Navbar dynamic scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 40);
    revealOnScroll();
  }, { passive: true });

  // Mobile menu toggle
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      this.classList.toggle('open');
      navLinks.classList.toggle('mobile-open');
    });
  }

  // Cinema Video Modal Close Handlers
  const videoModalClose = document.getElementById('videoModalClose');
  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);

  const videoModalOverlay = document.getElementById('videoModalOverlay');
  if (videoModalOverlay) {
    videoModalOverlay.addEventListener('click', (e) => {
      if (e.target === videoModalOverlay) closeVideoModal();
    });
  }

  // Content Modal Close Handlers
  const modalClose = document.getElementById('modalClose');
  if (modalClose) modalClose.addEventListener('click', closeModal);

  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Global ESC key listener to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeVideoModal();
    }
  });

  // Anonymous Ask Form submission
  const askForm = document.getElementById('askForm');
  if (askForm) {
    askForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('askQuestion')?.value.trim();
      if (!q) return;
      askForm.style.display = 'none';
      document.getElementById('askSuccess')?.classList.add('show');
    });
  }

  // "Ask another question" button
  const askAgainBtn = document.getElementById('askAgainBtn');
  if (askAgainBtn) {
    askAgainBtn.addEventListener('click', () => {
      askForm.reset();
      askForm.style.display = 'flex';
      document.getElementById('askSuccess')?.classList.remove('show');
    });
  }

}

function closeModal() {
  const modal = document.getElementById('modalOverlay');
  if (modal) modal.classList.remove('open');
}

/* ══════════════════════════════════════════
   13. INITIALIZATION
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('salamhub-lang') || 'en';
  const savedColor = localStorage.getItem('salamhub-color') || 'teal';

  setColor(savedColor);
  setLang(savedLang);

  // Render initial content
  renderMyths();
  renderDebates();
  renderSteps();
  renderScholars();

  // Attach all events
  initEvents();

  // Trigger initial scroll reveal
  setTimeout(revealOnScroll, 120);
});
