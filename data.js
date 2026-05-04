// Pisahkan database agar app.js tidak penuh
const appDatabase = {
  dictionary: [
    { en: "Cashier", id: "Kasir" },
    { en: "Customer", id: "Pelanggan" },
    { en: "Buyer", id: "Pembeli" },
    { en: "Seller", id: "Penjual" },
    { en: "Sales", id: "Penjualan / sales" },
    { en: "Salesperson", id: "Tenaga penjualan" },
    { en: "Sales staff", id: "Staf penjualan" },
    { en: "Store", id: "Toko" },
    { en: "Computer store", id: "Toko komputer" },
    { en: "Shop", id: "Toko" },
    { en: "Counter", id: "Meja kasir / konter" },
    { en: "Checkout counter", id: "Meja pembayaran" },
    { en: "Cash register", id: "Mesin kasir" },
    { en: "Barcode scanner", id: "Pemindai barcode" },
    { en: "Receipt printer", id: "Printer struk" },
    { en: "Payment machine", id: "Mesin pembayaran" },
    { en: "Card machine", id: "Mesin kartu" },
    { en: "Queue", id: "Antrean" },
    { en: "Line", id: "Antrean" },
    { en: "Waiting line", id: "Antrean tunggu" },

    { en: "Product", id: "Produk" },
    { en: "Item", id: "Barang" },
    { en: "Goods", id: "Barang-barang" },
    { en: "Stock", id: "Stok" },
    { en: "Ready stock", id: "Stok tersedia" },
    { en: "Use", id: "Menggunakan" },
    { en: "Need", id: "Membutuhkan" },
    { en: "Want", id: "Menginginkan" },
    { en: "Like", id: "Menyukai" },
    { en: "Love", id: "Mencintai / sangat suka" },
    { en: "Hate", id: "Membenci" },
    { en: "Remember", id: "Mengingat" },
    { en: "Forget", id: "Lupa" },
    { en: "Try", id: "Mencoba" },
    { en: "Help", id: "Membantu" },

    { en: "Sun", id: "Matahari" },
    { en: "Moon", id: "Bulan" },
    { en: "Star", id: "Bintang" },
    { en: "Sky", id: "Langit" },
    { en: "Cloud", id: "Awan" },
    { en: "Rain", id: "Hujan" },
    { en: "Wind", id: "Angin" },
    { en: "Storm", id: "Badai" },
    { en: "Mountain", id: "Gunung" },
    { en: "River", id: "Sungai" },
    { en: "Lake", id: "Danau" },
    { en: "Sea", id: "Laut" },
    { en: "Ocean", id: "Lautan" },
    { en: "Forest", id: "Hutan" },
    { en: "Tree", id: "Pohon" },
    { en: "Flower", id: "Bunga" },
    { en: "Leaf", id: "Daun" },
    { en: "Stone", id: "Batu" },
    { en: "Sand", id: "Pasir" },
    { en: "Island", id: "Pulau" },

    { en: "Cat", id: "Kucing" },
    { en: "Dog", id: "Anjing" },
    { en: "Bird", id: "Burung" },
    { en: "Cow", id: "Sapi" },
    { en: "Goat", id: "Kambing" },
    { en: "Horse", id: "Kuda" },
    { en: "Chicken", id: "Ayam" },
    { en: "Duck", id: "Bebek" },
    { en: "Rabbit", id: "Kelinci" },
    { en: "Mouse", id: "Tikus" },
    { en: "Tiger", id: "Harimau" },
    { en: "Lion", id: "Singa" },
    { en: "Elephant", id: "Gajah" },
    { en: "Monkey", id: "Monyet" },
    { en: "Snake", id: "Ular" },
    { en: "Butterfly", id: "Kupu-kupu" },
    { en: "Bee", id: "Lebah" },
    { en: "Ant", id: "Semut" },
    { en: "Fish", id: "Ikan" },
    { en: "Shark", id: "Hiu" },

    { en: "Computer", id: "Komputer" },
    { en: "Laptop", id: "Laptop" },
    { en: "Phone", id: "Telepon" },
    { en: "Smartphone", id: "Ponsel pintar" },
    { en: "Camera", id: "Kamera" },
    { en: "Keyboard", id: "Papan ketik" },
    { en: "Mouse", id: "Tetikus / mouse" },
    { en: "Screen", id: "Layar" },
    { en: "Speaker", id: "Pengeras suara" },
    { en: "Microphone", id: "Mikrofon" },
    { en: "Internet", id: "Internet" },
    { en: "Website", id: "Situs web" },
    { en: "Application", id: "Aplikasi" },
    { en: "Password", id: "Kata sandi" },
    { en: "Username", id: "Nama pengguna" },
    { en: "File", id: "Berkas" },
    { en: "Folder", id: "Folder" },
    { en: "Download", id: "Mengunduh" },
    { en: "Upload", id: "Mengunggah" },
    { en: "Save", id: "Menyimpan" },

    { en: "Today", id: "Hari ini" },
    { en: "Tomorrow", id: "Besok" },
    { en: "Yesterday", id: "Kemarin" },
    { en: "Now", id: "Sekarang" },
    { en: "Later", id: "Nanti" },
    { en: "Before", id: "Sebelum" },
    { en: "After", id: "Setelah" },
    { en: "Always", id: "Selalu" },
    { en: "Usually", id: "Biasanya" },
    { en: "Often", id: "Sering" },
    { en: "Sometimes", id: "Kadang-kadang" },
    { en: "Never", id: "Tidak pernah" },
    { en: "Again", id: "Lagi" },
    { en: "Together", id: "Bersama" },
    { en: "Alone", id: "Sendiri" },
    { en: "Here", id: "Di sini" },
    { en: "There", id: "Di sana" },
    { en: "Every day", id: "Setiap hari" },
    { en: "Every morning", id: "Setiap pagi" },
    { en: "Every night", id: "Setiap malam" },
    { en: "Eat", id: "Makan" },
    { en: "Drink", id: "Minum" },
    { en: "Sleep", id: "Tidur" },
    { en: "Wake up", id: "Bangun tidur" },
    { en: "Go", id: "Pergi" },
    { en: "Come", id: "Datang" },
    { en: "Walk", id: "Berjalan" },
    { en: "Run", id: "Berlari" },
    { en: "Sit", id: "Duduk" },
    { en: "Stand", id: "Berdiri" },
    { en: "Open", id: "Membuka" },
    { en: "Close", id: "Menutup" },
    { en: "Turn on", id: "Menyalakan" },
    { en: "Turn off", id: "Mematikan" },
    { en: "Bring", id: "Membawa" },
    { en: "Take", id: "Mengambil" },
    { en: "Give", id: "Memberi" },
    { en: "Get", id: "Mendapatkan" },
    { en: "Make", id: "Membuat" },
    { en: "Do", id: "Melakukan" },
    { en: "Use", id: "Menggunakan" },
    { en: "Find", id: "Menemukan" },
    { en: "Look", id: "Melihat" },
    { en: "Watch", id: "Menonton" },
    { en: "See", id: "Melihat" },
    { en: "Hear", id: "Mendengar" },
    { en: "Listen", id: "Mendengarkan" },
    { en: "Speak", id: "Berbicara" },
    { en: "Talk", id: "Berbicara" },
    { en: "Say", id: "Mengatakan" },
    { en: "Tell", id: "Memberitahu" },
    { en: "Ask", id: "Bertanya" },
    { en: "Answer", id: "Menjawab" },
    { en: "Help", id: "Membantu" },
    { en: "Try", id: "Mencoba" },
    { en: "Start", id: "Memulai" },
    { en: "Finish", id: "Menyelesaikan" },
    { en: "Wait", id: "Menunggu" },
    { en: "Stay", id: "Tinggal / tetap" },
    { en: "Leave", id: "Pergi / meninggalkan" },
    { en: "Arrive", id: "Tiba" },
    { en: "Thing", id: "Hal / benda" },
    { en: "People", id: "Orang-orang" },
    { en: "Someone", id: "Seseorang" },
    { en: "Something", id: "Sesuatu" },
    { en: "Place", id: "Tempat" },
    { en: "Time", id: "Waktu" },
    { en: "Day", id: "Hari" },
    { en: "Week", id: "Minggu" },
    { en: "Month", id: "Bulan" },
    { en: "Year", id: "Tahun" },
    { en: "Now", id: "Sekarang" },
    { en: "Later", id: "Nanti" },
    { en: "Soon", id: "Segera" },
    { en: "Before", id: "Sebelum" },
    { en: "After", id: "Setelah" },
    { en: "Always", id: "Selalu" },
    { en: "Usually", id: "Biasanya" },
    { en: "Often", id: "Sering" },
    { en: "Sometimes", id: "Kadang-kadang" },
    { en: "Never", id: "Tidak pernah" },
    { en: "Yes", id: "Ya" },
    { en: "No", id: "Tidak" },
    { en: "Okay", id: "Oke" },
    { en: "Sure", id: "Tentu" },
    { en: "Of course", id: "Tentu saja" },
    { en: "Maybe", id: "Mungkin" },
    { en: "Why", id: "Kenapa" },
    { en: "Because", id: "Karena" },
    { en: "What", id: "Apa" },
    { en: "Who", id: "Siapa" },
    { en: "Where", id: "Di mana" },
    { en: "When", id: "Kapan" },
    { en: "How", id: "Bagaimana" },
    { en: "Which", id: "Yang mana" },
    { en: "Thank you", id: "Terima kasih" },
    { en: "You're welcome", id: "Sama-sama" },
    { en: "Excuse me", id: "Permisi" },
    { en: "I'm sorry", id: "Maaf" },
    { en: "No problem", id: "Tidak masalah" },
    { en: "How are you", id: "Apa kabar" },
    { en: "I am fine", id: "Saya baik-baik saja" },
    { en: "Nice to meet you", id: "Senang bertemu denganmu" },
    { en: "See you later", id: "Sampai jumpa" },
    { en: "Wait a moment", id: "Tunggu sebentar" },
    { en: "What is this", id: "Apa ini" },
    { en: "I don't know", id: "Saya tidak tahu" },
    { en: "I understand", id: "Saya mengerti" },
    { en: "Please help me", id: "Tolong bantu saya" },
    { en: "Can you repeat", id: "Bisakah kamu ulangi" },
    { en: "Speak slowly", id: "Bicara pelan-pelan" },
    { en: "Word", id: "Kata" },
    { en: "Sentence", id: "Kalimat" },
    { en: "Meaning", id: "Arti" },
    { en: "Example", id: "Contoh" },
    { en: "Practice", id: "Latihan" },
    { en: "Mistake", id: "Kesalahan" },
    { en: "Correct", id: "Benar" },
    { en: "Wrong", id: "Salah" },
    { en: "Learn", id: "Belajar" },
    { en: "Study", id: "Belajar" },
    { en: "Improve", id: "Meningkatkan" },
    { en: "Skill", id: "Keterampilan" },
    { en: "Fluent", id: "Lancar" },
    { en: "Pronounce", id: "Mengucapkan" },
    { en: "I", id: "Saya / aku" },
    { en: "Me", id: "Saya / aku sebagai objek" },
    { en: "My", id: "Milik saya / punyaku" },
    { en: "Mine", id: "Milik saya" },
    { en: "Myself", id: "Diri saya sendiri" },

    { en: "You", id: "Kamu / Anda" },
    { en: "Your", id: "Milik kamu / punyamu" },
    { en: "Yours", id: "Milikmu" },
    { en: "Yourself", id: "Dirimu sendiri" },
    { en: "Yourselves", id: "Diri kalian sendiri" },

    { en: "He", id: "Dia laki-laki sebagai subjek" },
    { en: "Him", id: "Dia laki-laki sebagai objek" },
    { en: "His", id: "Milik dia laki-laki" },
    { en: "Himself", id: "Dirinya sendiri laki-laki" },

    { en: "She", id: "Dia perempuan sebagai subjek" },
    { en: "Her", id: "Dia perempuan sebagai objek / miliknya" },
    { en: "Hers", id: "Milik dia perempuan" },
    { en: "Herself", id: "Dirinya sendiri perempuan" },

    { en: "It", id: "Itu / dia untuk benda atau hewan" },
    { en: "Its", id: "Milik benda atau hewan itu" },
    { en: "Itself", id: "Dirinya sendiri untuk benda atau hewan" },

    { en: "We", id: "Kami / kita sebagai subjek" },
    { en: "Us", id: "Kami / kita sebagai objek" },
    { en: "Our", id: "Milik kami / milik kita" },
    { en: "Ours", id: "Milik kami / milik kita" },
    { en: "Ourselves", id: "Diri kami sendiri / diri kita sendiri" },

    { en: "They", id: "Mereka sebagai subjek" },
    { en: "Them", id: "Mereka sebagai objek" },
    { en: "Their", id: "Milik mereka" },
    { en: "Theirs", id: "Milik mereka" },
    { en: "Themselves", id: "Diri mereka sendiri" },

    { en: "This", id: "Ini" },
    { en: "That", id: "Itu" },
    { en: "These", id: "Ini semua / benda jamak dekat" },
    { en: "Those", id: "Itu semua / benda jamak jauh" },

    { en: "Someone", id: "Seseorang" },
    { en: "Somebody", id: "Seseorang" },
    { en: "Something", id: "Sesuatu" },
    { en: "Somewhere", id: "Di suatu tempat" },

    { en: "Anyone", id: "Siapa pun / seseorang" },
    { en: "Anybody", id: "Siapa pun / seseorang" },
    { en: "Anything", id: "Apa pun / sesuatu" },
    { en: "Anywhere", id: "Di mana pun" },

    { en: "Everyone", id: "Semua orang" },
    { en: "Everybody", id: "Semua orang" },
    { en: "Everything", id: "Semuanya" },
    { en: "Everywhere", id: "Di mana-mana" },

    { en: "No one", id: "Tidak seorang pun" },
    { en: "Nobody", id: "Tidak seorang pun" },
    { en: "Nothing", id: "Tidak ada apa-apa" },
    { en: "Nowhere", id: "Tidak di mana pun" },

    { en: "Who", id: "Siapa" },
    { en: "Whom", id: "Siapa sebagai objek" },
    { en: "Whose", id: "Milik siapa" },
    { en: "What", id: "Apa" },
    { en: "Which", id: "Yang mana" },
  ],

  stories: [
    {
      title: "The Magic Apple",
      text: "Once upon a time, there was a young boy named Leo. He found a shiny red apple in the forest. When he took a bite, he could suddenly understand animals! A little bird said, 'Hello Leo, welcome to the magic forest.'",
      dictionary: {
        "Once upon a time": "Pada suatu hari",
        "there was a young boy": "ada seorang anak laki-laki muda",
        "a young boy": "anak laki-laki muda",
        young: "muda",
        boy: "anak laki-laki",
        found: "menemukan",
        "a shiny red apple": "sebuah apel merah yang berkilau",
        shiny: "berkilau",
        apple: "apel",
        forest: "hutan",
        "took a bite": "mengambil satu gigitan",
        suddenly: "tiba-tiba",
        understand: "mengerti",
        animals: "hewan-hewan",
        "little bird": "burung kecil",
        little: "kecil",
        bird: "burung",
        welcome: "selamat datang",
        "magic forest": "hutan ajaib",
        magic: "ajaib",
      },
    },
    {
      title: "A Trip to the Beach",
      text: "Last summer, my family went to the beautiful beach. The sun was shining brightly, and the sand felt warm. We built a large sandcastle and swam in the clear blue water. It was a joyful day.",
      dictionary: {
        "Last summer": "Musim panas lalu",
        "my family": "keluarga saya",
        family: "keluarga",
        "went to": "pergi ke",
        "the beautiful beach": "pantai yang indah",
        beautiful: "indah",
        beach: "pantai",
        "The sun": "Matahari",
        sun: "matahari",
        "was shining": "sedang bersinar",
        shining: "bersinar",
        brightly: "dengan terang",
        sand: "pasir",
        "felt warm": "terasa hangat",
        warm: "hangat",
        "We built": "Kami membangun",
        built: "membangun",
        "a large sandcastle": "istana pasir besar",
        sandcastle: "istana pasir",
        swam: "berenang",
        "in the clear blue water": "di air biru jernih",
        clear: "jernih",
        blue: "biru",
        water: "air",
        "It was": "Itu adalah",
        "a joyful day": "hari yang menyenangkan",
        joyful: "menyenangkan",
        day: "hari",
      },
    },
    {
      title: "At School",
      text: "Tom goes to school every day. He studies English, math, and science. His teacher is kind and helpful. Tom likes learning new words.",
      dictionary: {
        Tom: "Tom",
        "goes to school": "pergi ke sekolah",
        "every day": "setiap hari",
        "He studies": "Dia belajar",
        studies: "belajar",
        English: "Bahasa Inggris",
        math: "matematika",
        science: "sains",
        "His teacher": "Gurunya",
        teacher: "guru",
        "is kind": "adalah baik/ramah",
        kind: "baik",
        helpful: "suka membantu",
        "Tom likes": "Tom suka",
        likes: "suka",
        learning: "belajar",
        "new words": "kata baru",
      },
    },
    {
      title: "In the Restaurant",
      text: "Anna goes to a restaurant. She orders fried rice and juice. The waiter brings her food. She says thank you and enjoys her meal.",
      dictionary: {
        Anna: "Anna",
        "goes to": "pergi ke",
        "a restaurant": "restoran",
        restaurant: "restoran",
        "She orders": "Dia memesan",
        orders: "memesan",
        "fried rice": "nasi goreng",
        juice: "jus",
        "The waiter": "Pelayannya",
        waiter: "pelayan",
        brings: "membawa",
        "her food": "makanannya",
        food: "makanan",
        "She says": "Dia berkata",
        says: "berkata",
        "thank you": "terima kasih",
        "and enjoys": "dan menikmati",
        enjoys: "menikmati",
        "her meal": "makanannya",
        meal: "makanan",
      },
    },
    {
      title: "At the Hospital",
      text: "Rina feels sick. She goes to the hospital. The doctor checks her and gives her medicine. She feels better after resting.",
      dictionary: {
        Rina: "Rina",
        "feels sick": "merasa sakit",
        sick: "sakit",
        "She goes": "Dia pergi",
        "to the hospital": "ke rumah sakit",
        hospital: "rumah sakit",
        "The doctor": "Dokternya",
        doctor: "dokter",
        checks: "memeriksa",
        "gives her": "memberikan padanya",
        gives: "memberikan",
        medicine: "obat",
        "She feels": "Dia merasa",
        "feels better": "merasa lebih baik",
        better: "lebih baik",
        "after resting": "setelah istirahat",
        resting: "beristirahat",
      },
    },
    {
      title: "The Brave Knight",
      text: "Many years ago, a brave knight saved the kingdom from a huge dragon. The dragon was fierce, but the knight used his strong shield to protect the village. Everyone cheered for the hero.",
      dictionary: {
        "Many years ago": "Banyak tahun yang lalu",
        "a brave knight": "seorang ksatria yang berani",
        brave: "berani",
        knight: "ksatria",
        saved: "menyelamatkan",
        "the kingdom": "kerajaan",
        kingdom: "kerajaan",
        "from a huge dragon": "dari naga yang sangat besar",
        "a huge": "yang sangat besar",
        huge: "sangat besar",
        dragon: "naga",
        "The dragon": "Naga itu",
        "was fierce": "sangat ganas",
        fierce: "ganas",
        "but the knight": "tetapi ksatria",
        "used his strong shield": "menggunakan perisai kuatnya",
        used: "menggunakan",
        "his strong": "kuatnya yang kuat",
        strong: "kuat",
        shield: "perisai",
        "to protect": "untuk melindungi",
        protect: "melindungi",
        "the village": "desa",
        village: "desa",
        "Everyone cheered": "Semua orang bersorak",
        cheered: "bersorak",
        "for the hero": "untuk pahlawan",
        hero: "pahlawan",
      },
    },
    {
      title: "Lost in the City",
      text: "Anna was walking in the big city when she realized she was lost. She asked a police officer for directions. 'Go straight and turn left,' he said. Finally, she found the train station and went home safely.",
      dictionary: {
        Anna: "Anna",
        "was walking": "sedang berjalan",
        walking: "berjalan",
        "in the big city": "di kota besar",
        "big city": "kota besar",
        city: "kota",
        "she realized she was lost": "dia menyadari bahwa dia tersesat",
        "when she realized": "ketika dia menyadari",
        realized: "menyadari",
        "was lost": "tersesat",
        lost: "tersesat",
        "She asked": "Dia bertanya",
        asked: "bertanya",
        "a police officer": "seorang polisi",
        "police officer": "polisi",
        "for directions": "untuk petunjuk arah",
        directions: "petunjuk arah",
        "Go straight": "jalan lurus",
        "and turn left": "dan belok kiri",
        "turn left": "belok kiri",
        "he said": "dia berkata",
        said: "berkata",
        "Finally, she found": "Akhirnya, dia menemukan",
        Finally: "akhirnya",
        found: "menemukan",
        "the train station": "stasiun kereta",
        "train station": "stasiun kereta",
        "and went home": "dan pulang ke rumah",
        "went home": "pulang ke rumah",
        safely: "dengan aman",
      },
    },
    {
      title: "A Busy Morning",
      text: "Every morning, Sarah wakes up early. She brushes her teeth, takes a shower, and prepares breakfast. After eating toast and drinking coffee, she goes to work. She works as a cashier at the new supermarket.",
      dictionary: {
        "Every morning": "Setiap pagi",
        Sarah: "Sarah",
        "wakes up": "bangun tidur",
        "wakes up early": "bangun tidur lebih awal",
        early: "lebih awal",
        "She brushes": "Dia menyikat",
        brushes: "menyikat",
        "her teeth": "giginya",
        teeth: "gigi",
        "takes a shower": "mandi",
        "and prepares": "dan menyiapkan",
        prepares: "menyiapkan",
        breakfast: "sarapan",
        "After eating": "Setelah makan",
        eating: "makan",
        toast: "roti panggang",
        "and drinking": "dan minum",
        drinking: "minum",
        coffee: "kopi",
        "she goes to work": "dia pergi bekerja",
        "she goes": "dia pergi",
        "goes to work": "pergi bekerja",
        "She works": "Dia bekerja",
        works: "bekerja",
        "as a cashier": "sebagai kasir",
        cashier: "kasir",
        "at the new supermarket": "di pasar swalayan baru",
        "new supermarket": "pasar swalayan baru",
        supermarket: "pasar swalayan",
      },
    },
    {
      title: "Shopping for Groceries",
      text: "John went to the grocery store to buy some fruits and vegetables. He put apples, carrots, and milk in his shopping cart. At the checkout counter, the cashier scanned the items. John paid with his credit card and received his receipt.",
      dictionary: {
        John: "John",
        "went to": "pergi ke",
        "the grocery store": "toko bahan makanan",
        "grocery store": "toko bahan makanan",
        "to buy": "untuk membeli",
        buy: "membeli",
        "some fruits and vegetables": "beberapa buah-buahan dan sayuran",
        fruits: "buah-buahan",
        vegetables: "sayuran",
        "He put": "Dia meletakkan",
        put: "meletakkan",
        apples: "apel",
        carrots: "wortel",
        milk: "susu",
        "in his shopping cart": "di kereta belanjaanya",
        "shopping cart": "kereta belanja",
        "At the checkout counter": "Di meja kasir",
        "checkout counter": "meja kasir",
        "the cashier": "kasirnya",
        cashier: "kasir",
        "scanned the items": "memindai barang-barang",
        scanned: "memindai",
        items: "barang-barang",
        "paid with": "membayar dengan",
        paid: "membayar",
        "his credit card": "kartu kreditnya",
        "credit card": "kartu kredit",
        "and received": "dan menerima",
        received: "menerima",
        "his receipt": "struknya",
        receipt: "struk",
      },
    },
    {
      title: "Journey to Mars",
      text: "A team of brave astronauts traveled in a huge spaceship. They saw glowing stars and floating comets. When they landed on Mars, they collected red rocks and sent a message back to Earth. It was an amazing discovery.",
      dictionary: {
        "A team": "Sebuah tim",
        "of brave astronauts": "dari astronot yang berani",
        "brave astronauts": "astronot yang berani",
        astronauts: "astronot",
        brave: "berani",
        "traveled in": "bepergian dalam",
        "a huge spaceship": "pesawat luar angkasa besar",
        "huge spaceship": "pesawat luar angkasa besar",
        spaceship: "pesawat luar angkasa",
        "They saw": "Mereka melihat",
        saw: "melihat",
        "glowing stars": "bintang-bintang bercahaya",
        glowing: "bercahaya",
        stars: "bintang-bintang",
        "and floating comets": "dan komet yang melayang",
        floating: "melayang",
        comets: "komet",
        "When they landed": "Ketika mereka mendarat",
        landed: "mendarat",
        "on Mars": "di Mars",
        Mars: "Mars",
        "they collected": "mereka mengumpulkan",
        collected: "mengumpulkan",
        "red rocks": "batu-batu merah",
        rocks: "batu-batu",
        "and sent": "dan mengirim",
        sent: "mengirim",
        "a message": "sebuah pesan",
        message: "pesan",
        "back to Earth": "kembali ke Bumi",
        Earth: "Bumi",
        "It was": "Itu adalah",
        "an amazing discovery": "penemuan yang luar biasa",
        amazing: "luar biasa",
        discovery: "penemuan",
      },
    },
    {
      title: "The Magic Forest Mystery",
      text: "Deep in the enchanted woods, a tiny glowing fairy led the travelers to a hidden waterfall. The water sparkled in the moonlight, and magical creatures sang beautiful songs. It felt like a dream come true.",
      dictionary: {
        "Deep in": "Jauh di dalam",
        "the enchanted woods": "hutan yang tersihir",
        "enchanted woods": "hutan yang tersihir",
        enchanted: "tersihir/magis",
        woods: "hutan",
        "a tiny glowing fairy": "peri kecil yang bercahaya",
        "tiny glowing": "kecil dan bercahaya",
        tiny: "sangat kecil",
        glowing: "bercahaya",
        fairy: "peri",
        "led the travelers": "memimpin para pelancong",
        led: "memimpin",
        travelers: "para pelancong",
        "to a hidden waterfall": "ke air terjun tersembunyi",
        "hidden waterfall": "air terjun tersembunyi",
        waterfall: "air terjun",
        "The water": "Air itu",
        "sparkled in": "berkilau dalam",
        sparkled: "berkilau",
        "the moonlight": "cahaya bulan",
        moonlight: "cahaya bulan",
        "and magical creatures": "dan makhluk-makhluk ajaib",
        "magical creatures": "makhluk-makhluk ajaib",
        magical: "ajaib",
        creatures: "makhluk-makhluk",
        "sang beautiful songs": "menyanyi lagu-lagu indah",
        sang: "menyanyi",
        "beautiful songs": "lagu-lagu indah",
        songs: "lagu-lagu",
        "It felt": "Terasa seperti",
        "like a dream": "seperti mimpi",
        dream: "mimpi",
        "come true": "menjadi kenyataan",
      },
    },
  ],

  translateStories: [
    {
      title: "Daily Activity Translation",
      sentences: [
        {
          en: "The total price is two million five hundred thousand rupiah.",
          id: "Total harganya dua juta lima ratus ribu rupiah.",
          keywords: [
            "total",
            "harganya",
            "dua juta",
            "lima ratus ribu",
            "rupiah",
          ],
          dictionary: {
            total: "total",
            price: "harganya",
            million: "juta",
            two: "dua",
            five: "lima",
            hundred: "ratus",
            thousand: "ribu",
            rupiah: "rupiah",
          },
        },
        {
          en: "The cashier greets the customer politely.",
          id: "Kasir menyapa pelanggan dengan sopan.",
          keywords: ["kasir", "menyapa", "pelanggan", "sopan"],
          dictionary: {
            cashier: "kasir",
            greets: "menyapa",
            customer: "pelanggan",
            politely: "dengan sopan",
          },
        },
        {
          en: "The total price is three million rupiah.",
          id: "Total harga adalah tiga juta rupiah.",
          keywords: ["total", "harga", "tiga juta"],
        },
        {
          en: "There is a discount of ten percent.",
          id: "Ada diskon sepuluh persen.",
          keywords: ["diskon", "sepuluh persen"],
        },
        {
          en: "You will get a free gift.",
          id: "Anda akan mendapatkan hadiah gratis.",
          keywords: ["hadiah", "gratis"],
        },
        {
          en: "Please check the product before buying.",
          id: "Silakan periksa barang sebelum membeli.",
          keywords: ["periksa", "barang", "membeli"],
        },
        {
          en: "We accept cash and credit card.",
          id: "Kami menerima uang tunai dan kartu kredit.",
          keywords: ["uang tunai", "kartu kredit"],
        },
        {
          en: "The item is still under warranty.",
          id: "Barang masih dalam masa garansi.",
          keywords: ["barang", "garansi"],
        },
        {
          en: "You can return the item within seven days.",
          id: "Anda bisa mengembalikan barang dalam tujuh hari.",
          keywords: ["mengembalikan", "tujuh hari"],
        },
        // New retail/warranty translate sentences
        {
          en: "Please provide the serial number on the box.",
          id: "Silakan berikan nomor seri pada kotaknya.",
          keywords: ["nomor seri", "kotak", "serial"],
          dictionary: {
            serial: "nomor seri",
            box: "kotak",
            provide: "berikan",
          },
        },
        {
          en: "We can issue store credit instead of a refund.",
          id: "Kami bisa memberikan kredit toko sebagai pengganti pengembalian dana.",
          keywords: ["kredit toko", "refund", "pengembalian dana"],
          dictionary: {
            store: "toko",
            credit: "kredit",
            refund: "pengembalian dana",
          },
        },
        {
          en: "Do you have the original packaging and accessories?",
          id: "Apakah Anda memiliki kemasan asli dan aksesorinya?",
          keywords: ["kemasan asli", "aksesoris"],
          dictionary: {
            original: "asli",
            packaging: "kemasan",
            accessories: "aksesoris",
          },
        },
        {
          en: "Our exchange policy allows replacement within seven days.",
          id: "Kebijakan penukaran kami memungkinkan penukaran dalam tujuh hari.",
          keywords: ["kebijakan penukaran", "tujuh hari"],
          dictionary: {
            exchange: "penukaran",
            policy: "kebijakan",
            allows: "memungkinkan",
          },
        },
        {
          en: "If the product is defective, claim warranty at customer service.",
          id: "Jika produk cacat, ajukan klaim garansi di layanan pelanggan.",
          keywords: ["produk cacat", "klaim garansi", "layanan pelanggan"],
          dictionary: {
            defective: "cacat",
            claim: "klaim",
            warranty: "garansi",
            customer: "pelanggan",
            service: "layanan",
          },
        },
        {
          en: "This laptop has a high performance processor.",
          id: "Laptop ini memiliki prosesor dengan performa tinggi.",
          keywords: ["laptop", "performa", "prosesor"],
        },
        {
          en: "Do you need help choosing a product?",
          id: "Apakah Anda butuh bantuan memilih produk?",
          keywords: ["bantuan", "memilih"],
        },
        {
          en: "The printer comes with free ink.",
          id: "Printer ini dilengkapi tinta gratis.",
          keywords: ["printer", "tinta", "gratis"],
        },
        {
          en: "The payment has been completed.",
          id: "Pembayaran telah selesai.",
          keywords: ["pembayaran", "selesai"],
        },
        {
          en: "The product is currently out of stock.",
          id: "Produk sedang habis stok.",
          keywords: ["produk", "stok"],
        },
        {
          en: "We will notify you when it is available.",
          id: "Kami akan memberi tahu saat tersedia.",
          keywords: ["memberi tahu", "tersedia"],
        },
        {
          en: "The delivery will take three days.",
          id: "Pengiriman akan memakan waktu tiga hari.",
          keywords: ["pengiriman", "tiga hari"],
        },
        {
          en: "There is an additional fee for credit card.",
          id: "Ada biaya tambahan untuk kartu kredit.",
          keywords: ["biaya tambahan", "kartu kredit"],
        },
        {
          en: "The customer asks about the price of the laptop.",
          id: "Pelanggan bertanya tentang harga laptop.",
          keywords: ["pelanggan", "bertanya", "harga", "laptop"],
          dictionary: {
            customer: "pelanggan",
            asks: "bertanya",
            price: "harga",
            laptop: "laptop",
          },
        },
        {
          en: "The sales staff explains the product specifications clearly.",
          id: "Staf penjualan menjelaskan spesifikasi produk dengan jelas.",
          keywords: ["staf penjualan", "menjelaskan", "spesifikasi", "produk"],
          dictionary: {
            sales: "penjualan",
            staff: "staf",
            explains: "menjelaskan",
            specifications: "spesifikasi",
            clearly: "dengan jelas",
          },
        },
        {
          en: "The cashier scans the barcode on the product box.",
          id: "Kasir memindai barcode pada kotak produk.",
          keywords: ["kasir", "memindai", "barcode", "kotak produk"],
          dictionary: {
            scans: "memindai",
            barcode: "barcode",
            product: "produk",
            box: "kotak",
          },
        },
        {
          en: "The cashier checks the total price on the screen.",
          id: "Kasir memeriksa total harga pada layar.",
          keywords: ["kasir", "memeriksa", "total harga", "layar"],
          dictionary: {
            checks: "memeriksa",
            total: "total",
            price: "harga",
            screen: "layar",
          },
        },
        {
          en: "The customer pays with cash in rupiah.",
          id: "Pelanggan membayar dengan uang tunai dalam rupiah.",
          keywords: ["pelanggan", "membayar", "tunai", "rupiah"],
          dictionary: {
            pays: "membayar",
            cash: "uang tunai",
            rupiah: "rupiah",
          },
        },
        {
          en: "The cashier gives the change to the customer.",
          id: "Kasir memberikan kembalian kepada pelanggan.",
          keywords: ["kasir", "memberikan", "kembalian", "pelanggan"],
          dictionary: {
            gives: "memberikan",
            change: "kembalian",
            customer: "pelanggan",
          },
        },
        {
          en: "The cashier prints the receipt after the payment is complete.",
          id: "Kasir mencetak struk setelah pembayaran selesai.",
          keywords: ["kasir", "mencetak", "struk", "pembayaran"],
          dictionary: {
            prints: "mencetak",
            receipt: "struk",
            payment: "pembayaran",
            complete: "selesai",
          },
        },
        {
          en: "The customer keeps the receipt for warranty purposes.",
          id: "Pelanggan menyimpan struk untuk keperluan garansi.",
          keywords: ["pelanggan", "menyimpan", "struk", "garansi"],
          dictionary: {
            keeps: "menyimpan",
            receipt: "struk",
            warranty: "garansi",
            purposes: "keperluan",
          },
        },
        {
          en: "The customer wants to return the damaged printer.",
          id: "Pelanggan ingin mengembalikan printer yang rusak.",
          keywords: ["pelanggan", "mengembalikan", "printer", "rusak"],
          dictionary: {
            return: "mengembalikan",
            damaged: "rusak",
            printer: "printer",
            customer: "pelanggan",
          },
        },
        {
          en: "The cashier asks for the receipt before processing the return.",
          id: "Kasir meminta struk sebelum memproses pengembalian.",
          keywords: ["kasir", "struk", "pengembalian"],
          dictionary: {
            asks: "meminta",
            receipt: "struk",
            processing: "memproses",
            return: "pengembalian",
          },
        },
        {
          en: "The product can be exchanged if the damage is from the factory.",
          id: "Produk dapat ditukar jika kerusakan berasal dari pabrik.",
          keywords: ["produk", "ditukar", "kerusakan", "pabrik"],
          dictionary: {
            exchanged: "ditukar",
            damage: "kerusakan",
            factory: "pabrik",
            product: "produk",
          },
        },
        {
          en: "The warranty does not cover broken screens or water damage.",
          id: "Garansi tidak mencakup layar pecah atau kerusakan karena air.",
          keywords: ["garansi", "layar pecah", "kerusakan air"],
          dictionary: {
            warranty: "garansi",
            cover: "mencakup",
            broken: "pecah",
            screen: "layar",
            water: "air",
            damage: "kerusakan",
          },
        },
        {
          en: "The customer must bring the original receipt and product box.",
          id: "Pelanggan harus membawa struk asli dan kotak produk.",
          keywords: ["pelanggan", "membawa", "struk asli", "kotak produk"],
          dictionary: {
            must: "harus",
            bring: "membawa",
            original: "asli",
            receipt: "struk",
            box: "kotak",
          },
        },
        {
          en: "The store will check the product before approving the return.",
          id: "Toko akan memeriksa produk sebelum menyetujui pengembalian.",
          keywords: ["toko", "memeriksa", "produk", "pengembalian"],
          dictionary: {
            store: "toko",
            check: "memeriksa",
            approving: "menyetujui",
            return: "pengembalian",
          },
        },
        {
          en: "The customer receives a replacement item after the warranty claim is approved.",
          id: "Pelanggan menerima barang pengganti setelah klaim garansi disetujui.",
          keywords: ["pelanggan", "barang pengganti", "garansi", "disetujui"],
          dictionary: {
            receives: "menerima",
            replacement: "pengganti",
            item: "barang",
            warranty: "garansi",
            claim: "klaim",
            approved: "disetujui",
          },
        },
        {
          en: "The return cannot be processed without the receipt.",
          id: "Pengembalian tidak dapat diproses tanpa struk.",
          keywords: ["pengembalian", "tidak dapat", "diproses", "struk"],
          dictionary: {
            return: "pengembalian",
            cannot: "tidak dapat",
            processed: "diproses",
            without: "tanpa",
            receipt: "struk",
          },
        },
        {
          en: "The cashier asks whether the customer needs a bag.",
          id: "Kasir bertanya apakah pelanggan membutuhkan kantong.",
          keywords: ["kasir", "bertanya", "pelanggan", "kantong"],
          dictionary: {
            asks: "bertanya",
            whether: "apakah",
            needs: "membutuhkan",
            bag: "kantong / tas",
          },
        },
        {
          en: "The total payment is one million two hundred thousand rupiah.",
          id: "Total pembayarannya satu juta dua ratus ribu rupiah.",
          keywords: ["total pembayaran", "satu juta", "rupiah"],
          dictionary: {
            total: "total",
            payment: "pembayaran",
            million: "juta",
            thousand: "ribu",
            rupiah: "rupiah",
          },
        },
        {
          en: "The customer wants to pay with a debit card.",
          id: "Pelanggan ingin membayar dengan kartu debit.",
          keywords: ["pelanggan", "membayar", "kartu debit"],
          dictionary: {
            wants: "ingin",
            pay: "membayar",
            debit: "debit",
            card: "kartu",
          },
        },
        {
          en: "There is an additional fee for credit card payment.",
          id: "Ada biaya tambahan untuk pembayaran kartu kredit.",
          keywords: ["biaya tambahan", "pembayaran", "kartu kredit"],
          dictionary: {
            additional: "tambahan",
            fee: "biaya",
            credit: "kredit",
            payment: "pembayaran",
          },
        },
        {
          en: "Credit card transactions have a two point five percent fee.",
          id: "Transaksi kartu kredit memiliki biaya dua koma lima persen.",
          keywords: ["kartu kredit", "transaksi", "dua koma lima persen"],
          dictionary: {
            transactions: "transaksi",
            credit: "kredit",
            card: "kartu",
            percent: "persen",
          },
        },
        {
          en: "Debit card payment does not have an additional fee.",
          id: "Pembayaran kartu debit tidak memiliki biaya tambahan.",
          keywords: ["kartu debit", "tidak", "biaya tambahan"],
          dictionary: {
            debit: "debit",
            payment: "pembayaran",
            additional: "tambahan",
            fee: "biaya",
          },
        },
        {
          en: "The cashier confirms the payment method before processing the transaction.",
          id: "Kasir mengonfirmasi metode pembayaran sebelum memproses transaksi.",
          keywords: ["kasir", "metode pembayaran", "transaksi"],
          dictionary: {
            confirms: "mengonfirmasi",
            method: "metode",
            processing: "memproses",
            transaction: "transaksi",
          },
        },
        {
          en: "The customer enters the PIN on the payment machine.",
          id: "Pelanggan memasukkan PIN pada mesin pembayaran.",
          keywords: ["pelanggan", "pin", "mesin pembayaran"],
          dictionary: {
            enters: "memasukkan",
            PIN: "PIN",
            payment: "pembayaran",
            machine: "mesin",
          },
        },
        {
          en: "The cashier waits until the payment is approved.",
          id: "Kasir menunggu sampai pembayaran disetujui.",
          keywords: ["kasir", "menunggu", "pembayaran", "disetujui"],
          dictionary: {
            waits: "menunggu",
            until: "sampai",
            approved: "disetujui",
            payment: "pembayaran",
          },
        },
        {
          en: "The payment failed because the card was declined.",
          id: "Pembayaran gagal karena kartu ditolak.",
          keywords: ["pembayaran", "gagal", "kartu", "ditolak"],
          dictionary: {
            failed: "gagal",
            because: "karena",
            card: "kartu",
            declined: "ditolak",
          },
        },
        {
          en: "The cashier asks the customer to try another payment method.",
          id: "Kasir meminta pelanggan mencoba metode pembayaran lain.",
          keywords: ["kasir", "pelanggan", "metode pembayaran lain"],
          dictionary: {
            asks: "meminta",
            try: "mencoba",
            another: "lain",
            method: "metode",
          },
        },
        {
          en: "This laptop has eight gigabytes of RAM and a fast processor.",
          id: "Laptop ini memiliki RAM delapan gigabyte dan prosesor yang cepat.",
          keywords: ["laptop", "ram", "prosesor", "cepat"],
          dictionary: {
            laptop: "laptop",
            gigabytes: "gigabyte",
            RAM: "RAM",
            processor: "prosesor",
            fast: "cepat",
          },
        },
        {
          en: "This printer is suitable for home and office use.",
          id: "Printer ini cocok untuk penggunaan rumah dan kantor.",
          keywords: ["printer", "cocok", "rumah", "kantor"],
          dictionary: {
            printer: "printer",
            suitable: "cocok",
            home: "rumah",
            office: "kantor",
            use: "penggunaan",
          },
        },
        {
          en: "The wireless mouse is available in black and white.",
          id: "Mouse nirkabel tersedia dalam warna hitam dan putih.",
          keywords: ["mouse", "nirkabel", "hitam", "putih"],
          dictionary: {
            wireless: "nirkabel",
            mouse: "mouse",
            available: "tersedia",
            black: "hitam",
            white: "putih",
          },
        },

        {
          en: "The customer wants to buy a keyboard for his computer.",
          id: "Pelanggan ingin membeli keyboard untuk komputernya.",
          keywords: ["pelanggan", "membeli", "keyboard", "komputer"],
          dictionary: {
            wants: "ingin",
            buy: "membeli",
            keyboard: "keyboard",
            computer: "komputer",
          },
        },
        {
          en: "The store sells speakers, TWS earbuds, projectors, and printers.",
          id: "Toko menjual speaker, earbud TWS, proyektor, dan printer.",
          keywords: ["toko", "menjual", "speaker", "tws", "printer"],
          dictionary: {
            store: "toko",
            sells: "menjual",
            speakers: "speaker",
            earbuds: "earbud",
            projectors: "proyektor",
            printers: "printer",
          },
        },
        {
          en: "We do not sell mobile phones in this computer store.",
          id: "Kami tidak menjual ponsel di toko komputer ini.",
          keywords: ["tidak menjual", "ponsel", "toko komputer"],
          dictionary: {
            "do not sell": "tidak menjual",
            mobile: "seluler",
            phones: "ponsel",
            computer: "komputer",
          },
        },
        {
          en: "This accessory is compatible with many laptops.",
          id: "Aksesori ini kompatibel dengan banyak laptop.",
          keywords: ["aksesori", "kompatibel", "laptop"],
          dictionary: {
            accessory: "aksesori",
            compatible: "kompatibel",
            many: "banyak",
            laptops: "laptop",
          },
        },
        {
          en: "The sales staff recommends this printer for students.",
          id: "Staf penjualan merekomendasikan printer ini untuk siswa.",
          keywords: ["staf penjualan", "merekomendasikan", "printer", "siswa"],
          dictionary: {
            recommends: "merekomendasikan",
            printer: "printer",
            students: "siswa",
            sales: "penjualan",
          },
        },
        {
          en: "This product comes with a one year official warranty.",
          id: "Produk ini dilengkapi garansi resmi satu tahun.",
          keywords: ["produk", "garansi resmi", "satu tahun"],
          dictionary: {
            product: "produk",
            official: "resmi",
            warranty: "garansi",
            year: "tahun",
          },
        },
        {
          en: "The customer compares two laptops before making a decision.",
          id: "Pelanggan membandingkan dua laptop sebelum membuat keputusan.",
          keywords: ["pelanggan", "membandingkan", "laptop", "keputusan"],
          dictionary: {
            compares: "membandingkan",
            laptops: "laptop",
            before: "sebelum",
            decision: "keputusan",
          },
        },
        {
          en: "You can pay with cash, debit card, or credit card.",
          id: "Anda bisa membayar dengan uang tunai, kartu debit, atau kartu kredit.",
          keywords: ["membayar", "tunai", "kartu debit", "kartu kredit"],
          dictionary: {
            pay: "membayar",
            cash: "uang tunai",
            "debit card": "kartu debit",
            "credit card": "kartu kredit",
          },
        },
        {
          en: "The cashier puts the product into a paper bag.",
          id: "Kasir memasukkan produk ke dalam kantong kertas.",
          keywords: ["kasir", "produk", "kantong kertas"],
          dictionary: {
            puts: "memasukkan",
            product: "produk",
            paper: "kertas",
            bag: "kantong",
          },
        },
        {
          en: "The customer asks the cashier to wrap the product neatly.",
          id: "Pelanggan meminta kasir membungkus produk dengan rapi.",
          keywords: ["pelanggan", "kasir", "membungkus", "rapi"],
          dictionary: {
            asks: "meminta",
            wrap: "membungkus",
            neatly: "dengan rapi",
            product: "produk",
          },
        },
        {
          en: "The sales staff gives a free keyboard cover as a bonus.",
          id: "Staf penjualan memberikan pelindung keyboard gratis sebagai bonus.",
          keywords: ["sales", "gratis", "keyboard", "bonus"],
          dictionary: {
            gives: "memberikan",
            free: "gratis",
            keyboard: "keyboard",
            cover: "pelindung",
            bonus: "bonus",
          },
        },
        {
          en: "The customer gets a discount after buying two accessories.",
          id: "Pelanggan mendapatkan diskon setelah membeli dua aksesori.",
          keywords: ["pelanggan", "diskon", "membeli", "aksesori"],
          dictionary: {
            gets: "mendapatkan",
            discount: "diskon",
            buying: "membeli",
            accessories: "aksesori",
          },
        },
        {
          en: "The cashier explains that the bonus item cannot be exchanged.",
          id: "Kasir menjelaskan bahwa barang bonus tidak dapat ditukar.",
          keywords: ["kasir", "barang bonus", "tidak dapat ditukar"],
          dictionary: {
            explains: "menjelaskan",
            bonus: "bonus",
            item: "barang",
            exchanged: "ditukar",
          },
        },
        {
          en: "The store gives a free cleaning cloth for every laptop purchase.",
          id: "Toko memberikan kain pembersih gratis untuk setiap pembelian laptop.",
          keywords: ["toko", "gratis", "pembelian laptop"],
          dictionary: {
            store: "toko",
            gives: "memberikan",
            cleaning: "pembersih",
            cloth: "kain",
            purchase: "pembelian",
          },
        },
        {
          en: "The customer waits while the cashier prepares the package.",
          id: "Pelanggan menunggu sementara kasir menyiapkan paket.",
          keywords: ["pelanggan", "menunggu", "kasir", "paket"],
          dictionary: {
            waits: "menunggu",
            while: "sementara",
            prepares: "menyiapkan",
            package: "paket",
          },
        },
        {
          en: "Please check the item before leaving the store.",
          id: "Silakan periksa barang sebelum meninggalkan toko.",
          keywords: ["periksa", "barang", "meninggalkan", "toko"],
          dictionary: {
            check: "memeriksa",
            item: "barang",
            leaving: "meninggalkan",
            store: "toko",
          },
        },
        {
          en: "There is no additional fee for debit card payment.",
          id: "Tidak ada biaya tambahan untuk pembayaran kartu debit.",
          keywords: ["tidak ada", "biaya tambahan", "pembayaran", "debit"],
          dictionary: {
            additional: "tambahan",
            fee: "biaya",
            payment: "pembayaran",
            debit: "debit",
          },
        },
        {
          en: "Credit card payment has an additional fee of two point five percent.",
          id: "Pembayaran kartu kredit memiliki biaya tambahan dua koma lima persen.",
          keywords: ["kartu kredit", "biaya tambahan", "dua koma lima persen"],
          dictionary: {
            "credit card": "kartu kredit",
            fee: "biaya",
            percent: "persen",
            additional: "tambahan",
          },
        },
        {
          en: "Your change is fifty thousand rupiah.",
          id: "Kembalian Anda lima puluh ribu rupiah.",
          keywords: ["kembalian", "lima puluh ribu", "rupiah"],
          dictionary: {
            change: "kembalian",
            fifty: "lima puluh",
            thousand: "ribu",
            rupiah: "rupiah",
          },
        },
        {
          en: "Please wait a moment while I print your receipt.",
          id: "Mohon tunggu sebentar sementara saya mencetak struk Anda.",
          keywords: ["tunggu sebentar", "mencetak", "struk"],
          dictionary: {
            wait: "menunggu",
            moment: "sebentar",
            print: "mencetak",
            receipt: "struk",
          },
        },
        {
          en: "Do you need the receipt for warranty claim?",
          id: "Apakah Anda membutuhkan struk untuk klaim garansi?",
          keywords: ["struk", "garansi", "klaim"],
          dictionary: {
            receipt: "struk",
            warranty: "garansi",
            claim: "klaim",
          },
        },
        {
          en: "Please keep the receipt because it is needed for product return.",
          id: "Mohon simpan struk karena diperlukan untuk pengembalian barang.",
          keywords: ["simpan", "struk", "pengembalian barang"],
          dictionary: {
            keep: "simpan",
            receipt: "struk",
            needed: "diperlukan",
            return: "pengembalian",
          },
        },
        {
          en: "This item can be returned within seven days if it is damaged.",
          id: "Barang ini dapat dikembalikan dalam tujuh hari jika rusak.",
          keywords: ["barang", "dikembalikan", "tujuh hari", "rusak"],
          dictionary: {
            item: "barang",
            returned: "dikembalikan",
            damaged: "rusak",
            days: "hari",
          },
        },
        {
          en: "The warranty does not cover physical damage caused by the customer.",
          id: "Garansi tidak mencakup kerusakan fisik yang disebabkan oleh pelanggan.",
          keywords: ["garansi", "kerusakan fisik", "pelanggan"],
          dictionary: {
            warranty: "garansi",
            cover: "mencakup",
            physical: "fisik",
            damage: "kerusakan",
            customer: "pelanggan",
          },
        },
        {
          en: "You will get a free mouse pad as a bonus.",
          id: "Anda akan mendapatkan mouse pad gratis sebagai bonus.",
          keywords: ["mendapatkan", "gratis", "bonus"],
          dictionary: {
            get: "mendapatkan",
            free: "gratis",
            "mouse pad": "alas mouse",
            bonus: "bonus",
          },
        },
        {
          en: "This laptop purchase includes a bag and a wireless mouse.",
          id: "Pembelian laptop ini termasuk tas dan mouse nirkabel.",
          keywords: ["pembelian", "laptop", "termasuk", "tas", "mouse"],
          dictionary: {
            purchase: "pembelian",
            includes: "termasuk",
            bag: "tas",
            wireless: "nirkabel",
            mouse: "mouse",
          },
        },
        {
          en: "Would you like to use a plastic bag or a box?",
          id: "Apakah Anda ingin menggunakan kantong plastik atau kotak?",
          keywords: ["menggunakan", "kantong plastik", "kotak"],
          dictionary: {
            use: "menggunakan",
            "plastic bag": "kantong plastik",
            box: "kotak",
          },
        },
        {
          en: "Please wrap this item because it is a gift.",
          id: "Tolong bungkus barang ini karena ini adalah hadiah.",
          keywords: ["bungkus", "barang", "hadiah"],
          dictionary: {
            wrap: "membungkus",
            item: "barang",
            gift: "hadiah",
          },
        },
        {
          en: "The customer is waiting for the cashier to scan the item.",
          id: "Pelanggan sedang menunggu kasir memindai barang.",
          keywords: ["pelanggan", "menunggu", "kasir", "memindai", "barang"],
          dictionary: {
            customer: "pelanggan",
            waiting: "menunggu",
            cashier: "kasir",
            scan: "memindai",
            item: "barang",
          },
        },
        {
          en: "The cashier checks the barcode before printing the receipt.",
          id: "Kasir memeriksa barcode sebelum mencetak struk.",
          keywords: ["kasir", "memeriksa", "barcode", "mencetak", "struk"],
          dictionary: {
            checks: "memeriksa",
            barcode: "barcode",
            before: "sebelum",
            printing: "mencetak",
            receipt: "struk",
          },
        },
        {
          en: "The sales staff explains the product features to the customer.",
          id: "Staf sales menjelaskan fitur produk kepada pelanggan.",
          keywords: ["sales", "menjelaskan", "fitur", "produk", "pelanggan"],
          dictionary: {
            sales: "sales / penjualan",
            staff: "staf",
            explains: "menjelaskan",
            features: "fitur",
            customer: "pelanggan",
          },
        },
        {
          en: "This product is ready stock and can be taken today.",
          id: "Produk ini ready stock dan dapat diambil hari ini.",
          keywords: ["produk", "ready stock", "diambil", "hari ini"],
          dictionary: {
            product: "produk",
            "ready stock": "stok tersedia",
            taken: "diambil",
            today: "hari ini",
          },
        },
        {
          en: "The item is out of stock, but we can order it for you.",
          id: "Barang sedang habis stok, tetapi kami bisa memesankannya untuk Anda.",
          keywords: ["barang", "habis stok", "memesan"],
          dictionary: {
            item: "barang",
            "out of stock": "habis stok",
            order: "memesan",
          },
        },
        {
          en: "Please come back tomorrow to pick up your printer.",
          id: "Silakan kembali besok untuk mengambil printer Anda.",
          keywords: ["kembali", "besok", "mengambil", "printer"],
          dictionary: {
            "come back": "kembali",
            tomorrow: "besok",
            "pick up": "mengambil",
            printer: "printer",
          },
        },
        {
          en: "Good afternoon, welcome to our computer store.",
          id: "Selamat siang, selamat datang di toko komputer kami.",
          keywords: ["selamat siang", "selamat datang", "toko komputer"],
          dictionary: {
            "Good afternoon": "Selamat siang",
            welcome: "selamat datang",
            computer: "komputer",
            store: "toko",
          },
        },
        {
          en: "Can I help you find a laptop or computer accessory?",
          id: "Bisakah saya membantu Anda mencari laptop atau aksesori komputer?",
          keywords: ["membantu", "mencari", "laptop", "aksesori komputer"],
          dictionary: {
            help: "membantu",
            find: "mencari",
            laptop: "laptop",
            accessory: "aksesori",
          },
        },
        {
          en: "We sell laptops, printers, speakers, projectors, and computer parts.",
          id: "Kami menjual laptop, printer, speaker, proyektor, dan komponen komputer.",
          keywords: ["menjual", "laptop", "printer", "speaker", "proyektor"],
          dictionary: {
            sell: "menjual",
            printers: "printer",
            speakers: "speaker",
            projectors: "proyektor",
            parts: "komponen",
          },
        },
        {
          en: "This laptop is suitable for school assignments and office work.",
          id: "Laptop ini cocok untuk tugas sekolah dan pekerjaan kantor.",
          keywords: ["laptop", "cocok", "tugas sekolah", "pekerjaan kantor"],
          dictionary: {
            suitable: "cocok",
            school: "sekolah",
            assignments: "tugas",
            office: "kantor",
            work: "pekerjaan",
          },
        },
        {
          en: "This printer can print documents quickly and clearly.",
          id: "Printer ini dapat mencetak dokumen dengan cepat dan jelas.",
          keywords: ["printer", "mencetak", "dokumen", "cepat", "jelas"],
          dictionary: {
            printer: "printer",
            print: "mencetak",
            documents: "dokumen",
            quickly: "dengan cepat",
            clearly: "dengan jelas",
          },
        },
        {
          en: "Do you need a wireless mouse or a keyboard?",
          id: "Apakah Anda membutuhkan mouse nirkabel atau keyboard?",
          keywords: ["membutuhkan", "mouse", "nirkabel", "keyboard"],
          dictionary: {
            need: "membutuhkan",
            wireless: "nirkabel",
            mouse: "mouse",
            keyboard: "keyboard",
          },
        },
        {
          en: "This speaker has clear sound and strong bass.",
          id: "Speaker ini memiliki suara jernih dan bass yang kuat.",
          keywords: ["speaker", "suara jernih", "bass", "kuat"],
          dictionary: {
            speaker: "speaker",
            clear: "jernih",
            sound: "suara",
            strong: "kuat",
            bass: "bass",
          },
        },
        {
          en: "These TWS earbuds are small, comfortable, and easy to connect.",
          id: "Earbud TWS ini kecil, nyaman, dan mudah disambungkan.",
          keywords: ["tws", "kecil", "nyaman", "mudah", "disambungkan"],
          dictionary: {
            earbuds: "earbud",
            small: "kecil",
            comfortable: "nyaman",
            connect: "menyambungkan",
          },
        },
        {
          en: "We do not sell mobile phones, but we sell mobile accessories.",
          id: "Kami tidak menjual ponsel, tetapi kami menjual aksesori seluler.",
          keywords: ["tidak menjual", "ponsel", "aksesori seluler"],
          dictionary: {
            "do not sell": "tidak menjual",
            "mobile phones": "ponsel",
            accessories: "aksesori",
          },
        },
        {
          en: "The projector is available in black and white colors.",
          id: "Proyektor tersedia dalam warna hitam dan putih.",
          keywords: ["proyektor", "tersedia", "hitam", "putih"],
          dictionary: {
            projector: "proyektor",
            available: "tersedia",
            black: "hitam",
            white: "putih",
          },
        },
        {
          en: "I wake up early every morning.",
          id: "Saya bangun pagi setiap hari.",
          keywords: ["saya", "bangun", "pagi", "setiap", "hari"],
          dictionary: {
            I: "Saya",
            "wake up": "bangun tidur",
            early: "pagi / lebih awal",
            "every morning": "setiap pagi",
          },
        },
        {
          en: "I am learning English every day.",
          id: "Saya belajar bahasa Inggris setiap hari.",
          keywords: ["saya", "belajar", "bahasa inggris", "setiap hari"],
          dictionary: {
            I: "Saya",
            learning: "sedang belajar / belajar",
            English: "bahasa Inggris",
            "every day": "setiap hari",
          },
        },
        {
          en: "Can you help me with this homework?",
          id: "Bisakah kamu membantu saya dengan pekerjaan rumah ini?",
          keywords: ["bisakah", "kamu", "membantu", "saya", "pekerjaan rumah"],
          dictionary: {
            Can: "Bisakah",
            you: "kamu",
            help: "membantu",
            me: "saya",
            homework: "pekerjaan rumah",
          },
        },
        {
          en: "I do not understand this sentence.",
          id: "Saya tidak mengerti kalimat ini.",
          keywords: ["saya", "tidak", "mengerti", "kalimat", "ini"],
          dictionary: {
            "do not": "tidak",
            understand: "mengerti",
            sentence: "kalimat",
            this: "ini",
          },
        },
        {
          en: "Please speak slowly because I am still learning.",
          id: "Tolong bicara pelan-pelan karena saya masih belajar.",
          keywords: ["tolong", "bicara", "pelan", "karena", "masih belajar"],
          dictionary: {
            Please: "Tolong",
            speak: "berbicara",
            slowly: "pelan-pelan",
            because: "karena",
            still: "masih",
          },
        },
        {
          en: "What does this word mean?",
          id: "Apa arti kata ini?",
          keywords: ["apa", "arti", "kata", "ini"],
          dictionary: {
            What: "Apa",
            does: "digunakan untuk pertanyaan",
            word: "kata",
            mean: "berarti / artinya",
          },
        },
        {
          en: "I want to improve my pronunciation.",
          id: "Saya ingin meningkatkan pengucapan saya.",
          keywords: ["saya", "ingin", "meningkatkan", "pengucapan"],
          dictionary: {
            want: "ingin",
            improve: "meningkatkan",
            my: "milik saya",
            pronunciation: "pengucapan",
          },
        },
        {
          en: "She usually studies English after dinner.",
          id: "Dia biasanya belajar bahasa Inggris setelah makan malam.",
          keywords: ["dia", "biasanya", "belajar", "setelah", "makan malam"],
          dictionary: {
            She: "Dia perempuan",
            usually: "biasanya",
            studies: "belajar",
            after: "setelah",
            dinner: "makan malam",
          },
        },
        {
          en: "They are talking about their school project.",
          id: "Mereka sedang membicarakan proyek sekolah mereka.",
          keywords: ["mereka", "sedang", "membicarakan", "proyek", "sekolah"],
          dictionary: {
            They: "Mereka",
            talking: "sedang berbicara / membicarakan",
            about: "tentang",
            their: "milik mereka",
            project: "proyek",
          },
        },
        {
          en: "We need more practice to speak confidently.",
          id: "Kami membutuhkan lebih banyak latihan untuk berbicara dengan percaya diri.",
          keywords: [
            "kami",
            "membutuhkan",
            "latihan",
            "berbicara",
            "percaya diri",
          ],
          dictionary: {
            We: "Kami / kita",
            need: "membutuhkan",
            practice: "latihan",
            speak: "berbicara",
            confidently: "dengan percaya diri",
          },
        },
        {
          en: "My teacher gives us a new vocabulary list.",
          id: "Guru saya memberi kami daftar kosakata baru.",
          keywords: ["guru", "memberi", "kami", "daftar", "kosakata"],
          dictionary: {
            teacher: "guru",
            gives: "memberi",
            us: "kami / kita sebagai objek",
            vocabulary: "kosakata",
            list: "daftar",
          },
        },
        {
          en: "My mother is cooking dinner in the kitchen.",
          id: "Ibu saya sedang memasak makan malam di dapur.",
          keywords: ["ibu", "memasak", "makan malam", "dapur"],
          dictionary: {
            mother: "ibu",
            cooking: "sedang memasak",
            dinner: "makan malam",
            kitchen: "dapur",
          },
        },
        {
          en: "My father goes to work early in the morning.",
          id: "Ayah saya pergi bekerja pagi-pagi.",
          keywords: ["ayah", "pergi", "bekerja", "pagi"],
          dictionary: {
            father: "ayah",
            goes: "pergi",
            work: "bekerja",
            early: "lebih awal / pagi-pagi",
            morning: "pagi",
          },
        },
        {
          en: "My sister is cleaning her bedroom.",
          id: "Saudara perempuan saya sedang membersihkan kamar tidurnya.",
          keywords: ["saudara perempuan", "membersihkan", "kamar tidur"],
          dictionary: {
            sister: "saudara perempuan",
            cleaning: "sedang membersihkan",
            her: "milik dia perempuan",
            bedroom: "kamar tidur",
          },
        },
        {
          en: "My brother likes playing games after school.",
          id: "Saudara laki-laki saya suka bermain game setelah sekolah.",
          keywords: ["saudara laki-laki", "suka", "bermain", "setelah sekolah"],
          dictionary: {
            brother: "saudara laki-laki",
            likes: "suka",
            playing: "bermain",
            games: "permainan",
            "after school": "setelah sekolah",
          },
        },
        {
          en: "We usually eat breakfast together at seven o'clock.",
          id: "Kami biasanya sarapan bersama pada pukul tujuh.",
          keywords: ["kami", "biasanya", "sarapan", "bersama", "tujuh"],
          dictionary: {
            usually: "biasanya",
            eat: "makan",
            breakfast: "sarapan",
            together: "bersama",
            "seven o'clock": "pukul tujuh",
          },
        },
        {
          en: "There are many books on the table.",
          id: "Ada banyak buku di atas meja.",
          keywords: ["ada", "banyak", "buku", "meja"],
          dictionary: {
            There: "Ada",
            many: "banyak",
            books: "buku-buku",
            table: "meja",
          },
        },
        {
          en: "I put my bag beside the chair.",
          id: "Saya meletakkan tas saya di samping kursi.",
          keywords: ["saya", "meletakkan", "tas", "samping", "kursi"],
          dictionary: {
            put: "meletakkan",
            bag: "tas",
            beside: "di samping",
            chair: "kursi",
          },
        },
        {
          en: "The cat is sleeping under the sofa.",
          id: "Kucing itu sedang tidur di bawah sofa.",
          keywords: ["kucing", "tidur", "bawah", "sofa"],
          dictionary: {
            cat: "kucing",
            sleeping: "sedang tidur",
            under: "di bawah",
            sofa: "sofa",
          },
        },
        {
          en: "The students are listening to the teacher carefully.",
          id: "Para siswa sedang mendengarkan guru dengan saksama.",
          keywords: ["siswa", "mendengarkan", "guru", "saksama"],
          dictionary: {
            students: "para siswa",
            listening: "sedang mendengarkan",
            teacher: "guru",
            carefully: "dengan saksama",
          },
        },
        {
          en: "I write new words in my notebook.",
          id: "Saya menulis kata-kata baru di buku catatan saya.",
          keywords: ["saya", "menulis", "kata baru", "buku catatan"],
          dictionary: {
            write: "menulis",
            "new words": "kata-kata baru",
            notebook: "buku catatan",
          },
        },
        {
          en: "We have an English test next week.",
          id: "Kami memiliki ujian bahasa Inggris minggu depan.",
          keywords: ["kami", "ujian", "bahasa inggris", "minggu depan"],
          dictionary: {
            have: "memiliki",
            test: "ujian",
            English: "bahasa Inggris",
            "next week": "minggu depan",
          },
        },
        {
          en: "The teacher asks us to read the story aloud.",
          id: "Guru meminta kami membaca cerita dengan suara keras.",
          keywords: ["guru", "meminta", "kami", "membaca", "cerita"],
          dictionary: {
            asks: "meminta / bertanya",
            us: "kami",
            read: "membaca",
            story: "cerita",
            aloud: "dengan suara keras",
          },
        },
        {
          en: "My friend helps me answer the difficult question.",
          id: "Teman saya membantu saya menjawab pertanyaan yang sulit.",
          keywords: ["teman", "membantu", "menjawab", "pertanyaan", "sulit"],
          dictionary: {
            friend: "teman",
            helps: "membantu",
            answer: "menjawab",
            difficult: "sulit",
            question: "pertanyaan",
          },
        },
        {
          en: "I always bring my pencil and notebook to class.",
          id: "Saya selalu membawa pensil dan buku catatan saya ke kelas.",
          keywords: ["saya", "selalu", "membawa", "pensil", "kelas"],
          dictionary: {
            always: "selalu",
            bring: "membawa",
            pencil: "pensil",
            notebook: "buku catatan",
            class: "kelas",
          },
        },
        {
          en: "She studies hard because she wants to get good grades.",
          id: "Dia belajar keras karena dia ingin mendapatkan nilai yang bagus.",
          keywords: ["dia", "belajar", "karena", "ingin", "nilai bagus"],
          dictionary: {
            studies: "belajar",
            hard: "keras / giat",
            because: "karena",
            wants: "ingin",
            grades: "nilai",
          },
        },
        {
          en: "I want to buy a new shirt.",
          id: "Saya ingin membeli kemeja baru.",
          keywords: ["saya", "ingin", "membeli", "kemeja", "baru"],
          dictionary: {
            want: "ingin",
            buy: "membeli",
            new: "baru",
            shirt: "kemeja",
          },
        },
        {
          en: "How much is this bag?",
          id: "Berapa harga tas ini?",
          keywords: ["berapa", "harga", "tas", "ini"],
          dictionary: {
            "How much": "Berapa harga",
            this: "ini",
            bag: "tas",
          },
        },
        {
          en: "The price is too expensive for me.",
          id: "Harganya terlalu mahal untuk saya.",
          keywords: ["harga", "terlalu", "mahal", "saya"],
          dictionary: {
            price: "harga",
            too: "terlalu",
            expensive: "mahal",
            me: "saya sebagai objek",
          },
        },
        {
          en: "Can I pay with cash?",
          id: "Bisakah saya membayar dengan uang tunai?",
          keywords: ["bisakah", "saya", "membayar", "uang tunai"],
          dictionary: {
            Can: "Bisakah",
            pay: "membayar",
            cash: "uang tunai",
          },
        },
        {
          en: "The cashier gives me the receipt after I pay.",
          id: "Kasir memberikan saya struk setelah saya membayar.",
          keywords: ["kasir", "memberikan", "struk", "setelah", "membayar"],
          dictionary: {
            cashier: "kasir",
            gives: "memberikan",
            receipt: "struk",
            after: "setelah",
            pay: "membayar",
          },
        },
        {
          en: "There are many customers waiting in line.",
          id: "Ada banyak pelanggan yang menunggu dalam antrean.",
          keywords: ["banyak", "pelanggan", "menunggu", "antrean"],
          dictionary: {
            customers: "pelanggan",
            waiting: "menunggu",
            line: "antrean",
          },
        },
        {
          en: "I usually study English at night because I have more free time after dinner.",
          id: "Saya biasanya belajar bahasa Inggris pada malam hari karena saya memiliki lebih banyak waktu luang setelah makan malam.",
          keywords: [
            "biasanya",
            "belajar",
            "malam",
            "waktu luang",
            "makan malam",
          ],
          dictionary: {
            usually: "biasanya",
            night: "malam",
            because: "karena",
            "free time": "waktu luang",
            after: "setelah",
          },
        },
        {
          en: "Although this lesson is difficult, I will keep practicing until I understand it.",
          id: "Meskipun pelajaran ini sulit, saya akan terus berlatih sampai saya memahaminya.",
          keywords: ["meskipun", "pelajaran", "sulit", "berlatih", "memahami"],
          dictionary: {
            although: "meskipun",
            lesson: "pelajaran",
            difficult: "sulit",
            keep: "terus",
            practicing: "berlatih",
            until: "sampai",
          },
        },
        {
          en: "When my teacher speaks English, I try to listen carefully and repeat the words.",
          id: "Ketika guru saya berbicara bahasa Inggris, saya mencoba mendengarkan dengan saksama dan mengulang kata-katanya.",
          keywords: [
            "ketika",
            "guru",
            "berbicara",
            "mendengarkan",
            "mengulang",
          ],
          dictionary: {
            when: "ketika",
            speaks: "berbicara",
            try: "mencoba",
            listen: "mendengarkan",
            repeat: "mengulang",
            words: "kata-kata",
          },
        },
        {
          en: "If I make a mistake, I will try again and learn from it.",
          id: "Jika saya membuat kesalahan, saya akan mencoba lagi dan belajar darinya.",
          keywords: ["jika", "membuat", "kesalahan", "mencoba lagi", "belajar"],
          dictionary: {
            if: "jika",
            make: "membuat",
            mistake: "kesalahan",
            "try again": "mencoba lagi",
            learn: "belajar",
          },
        },
        {
          en: "Speaking English every day can help me become more confident.",
          id: "Berbicara bahasa Inggris setiap hari dapat membantu saya menjadi lebih percaya diri.",
          keywords: ["berbicara", "setiap hari", "membantu", "percaya diri"],
          dictionary: {
            speaking: "berbicara",
            "every day": "setiap hari",
            help: "membantu",
            become: "menjadi",
            confident: "percaya diri",
          },
        },
        {
          en: "I usually wake up at six in the morning and prepare myself for school.",
          id: "Saya biasanya bangun jam enam pagi dan mempersiapkan diri untuk sekolah.",
          keywords: ["saya", "bangun", "jam enam", "mempersiapkan", "sekolah"],
          dictionary: {
            usually: "biasanya",
            wake: "bangun",
            prepare: "mempersiapkan",
            myself: "diri sendiri",
            school: "sekolah",
          },
        },
        {
          en: "I am still learning English.",
          id: "Saya masih belajar bahasa Inggris.",
          keywords: ["saya", "masih", "belajar", "bahasa inggris"],
          dictionary: {
            still: "masih",
            learning: "belajar",
            English: "bahasa Inggris",
          },
        },
        {
          en: "Please correct me if I make a mistake.",
          id: "Tolong koreksi saya jika saya membuat kesalahan.",
          keywords: ["tolong", "koreksi", "saya", "kesalahan"],
          dictionary: {
            please: "tolong",
            correct: "koreksi",
            mistake: "kesalahan",
          },
        },
        {
          en: "Can you repeat that more slowly?",
          id: "Bisakah kamu mengulanginya lebih pelan?",
          keywords: ["bisakah", "mengulangi", "pelan"],
          dictionary: {
            repeat: "mengulangi",
            slowly: "pelan-pelan",
          },
        },
        {
          en: "I do not understand the meaning of this word.",
          id: "Saya tidak mengerti arti kata ini.",
          keywords: ["saya", "tidak", "mengerti", "arti", "kata"],
          dictionary: {
            understand: "mengerti",
            meaning: "arti",
            word: "kata",
          },
        },
        {
          en: "This sentence is difficult, but I will keep trying.",
          id: "Kalimat ini sulit, tetapi saya akan terus mencoba.",
          keywords: ["kalimat", "sulit", "terus", "mencoba"],
          dictionary: {
            sentence: "kalimat",
            difficult: "sulit",
            keep: "terus",
            trying: "mencoba",
          },
        },
        {
          en: "I need more practice to speak confidently.",
          id: "Saya membutuhkan lebih banyak latihan untuk berbicara dengan percaya diri.",
          keywords: ["membutuhkan", "latihan", "berbicara", "percaya diri"],
          dictionary: {
            need: "membutuhkan",
            practice: "latihan",
            speak: "berbicara",
            confidently: "dengan percaya diri",
          },
        },
        {
          en: "Please explain the difference between these two words.",
          id: "Tolong jelaskan perbedaan antara dua kata ini.",
          keywords: ["tolong", "jelaskan", "perbedaan", "dua kata"],
          dictionary: {
            explain: "menjelaskan",
            difference: "perbedaan",
            between: "di antara",
            words: "kata-kata",
          },
        },
        {
          en: "I want to improve my pronunciation every day.",
          id: "Saya ingin meningkatkan pengucapan saya setiap hari.",
          keywords: ["ingin", "meningkatkan", "pengucapan", "setiap hari"],
          dictionary: {
            improve: "meningkatkan",
            pronunciation: "pengucapan",
            "every day": "setiap hari",
          },
        },
        {
          en: "Although this word is hard to pronounce, I will practice it.",
          id: "Meskipun kata ini sulit diucapkan, saya akan melatihnya.",
          keywords: ["meskipun", "kata", "sulit", "diucapkan", "melatih"],
          dictionary: {
            although: "meskipun",
            hard: "sulit",
            pronounce: "mengucapkan",
            practice: "melatih",
          },
        },
        {
          en: "I can understand simple sentences, but long sentences are still difficult.",
          id: "Saya bisa memahami kalimat sederhana, tetapi kalimat panjang masih sulit.",
          keywords: [
            "memahami",
            "kalimat sederhana",
            "kalimat panjang",
            "sulit",
          ],
          dictionary: {
            understand: "memahami",
            simple: "sederhana",
            long: "panjang",
            difficult: "sulit",
          },
        },
        {
          en: "After finishing my homework, I like to watch movies or listen to music.",
          id: "Setelah menyelesaikan pekerjaan rumah, saya suka menonton film atau mendengarkan musik.",
          keywords: [
            "setelah",
            "menyelesaikan",
            "pekerjaan rumah",
            "menonton",
            "musik",
          ],
          dictionary: {
            after: "setelah",
            finishing: "menyelesaikan",
            homework: "pekerjaan rumah",
            watch: "menonton",
            listen: "mendengarkan",
          },
        },
        {
          en: "She goes to school by bus.",
          id: "Dia pergi ke sekolah dengan bus.",
          keywords: ["dia", "pergi", "sekolah", "bus"],
          dictionary: {
            She: "Dia perempuan",
            goes: "pergi",
            school: "sekolah",
            "by bus": "dengan bus",
          },
        },
        {
          en: "The cashier gives me the receipt.",
          id: "Kasir memberikan saya struk.",
          keywords: ["kasir", "memberikan", "saya", "struk"],
          dictionary: {
            cashier: "kasir",
            gives: "memberikan",
            me: "saya",
            receipt: "struk",
          },
        },
        {
          en: "My father is working in his office while my mother is cooking in the kitchen.",
          id: "Ayah saya sedang bekerja di kantornya sementara ibu saya sedang memasak di dapur.",
          keywords: ["ayah", "bekerja", "kantor", "ibu", "memasak"],
          dictionary: {
            father: "ayah",
            working: "sedang bekerja",
            office: "kantor",
            while: "sementara",
            cooking: "memasak",
          },
        },
        {
          en: "We are planning to go on vacation next month if we have enough money.",
          id: "Kami berencana pergi liburan bulan depan jika kami memiliki cukup uang.",
          keywords: ["kami", "berencana", "liburan", "bulan depan", "uang"],
          dictionary: {
            planning: "berencana",
            vacation: "liburan",
            "next month": "bulan depan",
            enough: "cukup",
            money: "uang",
          },
        },
        {
          en: "If I had more free time, I would learn new skills such as programming and graphic design.",
          id: "Jika saya memiliki lebih banyak waktu luang, saya akan belajar keterampilan baru seperti pemrograman dan desain grafis.",
          keywords: ["waktu luang", "belajar", "keterampilan", "pemrograman"],
          dictionary: {
            "free time": "waktu luang",
            would: "akan",
            skills: "keterampilan",
            programming: "pemrograman",
            design: "desain",
          },
        },
        {
          en: "Although the weather was very hot, they continued playing football in the field.",
          id: "Meskipun cuaca sangat panas, mereka tetap bermain sepak bola di lapangan.",
          keywords: ["meskipun", "cuaca", "panas", "bermain", "lapangan"],
          dictionary: {
            although: "meskipun",
            weather: "cuaca",
            hot: "panas",
            continued: "tetap melanjutkan",
            field: "lapangan",
          },
        },
        {
          en: "She has been studying English for three years, so she can speak quite fluently now.",
          id: "Dia telah belajar bahasa Inggris selama tiga tahun, jadi sekarang dia bisa berbicara cukup lancar.",
          keywords: ["belajar", "tiga tahun", "berbicara", "lancar"],
          dictionary: {
            "has been studying": "telah belajar",
            years: "tahun",
            speak: "berbicara",
            fluently: "lancar",
          },
        },
        {
          en: "The teacher explained the lesson clearly so that all students could understand it easily.",
          id: "Guru menjelaskan pelajaran dengan jelas sehingga semua siswa dapat memahaminya dengan mudah.",
          keywords: ["guru", "menjelaskan", "pelajaran", "memahami"],
          dictionary: {
            teacher: "guru",
            explained: "menjelaskan",
            clearly: "dengan jelas",
            understand: "memahami",
          },
        },
        {
          en: "When I arrived at the station, the train had already left, so I had to wait for the next one.",
          id: "Ketika saya tiba di stasiun, keretanya sudah berangkat, jadi saya harus menunggu yang berikutnya.",
          keywords: ["tiba", "stasiun", "kereta", "menunggu"],
          dictionary: {
            arrived: "tiba",
            station: "stasiun",
            train: "kereta",
            wait: "menunggu",
          },
        },
        {
          en: "My mother cooks rice in the kitchen.",
          id: "Ibu saya memasak nasi di dapur.",
          keywords: ["ibu", "memasak", "nasi", "dapur"],
          dictionary: {
            mother: "ibu",
            cooks: "memasak",
            rice: "nasi",
            kitchen: "dapur",
          },
        },
        {
          en: "The cashier scans the product barcode.",
          id: "Kasir memindai barcode produk.",
          keywords: ["kasir", "memindai", "barcode", "produk"],
          dictionary: {
            cashier: "kasir",
            scans: "memindai",
            product: "produk",
            barcode: "barcode",
          },
        },
        {
          en: "The customer pays with cash.",
          id: "Pelanggan membayar dengan uang tunai.",
          keywords: ["pelanggan", "membayar", "tunai"],
          dictionary: {
            customer: "pelanggan",
            pays: "membayar",
            cash: "uang tunai",
          },
        },
        {
          en: "Please wait while I print the receipt.",
          id: "Mohon tunggu sementara saya mencetak struk.",
          keywords: ["tunggu", "mencetak", "struk"],
          dictionary: {
            please: "mohon / tolong",
            wait: "menunggu",
            print: "mencetak",
            receipt: "struk",
          },
        },
        {
          en: "Debit card payment has no additional fee.",
          id: "Pembayaran kartu debit tidak memiliki biaya tambahan.",
          keywords: ["debit", "pembayaran", "tidak", "biaya tambahan"],
          dictionary: {
            debit: "debit",
            payment: "pembayaran",
            additional: "tambahan",
            fee: "biaya",
          },
        },
        {
          en: "Credit card payment has a two point five percent fee.",
          id: "Pembayaran kartu kredit memiliki biaya dua koma lima persen.",
          keywords: [
            "kartu kredit",
            "pembayaran",
            "biaya",
            "dua koma lima persen",
          ],
          dictionary: {
            credit: "kredit",
            card: "kartu",
            payment: "pembayaran",
            percent: "persen",
            fee: "biaya",
          },
        },
        {
          en: "The cashier gives the change to the customer.",
          id: "Kasir memberikan kembalian kepada pelanggan.",
          keywords: ["kasir", "memberikan", "kembalian", "pelanggan"],
          dictionary: {
            cashier: "kasir",
            gives: "memberikan",
            change: "kembalian",
            customer: "pelanggan",
          },
        },
        {
          en: "The sales staff explains the product features.",
          id: "Staf penjualan menjelaskan fitur produk.",
          keywords: ["sales", "menjelaskan", "fitur", "produk"],
          dictionary: {
            sales: "penjualan / sales",
            staff: "staf",
            explains: "menjelaskan",
            features: "fitur",
            product: "produk",
          },
        },
        {
          en: "This laptop comes with an official warranty.",
          id: "Laptop ini dilengkapi garansi resmi.",
          keywords: ["laptop", "garansi", "resmi"],
          dictionary: {
            laptop: "laptop",
            comes: "dilengkapi / datang",
            official: "resmi",
            warranty: "garansi",
          },
        },
        {
          en: "The printer is out of stock today.",
          id: "Printer sedang habis stok hari ini.",
          keywords: ["printer", "habis stok", "hari ini"],
          dictionary: {
            printer: "printer",
            "out of stock": "habis stok",
            today: "hari ini",
          },
        },
        {
          en: "The customer wants to return the damaged item.",
          id: "Pelanggan ingin mengembalikan barang rusak.",
          keywords: ["pelanggan", "ingin", "mengembalikan", "barang rusak"],
          dictionary: {
            customer: "pelanggan",
            wants: "ingin",
            return: "mengembalikan",
            damaged: "rusak",
            item: "barang",
          },
        },
        {
          en: "Please keep the receipt for warranty claim.",
          id: "Mohon simpan struk untuk klaim garansi.",
          keywords: ["simpan", "struk", "klaim", "garansi"],
          dictionary: {
            keep: "menyimpan",
            receipt: "struk",
            warranty: "garansi",
            claim: "klaim",
          },
        },
        {
          en: "The item can be exchanged within seven days.",
          id: "Barang dapat ditukar dalam tujuh hari.",
          keywords: ["barang", "ditukar", "tujuh hari"],
          dictionary: {
            item: "barang",
            exchanged: "ditukar",
            within: "dalam",
            days: "hari",
          },
        },
        {
          en: "The warranty does not cover water damage.",
          id: "Garansi tidak mencakup kerusakan karena air.",
          keywords: ["garansi", "tidak", "kerusakan air"],
          dictionary: {
            warranty: "garansi",
            cover: "mencakup",
            water: "air",
            damage: "kerusakan",
          },
        },
        {
          en: "The store gives a free mouse pad.",
          id: "Toko memberikan alas mouse gratis.",
          keywords: ["toko", "memberikan", "gratis", "alas mouse"],
          dictionary: {
            store: "toko",
            gives: "memberikan",
            free: "gratis",
            "mouse pad": "alas mouse",
          },
        },
        {
          en: "Please wrap this item neatly.",
          id: "Tolong bungkus barang ini dengan rapi.",
          keywords: ["tolong", "bungkus", "barang", "rapi"],
          dictionary: {
            please: "tolong",
            wrap: "membungkus",
            item: "barang",
            neatly: "dengan rapi",
          },
        },
        {
          en: "The customer waits in line.",
          id: "Pelanggan menunggu dalam antrean.",
          keywords: ["pelanggan", "menunggu", "antrean"],
          dictionary: {
            customer: "pelanggan",
            waits: "menunggu",
            line: "antrean",
          },
        },
        {
          en: "The total price is five hundred thousand rupiah.",
          id: "Total harganya lima ratus ribu rupiah.",
          keywords: ["total", "harga", "lima ratus ribu", "rupiah"],
          dictionary: {
            total: "total",
            price: "harga",
            hundred: "ratus",
            thousand: "ribu",
            rupiah: "rupiah",
          },
        },
        {
          en: "Your change is twenty thousand rupiah.",
          id: "Kembalian Anda dua puluh ribu rupiah.",
          keywords: ["kembalian", "dua puluh ribu", "rupiah"],
          dictionary: {
            your: "milik Anda",
            change: "kembalian",
            twenty: "dua puluh",
            thousand: "ribu",
            rupiah: "rupiah",
          },
        },
        {
          en: "This speaker has clear sound.",
          id: "Speaker ini memiliki suara jernih.",
          keywords: ["speaker", "suara", "jernih"],
          dictionary: {
            speaker: "speaker",
            clear: "jernih",
            sound: "suara",
          },
        },
        {
          en: "These TWS earbuds have long battery life.",
          id: "Earbud TWS ini memiliki daya tahan baterai yang lama.",
          keywords: ["tws", "baterai", "lama"],
          dictionary: {
            TWS: "TWS",
            earbuds: "earbud",
            long: "lama",
            battery: "baterai",
            life: "daya tahan",
          },
        },
        {
          en: "The laptop will not turn on.",
          id: "Laptopnya tidak mau menyala.",
          keywords: ["laptop", "tidak", "menyala"],
          dictionary: {
            laptop: "laptop",
            "turn on": "menyala",
          },
        },
        {
          en: "The printer does not work.",
          id: "Printernya tidak berfungsi.",
          keywords: ["printer", "tidak", "berfungsi"],
          dictionary: {
            printer: "printer",
            work: "berfungsi",
          },
        },
        {
          en: "The speaker has no sound.",
          id: "Speakernya tidak ada suara.",
          keywords: ["speaker", "tidak ada", "suara"],
          dictionary: {
            speaker: "speaker",
            no: "tidak ada",
            sound: "suara",
          },
        },
        {
          en: "Please check the item before leaving the store.",
          id: "Silakan periksa barang sebelum meninggalkan toko.",
          keywords: ["periksa", "barang", "meninggalkan", "toko"],
          dictionary: {
            check: "memeriksa",
            item: "barang",
            before: "sebelum",
            leaving: "meninggalkan",
            store: "toko",
          },
        },
        {
          en: "Thank you for shopping at our store.",
          id: "Terima kasih sudah berbelanja di toko kami.",
          keywords: ["terima kasih", "berbelanja", "toko kami"],
          dictionary: {
            "thank you": "terima kasih",
            shopping: "berbelanja",
            our: "milik kami",
            store: "toko",
          },
        },
        {
          en: "The students are studying English together.",
          id: "Para siswa sedang belajar bahasa Inggris bersama.",
          keywords: ["siswa", "belajar", "bahasa inggris", "bersama"],
          dictionary: {
            students: "para siswa",
            studying: "sedang belajar",
            English: "bahasa Inggris",
            together: "bersama",
          },
        },
      ],
    },
    {
      title: "Hobbies and Space",
      sentences: [
        {
          en: "I love playing the guitar in my free time.",
          id: "Saya suka bermain gitar di waktu luang saya.",
          keywords: ["saya", "suka", "bermain", "gitar", "waktu", "luang"],
          dictionary: {
            "love playing": "suka bermain",
            guitar: "gitar",
            "free time": "waktu luang",
          },
        },
        {
          en: "He forgot to bring his umbrella, so he got wet in the rain.",
          id: "Dia lupa membawa payungnya, jadi dia kehujanan.",
          keywords: ["lupa", "membawa", "payung", "kehujanan"],
          dictionary: {
            forgot: "lupa",
            bring: "membawa",
            umbrella: "payung",
            rain: "hujan",
          },
        },
        {
          en: "Astronauts travel to space to explore new planets.",
          id: "Astronot bepergian ke luar angkasa untuk menjelajahi planet-planet baru.",
          keywords: [
            "astronot",
            "bepergian",
            "luar",
            "angkasa",
            "menjelajahi",
            "planet",
            "baru",
          ],
          dictionary: {
            Astronauts: "para astronot",
            travel: "bepergian",
            space: "luar angkasa",
            explore: "menjelajahi",
            "new planets": "planet-planet baru",
          },
        },
      ],
    },
  ],

  vocabularies: [
    // 🔥 Level Menengah
    { en: "Rechargeable", id: "Dapat diisi ulang", poin: 25 },
    { en: "Comfortable", id: "Nyaman", poin: 20 },
    { en: "Vegetable", id: "Sayuran", poin: 20 },
    { en: "Available", id: "Tersedia", poin: 20 },
    { en: "Affordable", id: "Terjangkau", poin: 25 },
    { en: "Important", id: "Penting", poin: 15 },
    { en: "Different", id: "Berbeda", poin: 15 },
    { en: "Interesting", id: "Menarik", poin: 20 },
    { en: "Beautiful", id: "Indah", poin: 20 },
    { en: "Business", id: "Bisnis", poin: 20 },

    // 🔥 Level Sulit
    { en: "Specification", id: "Spesifikasi", poin: 30 },
    { en: "Compatibility", id: "Kompatibilitas", poin: 30 },
    { en: "Responsibility", id: "Tanggung jawab", poin: 30 },
    { en: "Possibility", id: "Kemungkinan", poin: 30 },
    { en: "Electricity", id: "Listrik", poin: 25 },
    { en: "Environment", id: "Lingkungan", poin: 30 },
    { en: "Development", id: "Pengembangan", poin: 25 },
    { en: "Management", id: "Manajemen", poin: 25 },
    { en: "Government", id: "Pemerintah", poin: 25 },
    { en: "Information", id: "Informasi", poin: 20 },

    // 🔥 Level Sangat Sulit (buat latihan serius)
    { en: "International", id: "Internasional", poin: 30 },
    { en: "Communication", id: "Komunikasi", poin: 30 },
    { en: "Organization", id: "Organisasi", poin: 30 },
    { en: "Transportation", id: "Transportasi", poin: 30 },
    { en: "Administration", id: "Administrasi", poin: 30 },
    { en: "Understanding", id: "Pemahaman", poin: 25 },
    { en: "Misunderstanding", id: "Kesalahpahaman", poin: 35 },
    { en: "Pronunciation", id: "Pengucapan", poin: 35 },
    { en: "Automatically", id: "Secara otomatis", poin: 35 },
    { en: "Configuration", id: "Konfigurasi", poin: 35 },

    // 🔥 Lidah Paling Susah (latihan advanced)
    { en: "Entrepreneur", id: "Pengusaha", poin: 40 },
    { en: "Architecture", id: "Arsitektur", poin: 40 },
    { en: "Psychology", id: "Psikologi", poin: 40 },
    { en: "Technology", id: "Teknologi", poin: 30 },
    { en: "Acknowledgment", id: "Pengakuan", poin: 40 },
    { en: "Recommendation", id: "Rekomendasi", poin: 40 },
    { en: "Unbelievable", id: "Tidak dapat dipercaya", poin: 35 },
    { en: "Extraordinary", id: "Luar biasa", poin: 40 },
    { en: "Identification", id: "Identifikasi", poin: 40 },
    { en: "Implementation", id: "Implementasi", poin: 40 },

    { en: "Cashier", id: "Kasir", poin: 10 },
    { en: "Customer", id: "Pelanggan", poin: 10 },
    { en: "Buyer", id: "Pembeli", poin: 10 },
    { en: "Seller", id: "Penjual", poin: 10 },
    { en: "Sales", id: "Penjualan / sales", poin: 10 },
    { en: "Sales staff", id: "Staf penjualan", poin: 15 },
    { en: "Store", id: "Toko", poin: 10 },
    { en: "Computer store", id: "Toko komputer", poin: 15 },
    { en: "Counter", id: "Konter", poin: 10 },
    { en: "Checkout counter", id: "Meja kasir", poin: 15 },

    { en: "Product", id: "Produk", poin: 10 },
    { en: "Item", id: "Barang", poin: 10 },
    { en: "Goods", id: "Barang-barang", poin: 10 },
    { en: "Stock", id: "Stok", poin: 10 },
    { en: "Ready stock", id: "Stok tersedia", poin: 15 },
    { en: "Out of stock", id: "Habis stok", poin: 15 },
    { en: "Available", id: "Tersedia", poin: 10 },
    { en: "Unavailable", id: "Tidak tersedia", poin: 15 },

    { en: "Actually", id: "Sebenarnya", poin: 15 },
    { en: "Almost", id: "Hampir", poin: 10 },
    { en: "Already", id: "Sudah", poin: 10 },
    { en: "Also", id: "Juga", poin: 10 },
    { en: "Still", id: "Masih", poin: 10 },
    { en: "Just", id: "Baru saja / hanya", poin: 10 },
    { en: "Only", id: "Hanya", poin: 10 },
    { en: "Even", id: "Bahkan", poin: 15 },
    { en: "Enough", id: "Cukup", poin: 10 },
    { en: "Too", id: "Terlalu / juga", poin: 10 },
    { en: "Very", id: "Sangat", poin: 10 },
    { en: "Really", id: "Benar-benar", poin: 10 },
    { en: "Probably", id: "Mungkin / kemungkinan", poin: 15 },
    { en: "Maybe", id: "Mungkin", poin: 10 },
    { en: "Usually", id: "Biasanya", poin: 10 },
    { en: "Sometimes", id: "Kadang-kadang", poin: 10 },
    { en: "Rarely", id: "Jarang", poin: 15 },
    { en: "Never", id: "Tidak pernah", poin: 10 },
    { en: "Always", id: "Selalu", poin: 10 },

    { en: "Before", id: "Sebelum", poin: 10 },
    { en: "After", id: "Sesudah / setelah", poin: 10 },
    { en: "During", id: "Selama", poin: 15 },
    { en: "While", id: "Sementara / ketika", poin: 15 },
    { en: "Until", id: "Sampai", poin: 10 },
    { en: "Since", id: "Sejak / karena", poin: 15 },
    { en: "Because", id: "Karena", poin: 10 },
    { en: "Although", id: "Meskipun", poin: 20 },
    { en: "However", id: "Namun", poin: 20 },
    { en: "Therefore", id: "Oleh karena itu", poin: 20 },
    { en: "Then", id: "Kemudian", poin: 10 },
    { en: "Next", id: "Selanjutnya", poin: 10 },
    { en: "Finally", id: "Akhirnya", poin: 15 },

    { en: "Here", id: "Di sini", poin: 10 },
    { en: "There", id: "Di sana", poin: 10 },
    { en: "Near", id: "Dekat", poin: 10 },
    { en: "Far", id: "Jauh", poin: 10 },
    { en: "Inside", id: "Di dalam", poin: 10 },
    { en: "Outside", id: "Di luar", poin: 10 },
    { en: "Beside", id: "Di samping", poin: 10 },
    { en: "Between", id: "Di antara", poin: 15 },
    { en: "Behind", id: "Di belakang", poin: 10 },
    { en: "In front of", id: "Di depan", poin: 15 },
    { en: "Above", id: "Di atas", poin: 10 },
    { en: "Below", id: "Di bawah", poin: 10 },
    { en: "Around", id: "Di sekitar", poin: 10 },

    { en: "Easy", id: "Mudah", poin: 10 },
    { en: "Difficult", id: "Sulit", poin: 15 },
    { en: "Simple", id: "Sederhana", poin: 10 },
    { en: "Complicated", id: "Rumit", poin: 20 },
    { en: "Correct", id: "Benar", poin: 10 },
    { en: "Wrong", id: "Salah", poin: 10 },
    { en: "Possible", id: "Mungkin / memungkinkan", poin: 15 },
    { en: "Impossible", id: "Tidak mungkin", poin: 15 },
    { en: "Ready", id: "Siap", poin: 10 },
    { en: "Busy", id: "Sibuk", poin: 10 },
    { en: "Free", id: "Gratis / bebas", poin: 10 },
    { en: "Full", id: "Penuh", poin: 10 },
    { en: "Empty", id: "Kosong", poin: 10 },
    { en: "Safe", id: "Aman", poin: 10 },
    { en: "Dangerous", id: "Berbahaya", poin: 15 },

    { en: "Agree", id: "Setuju", poin: 10 },
    { en: "Disagree", id: "Tidak setuju", poin: 15 },
    { en: "Believe", id: "Percaya", poin: 10 },
    { en: "Forget", id: "Lupa", poin: 10 },
    { en: "Remember", id: "Mengingat", poin: 10 },
    { en: "Choose", id: "Memilih", poin: 10 },
    { en: "Decide", id: "Memutuskan", poin: 15 },
    { en: "Explain", id: "Menjelaskan", poin: 15 },
    { en: "Describe", id: "Menggambarkan / menjelaskan", poin: 15 },
    { en: "Improve", id: "Meningkatkan", poin: 15 },
    { en: "Prepare", id: "Menyiapkan", poin: 15 },
    { en: "Continue", id: "Melanjutkan", poin: 15 },
    { en: "Stop", id: "Berhenti", poin: 10 },
    { en: "Repeat", id: "Mengulangi", poin: 10 },
    { en: "Practice", id: "Berlatih", poin: 10 },

    { en: "Can you help me?", id: "Bisakah kamu membantu saya?", poin: 20 },
    { en: "I need your help", id: "Saya membutuhkan bantuanmu", poin: 20 },
    { en: "Please speak slowly", id: "Tolong bicara pelan-pelan", poin: 20 },
    { en: "Can you repeat that?", id: "Bisakah kamu mengulanginya?", poin: 20 },
    { en: "I do not understand", id: "Saya tidak mengerti", poin: 20 },
    { en: "I understand now", id: "Saya mengerti sekarang", poin: 20 },
    { en: "What does it mean?", id: "Apa artinya?", poin: 20 },
    {
      en: "How do you say this?",
      id: "Bagaimana cara mengucapkan ini?",
      poin: 25,
    },
    { en: "I am still learning", id: "Saya masih belajar", poin: 20 },
    { en: "Please correct me", id: "Tolong koreksi saya", poin: 20 },

    { en: "Price", id: "Harga", poin: 10 },
    { en: "Total price", id: "Total harga", poin: 15 },
    { en: "Subtotal", id: "Subtotal", poin: 10 },
    { en: "Discount", id: "Diskon", poin: 10 },
    { en: "Promo", id: "Promo", poin: 10 },
    { en: "Promotion", id: "Promosi", poin: 10 },
    { en: "Special offer", id: "Penawaran khusus", poin: 15 },
    { en: "Cheap", id: "Murah", poin: 10 },
    { en: "Expensive", id: "Mahal", poin: 10 },
    { en: "Affordable", id: "Terjangkau", poin: 15 },

    { en: "Payment", id: "Pembayaran", poin: 10 },
    { en: "Pay", id: "Membayar", poin: 10 },
    { en: "Paid", id: "Sudah dibayar", poin: 10 },
    { en: "Unpaid", id: "Belum dibayar", poin: 10 },
    { en: "Cash", id: "Uang tunai", poin: 10 },
    { en: "Rupiah", id: "Rupiah", poin: 10 },
    { en: "Debit card", id: "Kartu debit", poin: 15 },
    { en: "Credit card", id: "Kartu kredit", poin: 15 },
    { en: "Bank transfer", id: "Transfer bank", poin: 15 },
    { en: "QR payment", id: "Pembayaran QR", poin: 15 },
    { en: "E-wallet", id: "Dompet digital", poin: 15 },
    { en: "Transaction", id: "Transaksi", poin: 15 },
    { en: "Payment method", id: "Metode pembayaran", poin: 20 },
    { en: "Additional fee", id: "Biaya tambahan", poin: 20 },
    { en: "Credit card fee", id: "Biaya kartu kredit", poin: 20 },
    {
      en: "Two point five percent fee",
      id: "Biaya dua koma lima persen",
      poin: 25,
    },

    { en: "Change", id: "Kembalian", poin: 10 },
    { en: "Receipt", id: "Struk", poin: 10 },
    { en: "Invoice", id: "Faktur / invoice", poin: 15 },
    { en: "Bill", id: "Tagihan", poin: 10 },
    { en: "Proof of payment", id: "Bukti pembayaran", poin: 20 },
    { en: "Print receipt", id: "Mencetak struk", poin: 20 },
    { en: "Keep the receipt", id: "Simpan struk", poin: 20 },

    { en: "Return", id: "Pengembalian", poin: 15 },
    { en: "Product return", id: "Pengembalian barang", poin: 20 },
    { en: "Refund", id: "Pengembalian uang", poin: 20 },
    { en: "Exchange", id: "Penukaran barang", poin: 15 },
    { en: "Replacement", id: "Barang pengganti", poin: 20 },
    { en: "Warranty", id: "Garansi", poin: 15 },
    { en: "Official warranty", id: "Garansi resmi", poin: 20 },
    { en: "Warranty claim", id: "Klaim garansi", poin: 20 },
    { en: "Damaged item", id: "Barang rusak", poin: 20 },
    { en: "Defective product", id: "Produk cacat", poin: 20 },
    { en: "Factory defect", id: "Cacat pabrik", poin: 20 },
    { en: "Physical damage", id: "Kerusakan fisik", poin: 20 },
    { en: "Water damage", id: "Kerusakan karena air", poin: 20 },

    { en: "Wrap", id: "Membungkus", poin: 15 },
    { en: "Package", id: "Paket / kemasan", poin: 15 },
    { en: "Packaging", id: "Pengemasan", poin: 15 },
    { en: "Plastic bag", id: "Kantong plastik", poin: 15 },
    { en: "Paper bag", id: "Kantong kertas", poin: 15 },
    { en: "Box", id: "Kotak", poin: 10 },
    { en: "Product box", id: "Kotak produk", poin: 15 },
    { en: "Bubble wrap", id: "Plastik gelembung", poin: 20 },
    { en: "Gift wrap", id: "Bungkus hadiah", poin: 20 },
    { en: "Shopping bag", id: "Tas belanja", poin: 15 },

    // retail / warranty additional vocab
    { en: "Serial number", id: "Nomor seri", poin: 20 },
    { en: "Store credit", id: "Kredit toko", poin: 15 },
    { en: "Exchange policy", id: "Kebijakan penukaran", poin: 20 },
    { en: "Refund policy", id: "Kebijakan pengembalian", poin: 20 },
    { en: "Original packaging", id: "Kemasan asli", poin: 15 },
    { en: "Customer service", id: "Layanan pelanggan", poin: 15 },
    { en: "Claim warranty", id: "Klaim garansi", poin: 20 },
    { en: "Defective", id: "Cacat", poin: 15 },

    { en: "Bonus", id: "Bonus", poin: 10 },
    { en: "Free gift", id: "Hadiah gratis", poin: 15 },
    { en: "Free item", id: "Barang gratis", poin: 15 },
    { en: "Free mouse", id: "Mouse gratis", poin: 15 },
    { en: "Free mouse pad", id: "Alas mouse gratis", poin: 20 },
    { en: "Keyboard cover", id: "Pelindung keyboard", poin: 20 },
    { en: "Cleaning cloth", id: "Kain pembersih", poin: 15 },
    { en: "Screen protector", id: "Pelindung layar", poin: 20 },

    { en: "Laptop", id: "Laptop", poin: 10 },
    { en: "Computer", id: "Komputer", poin: 10 },
    { en: "PC", id: "PC / komputer desktop", poin: 10 },
    { en: "Desktop computer", id: "Komputer desktop", poin: 15 },
    { en: "Printer", id: "Printer", poin: 10 },
    { en: "Projector", id: "Proyektor", poin: 15 },
    { en: "Speaker", id: "Speaker", poin: 10 },
    { en: "TWS earbuds", id: "Earbud TWS", poin: 20 },
    { en: "Headset", id: "Headset", poin: 10 },
    { en: "Headphones", id: "Headphone", poin: 10 },
    { en: "Keyboard", id: "Keyboard / papan ketik", poin: 10 },
    { en: "Mouse", id: "Mouse", poin: 10 },
    { en: "Wireless mouse", id: "Mouse nirkabel", poin: 15 },
    { en: "Wired mouse", id: "Mouse kabel", poin: 15 },
    { en: "Mouse pad", id: "Alas mouse", poin: 10 },
    { en: "Monitor", id: "Monitor", poin: 10 },
    { en: "Processor", id: "Prosesor", poin: 15 },
    { en: "RAM", id: "RAM", poin: 10 },
    { en: "SSD", id: "SSD", poin: 10 },
    { en: "Hard disk", id: "Hard disk", poin: 10 },
    { en: "Flash drive", id: "Flashdisk", poin: 15 },
    { en: "Charger", id: "Pengisi daya", poin: 10 },
    { en: "Adapter", id: "Adaptor", poin: 10 },
    { en: "USB cable", id: "Kabel USB", poin: 15 },
    { en: "HDMI cable", id: "Kabel HDMI", poin: 15 },
    { en: "Printer ink", id: "Tinta printer", poin: 15 },
    { en: "Toner", id: "Toner", poin: 10 },
    { en: "Cartridge", id: "Kartrid", poin: 15 },
    { en: "Photo paper", id: "Kertas foto", poin: 15 },

    { en: "Mobile accessory", id: "Aksesori seluler", poin: 20 },
    { en: "Phone case", id: "Casing ponsel", poin: 15 },
    { en: "Phone charger", id: "Charger ponsel", poin: 15 },
    { en: "Data cable", id: "Kabel data", poin: 15 },
    { en: "Tempered glass", id: "Tempered glass", poin: 15 },
    { en: "Phone holder", id: "Dudukan ponsel", poin: 15 },
    { en: "Tripod", id: "Tripod", poin: 10 },
    { en: "Ring light", id: "Ring light", poin: 10 },

    { en: "Scan", id: "Memindai", poin: 15 },
    { en: "Check", id: "Memeriksa", poin: 15 },
    { en: "Confirm", id: "Mengonfirmasi", poin: 15 },
    { en: "Process", id: "Memproses", poin: 15 },
    { en: "Approve", id: "Menyetujui", poin: 15 },
    { en: "Decline", id: "Menolak", poin: 15 },
    { en: "Cancel", id: "Membatalkan", poin: 15 },
    { en: "Order", id: "Memesan", poin: 10 },
    { en: "Preorder", id: "Pre-order / pesan dulu", poin: 15 },
    { en: "Pick up", id: "Mengambil barang", poin: 15 },
    { en: "Deliver", id: "Mengantar", poin: 15 },
    { en: "Recommend", id: "Merekomendasikan", poin: 20 },
    { en: "Compare", id: "Membandingkan", poin: 15 },
    { en: "Choose", id: "Memilih", poin: 10 },
    { en: "Test", id: "Menguji", poin: 10 },
    { en: "Connect", id: "Menyambungkan", poin: 15 },
    { en: "Install", id: "Memasang / menginstal", poin: 15 },
    { en: "Set up", id: "Mengatur / menyiapkan", poin: 15 },
    { en: "Wait", id: "Menunggu", poin: 10 },
    { en: "Apple", id: "Apel", poin: 5 },
    { en: "Forest", id: "Hutan", poin: 5 },
    { en: "Bird", id: "Burung", poin: 5 },
    { en: "Shiny", id: "Berkilau", poin: 10 },
    { en: "Understand", id: "Mengerti", poin: 10 },
    { en: "Beautiful", id: "Indah", poin: 5 },
    { en: "Sandcastle", id: "Istana Pasir", poin: 15 },
    { en: "Joyful", id: "Membahagiakan", poin: 15 },
    { en: "Bite", id: "Gigitan", poin: 10 },
    { en: "Swim", id: "Berenang", poin: 5 },
    { en: "Sun", id: "Matahari", poin: 5 },
    { en: "Brightly", id: "Dengan terang", poin: 15 },
    { en: "Cashier", id: "Kasir", poin: 10 },
    { en: "Customer", id: "Pelanggan", poin: 10 },
    { en: "Buy", id: "Membeli", poin: 5 },
    { en: "Sell", id: "Menjual", poin: 5 },
    { en: "Price", id: "Harga", poin: 5 },
    { en: "Money", id: "Uang", poin: 5 },
    { en: "Change", id: "Kembalian", poin: 10 },
    { en: "Receipt", id: "Struk belanja", poin: 15 },
    { en: "Shopping bag", id: "Tas belanja", poin: 10 },
    { en: "Pay", id: "Membayar", poin: 5 },
    { en: "Cash", id: "Uang tunai", poin: 10 },
    { en: "Credit card", id: "Kartu kredit", poin: 10 },
    { en: "Discount", id: "Diskon", poin: 10 },
    { en: "Queue", id: "Antrean", poin: 15 },
    { en: "Total", id: "Total", poin: 5 },
    { en: "Morning", id: "Pagi", poin: 5 },
    { en: "Afternoon", id: "Sore", poin: 5 },
    { en: "Evening", id: "Malam", poin: 5 },
    { en: "Help", id: "Membantu", poin: 5 },
    { en: "Need", id: "Membutuhkan", poin: 5 },
    { en: "Wait", id: "Menunggu", poin: 5 },
    { en: "Always", id: "Selalu", poin: 5 },
    { en: "Never", id: "Tidak pernah", poin: 5 },
    { en: "Sometimes", id: "Kadang-kadang", poin: 5 },
    { en: "Usually", id: "Biasanya", poin: 5 },
    { en: "Often", id: "Sering", poin: 5 },
    { en: "Drink", id: "Minum", poin: 5 },
    { en: "Wake up", id: "Bangun tidur", poin: 5 },
    { en: "Take a shower", id: "Mandi", poin: 5 },
    { en: "Brush teeth", id: "Menyikat gigi", poin: 5 },
    { en: "Breakfast", id: "Sarapan", poin: 5 },
    { en: "Go to work", id: "Pergi bekerja", poin: 5 },
    { en: "Cook", id: "Memasak", poin: 5 },
    { en: "Clean", id: "Membersihkan", poin: 5 },
    { en: "Sweep", id: "Menyapu", poin: 5 },
    { en: "Wash", id: "Mencuci", poin: 5 },
    { en: "Sleep", id: "Tidur", poin: 5 },
    { en: "Barcode", id: "Kode batang", poin: 10 },
    { en: "Scanner", id: "Pemindai", poin: 10 },
    { en: "Cart", id: "Kereta belanja", poin: 10 },
    { en: "Wallet", id: "Dompet", poin: 5 },
    { en: "Customer service", id: "Layanan pelanggan", poin: 15 },

    { en: "Cat", id: "Kucing", poin: 5 },
    { en: "Dog", id: "Anjing", poin: 5 },
    { en: "Cow", id: "Sapi", poin: 5 },
    { en: "Goat", id: "Kambing", poin: 5 },
    { en: "Chicken", id: "Ayam", poin: 5 },
    { en: "Fish", id: "Ikan", poin: 5 },
    { en: "Mouse", id: "Tikus", poin: 5 },
    { en: "Rabbit", id: "Kelinci", poin: 5 },
    { en: "Lion", id: "Singa", poin: 10 },
    { en: "Tiger", id: "Harimau", poin: 10 },

    { en: "Phone", id: "Telepon", poin: 5 },
    { en: "Laptop", id: "Laptop", poin: 5 },
    { en: "Bottle", id: "Botol", poin: 5 },
    { en: "Glass", id: "Gelas", poin: 5 },
    { en: "Chair", id: "Kursi", poin: 5 },
    { en: "Table", id: "Meja", poin: 5 },
    { en: "Door", id: "Pintu", poin: 5 },
    { en: "Window", id: "Jendela", poin: 5 },
    { en: "Book", id: "Buku", poin: 5 },
    { en: "Pencil", id: "Pensil", poin: 5 },

    { en: "Eat", id: "Makan", poin: 5 },
    { en: "Go", id: "Pergi", poin: 5 },
    { en: "Come", id: "Datang", poin: 5 },
    { en: "Read", id: "Membaca", poin: 5 },
    { en: "Write", id: "Menulis", poin: 5 },
    { en: "Speak", id: "Berbicara", poin: 5 },
    { en: "Listen", id: "Mendengarkan", poin: 5 },
    { en: "Study", id: "Belajar", poin: 5 },
    { en: "Teach", id: "Mengajar", poin: 5 },
    { en: "Open", id: "Membuka", poin: 5 },

    { en: "Big", id: "Besar", poin: 5 },
    { en: "Small", id: "Kecil", poin: 5 },
    { en: "Fast", id: "Cepat", poin: 5 },
    { en: "Slow", id: "Lambat", poin: 5 },
    { en: "Happy", id: "Bahagia", poin: 5 },
    { en: "Sad", id: "Sedih", poin: 5 },
    { en: "Hungry", id: "Lapar", poin: 5 },
    { en: "Thirsty", id: "Haus", poin: 5 },
    { en: "Tired", id: "Lelah", poin: 5 },
    { en: "Smart", id: "Pintar", poin: 5 },

    { en: "Astronaut", id: "Astronot", poin: 10 },
    { en: "Spaceship", id: "Pesawat luar angkasa", poin: 15 },
    { en: "Universe", id: "Alam semesta", poin: 10 },
    { en: "Technology", id: "Teknologi", poin: 10 },
    { en: "Internet", id: "Internet", poin: 5 },
    { en: "Software", id: "Perangkat lunak", poin: 15 },
    { en: "Hardware", id: "Perangkat keras", poin: 15 },
    { en: "Guitar", id: "Gitar", poin: 5 },
    { en: "Music", id: "Musik", poin: 5 },
    { en: "Camera", id: "Kamera", poin: 5 },
    { en: "Photograph", id: "Foto", poin: 10 },
    { en: "Nature", id: "Alam", poin: 5 },
    { en: "Mountain", id: "Gunung", poin: 5 },
    { en: "River", id: "Sungai", poin: 5 },
    { en: "Ocean", id: "Lautan", poin: 5 },
    { en: "Confident", id: "Percaya diri", poin: 10 },
    { en: "Curious", id: "Penasaran", poin: 10 },
  ],

  listening: [
    {
      audioText: "The cashier greets the customer politely",
      options: [
        "Kasir menyapa pelanggan dengan sopan",
        "Pelanggan membayar dengan sopan",
        "Sales membawa produk ke kasir",
        "Kasir menunggu pelanggan",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The sales staff recommends a wireless mouse",
      options: [
        "Staf penjualan merekomendasikan mouse nirkabel",
        "Staf penjualan menjual printer rusak",
        "Kasir mencetak struk pembayaran",
        "Pelanggan meminta kantong plastik",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The customer asks about the laptop specification",
      options: [
        "Pelanggan bertanya tentang spesifikasi laptop",
        "Pelanggan membayar laptop di kasir",
        "Pelanggan mengembalikan printer rusak",
        "Pelanggan meminta bonus gratis",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "This laptop has eight gigabytes of RAM",
      options: [
        "Laptop ini memiliki RAM delapan gigabyte",
        "Laptop ini memiliki garansi delapan tahun",
        "Laptop ini memiliki harga delapan juta",
        "Laptop ini sedang habis stok",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The printer is suitable for office use",
      options: [
        "Printer ini cocok untuk penggunaan kantor",
        "Printer ini rusak karena air",
        "Printer ini tidak memiliki tinta",
        "Printer ini sedang dikembalikan",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The customer wants to buy printer ink",
      options: [
        "Pelanggan ingin membeli tinta printer",
        "Pelanggan ingin membeli speaker",
        "Pelanggan ingin mencetak struk",
        "Pelanggan ingin membayar cicilan",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The cashier confirms the payment method",
      options: [
        "Kasir mengonfirmasi metode pembayaran",
        "Kasir membatalkan metode pengiriman",
        "Kasir menjelaskan fitur laptop",
        "Kasir membungkus produk hadiah",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The customer enters the PIN on the payment machine",
      options: [
        "Pelanggan memasukkan PIN pada mesin pembayaran",
        "Pelanggan mencetak PIN pada struk",
        "Pelanggan meminta struk digital",
        "Pelanggan memilih barang pengganti",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The payment is approved",
      options: [
        "Pembayaran disetujui",
        "Pembayaran ditolak",
        "Barang ditukar",
        "Struk hilang",
      ],
      answer: 0,
      poin: 10,
    },
    {
      audioText: "The payment failed because the card was declined",
      options: [
        "Pembayaran gagal karena kartu ditolak",
        "Pembayaran berhasil karena kartu diterima",
        "Kartu debit tidak memiliki biaya tambahan",
        "Kasir memberi kembalian",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The customer pays three million rupiah",
      options: [
        "Pelanggan membayar tiga juta rupiah",
        "Pelanggan menerima tiga juta rupiah",
        "Kasir mengembalikan tiga juta rupiah",
        "Sales memberi diskon tiga juta rupiah",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The total price is five hundred thousand rupiah",
      options: [
        "Total harganya lima ratus ribu rupiah",
        "Total kembalian lima ratus rupiah",
        "Biaya tambahan lima persen",
        "Harga barang lima juta rupiah",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "Your change is twenty thousand rupiah",
      options: [
        "Kembalian Anda dua puluh ribu rupiah",
        "Pembayaran Anda dua puluh ribu rupiah",
        "Harga barang dua puluh ribu rupiah",
        "Biaya admin dua puluh ribu rupiah",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "Please keep the receipt for warranty claim",
      options: [
        "Mohon simpan struk untuk klaim garansi",
        "Mohon cetak struk untuk pembayaran",
        "Mohon buang struk setelah transaksi",
        "Mohon bawa kartu kredit untuk garansi",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The customer lost the original receipt",
      options: [
        "Pelanggan kehilangan struk asli",
        "Pelanggan mencetak struk asli",
        "Kasir menemukan produk asli",
        "Sales menyimpan kartu asli",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The store gives a free mouse pad",
      options: [
        "Toko memberikan alas mouse gratis",
        "Toko menjual mouse rusak",
        "Kasir meminta mouse gratis",
        "Pelanggan mengembalikan mouse pad",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The customer gets a discount after buying two accessories",
      options: [
        "Pelanggan mendapat diskon setelah membeli dua aksesori",
        "Pelanggan mendapat garansi setelah membeli printer",
        "Pelanggan membayar biaya tambahan dua persen",
        "Kasir menukar dua aksesori",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The cashier puts the product into a paper bag",
      options: [
        "Kasir memasukkan produk ke dalam kantong kertas",
        "Kasir mengambil produk dari kotak besar",
        "Kasir mencetak produk di kertas",
        "Kasir membayar produk dengan tunai",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "Please wrap this item neatly",
      options: [
        "Tolong bungkus barang ini dengan rapi",
        "Tolong kembalikan barang ini besok",
        "Tolong cetak struk ini sekarang",
        "Tolong bayar barang ini di kasir",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The item can be exchanged within seven days",
      options: [
        "Barang dapat ditukar dalam tujuh hari",
        "Barang dapat dibayar dalam tujuh hari",
        "Barang harus dikirim selama tujuh hari",
        "Barang habis stok selama tujuh hari",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The warranty does not cover water damage",
      options: [
        "Garansi tidak mencakup kerusakan karena air",
        "Garansi mencakup semua kerusakan air",
        "Struk tidak mencakup pembayaran air",
        "Produk tidak tersedia karena air",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The warranty does not cover physical damage",
      options: [
        "Garansi tidak mencakup kerusakan fisik",
        "Garansi mencakup semua biaya fisik",
        "Kerusakan fisik mendapatkan bonus",
        "Pelanggan membayar garansi fisik",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The store will check the product before approving the return",
      options: [
        "Toko akan memeriksa produk sebelum menyetujui pengembalian",
        "Toko akan menjual produk sebelum memberi diskon",
        "Kasir akan mencetak produk sebelum pembayaran",
        "Sales akan membungkus produk sebelum stok habis",
      ],
      answer: 0,
      poin: 30,
    },
    {
      audioText: "The customer receives a replacement item",
      options: [
        "Pelanggan menerima barang pengganti",
        "Pelanggan menolak barang pengganti",
        "Kasir menjual barang pengganti",
        "Sales mencetak barang pengganti",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The return cannot be processed without the receipt",
      options: [
        "Pengembalian tidak dapat diproses tanpa struk",
        "Pembayaran tidak dapat diproses tanpa laptop",
        "Garansi dapat diproses tanpa produk",
        "Diskon tidak dapat diproses tanpa bonus",
      ],
      answer: 0,
      poin: 30,
    },
    {
      audioText: "The product is ready stock today",
      options: [
        "Produk tersedia hari ini",
        "Produk rusak hari ini",
        "Produk dikembalikan hari ini",
        "Produk dibayar besok",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The projector is currently out of stock",
      options: [
        "Proyektor saat ini sedang habis stok",
        "Proyektor saat ini sedang diskon",
        "Proyektor saat ini sedang dicetak",
        "Proyektor saat ini sedang diuji",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "You can preorder this item with a small deposit",
      options: [
        "Anda bisa preorder barang ini dengan uang muka kecil",
        "Anda bisa mengembalikan barang ini dengan struk",
        "Anda bisa mencetak barang ini dengan printer",
        "Anda bisa membayar barang ini tanpa harga",
      ],
      answer: 0,
      poin: 30,
    },
    {
      audioText: "The sales staff compares two laptop models",
      options: [
        "Staf penjualan membandingkan dua model laptop",
        "Kasir membungkus dua model laptop",
        "Pelanggan membayar dua model laptop",
        "Toko mengembalikan dua model laptop",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "This accessory is compatible with many laptops",
      options: [
        "Aksesori ini kompatibel dengan banyak laptop",
        "Aksesori ini rusak pada banyak laptop",
        "Aksesori ini mahal untuk semua printer",
        "Aksesori ini tersedia hanya untuk speaker",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The wireless keyboard is easy to connect",
      options: [
        "Keyboard nirkabel mudah disambungkan",
        "Keyboard nirkabel sulit dikembalikan",
        "Keyboard kabel mudah dicetak",
        "Keyboard rusak harus dibayar",
      ],
      answer: 0,
      poin: 20,
    },

    {
      audioText: "These TWS earbuds have long battery life",
      options: [
        "Earbud TWS ini memiliki daya tahan baterai yang lama",
        "Earbud TWS ini memiliki biaya tambahan yang mahal",
        "Earbud TWS ini tidak memiliki suara",
        "Earbud TWS ini hanya untuk printer",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "This speaker has strong bass and clear sound",
      options: [
        "Speaker ini memiliki bass kuat dan suara jernih",
        "Speaker ini memiliki kartu kredit dan debit",
        "Speaker ini sedang habis stok dan rusak",
        "Speaker ini harus dikembalikan ke kasir",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The laptop will not turn on",
      options: [
        "Laptopnya tidak mau menyala",
        "Laptopnya tidak mau dicetak",
        "Laptopnya tidak mau dibungkus",
        "Laptopnya tidak mau dibayar",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The printer does not work",
      options: [
        "Printernya tidak berfungsi",
        "Printernya tidak memiliki struk",
        "Printernya tidak menerima pembayaran",
        "Printernya tidak memberi bonus",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The speaker has no sound",
      options: [
        "Speakernya tidak ada suara",
        "Speakernya tidak ada harga",
        "Speakernya tidak ada kembalian",
        "Speakernya tidak ada struk",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "Please bring the product box and the receipt",
      options: [
        "Silakan bawa kotak produk dan struknya",
        "Silakan bayar produk dan struknya",
        "Silakan cetak kotak produk dan struknya",
        "Silakan pilih bonus dan kembalian",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The cashier asks the customer to check the item",
      options: [
        "Kasir meminta pelanggan memeriksa barang",
        "Kasir meminta pelanggan membayar barang",
        "Sales meminta kasir mencetak struk",
        "Pelanggan meminta kasir memilih barang",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "Please check the item before leaving the store",
      options: [
        "Silakan periksa barang sebelum meninggalkan toko",
        "Silakan bayar barang sebelum membuka toko",
        "Silakan bungkus barang sebelum mencetak struk",
        "Silakan simpan barang sebelum bertanya harga",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "Thank you for shopping at our store",
      options: [
        "Terima kasih sudah berbelanja di toko kami",
        "Terima kasih sudah mengembalikan barang kami",
        "Terima kasih sudah mencetak struk kami",
        "Terima kasih sudah menolak pembayaran kami",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The cashier prepares the package",
      options: [
        "Kasir menyiapkan paket",
        "Kasir membayar paket",
        "Kasir menolak paket",
        "Kasir membandingkan paket",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The customer waits in line",
      options: [
        "Pelanggan menunggu dalam antrean",
        "Pelanggan membayar dalam antrean",
        "Kasir menunggu di rumah",
        "Sales menjual antrean",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The item is too expensive for me",
      options: [
        "Barang ini terlalu mahal untuk saya",
        "Barang ini terlalu murah untuk kasir",
        "Barang ini terlalu kecil untuk printer",
        "Barang ini terlalu rusak untuk toko",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "Is there a special offer today",
      options: [
        "Apakah ada penawaran khusus hari ini",
        "Apakah ada kerusakan khusus hari ini",
        "Apakah ada pembayaran gagal hari ini",
        "Apakah ada struk khusus besok",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The store gives a discount for cash payment",
      options: [
        "Toko memberikan diskon untuk pembayaran tunai",
        "Toko memberikan garansi untuk kartu kredit",
        "Toko memberikan struk untuk stok kosong",
        "Toko memberikan printer untuk pengembalian",
      ],
      answer: 0,
      poin: 25,
    },
    {
      audioText: "The customer chooses a black laptop bag",
      options: [
        "Pelanggan memilih tas laptop hitam",
        "Pelanggan memilih printer hitam",
        "Pelanggan memilih struk hitam",
        "Pelanggan memilih kartu hitam",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The sales staff explains the difference between two products",
      options: [
        "Staf penjualan menjelaskan perbedaan antara dua produk",
        "Kasir menghitung perbedaan antara dua pembayaran",
        "Pelanggan mencetak perbedaan antara dua struk",
        "Toko menolak perbedaan antara dua barang",
      ],
      answer: 0,
      poin: 30,
    },
    {
      audioText: "The customer wants a cheaper option",
      options: [
        "Pelanggan menginginkan pilihan yang lebih murah",
        "Pelanggan menginginkan pilihan yang lebih rusak",
        "Kasir menginginkan pembayaran yang gagal",
        "Sales menginginkan struk yang hilang",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The cashier counts the cash carefully",
      options: [
        "Kasir menghitung uang tunai dengan teliti",
        "Kasir menghitung barang rusak dengan cepat",
        "Pelanggan menghitung garansi resmi",
        "Sales menghitung aksesori seluler",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The store does not sell mobile phones",
      options: [
        "Toko tidak menjual ponsel",
        "Toko tidak menjual laptop",
        "Toko tidak menerima tunai",
        "Toko tidak mencetak struk",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The store sells mobile accessories",
      options: [
        "Toko menjual aksesori seluler",
        "Toko menjual ponsel",
        "Toko menjual kartu kredit",
        "Toko menjual struk digital",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The cashier scans the product barcode",
      options: [
        "Kasir memindai barcode produk",
        "Pelanggan membayar dengan tunai",
        "Kasir mencetak struk",
        "Sales menjelaskan produk",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The customer pays with cash",
      options: [
        "Pelanggan membayar dengan kartu kredit",
        "Pelanggan membayar dengan uang tunai",
        "Pelanggan meminta diskon",
        "Kasir memberi kembalian",
      ],
      answer: 1,
      poin: 15,
    },
    {
      audioText: "Debit card payment has no additional fee",
      options: [
        "Pembayaran kartu debit tidak memiliki biaya tambahan",
        "Pembayaran kartu kredit memiliki biaya tambahan",
        "Kartu debit tidak bisa digunakan",
        "Kartu kredit ditolak",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "Credit card payment has a two point five percent fee",
      options: [
        "Pembayaran tunai mendapat diskon dua persen",
        "Pembayaran kartu debit memiliki biaya admin",
        "Pembayaran kartu kredit memiliki biaya dua koma lima persen",
        "Pembayaran gagal karena kartu ditolak",
      ],
      answer: 2,
      poin: 25,
    },
    {
      audioText: "Please wait while I print the receipt",
      options: [
        "Tolong tunggu sementara saya mencetak struk",
        "Tolong bayar di kasir",
        "Silakan pilih barang lain",
        "Silakan bawa struk asli",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "The customer asks for a paper bag",
      options: [
        "Pelanggan meminta kantong kertas",
        "Pelanggan meminta bonus gratis",
        "Pelanggan meminta kembalian",
        "Pelanggan meminta garansi",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "The laptop comes with an official warranty",
      options: [
        "Laptop ini tidak memiliki garansi",
        "Laptop ini dilengkapi garansi resmi",
        "Laptop ini sedang habis stok",
        "Laptop ini terlalu mahal",
      ],
      answer: 1,
      poin: 20,
    },
    {
      audioText: "The printer is out of stock today",
      options: [
        "Printer tersedia hari ini",
        "Printer sedang habis stok hari ini",
        "Printer sedang dicetak",
        "Printer memiliki garansi resmi",
      ],
      answer: 1,
      poin: 20,
    },
    {
      audioText: "The sales staff explains the product features",
      options: [
        "Kasir mencetak struk produk",
        "Staf penjualan menjelaskan fitur produk",
        "Pelanggan membandingkan dua produk",
        "Toko memberikan bonus produk",
      ],
      answer: 1,
      poin: 20,
    },
    {
      audioText: "The customer wants to return the damaged item",
      options: [
        "Pelanggan ingin membeli barang baru",
        "Pelanggan ingin menukar hadiah",
        "Pelanggan ingin mengembalikan barang rusak",
        "Pelanggan ingin membayar barang",
      ],
      answer: 2,
      poin: 25,
    },
    {
      audioText: "The cashier gives the change to the customer",
      options: [
        "Kasir memberikan kembalian kepada pelanggan",
        "Kasir meminta struk kepada pelanggan",
        "Kasir membungkus barang pelanggan",
        "Kasir memeriksa garansi pelanggan",
      ],
      answer: 0,
      poin: 20,
    },
    {
      audioText: "This speaker has clear sound",
      options: [
        "Speaker ini memiliki suara jernih",
        "Speaker ini tidak menyala",
        "Speaker ini habis stok",
        "Speaker ini memiliki kabel panjang",
      ],
      answer: 0,
      poin: 15,
    },
    {
      audioText: "I want an apple",
      options: [
        "Saya mau apel",
        "Saya makan mangga",
        "Kamu mau apel",
        "Dia memetik apel",
      ],
      answer: 0,
      poin: 10,
    },
    {
      audioText: "The bird is singing",
      options: [
        "Burung sedang terbang",
        "Burung sedang menyanyi",
        "Ayam sedang menyanyi",
        "Burung memakan apel",
      ],
      answer: 1,
      poin: 10,
    },
    {
      audioText: "Welcome to the forest",
      options: [
        "Hutan ini besar",
        "Hutan ini ajaib",
        "Selamat datang di rumah",
        "Selamat datang di hutan",
      ],
      answer: 3,
      poin: 10,
    },
    {
      audioText: "The sun is bright",
      options: [
        "Matahari bersinar terang",
        "Bulan sangat indah",
        "Cuaca sangat panas",
        "Matahari berwarna kuning",
      ],
      answer: 0,
      poin: 10,
    },
    {
      audioText: "I am swimming",
      options: [
        "Saya sedang tidur",
        "Saya sedang berenang",
        "Saya sedang berlari",
        "Dia sedang berenang",
      ],
      answer: 1,
      poin: 10,
    },
    {
      audioText: "Turn left at the corner",
      options: [
        "Belok kanan di sudut",
        "Jalan lurus terus",
        "Belok kiri di sudut",
        "Berhenti di jalan",
      ],
      answer: 2,
      poin: 15,
    },
    {
      audioText: "I go to school",
      options: [
        "Saya pergi ke sekolah",
        "Saya makan nasi",
        "Saya tidur",
        "Saya bermain",
      ],
      answer: 0,
      poin: 10,
    },
    {
      audioText: "She is cooking",
      options: ["Dia sedang memasak", "Dia tidur", "Dia berlari", "Dia makan"],
      answer: 0,
      poin: 10,
    },
    {
      audioText: "The spaceship lands on Mars",
      options: [
        "Pesawat luar angkasa terbang ke bulan",
        "Pesawat luar angkasa mendarat di Mars",
        "Astronot berjalan di Mars",
        "Pesawat mendarat di Bumi",
      ],
      answer: 1,
      poin: 15,
    },
    {
      audioText: "I love playing guitar",
      options: [
        "Saya suka mendengarkan musik",
        "Saya suka bernyanyi",
        "Saya suka bermain gitar",
        "Saya bermain piano",
      ],
      answer: 2,
      poin: 10,
    },
    {
      audioText: "He drinks water",
      options: ["Dia minum air", "Dia makan nasi", "Dia tidur", "Dia pergi"],
      answer: 0,
      poin: 10,
    },
    {
      audioText: "The cashier gives me the receipt",
      options: [
        "Kasir memberikan saya uang",
        "Kasir memberikan saya struk",
        "Pelanggan memberikan saya struk",
        "Saya memberikan kasir struk",
      ],
      answer: 1,
      poin: 15,
    },
  ],

  grammar: [
    {
      idText: "Kasir menyapa pelanggan dengan sopan",
      enCorrect: ["The", "cashier", "greets", "the", "customer", "politely"],
      jumbled: [
        "customer",
        "The",
        "cashier",
        "greets",
        "politely",
        "the",
        "greet",
        "is",
      ],
      hint: "Gunakan simple present. Subjek tunggal 'cashier' memakai verb + s.",
      poin: 20,
    },
    {
      idText: "Saya sudah membayar barang ini",
      enCorrect: ["I", "have", "paid", "for", "this", "item"],
      jumbled: ["have", "I", "paid", "for", "this", "item", "pay", "am"],
      hint: "Gunakan present perfect: have + V3 (paid).",
      poin: 30,
    },
    {
      idText: "Dia akan mengirim barang besok",
      enCorrect: ["He", "will", "send", "the", "item", "tomorrow"],
      jumbled: ["will", "He", "send", "item", "the", "tomorrow", "is"],
      hint: "Gunakan future tense: will + verb.",
      poin: 25,
    },
    {
      idText: "Kami sedang memproses pesanan Anda",
      enCorrect: ["We", "are", "processing", "your", "order"],
      jumbled: ["We", "processing", "are", "your", "order", "process"],
      hint: "Gunakan present continuous: are + verb-ing.",
      poin: 25,
    },
    // Additional grammar entries (retail / warranty)
    {
      idText: "Apakah Anda memiliki nomor seri produk",
      enCorrect: ["Do", "you", "have", "the", "product", "serial", "number"],
      jumbled: ["have", "Do", "you", "number", "serial", "the", "product"],
      hint: "Gunakan Do + subject + verb untuk pertanyaan simple present.",
      poin: 30,
    },
    {
      idText: "Tolong berikan kemasan asli dan kotak produk",
      enCorrect: [
        "Please",
        "provide",
        "the",
        "original",
        "packaging",
        "and",
        "product",
        "box",
      ],
      jumbled: [
        "provide",
        "Please",
        "box",
        "product",
        "the",
        "original",
        "packaging",
        "and",
      ],
      hint: "Gunakan please + verb 1 untuk permintaan sopan.",
      poin: 30,
    },
    {
      idText: "Jika barang cacat, ajukan klaim garansi",
      enCorrect: [
        "If",
        "the",
        "item",
        "is",
        "defective",
        "claim",
        "the",
        "warranty",
      ],
      jumbled: [
        "If",
        "the",
        "item",
        "is",
        "defective",
        "the",
        "warranty",
        "claim",
      ],
      hint: "Gunakan If + clause lalu imperative/statement.",
      poin: 35,
    },
    {
      idText: "Produk ini lebih mahal dari yang itu",
      enCorrect: [
        "This",
        "product",
        "is",
        "more",
        "expensive",
        "than",
        "that",
        "one",
      ],
      jumbled: [
        "product",
        "This",
        "is",
        "more",
        "expensive",
        "than",
        "that",
        "one",
      ],
      hint: "Gunakan comparative: more + adjective + than.",
      poin: 30,
    },
    {
      idText: "Saya tidak menerima pembayaran kartu kredit",
      enCorrect: ["I", "do", "not", "accept", "credit", "card", "payments"],
      jumbled: ["I", "do", "not", "accept", "credit", "card", "payments", "am"],
      hint: "Gunakan do not untuk kalimat negatif.",
      poin: 25,
    },
    {
      idText: "Apakah Anda sudah menerima barangnya?",
      enCorrect: ["Have", "you", "received", "the", "item"],
      jumbled: ["Have", "you", "received", "item", "the", "did"],
      hint: "Gunakan present perfect question: Have + subject + V3.",
      poin: 30,
    },
    {
      idText: "Dia bekerja sebagai kasir",
      enCorrect: ["He", "works", "as", "a", "cashier"],
      jumbled: ["He", "works", "as", "cashier", "a", "work"],
      hint: "Gunakan verb s/es untuk subjek tunggal.",
      poin: 20,
    },
    {
      idText: "Kami akan memberikan diskon khusus",
      enCorrect: ["We", "will", "give", "a", "special", "discount"],
      jumbled: ["We", "will", "give", "special", "discount", "a"],
      hint: "Gunakan future tense: will.",
      poin: 25,
    },
    {
      idText: "Pelanggan bertanya tentang harga laptop",
      enCorrect: [
        "The",
        "customer",
        "asks",
        "about",
        "the",
        "price",
        "of",
        "the",
        "laptop",
      ],
      jumbled: [
        "asks",
        "customer",
        "about",
        "price",
        "laptop",
        "The",
        "the",
        "the",
        "of",
        "is",
      ],
      hint: "Gunakan 'asks about' untuk arti bertanya tentang.",
      poin: 25,
    },
    {
      idText: "Kasir sedang memindai barcode produk",
      enCorrect: [
        "The",
        "cashier",
        "is",
        "scanning",
        "the",
        "product",
        "barcode",
      ],
      jumbled: [
        "scanning",
        "cashier",
        "The",
        "is",
        "barcode",
        "product",
        "the",
        "scan",
      ],
      hint: "Gunakan present continuous: is + verb-ing.",
      poin: 25,
    },
    {
      idText: "Pelanggan membayar dengan uang tunai",
      enCorrect: ["The", "customer", "pays", "with", "cash"],
      jumbled: ["customer", "cash", "pays", "with", "The", "pay", "is"],
      hint: "Gunakan simple present: customer + pays.",
      poin: 20,
    },
    {
      idText: "Kasir memberikan kembalian kepada pelanggan",
      enCorrect: ["The", "cashier", "gives", "change", "to", "the", "customer"],
      jumbled: [
        "cashier",
        "gives",
        "change",
        "customer",
        "to",
        "the",
        "The",
        "give",
      ],
      hint: "Gunakan pola: gives + object + to + person.",
      poin: 25,
    },
    {
      idText: "Kasir mencetak struk setelah pembayaran selesai",
      enCorrect: [
        "The",
        "cashier",
        "prints",
        "the",
        "receipt",
        "after",
        "the",
        "payment",
        "is",
        "complete",
      ],
      jumbled: [
        "prints",
        "receipt",
        "after",
        "payment",
        "complete",
        "The",
        "cashier",
        "the",
        "is",
        "the",
      ],
      hint: "Gunakan simple present dan 'after' untuk setelah.",
      poin: 30,
    },
    {
      idText: "Pelanggan menyimpan struk untuk garansi",
      enCorrect: [
        "The",
        "customer",
        "keeps",
        "the",
        "receipt",
        "for",
        "warranty",
      ],
      jumbled: [
        "customer",
        "keeps",
        "receipt",
        "for",
        "warranty",
        "The",
        "the",
        "keep",
      ],
      hint: "Gunakan 'keeps the receipt for warranty'.",
      poin: 25,
    },
    {
      idText: "Staf penjualan menjelaskan spesifikasi produk",
      enCorrect: [
        "The",
        "sales",
        "staff",
        "explains",
        "the",
        "product",
        "specifications",
      ],
      jumbled: [
        "sales",
        "staff",
        "explains",
        "product",
        "specifications",
        "The",
        "the",
        "explain",
      ],
      hint: "Subjek 'sales staff' dianggap tunggal, gunakan 'explains'.",
      poin: 30,
    },
    {
      idText: "Toko menjual laptop dan printer",
      enCorrect: ["The", "store", "sells", "laptops", "and", "printers"],
      jumbled: ["store", "sells", "laptops", "and", "printers", "The", "sell"],
      hint: "Gunakan simple present: store + sells.",
      poin: 20,
    },
    {
      idText: "Kami tidak menjual ponsel di toko ini",
      enCorrect: [
        "We",
        "do",
        "not",
        "sell",
        "mobile",
        "phones",
        "in",
        "this",
        "store",
      ],
      jumbled: [
        "We",
        "not",
        "do",
        "sell",
        "phones",
        "mobile",
        "store",
        "this",
        "in",
      ],
      hint: "Gunakan do not + verb 1.",
      poin: 30,
    },
    {
      idText: "Toko ini menjual aksesoris seluler",
      enCorrect: ["This", "store", "sells", "mobile", "accessories"],
      jumbled: [
        "store",
        "This",
        "sells",
        "mobile",
        "accessories",
        "sell",
        "is",
      ],
      hint: "Subjek tunggal 'This store' memakai sells.",
      poin: 25,
    },
    {
      idText: "Pelanggan ingin membeli keyboard baru",
      enCorrect: [
        "The",
        "customer",
        "wants",
        "to",
        "buy",
        "a",
        "new",
        "keyboard",
      ],
      jumbled: [
        "customer",
        "wants",
        "to",
        "buy",
        "keyboard",
        "new",
        "a",
        "The",
        "want",
      ],
      hint: "Gunakan wants + to + verb 1.",
      poin: 30,
    },
    {
      idText: "Laptop ini memiliki garansi resmi satu tahun",
      enCorrect: [
        "This",
        "laptop",
        "has",
        "a",
        "one",
        "year",
        "official",
        "warranty",
      ],
      jumbled: [
        "laptop",
        "This",
        "has",
        "one",
        "year",
        "official",
        "warranty",
        "a",
        "have",
      ],
      hint: "Gunakan has untuk subjek tunggal.",
      poin: 35,
    },
    {
      idText: "Printer ini cocok untuk kantor",
      enCorrect: ["This", "printer", "is", "suitable", "for", "office", "use"],
      jumbled: [
        "printer",
        "This",
        "is",
        "suitable",
        "for",
        "office",
        "use",
        "are",
      ],
      hint: "Gunakan to be 'is' untuk benda tunggal.",
      poin: 25,
    },
    {
      idText: "Speaker ini memiliki suara yang jernih",
      enCorrect: ["This", "speaker", "has", "clear", "sound"],
      jumbled: ["speaker", "This", "has", "clear", "sound", "have", "is"],
      hint: "Gunakan has untuk menyatakan memiliki.",
      poin: 20,
    },
    {
      idText: "Earbud TWS ini mudah disambungkan",
      enCorrect: ["These", "TWS", "earbuds", "are", "easy", "to", "connect"],
      jumbled: [
        "TWS",
        "earbuds",
        "These",
        "are",
        "easy",
        "to",
        "connect",
        "is",
      ],
      hint: "Karena earbuds jamak, gunakan 'are'.",
      poin: 30,
    },
    {
      idText: "Pembayaran kartu debit tidak memiliki biaya tambahan",
      enCorrect: [
        "Debit",
        "card",
        "payment",
        "does",
        "not",
        "have",
        "an",
        "additional",
        "fee",
      ],
      jumbled: [
        "Debit",
        "card",
        "payment",
        "does",
        "not",
        "have",
        "additional",
        "fee",
        "an",
        "has",
      ],
      hint: "Gunakan does not + have.",
      poin: 35,
    },
    {
      idText: "Pembayaran kartu kredit memiliki biaya tambahan",
      enCorrect: [
        "Credit",
        "card",
        "payment",
        "has",
        "an",
        "additional",
        "fee",
      ],
      jumbled: [
        "Credit",
        "card",
        "payment",
        "has",
        "additional",
        "fee",
        "an",
        "have",
      ],
      hint: "Gunakan has untuk subjek tunggal.",
      poin: 30,
    },
    {
      idText: "Biaya kartu kredit adalah dua koma lima persen",
      enCorrect: [
        "The",
        "credit",
        "card",
        "fee",
        "is",
        "two",
        "point",
        "five",
        "percent",
      ],
      jumbled: [
        "credit",
        "card",
        "fee",
        "is",
        "two",
        "point",
        "five",
        "percent",
        "The",
        "are",
      ],
      hint: "Gunakan 'two point five percent' untuk 2.5%.",
      poin: 35,
    },
    {
      idText: "Kasir menunggu sampai pembayaran disetujui",
      enCorrect: [
        "The",
        "cashier",
        "waits",
        "until",
        "the",
        "payment",
        "is",
        "approved",
      ],
      jumbled: [
        "cashier",
        "waits",
        "until",
        "payment",
        "approved",
        "The",
        "the",
        "is",
        "wait",
      ],
      hint: "Gunakan waits until + clause.",
      poin: 35,
    },
    {
      idText: "Pembayaran gagal karena kartu ditolak",
      enCorrect: [
        "The",
        "payment",
        "failed",
        "because",
        "the",
        "card",
        "was",
        "declined",
      ],
      jumbled: [
        "payment",
        "failed",
        "because",
        "card",
        "declined",
        "The",
        "the",
        "was",
        "is",
      ],
      hint: "Gunakan past tense: failed, was declined.",
      poin: 35,
    },
    {
      idText: "Kasir meminta pelanggan mencoba metode pembayaran lain",
      enCorrect: [
        "The",
        "cashier",
        "asks",
        "the",
        "customer",
        "to",
        "try",
        "another",
        "payment",
        "method",
      ],
      jumbled: [
        "cashier",
        "asks",
        "customer",
        "to",
        "try",
        "another",
        "payment",
        "method",
        "The",
        "the",
      ],
      hint: "Gunakan asks + person + to + verb.",
      poin: 40,
    },
    {
      idText: "Pelanggan harus membawa struk asli",
      enCorrect: [
        "The",
        "customer",
        "must",
        "bring",
        "the",
        "original",
        "receipt",
      ],
      jumbled: [
        "customer",
        "must",
        "bring",
        "original",
        "receipt",
        "The",
        "the",
        "brings",
      ],
      hint: "Setelah must gunakan verb 1.",
      poin: 30,
    },
    {
      idText: "Produk dapat ditukar jika rusak",
      enCorrect: [
        "The",
        "product",
        "can",
        "be",
        "exchanged",
        "if",
        "it",
        "is",
        "damaged",
      ],
      jumbled: [
        "product",
        "can",
        "be",
        "exchanged",
        "if",
        "it",
        "is",
        "damaged",
        "The",
        "exchange",
      ],
      hint: "Gunakan passive: can be exchanged.",
      poin: 40,
    },
    {
      idText: "Garansi tidak mencakup kerusakan fisik",
      enCorrect: [
        "The",
        "warranty",
        "does",
        "not",
        "cover",
        "physical",
        "damage",
      ],
      jumbled: [
        "warranty",
        "does",
        "not",
        "cover",
        "physical",
        "damage",
        "The",
        "covers",
      ],
      hint: "Gunakan does not + verb 1.",
      poin: 35,
    },
    {
      idText: "Toko akan memeriksa produk sebelum menyetujui pengembalian",
      enCorrect: [
        "The",
        "store",
        "will",
        "check",
        "the",
        "product",
        "before",
        "approving",
        "the",
        "return",
      ],
      jumbled: [
        "store",
        "will",
        "check",
        "product",
        "before",
        "approving",
        "return",
        "The",
        "the",
        "the",
      ],
      hint: "Gunakan will + verb 1, lalu before + verb-ing.",
      poin: 45,
    },
    {
      idText: "Kasir memasukkan produk ke dalam kantong kertas",
      enCorrect: [
        "The",
        "cashier",
        "puts",
        "the",
        "product",
        "into",
        "a",
        "paper",
        "bag",
      ],
      jumbled: [
        "cashier",
        "puts",
        "product",
        "into",
        "paper",
        "bag",
        "The",
        "the",
        "a",
      ],
      hint: "Gunakan puts + object + into.",
      poin: 35,
    },
    {
      idText: "Pelanggan meminta kasir membungkus produk",
      enCorrect: [
        "The",
        "customer",
        "asks",
        "the",
        "cashier",
        "to",
        "wrap",
        "the",
        "product",
      ],
      jumbled: [
        "customer",
        "asks",
        "cashier",
        "to",
        "wrap",
        "product",
        "The",
        "the",
        "the",
      ],
      hint: "Gunakan asks + person + to + verb.",
      poin: 40,
    },
    {
      idText: "Staf penjualan memberikan bonus gratis",
      enCorrect: ["The", "sales", "staff", "gives", "a", "free", "bonus"],
      jumbled: ["sales", "staff", "gives", "free", "bonus", "The", "a", "give"],
      hint: "Gunakan gives karena subjek dianggap tunggal.",
      poin: 30,
    },
    {
      idText: "Pelanggan mendapatkan diskon setelah membeli dua aksesori",
      enCorrect: [
        "The",
        "customer",
        "gets",
        "a",
        "discount",
        "after",
        "buying",
        "two",
        "accessories",
      ],
      jumbled: [
        "customer",
        "gets",
        "discount",
        "after",
        "buying",
        "two",
        "accessories",
        "The",
        "a",
      ],
      hint: "Gunakan after + verb-ing.",
      poin: 40,
    },
    {
      idText: "Barang ini sedang habis stok",
      enCorrect: ["This", "item", "is", "out", "of", "stock"],
      jumbled: ["item", "This", "is", "out", "of", "stock", "are"],
      hint: "Gunakan frasa 'out of stock'.",
      poin: 25,
    },
    {
      idText: "Produk ini tersedia hari ini",
      enCorrect: ["This", "product", "is", "available", "today"],
      jumbled: ["product", "This", "is", "available", "today", "are"],
      hint: "Gunakan is available.",
      poin: 20,
    },
    {
      idText: "Pelanggan sedang menunggu paket",
      enCorrect: ["The", "customer", "is", "waiting", "for", "the", "package"],
      jumbled: [
        "customer",
        "is",
        "waiting",
        "for",
        "package",
        "The",
        "the",
        "waits",
      ],
      hint: "Gunakan is waiting for.",
      poin: 30,
    },
    {
      idText: "Silakan periksa barang sebelum meninggalkan toko",
      enCorrect: [
        "Please",
        "check",
        "the",
        "item",
        "before",
        "leaving",
        "the",
        "store",
      ],
      jumbled: [
        "Please",
        "check",
        "item",
        "before",
        "leaving",
        "store",
        "the",
        "the",
      ],
      hint: "Gunakan please + verb 1, lalu before + verb-ing.",
      poin: 35,
    },
    {
      idText: "Kasir sudah mencetak struk",
      enCorrect: ["The", "cashier", "has", "printed", "the", "receipt"],
      jumbled: ["cashier", "has", "printed", "receipt", "The", "the", "prints"],
      hint: "Gunakan present perfect: has + verb 3.",
      poin: 35,
    },
    {
      idText: "Pelanggan telah memilih laptop baru",
      enCorrect: ["The", "customer", "has", "chosen", "a", "new", "laptop"],
      jumbled: [
        "customer",
        "has",
        "chosen",
        "new",
        "laptop",
        "The",
        "a",
        "choose",
      ],
      hint: "Gunakan has + verb 3: chosen.",
      poin: 35,
    },
    {
      idText: "Saya masih belajar bahasa Inggris",
      enCorrect: ["I", "am", "still", "learning", "English"],
      jumbled: ["I", "am", "still", "learning", "English", "learn", "is"],
      hint: "Gunakan present continuous: am + verb-ing.",
      poin: 25,
    },
    {
      idText: "Tolong koreksi saya jika saya membuat kesalahan",
      enCorrect: ["Please", "correct", "me", "if", "I", "make", "a", "mistake"],
      jumbled: [
        "Please",
        "correct",
        "me",
        "if",
        "I",
        "make",
        "a",
        "mistake",
        "making",
      ],
      hint: "Gunakan please + verb 1.",
      poin: 35,
    },
    {
      idText: "Bisakah kamu mengulanginya lebih pelan",
      enCorrect: ["Can", "you", "repeat", "that", "more", "slowly"],
      jumbled: ["Can", "you", "repeat", "that", "more", "slowly", "repeated"],
      hint: "Gunakan can + subject + verb 1.",
      poin: 30,
    },
    {
      idText: "Saya tidak mengerti arti kata ini",
      enCorrect: [
        "I",
        "do",
        "not",
        "understand",
        "the",
        "meaning",
        "of",
        "this",
        "word",
      ],
      jumbled: [
        "I",
        "do",
        "not",
        "understand",
        "the",
        "meaning",
        "of",
        "this",
        "word",
        "understands",
      ],
      hint: "Gunakan do not + verb 1.",
      poin: 40,
    },
    {
      idText: "Kalimat ini sulit tetapi saya akan terus mencoba",
      enCorrect: [
        "This",
        "sentence",
        "is",
        "difficult",
        "but",
        "I",
        "will",
        "keep",
        "trying",
      ],
      jumbled: [
        "This",
        "sentence",
        "is",
        "difficult",
        "but",
        "I",
        "will",
        "keep",
        "trying",
        "try",
      ],
      hint: "Gunakan will + keep + verb-ing.",
      poin: 45,
    },
    {
      idText: "Saya membutuhkan lebih banyak latihan",
      enCorrect: ["I", "need", "more", "practice"],
      jumbled: ["I", "need", "more", "practice", "needs", "practicing"],
      hint: "Gunakan simple present: I need.",
      poin: 20,
    },
    {
      idText: "Saya ingin meningkatkan pengucapan saya",
      enCorrect: ["I", "want", "to", "improve", "my", "pronunciation"],
      jumbled: [
        "I",
        "want",
        "to",
        "improve",
        "my",
        "pronunciation",
        "improving",
      ],
      hint: "Gunakan want + to + verb 1.",
      poin: 35,
    },
    {
      idText: "Meskipun kata ini sulit saya akan melatihnya",
      enCorrect: [
        "Although",
        "this",
        "word",
        "is",
        "difficult",
        "I",
        "will",
        "practice",
        "it",
      ],
      jumbled: [
        "Although",
        "this",
        "word",
        "is",
        "difficult",
        "I",
        "will",
        "practice",
        "it",
        "practicing",
      ],
      hint: "Gunakan although di awal kalimat.",
      poin: 45,
    },
    {
      idText: "Dia menjelaskan perbedaan antara dua kata",
      enCorrect: [
        "She",
        "explains",
        "the",
        "difference",
        "between",
        "two",
        "words",
      ],
      jumbled: [
        "She",
        "explains",
        "the",
        "difference",
        "between",
        "two",
        "words",
        "explain",
      ],
      hint: "Subjek she memakai verb + s.",
      poin: 40,
    },
    {
      idText: "Kalimat panjang masih sulit bagi saya",
      enCorrect: [
        "Long",
        "sentences",
        "are",
        "still",
        "difficult",
        "for",
        "me",
      ],
      jumbled: [
        "Long",
        "sentences",
        "are",
        "still",
        "difficult",
        "for",
        "me",
        "is",
      ],
      hint: "Karena sentences jamak, gunakan are.",
      poin: 35,
    },
    {
      idText: "Kasir sedang memproses transaksi",
      enCorrect: ["The", "cashier", "is", "processing", "the", "transaction"],
      jumbled: [
        "cashier",
        "is",
        "processing",
        "transaction",
        "The",
        "the",
        "process",
      ],
      hint: "Gunakan is + verb-ing.",
      poin: 30,
    },
    {
      idText: "Staf penjualan akan mengirim barang besok",
      enCorrect: [
        "The",
        "sales",
        "staff",
        "will",
        "send",
        "the",
        "item",
        "tomorrow",
      ],
      jumbled: [
        "sales",
        "staff",
        "will",
        "send",
        "item",
        "tomorrow",
        "The",
        "the",
        "sends",
      ],
      hint: "Gunakan will + verb 1.",
      poin: 35,
    },
    {
      idText: "Pelanggan tidak ingin menggunakan kartu kredit",
      enCorrect: [
        "The",
        "customer",
        "does",
        "not",
        "want",
        "to",
        "use",
        "a",
        "credit",
        "card",
      ],
      jumbled: [
        "customer",
        "does",
        "not",
        "want",
        "to",
        "use",
        "credit",
        "card",
        "The",
        "a",
      ],
      hint: "Gunakan does not want to + verb.",
      poin: 40,
    },
    {
      idText: "Saya mau makan apel",
      enCorrect: ["I", "want", "to", "eat", "an", "apple"],
      jumbled: ["eat", "apple", "an", "I", "want", "to", "am", "is"],
      hint: "Gunakan kata kerja 'want', lalu 'to' sebelum verb 'eat'.",
      poin: 15,
    },
    {
      idText: "Burung itu sangat kecil",
      enCorrect: ["The", "bird", "is", "very", "small"],
      jumbled: ["very", "is", "small", "bird", "The", "are", "big"],
      hint: "Subjeknya tunggal, jadi gunakan to be 'is'.",
      poin: 15,
    },
    {
      idText: "Dia perempuan sedang membaca buku",
      enCorrect: ["She", "is", "reading", "a", "book"],
      jumbled: ["She", "is", "He", "read", "reading", "a", "an", "book"],
      hint: "Gunakan present continuous: is + verb-ing.",
      poin: 20,
    },
    {
      idText: "Saya bangun jam enam pagi",
      enCorrect: ["I", "wake", "up", "at", "six", "in", "the", "morning"],
      jumbled: ["wake", "I", "morning", "at", "six", "in", "up", "the", "on"],
      hint: "Gunakan 'wake up' dan 'at' untuk waktu spesifik.",
      poin: 20,
    },
    {
      idText: "Dia sedang membayar belanjaannya",
      enCorrect: ["He", "is", "paying", "for", "his", "groceries"],
      jumbled: ["paying", "He", "is", "for", "his", "groceries", "pay", "the"],
      hint: "Gunakan is + verb-ing.",
      poin: 25,
    },
    {
      idText: "Saya makan nasi",
      enCorrect: ["I", "eat", "rice"],
      jumbled: ["eat", "rice", "I", "am"],
      hint: "Gunakan simple present: I eat rice.",
      poin: 10,
    },
    {
      idText: "Dia sedang minum air",
      enCorrect: ["He", "is", "drinking", "water"],
      jumbled: ["He", "drink", "is", "drinking", "water"],
      hint: "Gunakan is + verb-ing.",
      poin: 15,
    },
    {
      idText: "Dia suka bermain gitar",
      enCorrect: ["He", "likes", "playing", "the", "guitar"],
      jumbled: ["likes", "He", "play", "playing", "the", "guitar", "is"],
      hint: "Gunakan verb s/es setelah subjek singular.",
      poin: 20,
    },
    {
      idText: "Bumi mengelilingi matahari",
      enCorrect: ["The", "Earth", "goes", "around", "the", "sun"],
      jumbled: ["Earth", "goes", "around", "The", "the", "sun", "go", "is"],
      hint: "Bumi (The Earth) adalah subjek tunggal, gunakan verb s/es 'goes'.",
      poin: 25,
    },
    {
      idText: "Saya akan pergi ke sekolah besok pagi",
      enCorrect: ["I", "will", "go", "to", "school", "tomorrow", "morning"],
      jumbled: ["go", "I", "school", "will", "tomorrow", "morning", "to", "am"],
      hint: "Gunakan future tense: will + verb 1.",
      poin: 20,
    },
    {
      idText: "Kartu debit tidak dikenakan biaya tambahan",
      enCorrect: [
        "Debit",
        "card",
        "payment",
        "does",
        "not",
        "have",
        "an",
        "additional",
        "fee",
      ],
      jumbled: [
        "Debit",
        "card",
        "payment",
        "does",
        "not",
        "have",
        "additional",
        "fee",
        "an",
        "has",
      ],
      hint: "Gunakan does not + have untuk subjek tunggal.",
      poin: 35,
    },
    {
      idText: "Pembayaran kartu kredit dikenakan biaya tambahan",
      enCorrect: [
        "Credit",
        "card",
        "payment",
        "has",
        "an",
        "additional",
        "fee",
      ],
      jumbled: [
        "Credit",
        "card",
        "payment",
        "has",
        "additional",
        "fee",
        "an",
        "have",
      ],
      hint: "Gunakan has untuk subjek tunggal.",
      poin: 35,
    },
    {
      idText: "Biaya tambahan kartu kredit adalah dua koma lima persen",
      enCorrect: [
        "The",
        "credit",
        "card",
        "additional",
        "fee",
        "is",
        "two",
        "point",
        "five",
        "percent",
      ],
      jumbled: [
        "credit",
        "card",
        "additional",
        "fee",
        "is",
        "two",
        "point",
        "five",
        "percent",
        "The",
        "are",
      ],
      hint: "2.5% dalam bahasa Inggris adalah two point five percent.",
      poin: 40,
    },
    {
      idText: "Biaya tambahan dihitung dari harga barang saat ini",
      enCorrect: [
        "The",
        "additional",
        "fee",
        "is",
        "calculated",
        "from",
        "the",
        "current",
        "item",
        "price",
      ],
      jumbled: [
        "additional",
        "fee",
        "is",
        "calculated",
        "from",
        "current",
        "item",
        "price",
        "The",
        "the",
      ],
      hint: "Gunakan passive voice: is calculated from.",
      poin: 45,
    },
    {
      idText:
        "Jika pelanggan menggunakan kartu kredit, biaya tambahan adalah dua koma lima persen",
      enCorrect: [
        "If",
        "the",
        "customer",
        "uses",
        "a",
        "credit",
        "card",
        "the",
        "additional",
        "fee",
        "is",
        "two",
        "point",
        "five",
        "percent",
      ],
      jumbled: [
        "If",
        "the",
        "customer",
        "uses",
        "a",
        "credit",
        "card",
        "the",
        "additional",
        "fee",
        "is",
        "two",
        "point",
        "five",
        "percent",
      ],
      hint: "Gunakan If + subject + verb s/es, lalu additional fee is.",
      poin: 50,
    },
    {
      idText:
        "Jika pelanggan menggunakan kartu debit, tidak ada biaya tambahan",
      enCorrect: [
        "If",
        "the",
        "customer",
        "uses",
        "a",
        "debit",
        "card",
        "there",
        "is",
        "no",
        "additional",
        "fee",
      ],
      jumbled: [
        "If",
        "the",
        "customer",
        "uses",
        "a",
        "debit",
        "card",
        "there",
        "is",
        "no",
        "additional",
        "fee",
      ],
      hint: "Gunakan there is no additional fee.",
      poin: 45,
    },
    {
      idText:
        "Total pembayaran kartu kredit termasuk biaya tambahan dua koma lima persen",
      enCorrect: [
        "The",
        "credit",
        "card",
        "total",
        "payment",
        "includes",
        "a",
        "two",
        "point",
        "five",
        "percent",
        "additional",
        "fee",
      ],
      jumbled: [
        "The",
        "credit",
        "card",
        "total",
        "payment",
        "includes",
        "a",
        "two",
        "point",
        "five",
        "percent",
        "additional",
        "fee",
      ],
      hint: "Gunakan includes untuk menyatakan termasuk.",
      poin: 50,
    },
    {
      idText: "Mereka sedang bermain sepak bola di lapangan",
      enCorrect: ["They", "are", "playing", "football", "on", "the", "field"],
      jumbled: [
        "playing",
        "They",
        "are",
        "football",
        "field",
        "on",
        "the",
        "play",
      ],
      hint: "Gunakan are + verb-ing untuk jamak.",
      poin: 20,
    },
    {
      idText: "Saya sudah menyelesaikan pekerjaan rumah saya",
      enCorrect: ["I", "have", "finished", "my", "homework"],
      jumbled: ["I", "finished", "have", "my", "homework", "finish", "am"],
      hint: "Gunakan present perfect: have + verb 3.",
      poin: 25,
    },
    {
      idText: "Dia pergi ke pasar setiap hari",
      enCorrect: ["He", "goes", "to", "the", "market", "every", "day"],
      jumbled: ["He", "go", "market", "goes", "the", "every", "day", "to"],
      hint: "Gunakan verb s/es untuk he/she.",
      poin: 15,
    },
    {
      idText:
        "Jika saya punya waktu luang, saya akan belajar bahasa Inggris lebih banyak",
      enCorrect: [
        "If",
        "I",
        "have",
        "free",
        "time",
        "I",
        "will",
        "study",
        "English",
        "more",
      ],
      jumbled: [
        "I",
        "I",
        "If",
        "have",
        "time",
        "free",
        "will",
        "study",
        "English",
        "more",
        "am",
      ],
      hint: "Gunakan if + present, lalu will.",
      poin: 30,
    },
    {
      idText: "Dia tidak datang ke sekolah karena dia sedang sakit",
      enCorrect: [
        "He",
        "does",
        "not",
        "come",
        "to",
        "school",
        "because",
        "he",
        "is",
        "sick",
      ],
      jumbled: [
        "He",
        "he",
        "not",
        "does",
        "come",
        "school",
        "because",
        "is",
        "sick",
        "to",
      ],
      hint: "Gunakan does not + verb 1.",
      poin: 30,
    },
    {
      idText: "Kami sedang menonton film ketika listrik tiba-tiba mati",
      enCorrect: [
        "We",
        "were",
        "watching",
        "a",
        "movie",
        "when",
        "the",
        "power",
        "went",
        "out",
      ],
      jumbled: [
        "We",
        "watching",
        "were",
        "movie",
        "a",
        "when",
        "power",
        "went",
        "out",
        "the",
      ],
      hint: "Gunakan past continuous + past simple.",
      poin: 35,
    },
    {
      idText:
        "Guru menjelaskan pelajaran dengan sangat jelas sehingga siswa dapat memahaminya",
      enCorrect: [
        "The",
        "teacher",
        "explained",
        "the",
        "lesson",
        "very",
        "clearly",
        "so",
        "the",
        "students",
        "could",
        "understand",
        "it",
      ],
      jumbled: [
        "teacher",
        "The",
        "explained",
        "lesson",
        "very",
        "clearly",
        "students",
        "could",
        "understand",
        "it",
        "the",
        "the",
        "so",
      ],
      hint: "Gunakan past tense + could.",
      poin: 40,
    },
    {
      idText:
        "Jika dia belajar lebih giat, dia akan mendapatkan nilai yang lebih baik",
      enCorrect: [
        "If",
        "he",
        "studies",
        "harder",
        "he",
        "will",
        "get",
        "better",
        "grades",
      ],
      jumbled: [
        "If",
        "he",
        "he",
        "study",
        "harder",
        "will",
        "get",
        "better",
        "grades",
        "studies",
      ],
      hint: "Gunakan conditional: if + present, will + verb.",
      poin: 40,
    },
    {
      idText: "Buku itu telah dibaca oleh banyak siswa di sekolah ini",
      enCorrect: [
        "The",
        "book",
        "has",
        "been",
        "read",
        "by",
        "many",
        "students",
        "in",
        "this",
        "school",
      ],
      jumbled: [
        "book",
        "The",
        "has",
        "been",
        "read",
        "by",
        "students",
        "many",
        "school",
        "this",
        "in",
      ],
      hint: "Gunakan passive voice: has been + verb 3.",
      poin: 45,
    },
    {
      idText: "Saya tidak tahu bahwa dia sudah pindah ke kota lain",
      enCorrect: [
        "I",
        "did",
        "not",
        "know",
        "that",
        "he",
        "had",
        "moved",
        "to",
        "another",
        "city",
      ],
      jumbled: [
        "I",
        "did",
        "not",
        "know",
        "that",
        "he",
        "had",
        "moved",
        "another",
        "city",
        "to",
      ],
      hint: "Gunakan past perfect: had + verb 3.",
      poin: 45,
    },
    {
      idText:
        "Mereka telah bekerja di perusahaan itu selama lebih dari lima tahun",
      enCorrect: [
        "They",
        "have",
        "worked",
        "in",
        "that",
        "company",
        "for",
        "more",
        "than",
        "five",
        "years",
      ],
      jumbled: [
        "They",
        "have",
        "worked",
        "company",
        "that",
        "for",
        "more",
        "than",
        "five",
        "years",
        "in",
      ],
      hint: "Gunakan present perfect + for.",
      poin: 40,
    },
  ],

  speaking: [
    { en: "Good morning", id: "Selamat pagi", poin: 10 },
    { en: "How are you today", id: "Apa kabarmu hari ini", poin: 15 },
    {
      en: "I would like to pay by card",
      id: "Saya ingin membayar dengan kartu",
      poin: 20,
    },
    { en: "Keep the change", id: "Ambil saja kembaliannya", poin: 15 },
    {
      en: "I wake up early everyday",
      id: "Saya bangun pagi setiap hari",
      poin: 15,
    },
    { en: "Can I get a discount", id: "Bisakah saya minta diskon", poin: 15 },
    {
      en: "I need to wash my hands",
      id: "Saya perlu mencuci tangan",
      poin: 10,
    },
    { en: "I love reading books", id: "Saya suka membaca buku", poin: 15 },
    { en: "The magic forest", id: "Hutan ajaib", poin: 15 },
    { en: "See you later", id: "Sampai jumpa nanti", poin: 10 },
    { en: "It is very hot today", id: "Hari ini sangat panas", poin: 10 },
    { en: "Could you help me", id: "Bisakah kamu membantuku", poin: 25 },
    { en: "I am feeling great", id: "Saya merasa hebat", poin: 20 },
    { en: "Excuse me", id: "Permisi", poin: 10 },
    { en: "I am sorry", id: "Saya minta maaf", poin: 10 },
    { en: "No problem", id: "Tidak masalah", poin: 10 },
    { en: "Where is the toilet", id: "Di mana toiletnya", poin: 15 },
    { en: "Can you repeat that", id: "Bisakah kamu mengulanginya", poin: 15 },
    { en: "I do not understand", id: "Saya tidak mengerti", poin: 10 },
    { en: "Nice to meet you", id: "Senang bertemu denganmu", poin: 15 },
    {
      en: "Have a good trip",
      id: "Semoga perjalananmu menyenangkan",
      poin: 15,
    },
    { en: "What time is it", id: "Jam berapa sekarang", poin: 10 },
    { en: "I eat rice", id: "Saya makan nasi", poin: 10 },
    { en: "She is cooking", id: "Dia sedang memasak", poin: 15 },
    { en: "He drinks water", id: "Dia minum air", poin: 10 },
    { en: "I go to school", id: "Saya pergi ke sekolah", poin: 10 },
    {
      en: "I love playing the guitar",
      id: "Saya suka bermain gitar",
      poin: 15,
    },
    { en: "The earth is beautiful", id: "Bumi itu indah", poin: 15 },
    { en: "What is your hobby", id: "Apa hobimu", poin: 10 },
    {
      en: "I want to be an astronaut",
      id: "Saya ingin menjadi astronaut",
      poin: 20,
    },
    {
      en: "Can you take a picture of me",
      id: "Bisakah kamu memfoto saya",
      poin: 25,
    },
  ],

  conversations: [
    {
      title: "Buying a Laptop at the Computer Store",
      desc: "Kamu sebagai pelanggan membeli laptop di toko komputer.",
      turns: [
        {
          speaker: "bot",
          text: "Good afternoon, welcome to our computer store. How can I help you?",
          id_translation:
            "Selamat siang, selamat datang di toko komputer kami. Ada yang bisa saya bantu?",
          expected_options: [
            "Good afternoon, welcome to our computer store. How can I help you?",
            "Hello, welcome to our computer store. How can I assist you?",
            "Hi, welcome to our computer store. What can I do for you?",
          ],
        },
        {
          speaker: "user",
          expected: "I want to buy a laptop",
          id_translation: "Saya ingin membeli laptop.",
          expected_options: [
            "I want to buy a laptop",
            "I would like to buy a laptop",
            "I need a laptop",
            "I want a laptop",
          ],
        },
        {
          speaker: "bot",
          text: "Do you need it for school, office work, or gaming?",
          id_translation:
            "Apakah Anda membutuhkannya untuk sekolah, pekerjaan kantor, atau gaming?",
          expected_options: [
            "Do you need it for school, office work, or gaming?",
            "Is it for school, office work, or gaming?",
            "What do you need it for? School, office work, or gaming?",
          ],
        },
        {
          speaker: "user",
          expected: "I need it for office work",
          id_translation: "Saya membutuhkannya untuk pekerjaan kantor.",
          expected_options: [
            "I need it for office work",
            "For office work",
            "I need it for work",
            "Office work",
          ],
        },
        {
          speaker: "bot",
          text: "This laptop is suitable for office work and online meetings.",
          id_translation:
            "Laptop ini cocok untuk pekerjaan kantor dan rapat online.",
          expected_options: [
            "This laptop is suitable for office work and online meetings.",
            "This laptop is good for office work and online meetings.",
            "This laptop is perfect for office work and online meetings.",
          ],
        },
        {
          speaker: "user",
          expected: "How much is this laptop",
          id_translation: "Berapa harga laptop ini?",
          expected_options: [
            "How much is this laptop",
            "What is the price of this laptop",
            "How much is it",
          ],
        },
        {
          speaker: "bot",
          text: "The price is seven million five hundred thousand rupiah.",
          id_translation: "Harganya tujuh juta lima ratus ribu rupiah.",
          expected_options: [
            "The price is seven million five hundred thousand rupiah.",
            "It costs seven million five hundred thousand rupiah.",
            "The price is 7.5 million rupiah.",
          ],
        },
        {
          speaker: "user",
          expected: "I will take it",
          id_translation: "Saya akan membelinya.",
          expected_options: [
            "I will take it",
            "I want to buy it",
            "I will buy it",
            "Okay I will take it",
          ],
        },
        {
          speaker: "bot",
          text: "Your total payment is three million rupiah.",
          id_translation: "Total pembayaran Anda tiga juta rupiah.",
          expected_options: [
            "Your total payment is three million rupiah.",
            "The total payment is three million rupiah.",
            "You need to pay three million rupiah.",
          ],
        },
        {
          speaker: "user",
          expected: "Can I pay with a credit card",
          id_translation: "Bisakah saya membayar dengan kartu kredit?",
          expected_options: [
            "Can I pay with a credit card",
            "Can I use a credit card",
            "I want to pay with a credit card",
          ],
        },
        {
          speaker: "bot",
          text: "Yes, but credit card payment has an additional fee of two point five percent.",
          id_translation:
            "Bisa, tetapi pembayaran kartu kredit memiliki biaya tambahan dua koma lima persen.",
          expected_options: [
            "Yes, but credit card payment has an additional fee of two point five percent.",
            "Yes, but credit card payment includes an additional fee of two point five percent.",
            "Yes, but credit card payment is subject to an additional fee of two point five percent.",
            "Yes, but credit card payment has a 2.5% additional fee.",
          ],
        },
        {
          speaker: "user",
          expected: "Is debit card free of additional fee",
          id_translation: "Apakah kartu debit bebas biaya tambahan?",
          expected_options: [
            "Is debit card free of additional fee",
            "Does debit card have no additional fee",
            "Is there no additional fee for debit card",
          ],
        },
        {
          speaker: "bot",
          text: "Yes, debit card payment does not have an additional fee.",
          id_translation:
            "Ya, pembayaran kartu debit tidak memiliki biaya tambahan.",
          expected_options: [
            "Yes, debit card payment does not have an additional fee.",
            "Yes, there is no additional fee for debit card payment.",
            "Yes, debit card payment is free of additional fee.",
          ],
        },
        {
          speaker: "user",
          expected: "I will pay with debit card",
          id_translation: "Saya akan membayar dengan kartu debit.",
          expected_options: [
            "I will pay with debit card",
            "I want to pay with debit card",
            "I will use debit card",
          ],
        },
        {
          speaker: "bot",
          text: "Please enter your PIN on the payment machine.",
          id_translation: "Silakan masukkan PIN Anda pada mesin pembayaran.",
          expected_options: [
            "Please enter your PIN on the payment machine.",
            "Please input your PIN on the payment machine.",
            "Please type your PIN on the payment machine.",
          ],
        },
        {
          speaker: "user",
          expected: "Okay thank you",
          id_translation: "Baik, terima kasih.",
          expected_options: [
            "Okay thank you",
            "Thank you",
            "Thanks",
            "Alright thank you",
          ],
        },
        {
          speaker: "bot",
          text: "Hello, are you looking for a printer today?",
          id_translation: "Halo, apakah Anda sedang mencari printer hari ini?",
          expected_options: [
            "Hello, are you looking for a printer today?",
            "Hi, do you need a printer today?",
            "Hello, do you need a printer today?",
          ],
        },
        {
          speaker: "user",
          expected: "Yes I need a printer",
          id_translation: "Ya, saya membutuhkan printer.",
          expected_options: [
            "Yes I need a printer",
            "I need a printer",
            "Yes I want a printer",
          ],
        },
        {
          speaker: "bot",
          text: "Do you need it for home use or office use?",
          id_translation:
            "Apakah Anda membutuhkannya untuk penggunaan rumah atau kantor?",
          expected_options: [
            "Do you need it for home use or office use?",
            "Is it for home use or office use?",
            "What is it for? Home use or office use?",
          ],
        },
        {
          speaker: "user",
          expected: "I need it for home use",
          id_translation: "Saya membutuhkannya untuk penggunaan rumah.",
          expected_options: [
            "I need it for home use",
            "For home use",
            "Home use",
          ],
        },
        {
          speaker: "bot",
          text: "This printer is easy to use and the ink is affordable.",
          id_translation:
            "Printer ini mudah digunakan dan tintanya terjangkau.",
          expected_options: [
            "This printer is easy to use and the ink is affordable.",
            "This printer is user-friendly and the ink is reasonably priced.",
            "This printer is simple to operate and the ink is cost-effective.",
          ],
        },
        {
          speaker: "user",
          expected: "Does it include printer ink",
          id_translation: "Apakah itu termasuk tinta printer?",
          expected_options: [
            "Does it include printer ink",
            "Is printer ink included",
            "Does it come with ink",
          ],
        },
        {
          speaker: "bot",
          text: "Yes, it includes one set of printer ink.",
          id_translation: "Ya, itu termasuk satu set tinta printer.",
          expected_options: [
            "Yes, it includes one set of printer ink.",
            "Yes, it comes with one set of printer ink.",
            "Yes, one set of printer ink is included.",
          ],
        },
        {
          speaker: "user",
          expected: "I will buy this printer",
          id_translation: "Saya akan membeli printer ini.",
          expected_options: [
            "I will buy this printer",
            "I want to buy this printer",
            "I will take this printer",
          ],
        },
        {
          speaker: "bot",
          text: "Hello, do you need speakers, TWS earbuds, or a headset?",
          id_translation:
            "Halo, apakah Anda membutuhkan speaker, earbud TWS, atau headset?",
          expected_options: [
            "Hello, do you need speakers, TWS earbuds, or a headset?",
            "Hi, are you looking for speakers, TWS earbuds, or a headset?",
            "Hello, do you need speakers, TWS earbuds, or a headset today?",
          ],
        },
        {
          speaker: "user",
          expected: "I am looking for TWS earbuds",
          id_translation: "Saya sedang mencari earbud TWS.",
          expected_options: [
            "I am looking for TWS earbuds",
            "I need TWS earbuds",
            "I want TWS earbuds",
          ],
        },
        {
          speaker: "bot",
          text: "These TWS earbuds have clear sound and long battery life.",
          id_translation:
            "Earbud TWS ini memiliki suara jernih dan daya tahan baterai yang lama.",
          expected_options: [
            "These TWS earbuds have clear sound and long battery life.",
            "These TWS earbuds offer clear sound and long battery life.",
            "These TWS earbuds provide clear sound and long battery life.",
          ],
        },
        {
          speaker: "user",
          expected: "Can I test the sound",
          id_translation: "Bisakah saya mencoba suaranya?",
          expected_options: [
            "Can I test the sound",
            "Can I try the sound",
            "May I test the sound",
          ],
        },
        {
          speaker: "bot",
          text: "Of course. Please connect them to your device first.",
          id_translation:
            "Tentu. Silakan sambungkan ke perangkat Anda terlebih dahulu.",
          expected_options: [
            "Of course. Please connect them to your device first.",
            "Sure. Please connect them to your device first.",
            "Yes, please connect them to your device first.",
          ],
        },
        {
          speaker: "user",
          expected: "The sound is clear",
          id_translation: "Suaranya jernih.",
          expected_options: [
            "The sound is clear",
            "It sounds clear",
            "The sound is good",
          ],
        },
        {
          speaker: "bot",
          text: "Great. Would you like to buy this product?",
          id_translation: "Bagus. Apakah Anda ingin membeli produk ini?",
          expected_options: [
            "Great. Would you like to buy this product?",
            "Great. Do you want to buy this product?",
            "Great. Are you interested in buying this product?",
          ],
        },
        {
          speaker: "user",
          expected: "Yes I will buy it",
          id_translation: "Ya, saya akan membelinya.",
          expected_options: [
            "Yes I will buy it",
            "I will buy it",
            "I will take it",
          ],
        },
        {
          speaker: "bot",
          text: "Good morning. How can I help you today?",
          id_translation: "Selamat pagi. Ada yang bisa saya bantu hari ini?",
          expected_options: [
            "Good morning. How can I help you today?",
            "Hello. How can I assist you today?",
            "Hi. What can I do for you today?",
          ],
        },
        {
          speaker: "user",
          expected: "I want to return this item",
          id_translation: "Saya ingin mengembalikan barang ini.",
          expected_options: [
            "I want to return this item",
            "I would like to return this item",
            "I want to return it",
          ],
        },
        {
          speaker: "bot",
          text: "May I see the receipt and the product box?",
          id_translation: "Boleh saya lihat struk dan kotak produknya?",
          expected_options: [
            "May I see the receipt and the product box",
            "Can I see the receipt and the product box",
            "Please show me the receipt and the product box",
          ],
        },
        {
          speaker: "user",
          expected: "Here is the receipt",
          id_translation: "Ini struknya.",
          expected_options: [
            "Here is the receipt",
            "This is the receipt",
            "Here you go",
          ],
        },
        {
          speaker: "bot",
          text: "What is the problem with the item?",
          id_translation: "Apa masalah pada barangnya?",
          expected_options: [
            "What is the problem with the item",
            "What is wrong with the item",
            "What is the issue with the item",
          ],
        },
        {
          speaker: "user",
          expected: "The item is damaged",
          id_translation: "Barangnya rusak.",
          expected_options: [
            "The item is damaged",
            "It is damaged",
            "The product is damaged",
          ],
        },
        {
          speaker: "bot",
          text: "We will check the product before approving the return.",
          id_translation:
            "Kami akan memeriksa produk sebelum menyetujui pengembalian.",
          expected_options: [
            "We will check the product before approving the return",
            "We will inspect the product before approving the return",
            "We will examine the product before approving the return",
          ],
        },
        {
          speaker: "user",
          expected: "Okay I will wait",
          id_translation: "Baik, saya akan menunggu.",
          expected_options: ["Okay I will wait", "I will wait", "Okay"],
        },
        {
          speaker: "bot",
          text: "Hello, what problem do you have with your laptop?",
          id_translation:
            "Halo, masalah apa yang Anda alami dengan laptop Anda?",
          expected_options: [
            "Hello, what problem do you have with your laptop?",
            "Hi, what issue do you have with your laptop?",
            "Hello, what is wrong with your laptop?",
          ],
        },
        {
          speaker: "user",
          expected: "My laptop will not turn on",
          id_translation: "Laptop saya tidak mau menyala.",
          expected_options: [
            "My laptop will not turn on",
            "My laptop does not turn on",
            "The laptop will not turn on",
          ],
        },
        {
          speaker: "bot",
          text: "Do you still have the original receipt?",
          id_translation: "Apakah Anda masih memiliki struk asli?",
          expected_options: [
            "Do you still have the original receipt?",
            "Do you have the original receipt?",
            "Still have the original receipt?",
          ],
        },
        {
          speaker: "user",
          expected: "Yes I have the receipt",
          id_translation: "Ya, saya memiliki struknya.",
          expected_options: [
            "Yes I have the receipt",
            "I have the receipt",
            "Yes here is the receipt",
          ],
        },
        {
          speaker: "bot",
          text: "The warranty does not cover physical damage or water damage.",
          id_translation:
            "Garansi tidak mencakup kerusakan fisik atau kerusakan karena air.",
          expected_options: [
            "The warranty does not cover physical damage or water damage.",
            "The warranty does not include coverage for physical or water damage.",
            "Physical or water damage is not covered by the warranty.",
          ],
        },
        {
          speaker: "user",
          expected: "There is no physical damage",
          id_translation: "Tidak ada kerusakan fisik.",
          expected_options: [
            "There is no physical damage",
            "No physical damage",
            "It has no physical damage",
          ],
        },
        {
          speaker: "bot",
          text: "Alright. We will send it to the service center.",
          id_translation: "Baik. Kami akan mengirimkannya ke pusat servis.",
          expected_options: [
            "Alright. We will send it to the service center.",
            "Okay. We will send it to the service center.",
            "Alright. We will send it to the service center for repair.",
          ],
        },
        {
          speaker: "user",
          expected: "Thank you for your help",
          id_translation: "Terima kasih atas bantuan Anda.",
          expected_options: [
            "Thank you for your help",
            "Thank you",
            "Thanks for your help",
          ],
        },
        {
          speaker: "bot",
          text: "Your laptop purchase includes a free mouse and a laptop bag.",
          id_translation:
            "Pembelian laptop Anda termasuk mouse gratis dan tas laptop.",
          expected_options: [
            "Your laptop purchase includes a free mouse and a laptop bag.",
            "With your laptop purchase, you get a free mouse and a laptop bag.",
            "Your laptop purchase comes with a free mouse and a laptop bag.",
          ],
        },
        {
          speaker: "user",
          expected: "Is the bonus free",
          id_translation: "Apakah bonusnya gratis?",
          expected_options: [
            "Is the bonus free",
            "Is it free",
            "Is the free bonus included",
          ],
        },
        {
          speaker: "bot",
          text: "Yes, the bonus is free and included in the package.",
          id_translation: "Ya, bonusnya gratis dan termasuk dalam paket.",
          expected_options: [
            "Yes, the bonus is free and included in the package.",
            "Yes, the bonus is free and comes with the package.",
            "Yes, the bonus is free and is included in the package.",
          ],
        },
        {
          speaker: "user",
          expected: "Please wrap the item",
          id_translation: "Tolong bungkus barangnya.",
          expected_options: [
            "Please wrap the item",
            "Please wrap it",
            "Can you wrap the item",
          ],
        },
        {
          speaker: "bot",
          text: "Sure. Do you want a paper bag or a plastic bag?",
          id_translation:
            "Tentu. Anda ingin kantong kertas atau kantong plastik?",
          expected_options: [
            "Sure. Do you want a paper bag or a plastic bag?",
            "Sure. Would you like a paper bag or a plastic bag?",
            "Sure. Do you prefer a paper bag or a plastic bag?",
          ],
        },
        {
          speaker: "user",
          expected: "I want a paper bag",
          id_translation: "Saya ingin kantong kertas.",
          expected_options: [
            "I want a paper bag",
            "Paper bag please",
            "A paper bag please",
          ],
        },
        {
          speaker: "bot",
          text: "Please wait a moment while I prepare the package.",
          id_translation:
            "Mohon tunggu sebentar sementara saya menyiapkan paketnya.",
          expected_options: [
            "Please wait a moment while I prepare the package.",
            "Please wait a moment while I prepare it.",
            "Please wait a moment while I get the package ready.",
          ],
        },
        {
          speaker: "user",
          expected: "Okay thank you",
          id_translation: "Baik, terima kasih.",
          expected_options: ["Okay thank you", "Thank you", "Thanks"],
        },
        {
          speaker: "bot",
          text: "Hello, what product are you looking for?",
          id_translation: "Halo, produk apa yang sedang Anda cari?",
          expected_options: [
            "Hello, what product are you looking for?",
            "Hi, what are you looking for?",
            "What product are you interested in?",
          ],
        },
        {
          speaker: "user",
          expected: "I am looking for a projector",
          id_translation: "Saya sedang mencari proyektor.",
          expected_options: [
            "I am looking for a projector",
            "I need a projector",
            "I want a projector",
          ],
        },
        {
          speaker: "bot",
          text: "I am sorry, the projector is currently out of stock.",
          id_translation: "Maaf, proyektor saat ini sedang habis stok.",
          expected_options: [
            "I am sorry, the projector is currently out of stock.",
            "Sorry, the projector is out of stock.",
            "The projector is currently unavailable.",
          ],
        },
        {
          speaker: "user",
          expected: "When will it be available",
          id_translation: "Kapan barang itu akan tersedia?",
          expected_options: [
            "When will it be available",
            "When is it available",
            "When will the projector be available",
          ],
        },
        {
          speaker: "bot",
          text: "It will be available again next week.",
          id_translation: "Barang itu akan tersedia lagi minggu depan.",
          expected_options: [
            "It will be available again next week.",
            "It will be back in stock next week.",
            "We expect it to be available again next week.",
          ],
        },
        {
          speaker: "user",
          expected: "Can I preorder it",
          id_translation: "Bisakah saya melakukan preorder?",
          expected_options: [
            "Can I preorder it",
            "Can I order it first",
            "I want to preorder it",
          ],
        },
        {
          speaker: "bot",
          text: "Yes, you can preorder it with a small deposit.",
          id_translation: "Ya, Anda bisa preorder dengan uang muka kecil.",
          expected_options: [
            "Yes, you can preorder it with a small deposit.",
            "Yes, you can place a preorder with a small deposit.",
            "Yes, you can reserve it with a small deposit.",
          ],
        },
        {
          speaker: "user",
          expected: "I want to preorder it",
          id_translation: "Saya ingin melakukan preorder.",
          expected_options: [
            "I want to preorder it",
            "I will preorder it",
            "I want to order it",
          ],
        },
        {
          speaker: "bot",
          text: "Good evening. What can I help you with?",
          id_translation: "Selamat malam. Apa yang bisa saya bantu?",
          expected_options: [
            "Good evening. What can I help you with?",
            "Hello. How can I assist you?",
            "Hi. What can I do for you?",
          ],
        },
        {
          speaker: "user",
          expected: "The speaker has no sound",
          id_translation: "Speakernya tidak ada suara.",
          expected_options: [
            "The speaker has no sound",
            "My speaker has no sound",
            "The speaker does not have sound",
          ],
        },
        {
          speaker: "bot",
          text: "Have you tried connecting it to another device?",
          id_translation:
            "Apakah Anda sudah mencoba menyambungkannya ke perangkat lain?",
          expected_options: [
            "Have you tried connecting it to another device?",
            "Have you connected it to another device?",
            "Did you try connecting it to another device?",
          ],
        },
        {
          speaker: "user",
          expected: "Yes I have tried it",
          id_translation: "Ya, saya sudah mencobanya.",
          expected_options: [
            "Yes I have tried it",
            "I have tried it",
            "Yes I tried it",
          ],
        },
        {
          speaker: "bot",
          text: "Please bring the speaker, the box, and the receipt.",
          id_translation: "Silakan bawa speaker, kotak, dan struknya.",
          expected_options: [
            "Please bring the speaker, the box, and the receipt.",
            "Please bring the speaker, the box, and the receipt to the service counter.",
            "Please bring the speaker, the box, and the receipt for inspection.",
          ],
        },
        {
          speaker: "user",
          expected: "I will bring them tomorrow",
          id_translation: "Saya akan membawanya besok.",
          expected_options: [
            "I will bring them tomorrow",
            "I will bring it tomorrow",
            "I will bring them",
          ],
        },
        {
          speaker: "bot",
          text: "Alright. We will check it at the service counter.",
          id_translation: "Baik. Kami akan memeriksanya di konter servis.",
          expected_options: [
            "Alright. We will check it at the service counter.",
            "Okay. We will check it at the service counter.",
            "Alright. We will inspect it at the service counter.",
          ],
        },
        {
          speaker: "user",
          expected: "Thank you very much",
          id_translation: "Terima kasih banyak.",
          expected_options: [
            "Thank you very much",
            "Thank you",
            "Thanks a lot",
          ],
        },
        {
          speaker: "bot",
          text: "What kind of product do you need?",
          id_translation: "Produk seperti apa yang Anda butuhkan?",
          expected_options: [
            "What kind of product do you need?",
            "What product do you need?",
            "What are you looking for?",
          ],
        },
        {
          speaker: "user",
          expected: "I need a wireless mouse",
          id_translation: "Saya membutuhkan mouse nirkabel.",
          expected_options: [
            "I need a wireless mouse",
            "I want a wireless mouse",
            "Wireless mouse",
          ],
        },
        {
          speaker: "bot",
          text: "Do you prefer a rechargeable mouse or a battery mouse?",
          id_translation:
            "Apakah Anda lebih suka mouse isi ulang atau mouse baterai?",
          expected_options: [
            "Do you prefer a rechargeable mouse or a battery mouse?",
            "Do you want a rechargeable mouse or a battery mouse?",
            "Which do you prefer, a rechargeable mouse or a battery mouse?",
          ],
        },
        {
          speaker: "user",
          expected: "I prefer a rechargeable mouse",
          id_translation: "Saya lebih suka mouse isi ulang.",
          expected_options: [
            "I prefer a rechargeable mouse",
            "Rechargeable mouse",
            "I want a rechargeable mouse",
          ],
        },
        {
          speaker: "bot",
          text: "This one is popular because it is comfortable and affordable.",
          id_translation: "Yang ini populer karena nyaman dan terjangkau.",
          expected_options: [
            "This one is popular because it is comfortable and affordable.",
            "This one is popular because it is comfortable and reasonably priced.",
            "This one is popular because it is comfortable and cost-effective.",
          ],
        },
        {
          speaker: "user",
          expected: "I will choose this one",
          id_translation: "Saya akan memilih yang ini.",
          expected_options: [
            "I will choose this one",
            "I choose this one",
            "I will take this one",
          ],
        },
        {
          speaker: "bot",
          text: "Great choice. Please go to the cashier for payment.",
          id_translation:
            "Pilihan yang bagus. Silakan pergi ke kasir untuk pembayaran.",
          expected_options: [
            "Great choice. Please go to the cashier for payment.",
            "Good choice. Please go to the cashier for payment.",
            "Excellent choice. Please go to the cashier for payment.",
          ],
        },
        {
          speaker: "user",
          expected: "Okay thank you",
          id_translation: "Baik, terima kasih.",
          expected_options: ["Okay thank you", "Thank you", "Thanks"],
        },
        {
          speaker: "bot",
          text: "Hello! Did you find everything you needed?",
          id_translation:
            "Halo! Apakah Anda menemukan semua yang Anda butuhkan?",
          expected_options: [
            "Hello! Did you find everything you needed?",
            "Hi! Did you find everything you needed?",
            "Hello! Did you find what you were looking for?",
          ],
        },
        {
          speaker: "user",
          expected: "Yes I did",
          id_translation: "Ya.",
          expected_options: ["Yes I did", "Yes", "Yes I did thank you"],
        },
        {
          speaker: "bot",
          text: "Great! Do you need a shopping bag?",
          id_translation: "Bagus! Apakah Anda butuh tas belanja?",
          expected_options: [
            "Great! Do you need a shopping bag?",
            "Great! Would you like a shopping bag?",
            "Great! Need a shopping bag?",
          ],
        },
        {
          speaker: "user",
          expected: "No thank you",
          id_translation: "Tidak, terima kasih.",
          expected_options: ["No thank you", "No", "Nope"],
        },
        {
          speaker: "bot",
          text: "Alright. That will be twenty dollars.",
          id_translation: "Baiklah. Totalnya dua puluh dolar.",
          expected_options: [
            "Alright. That will be twenty dollars.",
            "Okay. That will be twenty dollars.",
            "Right. That will be twenty dollars.",
          ],
        },
        {
          speaker: "user",
          expected: "Here is the money",
          id_translation: "Ini uangnya.",
          expected_options: ["Here is the money", "Here you go", "Here it is"],
        },
        {
          speaker: "bot",
          text: "Thank you. Here is your change and receipt. Have a nice day!",
          id_translation:
            "Terima kasih. Ini kembalian dan struk Anda. Semoga harimu menyenangkan!",
          expected_options: [
            "Thank you. Here is your change and receipt. Have a nice day!",
            "Thanks. Here is your change and receipt. Have a nice day!",
            "Thank you. Here is your change and receipt. Enjoy your day!",
          ],
        },
        {
          speaker: "user",
          expected: "You too",
          id_translation: "Kamu juga.",
          expected_options: ["You too", "Thank you", "Thanks"],
        },
        {
          speaker: "bot",
          text: "Hey! Long time no see. How have you been?",
          id_translation: "Hei! Lama tidak bertemu. Bagaimana kabarmu?",
          expected_options: [
            "Hey! Long time no see. How have you been?",
            "Hi! Long time no see. How have you been?",
            "Hello! Long time no see. How have you been?",
          ],
        },
        {
          speaker: "user",
          expected: "I have been good",
          id_translation: "Kabarku baik.",
          expected_options: ["I have been good", "I am fine", "Good"],
        },
        {
          speaker: "bot",
          text: "That is good to hear. Where are you going?",
          id_translation: "Senang mendengarnya. Mau pergi ke mana?",
          expected_options: [
            "That is good to hear. Where are you going?",
            "Good to hear. Where are you going?",
            "That's nice. Where are you going?",
          ],
        },
        {
          speaker: "user",
          expected: "I am going to the supermarket",
          id_translation: "Aku mau pergi ke supermarket.",
          expected_options: [
            "I am going to the supermarket",
            "To the supermarket",
            "Going to supermarket",
          ],
        },
        {
          speaker: "bot",
          text: "Oh, me too! Let's go together.",
          id_translation: "Oh, aku juga! Ayo pergi bersama.",
          expected_options: [
            "Oh, me too! Let's go together.",
            "Oh, me too! We can go together.",
            "Oh, me too! Let's go together to the supermarket.",
          ],
        },
        {
          speaker: "user",
          expected: "Let us go",
          id_translation: "Ayo kita pergi.",
          expected_options: ["Let us go", "Let's go", "Okay let's go", "Okay"],
        },
        {
          speaker: "bot",
          text: "Hello, can I help you find something?",
          id_translation: "Halo, ada yang bisa saya bantu cari?",
          expected_options: [
            "Hello, can I help you find something?",
            "Hi, can I help you find something?",
            "Hello, do you need help finding something?",
          ],
        },
        {
          speaker: "user",
          expected: "How much is this shirt",
          id_translation: "Berapa harga kemeja ini?",
          expected_options: [
            "How much is this shirt",
            "How much is this",
            "What is the price",
          ],
        },
        {
          speaker: "bot",
          text: "That shirt is on sale. It is fifteen dollars.",
          id_translation:
            "Kemeja itu sedang diskon. Harganya lima belas dolar.",
          expected_options: [
            "That shirt is on sale. It is fifteen dollars.",
            "That shirt is discounted. It is fifteen dollars.",
            "That shirt is on sale for fifteen dollars.",
          ],
        },
        {
          speaker: "user",
          expected: "I will take it",
          id_translation: "Saya akan membelinya.",
          expected_options: [
            "I will take it",
            "I want to buy it",
            "I will buy it",
          ],
        },
        {
          speaker: "bot",
          text: "Excellent! Please go to the cashier to pay.",
          id_translation: "Bagus! Silakan pergi ke kasir untuk membayar.",
          expected_options: [
            "Excellent! Please go to the cashier to pay.",
            "Great! Please go to the cashier to pay.",
            "Excellent! Please proceed to the cashier to pay.",
          ],
        },
        {
          speaker: "user",
          expected: "Thank you",
          id_translation: "Terima kasih.",
          expected_options: ["Thank you", "Thanks", "Okay thank you"],
        },
        {
          speaker: "bot",
          text: "Hello, what class are you in?",
          id_translation: "Halo, kamu di kelas apa?",
          expected_options: [
            "Hello, what class are you in?",
            "Hi, what class are you in?",
            "Hello, which class are you in?",
          ],
        },
        {
          speaker: "user",
          expected: "I am in class ten",
          id_translation: "Saya di kelas sepuluh.",
          expected_options: ["I am in class ten", "Class ten"],
        },
        {
          speaker: "bot",
          text: "Do you like English?",
          id_translation: "Apakah kamu suka bahasa Inggris?",
          expected_options: [
            "Do you like English?",
            "Do you enjoy English?",
            "Do you like learning English?",
          ],
        },
        {
          speaker: "user",
          expected: "Yes I do",
          id_translation: "Ya.",
          expected_options: ["Yes I do", "Yes"],
        },
        {
          speaker: "bot",
          text: "Hi! What do you like to do in your free time?",
          id_translation: "Hai! Apa yang suka kamu lakukan di waktu luangmu?",
          expected_options: [
            "Hi! What do you like to do in your free time?",
            "Hello! What do you like to do in your free time?",
            "Hi! What do you enjoy doing in your free time?",
          ],
        },
        {
          speaker: "user",
          expected: "I like reading books",
          id_translation: "Saya suka membaca buku.",
          expected_options: [
            "I like reading books",
            "I love reading",
            "Reading books",
            "I like to read",
          ],
        },
        {
          speaker: "bot",
          text: "That sounds interesting! What kind of books do you read?",
          id_translation: "Terdengar menarik! Jenis buku apa yang kamu baca?",
          expected_options: [
            "That sounds interesting! What kind of books do you read?",
            "That sounds interesting! What type of books do you read?",
            "That sounds interesting! What genre of books do you read?",
          ],
        },
        {
          speaker: "user",
          expected: "I read science fiction",
          id_translation: "Saya membaca fiksi ilmiah.",
          expected_options: [
            "I read science fiction",
            "Science fiction",
            "Sci-fi books",
            "Sci-fi",
          ],
        },
        {
          speaker: "bot",
          text: "What would you like to eat?",
          id_translation: "Apa yang ingin kamu makan?",
          expected_options: [
            "What would you like to eat?",
            "What do you want to eat?",
            "What are you in the mood for?",
          ],
        },
        {
          speaker: "user",
          expected: "I want fried rice",
          id_translation: "Saya ingin nasi goreng.",
          expected_options: ["I want fried rice", "Fried rice"],
        },
        {
          speaker: "bot",
          text: "Anything to drink?",
          id_translation: "Minum apa?",
          expected_options: [
            "Anything to drink?",
            "What would you like to drink?",
            "Do you want something to drink?",
          ],
        },
        {
          speaker: "user",
          expected: "I want water",
          id_translation: "Saya mau air.",
          expected_options: ["I want water", "Water"],
        },
      ],
    },
  ],

  spellingChats: [
    {
      title: "Greeting & Introduction (Spelling)",
      desc: "Bot akan menyebutkan kalimat bahasa Inggris dan bahasa Indonesianya. Ketik ejaannya dengan benar!",
      turns: [
        { id_text: "Halo", en_text: "Hello" },
        { id_text: "Senang bertemu denganmu", en_text: "Nice to meet you" },
        { id_text: "Siapa namamu?", en_text: "What is your name" },
        { id_text: "Sampai jumpa nanti", en_text: "See you later" },
      ],
    },
    {
      title: "Aktivitas Sehari-hari",
      desc: "Bot akan menyebutkan kalimat bahasa Inggris dan bahasa Indonesianya. Ketik ejaannya dengan benar!",
      turns: [
        { id_text: "Saya suka belajar", en_text: "I like to study" },
        { id_text: "Dia sedang memasak", en_text: "She is cooking" },
        { id_text: "Saya minum air", en_text: "I drink water" },
        { id_text: "Buku itu bagus", en_text: "The book is good" },
      ],
    },
    {
      title: "Hobi dan Minat",
      desc: "Bot akan menyebutkan kalimat bahasa Inggris tentang hobi dan minat. Ketik ejaannya dengan benar!",
      turns: [
        {
          id_text: "Saya suka bermain gitar",
          en_text: "I like playing guitar",
        },
        { id_text: "Dia suka fotografi", en_text: "He likes photography" },
        {
          id_text: "Mereka mendengarkan musik",
          en_text: "They listen to music",
        },
        { id_text: "Apa hobimu?", en_text: "What is your hobby" },
      ],
    },
    {
      title: "Retail & Warranty (Spelling)",
      desc: "Latihan ejaan untuk kata-kata toko, garansi, dan pengembalian.",
      turns: [
        { id_text: "Nomor seri", en_text: "Serial number" },
        { id_text: "Klaim garansi", en_text: "Claim warranty" },
        { id_text: "Kebijakan penukaran", en_text: "Exchange policy" },
        { id_text: "Kredit toko", en_text: "Store credit" },
        { id_text: "Kemasan asli", en_text: "Original packaging" },
        { id_text: "Produk cacat", en_text: "Defective product" },
      ],
    },
  ],

  tenseLessons: [
    {
      name: "Simple Present Tense",
      formula: "Subject + Verb 1 / Verb s-es",
      positive: "I/You/We/They + V1 | He/She/It + V-s/es",
      negative: "Subject + do/does + not + V1",
      question: "Do/Does + subject + V1?",
      use: "Untuk kebiasaan, fakta umum, jadwal tetap, dan kebenaran ilmiah.",
      signalWords: ["always", "usually", "often", "sometimes", "never", "every day"],
      toeflFocus: "Perhatikan subject-verb agreement. He, she, it, dan subjek tunggal biasanya memakai verb s/es.",
      examples: [
        { en: "She studies English every night.", id: "Dia belajar bahasa Inggris setiap malam." },
        { en: "The sun rises in the east.", id: "Matahari terbit di timur." },
      ],
    },
    {
      name: "Present Continuous Tense",
      formula: "Subject + am/is/are + Verb-ing",
      positive: "Subject + am/is/are + V-ing",
      negative: "Subject + am/is/are + not + V-ing",
      question: "Am/Is/Are + subject + V-ing?",
      use: "Untuk kegiatan yang sedang berlangsung sekarang atau rencana dekat yang sudah diatur.",
      signalWords: ["now", "right now", "at the moment", "currently", "today"],
      toeflFocus: "Jangan lupa to be sebelum V-ing. Bentuk 'She reading' salah; yang benar 'She is reading'.",
      examples: [
        { en: "I am learning English now.", id: "Saya sedang belajar bahasa Inggris sekarang." },
        { en: "They are discussing the project.", id: "Mereka sedang mendiskusikan proyek itu." },
      ],
    },
    {
      name: "Present Perfect Tense",
      formula: "Subject + have/has + Verb 3",
      positive: "Subject + have/has + V3",
      negative: "Subject + have/has + not + V3",
      question: "Have/Has + subject + V3?",
      use: "Untuk pengalaman, hasil yang masih terasa sekarang, atau tindakan yang baru/sudah selesai tanpa waktu lampau yang spesifik.",
      signalWords: ["already", "yet", "just", "ever", "never", "since", "for"],
      toeflFocus: "Kalau ada since/for dan hasilnya masih berhubungan dengan sekarang, sering dibutuhkan have/has + V3.",
      examples: [
        { en: "She has finished her homework.", id: "Dia sudah menyelesaikan PR-nya." },
        { en: "We have lived here for five years.", id: "Kami telah tinggal di sini selama lima tahun." },
      ],
    },
    {
      name: "Present Perfect Continuous Tense",
      formula: "Subject + have/has + been + Verb-ing",
      positive: "Subject + have/has + been + V-ing",
      negative: "Subject + have/has + not + been + V-ing",
      question: "Have/Has + subject + been + V-ing?",
      use: "Untuk kegiatan yang dimulai di masa lalu dan masih berlangsung atau efeknya masih terasa sekarang.",
      signalWords: ["since", "for", "all day", "recently", "lately"],
      toeflFocus: "Pola ini sering muncul ketika durasi kegiatan ditekankan, bukan hanya hasilnya.",
      examples: [
        { en: "She has been studying English for three years.", id: "Dia telah belajar bahasa Inggris selama tiga tahun." },
        { en: "They have been waiting since morning.", id: "Mereka telah menunggu sejak pagi." },
      ],
    },
    {
      name: "Simple Past Tense",
      formula: "Subject + Verb 2",
      positive: "Subject + V2",
      negative: "Subject + did + not + V1",
      question: "Did + subject + V1?",
      use: "Untuk kejadian yang selesai di masa lalu dengan waktu yang jelas.",
      signalWords: ["yesterday", "last night", "last week", "ago", "in 2020"],
      toeflFocus: "Setelah did/did not, kata kerja kembali ke V1. 'Did she went' salah; yang benar 'Did she go'.",
      examples: [
        { en: "They visited the museum yesterday.", id: "Mereka mengunjungi museum kemarin." },
        { en: "He did not come to school last week.", id: "Dia tidak datang ke sekolah minggu lalu." },
      ],
    },
    {
      name: "Past Continuous Tense",
      formula: "Subject + was/were + Verb-ing",
      positive: "Subject + was/were + V-ing",
      negative: "Subject + was/were + not + V-ing",
      question: "Was/Were + subject + V-ing?",
      use: "Untuk kegiatan yang sedang berlangsung pada waktu tertentu di masa lalu atau ketika kejadian lain terjadi.",
      signalWords: ["while", "when", "at 7 p.m. yesterday", "at that time"],
      toeflFocus: "Pola TOEFL umum: past continuous + when + simple past.",
      examples: [
        { en: "We were watching a movie when the power went out.", id: "Kami sedang menonton film ketika listrik mati." },
        { en: "She was reading while I was cooking.", id: "Dia sedang membaca sementara saya sedang memasak." },
      ],
    },
    {
      name: "Past Perfect Tense",
      formula: "Subject + had + Verb 3",
      positive: "Subject + had + V3",
      negative: "Subject + had + not + V3",
      question: "Had + subject + V3?",
      use: "Untuk kejadian yang terjadi lebih dulu sebelum kejadian lain di masa lalu.",
      signalWords: ["before", "after", "by the time", "already"],
      toeflFocus: "Jika ada dua kejadian lampau, kejadian yang lebih dulu sering memakai had + V3.",
      examples: [
        { en: "The train had left before I arrived.", id: "Kereta sudah berangkat sebelum saya tiba." },
        { en: "She had finished the report before the meeting started.", id: "Dia sudah menyelesaikan laporan sebelum rapat dimulai." },
      ],
    },
    {
      name: "Past Perfect Continuous Tense",
      formula: "Subject + had + been + Verb-ing",
      positive: "Subject + had + been + V-ing",
      negative: "Subject + had + not + been + V-ing",
      question: "Had + subject + been + V-ing?",
      use: "Untuk menekankan durasi kegiatan yang berlangsung sebelum kejadian lain di masa lalu.",
      signalWords: ["for", "since", "before", "until", "when"],
      toeflFocus: "Biasanya dipakai ketika durasi sebelum titik waktu lampau ditekankan.",
      examples: [
        { en: "He had been working for hours before he took a break.", id: "Dia telah bekerja berjam-jam sebelum beristirahat." },
        { en: "They had been studying before the test began.", id: "Mereka telah belajar sebelum ujian dimulai." },
      ],
    },
    {
      name: "Simple Future Tense",
      formula: "Subject + will + Verb 1",
      positive: "Subject + will + V1",
      negative: "Subject + will + not + V1",
      question: "Will + subject + V1?",
      use: "Untuk prediksi, keputusan spontan, janji, atau kejadian masa depan.",
      signalWords: ["tomorrow", "next week", "soon", "later", "in the future"],
      toeflFocus: "Setelah will, kata kerja harus V1. 'will goes' salah; yang benar 'will go'.",
      examples: [
        { en: "I will study harder tomorrow.", id: "Saya akan belajar lebih giat besok." },
        { en: "They will arrive soon.", id: "Mereka akan segera tiba." },
      ],
    },
    {
      name: "Future Continuous Tense",
      formula: "Subject + will + be + Verb-ing",
      positive: "Subject + will + be + V-ing",
      negative: "Subject + will + not + be + V-ing",
      question: "Will + subject + be + V-ing?",
      use: "Untuk kegiatan yang akan sedang berlangsung pada waktu tertentu di masa depan.",
      signalWords: ["at this time tomorrow", "at 8 p.m. tonight", "next Monday morning"],
      toeflFocus: "Ingat urutan lengkapnya: will + be + V-ing.",
      examples: [
        { en: "At this time tomorrow, I will be taking a test.", id: "Pada waktu ini besok, saya akan sedang mengikuti tes." },
        { en: "She will be working at eight tonight.", id: "Dia akan sedang bekerja pukul delapan malam ini." },
      ],
    },
    {
      name: "Future Perfect Tense",
      formula: "Subject + will + have + Verb 3",
      positive: "Subject + will + have + V3",
      negative: "Subject + will + not + have + V3",
      question: "Will + subject + have + V3?",
      use: "Untuk tindakan yang akan sudah selesai sebelum waktu tertentu di masa depan.",
      signalWords: ["by tomorrow", "by next week", "by the time", "before"],
      toeflFocus: "Setelah will have harus V3, bukan V1 atau V-ing.",
      examples: [
        { en: "By next week, we will have completed the project.", id: "Minggu depan, kami akan sudah menyelesaikan proyek itu." },
        { en: "She will have left before you arrive.", id: "Dia akan sudah pergi sebelum kamu tiba." },
      ],
    },
    {
      name: "Future Perfect Continuous Tense",
      formula: "Subject + will + have + been + Verb-ing",
      positive: "Subject + will + have + been + V-ing",
      negative: "Subject + will + not + have + been + V-ing",
      question: "Will + subject + have + been + V-ing?",
      use: "Untuk menekankan durasi kegiatan yang akan masih berlangsung sampai titik waktu tertentu di masa depan.",
      signalWords: ["for", "by next year", "by the end of", "by the time"],
      toeflFocus: "Pola panjang ini jarang dipakai sehari-hari, tetapi bagus untuk mengenali struktur kompleks.",
      examples: [
        { en: "By next year, I will have been studying English for four years.", id: "Tahun depan, saya akan sudah belajar bahasa Inggris selama empat tahun." },
        { en: "By midnight, they will have been working for ten hours.", id: "Saat tengah malam, mereka akan sudah bekerja selama sepuluh jam." },
      ],
    },
{
    "name": "Simple Past Future Tense",
    "formula": "Subject + would + Verb 1",
    "positive": "Subject + would + V1",
    "negative": "Subject + would + not + V1",
    "question": "Would + subject + V1?",
    "use": "Untuk menyatakan rencana, prediksi, atau janji masa depan dilihat dari sudut pandang masa lalu.",
    "signalWords": [
        "would",
        "the next day",
        "the following week",
        "said that",
        "promised that"
    ],
    "toeflFocus": "Dalam reported speech, will sering berubah menjadi would jika kalimat utama berada di masa lalu.",
    "examples": [
        {
            "en": "She said that she would study harder.",
            "id": "Dia mengatakan bahwa dia akan belajar lebih giat."
        },
        {
            "en": "They promised that they would arrive on time.",
            "id": "Mereka berjanji bahwa mereka akan tiba tepat waktu."
        }
    ]
},
{
    "name": "Past Future Continuous Tense",
    "formula": "Subject + would + be + Verb-ing",
    "positive": "Subject + would + be + V-ing",
    "negative": "Subject + would + not + be + V-ing",
    "question": "Would + subject + be + V-ing?",
    "use": "Untuk kegiatan yang akan sedang berlangsung pada waktu tertentu di masa depan menurut sudut pandang masa lalu.",
    "signalWords": [
        "would be",
        "at that time",
        "the next day",
        "when"
    ],
    "toeflFocus": "Pola ini sering dipakai dalam kalimat tidak langsung atau situasi hipotesis.",
    "examples": [
        {
            "en": "He said that he would be working at eight.",
            "id": "Dia mengatakan bahwa dia akan sedang bekerja pukul delapan."
        },
        {
            "en": "I thought she would be waiting for us.",
            "id": "Saya pikir dia akan sedang menunggu kita."
        }
    ]
},
{
    "name": "Past Future Perfect Tense",
    "formula": "Subject + would + have + Verb 3",
    "positive": "Subject + would + have + V3",
    "negative": "Subject + would + not + have + V3",
    "question": "Would + subject + have + V3?",
    "use": "Untuk tindakan yang akan sudah selesai menurut sudut pandang masa lalu, atau untuk penyesalan/kemungkinan yang tidak terjadi.",
    "signalWords": [
        "would have",
        "by then",
        "if",
        "before"
    ],
    "toeflFocus": "Pola would have + V3 sering muncul pada conditional sentence type 3.",
    "examples": [
        {
            "en": "She would have passed the test if she had studied.",
            "id": "Dia akan sudah lulus tes jika dia belajar."
        },
        {
            "en": "They said they would have finished the report by Monday.",
            "id": "Mereka mengatakan mereka akan sudah menyelesaikan laporan pada hari Senin."
        }
    ]
},
{
    "name": "Past Future Perfect Continuous Tense",
    "formula": "Subject + would + have + been + Verb-ing",
    "positive": "Subject + would + have + been + V-ing",
    "negative": "Subject + would + not + have + been + V-ing",
    "question": "Would + subject + have + been + V-ing?",
    "use": "Untuk menekankan durasi kegiatan yang akan sudah berlangsung menurut sudut pandang masa lalu atau dalam conditional kompleks.",
    "signalWords": [
        "would have been",
        "for",
        "since",
        "by then",
        "if"
    ],
    "toeflFocus": "Pola panjang ini jarang dipakai harian, tetapi penting untuk mengenali struktur perfect continuous dalam teks akademik.",
    "examples": [
        {
            "en": "By June, I would have been studying English for two years.",
            "id": "Pada bulan Juni, saya akan sudah belajar bahasa Inggris selama dua tahun."
        },
        {
            "en": "If he had stayed, he would have been working there for a decade.",
            "id": "Jika dia tetap tinggal, dia akan sudah bekerja di sana selama satu dekade."
        }
    ]
},
  ],

  tensePractice: [
    {
      tense: "Simple Present",
      idText: "Dia belajar bahasa Inggris setiap malam",
      enCorrect: ["She", "studies", "English", "every", "night"],
      jumbled: ["She", "study", "studies", "English", "every", "night", "is"],
      hint: "Subjek she memakai verb s/es.",
      pattern: "Subject + Verb s/es + Object + Time",
      explanation: "Karena subjeknya She dan kegiatannya kebiasaan, gunakan studies.",
      poin: 25,
    },
    {
      tense: "Simple Present",
      idText: "Mereka tidak pergi ke sekolah pada hari Minggu",
      enCorrect: ["They", "do", "not", "go", "to", "school", "on", "Sundays"],
      jumbled: ["They", "do", "does", "not", "go", "goes", "to", "school", "on", "Sundays"],
      hint: "They memakai do not, lalu verb kembali ke V1.",
      pattern: "Subject + do not + Verb 1 + Complement",
      explanation: "Dalam kalimat negatif simple present, they memakai do not + go.",
      poin: 25,
    },
    {
      tense: "Simple Present",
      idText: "Apakah guru itu menjelaskan pelajaran dengan jelas",
      enCorrect: ["Does", "the", "teacher", "explain", "the", "lesson", "clearly"],
      jumbled: ["Does", "Do", "the", "teacher", "explain", "explains", "the", "lesson", "clearly"],
      hint: "Pertanyaan subjek tunggal memakai Does + subject + V1.",
      pattern: "Does + Subject + Verb 1 + Object?",
      explanation: "Setelah Does, kata kerja harus V1: explain, bukan explains.",
      poin: 30,
    },
    {
      tense: "Present Continuous",
      idText: "Saya sedang belajar bahasa Inggris sekarang",
      enCorrect: ["I", "am", "studying", "English", "now"],
      jumbled: ["I", "am", "is", "study", "studying", "English", "now"],
      hint: "Gunakan am + V-ing untuk subjek I.",
      pattern: "Subject + am/is/are + Verb-ing",
      explanation: "Kata now menunjukkan aktivitas sedang berlangsung, jadi gunakan am studying.",
      poin: 25,
    },
    {
      tense: "Present Continuous",
      idText: "Mereka sedang membicarakan proyek sekolah mereka",
      enCorrect: ["They", "are", "talking", "about", "their", "school", "project"],
      jumbled: ["They", "are", "is", "talk", "talking", "about", "their", "school", "project"],
      hint: "They memakai are, lalu verb-ing.",
      pattern: "Subject + are + Verb-ing + Complement",
      explanation: "Present continuous untuk kegiatan yang sedang terjadi: are talking.",
      poin: 30,
    },
    {
      tense: "Present Continuous",
      idText: "Ibu saya sedang memasak makan malam di dapur",
      enCorrect: ["My", "mother", "is", "cooking", "dinner", "in", "the", "kitchen"],
      jumbled: ["My", "mother", "is", "are", "cook", "cooking", "dinner", "in", "the", "kitchen"],
      hint: "My mother adalah subjek tunggal, gunakan is + cooking.",
      pattern: "Singular Subject + is + Verb-ing",
      explanation: "Subjek tunggal memakai is, lalu kata kerja berubah menjadi cooking.",
      poin: 30,
    },
    {
      tense: "Present Perfect",
      idText: "Dia sudah menyelesaikan pekerjaan rumahnya",
      enCorrect: ["She", "has", "finished", "her", "homework"],
      jumbled: ["She", "has", "have", "finish", "finished", "her", "homework"],
      hint: "She memakai has + V3.",
      pattern: "Subject + has + Verb 3 + Object",
      explanation: "Present perfect memakai has/have + V3. Finished adalah V3.",
      poin: 35,
    },
    {
      tense: "Present Perfect",
      idText: "Kami telah tinggal di kota ini selama lima tahun",
      enCorrect: ["We", "have", "lived", "in", "this", "city", "for", "five", "years"],
      jumbled: ["We", "have", "has", "live", "lived", "in", "this", "city", "for", "five", "years"],
      hint: "We memakai have + V3, dan for untuk durasi.",
      pattern: "Subject + have + Verb 3 + for + Duration",
      explanation: "For five years menunjukkan durasi yang masih berhubungan dengan sekarang.",
      poin: 35,
    },
    {
      tense: "Present Perfect",
      idText: "Apakah kamu pernah mengunjungi museum itu",
      enCorrect: ["Have", "you", "ever", "visited", "the", "museum"],
      jumbled: ["Have", "Has", "you", "ever", "visit", "visited", "the", "museum"],
      hint: "Pertanyaan pengalaman memakai Have + subject + ever + V3.",
      pattern: "Have + Subject + ever + Verb 3?",
      explanation: "Ever sering dipakai untuk menanyakan pengalaman dalam present perfect.",
      poin: 40,
    },
    {
      tense: "Present Perfect Continuous",
      idText: "Dia telah belajar bahasa Inggris selama tiga tahun",
      enCorrect: ["She", "has", "been", "studying", "English", "for", "three", "years"],
      jumbled: ["She", "has", "have", "been", "study", "studying", "English", "for", "three", "years"],
      hint: "Gunakan has been + V-ing untuk durasi kegiatan.",
      pattern: "Subject + has + been + Verb-ing + for + Duration",
      explanation: "Kegiatan belajar dimulai di masa lalu dan masih relevan sekarang.",
      poin: 45,
    },
    {
      tense: "Present Perfect Continuous",
      idText: "Mereka telah menunggu sejak pagi",
      enCorrect: ["They", "have", "been", "waiting", "since", "morning"],
      jumbled: ["They", "have", "has", "been", "wait", "waiting", "since", "morning"],
      hint: "They memakai have been + V-ing.",
      pattern: "Subject + have + been + Verb-ing + since + Time",
      explanation: "Since morning menunjukkan titik awal kegiatan.",
      poin: 45,
    },
    {
      tense: "Simple Past",
      idText: "Mereka mengunjungi museum kemarin",
      enCorrect: ["They", "visited", "the", "museum", "yesterday"],
      jumbled: ["They", "visit", "visited", "the", "museum", "yesterday", "have"],
      hint: "Yesterday menunjukkan simple past, gunakan V2.",
      pattern: "Subject + Verb 2 + Object + Past Time",
      explanation: "Visited adalah V2 dari visit.",
      poin: 30,
    },
    {
      tense: "Simple Past",
      idText: "Dia tidak datang ke sekolah minggu lalu",
      enCorrect: ["He", "did", "not", "come", "to", "school", "last", "week"],
      jumbled: ["He", "did", "not", "came", "come", "to", "school", "last", "week"],
      hint: "Setelah did not, gunakan V1.",
      pattern: "Subject + did not + Verb 1 + Complement",
      explanation: "Did sudah membawa makna lampau, jadi verb-nya kembali ke come.",
      poin: 35,
    },
    {
      tense: "Simple Past",
      idText: "Apakah dia pergi ke perpustakaan tadi malam",
      enCorrect: ["Did", "she", "go", "to", "the", "library", "last", "night"],
      jumbled: ["Did", "Does", "she", "go", "went", "to", "the", "library", "last", "night"],
      hint: "Pertanyaan simple past memakai Did + subject + V1.",
      pattern: "Did + Subject + Verb 1 + Complement?",
      explanation: "Setelah Did, gunakan go, bukan went.",
      poin: 35,
    },
    {
      tense: "Past Continuous",
      idText: "Kami sedang menonton film ketika listrik mati",
      enCorrect: ["We", "were", "watching", "a", "movie", "when", "the", "power", "went", "out"],
      jumbled: ["We", "were", "was", "watch", "watching", "a", "movie", "when", "the", "power", "went", "out"],
      hint: "Kegiatan yang sedang berlangsung: were watching. Kejadian pemotong: went out.",
      pattern: "Past Continuous + when + Simple Past",
      explanation: "Past continuous dipakai untuk aktivitas yang sedang berlangsung di masa lalu.",
      poin: 45,
    },
    {
      tense: "Past Continuous",
      idText: "Dia sedang membaca ketika saya meneleponnya",
      enCorrect: ["She", "was", "reading", "when", "I", "called", "her"],
      jumbled: ["She", "was", "were", "read", "reading", "when", "I", "called", "her"],
      hint: "She memakai was + V-ing.",
      pattern: "Subject + was + Verb-ing + when + Simple Past",
      explanation: "Reading sedang berlangsung ketika called terjadi.",
      poin: 40,
    },
    {
      tense: "Past Perfect",
      idText: "Kereta sudah berangkat sebelum saya tiba",
      enCorrect: ["The", "train", "had", "left", "before", "I", "arrived"],
      jumbled: ["The", "train", "had", "has", "left", "leave", "before", "I", "arrived"],
      hint: "Kejadian yang lebih dulu memakai had + V3.",
      pattern: "Subject + had + Verb 3 + before + Simple Past",
      explanation: "Train left terjadi lebih dulu daripada I arrived.",
      poin: 45,
    },
    {
      tense: "Past Perfect",
      idText: "Dia sudah menyelesaikan laporan sebelum rapat dimulai",
      enCorrect: ["She", "had", "finished", "the", "report", "before", "the", "meeting", "started"],
      jumbled: ["She", "had", "has", "finish", "finished", "the", "report", "before", "the", "meeting", "started"],
      hint: "Tindakan yang selesai lebih dulu: had finished.",
      pattern: "Subject + had + Verb 3 + before + Simple Past",
      explanation: "Past perfect menunjukkan laporan selesai sebelum rapat dimulai.",
      poin: 45,
    },
    {
      tense: "Past Perfect Continuous",
      idText: "Dia telah bekerja selama berjam-jam sebelum beristirahat",
      enCorrect: ["He", "had", "been", "working", "for", "hours", "before", "he", "took", "a", "break"],
      jumbled: ["He", "had", "has", "been", "work", "working", "for", "hours", "before", "he", "took", "a", "break"],
      hint: "Durasi sebelum kejadian lampau memakai had been + V-ing.",
      pattern: "Subject + had + been + Verb-ing + for + Duration + before + Simple Past",
      explanation: "Had been working menekankan durasi kerja sebelum dia beristirahat.",
      poin: 50,
    },
    {
      tense: "Simple Future",
      idText: "Saya akan belajar lebih giat besok",
      enCorrect: ["I", "will", "study", "harder", "tomorrow"],
      jumbled: ["I", "will", "study", "studies", "harder", "tomorrow", "am"],
      hint: "Setelah will, gunakan V1.",
      pattern: "Subject + will + Verb 1 + Complement",
      explanation: "Will harus diikuti verb dasar study.",
      poin: 30,
    },
    {
      tense: "Simple Future",
      idText: "Mereka tidak akan tiba malam ini",
      enCorrect: ["They", "will", "not", "arrive", "tonight"],
      jumbled: ["They", "will", "not", "arrive", "arrived", "tonight", "are"],
      hint: "Kalimat negatif future: will not + V1.",
      pattern: "Subject + will not + Verb 1 + Time",
      explanation: "Setelah will not, kata kerja tetap arrive.",
      poin: 30,
    },
    {
      tense: "Future Continuous",
      idText: "Besok pada waktu ini saya akan sedang mengikuti tes",
      enCorrect: ["At", "this", "time", "tomorrow", "I", "will", "be", "taking", "a", "test"],
      jumbled: ["At", "this", "time", "tomorrow", "I", "will", "be", "take", "taking", "a", "test"],
      hint: "Future continuous memakai will be + V-ing.",
      pattern: "Time Marker + Subject + will + be + Verb-ing",
      explanation: "At this time tomorrow menunjukkan kegiatan yang akan sedang berlangsung.",
      poin: 50,
    },
    {
      tense: "Future Perfect",
      idText: "Minggu depan kami akan sudah menyelesaikan proyek itu",
      enCorrect: ["By", "next", "week", "we", "will", "have", "completed", "the", "project"],
      jumbled: ["By", "next", "week", "we", "will", "have", "complete", "completed", "the", "project"],
      hint: "Future perfect memakai will have + V3.",
      pattern: "By + Future Time + Subject + will have + Verb 3",
      explanation: "By next week menunjukkan batas waktu penyelesaian di masa depan.",
      poin: 50,
    },
    {
      tense: "Future Perfect Continuous",
      idText: "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun",
      enCorrect: ["By", "next", "year", "I", "will", "have", "been", "studying", "English", "for", "four", "years"],
      jumbled: ["By", "next", "year", "I", "will", "have", "been", "study", "studying", "English", "for", "four", "years"],
      hint: "Gunakan will have been + V-ing untuk durasi sampai titik waktu masa depan.",
      pattern: "By + Future Time + Subject + will have been + Verb-ing + for + Duration",
      explanation: "Pola ini menekankan durasi belajar sampai tahun depan.",
      poin: 60,
    },
{
    "tense": "Simple Past Future",
    "idText": "Dia mengatakan bahwa dia akan belajar lebih giat",
    "enCorrect": [
        "She",
        "said",
        "that",
        "she",
        "would",
        "study",
        "harder"
    ],
    "jumbled": [
        "She",
        "said",
        "that",
        "she",
        "would",
        "study",
        "studied",
        "harder",
        "will"
    ],
    "hint": "Dalam sudut pandang masa lalu, will berubah menjadi would.",
    "pattern": "Subject + said that + Subject + would + Verb 1",
    "explanation": "Would study dipakai karena kalimat utamanya said berada di masa lalu.",
    "poin": 45
},
{
    "tense": "Past Future Continuous",
    "idText": "Dia berkata bahwa dia akan sedang bekerja pukul delapan",
    "enCorrect": [
        "He",
        "said",
        "that",
        "he",
        "would",
        "be",
        "working",
        "at",
        "eight"
    ],
    "jumbled": [
        "He",
        "said",
        "that",
        "he",
        "would",
        "be",
        "working",
        "work",
        "at",
        "eight"
    ],
    "hint": "Past future continuous memakai would be + V-ing.",
    "pattern": "Subject + said that + Subject + would be + Verb-ing + Time",
    "explanation": "Would be working menunjukkan kegiatan yang akan sedang berlangsung menurut sudut pandang masa lalu.",
    "poin": 55
},
{
    "tense": "Past Future Perfect",
    "idText": "Dia akan sudah lulus tes jika dia belajar",
    "enCorrect": [
        "She",
        "would",
        "have",
        "passed",
        "the",
        "test",
        "if",
        "she",
        "had",
        "studied"
    ],
    "jumbled": [
        "She",
        "would",
        "have",
        "passed",
        "pass",
        "the",
        "test",
        "if",
        "she",
        "had",
        "studied"
    ],
    "hint": "Conditional type 3 memakai would have + V3 dan if + past perfect.",
    "pattern": "Subject + would have + Verb 3 + if + Subject + had + Verb 3",
    "explanation": "Would have passed menunjukkan hasil yang tidak terjadi di masa lalu.",
    "poin": 60
},
{
    "tense": "Past Future Perfect Continuous",
    "idText": "Dia akan sudah bekerja di sana selama sepuluh tahun jika dia tetap tinggal",
    "enCorrect": [
        "He",
        "would",
        "have",
        "been",
        "working",
        "there",
        "for",
        "ten",
        "years",
        "if",
        "he",
        "had",
        "stayed"
    ],
    "jumbled": [
        "He",
        "would",
        "have",
        "been",
        "working",
        "worked",
        "there",
        "for",
        "ten",
        "years",
        "if",
        "he",
        "had",
        "stayed"
    ],
    "hint": "Gunakan would have been + V-ing untuk durasi hipotesis masa lalu.",
    "pattern": "Subject + would have been + Verb-ing + for + Duration + if + Past Perfect",
    "explanation": "Pola ini menekankan durasi yang seharusnya sudah berlangsung, tetapi tidak terjadi.",
    "poin": 70
},
  ],

  foundationModules: [
    {
        "title": "Jenis Kata Dasar (Parts of Speech)",
        "goal": "Mengenali fungsi kata sebelum menyusun kalimat. Ini dasar penting agar kamu tidak hanya menghafal arti, tetapi tahu posisi kata dalam kalimat.",
        "structure": "Noun / Pronoun + Verb + Object / Complement + Adverb",
        "explanation": "Dalam bahasa Inggris, kata tidak bisa disusun sembarang. Setiap kata punya tugas: noun untuk benda/orang, verb untuk aksi, adjective untuk sifat, adverb untuk cara/waktu/tempat, preposition untuk hubungan, dan conjunction untuk menghubungkan ide.",
        "keyPoints": [
            "Noun = nama benda/orang/tempat",
            "Verb = aksi/keadaan",
            "Adjective = menjelaskan noun",
            "Adverb = menjelaskan verb/adjective/kalimat",
            "Preposition = in, on, at, to, from",
            "Conjunction = and, but, because, although"
        ],
        "examples": [
            {
                "en": "The diligent student studies English carefully every night.",
                "id": "Siswa yang rajin belajar bahasa Inggris dengan hati-hati setiap malam."
            },
            {
                "en": "My teacher explains the lesson clearly.",
                "id": "Guru saya menjelaskan pelajaran dengan jelas."
            }
        ],
        "mistakes": [
            {
                "wrong": "I beautiful book.",
                "correct": "I have a beautiful book.",
                "note": "Beautiful adalah adjective, bukan verb. Kalimat tetap butuh verb seperti have."
            },
            {
                "wrong": "She study English.",
                "correct": "She studies English.",
                "note": "Subject she dalam Simple Present membutuhkan verb s/es."
            }
        ]
    },
    {
        "title": "Subject, Verb, Object, Complement",
        "goal": "Memahami kerangka utama kalimat bahasa Inggris agar susunan kata tidak terbalik.",
        "structure": "Subject + Verb + Object / Complement",
        "explanation": "Subject adalah pelaku/topik. Verb adalah tindakan atau keadaan. Object menerima tindakan. Complement melengkapi makna subject atau verb. TOEFL Structure sering menguji apakah subject dan verb sudah lengkap.",
        "keyPoints": [
            "Subject biasanya noun/pronoun",
            "Verb wajib ada dalam klausa utama",
            "Object muncul setelah transitive verb",
            "Complement bisa berupa adjective/noun/place",
            "Kalimat panjang tetap harus punya subject dan verb utama"
        ],
        "examples": [
            {
                "en": "The students read the article in the library.",
                "id": "Para siswa membaca artikel di perpustakaan."
            },
            {
                "en": "The explanation seems clear.",
                "id": "Penjelasan itu tampak jelas."
            }
        ],
        "mistakes": [
            {
                "wrong": "The students in the classroom.",
                "correct": "The students are in the classroom.",
                "note": "Kalimat pertama belum punya verb. Tambahkan are."
            },
            {
                "wrong": "Because she was tired.",
                "correct": "She slept early because she was tired.",
                "note": "Because clause tidak bisa berdiri sendiri sebagai kalimat lengkap."
            }
        ]
    },
    {
        "title": "Noun Phrase dan Adjective Order",
        "goal": "Belajar menyusun frasa benda seperti soal TOEFL dan teks akademik.",
        "structure": "Determiner + Adjective + Noun",
        "explanation": "Noun phrase adalah kelompok kata yang pusatnya noun. Dalam bahasa Inggris, adjective biasanya berada sebelum noun: a difficult question, not a question difficult. Untuk TOEFL, noun phrase sering menjadi subject panjang.",
        "keyPoints": [
            "Adjective sebelum noun",
            "Gunakan article a/an/the jika perlu",
            "Prepositional phrase bisa memperpanjang noun phrase",
            "Cari noun utama untuk menentukan subject",
            "Jangan tertipu frasa panjang antara subject dan verb"
        ],
        "examples": [
            {
                "en": "The new English grammar book is useful.",
                "id": "Buku grammar bahasa Inggris yang baru itu bermanfaat."
            },
            {
                "en": "The students in the front row are taking notes.",
                "id": "Siswa-siswa di baris depan sedang mencatat."
            }
        ],
        "mistakes": [
            {
                "wrong": "A question difficult",
                "correct": "A difficult question",
                "note": "Adjective ditempatkan sebelum noun."
            },
            {
                "wrong": "The list of important words are long.",
                "correct": "The list of important words is long.",
                "note": "Subject utama adalah list, bukan words."
            }
        ]
    },
    {
        "title": "Verb Forms: V1, V2, V3, dan V-ing",
        "goal": "Memahami perubahan kata kerja agar tidak salah memilih bentuk verb dalam tense.",
        "structure": "V1: study, V2: studied, V3: studied, V-ing: studying",
        "explanation": "Tense sangat bergantung pada bentuk verb. V1 dipakai setelah will, can, do/does/did. V2 dipakai Simple Past. V3 dipakai Perfect dan Passive. V-ing dipakai Continuous dan gerund.",
        "keyPoints": [
            "Will/can/must + V1",
            "Did + V1, bukan V2",
            "Have/has/had + V3",
            "Be + V-ing untuk continuous",
            "Be + V3 untuk passive"
        ],
        "examples": [
            {
                "en": "She has written three paragraphs.",
                "id": "Dia telah menulis tiga paragraf."
            },
            {
                "en": "They were discussing the answer.",
                "id": "Mereka sedang mendiskusikan jawabannya."
            }
        ],
        "mistakes": [
            {
                "wrong": "She did not went.",
                "correct": "She did not go.",
                "note": "Setelah did not, gunakan V1."
            },
            {
                "wrong": "I have finish the task.",
                "correct": "I have finished the task.",
                "note": "Present perfect memakai have/has + V3."
            }
        ]
    },
    {
        "title": "Auxiliary Verbs dan Modal Verbs",
        "goal": "Memahami kata bantu seperti be, do, have, will, can, must, should agar bisa membuat negatif dan pertanyaan.",
        "structure": "Auxiliary + Subject + Main Verb / Subject + Modal + V1",
        "explanation": "Auxiliary membantu membentuk tense, pertanyaan, negatif, passive, dan emphasis. Modal selalu diikuti V1 tanpa s/es.",
        "keyPoints": [
            "Be: am, is, are, was, were",
            "Do: do, does, did",
            "Have: have, has, had",
            "Modal: can, could, may, might, must, should, will, would",
            "Modal + V1"
        ],
        "examples": [
            {
                "en": "Can she answer the question correctly?",
                "id": "Bisakah dia menjawab pertanyaan itu dengan benar?"
            },
            {
                "en": "They should review the material before the test.",
                "id": "Mereka sebaiknya meninjau materi sebelum tes."
            }
        ],
        "mistakes": [
            {
                "wrong": "She can speaks English.",
                "correct": "She can speak English.",
                "note": "Setelah modal can, verb tidak memakai s/es."
            },
            {
                "wrong": "Does he goes to school?",
                "correct": "Does he go to school?",
                "note": "Setelah does, gunakan V1."
            }
        ]
    },
    {
        "title": "Pola Kalimat Dasar Bahasa Inggris",
        "goal": "Menguasai pola S-V, S-V-O, S-V-C, S-V-O-O, dan S-V-O-C untuk membuat kalimat lebih rapi.",
        "structure": "SV / SVO / SVC / SVOO / SVOC",
        "explanation": "Kalimat bahasa Inggris punya pola inti. Dengan menguasai pola ini, kamu bisa menyusun kalimat pendek maupun panjang secara benar.",
        "keyPoints": [
            "SV: She sleeps",
            "SVO: She reads a book",
            "SVC: She is happy",
            "SVOO: She gave me a book",
            "SVOC: They made him captain"
        ],
        "examples": [
            {
                "en": "The teacher gave the students a difficult assignment.",
                "id": "Guru memberi para siswa tugas yang sulit."
            },
            {
                "en": "The news made everyone nervous.",
                "id": "Berita itu membuat semua orang gugup."
            }
        ],
        "mistakes": [
            {
                "wrong": "She gave to me a book.",
                "correct": "She gave me a book / She gave a book to me.",
                "note": "Pola object harus konsisten."
            },
            {
                "wrong": "The movie made happy me.",
                "correct": "The movie made me happy.",
                "note": "Pada SVOC, object muncul sebelum complement."
            }
        ]
    },
    {
        "title": "Tenses dari Simple sampai Perfect Continuous",
        "goal": "Memahami konsep waktu: kebiasaan, sedang berlangsung, sudah selesai, dan durasi.",
        "structure": "Simple / Continuous / Perfect / Perfect Continuous",
        "explanation": "Jangan menghafal 12 tense secara terpisah saja. Pahami konsep dasarnya: Simple untuk fakta/kebiasaan, Continuous untuk proses, Perfect untuk hasil/sudah, Perfect Continuous untuk durasi proses.",
        "keyPoints": [
            "Simple = fakta/kebiasaan/kejadian utama",
            "Continuous = sedang berlangsung",
            "Perfect = sudah selesai atau punya hasil",
            "Perfect Continuous = sudah berlangsung selama waktu tertentu",
            "Signal words membantu memilih tense"
        ],
        "examples": [
            {
                "en": "I study English every day.",
                "id": "Saya belajar bahasa Inggris setiap hari."
            },
            {
                "en": "I have been studying English for two hours.",
                "id": "Saya telah belajar bahasa Inggris selama dua jam."
            }
        ],
        "mistakes": [
            {
                "wrong": "I am study English now.",
                "correct": "I am studying English now.",
                "note": "Continuous memakai be + V-ing."
            },
            {
                "wrong": "She has went home.",
                "correct": "She has gone home.",
                "note": "Perfect memakai V3, go-gone."
            }
        ]
    },
    {
        "title": "Question, Negative, dan Word Order",
        "goal": "Membuat pertanyaan dan kalimat negatif dengan susunan yang benar.",
        "structure": "Auxiliary + Subject + Verb + Object? / Subject + Auxiliary + not + Verb",
        "explanation": "Bahasa Inggris membutuhkan auxiliary untuk banyak pertanyaan dan kalimat negatif. Letak kata bantu sangat penting: Do you study? bukan You study? untuk pertanyaan formal Simple Present.",
        "keyPoints": [
            "Do/does untuk Simple Present",
            "Did untuk Simple Past",
            "Be dipindah ke depan dalam pertanyaan",
            "Not ditempatkan setelah auxiliary",
            "WH-question tetap membutuhkan auxiliary"
        ],
        "examples": [
            {
                "en": "Why did they choose that answer?",
                "id": "Mengapa mereka memilih jawaban itu?"
            },
            {
                "en": "She is not reading the book now.",
                "id": "Dia tidak sedang membaca buku itu sekarang."
            }
        ],
        "mistakes": [
            {
                "wrong": "Why you are late?",
                "correct": "Why are you late?",
                "note": "Pada pertanyaan dengan be, letakkan be sebelum subject."
            },
            {
                "wrong": "He not understand.",
                "correct": "He does not understand.",
                "note": "Simple Present negatif membutuhkan does not untuk he/she/it."
            }
        ]
    },
    {
        "title": "Clauses, Connectors, dan Kalimat Panjang",
        "goal": "Memahami kalimat panjang dalam TOEFL Reading/Structure dengan mencari subject, verb, dan penghubung.",
        "structure": "Main Clause + Connector + Subordinate Clause",
        "explanation": "Kalimat TOEFL sering panjang karena memakai connector seperti because, although, while, when, if, which, who, that. Cari klausa utama dulu agar tidak bingung.",
        "keyPoints": [
            "Main clause bisa berdiri sendiri",
            "Subordinate clause butuh klausa utama",
            "Relative clause menjelaskan noun",
            "Connector menunjukkan hubungan ide",
            "Jangan hitung noun dalam prepositional phrase sebagai subject utama"
        ],
        "examples": [
            {
                "en": "Although the question was difficult, she answered it correctly.",
                "id": "Meskipun pertanyaannya sulit, dia menjawabnya dengan benar."
            },
            {
                "en": "The book that you recommended is very helpful.",
                "id": "Buku yang kamu rekomendasikan sangat membantu."
            }
        ],
        "mistakes": [
            {
                "wrong": "Although he studied hard.",
                "correct": "Although he studied hard, he did not pass the test.",
                "note": "Although clause membutuhkan main clause."
            },
            {
                "wrong": "The student who sitting near me is my friend.",
                "correct": "The student who is sitting near me is my friend.",
                "note": "Relative clause continuous membutuhkan be + V-ing."
            }
        ]
    },
    {
        "title": "Teknik Membaca dan Menebak Makna Kata",
        "goal": "Membantu memahami kosakata baru tanpa selalu membuka kamus.",
        "structure": "Context + Word Class + Prefix/Suffix + Example Clue",
        "explanation": "Saat menemukan kata sulit, lihat konteks, jenis kata, awalan/akhiran, dan petunjuk di sekitar kalimat. Ini sangat berguna untuk TOEFL Reading.",
        "keyPoints": [
            "-tion biasanya noun",
            "-ly biasanya adverb",
            "un-/in-/im- sering berarti tidak",
            "re- sering berarti kembali/ulang",
            "Koma dan contoh bisa memberi petunjuk makna"
        ],
        "examples": [
            {
                "en": "The result was inaccurate, so the researcher repeated the experiment.",
                "id": "Hasilnya tidak akurat, jadi peneliti mengulangi eksperimen itu."
            },
            {
                "en": "She answered confidently because she understood the topic.",
                "id": "Dia menjawab dengan percaya diri karena memahami topiknya."
            }
        ],
        "mistakes": [
            {
                "wrong": "Mengartikan semua kata satu-satu tanpa melihat konteks.",
                "correct": "Lihat konteks kalimat dan fungsi kata terlebih dahulu.",
                "note": "Makna kata sering berubah tergantung konteks."
            },
            {
                "wrong": "Menganggap semua kata berakhiran -ing adalah verb.",
                "correct": "-ing bisa menjadi verb, gerund, atau adjective.",
                "note": "Contoh: studying, a boring lesson, Swimming is fun."
            }
        ]
    },
{
    "title": "Simple Present Tense",
    "goal": "Menggunakan tense untuk fakta, kebiasaan, jadwal tetap, dan kebenaran umum.",
    "structure": "S + V1 / V-s/es + O/C",
    "explanation": "Simple Present adalah tense dasar yang paling sering muncul. Gunakan V1 untuk I/you/we/they dan V-s/es untuk he/she/it atau subject tunggal.",
    "keyPoints": [
        "Fakta umum: The sun rises",
        "Kebiasaan: I study every day",
        "He/She/It memakai s/es",
        "Negatif: do/does not + V1",
        "Pertanyaan: Do/Does + subject + V1?"
    ],
    "examples": [
        {
            "en": "She studies English every night.",
            "id": "Dia belajar bahasa Inggris setiap malam."
        },
        {
            "en": "They do not play football on Monday.",
            "id": "Mereka tidak bermain sepak bola pada hari Senin."
        }
    ],
    "mistakes": [
        {
            "wrong": "She study English.",
            "correct": "She studies English.",
            "note": "Subject she membutuhkan verb s/es."
        },
        {
            "wrong": "Does he goes to school?",
            "correct": "Does he go to school?",
            "note": "Setelah does, gunakan V1."
        }
    ]
},
{
    "title": "Present Continuous Tense",
    "goal": "Menyatakan kegiatan yang sedang berlangsung sekarang atau rencana dekat.",
    "structure": "S + am/is/are + V-ing",
    "explanation": "Present Continuous dipakai saat kegiatan sedang terjadi. Kata kuncinya now, right now, at the moment, currently.",
    "keyPoints": [
        "I am + V-ing",
        "You/We/They are + V-ing",
        "He/She/It is + V-ing",
        "Negatif: be + not + V-ing",
        "Jangan hilangkan to be"
    ],
    "examples": [
        {
            "en": "I am reading a book now.",
            "id": "Saya sedang membaca buku sekarang."
        },
        {
            "en": "They are preparing for the test.",
            "id": "Mereka sedang mempersiapkan diri untuk ujian."
        }
    ],
    "mistakes": [
        {
            "wrong": "She reading now.",
            "correct": "She is reading now.",
            "note": "Continuous wajib memakai be."
        },
        {
            "wrong": "I am study English.",
            "correct": "I am studying English.",
            "note": "Setelah be gunakan V-ing."
        }
    ]
},
{
    "title": "Present Perfect Tense",
    "goal": "Menyatakan pengalaman, hasil yang masih terasa sekarang, atau tindakan yang sudah selesai tanpa waktu spesifik.",
    "structure": "S + have/has + V3",
    "explanation": "Present Perfect menghubungkan masa lalu dengan masa sekarang. Gunakan have untuk I/you/we/they dan has untuk he/she/it.",
    "keyPoints": [
        "Have/has + V3",
        "Signal: already, yet, just, ever, never",
        "Since/for sering dipakai",
        "Tidak cocok dengan waktu lampau spesifik seperti yesterday",
        "Fokus pada hasil"
    ],
    "examples": [
        {
            "en": "She has finished her homework.",
            "id": "Dia sudah menyelesaikan PR-nya."
        },
        {
            "en": "I have never visited that city.",
            "id": "Saya belum pernah mengunjungi kota itu."
        }
    ],
    "mistakes": [
        {
            "wrong": "She has finish homework.",
            "correct": "She has finished her homework.",
            "note": "Perfect memakai V3."
        },
        {
            "wrong": "I have seen him yesterday.",
            "correct": "I saw him yesterday.",
            "note": "Yesterday lebih cocok dengan Simple Past."
        }
    ]
},
{
    "title": "Present Perfect Continuous Tense",
    "goal": "Menjelaskan kegiatan yang dimulai di masa lalu dan masih berlangsung atau efeknya masih terasa.",
    "structure": "S + have/has + been + V-ing",
    "explanation": "Tense ini menekankan durasi proses. Biasanya memakai for, since, all day, recently, lately.",
    "keyPoints": [
        "Have/has been + V-ing",
        "For untuk durasi",
        "Since untuk titik awal",
        "Fokus pada proses",
        "Bisa menunjukkan efek sekarang"
    ],
    "examples": [
        {
            "en": "I have been studying English for two hours.",
            "id": "Saya telah belajar bahasa Inggris selama dua jam."
        },
        {
            "en": "She has been working since morning.",
            "id": "Dia telah bekerja sejak pagi."
        }
    ],
    "mistakes": [
        {
            "wrong": "I have studying for two hours.",
            "correct": "I have been studying for two hours.",
            "note": "Harus have/has been + V-ing."
        },
        {
            "wrong": "She has been study.",
            "correct": "She has been studying.",
            "note": "Setelah been gunakan V-ing."
        }
    ]
},
{
    "title": "Simple Past Tense",
    "goal": "Menyatakan kejadian yang selesai di masa lalu dengan waktu jelas.",
    "structure": "S + V2",
    "explanation": "Simple Past digunakan untuk kejadian lampau seperti yesterday, last week, two days ago, in 2020.",
    "keyPoints": [
        "Kalimat positif memakai V2",
        "Negatif: did not + V1",
        "Pertanyaan: Did + subject + V1?",
        "Regular verb berakhiran -ed",
        "Irregular verb harus dihafal"
    ],
    "examples": [
        {
            "en": "They visited the museum yesterday.",
            "id": "Mereka mengunjungi museum kemarin."
        },
        {
            "en": "He did not come to school last week.",
            "id": "Dia tidak datang ke sekolah minggu lalu."
        }
    ],
    "mistakes": [
        {
            "wrong": "She did not went.",
            "correct": "She did not go.",
            "note": "Setelah did not gunakan V1."
        },
        {
            "wrong": "Did you studied?",
            "correct": "Did you study?",
            "note": "Setelah did gunakan V1."
        }
    ]
},
{
    "title": "Past Continuous Tense",
    "goal": "Menyatakan kegiatan yang sedang berlangsung pada waktu tertentu di masa lalu.",
    "structure": "S + was/were + V-ing",
    "explanation": "Past Continuous sering dipakai bersama Simple Past: kegiatan sedang berlangsung, lalu kejadian lain terjadi.",
    "keyPoints": [
        "I/He/She/It was + V-ing",
        "You/We/They were + V-ing",
        "Signal: while, when, at that time",
        "Pola umum: was/were V-ing when V2",
        "While bisa menghubungkan dua proses"
    ],
    "examples": [
        {
            "en": "I was studying when she called.",
            "id": "Saya sedang belajar ketika dia menelepon."
        },
        {
            "en": "They were playing while it was raining.",
            "id": "Mereka sedang bermain saat hujan turun."
        }
    ],
    "mistakes": [
        {
            "wrong": "She were reading.",
            "correct": "She was reading.",
            "note": "She memakai was."
        },
        {
            "wrong": "They was watching TV.",
            "correct": "They were watching TV.",
            "note": "They memakai were."
        }
    ]
},
{
    "title": "Past Perfect Tense",
    "goal": "Menyatakan kejadian yang terjadi lebih dulu sebelum kejadian lain di masa lalu.",
    "structure": "S + had + V3",
    "explanation": "Past Perfect penting untuk membedakan dua kejadian lampau. Kejadian yang lebih dulu memakai had + V3.",
    "keyPoints": [
        "Had + V3 untuk semua subject",
        "Sering bersama before/after/by the time",
        "Kejadian pertama = past perfect",
        "Kejadian kedua = simple past",
        "Fokus pada urutan kejadian"
    ],
    "examples": [
        {
            "en": "The train had left before I arrived.",
            "id": "Kereta sudah berangkat sebelum saya tiba."
        },
        {
            "en": "She had finished the report before the meeting started.",
            "id": "Dia sudah menyelesaikan laporan sebelum rapat dimulai."
        }
    ],
    "mistakes": [
        {
            "wrong": "The train left before I had arrived.",
            "correct": "The train had left before I arrived.",
            "note": "Kejadian yang lebih dulu adalah train left."
        },
        {
            "wrong": "She had finish.",
            "correct": "She had finished.",
            "note": "Had harus diikuti V3."
        }
    ]
},
{
    "title": "Past Perfect Continuous Tense",
    "goal": "Menekankan durasi kegiatan yang berlangsung sebelum kejadian lain di masa lalu.",
    "structure": "S + had + been + V-ing",
    "explanation": "Gunakan tense ini saat ingin menonjolkan lamanya proses sebelum titik waktu lampau.",
    "keyPoints": [
        "Had been + V-ing",
        "Sering memakai for/since",
        "Biasanya diikuti simple past",
        "Fokus pada durasi",
        "Cocok untuk penyebab/efek di masa lalu"
    ],
    "examples": [
        {
            "en": "He had been working for hours before he rested.",
            "id": "Dia telah bekerja berjam-jam sebelum beristirahat."
        },
        {
            "en": "They had been waiting since morning before the bus arrived.",
            "id": "Mereka telah menunggu sejak pagi sebelum bus tiba."
        }
    ],
    "mistakes": [
        {
            "wrong": "He had working for hours.",
            "correct": "He had been working for hours.",
            "note": "Harus had been + V-ing."
        },
        {
            "wrong": "They had been wait.",
            "correct": "They had been waiting.",
            "note": "Setelah been gunakan V-ing."
        }
    ]
},
{
    "title": "Simple Future Tense",
    "goal": "Menyatakan prediksi, janji, keputusan spontan, atau kegiatan masa depan.",
    "structure": "S + will + V1",
    "explanation": "Simple Future memakai will + verb dasar. Jangan tambahkan s/es setelah will.",
    "keyPoints": [
        "Will + V1",
        "Negatif: will not/won't + V1",
        "Pertanyaan: Will + subject + V1?",
        "Signal: tomorrow, soon, next week",
        "Setelah will tidak boleh V2/V-ing"
    ],
    "examples": [
        {
            "en": "I will study harder tomorrow.",
            "id": "Saya akan belajar lebih giat besok."
        },
        {
            "en": "They will not arrive tonight.",
            "id": "Mereka tidak akan tiba malam ini."
        }
    ],
    "mistakes": [
        {
            "wrong": "She will goes.",
            "correct": "She will go.",
            "note": "Setelah will gunakan V1."
        },
        {
            "wrong": "Will you comes?",
            "correct": "Will you come?",
            "note": "Setelah will gunakan V1."
        }
    ]
},
{
    "title": "Future Continuous Tense",
    "goal": "Menyatakan kegiatan yang akan sedang berlangsung pada waktu tertentu di masa depan.",
    "structure": "S + will + be + V-ing",
    "explanation": "Future Continuous digunakan untuk proses yang sedang terjadi di masa depan pada titik waktu tertentu.",
    "keyPoints": [
        "Will be + V-ing",
        "Signal: at this time tomorrow",
        "Menunjukkan proses masa depan",
        "Be tidak boleh dihilangkan",
        "Setelah be gunakan V-ing"
    ],
    "examples": [
        {
            "en": "At this time tomorrow, I will be taking a test.",
            "id": "Pada waktu ini besok, saya akan sedang mengikuti tes."
        },
        {
            "en": "She will be working at eight tonight.",
            "id": "Dia akan sedang bekerja pukul delapan malam ini."
        }
    ],
    "mistakes": [
        {
            "wrong": "I will taking a test.",
            "correct": "I will be taking a test.",
            "note": "Future Continuous butuh will be."
        },
        {
            "wrong": "She will be work.",
            "correct": "She will be working.",
            "note": "Setelah be gunakan V-ing."
        }
    ]
},
{
    "title": "Future Perfect Tense",
    "goal": "Menyatakan tindakan yang akan sudah selesai sebelum waktu tertentu di masa depan.",
    "structure": "S + will + have + V3",
    "explanation": "Future Perfect memakai batas waktu seperti by tomorrow, by next week, by the time.",
    "keyPoints": [
        "Will have + V3",
        "Signal: by + future time",
        "Fokus pada hasil selesai",
        "Bukan sedang berlangsung",
        "Jangan gunakan V1 setelah have"
    ],
    "examples": [
        {
            "en": "By next week, we will have completed the project.",
            "id": "Minggu depan kami akan sudah menyelesaikan proyek itu."
        },
        {
            "en": "She will have left before you arrive.",
            "id": "Dia akan sudah pergi sebelum kamu tiba."
        }
    ],
    "mistakes": [
        {
            "wrong": "We will have complete.",
            "correct": "We will have completed.",
            "note": "Will have harus diikuti V3."
        },
        {
            "wrong": "She will has finished.",
            "correct": "She will have finished.",
            "note": "Setelah will gunakan have, bukan has."
        }
    ]
},
{
    "title": "Future Perfect Continuous Tense",
    "goal": "Menekankan durasi kegiatan yang akan sudah berlangsung sampai titik waktu tertentu di masa depan.",
    "structure": "S + will + have + been + V-ing",
    "explanation": "Tense ini panjang tetapi logis: will + have + been + V-ing. Biasanya memakai for dan by.",
    "keyPoints": [
        "Will have been + V-ing",
        "Fokus pada durasi",
        "Signal: by next year, for",
        "Sering muncul di teks formal",
        "Jangan hilangkan been"
    ],
    "examples": [
        {
            "en": "By next year, I will have been studying English for four years.",
            "id": "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun."
        },
        {
            "en": "By midnight, they will have been working for ten hours.",
            "id": "Saat tengah malam mereka akan sudah bekerja selama sepuluh jam."
        }
    ],
    "mistakes": [
        {
            "wrong": "I will have studying.",
            "correct": "I will have been studying.",
            "note": "Harus will have been + V-ing."
        },
        {
            "wrong": "They will have been work.",
            "correct": "They will have been working.",
            "note": "Setelah been gunakan V-ing."
        }
    ]
},
{
    "title": "Simple Past Future Tense",
    "goal": "Memahami would sebagai bentuk future dari sudut pandang masa lalu.",
    "structure": "S + would + V1",
    "explanation": "Simple Past Future sering muncul dalam reported speech: will berubah menjadi would ketika reporting verb berbentuk lampau.",
    "keyPoints": [
        "Would + V1",
        "Sering setelah said/told/thought",
        "Dipakai untuk rencana masa depan di masa lalu",
        "Bisa juga untuk kalimat sopan",
        "Jangan gunakan V2 setelah would"
    ],
    "examples": [
        {
            "en": "She said that she would study harder.",
            "id": "Dia mengatakan bahwa dia akan belajar lebih giat."
        },
        {
            "en": "I thought they would help us.",
            "id": "Saya pikir mereka akan membantu kita."
        }
    ],
    "mistakes": [
        {
            "wrong": "She would studied.",
            "correct": "She would study.",
            "note": "Setelah would gunakan V1."
        },
        {
            "wrong": "He said he will come.",
            "correct": "He said he would come.",
            "note": "Dalam reported speech lampau, will biasanya menjadi would."
        }
    ]
},
{
    "title": "Past Future Continuous Tense",
    "goal": "Menyatakan kegiatan yang akan sedang berlangsung menurut sudut pandang masa lalu.",
    "structure": "S + would + be + V-ing",
    "explanation": "Pola ini sering dipakai dalam kalimat tidak langsung atau prediksi masa lalu tentang proses.",
    "keyPoints": [
        "Would be + V-ing",
        "Sering setelah said/thought/knew",
        "Fokus pada proses",
        "Be wajib ada",
        "V-ing wajib dipakai"
    ],
    "examples": [
        {
            "en": "He said that he would be working at eight.",
            "id": "Dia berkata bahwa dia akan sedang bekerja pukul delapan."
        },
        {
            "en": "I knew she would be waiting for me.",
            "id": "Saya tahu dia akan sedang menunggu saya."
        }
    ],
    "mistakes": [
        {
            "wrong": "He would working.",
            "correct": "He would be working.",
            "note": "Harus would be + V-ing."
        },
        {
            "wrong": "She would be wait.",
            "correct": "She would be waiting.",
            "note": "Setelah be gunakan V-ing."
        }
    ]
},
{
    "title": "Past Future Perfect Tense",
    "goal": "Memahami would have + V3 untuk hasil hipotesis atau hasil yang direncanakan dari sudut pandang masa lalu.",
    "structure": "S + would + have + V3",
    "explanation": "Tense ini sangat penting untuk conditional sentence type 3 dan kalimat penyesalan.",
    "keyPoints": [
        "Would have + V3",
        "Sering bersama if + had + V3",
        "Menunjukkan hal yang tidak terjadi",
        "Bisa dipakai untuk reported plan",
        "Fokus pada hasil"
    ],
    "examples": [
        {
            "en": "She would have passed if she had studied.",
            "id": "Dia akan sudah lulus jika dia belajar."
        },
        {
            "en": "They said they would have finished it by Monday.",
            "id": "Mereka mengatakan mereka akan sudah menyelesaikannya pada hari Senin."
        }
    ],
    "mistakes": [
        {
            "wrong": "She would have pass.",
            "correct": "She would have passed.",
            "note": "Would have harus diikuti V3."
        },
        {
            "wrong": "If she studied, she would have passed.",
            "correct": "If she had studied, she would have passed.",
            "note": "Conditional type 3 memakai if + had + V3."
        }
    ]
},
{
    "title": "Past Future Perfect Continuous Tense",
    "goal": "Memahami would have been + V-ing untuk durasi hipotesis masa lalu.",
    "structure": "S + would + have + been + V-ing",
    "explanation": "Pola ini paling kompleks. Gunakan untuk menekankan durasi yang seharusnya berlangsung, tetapi situasinya tidak terjadi.",
    "keyPoints": [
        "Would have been + V-ing",
        "Sering bersama if + had + V3",
        "Fokus pada durasi",
        "Dipakai pada konteks formal",
        "Pahami bagian demi bagian"
    ],
    "examples": [
        {
            "en": "He would have been working there for ten years if he had stayed.",
            "id": "Dia akan sudah bekerja di sana selama sepuluh tahun jika dia tetap tinggal."
        },
        {
            "en": "By June, I would have been studying English for two years.",
            "id": "Pada bulan Juni, saya akan sudah belajar bahasa Inggris selama dua tahun."
        }
    ],
    "mistakes": [
        {
            "wrong": "He would have been work.",
            "correct": "He would have been working.",
            "note": "Setelah been gunakan V-ing."
        },
        {
            "wrong": "He would been working.",
            "correct": "He would have been working.",
            "note": "Pola lengkapnya would have been + V-ing."
        }
    ]
},
{
    "title": "Passive Voice",
    "goal": "Mengubah fokus kalimat dari pelaku menjadi objek yang dikenai tindakan.",
    "structure": "S + be + V3 + by + agent",
    "explanation": "Passive Voice digunakan ketika objek lebih penting daripada pelaku, atau pelaku tidak diketahui. Bentuk be menyesuaikan tense, sedangkan verb utama selalu V3.",
    "keyPoints": [
        "Active: The teacher explains the lesson",
        "Passive: The lesson is explained by the teacher",
        "Be berubah sesuai tense",
        "Verb utama selalu V3",
        "By digunakan jika pelaku perlu disebutkan"
    ],
    "examples": [
        {
            "en": "The report was written by the student.",
            "id": "Laporan itu ditulis oleh siswa."
        },
        {
            "en": "English is spoken in many countries.",
            "id": "Bahasa Inggris digunakan di banyak negara."
        }
    ],
    "mistakes": [
        {
            "wrong": "The book is write by him.",
            "correct": "The book is written by him.",
            "note": "Passive memakai be + V3."
        },
        {
            "wrong": "The lesson explained by teacher.",
            "correct": "The lesson is explained by the teacher.",
            "note": "Tambahkan be sesuai tense."
        }
    ]
},
{
    "title": "Question Tag",
    "goal": "Membuat pertanyaan pendek di akhir kalimat untuk meminta konfirmasi.",
    "structure": "Positive statement + negative tag? / Negative statement + positive tag?",
    "explanation": "Question tag mengikuti auxiliary pada kalimat utama. Jika kalimat utama positif, tag biasanya negatif. Jika kalimat utama negatif, tag biasanya positif.",
    "keyPoints": [
        "She is smart, isn't she?",
        "You don't know him, do you?",
        "Gunakan auxiliary yang sama",
        "Subject di tag berbentuk pronoun",
        "I am menjadi aren't I? dalam penggunaan umum"
    ],
    "examples": [
        {
            "en": "She is your teacher, isn't she?",
            "id": "Dia gurumu, bukan?"
        },
        {
            "en": "They didn't come yesterday, did they?",
            "id": "Mereka tidak datang kemarin, kan?"
        }
    ],
    "mistakes": [
        {
            "wrong": "She is smart, is she?",
            "correct": "She is smart, isn't she?",
            "note": "Kalimat positif memakai tag negatif."
        },
        {
            "wrong": "They play football, aren't they?",
            "correct": "They play football, don't they?",
            "note": "Simple Present memakai do/does."
        }
    ]
},
{
    "title": "Degree of Comparison",
    "goal": "Membandingkan sifat, jumlah, atau kualitas antara orang/benda.",
    "structure": "Positive / Comparative / Superlative",
    "explanation": "Comparison terdiri dari positive degree, comparative degree, dan superlative degree. Gunakan -er/-est untuk adjective pendek dan more/most untuk adjective panjang.",
    "keyPoints": [
        "Tall - taller - tallest",
        "Beautiful - more beautiful - most beautiful",
        "Comparative memakai than",
        "Superlative biasanya memakai the",
        "Irregular: good-better-best, bad-worse-worst"
    ],
    "examples": [
        {
            "en": "This book is more interesting than that one.",
            "id": "Buku ini lebih menarik daripada yang itu."
        },
        {
            "en": "She is the best student in the class.",
            "id": "Dia siswa terbaik di kelas."
        }
    ],
    "mistakes": [
        {
            "wrong": "More better",
            "correct": "Better",
            "note": "Better sudah bentuk comparative."
        },
        {
            "wrong": "She is smartest student.",
            "correct": "She is the smartest student.",
            "note": "Superlative biasanya memakai the."
        }
    ]
},
{
    "title": "Direct and Indirect Speech",
    "goal": "Mengubah ucapan langsung menjadi kalimat tidak langsung dengan benar.",
    "structure": "Direct: He said, \"I am tired.\" → Indirect: He said that he was tired.",
    "explanation": "Dalam indirect speech, pronoun, tense, dan time expression sering berubah. Jika reporting verb berbentuk past, tense biasanya mundur satu tingkat.",
    "keyPoints": [
        "am/is → was",
        "are → were",
        "will → would",
        "can → could",
        "today → that day",
        "tomorrow → the next day"
    ],
    "examples": [
        {
            "en": "She said that she was studying English.",
            "id": "Dia mengatakan bahwa dia sedang belajar bahasa Inggris."
        },
        {
            "en": "He told me that he would call me the next day.",
            "id": "Dia memberitahuku bahwa dia akan meneleponku keesokan harinya."
        }
    ],
    "mistakes": [
        {
            "wrong": "She said that I am tired.",
            "correct": "She said that she was tired.",
            "note": "Pronoun dan tense harus disesuaikan."
        },
        {
            "wrong": "He said he will come tomorrow.",
            "correct": "He said he would come the next day.",
            "note": "Will menjadi would dan tomorrow menjadi the next day."
        }
    ]
},
{
    "title": "Preferences",
    "goal": "Menyatakan pilihan atau hal yang lebih disukai dengan pola yang tepat.",
    "structure": "prefer + noun/V-ing + to + noun/V-ing | would rather + V1 | would prefer + to V1",
    "explanation": "Preferences digunakan untuk menyatakan pilihan. Prefer biasanya diikuti noun atau V-ing, would rather diikuti V1, dan would prefer diikuti to V1.",
    "keyPoints": [
        "I prefer tea to coffee",
        "I prefer reading to watching TV",
        "I would rather study than play",
        "I would prefer to stay home",
        "Jangan campur pola prefer dan would rather"
    ],
    "examples": [
        {
            "en": "I prefer studying at night to studying in the morning.",
            "id": "Saya lebih suka belajar malam daripada pagi."
        },
        {
            "en": "She would rather read than watch TV.",
            "id": "Dia lebih suka membaca daripada menonton TV."
        }
    ],
    "mistakes": [
        {
            "wrong": "I prefer read than watch.",
            "correct": "I prefer reading to watching.",
            "note": "Prefer + V-ing + to + V-ing."
        },
        {
            "wrong": "I would rather to stay.",
            "correct": "I would rather stay.",
            "note": "Would rather langsung diikuti V1."
        }
    ]
},
{
    "title": "Exclamatory Sentences",
    "goal": "Membuat kalimat seruan untuk menunjukkan emosi seperti kagum, kaget, atau senang.",
    "structure": "What + a/an + adjective + noun! / How + adjective/adverb + subject + verb!",
    "explanation": "Exclamatory sentence memakai what atau how. What biasanya diikuti noun phrase, sedangkan how diikuti adjective/adverb.",
    "keyPoints": [
        "What a beautiful day!",
        "What an interesting book!",
        "How beautiful she is!",
        "How quickly he runs!",
        "Gunakan a/an untuk countable singular noun"
    ],
    "examples": [
        {
            "en": "What a difficult question it is!",
            "id": "Betapa sulitnya pertanyaan itu!"
        },
        {
            "en": "How clearly the teacher explains the lesson!",
            "id": "Betapa jelas guru menjelaskan pelajaran itu!"
        }
    ],
    "mistakes": [
        {
            "wrong": "How a beautiful day!",
            "correct": "What a beautiful day!",
            "note": "Jika ada noun day, gunakan What."
        },
        {
            "wrong": "What beautiful she is!",
            "correct": "How beautiful she is!",
            "note": "Jika fokus pada adjective, gunakan How."
        }
    ]
},
{
    "title": "Conditional Sentences",
    "goal": "Memahami kalimat pengandaian dari fakta umum sampai penyesalan masa lalu.",
    "structure": "Type 0 / Type 1 / Type 2 / Type 3 / Mixed Conditional",
    "explanation": "Conditional sentence memakai if clause dan main clause. Setiap tipe punya fungsi: fakta, kemungkinan nyata, pengandaian tidak nyata, dan penyesalan masa lalu.",
    "keyPoints": [
        "Type 0: If + present, present",
        "Type 1: If + present, will + V1",
        "Type 2: If + past, would + V1",
        "Type 3: If + had + V3, would have + V3",
        "Mixed: kombinasi masa lalu dan sekarang"
    ],
    "examples": [
        {
            "en": "If I study hard, I will pass the test.",
            "id": "Jika saya belajar keras, saya akan lulus tes."
        },
        {
            "en": "If she had studied, she would have passed.",
            "id": "Jika dia belajar, dia akan sudah lulus."
        }
    ],
    "mistakes": [
        {
            "wrong": "If I will study, I will pass.",
            "correct": "If I study, I will pass.",
            "note": "Type 1 memakai present tense pada if clause."
        },
        {
            "wrong": "If she studied, she would have passed.",
            "correct": "If she had studied, she would have passed.",
            "note": "Type 3 memakai had + V3."
        }
    ]
},
{
    "title": "Each and Every",
    "goal": "Membedakan each dan every untuk menyatakan setiap orang/benda.",
    "structure": "Each/Every + singular noun + singular verb",
    "explanation": "Each menekankan satu per satu, sedangkan every menekankan semua anggota dalam satu kelompok. Keduanya biasanya diikuti singular noun dan singular verb.",
    "keyPoints": [
        "Each student has a book",
        "Every student has a book",
        "Each = satu per satu",
        "Every = semua secara umum",
        "Each of + plural noun + singular verb"
    ],
    "examples": [
        {
            "en": "Each student has a different answer.",
            "id": "Setiap siswa memiliki jawaban yang berbeda."
        },
        {
            "en": "Every classroom has a whiteboard.",
            "id": "Setiap kelas memiliki papan tulis."
        }
    ],
    "mistakes": [
        {
            "wrong": "Each students have a book.",
            "correct": "Each student has a book.",
            "note": "Each diikuti singular noun dan singular verb."
        },
        {
            "wrong": "Every of the students are ready.",
            "correct": "Each of the students is ready.",
            "note": "Gunakan each of, bukan every of."
        }
    ]
},
{
    "title": "Relative Pronoun",
    "goal": "Menghubungkan noun dengan penjelas tambahan menggunakan who, whom, which, that, whose.",
    "structure": "Noun + relative pronoun + clause",
    "explanation": "Relative pronoun membentuk relative clause. Who untuk orang sebagai subject, whom untuk orang sebagai object, which untuk benda/hewan, that untuk orang/benda, dan whose untuk kepemilikan.",
    "keyPoints": [
        "Who = orang sebagai subject",
        "Whom = orang sebagai object",
        "Which = benda/hewan",
        "That = orang/benda",
        "Whose = milik siapa"
    ],
    "examples": [
        {
            "en": "The student who sits near me is friendly.",
            "id": "Siswa yang duduk dekat saya ramah."
        },
        {
            "en": "The book that you gave me is useful.",
            "id": "Buku yang kamu berikan kepada saya bermanfaat."
        }
    ],
    "mistakes": [
        {
            "wrong": "The student which sits near me.",
            "correct": "The student who sits near me.",
            "note": "Untuk orang, gunakan who."
        },
        {
            "wrong": "The book who I read.",
            "correct": "The book that I read / The book which I read.",
            "note": "Untuk benda, gunakan which atau that."
        }
    ]
},
{
    "title": "Because vs Because Of",
    "goal": "Membedakan because dan because of agar kalimat sebab-akibat tidak salah struktur.",
    "structure": "Because + clause | Because of + noun/noun phrase/V-ing",
    "explanation": "Because diikuti klausa lengkap yang punya subject dan verb. Because of diikuti noun phrase atau gerund, bukan klausa lengkap.",
    "keyPoints": [
        "Because + S + V",
        "Because of + noun",
        "Because of + V-ing",
        "Because menjelaskan alasan dalam klausa",
        "Because of menjelaskan sebab berupa frasa"
    ],
    "examples": [
        {
            "en": "She stayed home because she was sick.",
            "id": "Dia tinggal di rumah karena dia sakit."
        },
        {
            "en": "She stayed home because of her illness.",
            "id": "Dia tinggal di rumah karena penyakitnya."
        }
    ],
    "mistakes": [
        {
            "wrong": "Because of she was sick.",
            "correct": "Because she was sick.",
            "note": "Karena ada subject dan verb, gunakan because."
        },
        {
            "wrong": "Because the rain, we stayed home.",
            "correct": "Because of the rain, we stayed home.",
            "note": "The rain adalah noun phrase, gunakan because of."
        }
    ]
},
{
    "title": "Another, Other, Others, The Other, The Others",
    "goal": "Membedakan kata lain/satu lagi/beberapa lainnya dengan benar.",
    "structure": "another + singular noun | other + plural noun | others = other people/things",
    "explanation": "Another berarti satu lagi atau yang lain untuk singular noun. Other digunakan sebelum plural/uncountable noun. Others berdiri sendiri sebagai pronoun. The other/the others merujuk sisa yang spesifik.",
    "keyPoints": [
        "Another book = satu buku lain",
        "Other books = buku-buku lain",
        "Others = yang lainnya",
        "The other = yang satu lagi dari dua",
        "The others = sisanya yang spesifik"
    ],
    "examples": [
        {
            "en": "I need another example.",
            "id": "Saya membutuhkan satu contoh lagi."
        },
        {
            "en": "Some students passed the test, but others did not.",
            "id": "Beberapa siswa lulus tes, tetapi yang lainnya tidak."
        }
    ],
    "mistakes": [
        {
            "wrong": "I need other example.",
            "correct": "I need another example.",
            "note": "Singular countable noun memakai another."
        },
        {
            "wrong": "Others students are absent.",
            "correct": "Other students are absent.",
            "note": "Jika diikuti noun, gunakan other."
        }
    ]
}
],

  foundationVocabulary: [
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "I",
        "id": "saya/aku",
        "example": "I am learning English."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "you",
        "id": "kamu/Anda",
        "example": "You can practice every day."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "we",
        "id": "kami/kita",
        "example": "We study together."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "they",
        "id": "mereka",
        "example": "They are in the classroom."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "he",
        "id": "dia laki-laki",
        "example": "He likes reading."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "she",
        "id": "dia perempuan",
        "example": "She writes carefully."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "student",
        "id": "siswa/mahasiswa",
        "example": "The student answers the question."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "teacher",
        "id": "guru",
        "example": "The teacher explains grammar."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "friend",
        "id": "teman",
        "example": "My friend helps me."
    },
    {
        "level": "Basic",
        "category": "Pronoun & People",
        "wordClass": "pronoun/noun",
        "en": "family",
        "id": "keluarga",
        "example": "My family supports me."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "eat",
        "id": "makan",
        "example": "I eat breakfast at six."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "drink",
        "id": "minum",
        "example": "She drinks water."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "sleep",
        "id": "tidur",
        "example": "They sleep early."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "wake up",
        "id": "bangun tidur",
        "example": "I wake up early."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "go",
        "id": "pergi",
        "example": "We go to school."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "come",
        "id": "datang",
        "example": "He comes here every day."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "read",
        "id": "membaca",
        "example": "She reads a book."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "write",
        "id": "menulis",
        "example": "I write new words."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "listen",
        "id": "mendengarkan",
        "example": "They listen carefully."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "speak",
        "id": "berbicara",
        "example": "We speak English slowly."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "learn",
        "id": "belajar",
        "example": "I learn grammar."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "study",
        "id": "belajar/mempelajari",
        "example": "She studies English."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "practice",
        "id": "berlatih",
        "example": "Practice makes you better."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "understand",
        "id": "memahami",
        "example": "I understand the sentence."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "remember",
        "id": "mengingat",
        "example": "Remember the pattern."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "forget",
        "id": "lupa",
        "example": "Do not forget the verb."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "bring",
        "id": "membawa",
        "example": "I bring my notebook."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "help",
        "id": "membantu",
        "example": "Can you help me?"
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "ask",
        "id": "bertanya",
        "example": "She asks a question."
    },
    {
        "level": "Basic",
        "category": "Daily Verb",
        "wordClass": "verb",
        "en": "answer",
        "id": "menjawab",
        "example": "He answers correctly."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "today",
        "id": "hari ini",
        "example": "I study today."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "tomorrow",
        "id": "besok",
        "example": "We will meet tomorrow."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "yesterday",
        "id": "kemarin",
        "example": "She called yesterday."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "now",
        "id": "sekarang",
        "example": "I am studying now."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "later",
        "id": "nanti",
        "example": "I will call later."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "always",
        "id": "selalu",
        "example": "He always arrives early."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "usually",
        "id": "biasanya",
        "example": "She usually studies at night."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "often",
        "id": "sering",
        "example": "They often practice speaking."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "sometimes",
        "id": "kadang-kadang",
        "example": "I sometimes forget words."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "never",
        "id": "tidak pernah",
        "example": "He never gives up."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "every day",
        "id": "setiap hari",
        "example": "I learn English every day."
    },
    {
        "level": "Basic",
        "category": "Time & Frequency",
        "wordClass": "adverb/noun",
        "en": "next week",
        "id": "minggu depan",
        "example": "We have a test next week."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "book",
        "id": "buku",
        "example": "The book is useful."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "notebook",
        "id": "buku catatan",
        "example": "I write in my notebook."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "pencil",
        "id": "pensil",
        "example": "She uses a pencil."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "classroom",
        "id": "ruang kelas",
        "example": "The students are in the classroom."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "lesson",
        "id": "pelajaran",
        "example": "The lesson is difficult."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "homework",
        "id": "pekerjaan rumah",
        "example": "I finished my homework."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "assignment",
        "id": "tugas",
        "example": "The assignment is long."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "exam",
        "id": "ujian",
        "example": "The exam starts at nine."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "question",
        "id": "pertanyaan",
        "example": "This question is tricky."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "answer",
        "id": "jawaban",
        "example": "Choose the correct answer."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "sentence",
        "id": "kalimat",
        "example": "This sentence has one verb."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "meaning",
        "id": "arti",
        "example": "What is the meaning?"
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "vocabulary",
        "id": "kosakata",
        "example": "Vocabulary helps reading."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "pronunciation",
        "id": "pengucapan",
        "example": "Pronunciation needs practice."
    },
    {
        "level": "Daily",
        "category": "School & Learning",
        "wordClass": "noun",
        "en": "dictionary",
        "id": "kamus",
        "example": "Use a dictionary wisely."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "good",
        "id": "baik",
        "example": "This is a good answer."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "bad",
        "id": "buruk",
        "example": "That is a bad habit."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "easy",
        "id": "mudah",
        "example": "The lesson is easy."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "difficult",
        "id": "sulit",
        "example": "The question is difficult."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "important",
        "id": "penting",
        "example": "Grammar is important."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "different",
        "id": "berbeda",
        "example": "These words are different."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "similar",
        "id": "mirip",
        "example": "The two answers are similar."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "correct",
        "id": "benar",
        "example": "Your answer is correct."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "wrong",
        "id": "salah",
        "example": "This word order is wrong."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "clear",
        "id": "jelas",
        "example": "The explanation is clear."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "careful",
        "id": "hati-hati",
        "example": "Be careful with verbs."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "confident",
        "id": "percaya diri",
        "example": "She is confident."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "ready",
        "id": "siap",
        "example": "I am ready for the test."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "late",
        "id": "terlambat",
        "example": "He came late."
    },
    {
        "level": "Daily",
        "category": "Common Adjective",
        "wordClass": "adjective",
        "en": "early",
        "id": "awal/pagi-pagi",
        "example": "She arrived early."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "explain",
        "id": "menjelaskan",
        "example": "The teacher explains the rule."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "describe",
        "id": "menggambarkan/menjelaskan",
        "example": "Describe the picture."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "compare",
        "id": "membandingkan",
        "example": "Compare the two sentences."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "choose",
        "id": "memilih",
        "example": "Choose the best answer."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "complete",
        "id": "menyelesaikan/melengkapi",
        "example": "Complete the sentence."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "identify",
        "id": "mengidentifikasi",
        "example": "Identify the subject."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "analyze",
        "id": "menganalisis",
        "example": "Analyze the structure."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "review",
        "id": "meninjau/mengulang",
        "example": "Review the lesson."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "improve",
        "id": "meningkatkan",
        "example": "I want to improve my English."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "develop",
        "id": "mengembangkan",
        "example": "Develop your vocabulary."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "support",
        "id": "mendukung",
        "example": "The example supports the idea."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "avoid",
        "id": "menghindari",
        "example": "Avoid common mistakes."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "prepare",
        "id": "mempersiapkan",
        "example": "Prepare before the test."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "require",
        "id": "membutuhkan/mensyaratkan",
        "example": "This task requires focus."
    },
    {
        "level": "Intermediate",
        "category": "Academic Verb",
        "wordClass": "verb",
        "en": "include",
        "id": "mencakup/termasuk",
        "example": "The lesson includes tenses."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "because",
        "id": "karena",
        "example": "I study because I have a test."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "although",
        "id": "meskipun",
        "example": "Although it is hard, I keep trying."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "while",
        "id": "sementara/ketika",
        "example": "She reads while I write."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "when",
        "id": "ketika",
        "example": "Call me when you arrive."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "if",
        "id": "jika",
        "example": "If I practice, I improve."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "before",
        "id": "sebelum",
        "example": "Review before the exam."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "after",
        "id": "setelah",
        "example": "I rest after studying."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "therefore",
        "id": "oleh karena itu",
        "example": "Therefore, the answer is correct."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "however",
        "id": "namun",
        "example": "However, the rule is different."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "moreover",
        "id": "selain itu",
        "example": "Moreover, vocabulary is important."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "instead",
        "id": "sebagai gantinya",
        "example": "Use V1 instead."
    },
    {
        "level": "Intermediate",
        "category": "Connectors",
        "wordClass": "conjunction/adverb",
        "en": "unless",
        "id": "kecuali jika",
        "example": "You will not improve unless you practice."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "subject",
        "id": "subjek",
        "example": "Find the subject first."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "predicate",
        "id": "predikat",
        "example": "The predicate contains the verb."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "object",
        "id": "objek",
        "example": "The object receives the action."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "complement",
        "id": "pelengkap",
        "example": "A complement completes meaning."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "clause",
        "id": "klausa",
        "example": "A clause has a subject and verb."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "phrase",
        "id": "frasa",
        "example": "A phrase does not have a full subject-verb pair."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "modifier",
        "id": "penjelas",
        "example": "Modifiers add information."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "agreement",
        "id": "kesesuaian",
        "example": "Subject-verb agreement is tested."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "parallelism",
        "id": "kesejajaran struktur",
        "example": "Parallelism makes a sentence balanced."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "inversion",
        "id": "pembalikan susunan",
        "example": "Inversion appears after negative expressions."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "gerund",
        "id": "kata kerja berbentuk -ing sebagai noun",
        "example": "Swimming is fun."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "infinitive",
        "id": "to + verb dasar",
        "example": "I want to learn."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "participle",
        "id": "bentuk verb sebagai adjective/phrase",
        "example": "The broken window was repaired."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "preposition",
        "id": "kata depan",
        "example": "Put the book on the table."
    },
    {
        "level": "Academic",
        "category": "TOEFL Structure",
        "wordClass": "noun/term",
        "en": "conjunction",
        "id": "kata hubung",
        "example": "Use conjunctions correctly."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "accurate",
        "id": "akurat",
        "example": "The answer is accurate."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "inaccurate",
        "id": "tidak akurat",
        "example": "The data is inaccurate."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "appropriate",
        "id": "tepat/sesuai",
        "example": "Choose the appropriate word."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "essential",
        "id": "sangat penting",
        "example": "Vocabulary is essential."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "significant",
        "id": "signifikan/penting",
        "example": "There is a significant difference."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "available",
        "id": "tersedia",
        "example": "The material is available online."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "effective",
        "id": "efektif",
        "example": "This method is effective."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "efficient",
        "id": "efisien",
        "example": "Study efficiently."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "clearly",
        "id": "dengan jelas",
        "example": "Explain it clearly."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "carefully",
        "id": "dengan hati-hati",
        "example": "Read carefully."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "fluently",
        "id": "dengan lancar",
        "example": "She speaks fluently."
    },
    {
        "level": "Academic",
        "category": "Academic Adjective/Adverb",
        "wordClass": "adjective/adverb",
        "en": "gradually",
        "id": "secara bertahap",
        "example": "You improve gradually."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "infer",
        "id": "menyimpulkan",
        "example": "Infer the meaning from context."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "indicate",
        "id": "menunjukkan",
        "example": "The word indicates contrast."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "refer",
        "id": "merujuk",
        "example": "The pronoun refers to the noun."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "imply",
        "id": "menyiratkan",
        "example": "The sentence implies a problem."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "summarize",
        "id": "merangkum",
        "example": "Summarize the paragraph."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "distinguish",
        "id": "membedakan",
        "example": "Distinguish facts from opinions."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "emphasize",
        "id": "menekankan",
        "example": "The author emphasizes the result."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "conclude",
        "id": "menyimpulkan",
        "example": "We can conclude the answer."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "determine",
        "id": "menentukan",
        "example": "Determine the main idea."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "predict",
        "id": "memprediksi",
        "example": "Predict the next sentence."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "evaluate",
        "id": "mengevaluasi",
        "example": "Evaluate the statement."
    },
    {
        "level": "TOEFL",
        "category": "Reading & Test Verb",
        "wordClass": "verb",
        "en": "justify",
        "id": "membenarkan/memberi alasan",
        "example": "Justify your answer."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "evidence",
        "id": "bukti",
        "example": "The evidence supports the answer."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "purpose",
        "id": "tujuan",
        "example": "What is the author's purpose?"
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "attitude",
        "id": "sikap",
        "example": "The author's attitude is positive."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "statement",
        "id": "pernyataan",
        "example": "The statement is true."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "passage",
        "id": "bacaan",
        "example": "Read the passage carefully."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "context",
        "id": "konteks",
        "example": "Use context clues."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "definition",
        "id": "definisi",
        "example": "The definition is in the paragraph."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "contrast",
        "id": "pertentangan/perbedaan",
        "example": "However shows contrast."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "cause",
        "id": "penyebab",
        "example": "Find the cause."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "effect",
        "id": "akibat/pengaruh",
        "example": "What is the effect?"
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "result",
        "id": "hasil",
        "example": "The result was surprising."
    },
    {
        "level": "TOEFL",
        "category": "TOEFL Noun",
        "wordClass": "noun",
        "en": "process",
        "id": "proses",
        "example": "The process takes time."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "ambiguous",
        "id": "bermakna ganda/tidak jelas",
        "example": "The sentence is ambiguous."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "comprehensive",
        "id": "menyeluruh",
        "example": "This is a comprehensive lesson."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "consistent",
        "id": "konsisten",
        "example": "Use consistent tense."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "conventional",
        "id": "konvensional/umum",
        "example": "This is a conventional method."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "crucial",
        "id": "sangat penting",
        "example": "Subject-verb agreement is crucial."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "derive",
        "id": "berasal/menurunkan",
        "example": "The word derives from Latin."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "elaborate",
        "id": "menjelaskan secara rinci",
        "example": "Elaborate your answer."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "enhance",
        "id": "meningkatkan",
        "example": "Reading enhances vocabulary."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "fundamental",
        "id": "mendasar",
        "example": "Grammar is fundamental."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "hypothesis",
        "id": "hipotesis",
        "example": "The hypothesis needs evidence."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "interpret",
        "id": "menafsirkan",
        "example": "Interpret the meaning."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "occur",
        "id": "terjadi",
        "example": "Mistakes often occur."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "perspective",
        "id": "sudut pandang",
        "example": "Consider another perspective."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "precise",
        "id": "tepat/teliti",
        "example": "Use precise words."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "relevant",
        "id": "relevan",
        "example": "Choose relevant information."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "substantial",
        "id": "besar/kuat/cukup banyak",
        "example": "There is substantial evidence."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "sufficient",
        "id": "cukup",
        "example": "The explanation is sufficient."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "unnecessary",
        "id": "tidak perlu",
        "example": "Avoid unnecessary words."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "whereas",
        "id": "sedangkan",
        "example": "Simple is general, whereas continuous is ongoing."
    },
    {
        "level": "Advanced",
        "category": "Hard Vocabulary",
        "wordClass": "adjective/verb/noun",
        "en": "nevertheless",
        "id": "meskipun demikian",
        "example": "Nevertheless, he continued studying."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "begin-began-begun",
        "id": "mulai",
        "example": "The class has begun."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "break-broke-broken",
        "id": "memecahkan/rusak",
        "example": "The phone was broken."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "choose-chose-chosen",
        "id": "memilih",
        "example": "She has chosen the answer."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "come-came-come",
        "id": "datang",
        "example": "He came yesterday."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "do-did-done",
        "id": "melakukan",
        "example": "I have done my homework."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "go-went-gone",
        "id": "pergi",
        "example": "She has gone home."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "see-saw-seen",
        "id": "melihat",
        "example": "I have seen that movie."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "speak-spoke-spoken",
        "id": "berbicara",
        "example": "English is spoken widely."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "take-took-taken",
        "id": "mengambil",
        "example": "The test was taken yesterday."
    },
    {
        "level": "Intermediate",
        "category": "Irregular Verb",
        "wordClass": "verb",
        "en": "write-wrote-written",
        "id": "menulis",
        "example": "She has written a report."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "analysis / analyze / analytical",
        "id": "analisis / menganalisis / analitis",
        "example": "Analyze the sentence structure."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "decision / decide / decisive",
        "id": "keputusan / memutuskan / tegas",
        "example": "They decided quickly."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "explanation / explain / explanatory",
        "id": "penjelasan / menjelaskan / bersifat menjelaskan",
        "example": "The explanation is clear."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "improvement / improve / improved",
        "id": "peningkatan / meningkatkan / meningkat",
        "example": "Practice improves skill."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "development / develop / developed",
        "id": "pengembangan / mengembangkan / berkembang",
        "example": "Vocabulary develops gradually."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "communication / communicate / communicative",
        "id": "komunikasi / berkomunikasi / komunikatif",
        "example": "Communication requires practice."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "education / educate / educational",
        "id": "pendidikan / mendidik / edukatif",
        "example": "Educational materials help students."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "organization / organize / organized",
        "id": "organisasi / mengatur / teratur",
        "example": "Organize your notes."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "information / inform / informative",
        "id": "informasi / memberi tahu / informatif",
        "example": "The passage is informative."
    },
    {
        "level": "Advanced",
        "category": "Word Family",
        "wordClass": "noun/verb/adjective/adverb",
        "en": "recommendation / recommend / recommended",
        "id": "rekomendasi / merekomendasikan / direkomendasikan",
        "example": "The teacher recommended a book."
    },
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "accept",
    "id": "menerima",
    "example": "Please accept my answer."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "add",
    "id": "menambahkan",
    "example": "Add more words to the sentence."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "agree",
    "id": "setuju",
    "example": "I agree with your idea."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "allow",
    "id": "mengizinkan",
    "example": "My teacher allows me to ask questions."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "arrive",
    "id": "tiba",
    "example": "They arrive at school early."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "become",
    "id": "menjadi",
    "example": "Practice helps you become better."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "begin",
    "id": "memulai",
    "example": "We begin the lesson now."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "believe",
    "id": "percaya",
    "example": "I believe I can improve."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "borrow",
    "id": "meminjam",
    "example": "Can I borrow your pen?"
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "build",
    "id": "membangun",
    "example": "They build a small house."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "buy",
    "id": "membeli",
    "example": "She buys a dictionary."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "call",
    "id": "memanggil/menelpon",
    "example": "Please call me later."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "carry",
    "id": "membawa",
    "example": "He carries a heavy bag."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "change",
    "id": "mengubah/berubah",
    "example": "I want to change my habit."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "clean",
    "id": "membersihkan",
    "example": "We clean the classroom."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "close",
    "id": "menutup",
    "example": "Close the door, please."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "continue",
    "id": "melanjutkan",
    "example": "Continue reading the story."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "cook",
    "id": "memasak",
    "example": "My mother cooks rice."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "count",
    "id": "menghitung",
    "example": "Count the words in the sentence."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "create",
    "id": "membuat/menciptakan",
    "example": "Create your own example."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "cry",
    "id": "menangis",
    "example": "The baby cries loudly."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "decide",
    "id": "memutuskan",
    "example": "I decide to study tonight."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "draw",
    "id": "menggambar",
    "example": "The child draws a picture."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "drive",
    "id": "mengemudi",
    "example": "My father drives a car."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "enjoy",
    "id": "menikmati",
    "example": "I enjoy learning English."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "enter",
    "id": "memasuki",
    "example": "Students enter the classroom."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "fall",
    "id": "jatuh",
    "example": "The book falls from the table."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "fill",
    "id": "mengisi",
    "example": "Fill in the blank."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "follow",
    "id": "mengikuti",
    "example": "Follow the instruction."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "grow",
    "id": "tumbuh/berkembang",
    "example": "Plants grow in the garden."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "guess",
    "id": "menebak",
    "example": "Guess the meaning of the word."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "happen",
    "id": "terjadi",
    "example": "What happened yesterday?"
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "hope",
    "id": "berharap",
    "example": "I hope to pass the test."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "join",
    "id": "bergabung",
    "example": "Join the English class."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "keep",
    "id": "menyimpan/terus",
    "example": "Keep practicing every day."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "leave",
    "id": "meninggalkan/pergi",
    "example": "They leave the room."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "lend",
    "id": "meminjamkan",
    "example": "Can you lend me your book?"
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "mean",
    "id": "berarti",
    "example": "What does this word mean?"
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "meet",
    "id": "bertemu",
    "example": "I meet my friend at school."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "move",
    "id": "bergerak/pindah",
    "example": "Move the word to the answer box."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "need",
    "id": "membutuhkan",
    "example": "I need more practice."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "open",
    "id": "membuka",
    "example": "Open your book."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "pass",
    "id": "lulus/melewati",
    "example": "I want to pass the TOEFL test."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "pay",
    "id": "membayar",
    "example": "The customer pays with cash."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "pick",
    "id": "memilih/mengambil",
    "example": "Pick the correct word."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "plan",
    "id": "merencanakan",
    "example": "We plan to study together."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "receive",
    "id": "menerima",
    "example": "I receive a message."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "repeat",
    "id": "mengulang",
    "example": "Please repeat the sentence."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "return",
    "id": "kembali/mengembalikan",
    "example": "Return the book tomorrow."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "save",
    "id": "menyimpan",
    "example": "Save your file."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "sell",
    "id": "menjual",
    "example": "The store sells laptops."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "send",
    "id": "mengirim",
    "example": "Send your homework."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "share",
    "id": "berbagi",
    "example": "Share your idea."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "show",
    "id": "menunjukkan",
    "example": "Show me the answer."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "solve",
    "id": "memecahkan/menyelesaikan",
    "example": "Solve the problem."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "spend",
    "id": "menghabiskan",
    "example": "I spend one hour studying."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "stay",
    "id": "tinggal/tetap",
    "example": "Stay focused."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "suggest",
    "id": "menyarankan",
    "example": "My teacher suggests more practice."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "teach",
    "id": "mengajar",
    "example": "She teaches English."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "test",
    "id": "menguji",
    "example": "This exercise tests grammar."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "travel",
    "id": "bepergian",
    "example": "They travel by bus."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "turn",
    "id": "memutar/berbelok",
    "example": "Turn left at the corner."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "visit",
    "id": "mengunjungi",
    "example": "We visit the museum."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "wait",
    "id": "menunggu",
    "example": "Wait for the next question."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "watch",
    "id": "menonton",
    "example": "I watch English videos."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "wear",
    "id": "memakai",
    "example": "She wears a blue shirt."
},
{
    "level": "Basic",
    "category": "Daily Verb",
    "wordClass": "verb",
    "en": "win",
    "id": "menang",
    "example": "They win the game."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "activity",
    "id": "kegiatan",
    "example": "Daily activity helps you practice tenses."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "advice",
    "id": "nasihat/saran",
    "example": "The teacher gives good advice."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "airport",
    "id": "bandara",
    "example": "They arrived at the airport."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "appointment",
    "id": "janji temu",
    "example": "I have an appointment today."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "attention",
    "id": "perhatian",
    "example": "Pay attention to the verb."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "bag",
    "id": "tas",
    "example": "My bag is on the chair."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "behavior",
    "id": "perilaku",
    "example": "Good behavior is important."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "bill",
    "id": "tagihan",
    "example": "The bill is expensive."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "bridge",
    "id": "jembatan",
    "example": "The bridge is long."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "business",
    "id": "bisnis",
    "example": "My brother has a small business."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "calendar",
    "id": "kalender",
    "example": "Check the calendar."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "capital",
    "id": "ibu kota/modal",
    "example": "Jakarta is the capital of Indonesia."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "case",
    "id": "kasus",
    "example": "This is a difficult case."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "choice",
    "id": "pilihan",
    "example": "You have three choices."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "classmate",
    "id": "teman sekelas",
    "example": "My classmate helps me."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "condition",
    "id": "kondisi/syarat",
    "example": "The condition is clear."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "conversation",
    "id": "percakapan",
    "example": "We practice conversation."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "corner",
    "id": "sudut/pojok",
    "example": "The shop is on the corner."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "culture",
    "id": "budaya",
    "example": "Culture affects language."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "decision",
    "id": "keputusan",
    "example": "This is an important decision."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "direction",
    "id": "arah/petunjuk",
    "example": "Ask for directions."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "document",
    "id": "dokumen",
    "example": "Upload the document."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "education",
    "id": "pendidikan",
    "example": "Education changes lives."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "environment",
    "id": "lingkungan",
    "example": "Protect the environment."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "experience",
    "id": "pengalaman",
    "example": "Experience helps you learn."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "fact",
    "id": "fakta",
    "example": "This is a scientific fact."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "field",
    "id": "lapangan/bidang",
    "example": "They play football in the field."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "habit",
    "id": "kebiasaan",
    "example": "A habit uses Simple Present."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "health",
    "id": "kesehatan",
    "example": "Health is important."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "history",
    "id": "sejarah",
    "example": "I like history."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "information",
    "id": "informasi",
    "example": "Information must be clear."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "language",
    "id": "bahasa",
    "example": "English is an international language."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "library",
    "id": "perpustakaan",
    "example": "She studies in the library."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "meeting",
    "id": "rapat/pertemuan",
    "example": "The meeting starts at nine."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "message",
    "id": "pesan",
    "example": "I sent a message."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "method",
    "id": "metode/cara",
    "example": "This method is useful."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "mistake",
    "id": "kesalahan",
    "example": "Learn from your mistake."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "opinion",
    "id": "pendapat",
    "example": "Give your opinion."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "payment",
    "id": "pembayaran",
    "example": "The payment is complete."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "problem",
    "id": "masalah",
    "example": "Solve the problem."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "reason",
    "id": "alasan",
    "example": "Give one reason."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "rule",
    "id": "aturan",
    "example": "Follow the grammar rule."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "schedule",
    "id": "jadwal",
    "example": "The schedule is fixed."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "skill",
    "id": "keterampilan",
    "example": "Speaking is an important skill."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "solution",
    "id": "solusi",
    "example": "Find the best solution."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "story",
    "id": "cerita",
    "example": "Read the story aloud."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "system",
    "id": "sistem",
    "example": "The system checks your answer."
},
{
    "level": "Daily",
    "category": "Common Noun",
    "wordClass": "noun",
    "en": "traffic",
    "id": "lalu lintas",
    "example": "Traffic is heavy today."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "active",
    "id": "aktif",
    "example": "Use active voice in this sentence."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "aware",
    "id": "sadar",
    "example": "Be aware of common mistakes."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "basic",
    "id": "dasar",
    "example": "This is a basic rule."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "common",
    "id": "umum",
    "example": "This is a common word."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "daily",
    "id": "harian",
    "example": "Daily practice is useful."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "familiar",
    "id": "akrab/kenal",
    "example": "This word is familiar."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "fast",
    "id": "cepat",
    "example": "He speaks fast."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "fluent",
    "id": "lancar",
    "example": "She is fluent in English."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "formal",
    "id": "resmi",
    "example": "Use formal language in academic writing."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "free",
    "id": "bebas/gratis",
    "example": "I have free time."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "general",
    "id": "umum",
    "example": "This is a general idea."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "local",
    "id": "lokal/setempat",
    "example": "Local culture is unique."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "main",
    "id": "utama",
    "example": "Find the main idea."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "necessary",
    "id": "perlu",
    "example": "Practice is necessary."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "possible",
    "id": "mungkin",
    "example": "It is possible to improve."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "regular",
    "id": "teratur/beraturan",
    "example": "Regular verbs use -ed."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "specific",
    "id": "spesifik/khusus",
    "example": "Use a specific time expression."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "strong",
    "id": "kuat",
    "example": "She has strong grammar skills."
},
{
    "level": "Intermediate",
    "category": "Adjective",
    "wordClass": "adjective",
    "en": "suitable",
    "id": "cocok/sesuai",
    "example": "This exercise is suitable for beginners."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "actually",
    "id": "sebenarnya",
    "example": "Actually, this rule is simple."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "already",
    "id": "sudah",
    "example": "I have already finished."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "currently",
    "id": "saat ini",
    "example": "She is currently studying."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "especially",
    "id": "terutama/khususnya",
    "example": "This is especially useful for TOEFL."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "finally",
    "id": "akhirnya",
    "example": "Finally, I understand."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "frequently",
    "id": "sering",
    "example": "This word appears frequently."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "generally",
    "id": "secara umum",
    "example": "Generally, the subject comes first."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "immediately",
    "id": "segera",
    "example": "Answer immediately."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "nearly",
    "id": "hampir",
    "example": "I nearly forgot."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "probably",
    "id": "mungkin/kemungkinan",
    "example": "She will probably come."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "quickly",
    "id": "dengan cepat",
    "example": "He learns quickly."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "rarely",
    "id": "jarang",
    "example": "He rarely makes mistakes."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "recently",
    "id": "baru-baru ini",
    "example": "I have recently learned this tense."
},
{
    "level": "Intermediate",
    "category": "Adverb",
    "wordClass": "adverb",
    "en": "slowly",
    "id": "perlahan",
    "example": "Please speak slowly."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "approach",
    "id": "mendekati/pendekatan",
    "example": "Approach the question carefully."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "assume",
    "id": "menganggap/berasumsi",
    "example": "Do not assume the answer is correct."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "clarify",
    "id": "memperjelas",
    "example": "Clarify your main idea."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "classify",
    "id": "mengklasifikasikan",
    "example": "Classify the word by its function."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "conduct",
    "id": "melakukan/melaksanakan",
    "example": "Researchers conduct a study."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "confirm",
    "id": "mengonfirmasi",
    "example": "Confirm the answer first."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "consider",
    "id": "mempertimbangkan",
    "example": "Consider the context."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "consist",
    "id": "terdiri",
    "example": "The test consists of several sections."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "construct",
    "id": "membangun/menyusun",
    "example": "Construct a clear sentence."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "contain",
    "id": "berisi/mengandung",
    "example": "The passage contains important details."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "define",
    "id": "mendefinisikan",
    "example": "Define the term clearly."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "demonstrate",
    "id": "menunjukkan/mendemonstrasikan",
    "example": "The example demonstrates the rule."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "establish",
    "id": "menetapkan/mendirikan",
    "example": "The study establishes a connection."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "examine",
    "id": "memeriksa/menelaah",
    "example": "Examine the structure."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "illustrate",
    "id": "menggambarkan/memberi contoh",
    "example": "This sentence illustrates the tense."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "maintain",
    "id": "mempertahankan",
    "example": "Maintain good study habits."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "provide",
    "id": "menyediakan/memberikan",
    "example": "Provide an example."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "recognize",
    "id": "mengenali",
    "example": "Recognize the pattern."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "respond",
    "id": "menanggapi",
    "example": "Respond to the question."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "reveal",
    "id": "mengungkapkan",
    "example": "The context reveals the meaning."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "select",
    "id": "memilih",
    "example": "Select the correct option."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "signify",
    "id": "menandakan",
    "example": "The word signifies contrast."
},
{
    "level": "Academic",
    "category": "Academic Verb",
    "wordClass": "verb",
    "en": "transform",
    "id": "mengubah",
    "example": "Transform the sentence into passive voice."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "argument",
    "id": "argumen",
    "example": "The argument is clear."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "assumption",
    "id": "asumsi",
    "example": "The assumption is incorrect."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "benefit",
    "id": "manfaat",
    "example": "Practice has many benefits."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "concept",
    "id": "konsep",
    "example": "Understand the concept first."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "data",
    "id": "data",
    "example": "The data show a clear pattern."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "factor",
    "id": "faktor",
    "example": "Many factors affect learning."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "feature",
    "id": "fitur/ciri",
    "example": "This feature helps learners."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "function",
    "id": "fungsi",
    "example": "Know the function of each word."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "impact",
    "id": "dampak",
    "example": "Education has a positive impact."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "issue",
    "id": "isu/masalah",
    "example": "This issue is important."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "methodology",
    "id": "metodologi",
    "example": "The methodology is explained."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "policy",
    "id": "kebijakan",
    "example": "The policy changed last year."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "research",
    "id": "penelitian",
    "example": "Research supports the idea."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "section",
    "id": "bagian",
    "example": "Read the next section."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "source",
    "id": "sumber",
    "example": "Use a reliable source."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "structure",
    "id": "struktur",
    "example": "Sentence structure is important."
},
{
    "level": "Academic",
    "category": "Academic Noun",
    "wordClass": "noun",
    "en": "theory",
    "id": "teori",
    "example": "The theory explains the result."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "furthermore",
    "id": "selain itu",
    "example": "Furthermore, vocabulary is important."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "consequently",
    "id": "akibatnya",
    "example": "Consequently, the meaning changes."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "despite",
    "id": "meskipun + noun/gerund",
    "example": "Despite the difficulty, she passed."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "in spite of",
    "id": "meskipun + noun/gerund",
    "example": "In spite of practicing, he was nervous."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "provided that",
    "id": "asalkan",
    "example": "You can pass provided that you study."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "as long as",
    "id": "selama/asalkan",
    "example": "You can use it as long as it is correct."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "as soon as",
    "id": "segera setelah",
    "example": "Call me as soon as you arrive."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "by the time",
    "id": "pada saat",
    "example": "By the time I arrived, he had left."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "rather than",
    "id": "daripada",
    "example": "Use the base verb rather than Verb 2."
},
{
    "level": "TOEFL",
    "category": "TOEFL Connector",
    "wordClass": "conjunction/adverb",
    "en": "instead of",
    "id": "sebagai ganti/daripada",
    "example": "Use a noun instead of a clause."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "adjective",
    "en": "distinct",
    "id": "berbeda/jelas",
    "example": "These words have distinct functions."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "adjective",
    "en": "empirical",
    "id": "berdasarkan pengalaman/data",
    "example": "The study uses empirical data."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "adjective",
    "en": "explicit",
    "id": "jelas/tersurat",
    "example": "The rule is explicit."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "adjective",
    "en": "implicit",
    "id": "tersirat",
    "example": "The meaning is implicit."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "adjective",
    "en": "inherent",
    "id": "melekat/bawaan",
    "example": "Every language has inherent patterns."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "adjective",
    "en": "sophisticated",
    "id": "canggih/kompleks",
    "example": "This is a sophisticated sentence."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "constraint",
    "id": "batasan/kendala",
    "example": "Time is a constraint."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "implication",
    "id": "implikasi/dampak lanjutan",
    "example": "The implication is important."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "inference",
    "id": "kesimpulan tersirat",
    "example": "Make an inference from the passage."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "notion",
    "id": "gagasan/konsep",
    "example": "This notion is useful."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "phenomenon",
    "id": "fenomena",
    "example": "Language change is a phenomenon."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "principle",
    "id": "prinsip",
    "example": "This principle applies to many tenses."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "priority",
    "id": "prioritas",
    "example": "Make grammar a priority."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "scope",
    "id": "cakupan",
    "example": "The scope of this lesson is wide."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "tendency",
    "id": "kecenderungan",
    "example": "Learners have a tendency to translate directly."
},
{
    "level": "Advanced",
    "category": "Advanced Word",
    "wordClass": "noun",
    "en": "validity",
    "id": "keabsahan/validitas",
    "example": "Check the validity of your answer."
}
],

};

// Fungsi universal untuk mengambil N soal secara acak dengan mencegah duplikat
function getRandomQuestions(arrayPath, limit, storageKey = null) {
  if (!arrayPath || arrayPath.length === 0) return [];

  // Generate storage key otomatis jika tidak disediakan
  const key = storageKey || `random_${Date.now()}`;

  // Ambil riwayat dari localStorage
  let recent = JSON.parse(localStorage.getItem(key) || "[]");

  // Filter item yang belum muncul belakangan
  let available = arrayPath.filter((item) => {
    const itemKey = JSON.stringify(
      item.text || item.en || item.title || item.word || item,
    );
    return !recent.includes(itemKey);
  });

  // Jika tersedia kurang dari limit, reset riwayat dan gunakan semua
  if (available.length < limit) {
    available = [...arrayPath];
    recent = [];
  }

  // Shuffle dan ambil sesuai limit
  const shuffled = [...available].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, limit);

  // Simpan yang dipilih ke localStorage
  const selectedKeys = selected.map((item) =>
    JSON.stringify(item.text || item.en || item.title || item.word || item),
  );
  const newRecent = [...recent, ...selectedKeys].slice(-30);
  localStorage.setItem(key, JSON.stringify(newRecent));

  return selected;
}


// ================= BIG TOEFL DATA EXPANSION =================
(function expandLinguaFunData() {
  if (typeof appDatabase === 'undefined' || appDatabase.__bigToeflExpanded) return;
  appDatabase.__bigToeflExpanded = true;
  function addUnique(arrayName, items, keyFn) {
    if (!Array.isArray(appDatabase[arrayName])) appDatabase[arrayName] = [];
    const arr = appDatabase[arrayName];
    const seen = new Set(arr.map((item) => keyFn(item)));
    items.forEach((item) => { const key = keyFn(item); if (!seen.has(key)) { seen.add(key); arr.push(item); } });
  }
  const extraDictionary = [{"en": "ability", "id": "kemampuan"}, {"en": "able", "id": "mampu"}, {"en": "absence", "id": "ketidakhadiran"}, {"en": "absent", "id": "tidak hadir"}, {"en": "accept", "id": "menerima"}, {"en": "accident", "id": "kecelakaan"}, {"en": "according to", "id": "menurut"}, {"en": "account", "id": "akun/rekening/laporan"}, {"en": "achieve", "id": "mencapai"}, {"en": "achievement", "id": "pencapaian"}, {"en": "active", "id": "aktif"}, {"en": "activity", "id": "kegiatan"}, {"en": "actually", "id": "sebenarnya"}, {"en": "addition", "id": "tambahan"}, {"en": "additional", "id": "tambahan"}, {"en": "address", "id": "alamat/menangani"}, {"en": "advantage", "id": "keuntungan"}, {"en": "advice", "id": "nasihat"}, {"en": "advise", "id": "menasihati"}, {"en": "affect", "id": "mempengaruhi"}, {"en": "afford", "id": "mampu membeli"}, {"en": "agency", "id": "agensi/lembaga"}, {"en": "agreement", "id": "persetujuan"}, {"en": "allow", "id": "mengizinkan"}, {"en": "almost", "id": "hampir"}, {"en": "although", "id": "meskipun"}, {"en": "among", "id": "di antara banyak"}, {"en": "amount", "id": "jumlah"}, {"en": "ancient", "id": "kuno"}, {"en": "announce", "id": "mengumumkan"}, {"en": "annual", "id": "tahunan"}, {"en": "another", "id": "yang lain satu lagi"}, {"en": "anyway", "id": "bagaimanapun"}, {"en": "appear", "id": "muncul/tampak"}, {"en": "appearance", "id": "penampilan/kemunculan"}, {"en": "apply", "id": "mendaftar/menerapkan"}, {"en": "appointment", "id": "janji temu"}, {"en": "appreciate", "id": "menghargai"}, {"en": "approach", "id": "pendekatan/mendekati"}, {"en": "appropriate", "id": "tepat/sesuai"}, {"en": "argue", "id": "berpendapat/berdebat"}, {"en": "argument", "id": "argumen"}, {"en": "arrange", "id": "mengatur/menyusun"}, {"en": "arrangement", "id": "pengaturan"}, {"en": "aspect", "id": "aspek"}, {"en": "assess", "id": "menilai"}, {"en": "assessment", "id": "penilaian"}, {"en": "assignment", "id": "tugas"}, {"en": "assist", "id": "membantu"}, {"en": "assistance", "id": "bantuan"}, {"en": "assume", "id": "berasumsi"}, {"en": "attempt", "id": "upaya/mencoba"}, {"en": "attention", "id": "perhatian"}, {"en": "attitude", "id": "sikap"}, {"en": "available", "id": "tersedia"}, {"en": "avoid", "id": "menghindari"}, {"en": "background", "id": "latar belakang"}, {"en": "balance", "id": "keseimbangan"}, {"en": "behavior", "id": "perilaku"}, {"en": "benefit", "id": "manfaat"}, {"en": "besides", "id": "selain itu"}, {"en": "beyond", "id": "di luar/melebihi"}, {"en": "brief", "id": "singkat"}, {"en": "briefly", "id": "secara singkat"}, {"en": "budget", "id": "anggaran"}, {"en": "capacity", "id": "kapasitas"}, {"en": "career", "id": "karier"}, {"en": "case", "id": "kasus"}, {"en": "cause", "id": "penyebab/menyebabkan"}, {"en": "challenge", "id": "tantangan"}, {"en": "chance", "id": "kesempatan"}, {"en": "characteristic", "id": "ciri khas"}, {"en": "charge", "id": "biaya/mengisi daya"}, {"en": "choice", "id": "pilihan"}, {"en": "choose", "id": "memilih"}, {"en": "circumstance", "id": "keadaan"}, {"en": "claim", "id": "klaim/mengklaim"}, {"en": "clearly", "id": "dengan jelas"}, {"en": "client", "id": "klien"}, {"en": "combine", "id": "menggabungkan"}, {"en": "comfortable", "id": "nyaman"}, {"en": "common", "id": "umum"}, {"en": "community", "id": "komunitas"}, {"en": "compare", "id": "membandingkan"}, {"en": "comparison", "id": "perbandingan"}, {"en": "competition", "id": "kompetisi"}, {"en": "complete", "id": "lengkap/menyelesaikan"}, {"en": "complex", "id": "kompleks"}, {"en": "concern", "id": "kekhawatiran/berkaitan"}, {"en": "condition", "id": "kondisi/syarat"}, {"en": "conduct", "id": "melakukan/melaksanakan"}, {"en": "confidence", "id": "kepercayaan diri"}, {"en": "confident", "id": "percaya diri"}, {"en": "confirm", "id": "mengonfirmasi"}, {"en": "confuse", "id": "membingungkan"}, {"en": "connection", "id": "hubungan"}, {"en": "consequence", "id": "akibat"}, {"en": "consider", "id": "mempertimbangkan"}, {"en": "consist of", "id": "terdiri dari"}, {"en": "constant", "id": "tetap/konstan"}, {"en": "contain", "id": "berisi/mengandung"}, {"en": "contrast", "id": "perbedaan/membedakan"}, {"en": "contribute", "id": "berkontribusi"}, {"en": "convenient", "id": "nyaman/praktis"}, {"en": "creative", "id": "kreatif"}, {"en": "current", "id": "saat ini/arus"}, {"en": "currently", "id": "saat ini"}, {"en": "debate", "id": "debat"}, {"en": "decision", "id": "keputusan"}, {"en": "decrease", "id": "menurun/mengurangi"}, {"en": "define", "id": "mendefinisikan"}, {"en": "definition", "id": "definisi"}, {"en": "degree", "id": "tingkat/gelar"}, {"en": "deliver", "id": "mengirim/menyampaikan"}, {"en": "demand", "id": "permintaan/menuntut"}, {"en": "depend on", "id": "bergantung pada"}, {"en": "describe", "id": "menggambarkan/menjelaskan"}, {"en": "description", "id": "deskripsi"}, {"en": "despite", "id": "meskipun"}, {"en": "determine", "id": "menentukan"}, {"en": "develop", "id": "mengembangkan"}, {"en": "development", "id": "pengembangan"}, {"en": "difference", "id": "perbedaan"}, {"en": "difficulty", "id": "kesulitan"}, {"en": "direction", "id": "arah/petunjuk"}, {"en": "discuss", "id": "mendiskusikan"}, {"en": "discussion", "id": "diskusi"}, {"en": "distance", "id": "jarak"}, {"en": "distinguish", "id": "membedakan"}, {"en": "effective", "id": "efektif"}, {"en": "effort", "id": "usaha"}, {"en": "element", "id": "unsur"}, {"en": "emphasize", "id": "menekankan"}, {"en": "employee", "id": "pegawai"}, {"en": "employer", "id": "pemberi kerja"}, {"en": "enable", "id": "memungkinkan"}, {"en": "encourage", "id": "mendorong"}, {"en": "essential", "id": "penting/mendasar"}, {"en": "establish", "id": "menetapkan/mendirikan"}, {"en": "evidence", "id": "bukti"}, {"en": "examine", "id": "memeriksa/menelaah"}, {"en": "except", "id": "kecuali"}, {"en": "exchange", "id": "menukar/pertukaran"}, {"en": "exist", "id": "ada"}, {"en": "expect", "id": "mengharapkan"}, {"en": "experience", "id": "pengalaman/mengalami"}, {"en": "explanation", "id": "penjelasan"}, {"en": "expression", "id": "ungkapan"}, {"en": "factor", "id": "faktor"}, {"en": "failure", "id": "kegagalan"}, {"en": "familiar", "id": "akrab/kenal"}, {"en": "feature", "id": "fitur/ciri"}, {"en": "figure", "id": "angka/tokoh/gambar"}, {"en": "focus", "id": "fokus"}, {"en": "foreign", "id": "asing"}, {"en": "former", "id": "sebelumnya/mantan"}, {"en": "frequent", "id": "sering"}, {"en": "function", "id": "fungsi"}, {"en": "generally", "id": "secara umum"}, {"en": "government", "id": "pemerintah"}, {"en": "growth", "id": "pertumbuhan"}, {"en": "handle", "id": "menangani"}, {"en": "identify", "id": "mengidentifikasi"}, {"en": "immediate", "id": "segera/langsung"}, {"en": "impact", "id": "dampak"}, {"en": "include", "id": "termasuk/mencakup"}, {"en": "increase", "id": "meningkat/menambah"}, {"en": "indicate", "id": "menunjukkan"}, {"en": "individual", "id": "individu"}, {"en": "industry", "id": "industri"}, {"en": "influence", "id": "pengaruh/mempengaruhi"}, {"en": "instead", "id": "sebagai gantinya"}, {"en": "instruction", "id": "instruksi"}, {"en": "introduce", "id": "memperkenalkan"}, {"en": "issue", "id": "isu/masalah"}, {"en": "lack", "id": "kekurangan"}, {"en": "likely", "id": "kemungkinan besar"}, {"en": "limit", "id": "batas/membatasi"}, {"en": "maintain", "id": "mempertahankan"}, {"en": "majority", "id": "mayoritas"}, {"en": "manage", "id": "mengelola"}, {"en": "manner", "id": "cara/sikap"}, {"en": "methodology", "id": "metodologi"}, {"en": "necessary", "id": "perlu"}, {"en": "notice", "id": "memperhatikan/pemberitahuan"}, {"en": "occur", "id": "terjadi"}, {"en": "opportunity", "id": "kesempatan"}, {"en": "organize", "id": "mengatur"}, {"en": "particular", "id": "khusus/tertentu"}, {"en": "perform", "id": "melakukan/menampilkan"}, {"en": "performance", "id": "kinerja/pertunjukan"}, {"en": "policy", "id": "kebijakan"}, {"en": "population", "id": "populasi"}, {"en": "potential", "id": "potensi"}, {"en": "predict", "id": "memprediksi"}, {"en": "previous", "id": "sebelumnya"}, {"en": "process", "id": "proses"}, {"en": "produce", "id": "menghasilkan"}, {"en": "progress", "id": "kemajuan"}, {"en": "proper", "id": "tepat/pantas"}, {"en": "provide", "id": "menyediakan/memberikan"}, {"en": "purpose", "id": "tujuan"}, {"en": "quality", "id": "kualitas"}, {"en": "quantity", "id": "jumlah/kuantitas"}, {"en": "range", "id": "rentang/jangkauan"}, {"en": "rare", "id": "langka/jarang"}, {"en": "rather", "id": "agak/lebih baik"}, {"en": "receive", "id": "menerima"}, {"en": "recognize", "id": "mengenali"}, {"en": "recommend", "id": "merekomendasikan"}, {"en": "reduce", "id": "mengurangi"}, {"en": "refer to", "id": "merujuk pada"}, {"en": "relationship", "id": "hubungan"}, {"en": "relevant", "id": "relevan"}, {"en": "remain", "id": "tetap/tersisa"}, {"en": "require", "id": "memerlukan"}, {"en": "research", "id": "penelitian"}, {"en": "respond", "id": "menanggapi"}, {"en": "response", "id": "tanggapan"}, {"en": "review", "id": "meninjau/ulasan"}, {"en": "role", "id": "peran"}, {"en": "schedule", "id": "jadwal"}, {"en": "select", "id": "memilih"}, {"en": "similar", "id": "mirip"}, {"en": "solution", "id": "solusi"}, {"en": "source", "id": "sumber"}, {"en": "specific", "id": "spesifik"}, {"en": "strategy", "id": "strategi"}, {"en": "structure", "id": "struktur"}, {"en": "successful", "id": "berhasil"}, {"en": "sufficient", "id": "cukup/memadai"}, {"en": "suggest", "id": "menyarankan"}, {"en": "task", "id": "tugas"}, {"en": "therefore", "id": "oleh karena itu"}, {"en": "throughout", "id": "sepanjang"}, {"en": "toward", "id": "menuju/terhadap"}, {"en": "transfer", "id": "memindahkan/transfer"}, {"en": "unless", "id": "kecuali jika"}, {"en": "valid", "id": "sah/valid"}, {"en": "various", "id": "berbagai"}, {"en": "whereas", "id": "sedangkan"}, {"en": "whether", "id": "apakah"}, {"en": "within", "id": "di dalam/dalam waktu"}, {"en": "without", "id": "tanpa"}];
  const extraVocabularies = [{"en": "ability", "id": "kemampuan", "poin": 10}, {"en": "able", "id": "mampu", "poin": 10}, {"en": "absence", "id": "ketidakhadiran", "poin": 10}, {"en": "absent", "id": "tidak hadir", "poin": 10}, {"en": "accept", "id": "menerima", "poin": 10}, {"en": "accident", "id": "kecelakaan", "poin": 20}, {"en": "according to", "id": "menurut", "poin": 20}, {"en": "account", "id": "akun/rekening/laporan", "poin": 10}, {"en": "achieve", "id": "mencapai", "poin": 10}, {"en": "achievement", "id": "pencapaian", "poin": 20}, {"en": "active", "id": "aktif", "poin": 10}, {"en": "activity", "id": "kegiatan", "poin": 20}, {"en": "actually", "id": "sebenarnya", "poin": 20}, {"en": "addition", "id": "tambahan", "poin": 20}, {"en": "additional", "id": "tambahan", "poin": 20}, {"en": "address", "id": "alamat/menangani", "poin": 10}, {"en": "advantage", "id": "keuntungan", "poin": 20}, {"en": "advice", "id": "nasihat", "poin": 10}, {"en": "advise", "id": "menasihati", "poin": 10}, {"en": "affect", "id": "mempengaruhi", "poin": 10}, {"en": "afford", "id": "mampu membeli", "poin": 10}, {"en": "agency", "id": "agensi/lembaga", "poin": 10}, {"en": "agreement", "id": "persetujuan", "poin": 20}, {"en": "allow", "id": "mengizinkan", "poin": 10}, {"en": "almost", "id": "hampir", "poin": 10}, {"en": "although", "id": "meskipun", "poin": 20}, {"en": "among", "id": "di antara banyak", "poin": 10}, {"en": "amount", "id": "jumlah", "poin": 10}, {"en": "ancient", "id": "kuno", "poin": 10}, {"en": "announce", "id": "mengumumkan", "poin": 20}, {"en": "annual", "id": "tahunan", "poin": 10}, {"en": "another", "id": "yang lain satu lagi", "poin": 10}, {"en": "anyway", "id": "bagaimanapun", "poin": 10}, {"en": "appear", "id": "muncul/tampak", "poin": 10}, {"en": "appearance", "id": "penampilan/kemunculan", "poin": 20}, {"en": "apply", "id": "mendaftar/menerapkan", "poin": 10}, {"en": "appointment", "id": "janji temu", "poin": 20}, {"en": "appreciate", "id": "menghargai", "poin": 20}, {"en": "approach", "id": "pendekatan/mendekati", "poin": 20}, {"en": "appropriate", "id": "tepat/sesuai", "poin": 20}, {"en": "argue", "id": "berpendapat/berdebat", "poin": 10}, {"en": "argument", "id": "argumen", "poin": 20}, {"en": "arrange", "id": "mengatur/menyusun", "poin": 10}, {"en": "arrangement", "id": "pengaturan", "poin": 20}, {"en": "aspect", "id": "aspek", "poin": 10}, {"en": "assess", "id": "menilai", "poin": 10}, {"en": "assessment", "id": "penilaian", "poin": 20}, {"en": "assignment", "id": "tugas", "poin": 20}, {"en": "assist", "id": "membantu", "poin": 10}, {"en": "assistance", "id": "bantuan", "poin": 20}, {"en": "assume", "id": "berasumsi", "poin": 10}, {"en": "attempt", "id": "upaya/mencoba", "poin": 10}, {"en": "attention", "id": "perhatian", "poin": 20}, {"en": "attitude", "id": "sikap", "poin": 20}, {"en": "available", "id": "tersedia", "poin": 20}, {"en": "avoid", "id": "menghindari", "poin": 10}, {"en": "background", "id": "latar belakang", "poin": 20}, {"en": "balance", "id": "keseimbangan", "poin": 10}, {"en": "behavior", "id": "perilaku", "poin": 20}, {"en": "benefit", "id": "manfaat", "poin": 10}, {"en": "besides", "id": "selain itu", "poin": 10}, {"en": "beyond", "id": "di luar/melebihi", "poin": 10}, {"en": "brief", "id": "singkat", "poin": 10}, {"en": "briefly", "id": "secara singkat", "poin": 10}, {"en": "budget", "id": "anggaran", "poin": 10}, {"en": "capacity", "id": "kapasitas", "poin": 20}, {"en": "career", "id": "karier", "poin": 10}, {"en": "case", "id": "kasus", "poin": 10}, {"en": "cause", "id": "penyebab/menyebabkan", "poin": 10}, {"en": "challenge", "id": "tantangan", "poin": 20}, {"en": "chance", "id": "kesempatan", "poin": 10}, {"en": "characteristic", "id": "ciri khas", "poin": 20}, {"en": "charge", "id": "biaya/mengisi daya", "poin": 10}, {"en": "choice", "id": "pilihan", "poin": 10}, {"en": "choose", "id": "memilih", "poin": 10}, {"en": "circumstance", "id": "keadaan", "poin": 20}, {"en": "claim", "id": "klaim/mengklaim", "poin": 10}, {"en": "clearly", "id": "dengan jelas", "poin": 10}, {"en": "client", "id": "klien", "poin": 10}, {"en": "combine", "id": "menggabungkan", "poin": 10}, {"en": "comfortable", "id": "nyaman", "poin": 20}, {"en": "common", "id": "umum", "poin": 10}, {"en": "community", "id": "komunitas", "poin": 20}, {"en": "compare", "id": "membandingkan", "poin": 10}, {"en": "comparison", "id": "perbandingan", "poin": 20}, {"en": "competition", "id": "kompetisi", "poin": 20}, {"en": "complete", "id": "lengkap/menyelesaikan", "poin": 20}, {"en": "complex", "id": "kompleks", "poin": 10}, {"en": "concern", "id": "kekhawatiran/berkaitan", "poin": 10}, {"en": "condition", "id": "kondisi/syarat", "poin": 20}, {"en": "conduct", "id": "melakukan/melaksanakan", "poin": 10}, {"en": "confidence", "id": "kepercayaan diri", "poin": 20}, {"en": "confident", "id": "percaya diri", "poin": 20}, {"en": "confirm", "id": "mengonfirmasi", "poin": 10}, {"en": "confuse", "id": "membingungkan", "poin": 10}, {"en": "connection", "id": "hubungan", "poin": 20}, {"en": "consequence", "id": "akibat", "poin": 20}, {"en": "consider", "id": "mempertimbangkan", "poin": 20}, {"en": "consist of", "id": "terdiri dari", "poin": 20}, {"en": "constant", "id": "tetap/konstan", "poin": 20}, {"en": "contain", "id": "berisi/mengandung", "poin": 10}, {"en": "contrast", "id": "perbedaan/membedakan", "poin": 20}, {"en": "contribute", "id": "berkontribusi", "poin": 20}, {"en": "convenient", "id": "nyaman/praktis", "poin": 20}, {"en": "creative", "id": "kreatif", "poin": 20}, {"en": "current", "id": "saat ini/arus", "poin": 10}, {"en": "currently", "id": "saat ini", "poin": 20}, {"en": "debate", "id": "debat", "poin": 10}, {"en": "decision", "id": "keputusan", "poin": 20}, {"en": "decrease", "id": "menurun/mengurangi", "poin": 20}, {"en": "define", "id": "mendefinisikan", "poin": 10}, {"en": "definition", "id": "definisi", "poin": 20}, {"en": "degree", "id": "tingkat/gelar", "poin": 10}, {"en": "deliver", "id": "mengirim/menyampaikan", "poin": 10}, {"en": "demand", "id": "permintaan/menuntut", "poin": 10}, {"en": "depend on", "id": "bergantung pada", "poin": 20}, {"en": "describe", "id": "menggambarkan/menjelaskan", "poin": 20}, {"en": "description", "id": "deskripsi", "poin": 20}, {"en": "despite", "id": "meskipun", "poin": 10}, {"en": "determine", "id": "menentukan", "poin": 20}, {"en": "develop", "id": "mengembangkan", "poin": 10}, {"en": "development", "id": "pengembangan", "poin": 20}, {"en": "difference", "id": "perbedaan", "poin": 20}, {"en": "difficulty", "id": "kesulitan", "poin": 20}, {"en": "direction", "id": "arah/petunjuk", "poin": 20}, {"en": "discuss", "id": "mendiskusikan", "poin": 10}, {"en": "discussion", "id": "diskusi", "poin": 20}, {"en": "distance", "id": "jarak", "poin": 20}, {"en": "distinguish", "id": "membedakan", "poin": 20}, {"en": "effective", "id": "efektif", "poin": 20}, {"en": "effort", "id": "usaha", "poin": 10}, {"en": "element", "id": "unsur", "poin": 10}, {"en": "emphasize", "id": "menekankan", "poin": 20}, {"en": "employee", "id": "pegawai", "poin": 20}, {"en": "employer", "id": "pemberi kerja", "poin": 20}, {"en": "enable", "id": "memungkinkan", "poin": 10}, {"en": "encourage", "id": "mendorong", "poin": 20}, {"en": "essential", "id": "penting/mendasar", "poin": 20}, {"en": "establish", "id": "menetapkan/mendirikan", "poin": 20}, {"en": "evidence", "id": "bukti", "poin": 20}, {"en": "examine", "id": "memeriksa/menelaah", "poin": 10}, {"en": "except", "id": "kecuali", "poin": 10}, {"en": "exchange", "id": "menukar/pertukaran", "poin": 20}, {"en": "exist", "id": "ada", "poin": 10}, {"en": "expect", "id": "mengharapkan", "poin": 10}, {"en": "experience", "id": "pengalaman/mengalami", "poin": 20}, {"en": "explanation", "id": "penjelasan", "poin": 20}, {"en": "expression", "id": "ungkapan", "poin": 20}, {"en": "factor", "id": "faktor", "poin": 10}, {"en": "failure", "id": "kegagalan", "poin": 10}, {"en": "familiar", "id": "akrab/kenal", "poin": 20}, {"en": "feature", "id": "fitur/ciri", "poin": 10}, {"en": "figure", "id": "angka/tokoh/gambar", "poin": 10}, {"en": "focus", "id": "fokus", "poin": 10}, {"en": "foreign", "id": "asing", "poin": 10}, {"en": "former", "id": "sebelumnya/mantan", "poin": 10}, {"en": "frequent", "id": "sering", "poin": 20}, {"en": "function", "id": "fungsi", "poin": 20}, {"en": "generally", "id": "secara umum", "poin": 20}, {"en": "government", "id": "pemerintah", "poin": 20}, {"en": "growth", "id": "pertumbuhan", "poin": 10}, {"en": "handle", "id": "menangani", "poin": 10}, {"en": "identify", "id": "mengidentifikasi", "poin": 20}, {"en": "immediate", "id": "segera/langsung", "poin": 20}, {"en": "impact", "id": "dampak", "poin": 10}, {"en": "include", "id": "termasuk/mencakup", "poin": 10}, {"en": "increase", "id": "meningkat/menambah", "poin": 20}, {"en": "indicate", "id": "menunjukkan", "poin": 20}, {"en": "individual", "id": "individu", "poin": 20}, {"en": "industry", "id": "industri", "poin": 20}, {"en": "influence", "id": "pengaruh/mempengaruhi", "poin": 20}, {"en": "instead", "id": "sebagai gantinya", "poin": 10}, {"en": "instruction", "id": "instruksi", "poin": 20}, {"en": "introduce", "id": "memperkenalkan", "poin": 20}, {"en": "issue", "id": "isu/masalah", "poin": 10}, {"en": "lack", "id": "kekurangan", "poin": 10}, {"en": "likely", "id": "kemungkinan besar", "poin": 10}, {"en": "limit", "id": "batas/membatasi", "poin": 10}, {"en": "maintain", "id": "mempertahankan", "poin": 20}, {"en": "majority", "id": "mayoritas", "poin": 20}, {"en": "manage", "id": "mengelola", "poin": 10}, {"en": "manner", "id": "cara/sikap", "poin": 10}, {"en": "methodology", "id": "metodologi", "poin": 20}, {"en": "necessary", "id": "perlu", "poin": 20}, {"en": "notice", "id": "memperhatikan/pemberitahuan", "poin": 10}, {"en": "occur", "id": "terjadi", "poin": 10}, {"en": "opportunity", "id": "kesempatan", "poin": 20}, {"en": "organize", "id": "mengatur", "poin": 20}, {"en": "particular", "id": "khusus/tertentu", "poin": 20}, {"en": "perform", "id": "melakukan/menampilkan", "poin": 10}, {"en": "performance", "id": "kinerja/pertunjukan", "poin": 20}, {"en": "policy", "id": "kebijakan", "poin": 10}, {"en": "population", "id": "populasi", "poin": 20}, {"en": "potential", "id": "potensi", "poin": 20}, {"en": "predict", "id": "memprediksi", "poin": 10}, {"en": "previous", "id": "sebelumnya", "poin": 20}, {"en": "process", "id": "proses", "poin": 10}, {"en": "produce", "id": "menghasilkan", "poin": 10}, {"en": "progress", "id": "kemajuan", "poin": 20}, {"en": "proper", "id": "tepat/pantas", "poin": 10}, {"en": "provide", "id": "menyediakan/memberikan", "poin": 10}, {"en": "purpose", "id": "tujuan", "poin": 10}, {"en": "quality", "id": "kualitas", "poin": 10}, {"en": "quantity", "id": "jumlah/kuantitas", "poin": 20}, {"en": "range", "id": "rentang/jangkauan", "poin": 10}, {"en": "rare", "id": "langka/jarang", "poin": 10}, {"en": "rather", "id": "agak/lebih baik", "poin": 10}, {"en": "receive", "id": "menerima", "poin": 10}, {"en": "recognize", "id": "mengenali", "poin": 20}, {"en": "recommend", "id": "merekomendasikan", "poin": 20}, {"en": "reduce", "id": "mengurangi", "poin": 10}, {"en": "refer to", "id": "merujuk pada", "poin": 20}, {"en": "relationship", "id": "hubungan", "poin": 20}, {"en": "relevant", "id": "relevan", "poin": 20}, {"en": "remain", "id": "tetap/tersisa", "poin": 10}, {"en": "require", "id": "memerlukan", "poin": 10}, {"en": "research", "id": "penelitian", "poin": 20}, {"en": "respond", "id": "menanggapi", "poin": 10}, {"en": "response", "id": "tanggapan", "poin": 20}, {"en": "review", "id": "meninjau/ulasan", "poin": 10}, {"en": "role", "id": "peran", "poin": 10}, {"en": "schedule", "id": "jadwal", "poin": 20}, {"en": "select", "id": "memilih", "poin": 10}, {"en": "similar", "id": "mirip", "poin": 10}, {"en": "solution", "id": "solusi", "poin": 20}, {"en": "source", "id": "sumber", "poin": 10}, {"en": "specific", "id": "spesifik", "poin": 20}, {"en": "strategy", "id": "strategi", "poin": 20}, {"en": "structure", "id": "struktur", "poin": 20}, {"en": "successful", "id": "berhasil", "poin": 20}, {"en": "sufficient", "id": "cukup/memadai", "poin": 20}, {"en": "suggest", "id": "menyarankan", "poin": 10}, {"en": "task", "id": "tugas", "poin": 10}, {"en": "therefore", "id": "oleh karena itu", "poin": 20}, {"en": "throughout", "id": "sepanjang", "poin": 20}, {"en": "toward", "id": "menuju/terhadap", "poin": 10}, {"en": "transfer", "id": "memindahkan/transfer", "poin": 20}, {"en": "unless", "id": "kecuali jika", "poin": 10}, {"en": "valid", "id": "sah/valid", "poin": 10}, {"en": "various", "id": "berbagai", "poin": 10}, {"en": "whereas", "id": "sedangkan", "poin": 10}, {"en": "whether", "id": "apakah", "poin": 10}, {"en": "within", "id": "di dalam/dalam waktu", "poin": 10}, {"en": "without", "id": "tanpa", "poin": 10}];
  const extraFoundationVocabulary = [{"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "ability", "id": "kemampuan", "example": "The word 'ability' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "able", "id": "mampu", "example": "The word 'able' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "absence", "id": "ketidakhadiran", "example": "The word 'absence' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "absent", "id": "tidak hadir", "example": "The word 'absent' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "accept", "id": "menerima", "example": "The word 'accept' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "accident", "id": "kecelakaan", "example": "The word 'accident' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "according to", "id": "menurut", "example": "The word 'according to' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "account", "id": "akun/rekening/laporan", "example": "The word 'account' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "achieve", "id": "mencapai", "example": "The word 'achieve' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "achievement", "id": "pencapaian", "example": "The word 'achievement' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "active", "id": "aktif", "example": "The word 'active' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "activity", "id": "kegiatan", "example": "The word 'activity' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "actually", "id": "sebenarnya", "example": "The word 'actually' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "addition", "id": "tambahan", "example": "The word 'addition' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "additional", "id": "tambahan", "example": "The word 'additional' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "address", "id": "alamat/menangani", "example": "The word 'address' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "advantage", "id": "keuntungan", "example": "The word 'advantage' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "advice", "id": "nasihat", "example": "The word 'advice' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "advise", "id": "menasihati", "example": "The word 'advise' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "affect", "id": "mempengaruhi", "example": "The word 'affect' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "afford", "id": "mampu membeli", "example": "The word 'afford' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "agency", "id": "agensi/lembaga", "example": "The word 'agency' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "agreement", "id": "persetujuan", "example": "The word 'agreement' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "allow", "id": "mengizinkan", "example": "The word 'allow' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "almost", "id": "hampir", "example": "The word 'almost' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "conjunction", "en": "although", "id": "meskipun", "example": "The word 'although' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "among", "id": "di antara banyak", "example": "The word 'among' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "amount", "id": "jumlah", "example": "The word 'amount' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "ancient", "id": "kuno", "example": "The word 'ancient' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "announce", "id": "mengumumkan", "example": "The word 'announce' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "annual", "id": "tahunan", "example": "The word 'annual' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "determiner", "en": "another", "id": "yang lain satu lagi", "example": "The word 'another' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "anyway", "id": "bagaimanapun", "example": "The word 'anyway' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "appear", "id": "muncul/tampak", "example": "The word 'appear' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "appearance", "id": "penampilan/kemunculan", "example": "The word 'appearance' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "apply", "id": "mendaftar/menerapkan", "example": "The word 'apply' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "appointment", "id": "janji temu", "example": "The word 'appointment' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "appreciate", "id": "menghargai", "example": "The word 'appreciate' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "approach", "id": "pendekatan/mendekati", "example": "The word 'approach' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "appropriate", "id": "tepat/sesuai", "example": "The word 'appropriate' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "argue", "id": "berpendapat/berdebat", "example": "The word 'argue' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "argument", "id": "argumen", "example": "The word 'argument' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "arrange", "id": "mengatur/menyusun", "example": "The word 'arrange' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "arrangement", "id": "pengaturan", "example": "The word 'arrangement' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "aspect", "id": "aspek", "example": "The word 'aspect' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "assess", "id": "menilai", "example": "The word 'assess' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "assessment", "id": "penilaian", "example": "The word 'assessment' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "assignment", "id": "tugas", "example": "The word 'assignment' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "assist", "id": "membantu", "example": "The word 'assist' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "assistance", "id": "bantuan", "example": "The word 'assistance' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "assume", "id": "berasumsi", "example": "The word 'assume' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "attempt", "id": "upaya/mencoba", "example": "The word 'attempt' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "attention", "id": "perhatian", "example": "The word 'attention' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "attitude", "id": "sikap", "example": "The word 'attitude' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "available", "id": "tersedia", "example": "The word 'available' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "avoid", "id": "menghindari", "example": "The word 'avoid' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "background", "id": "latar belakang", "example": "The word 'background' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "balance", "id": "keseimbangan", "example": "The word 'balance' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "behavior", "id": "perilaku", "example": "The word 'behavior' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "benefit", "id": "manfaat", "example": "The word 'benefit' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "besides", "id": "selain itu", "example": "The word 'besides' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "beyond", "id": "di luar/melebihi", "example": "The word 'beyond' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "brief", "id": "singkat", "example": "The word 'brief' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "briefly", "id": "secara singkat", "example": "The word 'briefly' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "budget", "id": "anggaran", "example": "The word 'budget' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "capacity", "id": "kapasitas", "example": "The word 'capacity' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "career", "id": "karier", "example": "The word 'career' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "case", "id": "kasus", "example": "The word 'case' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "cause", "id": "penyebab/menyebabkan", "example": "The word 'cause' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "challenge", "id": "tantangan", "example": "The word 'challenge' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "chance", "id": "kesempatan", "example": "The word 'chance' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/adjective", "en": "characteristic", "id": "ciri khas", "example": "The word 'characteristic' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "charge", "id": "biaya/mengisi daya", "example": "The word 'charge' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "choice", "id": "pilihan", "example": "The word 'choice' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "choose", "id": "memilih", "example": "The word 'choose' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "circumstance", "id": "keadaan", "example": "The word 'circumstance' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "claim", "id": "klaim/mengklaim", "example": "The word 'claim' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "clearly", "id": "dengan jelas", "example": "The word 'clearly' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "client", "id": "klien", "example": "The word 'client' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "combine", "id": "menggabungkan", "example": "The word 'combine' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "comfortable", "id": "nyaman", "example": "The word 'comfortable' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "common", "id": "umum", "example": "The word 'common' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "community", "id": "komunitas", "example": "The word 'community' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "compare", "id": "membandingkan", "example": "The word 'compare' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "comparison", "id": "perbandingan", "example": "The word 'comparison' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "competition", "id": "kompetisi", "example": "The word 'competition' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective/verb", "en": "complete", "id": "lengkap/menyelesaikan", "example": "The word 'complete' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "complex", "id": "kompleks", "example": "The word 'complex' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "concern", "id": "kekhawatiran/berkaitan", "example": "The word 'concern' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "condition", "id": "kondisi/syarat", "example": "The word 'condition' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "conduct", "id": "melakukan/melaksanakan", "example": "The word 'conduct' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "confidence", "id": "kepercayaan diri", "example": "The word 'confidence' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "confident", "id": "percaya diri", "example": "The word 'confident' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "confirm", "id": "mengonfirmasi", "example": "The word 'confirm' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "confuse", "id": "membingungkan", "example": "The word 'confuse' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "connection", "id": "hubungan", "example": "The word 'connection' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "consequence", "id": "akibat", "example": "The word 'consequence' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "consider", "id": "mempertimbangkan", "example": "The word 'consider' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "verb phrase", "en": "consist of", "id": "terdiri dari", "example": "The word 'consist of' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "constant", "id": "tetap/konstan", "example": "The word 'constant' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "contain", "id": "berisi/mengandung", "example": "The word 'contain' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "contrast", "id": "perbedaan/membedakan", "example": "The word 'contrast' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "contribute", "id": "berkontribusi", "example": "The word 'contribute' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "convenient", "id": "nyaman/praktis", "example": "The word 'convenient' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "creative", "id": "kreatif", "example": "The word 'creative' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective/noun", "en": "current", "id": "saat ini/arus", "example": "The word 'current' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "currently", "id": "saat ini", "example": "The word 'currently' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "debate", "id": "debat", "example": "The word 'debate' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "decision", "id": "keputusan", "example": "The word 'decision' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "decrease", "id": "menurun/mengurangi", "example": "The word 'decrease' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "define", "id": "mendefinisikan", "example": "The word 'define' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "definition", "id": "definisi", "example": "The word 'definition' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "degree", "id": "tingkat/gelar", "example": "The word 'degree' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "deliver", "id": "mengirim/menyampaikan", "example": "The word 'deliver' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "demand", "id": "permintaan/menuntut", "example": "The word 'demand' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "verb phrase", "en": "depend on", "id": "bergantung pada", "example": "The word 'depend on' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "describe", "id": "menggambarkan/menjelaskan", "example": "The word 'describe' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "description", "id": "deskripsi", "example": "The word 'description' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "despite", "id": "meskipun", "example": "The word 'despite' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "determine", "id": "menentukan", "example": "The word 'determine' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "develop", "id": "mengembangkan", "example": "The word 'develop' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "development", "id": "pengembangan", "example": "The word 'development' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "difference", "id": "perbedaan", "example": "The word 'difference' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "difficulty", "id": "kesulitan", "example": "The word 'difficulty' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "direction", "id": "arah/petunjuk", "example": "The word 'direction' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "discuss", "id": "mendiskusikan", "example": "The word 'discuss' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "discussion", "id": "diskusi", "example": "The word 'discussion' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "distance", "id": "jarak", "example": "The word 'distance' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "distinguish", "id": "membedakan", "example": "The word 'distinguish' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "effective", "id": "efektif", "example": "The word 'effective' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "effort", "id": "usaha", "example": "The word 'effort' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "element", "id": "unsur", "example": "The word 'element' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "emphasize", "id": "menekankan", "example": "The word 'emphasize' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "employee", "id": "pegawai", "example": "The word 'employee' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "employer", "id": "pemberi kerja", "example": "The word 'employer' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "enable", "id": "memungkinkan", "example": "The word 'enable' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "encourage", "id": "mendorong", "example": "The word 'encourage' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "essential", "id": "penting/mendasar", "example": "The word 'essential' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "establish", "id": "menetapkan/mendirikan", "example": "The word 'establish' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "evidence", "id": "bukti", "example": "The word 'evidence' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "examine", "id": "memeriksa/menelaah", "example": "The word 'examine' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "except", "id": "kecuali", "example": "The word 'except' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb/noun", "en": "exchange", "id": "menukar/pertukaran", "example": "The word 'exchange' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "exist", "id": "ada", "example": "The word 'exist' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "expect", "id": "mengharapkan", "example": "The word 'expect' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "experience", "id": "pengalaman/mengalami", "example": "The word 'experience' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "explanation", "id": "penjelasan", "example": "The word 'explanation' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "expression", "id": "ungkapan", "example": "The word 'expression' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "factor", "id": "faktor", "example": "The word 'factor' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "failure", "id": "kegagalan", "example": "The word 'failure' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "familiar", "id": "akrab/kenal", "example": "The word 'familiar' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "feature", "id": "fitur/ciri", "example": "The word 'feature' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "figure", "id": "angka/tokoh/gambar", "example": "The word 'figure' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "focus", "id": "fokus", "example": "The word 'focus' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "foreign", "id": "asing", "example": "The word 'foreign' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "former", "id": "sebelumnya/mantan", "example": "The word 'former' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "frequent", "id": "sering", "example": "The word 'frequent' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "function", "id": "fungsi", "example": "The word 'function' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "generally", "id": "secara umum", "example": "The word 'generally' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "government", "id": "pemerintah", "example": "The word 'government' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "growth", "id": "pertumbuhan", "example": "The word 'growth' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "handle", "id": "menangani", "example": "The word 'handle' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "identify", "id": "mengidentifikasi", "example": "The word 'identify' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "immediate", "id": "segera/langsung", "example": "The word 'immediate' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "impact", "id": "dampak", "example": "The word 'impact' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "include", "id": "termasuk/mencakup", "example": "The word 'include' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "increase", "id": "meningkat/menambah", "example": "The word 'increase' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "indicate", "id": "menunjukkan", "example": "The word 'indicate' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/adjective", "en": "individual", "id": "individu", "example": "The word 'individual' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "industry", "id": "industri", "example": "The word 'industry' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "influence", "id": "pengaruh/mempengaruhi", "example": "The word 'influence' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "instead", "id": "sebagai gantinya", "example": "The word 'instead' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "instruction", "id": "instruksi", "example": "The word 'instruction' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "introduce", "id": "memperkenalkan", "example": "The word 'introduce' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "issue", "id": "isu/masalah", "example": "The word 'issue' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "lack", "id": "kekurangan", "example": "The word 'lack' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective/adverb", "en": "likely", "id": "kemungkinan besar", "example": "The word 'likely' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/verb", "en": "limit", "id": "batas/membatasi", "example": "The word 'limit' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "maintain", "id": "mempertahankan", "example": "The word 'maintain' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "majority", "id": "mayoritas", "example": "The word 'majority' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "manage", "id": "mengelola", "example": "The word 'manage' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "manner", "id": "cara/sikap", "example": "The word 'manner' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "methodology", "id": "metodologi", "example": "The word 'methodology' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "necessary", "id": "perlu", "example": "The word 'necessary' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb/noun", "en": "notice", "id": "memperhatikan/pemberitahuan", "example": "The word 'notice' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "occur", "id": "terjadi", "example": "The word 'occur' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "opportunity", "id": "kesempatan", "example": "The word 'opportunity' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "organize", "id": "mengatur", "example": "The word 'organize' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "particular", "id": "khusus/tertentu", "example": "The word 'particular' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "perform", "id": "melakukan/menampilkan", "example": "The word 'perform' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "performance", "id": "kinerja/pertunjukan", "example": "The word 'performance' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "policy", "id": "kebijakan", "example": "The word 'policy' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "population", "id": "populasi", "example": "The word 'population' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun/adjective", "en": "potential", "id": "potensi", "example": "The word 'potential' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "predict", "id": "memprediksi", "example": "The word 'predict' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "previous", "id": "sebelumnya", "example": "The word 'previous' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "process", "id": "proses", "example": "The word 'process' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "produce", "id": "menghasilkan", "example": "The word 'produce' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "progress", "id": "kemajuan", "example": "The word 'progress' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "proper", "id": "tepat/pantas", "example": "The word 'proper' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "provide", "id": "menyediakan/memberikan", "example": "The word 'provide' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "purpose", "id": "tujuan", "example": "The word 'purpose' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "quality", "id": "kualitas", "example": "The word 'quality' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "quantity", "id": "jumlah/kuantitas", "example": "The word 'quantity' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "range", "id": "rentang/jangkauan", "example": "The word 'range' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "rare", "id": "langka/jarang", "example": "The word 'rare' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "rather", "id": "agak/lebih baik", "example": "The word 'rather' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "receive", "id": "menerima", "example": "The word 'receive' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "recognize", "id": "mengenali", "example": "The word 'recognize' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "recommend", "id": "merekomendasikan", "example": "The word 'recommend' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "reduce", "id": "mengurangi", "example": "The word 'reduce' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "verb phrase", "en": "refer to", "id": "merujuk pada", "example": "The word 'refer to' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "relationship", "id": "hubungan", "example": "The word 'relationship' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "relevant", "id": "relevan", "example": "The word 'relevant' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "remain", "id": "tetap/tersisa", "example": "The word 'remain' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "require", "id": "memerlukan", "example": "The word 'require' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "research", "id": "penelitian", "example": "The word 'research' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "respond", "id": "menanggapi", "example": "The word 'respond' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "response", "id": "tanggapan", "example": "The word 'response' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb/noun", "en": "review", "id": "meninjau/ulasan", "example": "The word 'review' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "role", "id": "peran", "example": "The word 'role' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "schedule", "id": "jadwal", "example": "The word 'schedule' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "select", "id": "memilih", "example": "The word 'select' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "similar", "id": "mirip", "example": "The word 'similar' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "solution", "id": "solusi", "example": "The word 'solution' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "source", "id": "sumber", "example": "The word 'source' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "specific", "id": "spesifik", "example": "The word 'specific' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "strategy", "id": "strategi", "example": "The word 'strategy' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "structure", "id": "struktur", "example": "The word 'structure' is useful for English practice."}, {"level": "Intermediate", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "successful", "id": "berhasil", "example": "The word 'successful' is useful for English practice."}, {"level": "Academic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "sufficient", "id": "cukup/memadai", "example": "The word 'sufficient' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb", "en": "suggest", "id": "menyarankan", "example": "The word 'suggest' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "noun", "en": "task", "id": "tugas", "example": "The word 'task' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "adverb", "en": "therefore", "id": "oleh karena itu", "example": "The word 'therefore' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "throughout", "id": "sepanjang", "example": "The word 'throughout' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "toward", "id": "menuju/terhadap", "example": "The word 'toward' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "verb/noun", "en": "transfer", "id": "memindahkan/transfer", "example": "The word 'transfer' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "conjunction", "en": "unless", "id": "kecuali jika", "example": "The word 'unless' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "valid", "id": "sah/valid", "example": "The word 'valid' is useful for English practice."}, {"level": "Basic", "category": "Expanded TOEFL Word Bank", "wordClass": "adjective", "en": "various", "id": "berbagai", "example": "The word 'various' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "conjunction", "en": "whereas", "id": "sedangkan", "example": "The word 'whereas' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "conjunction", "en": "whether", "id": "apakah", "example": "The word 'whether' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "within", "id": "di dalam/dalam waktu", "example": "The word 'within' is useful for English practice."}, {"level": "TOEFL", "category": "Expanded TOEFL Word Bank", "wordClass": "preposition", "en": "without", "id": "tanpa", "example": "The word 'without' is useful for English practice."}];
  const extraGrammar = [{"idText": "Saya bermain sepak bola setiap Minggu", "enCorrect": ["I", "play", "football", "every", "Sunday"], "jumbled": ["I", "play", "football", "every", "Sunday", "is", "are", "have"], "hint": "Materi: Simple Present. Pola: Subject + V1 + Object + Time.", "poin": 20}, {"idText": "Dia belajar bahasa Inggris setiap malam", "enCorrect": ["She", "studies", "English", "every", "night"], "jumbled": ["She", "studies", "English", "every", "night", "is", "are", "have"], "hint": "Materi: Simple Present. Pola: Subject + V-s/es + Object + Time.", "poin": 20}, {"idText": "Mereka biasanya sarapan bersama", "enCorrect": ["They", "usually", "eat", "breakfast", "together"], "jumbled": ["They", "usually", "eat", "breakfast", "together", "is", "are", "have"], "hint": "Materi: Simple Present. Pola: Subject + adverb + V1 + Object.", "poin": 20}, {"idText": "Kami tidak menonton televisi pada pagi hari", "enCorrect": ["We", "do", "not", "watch", "television", "in", "the", "morning"], "jumbled": ["We", "do", "not", "watch", "television", "in", "the", "morning", "is", "are", "have"], "hint": "Materi: Simple Present Negative. Pola: Subject + do not + V1.", "poin": 20}, {"idText": "Apakah dia pergi ke sekolah dengan bus", "enCorrect": ["Does", "she", "go", "to", "school", "by", "bus"], "jumbled": ["Does", "she", "go", "to", "school", "by", "bus", "is", "are", "have"], "hint": "Materi: Simple Present Question. Pola: Does + subject + V1.", "poin": 20}, {"idText": "Saya sedang membaca buku sekarang", "enCorrect": ["I", "am", "reading", "a", "book", "now"], "jumbled": ["I", "am", "reading", "a", "book", "now", "is", "are", "have"], "hint": "Materi: Present Continuous. Pola: Subject + am/is/are + V-ing.", "poin": 20}, {"idText": "Mereka sedang bermain di taman", "enCorrect": ["They", "are", "playing", "in", "the", "park"], "jumbled": ["They", "are", "playing", "in", "the", "park", "is", "are", "have"], "hint": "Materi: Present Continuous. Pola: Subject + are + V-ing.", "poin": 20}, {"idText": "Ibu saya sedang memasak makan malam", "enCorrect": ["My", "mother", "is", "cooking", "dinner"], "jumbled": ["My", "mother", "is", "cooking", "dinner", "is", "are", "have"], "hint": "Materi: Present Continuous. Pola: Subject + is + V-ing.", "poin": 20}, {"idText": "Dia tidak sedang tidur", "enCorrect": ["He", "is", "not", "sleeping"], "jumbled": ["He", "is", "not", "sleeping", "is", "are", "have"], "hint": "Materi: Present Continuous Negative. Pola: Subject + is not + V-ing.", "poin": 20}, {"idText": "Apakah kamu sedang mendengarkan saya", "enCorrect": ["Are", "you", "listening", "to", "me"], "jumbled": ["Are", "you", "listening", "to", "me", "is", "are", "have"], "hint": "Materi: Present Continuous Question. Pola: Are + subject + V-ing.", "poin": 20}, {"idText": "Saya telah menyelesaikan tugas saya", "enCorrect": ["I", "have", "finished", "my", "homework"], "jumbled": ["I", "have", "finished", "my", "homework", "is", "are", "have"], "hint": "Materi: Present Perfect. Pola: Subject + have/has + V3.", "poin": 20}, {"idText": "Dia sudah membeli kamus baru", "enCorrect": ["She", "has", "bought", "a", "new", "dictionary"], "jumbled": ["She", "has", "bought", "a", "new", "dictionary", "is", "are", "have"], "hint": "Materi: Present Perfect. Pola: Subject + has + V3 + Object.", "poin": 20}, {"idText": "Kami belum melihat film itu", "enCorrect": ["We", "have", "not", "seen", "that", "movie"], "jumbled": ["We", "have", "not", "seen", "that", "movie", "is", "are", "have"], "hint": "Materi: Present Perfect Negative. Pola: Subject + have not + V3.", "poin": 20}, {"idText": "Apakah mereka pernah mengunjungi Bali", "enCorrect": ["Have", "they", "ever", "visited", "Bali"], "jumbled": ["Have", "they", "ever", "visited", "Bali", "is", "are", "have"], "hint": "Materi: Present Perfect Question. Pola: Have + subject + ever + V3.", "poin": 20}, {"idText": "Dia telah belajar selama tiga jam", "enCorrect": ["She", "has", "been", "studying", "for", "three", "hours"], "jumbled": ["She", "has", "been", "studying", "for", "three", "hours", "is", "are", "have"], "hint": "Materi: Present Perfect Continuous. Pola: Subject + has been + V-ing.", "poin": 20}, {"idText": "Mereka telah menunggu sejak pagi", "enCorrect": ["They", "have", "been", "waiting", "since", "morning"], "jumbled": ["They", "have", "been", "waiting", "since", "morning", "is", "are", "have"], "hint": "Materi: Present Perfect Continuous. Pola: Subject + have been + V-ing.", "poin": 20}, {"idText": "Saya pergi ke sekolah kemarin", "enCorrect": ["I", "went", "to", "school", "yesterday"], "jumbled": ["I", "went", "to", "school", "yesterday", "is", "are", "have"], "hint": "Materi: Simple Past. Pola: Subject + V2 + Time.", "poin": 20}, {"idText": "Kami mengunjungi museum minggu lalu", "enCorrect": ["We", "visited", "the", "museum", "last", "week"], "jumbled": ["We", "visited", "the", "museum", "last", "week", "is", "are", "have"], "hint": "Materi: Simple Past. Pola: Subject + V2 + Object + Time.", "poin": 20}, {"idText": "Dia tidak datang ke kelas kemarin", "enCorrect": ["He", "did", "not", "come", "to", "class", "yesterday"], "jumbled": ["He", "did", "not", "come", "to", "class", "yesterday", "is", "are", "have"], "hint": "Materi: Simple Past Negative. Pola: Subject + did not + V1.", "poin": 20}, {"idText": "Apakah kamu membaca buku itu tadi malam", "enCorrect": ["Did", "you", "read", "that", "book", "last", "night"], "jumbled": ["Did", "you", "read", "that", "book", "last", "night", "is", "are", "have"], "hint": "Materi: Simple Past Question. Pola: Did + subject + V1.", "poin": 20}, {"idText": "Saya sedang belajar ketika dia menelepon", "enCorrect": ["I", "was", "studying", "when", "he", "called"], "jumbled": ["I", "was", "studying", "when", "he", "called", "is", "are", "have"], "hint": "Materi: Past Continuous. Pola: Subject + was/were + V-ing + when.", "poin": 20}, {"idText": "Mereka sedang menonton film pada pukul delapan", "enCorrect": ["They", "were", "watching", "a", "movie", "at", "eight"], "jumbled": ["They", "were", "watching", "a", "movie", "at", "eight", "is", "are", "have"], "hint": "Materi: Past Continuous. Pola: Subject + were + V-ing.", "poin": 20}, {"idText": "Dia sudah pergi sebelum saya tiba", "enCorrect": ["He", "had", "left", "before", "I", "arrived"], "jumbled": ["He", "had", "left", "before", "I", "arrived", "is", "are", "have"], "hint": "Materi: Past Perfect. Pola: Subject + had + V3.", "poin": 20}, {"idText": "Kami telah menyelesaikan pekerjaan itu sebelum guru datang", "enCorrect": ["We", "had", "finished", "the", "work", "before", "the", "teacher", "came"], "jumbled": ["We", "had", "finished", "the", "work", "before", "the", "teacher", "came", "is", "are", "have"], "hint": "Materi: Past Perfect. Pola: Subject + had + V3.", "poin": 20}, {"idText": "Mereka telah bekerja selama dua jam sebelum hujan mulai", "enCorrect": ["They", "had", "been", "working", "for", "two", "hours", "before", "it", "started", "raining"], "jumbled": ["They", "had", "been", "working", "for", "two", "hours", "before", "it", "started", "raining", "is", "are", "have"], "hint": "Materi: Past Perfect Continuous. Pola: Subject + had been + V-ing.", "poin": 20}, {"idText": "Saya akan belajar bahasa Inggris besok", "enCorrect": ["I", "will", "study", "English", "tomorrow"], "jumbled": ["I", "will", "study", "English", "tomorrow", "is", "are", "have"], "hint": "Materi: Simple Future. Pola: Subject + will + V1.", "poin": 20}, {"idText": "Dia akan membeli laptop baru minggu depan", "enCorrect": ["She", "will", "buy", "a", "new", "laptop", "next", "week"], "jumbled": ["She", "will", "buy", "a", "new", "laptop", "next", "week", "is", "are", "have"], "hint": "Materi: Simple Future. Pola: Subject + will + V1.", "poin": 20}, {"idText": "Kami tidak akan menyerah", "enCorrect": ["We", "will", "not", "give", "up"], "jumbled": ["We", "will", "not", "give", "up", "is", "are", "have"], "hint": "Materi: Simple Future Negative. Pola: Subject + will not + V1.", "poin": 20}, {"idText": "Apakah mereka akan datang malam ini", "enCorrect": ["Will", "they", "come", "tonight"], "jumbled": ["Will", "they", "come", "tonight", "is", "are", "have"], "hint": "Materi: Simple Future Question. Pola: Will + subject + V1.", "poin": 20}, {"idText": "Saya akan sedang belajar pada jam delapan malam", "enCorrect": ["I", "will", "be", "studying", "at", "eight", "tonight"], "jumbled": ["I", "will", "be", "studying", "at", "eight", "tonight", "is", "are", "have"], "hint": "Materi: Future Continuous. Pola: Subject + will be + V-ing.", "poin": 20}, {"idText": "Mereka akan sedang bepergian besok pagi", "enCorrect": ["They", "will", "be", "traveling", "tomorrow", "morning"], "jumbled": ["They", "will", "be", "traveling", "tomorrow", "morning", "is", "are", "have"], "hint": "Materi: Future Continuous. Pola: Subject + will be + V-ing.", "poin": 20}, {"idText": "Saya akan sudah menyelesaikan laporan ini besok", "enCorrect": ["I", "will", "have", "finished", "this", "report", "by", "tomorrow"], "jumbled": ["I", "will", "have", "finished", "this", "report", "by", "tomorrow", "is", "are", "have"], "hint": "Materi: Future Perfect. Pola: Subject + will have + V3.", "poin": 20}, {"idText": "Dia akan sudah tiba sebelum rapat dimulai", "enCorrect": ["She", "will", "have", "arrived", "before", "the", "meeting", "starts"], "jumbled": ["She", "will", "have", "arrived", "before", "the", "meeting", "starts", "is", "are", "have"], "hint": "Materi: Future Perfect. Pola: Subject + will have + V3.", "poin": 20}, {"idText": "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun", "enCorrect": ["By", "next", "year", "I", "will", "have", "been", "studying", "English", "for", "four", "years"], "jumbled": ["By", "next", "year", "I", "will", "have", "been", "studying", "English", "for", "four", "years", "is", "are", "have"], "hint": "Materi: Future Perfect Continuous. Pola: By + time + subject + will have been + V-ing.", "poin": 20}, {"idText": "Dia mengatakan bahwa dia akan belajar lebih giat", "enCorrect": ["She", "said", "that", "she", "would", "study", "harder"], "jumbled": ["She", "said", "that", "she", "would", "study", "harder", "is", "are", "have"], "hint": "Materi: Simple Past Future. Pola: Subject + said + would + V1.", "poin": 20}, {"idText": "Saya pikir mereka akan datang tepat waktu", "enCorrect": ["I", "thought", "they", "would", "arrive", "on", "time"], "jumbled": ["I", "thought", "they", "would", "arrive", "on", "time", "is", "are", "have"], "hint": "Materi: Simple Past Future. Pola: Subject + thought + would + V1.", "poin": 20}, {"idText": "Dia mengatakan bahwa dia akan sedang bekerja pada pukul delapan", "enCorrect": ["He", "said", "that", "he", "would", "be", "working", "at", "eight"], "jumbled": ["He", "said", "that", "he", "would", "be", "working", "at", "eight", "is", "are", "have"], "hint": "Materi: Past Future Continuous. Pola: Subject + said + would be + V-ing.", "poin": 20}, {"idText": "Saya pikir dia akan sudah menyelesaikan tugas itu", "enCorrect": ["I", "thought", "she", "would", "have", "finished", "the", "task"], "jumbled": ["I", "thought", "she", "would", "have", "finished", "the", "task", "is", "are", "have"], "hint": "Materi: Past Future Perfect. Pola: Subject + thought + would have + V3.", "poin": 20}, {"idText": "Buku itu ditulis oleh seorang guru", "enCorrect": ["The", "book", "was", "written", "by", "a", "teacher"], "jumbled": ["The", "book", "was", "written", "by", "a", "teacher", "is", "are", "have"], "hint": "Materi: Passive Voice. Pola: Subject + be + V3 + by agent.", "poin": 20}, {"idText": "Pintu itu sedang diperbaiki", "enCorrect": ["The", "door", "is", "being", "repaired"], "jumbled": ["The", "door", "is", "being", "repaired", "is", "are", "have"], "hint": "Materi: Passive Voice. Pola: Subject + is being + V3.", "poin": 20}, {"idText": "Tugas itu telah dikumpulkan", "enCorrect": ["The", "assignment", "has", "been", "submitted"], "jumbled": ["The", "assignment", "has", "been", "submitted", "is", "are", "have"], "hint": "Materi: Passive Voice. Pola: Subject + has been + V3.", "poin": 20}, {"idText": "Dia pintar bukan", "enCorrect": ["She", "is", "smart", "is", "she", "not"], "jumbled": ["She", "is", "smart", "is", "she", "not", "is", "are", "have"], "hint": "Materi: Question Tag. Pola: Statement + tag.", "poin": 20}, {"idText": "Kamu suka bahasa Inggris bukan", "enCorrect": ["You", "like", "English", "do", "you", "not"], "jumbled": ["You", "like", "English", "do", "you", "not", "is", "are", "have"], "hint": "Materi: Question Tag. Pola: Statement + auxiliary + subject.", "poin": 20}, {"idText": "Buku ini lebih menarik daripada buku itu", "enCorrect": ["This", "book", "is", "more", "interesting", "than", "that", "book"], "jumbled": ["This", "book", "is", "more", "interesting", "than", "that", "book", "is", "are", "have"], "hint": "Materi: Degree Comparison. Pola: Comparative + than.", "poin": 20}, {"idText": "Dia adalah siswa paling rajin di kelas", "enCorrect": ["She", "is", "the", "most", "diligent", "student", "in", "the", "class"], "jumbled": ["She", "is", "the", "most", "diligent", "student", "in", "the", "class", "is", "are", "have"], "hint": "Materi: Degree Comparison. Pola: Superlative.", "poin": 20}, {"idText": "Dia berkata bahwa dia sedang belajar", "enCorrect": ["He", "said", "that", "he", "was", "studying"], "jumbled": ["He", "said", "that", "he", "was", "studying", "is", "are", "have"], "hint": "Materi: Direct Indirect. Pola: Said that + past continuous.", "poin": 20}, {"idText": "Saya lebih suka teh daripada kopi", "enCorrect": ["I", "prefer", "tea", "to", "coffee"], "jumbled": ["I", "prefer", "tea", "to", "coffee", "is", "are", "have"], "hint": "Materi: Preferences. Pola: Prefer + noun + to + noun.", "poin": 20}, {"idText": "Betapa indahnya hari ini", "enCorrect": ["What", "a", "beautiful", "day", "it", "is"], "jumbled": ["What", "a", "beautiful", "day", "it", "is", "is", "are", "have"], "hint": "Materi: Exclamatory. Pola: What + noun phrase.", "poin": 20}, {"idText": "Jika saya belajar saya akan lulus", "enCorrect": ["If", "I", "study", "I", "will", "pass"], "jumbled": ["If", "I", "study", "I", "will", "pass", "is", "are", "have"], "hint": "Materi: Conditional Type 1. Pola: If + simple present + will.", "poin": 20}, {"idText": "Jika saya punya waktu saya akan belajar", "enCorrect": ["If", "I", "had", "time", "I", "would", "study"], "jumbled": ["If", "I", "had", "time", "I", "would", "study", "is", "are", "have"], "hint": "Materi: Conditional Type 2. Pola: If + simple past + would.", "poin": 20}, {"idText": "Jika saya telah belajar saya akan lulus", "enCorrect": ["If", "I", "had", "studied", "I", "would", "have", "passed"], "jumbled": ["If", "I", "had", "studied", "I", "would", "have", "passed", "is", "are", "have"], "hint": "Materi: Conditional Type 3. Pola: If + past perfect + would have V3.", "poin": 20}, {"idText": "Setiap siswa harus membawa buku", "enCorrect": ["Each", "student", "must", "bring", "a", "book"], "jumbled": ["Each", "student", "must", "bring", "a", "book", "is", "are", "have"], "hint": "Materi: Each and Every. Pola: Each + singular noun.", "poin": 20}, {"idText": "Semua orang membutuhkan latihan", "enCorrect": ["Everyone", "needs", "practice"], "jumbled": ["Everyone", "needs", "practice", "is", "are", "have"], "hint": "Materi: Each and Every. Pola: Everyone + singular verb.", "poin": 20}, {"idText": "Ini adalah buku yang saya beli kemarin", "enCorrect": ["This", "is", "the", "book", "that", "I", "bought", "yesterday"], "jumbled": ["This", "is", "the", "book", "that", "I", "bought", "yesterday", "is", "are", "have"], "hint": "Materi: Relative Pronoun. Pola: Noun + that + clause.", "poin": 20}, {"idText": "Siswa yang duduk di depan adalah teman saya", "enCorrect": ["The", "student", "who", "sits", "in", "front", "is", "my", "friend"], "jumbled": ["The", "student", "who", "sits", "in", "front", "is", "my", "friend", "is", "are", "have"], "hint": "Materi: Relative Pronoun. Pola: Person + who + verb.", "poin": 20}, {"idText": "Saya terlambat karena hujan", "enCorrect": ["I", "was", "late", "because", "it", "rained"], "jumbled": ["I", "was", "late", "because", "it", "rained", "is", "are", "have"], "hint": "Materi: Because. Pola: Because + clause.", "poin": 20}, {"idText": "Saya terlambat karena hujan deras", "enCorrect": ["I", "was", "late", "because", "of", "the", "heavy", "rain"], "jumbled": ["I", "was", "late", "because", "of", "the", "heavy", "rain", "is", "are", "have"], "hint": "Materi: Because Of. Pola: Because of + noun phrase.", "poin": 20}, {"idText": "Saya membutuhkan buku lain", "enCorrect": ["I", "need", "another", "book"], "jumbled": ["I", "need", "another", "book", "is", "are", "have"], "hint": "Materi: Another Other Others. Pola: Another + singular noun.", "poin": 20}, {"idText": "Beberapa siswa belajar dan yang lainnya bermain", "enCorrect": ["Some", "students", "study", "and", "others", "play"], "jumbled": ["Some", "students", "study", "and", "others", "play", "is", "are", "have"], "hint": "Materi: Another Other Others. Pola: Others as pronoun.", "poin": 20}, {"idText": "Saya sedang mencari informasi penting", "enCorrect": ["I", "am", "looking", "for", "important", "information"], "jumbled": ["I", "am", "looking", "for", "important", "information", "is", "are", "have"], "hint": "Materi: Vocabulary Practice. Pola: Verb phrase + noun.", "poin": 20}, {"idText": "Guru menjelaskan pelajaran dengan jelas", "enCorrect": ["The", "teacher", "explains", "the", "lesson", "clearly"], "jumbled": ["The", "teacher", "explains", "the", "lesson", "clearly", "is", "are", "have"], "hint": "Materi: Grammar Practice. Pola: Subject + verb + object + adverb.", "poin": 20}, {"idText": "Para siswa mendengarkan guru dengan hati-hati", "enCorrect": ["The", "students", "listen", "to", "the", "teacher", "carefully"], "jumbled": ["The", "students", "listen", "to", "the", "teacher", "carefully", "is", "are", "have"], "hint": "Materi: Grammar Practice. Pola: Subject + verb + object + adverb.", "poin": 20}, {"idText": "Dia harus menyelesaikan pekerjaan rumah sebelum makan malam", "enCorrect": ["She", "must", "finish", "her", "homework", "before", "dinner"], "jumbled": ["She", "must", "finish", "her", "homework", "before", "dinner", "is", "are", "have"], "hint": "Materi: Modal. Pola: Subject + modal + V1.", "poin": 20}, {"idText": "Kita sebaiknya berlatih setiap hari", "enCorrect": ["We", "should", "practice", "every", "day"], "jumbled": ["We", "should", "practice", "every", "day", "is", "are", "have"], "hint": "Materi: Modal. Pola: Subject + should + V1.", "poin": 20}, {"idText": "Saya bisa memahami kalimat sederhana", "enCorrect": ["I", "can", "understand", "simple", "sentences"], "jumbled": ["I", "can", "understand", "simple", "sentences", "is", "are", "have"], "hint": "Materi: Modal. Pola: Subject + can + V1.", "poin": 20}, {"idText": "Mereka mungkin datang terlambat", "enCorrect": ["They", "may", "arrive", "late"], "jumbled": ["They", "may", "arrive", "late", "is", "are", "have"], "hint": "Materi: Modal. Pola: Subject + may + V1.", "poin": 20}, {"idText": "Dia tidak boleh menggunakan kamus selama ujian", "enCorrect": ["He", "must", "not", "use", "a", "dictionary", "during", "the", "test"], "jumbled": ["He", "must", "not", "use", "a", "dictionary", "during", "the", "test", "is", "are", "have"], "hint": "Materi: Modal Negative. Pola: Subject + must not + V1.", "poin": 20}, {"idText": "Tolong jelaskan arti kata ini", "enCorrect": ["Please", "explain", "the", "meaning", "of", "this", "word"], "jumbled": ["Please", "explain", "the", "meaning", "of", "this", "word", "is", "are", "have"], "hint": "Materi: Imperative. Pola: Please + V1.", "poin": 20}, {"idText": "Jangan menyerah ketika latihan sulit", "enCorrect": ["Do", "not", "give", "up", "when", "practice", "is", "difficult"], "jumbled": ["Do", "not", "give", "up", "when", "practice", "is", "difficult", "is", "are", "have"], "hint": "Materi: Imperative Negative. Pola: Do not + V1.", "poin": 20}, {"idText": "Meskipun soal itu sulit saya tetap mencoba", "enCorrect": ["Although", "the", "question", "is", "difficult", "I", "keep", "trying"], "jumbled": ["Although", "the", "question", "is", "difficult", "I", "keep", "trying", "is", "are", "have"], "hint": "Materi: Connector. Pola: Although + clause.", "poin": 20}, {"idText": "Saya belajar dengan giat agar dapat lulus ujian", "enCorrect": ["I", "study", "hard", "so", "that", "I", "can", "pass", "the", "test"], "jumbled": ["I", "study", "hard", "so", "that", "I", "can", "pass", "the", "test", "is", "are", "have"], "hint": "Materi: Connector. Pola: So that + clause.", "poin": 20}, {"idText": "Dia belajar bahasa Inggris untuk meningkatkan kemampuannya", "enCorrect": ["She", "studies", "English", "to", "improve", "her", "ability"], "jumbled": ["She", "studies", "English", "to", "improve", "her", "ability", "is", "are", "have"], "hint": "Materi: Infinitive Purpose. Pola: To + V1.", "poin": 20}, {"idText": "Membaca setiap hari membantu saya memahami kosakata", "enCorrect": ["Reading", "every", "day", "helps", "me", "understand", "vocabulary"], "jumbled": ["Reading", "every", "day", "helps", "me", "understand", "vocabulary", "is", "are", "have"], "hint": "Materi: Gerund Subject. Pola: Gerund + verb.", "poin": 20}, {"idText": "Saya tertarik belajar bahasa Inggris", "enCorrect": ["I", "am", "interested", "in", "learning", "English"], "jumbled": ["I", "am", "interested", "in", "learning", "English", "is", "are", "have"], "hint": "Materi: Gerund After Preposition. Pola: Preposition + V-ing.", "poin": 20}, {"idText": "Dia pandai berbicara di depan kelas", "enCorrect": ["She", "is", "good", "at", "speaking", "in", "front", "of", "the", "class"], "jumbled": ["She", "is", "good", "at", "speaking", "in", "front", "of", "the", "class", "is", "are", "have"], "hint": "Materi: Gerund After Preposition. Pola: Good at + V-ing.", "poin": 20}, {"idText": "Ada banyak buku di atas meja", "enCorrect": ["There", "are", "many", "books", "on", "the", "table"], "jumbled": ["There", "are", "many", "books", "on", "the", "table", "is", "are", "have"], "hint": "Materi: There are. Pola: There are + plural noun.", "poin": 20}, {"idText": "Ada seorang siswa di kelas", "enCorrect": ["There", "is", "a", "student", "in", "the", "classroom"], "jumbled": ["There", "is", "a", "student", "in", "the", "classroom", "is", "are", "have"], "hint": "Materi: There is. Pola: There is + singular noun.", "poin": 20}, {"idText": "Saya dulu sering bermain di taman", "enCorrect": ["I", "used", "to", "play", "in", "the", "park"], "jumbled": ["I", "used", "to", "play", "in", "the", "park", "is", "are", "have"], "hint": "Materi: Used To. Pola: Subject + used to + V1.", "poin": 20}, {"idText": "Saya terbiasa belajar pada malam hari", "enCorrect": ["I", "am", "used", "to", "studying", "at", "night"], "jumbled": ["I", "am", "used", "to", "studying", "at", "night", "is", "are", "have"], "hint": "Materi: Be Used To. Pola: Subject + be used to + V-ing.", "poin": 20}, {"idText": "Dia terlalu lelah untuk belajar", "enCorrect": ["She", "is", "too", "tired", "to", "study"], "jumbled": ["She", "is", "too", "tired", "to", "study", "is", "are", "have"], "hint": "Materi: Too To. Pola: Too + adjective + to V1.", "poin": 20}, {"idText": "Dia cukup pintar untuk menjawab pertanyaan itu", "enCorrect": ["She", "is", "smart", "enough", "to", "answer", "the", "question"], "jumbled": ["She", "is", "smart", "enough", "to", "answer", "the", "question", "is", "are", "have"], "hint": "Materi: Enough To. Pola: Adjective + enough + to V1.", "poin": 20}, {"idText": "Kalimat ini tidak sejelas kalimat itu", "enCorrect": ["This", "sentence", "is", "not", "as", "clear", "as", "that", "sentence"], "jumbled": ["This", "sentence", "is", "not", "as", "clear", "as", "that", "sentence", "is", "are", "have"], "hint": "Materi: Comparison. Pola: Not as + adjective + as.", "poin": 20}, {"idText": "Semakin banyak saya berlatih semakin baik saya berbicara", "enCorrect": ["The", "more", "I", "practice", "the", "better", "I", "speak"], "jumbled": ["The", "more", "I", "practice", "the", "better", "I", "speak", "is", "are", "have"], "hint": "Materi: Double Comparative. Pola: The more + clause.", "poin": 20}];
  const extraTensePractice = [{"tense": "Simple Present", "idText": "Saya bermain sepak bola setiap Minggu", "enCorrect": ["I", "play", "football", "every", "Sunday"], "jumbled": ["I", "play", "football", "every", "Sunday", "is", "are", "have"], "hint": "Gunakan pola Subject + V1 + Object + Time.", "pattern": "Subject + V1 + Object + Time", "explanation": "Latihan Simple Present. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Present", "idText": "Dia belajar bahasa Inggris setiap malam", "enCorrect": ["She", "studies", "English", "every", "night"], "jumbled": ["She", "studies", "English", "every", "night", "is", "are", "have"], "hint": "Gunakan pola Subject + V-s/es + Object + Time.", "pattern": "Subject + V-s/es + Object + Time", "explanation": "Latihan Simple Present. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Present", "idText": "Mereka biasanya sarapan bersama", "enCorrect": ["They", "usually", "eat", "breakfast", "together"], "jumbled": ["They", "usually", "eat", "breakfast", "together", "is", "are", "have"], "hint": "Gunakan pola Subject + adverb + V1 + Object.", "pattern": "Subject + adverb + V1 + Object", "explanation": "Latihan Simple Present. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Present Negative", "idText": "Kami tidak menonton televisi pada pagi hari", "enCorrect": ["We", "do", "not", "watch", "television", "in", "the", "morning"], "jumbled": ["We", "do", "not", "watch", "television", "in", "the", "morning", "is", "are", "have"], "hint": "Gunakan pola Subject + do not + V1.", "pattern": "Subject + do not + V1", "explanation": "Latihan Simple Present Negative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Present Question", "idText": "Apakah dia pergi ke sekolah dengan bus", "enCorrect": ["Does", "she", "go", "to", "school", "by", "bus"], "jumbled": ["Does", "she", "go", "to", "school", "by", "bus", "is", "are", "have"], "hint": "Gunakan pola Does + subject + V1.", "pattern": "Does + subject + V1", "explanation": "Latihan Simple Present Question. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Continuous", "idText": "Saya sedang membaca buku sekarang", "enCorrect": ["I", "am", "reading", "a", "book", "now"], "jumbled": ["I", "am", "reading", "a", "book", "now", "is", "are", "have"], "hint": "Gunakan pola Subject + am/is/are + V-ing.", "pattern": "Subject + am/is/are + V-ing", "explanation": "Latihan Present Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Continuous", "idText": "Mereka sedang bermain di taman", "enCorrect": ["They", "are", "playing", "in", "the", "park"], "jumbled": ["They", "are", "playing", "in", "the", "park", "is", "are", "have"], "hint": "Gunakan pola Subject + are + V-ing.", "pattern": "Subject + are + V-ing", "explanation": "Latihan Present Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Continuous", "idText": "Ibu saya sedang memasak makan malam", "enCorrect": ["My", "mother", "is", "cooking", "dinner"], "jumbled": ["My", "mother", "is", "cooking", "dinner", "is", "are", "have"], "hint": "Gunakan pola Subject + is + V-ing.", "pattern": "Subject + is + V-ing", "explanation": "Latihan Present Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Continuous Negative", "idText": "Dia tidak sedang tidur", "enCorrect": ["He", "is", "not", "sleeping"], "jumbled": ["He", "is", "not", "sleeping", "is", "are", "have"], "hint": "Gunakan pola Subject + is not + V-ing.", "pattern": "Subject + is not + V-ing", "explanation": "Latihan Present Continuous Negative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Continuous Question", "idText": "Apakah kamu sedang mendengarkan saya", "enCorrect": ["Are", "you", "listening", "to", "me"], "jumbled": ["Are", "you", "listening", "to", "me", "is", "are", "have"], "hint": "Gunakan pola Are + subject + V-ing.", "pattern": "Are + subject + V-ing", "explanation": "Latihan Present Continuous Question. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Perfect", "idText": "Saya telah menyelesaikan tugas saya", "enCorrect": ["I", "have", "finished", "my", "homework"], "jumbled": ["I", "have", "finished", "my", "homework", "is", "are", "have"], "hint": "Gunakan pola Subject + have/has + V3.", "pattern": "Subject + have/has + V3", "explanation": "Latihan Present Perfect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Perfect", "idText": "Dia sudah membeli kamus baru", "enCorrect": ["She", "has", "bought", "a", "new", "dictionary"], "jumbled": ["She", "has", "bought", "a", "new", "dictionary", "is", "are", "have"], "hint": "Gunakan pola Subject + has + V3 + Object.", "pattern": "Subject + has + V3 + Object", "explanation": "Latihan Present Perfect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Perfect Negative", "idText": "Kami belum melihat film itu", "enCorrect": ["We", "have", "not", "seen", "that", "movie"], "jumbled": ["We", "have", "not", "seen", "that", "movie", "is", "are", "have"], "hint": "Gunakan pola Subject + have not + V3.", "pattern": "Subject + have not + V3", "explanation": "Latihan Present Perfect Negative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Perfect Question", "idText": "Apakah mereka pernah mengunjungi Bali", "enCorrect": ["Have", "they", "ever", "visited", "Bali"], "jumbled": ["Have", "they", "ever", "visited", "Bali", "is", "are", "have"], "hint": "Gunakan pola Have + subject + ever + V3.", "pattern": "Have + subject + ever + V3", "explanation": "Latihan Present Perfect Question. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Perfect Continuous", "idText": "Dia telah belajar selama tiga jam", "enCorrect": ["She", "has", "been", "studying", "for", "three", "hours"], "jumbled": ["She", "has", "been", "studying", "for", "three", "hours", "is", "are", "have"], "hint": "Gunakan pola Subject + has been + V-ing.", "pattern": "Subject + has been + V-ing", "explanation": "Latihan Present Perfect Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Present Perfect Continuous", "idText": "Mereka telah menunggu sejak pagi", "enCorrect": ["They", "have", "been", "waiting", "since", "morning"], "jumbled": ["They", "have", "been", "waiting", "since", "morning", "is", "are", "have"], "hint": "Gunakan pola Subject + have been + V-ing.", "pattern": "Subject + have been + V-ing", "explanation": "Latihan Present Perfect Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Past", "idText": "Saya pergi ke sekolah kemarin", "enCorrect": ["I", "went", "to", "school", "yesterday"], "jumbled": ["I", "went", "to", "school", "yesterday", "is", "are", "have"], "hint": "Gunakan pola Subject + V2 + Time.", "pattern": "Subject + V2 + Time", "explanation": "Latihan Simple Past. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Past", "idText": "Kami mengunjungi museum minggu lalu", "enCorrect": ["We", "visited", "the", "museum", "last", "week"], "jumbled": ["We", "visited", "the", "museum", "last", "week", "is", "are", "have"], "hint": "Gunakan pola Subject + V2 + Object + Time.", "pattern": "Subject + V2 + Object + Time", "explanation": "Latihan Simple Past. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Past Negative", "idText": "Dia tidak datang ke kelas kemarin", "enCorrect": ["He", "did", "not", "come", "to", "class", "yesterday"], "jumbled": ["He", "did", "not", "come", "to", "class", "yesterday", "is", "are", "have"], "hint": "Gunakan pola Subject + did not + V1.", "pattern": "Subject + did not + V1", "explanation": "Latihan Simple Past Negative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Past Question", "idText": "Apakah kamu membaca buku itu tadi malam", "enCorrect": ["Did", "you", "read", "that", "book", "last", "night"], "jumbled": ["Did", "you", "read", "that", "book", "last", "night", "is", "are", "have"], "hint": "Gunakan pola Did + subject + V1.", "pattern": "Did + subject + V1", "explanation": "Latihan Simple Past Question. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Past Continuous", "idText": "Saya sedang belajar ketika dia menelepon", "enCorrect": ["I", "was", "studying", "when", "he", "called"], "jumbled": ["I", "was", "studying", "when", "he", "called", "is", "are", "have"], "hint": "Gunakan pola Subject + was/were + V-ing + when.", "pattern": "Subject + was/were + V-ing + when", "explanation": "Latihan Past Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Past Continuous", "idText": "Mereka sedang menonton film pada pukul delapan", "enCorrect": ["They", "were", "watching", "a", "movie", "at", "eight"], "jumbled": ["They", "were", "watching", "a", "movie", "at", "eight", "is", "are", "have"], "hint": "Gunakan pola Subject + were + V-ing.", "pattern": "Subject + were + V-ing", "explanation": "Latihan Past Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Past Perfect", "idText": "Dia sudah pergi sebelum saya tiba", "enCorrect": ["He", "had", "left", "before", "I", "arrived"], "jumbled": ["He", "had", "left", "before", "I", "arrived", "is", "are", "have"], "hint": "Gunakan pola Subject + had + V3.", "pattern": "Subject + had + V3", "explanation": "Latihan Past Perfect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Past Perfect", "idText": "Kami telah menyelesaikan pekerjaan itu sebelum guru datang", "enCorrect": ["We", "had", "finished", "the", "work", "before", "the", "teacher", "came"], "jumbled": ["We", "had", "finished", "the", "work", "before", "the", "teacher", "came", "is", "are", "have"], "hint": "Gunakan pola Subject + had + V3.", "pattern": "Subject + had + V3", "explanation": "Latihan Past Perfect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Past Perfect Continuous", "idText": "Mereka telah bekerja selama dua jam sebelum hujan mulai", "enCorrect": ["They", "had", "been", "working", "for", "two", "hours", "before", "it", "started", "raining"], "jumbled": ["They", "had", "been", "working", "for", "two", "hours", "before", "it", "started", "raining", "is", "are", "have"], "hint": "Gunakan pola Subject + had been + V-ing.", "pattern": "Subject + had been + V-ing", "explanation": "Latihan Past Perfect Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Future", "idText": "Saya akan belajar bahasa Inggris besok", "enCorrect": ["I", "will", "study", "English", "tomorrow"], "jumbled": ["I", "will", "study", "English", "tomorrow", "is", "are", "have"], "hint": "Gunakan pola Subject + will + V1.", "pattern": "Subject + will + V1", "explanation": "Latihan Simple Future. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Future", "idText": "Dia akan membeli laptop baru minggu depan", "enCorrect": ["She", "will", "buy", "a", "new", "laptop", "next", "week"], "jumbled": ["She", "will", "buy", "a", "new", "laptop", "next", "week", "is", "are", "have"], "hint": "Gunakan pola Subject + will + V1.", "pattern": "Subject + will + V1", "explanation": "Latihan Simple Future. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Future Negative", "idText": "Kami tidak akan menyerah", "enCorrect": ["We", "will", "not", "give", "up"], "jumbled": ["We", "will", "not", "give", "up", "is", "are", "have"], "hint": "Gunakan pola Subject + will not + V1.", "pattern": "Subject + will not + V1", "explanation": "Latihan Simple Future Negative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Future Question", "idText": "Apakah mereka akan datang malam ini", "enCorrect": ["Will", "they", "come", "tonight"], "jumbled": ["Will", "they", "come", "tonight", "is", "are", "have"], "hint": "Gunakan pola Will + subject + V1.", "pattern": "Will + subject + V1", "explanation": "Latihan Simple Future Question. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Future Continuous", "idText": "Saya akan sedang belajar pada jam delapan malam", "enCorrect": ["I", "will", "be", "studying", "at", "eight", "tonight"], "jumbled": ["I", "will", "be", "studying", "at", "eight", "tonight", "is", "are", "have"], "hint": "Gunakan pola Subject + will be + V-ing.", "pattern": "Subject + will be + V-ing", "explanation": "Latihan Future Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Future Continuous", "idText": "Mereka akan sedang bepergian besok pagi", "enCorrect": ["They", "will", "be", "traveling", "tomorrow", "morning"], "jumbled": ["They", "will", "be", "traveling", "tomorrow", "morning", "is", "are", "have"], "hint": "Gunakan pola Subject + will be + V-ing.", "pattern": "Subject + will be + V-ing", "explanation": "Latihan Future Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Future Perfect", "idText": "Saya akan sudah menyelesaikan laporan ini besok", "enCorrect": ["I", "will", "have", "finished", "this", "report", "by", "tomorrow"], "jumbled": ["I", "will", "have", "finished", "this", "report", "by", "tomorrow", "is", "are", "have"], "hint": "Gunakan pola Subject + will have + V3.", "pattern": "Subject + will have + V3", "explanation": "Latihan Future Perfect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Future Perfect", "idText": "Dia akan sudah tiba sebelum rapat dimulai", "enCorrect": ["She", "will", "have", "arrived", "before", "the", "meeting", "starts"], "jumbled": ["She", "will", "have", "arrived", "before", "the", "meeting", "starts", "is", "are", "have"], "hint": "Gunakan pola Subject + will have + V3.", "pattern": "Subject + will have + V3", "explanation": "Latihan Future Perfect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Future Perfect Continuous", "idText": "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun", "enCorrect": ["By", "next", "year", "I", "will", "have", "been", "studying", "English", "for", "four", "years"], "jumbled": ["By", "next", "year", "I", "will", "have", "been", "studying", "English", "for", "four", "years", "is", "are", "have"], "hint": "Gunakan pola By + time + subject + will have been + V-ing.", "pattern": "By + time + subject + will have been + V-ing", "explanation": "Latihan Future Perfect Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Past Future", "idText": "Dia mengatakan bahwa dia akan belajar lebih giat", "enCorrect": ["She", "said", "that", "she", "would", "study", "harder"], "jumbled": ["She", "said", "that", "she", "would", "study", "harder", "is", "are", "have"], "hint": "Gunakan pola Subject + said + would + V1.", "pattern": "Subject + said + would + V1", "explanation": "Latihan Simple Past Future. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Simple Past Future", "idText": "Saya pikir mereka akan datang tepat waktu", "enCorrect": ["I", "thought", "they", "would", "arrive", "on", "time"], "jumbled": ["I", "thought", "they", "would", "arrive", "on", "time", "is", "are", "have"], "hint": "Gunakan pola Subject + thought + would + V1.", "pattern": "Subject + thought + would + V1", "explanation": "Latihan Simple Past Future. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Past Future Continuous", "idText": "Dia mengatakan bahwa dia akan sedang bekerja pada pukul delapan", "enCorrect": ["He", "said", "that", "he", "would", "be", "working", "at", "eight"], "jumbled": ["He", "said", "that", "he", "would", "be", "working", "at", "eight", "is", "are", "have"], "hint": "Gunakan pola Subject + said + would be + V-ing.", "pattern": "Subject + said + would be + V-ing", "explanation": "Latihan Past Future Continuous. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Past Future Perfect", "idText": "Saya pikir dia akan sudah menyelesaikan tugas itu", "enCorrect": ["I", "thought", "she", "would", "have", "finished", "the", "task"], "jumbled": ["I", "thought", "she", "would", "have", "finished", "the", "task", "is", "are", "have"], "hint": "Gunakan pola Subject + thought + would have + V3.", "pattern": "Subject + thought + would have + V3", "explanation": "Latihan Past Future Perfect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Passive Voice", "idText": "Buku itu ditulis oleh seorang guru", "enCorrect": ["The", "book", "was", "written", "by", "a", "teacher"], "jumbled": ["The", "book", "was", "written", "by", "a", "teacher", "is", "are", "have"], "hint": "Gunakan pola Subject + be + V3 + by agent.", "pattern": "Subject + be + V3 + by agent", "explanation": "Latihan Passive Voice. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Passive Voice", "idText": "Pintu itu sedang diperbaiki", "enCorrect": ["The", "door", "is", "being", "repaired"], "jumbled": ["The", "door", "is", "being", "repaired", "is", "are", "have"], "hint": "Gunakan pola Subject + is being + V3.", "pattern": "Subject + is being + V3", "explanation": "Latihan Passive Voice. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Passive Voice", "idText": "Tugas itu telah dikumpulkan", "enCorrect": ["The", "assignment", "has", "been", "submitted"], "jumbled": ["The", "assignment", "has", "been", "submitted", "is", "are", "have"], "hint": "Gunakan pola Subject + has been + V3.", "pattern": "Subject + has been + V3", "explanation": "Latihan Passive Voice. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Question Tag", "idText": "Dia pintar bukan", "enCorrect": ["She", "is", "smart", "is", "she", "not"], "jumbled": ["She", "is", "smart", "is", "she", "not", "is", "are", "have"], "hint": "Gunakan pola Statement + tag.", "pattern": "Statement + tag", "explanation": "Latihan Question Tag. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Question Tag", "idText": "Kamu suka bahasa Inggris bukan", "enCorrect": ["You", "like", "English", "do", "you", "not"], "jumbled": ["You", "like", "English", "do", "you", "not", "is", "are", "have"], "hint": "Gunakan pola Statement + auxiliary + subject.", "pattern": "Statement + auxiliary + subject", "explanation": "Latihan Question Tag. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Degree Comparison", "idText": "Buku ini lebih menarik daripada buku itu", "enCorrect": ["This", "book", "is", "more", "interesting", "than", "that", "book"], "jumbled": ["This", "book", "is", "more", "interesting", "than", "that", "book", "is", "are", "have"], "hint": "Gunakan pola Comparative + than.", "pattern": "Comparative + than", "explanation": "Latihan Degree Comparison. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Degree Comparison", "idText": "Dia adalah siswa paling rajin di kelas", "enCorrect": ["She", "is", "the", "most", "diligent", "student", "in", "the", "class"], "jumbled": ["She", "is", "the", "most", "diligent", "student", "in", "the", "class", "is", "are", "have"], "hint": "Gunakan pola Superlative.", "pattern": "Superlative", "explanation": "Latihan Degree Comparison. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Direct Indirect", "idText": "Dia berkata bahwa dia sedang belajar", "enCorrect": ["He", "said", "that", "he", "was", "studying"], "jumbled": ["He", "said", "that", "he", "was", "studying", "is", "are", "have"], "hint": "Gunakan pola Said that + past continuous.", "pattern": "Said that + past continuous", "explanation": "Latihan Direct Indirect. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Preferences", "idText": "Saya lebih suka teh daripada kopi", "enCorrect": ["I", "prefer", "tea", "to", "coffee"], "jumbled": ["I", "prefer", "tea", "to", "coffee", "is", "are", "have"], "hint": "Gunakan pola Prefer + noun + to + noun.", "pattern": "Prefer + noun + to + noun", "explanation": "Latihan Preferences. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Exclamatory", "idText": "Betapa indahnya hari ini", "enCorrect": ["What", "a", "beautiful", "day", "it", "is"], "jumbled": ["What", "a", "beautiful", "day", "it", "is", "is", "are", "have"], "hint": "Gunakan pola What + noun phrase.", "pattern": "What + noun phrase", "explanation": "Latihan Exclamatory. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Conditional Type 1", "idText": "Jika saya belajar saya akan lulus", "enCorrect": ["If", "I", "study", "I", "will", "pass"], "jumbled": ["If", "I", "study", "I", "will", "pass", "is", "are", "have"], "hint": "Gunakan pola If + simple present + will.", "pattern": "If + simple present + will", "explanation": "Latihan Conditional Type 1. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Conditional Type 2", "idText": "Jika saya punya waktu saya akan belajar", "enCorrect": ["If", "I", "had", "time", "I", "would", "study"], "jumbled": ["If", "I", "had", "time", "I", "would", "study", "is", "are", "have"], "hint": "Gunakan pola If + simple past + would.", "pattern": "If + simple past + would", "explanation": "Latihan Conditional Type 2. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Conditional Type 3", "idText": "Jika saya telah belajar saya akan lulus", "enCorrect": ["If", "I", "had", "studied", "I", "would", "have", "passed"], "jumbled": ["If", "I", "had", "studied", "I", "would", "have", "passed", "is", "are", "have"], "hint": "Gunakan pola If + past perfect + would have V3.", "pattern": "If + past perfect + would have V3", "explanation": "Latihan Conditional Type 3. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Each and Every", "idText": "Setiap siswa harus membawa buku", "enCorrect": ["Each", "student", "must", "bring", "a", "book"], "jumbled": ["Each", "student", "must", "bring", "a", "book", "is", "are", "have"], "hint": "Gunakan pola Each + singular noun.", "pattern": "Each + singular noun", "explanation": "Latihan Each and Every. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Each and Every", "idText": "Semua orang membutuhkan latihan", "enCorrect": ["Everyone", "needs", "practice"], "jumbled": ["Everyone", "needs", "practice", "is", "are", "have"], "hint": "Gunakan pola Everyone + singular verb.", "pattern": "Everyone + singular verb", "explanation": "Latihan Each and Every. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Relative Pronoun", "idText": "Ini adalah buku yang saya beli kemarin", "enCorrect": ["This", "is", "the", "book", "that", "I", "bought", "yesterday"], "jumbled": ["This", "is", "the", "book", "that", "I", "bought", "yesterday", "is", "are", "have"], "hint": "Gunakan pola Noun + that + clause.", "pattern": "Noun + that + clause", "explanation": "Latihan Relative Pronoun. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Relative Pronoun", "idText": "Siswa yang duduk di depan adalah teman saya", "enCorrect": ["The", "student", "who", "sits", "in", "front", "is", "my", "friend"], "jumbled": ["The", "student", "who", "sits", "in", "front", "is", "my", "friend", "is", "are", "have"], "hint": "Gunakan pola Person + who + verb.", "pattern": "Person + who + verb", "explanation": "Latihan Relative Pronoun. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Because", "idText": "Saya terlambat karena hujan", "enCorrect": ["I", "was", "late", "because", "it", "rained"], "jumbled": ["I", "was", "late", "because", "it", "rained", "is", "are", "have"], "hint": "Gunakan pola Because + clause.", "pattern": "Because + clause", "explanation": "Latihan Because. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Because Of", "idText": "Saya terlambat karena hujan deras", "enCorrect": ["I", "was", "late", "because", "of", "the", "heavy", "rain"], "jumbled": ["I", "was", "late", "because", "of", "the", "heavy", "rain", "is", "are", "have"], "hint": "Gunakan pola Because of + noun phrase.", "pattern": "Because of + noun phrase", "explanation": "Latihan Because Of. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Another Other Others", "idText": "Saya membutuhkan buku lain", "enCorrect": ["I", "need", "another", "book"], "jumbled": ["I", "need", "another", "book", "is", "are", "have"], "hint": "Gunakan pola Another + singular noun.", "pattern": "Another + singular noun", "explanation": "Latihan Another Other Others. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Another Other Others", "idText": "Beberapa siswa belajar dan yang lainnya bermain", "enCorrect": ["Some", "students", "study", "and", "others", "play"], "jumbled": ["Some", "students", "study", "and", "others", "play", "is", "are", "have"], "hint": "Gunakan pola Others as pronoun.", "pattern": "Others as pronoun", "explanation": "Latihan Another Other Others. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Vocabulary Practice", "idText": "Saya sedang mencari informasi penting", "enCorrect": ["I", "am", "looking", "for", "important", "information"], "jumbled": ["I", "am", "looking", "for", "important", "information", "is", "are", "have"], "hint": "Gunakan pola Verb phrase + noun.", "pattern": "Verb phrase + noun", "explanation": "Latihan Vocabulary Practice. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Grammar Practice", "idText": "Guru menjelaskan pelajaran dengan jelas", "enCorrect": ["The", "teacher", "explains", "the", "lesson", "clearly"], "jumbled": ["The", "teacher", "explains", "the", "lesson", "clearly", "is", "are", "have"], "hint": "Gunakan pola Subject + verb + object + adverb.", "pattern": "Subject + verb + object + adverb", "explanation": "Latihan Grammar Practice. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Grammar Practice", "idText": "Para siswa mendengarkan guru dengan hati-hati", "enCorrect": ["The", "students", "listen", "to", "the", "teacher", "carefully"], "jumbled": ["The", "students", "listen", "to", "the", "teacher", "carefully", "is", "are", "have"], "hint": "Gunakan pola Subject + verb + object + adverb.", "pattern": "Subject + verb + object + adverb", "explanation": "Latihan Grammar Practice. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Modal", "idText": "Dia harus menyelesaikan pekerjaan rumah sebelum makan malam", "enCorrect": ["She", "must", "finish", "her", "homework", "before", "dinner"], "jumbled": ["She", "must", "finish", "her", "homework", "before", "dinner", "is", "are", "have"], "hint": "Gunakan pola Subject + modal + V1.", "pattern": "Subject + modal + V1", "explanation": "Latihan Modal. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Modal", "idText": "Kita sebaiknya berlatih setiap hari", "enCorrect": ["We", "should", "practice", "every", "day"], "jumbled": ["We", "should", "practice", "every", "day", "is", "are", "have"], "hint": "Gunakan pola Subject + should + V1.", "pattern": "Subject + should + V1", "explanation": "Latihan Modal. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Modal", "idText": "Saya bisa memahami kalimat sederhana", "enCorrect": ["I", "can", "understand", "simple", "sentences"], "jumbled": ["I", "can", "understand", "simple", "sentences", "is", "are", "have"], "hint": "Gunakan pola Subject + can + V1.", "pattern": "Subject + can + V1", "explanation": "Latihan Modal. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Modal", "idText": "Mereka mungkin datang terlambat", "enCorrect": ["They", "may", "arrive", "late"], "jumbled": ["They", "may", "arrive", "late", "is", "are", "have"], "hint": "Gunakan pola Subject + may + V1.", "pattern": "Subject + may + V1", "explanation": "Latihan Modal. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Modal Negative", "idText": "Dia tidak boleh menggunakan kamus selama ujian", "enCorrect": ["He", "must", "not", "use", "a", "dictionary", "during", "the", "test"], "jumbled": ["He", "must", "not", "use", "a", "dictionary", "during", "the", "test", "is", "are", "have"], "hint": "Gunakan pola Subject + must not + V1.", "pattern": "Subject + must not + V1", "explanation": "Latihan Modal Negative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Imperative", "idText": "Tolong jelaskan arti kata ini", "enCorrect": ["Please", "explain", "the", "meaning", "of", "this", "word"], "jumbled": ["Please", "explain", "the", "meaning", "of", "this", "word", "is", "are", "have"], "hint": "Gunakan pola Please + V1.", "pattern": "Please + V1", "explanation": "Latihan Imperative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Imperative Negative", "idText": "Jangan menyerah ketika latihan sulit", "enCorrect": ["Do", "not", "give", "up", "when", "practice", "is", "difficult"], "jumbled": ["Do", "not", "give", "up", "when", "practice", "is", "difficult", "is", "are", "have"], "hint": "Gunakan pola Do not + V1.", "pattern": "Do not + V1", "explanation": "Latihan Imperative Negative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Connector", "idText": "Meskipun soal itu sulit saya tetap mencoba", "enCorrect": ["Although", "the", "question", "is", "difficult", "I", "keep", "trying"], "jumbled": ["Although", "the", "question", "is", "difficult", "I", "keep", "trying", "is", "are", "have"], "hint": "Gunakan pola Although + clause.", "pattern": "Although + clause", "explanation": "Latihan Connector. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Connector", "idText": "Saya belajar dengan giat agar dapat lulus ujian", "enCorrect": ["I", "study", "hard", "so", "that", "I", "can", "pass", "the", "test"], "jumbled": ["I", "study", "hard", "so", "that", "I", "can", "pass", "the", "test", "is", "are", "have"], "hint": "Gunakan pola So that + clause.", "pattern": "So that + clause", "explanation": "Latihan Connector. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Infinitive Purpose", "idText": "Dia belajar bahasa Inggris untuk meningkatkan kemampuannya", "enCorrect": ["She", "studies", "English", "to", "improve", "her", "ability"], "jumbled": ["She", "studies", "English", "to", "improve", "her", "ability", "is", "are", "have"], "hint": "Gunakan pola To + V1.", "pattern": "To + V1", "explanation": "Latihan Infinitive Purpose. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Gerund Subject", "idText": "Membaca setiap hari membantu saya memahami kosakata", "enCorrect": ["Reading", "every", "day", "helps", "me", "understand", "vocabulary"], "jumbled": ["Reading", "every", "day", "helps", "me", "understand", "vocabulary", "is", "are", "have"], "hint": "Gunakan pola Gerund + verb.", "pattern": "Gerund + verb", "explanation": "Latihan Gerund Subject. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Gerund After Preposition", "idText": "Saya tertarik belajar bahasa Inggris", "enCorrect": ["I", "am", "interested", "in", "learning", "English"], "jumbled": ["I", "am", "interested", "in", "learning", "English", "is", "are", "have"], "hint": "Gunakan pola Preposition + V-ing.", "pattern": "Preposition + V-ing", "explanation": "Latihan Gerund After Preposition. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Gerund After Preposition", "idText": "Dia pandai berbicara di depan kelas", "enCorrect": ["She", "is", "good", "at", "speaking", "in", "front", "of", "the", "class"], "jumbled": ["She", "is", "good", "at", "speaking", "in", "front", "of", "the", "class", "is", "are", "have"], "hint": "Gunakan pola Good at + V-ing.", "pattern": "Good at + V-ing", "explanation": "Latihan Gerund After Preposition. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "There are", "idText": "Ada banyak buku di atas meja", "enCorrect": ["There", "are", "many", "books", "on", "the", "table"], "jumbled": ["There", "are", "many", "books", "on", "the", "table", "is", "are", "have"], "hint": "Gunakan pola There are + plural noun.", "pattern": "There are + plural noun", "explanation": "Latihan There are. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "There is", "idText": "Ada seorang siswa di kelas", "enCorrect": ["There", "is", "a", "student", "in", "the", "classroom"], "jumbled": ["There", "is", "a", "student", "in", "the", "classroom", "is", "are", "have"], "hint": "Gunakan pola There is + singular noun.", "pattern": "There is + singular noun", "explanation": "Latihan There is. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Used To", "idText": "Saya dulu sering bermain di taman", "enCorrect": ["I", "used", "to", "play", "in", "the", "park"], "jumbled": ["I", "used", "to", "play", "in", "the", "park", "is", "are", "have"], "hint": "Gunakan pola Subject + used to + V1.", "pattern": "Subject + used to + V1", "explanation": "Latihan Used To. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Be Used To", "idText": "Saya terbiasa belajar pada malam hari", "enCorrect": ["I", "am", "used", "to", "studying", "at", "night"], "jumbled": ["I", "am", "used", "to", "studying", "at", "night", "is", "are", "have"], "hint": "Gunakan pola Subject + be used to + V-ing.", "pattern": "Subject + be used to + V-ing", "explanation": "Latihan Be Used To. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Too To", "idText": "Dia terlalu lelah untuk belajar", "enCorrect": ["She", "is", "too", "tired", "to", "study"], "jumbled": ["She", "is", "too", "tired", "to", "study", "is", "are", "have"], "hint": "Gunakan pola Too + adjective + to V1.", "pattern": "Too + adjective + to V1", "explanation": "Latihan Too To. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Enough To", "idText": "Dia cukup pintar untuk menjawab pertanyaan itu", "enCorrect": ["She", "is", "smart", "enough", "to", "answer", "the", "question"], "jumbled": ["She", "is", "smart", "enough", "to", "answer", "the", "question", "is", "are", "have"], "hint": "Gunakan pola Adjective + enough + to V1.", "pattern": "Adjective + enough + to V1", "explanation": "Latihan Enough To. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Comparison", "idText": "Kalimat ini tidak sejelas kalimat itu", "enCorrect": ["This", "sentence", "is", "not", "as", "clear", "as", "that", "sentence"], "jumbled": ["This", "sentence", "is", "not", "as", "clear", "as", "that", "sentence", "is", "are", "have"], "hint": "Gunakan pola Not as + adjective + as.", "pattern": "Not as + adjective + as", "explanation": "Latihan Comparison. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}, {"tense": "Double Comparative", "idText": "Semakin banyak saya berlatih semakin baik saya berbicara", "enCorrect": ["The", "more", "I", "practice", "the", "better", "I", "speak"], "jumbled": ["The", "more", "I", "practice", "the", "better", "I", "speak", "is", "are", "have"], "hint": "Gunakan pola The more + clause.", "pattern": "The more + clause", "explanation": "Latihan Double Comparative. Perhatikan subject, auxiliary, verb, object, dan keterangan.", "poin": 25}];
  const extraListening = [{"audioText": "I play football every Sunday", "options": ["Saya bermain sepak bola setiap Minggu", "Ibu saya sedang memasak makan malam", "Kami mengunjungi museum minggu lalu", "Saya akan sedang belajar pada jam delapan malam"], "answer": 0, "poin": 20}, {"audioText": "She studies English every night", "options": ["Dia belajar bahasa Inggris setiap malam", "Dia tidak sedang tidur", "Dia tidak datang ke kelas kemarin", "Mereka akan sedang bepergian besok pagi"], "answer": 0, "poin": 15}, {"audioText": "They usually eat breakfast together", "options": ["Mereka biasanya sarapan bersama", "Apakah kamu sedang mendengarkan saya", "Apakah kamu membaca buku itu tadi malam", "Saya akan sudah menyelesaikan laporan ini besok"], "answer": 0, "poin": 15}, {"audioText": "We do not watch television in the morning", "options": ["Kami tidak menonton televisi pada pagi hari", "Saya telah menyelesaikan tugas saya", "Saya sedang belajar ketika dia menelepon", "Dia akan sudah tiba sebelum rapat dimulai"], "answer": 0, "poin": 20}, {"audioText": "Does she go to school by bus", "options": ["Apakah dia pergi ke sekolah dengan bus", "Dia sudah membeli kamus baru", "Mereka sedang menonton film pada pukul delapan", "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun"], "answer": 0, "poin": 15}, {"audioText": "I am reading a book now", "options": ["Saya sedang membaca buku sekarang", "Kami belum melihat film itu", "Dia sudah pergi sebelum saya tiba", "Dia mengatakan bahwa dia akan belajar lebih giat"], "answer": 0, "poin": 15}, {"audioText": "They are playing in the park", "options": ["Mereka sedang bermain di taman", "Apakah mereka pernah mengunjungi Bali", "Kami telah menyelesaikan pekerjaan itu sebelum guru datang", "Saya pikir mereka akan datang tepat waktu"], "answer": 0, "poin": 20}, {"audioText": "My mother is cooking dinner", "options": ["Ibu saya sedang memasak makan malam", "Dia telah belajar selama tiga jam", "Mereka telah bekerja selama dua jam sebelum hujan mulai", "Dia mengatakan bahwa dia akan sedang bekerja pada pukul delapan"], "answer": 0, "poin": 15}, {"audioText": "He is not sleeping", "options": ["Dia tidak sedang tidur", "Mereka telah menunggu sejak pagi", "Saya akan belajar bahasa Inggris besok", "Saya pikir dia akan sudah menyelesaikan tugas itu"], "answer": 0, "poin": 15}, {"audioText": "Are you listening to me", "options": ["Apakah kamu sedang mendengarkan saya", "Saya pergi ke sekolah kemarin", "Dia akan membeli laptop baru minggu depan", "Buku itu ditulis oleh seorang guru"], "answer": 0, "poin": 20}, {"audioText": "I have finished my homework", "options": ["Saya telah menyelesaikan tugas saya", "Kami mengunjungi museum minggu lalu", "Kami tidak akan menyerah", "Pintu itu sedang diperbaiki"], "answer": 0, "poin": 15}, {"audioText": "She has bought a new dictionary", "options": ["Dia sudah membeli kamus baru", "Dia tidak datang ke kelas kemarin", "Apakah mereka akan datang malam ini", "Tugas itu telah dikumpulkan"], "answer": 0, "poin": 15}, {"audioText": "We have not seen that movie", "options": ["Kami belum melihat film itu", "Apakah kamu membaca buku itu tadi malam", "Saya akan sedang belajar pada jam delapan malam", "Dia pintar bukan"], "answer": 0, "poin": 20}, {"audioText": "Have they ever visited Bali", "options": ["Apakah mereka pernah mengunjungi Bali", "Saya sedang belajar ketika dia menelepon", "Mereka akan sedang bepergian besok pagi", "Kamu suka bahasa Inggris bukan"], "answer": 0, "poin": 15}, {"audioText": "She has been studying for three hours", "options": ["Dia telah belajar selama tiga jam", "Mereka sedang menonton film pada pukul delapan", "Saya akan sudah menyelesaikan laporan ini besok", "Buku ini lebih menarik daripada buku itu"], "answer": 0, "poin": 15}, {"audioText": "They have been waiting since morning", "options": ["Mereka telah menunggu sejak pagi", "Dia sudah pergi sebelum saya tiba", "Dia akan sudah tiba sebelum rapat dimulai", "Dia adalah siswa paling rajin di kelas"], "answer": 0, "poin": 20}, {"audioText": "I went to school yesterday", "options": ["Saya pergi ke sekolah kemarin", "Kami telah menyelesaikan pekerjaan itu sebelum guru datang", "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun", "Dia berkata bahwa dia sedang belajar"], "answer": 0, "poin": 15}, {"audioText": "We visited the museum last week", "options": ["Kami mengunjungi museum minggu lalu", "Mereka telah bekerja selama dua jam sebelum hujan mulai", "Dia mengatakan bahwa dia akan belajar lebih giat", "Saya lebih suka teh daripada kopi"], "answer": 0, "poin": 15}, {"audioText": "He did not come to class yesterday", "options": ["Dia tidak datang ke kelas kemarin", "Saya akan belajar bahasa Inggris besok", "Saya pikir mereka akan datang tepat waktu", "Betapa indahnya hari ini"], "answer": 0, "poin": 20}, {"audioText": "Did you read that book last night", "options": ["Apakah kamu membaca buku itu tadi malam", "Dia akan membeli laptop baru minggu depan", "Dia mengatakan bahwa dia akan sedang bekerja pada pukul delapan", "Jika saya belajar saya akan lulus"], "answer": 0, "poin": 15}, {"audioText": "I was studying when he called", "options": ["Saya sedang belajar ketika dia menelepon", "Kami tidak akan menyerah", "Saya pikir dia akan sudah menyelesaikan tugas itu", "Jika saya punya waktu saya akan belajar"], "answer": 0, "poin": 15}, {"audioText": "They were watching a movie at eight", "options": ["Mereka sedang menonton film pada pukul delapan", "Apakah mereka akan datang malam ini", "Buku itu ditulis oleh seorang guru", "Jika saya telah belajar saya akan lulus"], "answer": 0, "poin": 20}, {"audioText": "He had left before I arrived", "options": ["Dia sudah pergi sebelum saya tiba", "Saya akan sedang belajar pada jam delapan malam", "Pintu itu sedang diperbaiki", "Setiap siswa harus membawa buku"], "answer": 0, "poin": 15}, {"audioText": "We had finished the work before the teacher came", "options": ["Kami telah menyelesaikan pekerjaan itu sebelum guru datang", "Mereka akan sedang bepergian besok pagi", "Tugas itu telah dikumpulkan", "Semua orang membutuhkan latihan"], "answer": 0, "poin": 15}, {"audioText": "They had been working for two hours before it started raining", "options": ["Mereka telah bekerja selama dua jam sebelum hujan mulai", "Saya akan sudah menyelesaikan laporan ini besok", "Dia pintar bukan", "Ini adalah buku yang saya beli kemarin"], "answer": 0, "poin": 20}, {"audioText": "I will study English tomorrow", "options": ["Saya akan belajar bahasa Inggris besok", "Dia akan sudah tiba sebelum rapat dimulai", "Kamu suka bahasa Inggris bukan", "Siswa yang duduk di depan adalah teman saya"], "answer": 0, "poin": 15}, {"audioText": "She will buy a new laptop next week", "options": ["Dia akan membeli laptop baru minggu depan", "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun", "Buku ini lebih menarik daripada buku itu", "Saya terlambat karena hujan"], "answer": 0, "poin": 15}, {"audioText": "We will not give up", "options": ["Kami tidak akan menyerah", "Dia mengatakan bahwa dia akan belajar lebih giat", "Dia adalah siswa paling rajin di kelas", "Saya terlambat karena hujan deras"], "answer": 0, "poin": 20}, {"audioText": "Will they come tonight", "options": ["Apakah mereka akan datang malam ini", "Saya pikir mereka akan datang tepat waktu", "Dia berkata bahwa dia sedang belajar", "Saya membutuhkan buku lain"], "answer": 0, "poin": 15}, {"audioText": "I will be studying at eight tonight", "options": ["Saya akan sedang belajar pada jam delapan malam", "Dia mengatakan bahwa dia akan sedang bekerja pada pukul delapan", "Saya lebih suka teh daripada kopi", "Beberapa siswa belajar dan yang lainnya bermain"], "answer": 0, "poin": 15}, {"audioText": "They will be traveling tomorrow morning", "options": ["Mereka akan sedang bepergian besok pagi", "Saya pikir dia akan sudah menyelesaikan tugas itu", "Betapa indahnya hari ini", "Saya sedang mencari informasi penting"], "answer": 0, "poin": 20}, {"audioText": "I will have finished this report by tomorrow", "options": ["Saya akan sudah menyelesaikan laporan ini besok", "Buku itu ditulis oleh seorang guru", "Jika saya belajar saya akan lulus", "Guru menjelaskan pelajaran dengan jelas"], "answer": 0, "poin": 15}, {"audioText": "She will have arrived before the meeting starts", "options": ["Dia akan sudah tiba sebelum rapat dimulai", "Pintu itu sedang diperbaiki", "Jika saya punya waktu saya akan belajar", "Para siswa mendengarkan guru dengan hati-hati"], "answer": 0, "poin": 15}, {"audioText": "By next year I will have been studying English for four years", "options": ["Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun", "Tugas itu telah dikumpulkan", "Jika saya telah belajar saya akan lulus", "Dia harus menyelesaikan pekerjaan rumah sebelum makan malam"], "answer": 0, "poin": 20}, {"audioText": "She said that she would study harder", "options": ["Dia mengatakan bahwa dia akan belajar lebih giat", "Dia pintar bukan", "Setiap siswa harus membawa buku", "Kita sebaiknya berlatih setiap hari"], "answer": 0, "poin": 15}, {"audioText": "I thought they would arrive on time", "options": ["Saya pikir mereka akan datang tepat waktu", "Kamu suka bahasa Inggris bukan", "Semua orang membutuhkan latihan", "Saya bisa memahami kalimat sederhana"], "answer": 0, "poin": 15}, {"audioText": "He said that he would be working at eight", "options": ["Dia mengatakan bahwa dia akan sedang bekerja pada pukul delapan", "Buku ini lebih menarik daripada buku itu", "Ini adalah buku yang saya beli kemarin", "Mereka mungkin datang terlambat"], "answer": 0, "poin": 20}, {"audioText": "I thought she would have finished the task", "options": ["Saya pikir dia akan sudah menyelesaikan tugas itu", "Dia adalah siswa paling rajin di kelas", "Siswa yang duduk di depan adalah teman saya", "Dia tidak boleh menggunakan kamus selama ujian"], "answer": 0, "poin": 15}, {"audioText": "The book was written by a teacher", "options": ["Buku itu ditulis oleh seorang guru", "Dia berkata bahwa dia sedang belajar", "Saya terlambat karena hujan", "Tolong jelaskan arti kata ini"], "answer": 0, "poin": 15}, {"audioText": "The door is being repaired", "options": ["Pintu itu sedang diperbaiki", "Saya lebih suka teh daripada kopi", "Saya terlambat karena hujan deras", "Jangan menyerah ketika latihan sulit"], "answer": 0, "poin": 20}, {"audioText": "The assignment has been submitted", "options": ["Tugas itu telah dikumpulkan", "Betapa indahnya hari ini", "Saya membutuhkan buku lain", "Meskipun soal itu sulit saya tetap mencoba"], "answer": 0, "poin": 15}, {"audioText": "She is smart is she not", "options": ["Dia pintar bukan", "Jika saya belajar saya akan lulus", "Beberapa siswa belajar dan yang lainnya bermain", "Saya belajar dengan giat agar dapat lulus ujian"], "answer": 0, "poin": 15}, {"audioText": "You like English do you not", "options": ["Kamu suka bahasa Inggris bukan", "Jika saya punya waktu saya akan belajar", "Saya sedang mencari informasi penting", "Dia belajar bahasa Inggris untuk meningkatkan kemampuannya"], "answer": 0, "poin": 20}, {"audioText": "This book is more interesting than that book", "options": ["Buku ini lebih menarik daripada buku itu", "Jika saya telah belajar saya akan lulus", "Guru menjelaskan pelajaran dengan jelas", "Membaca setiap hari membantu saya memahami kosakata"], "answer": 0, "poin": 15}, {"audioText": "She is the most diligent student in the class", "options": ["Dia adalah siswa paling rajin di kelas", "Setiap siswa harus membawa buku", "Para siswa mendengarkan guru dengan hati-hati", "Saya tertarik belajar bahasa Inggris"], "answer": 0, "poin": 15}, {"audioText": "He said that he was studying", "options": ["Dia berkata bahwa dia sedang belajar", "Semua orang membutuhkan latihan", "Dia harus menyelesaikan pekerjaan rumah sebelum makan malam", "Dia pandai berbicara di depan kelas"], "answer": 0, "poin": 20}, {"audioText": "I prefer tea to coffee", "options": ["Saya lebih suka teh daripada kopi", "Ini adalah buku yang saya beli kemarin", "Kita sebaiknya berlatih setiap hari", "Ada banyak buku di atas meja"], "answer": 0, "poin": 15}, {"audioText": "What a beautiful day it is", "options": ["Betapa indahnya hari ini", "Siswa yang duduk di depan adalah teman saya", "Saya bisa memahami kalimat sederhana", "Ada seorang siswa di kelas"], "answer": 0, "poin": 15}, {"audioText": "If I study I will pass", "options": ["Jika saya belajar saya akan lulus", "Saya terlambat karena hujan", "Mereka mungkin datang terlambat", "Saya dulu sering bermain di taman"], "answer": 0, "poin": 20}, {"audioText": "If I had time I would study", "options": ["Jika saya punya waktu saya akan belajar", "Saya terlambat karena hujan deras", "Dia tidak boleh menggunakan kamus selama ujian", "Saya terbiasa belajar pada malam hari"], "answer": 0, "poin": 15}, {"audioText": "If I had studied I would have passed", "options": ["Jika saya telah belajar saya akan lulus", "Saya membutuhkan buku lain", "Tolong jelaskan arti kata ini", "Dia terlalu lelah untuk belajar"], "answer": 0, "poin": 15}, {"audioText": "Each student must bring a book", "options": ["Setiap siswa harus membawa buku", "Beberapa siswa belajar dan yang lainnya bermain", "Jangan menyerah ketika latihan sulit", "Dia cukup pintar untuk menjawab pertanyaan itu"], "answer": 0, "poin": 20}, {"audioText": "Everyone needs practice", "options": ["Semua orang membutuhkan latihan", "Saya sedang mencari informasi penting", "Meskipun soal itu sulit saya tetap mencoba", "Kalimat ini tidak sejelas kalimat itu"], "answer": 0, "poin": 15}, {"audioText": "This is the book that I bought yesterday", "options": ["Ini adalah buku yang saya beli kemarin", "Guru menjelaskan pelajaran dengan jelas", "Saya belajar dengan giat agar dapat lulus ujian", "Semakin banyak saya berlatih semakin baik saya berbicara"], "answer": 0, "poin": 15}, {"audioText": "The student who sits in front is my friend", "options": ["Siswa yang duduk di depan adalah teman saya", "Para siswa mendengarkan guru dengan hati-hati", "Dia belajar bahasa Inggris untuk meningkatkan kemampuannya", "Saya bermain sepak bola setiap Minggu"], "answer": 0, "poin": 20}, {"audioText": "I was late because it rained", "options": ["Saya terlambat karena hujan", "Dia harus menyelesaikan pekerjaan rumah sebelum makan malam", "Membaca setiap hari membantu saya memahami kosakata", "Dia belajar bahasa Inggris setiap malam"], "answer": 0, "poin": 15}, {"audioText": "I was late because of the heavy rain", "options": ["Saya terlambat karena hujan deras", "Kita sebaiknya berlatih setiap hari", "Saya tertarik belajar bahasa Inggris", "Mereka biasanya sarapan bersama"], "answer": 0, "poin": 15}, {"audioText": "I need another book", "options": ["Saya membutuhkan buku lain", "Saya bisa memahami kalimat sederhana", "Dia pandai berbicara di depan kelas", "Kami tidak menonton televisi pada pagi hari"], "answer": 0, "poin": 20}, {"audioText": "Some students study and others play", "options": ["Beberapa siswa belajar dan yang lainnya bermain", "Mereka mungkin datang terlambat", "Ada banyak buku di atas meja", "Apakah dia pergi ke sekolah dengan bus"], "answer": 0, "poin": 15}, {"audioText": "I am looking for important information", "options": ["Saya sedang mencari informasi penting", "Dia tidak boleh menggunakan kamus selama ujian", "Ada seorang siswa di kelas", "Saya sedang membaca buku sekarang"], "answer": 0, "poin": 15}, {"audioText": "The teacher explains the lesson clearly", "options": ["Guru menjelaskan pelajaran dengan jelas", "Tolong jelaskan arti kata ini", "Saya dulu sering bermain di taman", "Mereka sedang bermain di taman"], "answer": 0, "poin": 20}, {"audioText": "The students listen to the teacher carefully", "options": ["Para siswa mendengarkan guru dengan hati-hati", "Jangan menyerah ketika latihan sulit", "Saya terbiasa belajar pada malam hari", "Ibu saya sedang memasak makan malam"], "answer": 0, "poin": 15}, {"audioText": "She must finish her homework before dinner", "options": ["Dia harus menyelesaikan pekerjaan rumah sebelum makan malam", "Meskipun soal itu sulit saya tetap mencoba", "Dia terlalu lelah untuk belajar", "Dia tidak sedang tidur"], "answer": 0, "poin": 15}, {"audioText": "We should practice every day", "options": ["Kita sebaiknya berlatih setiap hari", "Saya belajar dengan giat agar dapat lulus ujian", "Dia cukup pintar untuk menjawab pertanyaan itu", "Apakah kamu sedang mendengarkan saya"], "answer": 0, "poin": 20}, {"audioText": "I can understand simple sentences", "options": ["Saya bisa memahami kalimat sederhana", "Dia belajar bahasa Inggris untuk meningkatkan kemampuannya", "Kalimat ini tidak sejelas kalimat itu", "Saya telah menyelesaikan tugas saya"], "answer": 0, "poin": 15}, {"audioText": "They may arrive late", "options": ["Mereka mungkin datang terlambat", "Membaca setiap hari membantu saya memahami kosakata", "Semakin banyak saya berlatih semakin baik saya berbicara", "Dia sudah membeli kamus baru"], "answer": 0, "poin": 15}, {"audioText": "He must not use a dictionary during the test", "options": ["Dia tidak boleh menggunakan kamus selama ujian", "Saya tertarik belajar bahasa Inggris", "Saya bermain sepak bola setiap Minggu", "Kami belum melihat film itu"], "answer": 0, "poin": 20}, {"audioText": "Please explain the meaning of this word", "options": ["Tolong jelaskan arti kata ini", "Dia pandai berbicara di depan kelas", "Dia belajar bahasa Inggris setiap malam", "Apakah mereka pernah mengunjungi Bali"], "answer": 0, "poin": 15}, {"audioText": "Do not give up when practice is difficult", "options": ["Jangan menyerah ketika latihan sulit", "Ada banyak buku di atas meja", "Mereka biasanya sarapan bersama", "Dia telah belajar selama tiga jam"], "answer": 0, "poin": 15}, {"audioText": "Although the question is difficult I keep trying", "options": ["Meskipun soal itu sulit saya tetap mencoba", "Ada seorang siswa di kelas", "Kami tidak menonton televisi pada pagi hari", "Mereka telah menunggu sejak pagi"], "answer": 0, "poin": 20}, {"audioText": "I study hard so that I can pass the test", "options": ["Saya belajar dengan giat agar dapat lulus ujian", "Saya dulu sering bermain di taman", "Apakah dia pergi ke sekolah dengan bus", "Saya pergi ke sekolah kemarin"], "answer": 0, "poin": 15}, {"audioText": "She studies English to improve her ability", "options": ["Dia belajar bahasa Inggris untuk meningkatkan kemampuannya", "Saya terbiasa belajar pada malam hari", "Saya sedang membaca buku sekarang", "Kami mengunjungi museum minggu lalu"], "answer": 0, "poin": 15}, {"audioText": "Reading every day helps me understand vocabulary", "options": ["Membaca setiap hari membantu saya memahami kosakata", "Dia terlalu lelah untuk belajar", "Mereka sedang bermain di taman", "Dia tidak datang ke kelas kemarin"], "answer": 0, "poin": 20}, {"audioText": "I am interested in learning English", "options": ["Saya tertarik belajar bahasa Inggris", "Dia cukup pintar untuk menjawab pertanyaan itu", "Ibu saya sedang memasak makan malam", "Apakah kamu membaca buku itu tadi malam"], "answer": 0, "poin": 15}, {"audioText": "She is good at speaking in front of the class", "options": ["Dia pandai berbicara di depan kelas", "Kalimat ini tidak sejelas kalimat itu", "Dia tidak sedang tidur", "Saya sedang belajar ketika dia menelepon"], "answer": 0, "poin": 15}, {"audioText": "There are many books on the table", "options": ["Ada banyak buku di atas meja", "Semakin banyak saya berlatih semakin baik saya berbicara", "Apakah kamu sedang mendengarkan saya", "Mereka sedang menonton film pada pukul delapan"], "answer": 0, "poin": 20}, {"audioText": "There is a student in the classroom", "options": ["Ada seorang siswa di kelas", "Saya bermain sepak bola setiap Minggu", "Saya telah menyelesaikan tugas saya", "Dia sudah pergi sebelum saya tiba"], "answer": 0, "poin": 15}, {"audioText": "I used to play in the park", "options": ["Saya dulu sering bermain di taman", "Dia belajar bahasa Inggris setiap malam", "Dia sudah membeli kamus baru", "Kami telah menyelesaikan pekerjaan itu sebelum guru datang"], "answer": 0, "poin": 15}, {"audioText": "I am used to studying at night", "options": ["Saya terbiasa belajar pada malam hari", "Mereka biasanya sarapan bersama", "Kami belum melihat film itu", "Mereka telah bekerja selama dua jam sebelum hujan mulai"], "answer": 0, "poin": 20}, {"audioText": "She is too tired to study", "options": ["Dia terlalu lelah untuk belajar", "Kami tidak menonton televisi pada pagi hari", "Apakah mereka pernah mengunjungi Bali", "Saya akan belajar bahasa Inggris besok"], "answer": 0, "poin": 15}, {"audioText": "She is smart enough to answer the question", "options": ["Dia cukup pintar untuk menjawab pertanyaan itu", "Apakah dia pergi ke sekolah dengan bus", "Dia telah belajar selama tiga jam", "Dia akan membeli laptop baru minggu depan"], "answer": 0, "poin": 15}, {"audioText": "This sentence is not as clear as that sentence", "options": ["Kalimat ini tidak sejelas kalimat itu", "Saya sedang membaca buku sekarang", "Mereka telah menunggu sejak pagi", "Kami tidak akan menyerah"], "answer": 0, "poin": 20}, {"audioText": "The more I practice the better I speak", "options": ["Semakin banyak saya berlatih semakin baik saya berbicara", "Mereka sedang bermain di taman", "Saya pergi ke sekolah kemarin", "Apakah mereka akan datang malam ini"], "answer": 0, "poin": 15}];
  const extraFoundationModules = [{"title": "Passive Voice Lengkap", "goal": "Memahami cara mengubah aktif menjadi pasif untuk TOEFL.", "structure": "Object aktif + be + Verb 3 + by + subject aktif", "explanation": "Passive voice digunakan saat fokus kalimat berada pada objek atau hasil tindakan. Dalam TOEFL, bentuk be harus mengikuti tense, sedangkan verb utama harus Verb 3.", "keyPoints": ["Simple Present Passive: is/am/are + V3", "Simple Past Passive: was/were + V3", "Perfect Passive: have/has/had + been + V3", "Continuous Passive: be + being + V3"], "examples": [{"en": "The book was written by a teacher.", "id": "Buku itu ditulis oleh seorang guru."}, {"en": "The door is being repaired.", "id": "Pintu itu sedang diperbaiki."}, {"en": "The assignment has been submitted.", "id": "Tugas itu telah dikumpulkan."}], "mistakes": [{"wrong": "The book wrote by a teacher.", "correct": "The book was written by a teacher.", "note": "Passive membutuhkan be + Verb 3."}]}, {"title": "Question Tag Lengkap", "goal": "Memahami pola tag question agar tidak salah auxiliary dan subject.", "structure": "Positive statement + negative tag / Negative statement + positive tag", "explanation": "Question tag meminta konfirmasi. Jika kalimat utama positif, tag negatif. Jika kalimat utama negatif, tag positif.", "keyPoints": ["She is smart, isn't she?", "You like English, don't you?", "They did not come, did they?", "I am right, aren't I?"], "examples": [{"en": "She is smart, isn't she?", "id": "Dia pintar, bukan?"}, {"en": "They did not come, did they?", "id": "Mereka tidak datang, kan?"}], "mistakes": [{"wrong": "She is smart, is she?", "correct": "She is smart, isn't she?", "note": "Kalimat utama positif memakai tag negatif."}]}, {"title": "Conditional Sentences Lengkap", "goal": "Memahami pengandaian tipe 0, 1, 2, dan 3.", "structure": "If clause + main clause", "explanation": "Conditional sentence dipakai untuk sebab-akibat, kemungkinan, pengandaian, dan penyesalan. TOEFL sering menguji kecocokan tense antar klausa.", "keyPoints": ["Type 0: If + present, present", "Type 1: If + present, will + V1", "Type 2: If + past, would + V1", "Type 3: If + had V3, would have V3"], "examples": [{"en": "If I study, I will pass.", "id": "Jika saya belajar, saya akan lulus."}, {"en": "If I had studied, I would have passed.", "id": "Jika saya telah belajar, saya akan lulus."}], "mistakes": [{"wrong": "If I will study, I will pass.", "correct": "If I study, I will pass.", "note": "Pada conditional type 1, if clause memakai simple present."}]}, {"title": "Relative Pronoun Lengkap", "goal": "Memahami who, whom, whose, which, dan that.", "structure": "Noun + relative pronoun + clause", "explanation": "Relative pronoun menjelaskan noun sebelumnya. Who untuk orang sebagai subjek, whom untuk orang sebagai objek, which untuk benda, whose untuk kepemilikan, dan that untuk orang/benda.", "keyPoints": ["who = orang sebagai subject", "whom = orang sebagai object", "which = benda/hewan", "whose = kepemilikan", "that = orang/benda"], "examples": [{"en": "The student who sits in front is my friend.", "id": "Siswa yang duduk di depan adalah teman saya."}, {"en": "This is the book that I bought yesterday.", "id": "Ini adalah buku yang saya beli kemarin."}], "mistakes": [{"wrong": "The student which sits in front...", "correct": "The student who sits in front...", "note": "Untuk orang gunakan who/that, bukan which."}]}];
  const extraTenseExamples = {"Simple Present Tense": [{"en": "I play football every Sunday.", "id": "Saya bermain sepak bola setiap Minggu."}, {"en": "She studies English every night.", "id": "Dia belajar bahasa Inggris setiap malam."}, {"en": "They usually eat breakfast together.", "id": "Mereka biasanya sarapan bersama."}, {"en": "We do not watch television in the morning.", "id": "Kami tidak menonton televisi pada pagi hari."}, {"en": "Does she go to school by bus.", "id": "Apakah dia pergi ke sekolah dengan bus."}], "Present Continuous Tense": [{"en": "I am reading a book now.", "id": "Saya sedang membaca buku sekarang."}, {"en": "They are playing in the park.", "id": "Mereka sedang bermain di taman."}, {"en": "My mother is cooking dinner.", "id": "Ibu saya sedang memasak makan malam."}, {"en": "He is not sleeping.", "id": "Dia tidak sedang tidur."}, {"en": "Are you listening to me.", "id": "Apakah kamu sedang mendengarkan saya."}], "Present Perfect Tense": [{"en": "I have finished my homework.", "id": "Saya telah menyelesaikan tugas saya."}, {"en": "She has bought a new dictionary.", "id": "Dia sudah membeli kamus baru."}, {"en": "We have not seen that movie.", "id": "Kami belum melihat film itu."}, {"en": "Have they ever visited Bali.", "id": "Apakah mereka pernah mengunjungi Bali."}], "Present Perfect Continuous Tense": [{"en": "She has been studying for three hours.", "id": "Dia telah belajar selama tiga jam."}, {"en": "They have been waiting since morning.", "id": "Mereka telah menunggu sejak pagi."}], "Simple Past Tense": [{"en": "I went to school yesterday.", "id": "Saya pergi ke sekolah kemarin."}, {"en": "We visited the museum last week.", "id": "Kami mengunjungi museum minggu lalu."}, {"en": "He did not come to class yesterday.", "id": "Dia tidak datang ke kelas kemarin."}, {"en": "Did you read that book last night.", "id": "Apakah kamu membaca buku itu tadi malam."}], "Past Continuous Tense": [{"en": "I was studying when he called.", "id": "Saya sedang belajar ketika dia menelepon."}, {"en": "They were watching a movie at eight.", "id": "Mereka sedang menonton film pada pukul delapan."}], "Past Perfect Tense": [{"en": "He had left before I arrived.", "id": "Dia sudah pergi sebelum saya tiba."}, {"en": "We had finished the work before the teacher came.", "id": "Kami telah menyelesaikan pekerjaan itu sebelum guru datang."}], "Past Perfect Continuous Tense": [{"en": "They had been working for two hours before it started raining.", "id": "Mereka telah bekerja selama dua jam sebelum hujan mulai."}], "Simple Future Tense": [{"en": "I will study English tomorrow.", "id": "Saya akan belajar bahasa Inggris besok."}, {"en": "She will buy a new laptop next week.", "id": "Dia akan membeli laptop baru minggu depan."}, {"en": "We will not give up.", "id": "Kami tidak akan menyerah."}, {"en": "Will they come tonight.", "id": "Apakah mereka akan datang malam ini."}], "Future Continuous Tense": [{"en": "I will be studying at eight tonight.", "id": "Saya akan sedang belajar pada jam delapan malam."}, {"en": "They will be traveling tomorrow morning.", "id": "Mereka akan sedang bepergian besok pagi."}], "Future Perfect Tense": [{"en": "I will have finished this report by tomorrow.", "id": "Saya akan sudah menyelesaikan laporan ini besok."}, {"en": "She will have arrived before the meeting starts.", "id": "Dia akan sudah tiba sebelum rapat dimulai."}], "Future Perfect Continuous Tense": [{"en": "By next year I will have been studying English for four years.", "id": "Tahun depan saya akan sudah belajar bahasa Inggris selama empat tahun."}], "Simple Past Future Tense": [{"en": "She said that she would study harder.", "id": "Dia mengatakan bahwa dia akan belajar lebih giat."}, {"en": "I thought they would arrive on time.", "id": "Saya pikir mereka akan datang tepat waktu."}], "Past Future Continuous Tense": [{"en": "He said that he would be working at eight.", "id": "Dia mengatakan bahwa dia akan sedang bekerja pada pukul delapan."}], "Past Future Perfect Tense": [{"en": "I thought she would have finished the task.", "id": "Saya pikir dia akan sudah menyelesaikan tugas itu."}]};

  addUnique("dictionary", extraDictionary, (item) => String(item.en || "").toLowerCase());
  addUnique("vocabularies", extraVocabularies, (item) => String(item.en || "").toLowerCase());
  addUnique("foundationVocabulary", extraFoundationVocabulary, (item) => String(item.en || "").toLowerCase());
  addUnique("grammar", extraGrammar, (item) => String(item.enCorrect || item.idText || "").toLowerCase());
  addUnique("tensePractice", extraTensePractice, (item) => String(item.enCorrect || item.idText || "").toLowerCase());
  addUnique("listening", extraListening, (item) => String(item.audioText || "").toLowerCase());
  addUnique("foundationModules", extraFoundationModules, (item) => String(item.title || "").toLowerCase());

  (appDatabase.tenseLessons || []).forEach((lesson) => {
    const extras = extraTenseExamples[lesson.name] || [];
    if (!Array.isArray(lesson.examples)) lesson.examples = [];
    const seen = new Set(lesson.examples.map((ex) => String(ex.en || "").toLowerCase()));
    extras.forEach((ex) => { const key = String(ex.en || "").toLowerCase(); if (!seen.has(key)) { seen.add(key); lesson.examples.push(ex); } });
  });

  const dictSeen = new Set((appDatabase.dictionary || []).map((item) => String(item.en || "").toLowerCase()));
  [...(appDatabase.vocabularies || []), ...(appDatabase.foundationVocabulary || [])].forEach((item) => {
    const key = String(item.en || "").toLowerCase();
    if (key && !dictSeen.has(key) && item.id) {
      dictSeen.add(key);
      appDatabase.dictionary.push({ en: item.en, id: item.id, category: item.category || "Kosakata", wordClass: item.wordClass || "word", example: item.example || "" });
    }
  });
})();


// ================= TOEFL SIMULATION FEATURE DATA =================
(function addToeflSimulationData(){
  if (typeof appDatabase === 'undefined') return;
  const questions = [
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "She usually ___ breakfast at 7 a.m.",
    "options": [
      "eat",
      "eats",
      "eating",
      "eaten"
    ],
    "answer": 1,
    "explanation": "Subject 'she' dalam Simple Present memakai verb s/es: eats."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "They ___ studying English when I called them last night.",
    "options": [
      "is",
      "are",
      "was",
      "were"
    ],
    "answer": 3,
    "explanation": "Subject 'they' memakai were dalam Past Continuous."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "If I had more time, I ___ the TOEFL test again.",
    "options": [
      "take",
      "took",
      "would take",
      "will take"
    ],
    "answer": 2,
    "explanation": "Conditional type 2 memakai If + past, would + V1."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The students ___ completed the assignment before the teacher arrived.",
    "options": [
      "has",
      "have",
      "had",
      "having"
    ],
    "answer": 2,
    "explanation": "Past Perfect memakai had + Verb 3."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "By next week, she ___ finished the report.",
    "options": [
      "will have",
      "has",
      "had",
      "is"
    ],
    "answer": 0,
    "explanation": "Future Perfect memakai will have + Verb 3."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The book ___ by many students every semester.",
    "options": [
      "reads",
      "is read",
      "read",
      "reading"
    ],
    "answer": 1,
    "explanation": "Passive Simple Present memakai is/am/are + V3."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "Neither the teacher nor the students ___ ready for the test.",
    "options": [
      "is",
      "are",
      "was",
      "be"
    ],
    "answer": 1,
    "explanation": "Dalam neither...nor, verb mengikuti subject terdekat: students are."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The number of applicants ___ increasing every year.",
    "options": [
      "are",
      "were",
      "is",
      "be"
    ],
    "answer": 2,
    "explanation": "'The number of' dianggap singular, jadi is."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "A number of students ___ absent yesterday.",
    "options": [
      "was",
      "is",
      "were",
      "has"
    ],
    "answer": 2,
    "explanation": "'A number of' bermakna many, jadi plural: were."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "He suggested that she ___ more carefully.",
    "options": [
      "studies",
      "study",
      "studied",
      "studying"
    ],
    "answer": 1,
    "explanation": "Subjunctive setelah suggest memakai base verb: study."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "It is important that every student ___ on time.",
    "options": [
      "arrives",
      "arrive",
      "arrived",
      "arriving"
    ],
    "answer": 1,
    "explanation": "Subjunctive setelah important that memakai base verb."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The woman ___ lives next door is a doctor.",
    "options": [
      "which",
      "whom",
      "who",
      "whose"
    ],
    "answer": 2,
    "explanation": "Relative pronoun untuk orang sebagai subject adalah who."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The man to ___ I spoke was very helpful.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "answer": 1,
    "explanation": "Setelah preposition 'to', gunakan whom untuk orang sebagai object."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "This is the most interesting book I have ___ read.",
    "options": [
      "ever",
      "never",
      "yet",
      "still"
    ],
    "answer": 0,
    "explanation": "Present perfect sering memakai ever untuk pengalaman."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "She has been learning English ___ three years.",
    "options": [
      "since",
      "for",
      "during",
      "while"
    ],
    "answer": 1,
    "explanation": "For dipakai untuk durasi waktu."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "She has lived here ___ 2020.",
    "options": [
      "for",
      "since",
      "during",
      "while"
    ],
    "answer": 1,
    "explanation": "Since dipakai untuk titik awal waktu."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The teacher asked us ___ silent during the exam.",
    "options": [
      "be",
      "to be",
      "being",
      "been"
    ],
    "answer": 1,
    "explanation": "Ask + object + to infinitive."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "I am interested in ___ English every day.",
    "options": [
      "learn",
      "to learn",
      "learning",
      "learned"
    ],
    "answer": 2,
    "explanation": "Setelah preposition 'in', gunakan gerund V-ing."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The test was ___ difficult that many students failed.",
    "options": [
      "so",
      "such",
      "too",
      "enough"
    ],
    "answer": 0,
    "explanation": "So + adjective + that clause."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "It was ___ a difficult test that many students failed.",
    "options": [
      "so",
      "such",
      "too",
      "enough"
    ],
    "answer": 1,
    "explanation": "Such + noun phrase + that clause."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The more you practice, ___ you will become.",
    "options": [
      "the good",
      "the best",
      "the better",
      "better"
    ],
    "answer": 2,
    "explanation": "Double comparative: The more..., the better..."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "This sentence is not as clear ___ the previous one.",
    "options": [
      "than",
      "as",
      "to",
      "from"
    ],
    "answer": 1,
    "explanation": "Perbandingan setara memakai as...as."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "She would rather study grammar ___ watch television.",
    "options": [
      "than",
      "to",
      "from",
      "as"
    ],
    "answer": 0,
    "explanation": "Would rather + V1 + than + V1."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "I prefer reading books ___ watching movies.",
    "options": [
      "than",
      "to",
      "from",
      "rather"
    ],
    "answer": 1,
    "explanation": "Prefer + V-ing/noun + to + V-ing/noun."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The door needs ___ before the class starts.",
    "options": [
      "repair",
      "to repair",
      "repairing",
      "repaired"
    ],
    "answer": 2,
    "explanation": "Need + V-ing dapat bermakna perlu diperbaiki secara pasif."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The teacher made the students ___ the answer.",
    "options": [
      "repeat",
      "to repeat",
      "repeated",
      "repeating"
    ],
    "answer": 0,
    "explanation": "Make + object + base verb."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "She let me ___ her dictionary.",
    "options": [
      "use",
      "to use",
      "using",
      "used"
    ],
    "answer": 0,
    "explanation": "Let + object + base verb."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "Despite ___ tired, he continued studying.",
    "options": [
      "he was",
      "being",
      "to be",
      "was"
    ],
    "answer": 1,
    "explanation": "Despite diikuti noun/gerund: despite being tired."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "Although he ___ tired, he continued studying.",
    "options": [
      "is",
      "being",
      "to be",
      "be"
    ],
    "answer": 0,
    "explanation": "Although diikuti clause: subject + verb."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Basic",
    "question": "The assignment must ___ by Friday.",
    "options": [
      "submit",
      "submitted",
      "be submitted",
      "be submitting"
    ],
    "answer": 2,
    "explanation": "Modal passive: must be + V3."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "The students (A) has (B) finished (C) their assignments (D) on time.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "Subject 'students' plural, jadi harus 'have', bukan 'has'."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "She (A) is (B) study (C) English (D) now.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Present Continuous membutuhkan Verb-ing: studying."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "He (A) did not (B) went (C) to school (D) yesterday.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Setelah did not, verb kembali ke V1: go."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "The book (A) which (B) I bought it (C) yesterday is (D) expensive.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "Tidak perlu object 'it' karena sudah ada relative pronoun sebagai object."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "Neither (A) the students nor the teacher (B) are (C) ready (D) today.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Verb mengikuti subject terdekat 'teacher', jadi is."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "The number (A) of people (B) are (C) increasing (D) every year.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "'The number' singular, jadi is."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "She is (A) more smarter (B) than (C) her brother (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Jangan gunakan more + adjective-er. Cukup smarter."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "I look forward (A) to meet (B) you (C) next week (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Look forward to diikuti gerund: meeting."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "Because of (A) it rained (B), the match (C) was cancelled (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "Because of harus diikuti noun phrase. Untuk clause gunakan because."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "The report (A) was wrote (B) by (C) the secretary (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Passive membutuhkan V3: written."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "Every students (A) must (B) bring (C) a pencil (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "Every diikuti singular noun: every student."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "She has (A) been lived (B) here (C) since 2020 (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Present Perfect Continuous: has been living."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "The teacher asked (A) that the student (B) studies (C) harder (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "Subjunctive: asked that + subject + base verb: study."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "If I was (A) you, I would (B) choose (C) the second answer (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "Conditional type 2 formal memakai 'were' untuk semua subject."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "He (A) suggested (B) me to study (C) harder (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "Suggest tidak memakai object + to infinitive. Gunakan suggested that I study."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "This is (A) the man (B) which (C) helped me (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "Untuk orang gunakan who/that, bukan which."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "She (A) has already (B) ate (C) breakfast (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "Present Perfect memakai V3: eaten."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "The information (A) are (B) useful (C) for students (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Information uncountable singular, jadi is."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "There (A) is (B) many reasons (C) for the problem (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Many reasons plural, jadi there are."
  },
  {
    "section": "Written Expression",
    "type": "Error Identification",
    "level": "Intermediate",
    "question": "He is (A) enough tall (B) to reach (C) the shelf (D).",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Adjective + enough: tall enough."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'rapid' is closest in meaning to ___.",
    "options": [
      "slow",
      "quick",
      "late",
      "weak"
    ],
    "answer": 1,
    "explanation": "Rapid berarti cepat/quick."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'assist' is closest in meaning to ___.",
    "options": [
      "help",
      "avoid",
      "reject",
      "forget"
    ],
    "answer": 0,
    "explanation": "Assist berarti membantu/help."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'purchase' is closest in meaning to ___.",
    "options": [
      "sell",
      "buy",
      "borrow",
      "lend"
    ],
    "answer": 1,
    "explanation": "Purchase berarti membeli/buy."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'annual' is closest in meaning to ___.",
    "options": [
      "daily",
      "weekly",
      "yearly",
      "monthly"
    ],
    "answer": 2,
    "explanation": "Annual berarti tahunan/yearly."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'significant' is closest in meaning to ___.",
    "options": [
      "important",
      "small",
      "unclear",
      "ordinary"
    ],
    "answer": 0,
    "explanation": "Significant berarti penting/bermakna."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'brief' is closest in meaning to ___.",
    "options": [
      "short",
      "long",
      "clear",
      "expensive"
    ],
    "answer": 0,
    "explanation": "Brief berarti singkat/short."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'require' is closest in meaning to ___.",
    "options": [
      "need",
      "refuse",
      "repair",
      "repeat"
    ],
    "answer": 0,
    "explanation": "Require berarti membutuhkan/need."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'accurate' is closest in meaning to ___.",
    "options": [
      "wrong",
      "correct",
      "fast",
      "cheap"
    ],
    "answer": 1,
    "explanation": "Accurate berarti tepat/correct."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'various' is closest in meaning to ___.",
    "options": [
      "many different",
      "only one",
      "very small",
      "not useful"
    ],
    "answer": 0,
    "explanation": "Various berarti berbagai macam."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'maintain' is closest in meaning to ___.",
    "options": [
      "keep",
      "lose",
      "break",
      "forget"
    ],
    "answer": 0,
    "explanation": "Maintain berarti menjaga/mempertahankan."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'decrease' is opposite in meaning to ___.",
    "options": [
      "reduce",
      "fall",
      "increase",
      "drop"
    ],
    "answer": 2,
    "explanation": "Opposite dari decrease adalah increase."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'ancient' is opposite in meaning to ___.",
    "options": [
      "old",
      "modern",
      "historic",
      "early"
    ],
    "answer": 1,
    "explanation": "Opposite dari ancient adalah modern."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'reject' is opposite in meaning to ___.",
    "options": [
      "accept",
      "refuse",
      "deny",
      "avoid"
    ],
    "answer": 0,
    "explanation": "Opposite dari reject adalah accept."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'common' is opposite in meaning to ___.",
    "options": [
      "usual",
      "ordinary",
      "rare",
      "general"
    ],
    "answer": 2,
    "explanation": "Opposite dari common adalah rare."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "The word 'expand' is opposite in meaning to ___.",
    "options": [
      "increase",
      "extend",
      "reduce",
      "grow"
    ],
    "answer": 2,
    "explanation": "Opposite dari expand adalah reduce/contract."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "In the sentence, 'The teacher clarified the rule,' clarified means ___.",
    "options": [
      "made clear",
      "made longer",
      "made difficult",
      "made silent"
    ],
    "answer": 0,
    "explanation": "Clarify berarti memperjelas."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "In the sentence, 'The result was obvious,' obvious means ___.",
    "options": [
      "clear",
      "hidden",
      "wrong",
      "late"
    ],
    "answer": 0,
    "explanation": "Obvious berarti jelas."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "In the sentence, 'The method is efficient,' efficient means ___.",
    "options": [
      "working well without waste",
      "very expensive",
      "hard to remember",
      "not useful"
    ],
    "answer": 0,
    "explanation": "Efficient berarti efisien."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "In the sentence, 'The issue is complex,' complex means ___.",
    "options": [
      "simple",
      "complicated",
      "small",
      "funny"
    ],
    "answer": 1,
    "explanation": "Complex berarti rumit/complicated."
  },
  {
    "section": "Vocabulary",
    "type": "Meaning in Context",
    "level": "Basic",
    "question": "In the sentence, 'The evidence supports the claim,' evidence means ___.",
    "options": [
      "proof",
      "question",
      "answer",
      "mistake"
    ],
    "answer": 0,
    "explanation": "Evidence berarti bukti/proof."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "What is the main idea of the passage?",
    "options": [
      "Learning English only needs memorization",
      "Vocabulary, grammar, and context are all important",
      "Students should avoid grammar",
      "The word player is a verb"
    ],
    "answer": 1,
    "explanation": "Teks menjelaskan bahwa vocabulary, grammar, dan context sama-sama penting.",
    "passage": "Daily English Practice\n\nMany students think that learning English means memorizing many words. Vocabulary is important, but grammar and context are also necessary. A learner should understand how words work in a sentence. For example, the word 'play' can be a verb, but the word 'player' is a noun. By studying structure, students can read faster and write more accurately."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "According to the passage, why is structure important?",
    "options": [
      "It helps students read faster and write accurately",
      "It makes students memorize fewer words",
      "It removes vocabulary",
      "It changes nouns into verbs"
    ],
    "answer": 0,
    "explanation": "Kalimat terakhir menyebut read faster dan write more accurately.",
    "passage": "Daily English Practice\n\nMany students think that learning English means memorizing many words. Vocabulary is important, but grammar and context are also necessary. A learner should understand how words work in a sentence. For example, the word 'play' can be a verb, but the word 'player' is a noun. By studying structure, students can read faster and write more accurately."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "The word 'accurately' is closest in meaning to ___.",
    "options": [
      "correctly",
      "slowly",
      "loudly",
      "rarely"
    ],
    "answer": 0,
    "explanation": "Accurately berarti dengan tepat/correctly.",
    "passage": "Daily English Practice\n\nMany students think that learning English means memorizing many words. Vocabulary is important, but grammar and context are also necessary. A learner should understand how words work in a sentence. For example, the word 'play' can be a verb, but the word 'player' is a noun. By studying structure, students can read faster and write more accurately."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "What does the passage mainly discuss?",
    "options": [
      "The history of printed books",
      "The role of technology in learning",
      "The danger of online videos",
      "The cost of applications"
    ],
    "answer": 1,
    "explanation": "Topik utama adalah peran teknologi dalam pembelajaran.",
    "passage": "Technology in Education\n\nTechnology has changed the way students learn. In the past, learners depended mostly on printed books. Today, they can use videos, online dictionaries, and interactive applications. However, technology is only useful when students use it actively. A good application should encourage practice, give feedback, and help learners review their mistakes."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "According to the passage, technology is useful when students ___.",
    "options": [
      "use it actively",
      "avoid feedback",
      "only watch videos",
      "stop reading books"
    ],
    "answer": 0,
    "explanation": "Teks menyebut useful when students use it actively.",
    "passage": "Technology in Education\n\nTechnology has changed the way students learn. In the past, learners depended mostly on printed books. Today, they can use videos, online dictionaries, and interactive applications. However, technology is only useful when students use it actively. A good application should encourage practice, give feedback, and help learners review their mistakes."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "The word 'encourage' is closest in meaning to ___.",
    "options": [
      "motivate",
      "prevent",
      "confuse",
      "ignore"
    ],
    "answer": 0,
    "explanation": "Encourage berarti mendorong/memotivasi.",
    "passage": "Technology in Education\n\nTechnology has changed the way students learn. In the past, learners depended mostly on printed books. Today, they can use videos, online dictionaries, and interactive applications. However, technology is only useful when students use it actively. A good application should encourage practice, give feedback, and help learners review their mistakes."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "What is the best title for the passage?",
    "options": [
      "How to Sleep All Day",
      "Healthy Study Habits",
      "The Problem with Memory",
      "One-Day Test Preparation"
    ],
    "answer": 1,
    "explanation": "Isi bacaan membahas kebiasaan belajar yang sehat.",
    "passage": "Healthy Study Habits\n\nSuccessful learners usually have consistent study habits. They do not study only one day before a test. Instead, they review small parts of the lesson every day. This habit reduces stress and improves long-term memory. Sleep is also important because the brain organizes information while a person rests."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "Why should students review small parts every day?",
    "options": [
      "To reduce stress and improve memory",
      "To avoid sleeping",
      "To forget the lesson",
      "To make the test longer"
    ],
    "answer": 0,
    "explanation": "Teks menyebut reduces stress dan improves long-term memory.",
    "passage": "Healthy Study Habits\n\nSuccessful learners usually have consistent study habits. They do not study only one day before a test. Instead, they review small parts of the lesson every day. This habit reduces stress and improves long-term memory. Sleep is also important because the brain organizes information while a person rests."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "The word 'consistent' is closest in meaning to ___.",
    "options": [
      "regular",
      "rare",
      "sudden",
      "weak"
    ],
    "answer": 0,
    "explanation": "Consistent berarti teratur/regular.",
    "passage": "Healthy Study Habits\n\nSuccessful learners usually have consistent study habits. They do not study only one day before a test. Instead, they review small parts of the lesson every day. This habit reduces stress and improves long-term memory. Sleep is also important because the brain organizes information while a person rests."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "What is the passage mainly about?",
    "options": [
      "Advantages and requirements of public transportation",
      "How to buy a private car",
      "Traffic signs in small towns",
      "The history of trains"
    ],
    "answer": 0,
    "explanation": "Bacaan membahas manfaat dan syarat transportasi publik.",
    "passage": "Public Transportation\n\nPublic transportation can reduce traffic problems in large cities. Buses and trains carry many passengers at the same time, so fewer private vehicles are needed on the road. In addition, public transportation can be cheaper than driving a private car. Nevertheless, the system must be clean, safe, and punctual to attract more users."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "Why can public transportation reduce traffic?",
    "options": [
      "It carries many passengers at the same time",
      "It is always free",
      "It uses private vehicles",
      "It closes roads"
    ],
    "answer": 0,
    "explanation": "Teks menyebut membawa banyak penumpang sekaligus.",
    "passage": "Public Transportation\n\nPublic transportation can reduce traffic problems in large cities. Buses and trains carry many passengers at the same time, so fewer private vehicles are needed on the road. In addition, public transportation can be cheaper than driving a private car. Nevertheless, the system must be clean, safe, and punctual to attract more users."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "The word 'punctual' means ___.",
    "options": [
      "on time",
      "expensive",
      "crowded",
      "dangerous"
    ],
    "answer": 0,
    "explanation": "Punctual berarti tepat waktu.",
    "passage": "Public Transportation\n\nPublic transportation can reduce traffic problems in large cities. Buses and trains carry many passengers at the same time, so fewer private vehicles are needed on the road. In addition, public transportation can be cheaper than driving a private car. Nevertheless, the system must be clean, safe, and punctual to attract more users."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "What is the main idea of the passage?",
    "options": [
      "Small actions can support environmental protection",
      "Plastic should be used more often",
      "Only schools can protect nature",
      "Trees are not important"
    ],
    "answer": 0,
    "explanation": "Bacaan menekankan tindakan kecil yang berdampak besar.",
    "passage": "Environmental Awareness\n\nEnvironmental awareness begins with simple actions. People can save electricity, reduce plastic use, and plant trees. These actions may seem small, but they can create a significant impact when many people do them together. Schools can also teach students to protect nature through projects and daily habits."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "According to the passage, schools can teach students through ___.",
    "options": [
      "projects and daily habits",
      "expensive cars",
      "plastic products",
      "traffic rules"
    ],
    "answer": 0,
    "explanation": "Kalimat terakhir menyebut projects and daily habits.",
    "passage": "Environmental Awareness\n\nEnvironmental awareness begins with simple actions. People can save electricity, reduce plastic use, and plant trees. These actions may seem small, but they can create a significant impact when many people do them together. Schools can also teach students to protect nature through projects and daily habits."
  },
  {
    "section": "Reading",
    "type": "Reading Comprehension",
    "level": "Intermediate",
    "question": "The word 'significant' is closest in meaning to ___.",
    "options": [
      "important",
      "tiny",
      "unclear",
      "temporary"
    ],
    "answer": 0,
    "explanation": "Significant berarti penting/berarti.",
    "passage": "Environmental Awareness\n\nEnvironmental awareness begins with simple actions. People can save electricity, reduce plastic use, and plant trees. These actions may seem small, but they can create a significant impact when many people do them together. Schools can also teach students to protect nature through projects and daily habits."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "What did the student forget?",
    "options": [
      "his notebook",
      "his lunch",
      "his phone",
      "his umbrella"
    ],
    "answer": 0,
    "explanation": "Audio menyebut forgot to bring his notebook.",
    "audioText": "The student forgot to bring his notebook."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "When will the teacher explain the rule?",
    "options": [
      "after lunch",
      "before class",
      "tomorrow morning",
      "next week"
    ],
    "answer": 0,
    "explanation": "Audio menyebut after lunch.",
    "audioText": "The teacher will explain the grammar rule after lunch."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "Where is the woman probably?",
    "options": [
      "in the library",
      "at the airport",
      "in the kitchen",
      "at the bank"
    ],
    "answer": 0,
    "explanation": "Audio menyebut looking for a dictionary in the library.",
    "audioText": "The woman is looking for a dictionary in the library."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "What has the man done?",
    "options": [
      "submitted his assignment",
      "lost his assignment",
      "checked his email",
      "bought a book"
    ],
    "answer": 0,
    "explanation": "Audio menyebut has already submitted.",
    "audioText": "The man has already submitted his assignment."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "What were the students doing?",
    "options": [
      "discussing the project",
      "taking the bus",
      "watching a movie",
      "cleaning the room"
    ],
    "answer": 0,
    "explanation": "Audio menyebut were discussing the project.",
    "audioText": "The students were discussing the project when the bell rang."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "What happened to the meeting?",
    "options": [
      "It was cancelled",
      "It started early",
      "It moved online",
      "It became longer"
    ],
    "answer": 0,
    "explanation": "Audio menyebut meeting has been cancelled.",
    "audioText": "The speaker says the meeting has been cancelled."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "What does the woman prefer?",
    "options": [
      "tea",
      "coffee",
      "milk",
      "juice"
    ],
    "answer": 0,
    "explanation": "Audio menyebut prefers tea to coffee.",
    "audioText": "The woman prefers tea to coffee."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "What does the man imply?",
    "options": [
      "He does not have enough time",
      "He dislikes studying",
      "He passed the test",
      "He has finished studying"
    ],
    "answer": 0,
    "explanation": "Kalimat conditional menunjukkan ia tidak punya cukup waktu.",
    "audioText": "The man would study harder if he had more time."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "Which book belongs to the teacher?",
    "options": [
      "the book on the table",
      "the book in the bag",
      "the book near the door",
      "the book under the chair"
    ],
    "answer": 0,
    "explanation": "Audio menyebut the book on the table.",
    "audioText": "The book on the table belongs to my teacher."
  },
  {
    "section": "Listening",
    "type": "Short Listening",
    "level": "Basic",
    "question": "What happened first?",
    "options": [
      "The train left",
      "They arrived",
      "They bought tickets",
      "They called the teacher"
    ],
    "answer": 0,
    "explanation": "Past perfect 'had left' terjadi lebih dulu.",
    "audioText": "The train had left before they arrived."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "My brother enjoys ___ English songs.",
    "options": [
      "listen",
      "listening to",
      "to listening",
      "listened"
    ],
    "answer": 1,
    "explanation": "Enjoy diikuti gerund: listening to."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "The lecturer had the students ___ the article.",
    "options": [
      "read",
      "to read",
      "reading",
      "readed"
    ],
    "answer": 0,
    "explanation": "Have + object + base verb."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "The city ___ we visited last year was beautiful.",
    "options": [
      "where",
      "who",
      "whom",
      "whose"
    ],
    "answer": 0,
    "explanation": "Untuk tempat bisa memakai where."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "This is the student ___ bag was lost.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "answer": 2,
    "explanation": "Whose menunjukkan kepemilikan."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "The exam was easier ___ I expected.",
    "options": [
      "than",
      "as",
      "to",
      "from"
    ],
    "answer": 0,
    "explanation": "Comparative menggunakan than."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "She speaks English ___ than her brother.",
    "options": [
      "fluent",
      "more fluently",
      "most fluently",
      "fluency"
    ],
    "answer": 1,
    "explanation": "Untuk adverb panjang gunakan more fluently."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "There ___ several reasons for the change.",
    "options": [
      "is",
      "are",
      "was",
      "has"
    ],
    "answer": 1,
    "explanation": "Several reasons plural, jadi are."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "The news ___ surprising.",
    "options": [
      "are",
      "were",
      "is",
      "be"
    ],
    "answer": 2,
    "explanation": "News terlihat plural tetapi singular uncountable: is."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "I will call you as soon as I ___ home.",
    "options": [
      "arrive",
      "will arrive",
      "arrived",
      "arriving"
    ],
    "answer": 0,
    "explanation": "Time clause setelah as soon as memakai present untuk future meaning."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "She is used to ___ early every morning.",
    "options": [
      "wake up",
      "waking up",
      "woke up",
      "wakes up"
    ],
    "answer": 1,
    "explanation": "Be used to diikuti gerund."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "He used to ___ football after school.",
    "options": [
      "playing",
      "played",
      "play",
      "plays"
    ],
    "answer": 2,
    "explanation": "Used to + V1."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "The problem is too difficult ___ quickly.",
    "options": [
      "solve",
      "to solve",
      "solving",
      "solved"
    ],
    "answer": 1,
    "explanation": "Too + adjective + to infinitive."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "She is old enough ___ alone.",
    "options": [
      "travel",
      "to travel",
      "traveling",
      "traveled"
    ],
    "answer": 1,
    "explanation": "Adjective + enough + to infinitive."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "I do not know ___ he will come.",
    "options": [
      "whether",
      "weather",
      "because of",
      "despite"
    ],
    "answer": 0,
    "explanation": "Whether berarti apakah."
  },
  {
    "section": "Structure",
    "type": "Incomplete Sentence",
    "level": "Intermediate",
    "question": "The teacher explained the lesson ___ everyone could understand it.",
    "options": [
      "so that",
      "because of",
      "despite",
      "instead of"
    ],
    "answer": 0,
    "explanation": "So that menyatakan tujuan."
  }
];
  if (!Array.isArray(appDatabase.toeflSimulation)) appDatabase.toeflSimulation = [];
  const seen = new Set(appDatabase.toeflSimulation.map(q => String(q.question || '') + String(q.audioText || '')));
  questions.forEach(q => { const key = String(q.question || '') + String(q.audioText || ''); if(!seen.has(key)){ seen.add(key); appDatabase.toeflSimulation.push(q); } });
})();
