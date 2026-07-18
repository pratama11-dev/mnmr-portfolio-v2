import type { Copy } from "./types";

export const id: Copy = {
  nav: {
    problem: "Masalah",
    approach: "Pendekatan",
    builder: "Rakit Sistem Anda",
    method: "Metode",
    contact: "Kontak",
  },
  hud: {
    label: "Kesehatan Operasional",
    hint: "Perbaiki operasional sambil jalan — capai 100%.",
    complete: "Sistem online",
  },
  hero: {
    badge: "MAKIR by M.I.N.O — ERP All-in-one",
    title: "Sistem kami menyesuaikan bisnis Anda — bukan sebaliknya.",
    tagline: "ERP untuk operasional yang bertumbuh, dari penawaran sampai pembayaran.",
    body: "Kami membangun sistem yang menghubungkan CRM, penjualan, pengadaan, gudang, dan keuangan dalam satu alur kerja — dirancang dari proses Anda yang sebenarnya, bukan dari template software.",
    ctaPrimary: "Mulai perjalanan",
    ctaSecondary: "Rakit sistem Anda",
    scroll: "Scroll untuk masuk ke operasional",
    facts: [
      { label: "Kepemilikan", value: "Kode & data 100% milik Anda" },
      { label: "Implementasi", value: "Modul per modul, tanpa big-bang" },
      { label: "Dukungan", value: "Tim inti langsung, tanpa reseller" },
    ],
  },
  chaos: {
    kicker: "Tahap 01 — Diagnosis",
    title: "Bisnis jalan terus. Datanya berantakan.",
    body: "Beginilah operasional harian kebanyakan bisnis yang sedang bertumbuh: spreadsheet, grup chat, dan catatan kertas dipaksa bekerja seperti sistem. Sentuh setiap serpihan untuk mendiagnosis masalah sebenarnya.",
    instruction: "Sentuh serpihan untuk mendiagnosis",
    diagnosedLabel: "terdiagnosis",
    artifacts: [
      {
        id: "stock",
        scrap: "stok_FINAL_v3 (2).xlsx",
        title: "Persediaan tidak sesuai kenyataan",
        body: "Angka stok hidup di beberapa spreadsheet yang saling bersaing. Isi gudang dan isi file makin melenceng setiap minggu.",
      },
      {
        id: "followup",
        scrap: "\u201cEh, lead ini yang pegang siapa ya?\u201d",
        title: "Follow-up sering terlewat",
        body: "Prospek tersimpan di chat pribadi. Tanpa pengingat, tanpa penanggung jawab, tanpa riwayat — peluang mati diam-diam di pesan yang tak terbaca.",
      },
      {
        id: "quotation",
        scrap: "Penawaran_rev7_PAKAI-YANG-INI.pdf",
        title: "Quotation dibuat manual dan rapuh",
        body: "Setiap penawaran disalin dari yang sebelumnya. Satu harga usang atau satu baris terlewat, margin hilang sebelum proyek dimulai.",
      },
      {
        id: "procurement",
        scrap: "PO sudah dikirim... kayaknya?",
        title: "Pengadaan tidak terhubung",
        body: "Purchase order tidak tahu apa yang dijanjikan tim sales. Material datang terlambat, dobel, atau tidak sama sekali — dan tak ada yang bisa melacak sebabnya.",
      },
      {
        id: "schedule",
        scrap: "\u201cTim pasang hari ini DI MANA?\u201d",
        title: "Jadwal hidup di kepala orang",
        body: "Jadwal pemasangan dan progres proyek hanya ada di ingatan segelintir orang. Saat mereka tidak masuk, operasional buta.",
      },
      {
        id: "profit",
        scrap: "profit = ??? (tanya finance bulan depan)",
        title: "Profit baru ketahuan belakangan",
        body: "Untung atau rugi sebuah proyek baru diketahui setelah proyek selesai — saat semuanya sudah terlambat untuk diperbaiki.",
      },
    ],
    done: "Diagnosis selesai. Ini bukan enam masalah terpisah — ini satu masalah: tidak ada yang terhubung.",
  },
  barriers: {
    kicker: "Tahap 02 — Jebakan",
    title: "\u201cBeli ERP saja\u201d — lalu kenapa sering gagal?",
    body: "ERP konvensional bisa jadi solusi. Nyatanya, tiga hambatan membuatnya gagal melayani bisnis skala menengah yang sedang bertumbuh.",
    items: [
      {
        title: "Mahal & berlisensi berat",
        body: "Biaya lisensi dan implementasi kelas enterprise dirancang untuk korporasi — sering di luar jangkauan bisnis skala menengah.",
      },
      {
        title: "Kaku & \u201cterserah vendor\u201d",
        body: "Satu vendor mengendalikan lisensi, dukungan, dan semua kustomisasi. Sulit bernegosiasi, lebih sulit lagi keluar.",
      },
      {
        title: "Migrasi berisiko tinggi",
        body: "Pola lamanya big-bang: matikan sistem lama, berdoa sistem baru jalan. Untuk operasional yang sedang berjalan, judi itu tidak bisa diterima.",
      },
    ],
    bridge: "Kami tidak menjual software jadi. Kami membangun sistem di sekitar Anda.",
  },
  principles: {
    kicker: "Tahap 03 — Perbaikan",
    title: "Sambungkan kembali alurnya, satu per satu.",
    body: "Ini operasional Anda sebagai satu pipeline. Setiap sambungan yang ditandai di bawah putus di kebanyakan bisnis. Perbaiki satu per satu untuk melihat cara kami bekerja.",
    instruction: "Sentuh sambungan yang putus untuk memperbaikinya",
    repairLabel: "Putus",
    repairedLabel: "Mengalir",
    stages: ["Prospek", "Penawaran", "Order", "Gudang", "Invoice"],
    items: [
      {
        title: "Proses Anda, bukan template",
        body: "Alur kerja dirancang dari pemetaan proses bisnis Anda yang sebenarnya — bukan dari alur bawaan software.",
      },
      {
        title: "Modular & bertahap",
        body: "Bangun hanya modul yang dibutuhkan sekarang. Kembangkan bertahap seiring pertumbuhan bisnis — tanpa membayar fitur yang menganggur.",
      },
      {
        title: "Pendampingan tim inti langsung",
        body: "Dikerjakan dan didampingi langsung oleh tim inti — bukan dioper ke reseller. Komunikasi cepat, keputusan cepat.",
      },
      {
        title: "Milik Anda sepenuhnya",
        body: "Sistem dan data sepenuhnya milik Anda — kode, akses, dan format data terbuka. Tanpa lock-in, tanpa biaya berlangganan tersembunyi.",
      },
    ],
    done: "Alur tersambung. Satu garis terhubung dari kontak pertama sampai uang masuk.",
  },
  builder: {
    kicker: "Tahap 04 — Perakitan",
    title: "Rakit sistem Anda.",
    body: "Tidak ada dua operasional yang sama, jadi tidak ada dua sistem yang sama. Pilih yang paling terasa sakit, nyalakan modul yang dibutuhkan, dan dapatkan rencana bertahap indikatif — persis seperti cara kami menyusun proyek sungguhan.",
    step1Title: "1 · Di mana sakitnya?",
    step1Body: "Pilih masalah Anda. Kami tandai modul yang menjawabnya.",
    step2Title: "2 · Rakit modulnya",
    step2Body: "Nyalakan atau matikan modul. Modul yang terhubung berbagi satu database — tanpa input ganda di mana pun.",
    step3Title: "3 · Rencana bertahap Anda",
    step3Body: "Rencana implementasi indikatif, dibuat dari pilihan Anda.",
    pains: {
      stock: "Stok tidak pernah sesuai kenyataan",
      followup: "Prospek & follow-up sering terlewat",
      quotation: "Quotation manual & rawan salah",
      procurement: "Pengadaan tidak terhubung dengan penjualan",
      schedule: "Tidak ada visibilitas pengiriman & pemasangan",
      profit: "Profit baru ketahuan setelah proyek selesai",
      overview: "Tidak ada satu gambaran utuh operasional",
    },
    modules: {
      crm: {
        name: "CRM & Sales",
        desc: "Database customer, follow-up prospek, quotation & RAB, sales order.",
      },
      purchasing: {
        name: "Purchasing",
        desc: "PO ke supplier, alur approval, terhubung langsung dengan janji tim sales.",
      },
      warehouse: {
        name: "Gudang",
        desc: "Stok multi-lokasi, barang masuk, transfer, stock opname, kartu stok, alokasi ke proyek.",
      },
      mobile: {
        name: "Gudang Mobile",
        desc: "Scan, terima, transfer, dan opname stok langsung dari HP di lantai gudang.",
      },
      delivery: {
        name: "Pengiriman & Pemasangan",
        desc: "Surat jalan, jadwal instalasi, pelacakan progres proyek.",
      },
      finance: {
        name: "Keuangan & Invoicing",
        desc: "Invoice & termin, monitoring profit per proyek, laporan keuangan.",
      },
      dashboard: {
        name: "Dashboard",
        desc: "Satu gambaran operasional real-time dari semua modul yang Anda jalankan.",
      },
    },
    roadmapModules: {
      bom: "Produksi & BOM",
      workorder: "Work Order",
      qc: "Quality Control",
    },
    roadmapLabel: "Roadmap",
    roadmapNote: "Dibangun bersama partner awal, dari kebutuhan nyata di lapangan.",
    recommendedLabel: "Disarankan untuk masalah Anda",
    requiresLabel: "Butuh modul Gudang",
    effortLabel: "Bobot pengerjaan",
    generateCta: "Buat rencana saya",
    resetCta: "Ulangi",
    emptyPlan: "Pilih minimal satu modul untuk membuat rencana.",
    plan: {
      title: "Rencana implementasi indikatif Anda",
      phase1: "Fase 1 — dampak terbesar lebih dulu",
      phase2: "Fase 2 — perluas alurnya",
      baseline: "Selalu termasuk: desain UI/UX, testing, deployment, dokumentasi.",
      parallelNote: "Berjalan paralel dengan sistem Anda saat ini — operasional tidak pernah berhenti.",
      effortTitle: "Estimasi bobot pengerjaan",
      effortUnit: "mandays",
      elapsedTitle: "Estimasi durasi",
      elapsedUnit: "bulan, dengan paralel run",
      disclaimer: "Sekadar indikasi. Angka sebenarnya lahir dari asesmen proses Anda — dan bagian itu tanggung jawab kami.",
      cta: "Minta asesmen sungguhan",
    },
  },
  method: {
    kicker: "Tahap 05 — Metode",
    title: "Implementasi bertahap. Operasional tidak pernah berhenti.",
    body: "Lima langkah, tanpa big-bang. Produksi dan pengiriman Anda tetap berjalan normal sepanjang proses.",
    steps: [
      {
        title: "Asesmen",
        body: "Kami memetakan proses bisnis dan data existing Anda. Sistem dirancang dari sini — bukan dari template.",
      },
      {
        title: "Modul prioritas",
        body: "Kami bangun modul berdampak tercepat lebih dulu, agar manfaat terasa dalam hitungan minggu, bukan tahun.",
      },
      {
        title: "Paralel run",
        body: "Sistem lama dan sistem baru berjalan berdampingan. Tidak ada yang dimatikan sebelum angkanya cocok.",
      },
      {
        title: "Cutover bertahap",
        body: "Perpindahan penuh per modul, sesuai kecepatan Anda — tidak pernah sekaligus.",
      },
      {
        title: "Optimasi",
        body: "Penyesuaian berkelanjutan seiring bisnis berkembang. Sistem terus beradaptasi dengan Anda.",
      },
    ],
    principle: "Prinsip utama: tidak ada migrasi big-bang. Titik.",
  },
  comparison: {
    kicker: "Posisi Kami",
    title: "Mengapa bukan SAP? Mengapa bukan Odoo?",
    body: "Perbandingan yang adil dengan alternatif yang layak Anda pertimbangkan.",
    aspects: ["Kesesuaian proses", "Model biaya", "Migrasi", "Dukungan", "Ketergantungan vendor"],
    columns: {
      legacy: {
        name: "SAP / ERP lama",
        rows: [
          "Bisnis menyesuaikan sistem",
          "Lisensi & langganan mahal",
          "Big-bang, berisiko tinggi",
          "Vendor besar, birokratis",
          "Tinggi — lock-in",
        ],
      },
      openSource: {
        name: "Odoo / ERPNext",
        rows: [
          "Perlu kustomisasi modul pihak ketiga",
          "Murah di awal, biaya kustomisasi menumpuk",
          "Tergantung partner implementasi",
          "Komunitas / partner pihak ketiga",
          "Sedang",
        ],
      },
      makir: {
        name: "MAKIR",
        rows: [
          "Dibangun dari proses Anda sejak awal",
          "Proyek transparan — sistem milik Anda penuh",
          "Bertahap, paralel dengan sistem lama",
          "Tim inti langsung",
          "Rendah — kode & data di tangan Anda",
        ],
      },
    },
  },
  vision: {
    kicker: "Visi",
    title: "Dari proyek menjadi platform.",
    body: "Setiap proyek partner awal membangun fondasi MAKIR sebagai platform ERP — dan partner awal memegang posisi istimewa di dalamnya.",
    milestones: [
      {
        label: "Milestone 1",
        body: "Partner pertama live: modul prioritas berjalan paralel dengan sistem lama.",
      },
      {
        label: "Milestone 2",
        body: "Inti lengkap: purchasing sampai invoicing terhubung dalam satu alur.",
      },
      {
        label: "Milestone 3",
        body: "Cutover penuh partner awal, dashboard operasional terpadu.",
      },
      {
        label: "Milestone 4",
        body: "MAKIR sebagai platform: Produksi & BOM, klien baru onboard.",
      },
    ],
    perksTitle: "Keuntungan partner awal",
    perks: [
      "Harga terkunci untuk seluruh modul selanjutnya",
      "Dukungan prioritas langsung dari tim inti",
      "Ikut menentukan arah pengembangan platform",
      "Sistem paling matang di industrinya — karena dibangun dari proses Anda",
    ],
  },
  offer: {
    kicker: "Penawaran",
    title: "Risiko minimal, posisi istimewa.",
    body: "Penawaran partner awal memang sengaja tidak seimbang — condong ke Anda.",
    columns: [
      {
        title: "Yang Anda dapatkan",
        items: [
          "Modul prioritas dengan ketentuan partner awal",
          "Berjalan berdampingan dengan sistem lama — tanpa gangguan",
          "Dukungan langsung tim inti selama 12 bulan pertama",
          "Ketentuan terkunci untuk setiap modul berikutnya",
        ],
      },
      {
        title: "Yang kami minta",
        items: [
          "Masukan rutin selama pengembangan (±2 jam per bulan)",
          "Izin menjadi studi kasus setelah sistem terbukti berjalan",
          "Data & akses untuk asesmen proses di awal",
        ],
      },
      {
        title: "Yang Anda risikokan",
        items: [
          "Hampir tidak ada — data Anda dapat diekspor kapan saja, dalam format terbuka",
          "Tanpa komitmen berlangganan jangka panjang",
          "Sistem lama tetap berjalan sampai Anda yakin sepenuhnya",
        ],
      },
    ],
  },
  contact: {
    kicker: "Tahap Akhir",
    title: "Let's make anything and everything easier, together.",
    body: "Ceritakan bagaimana operasional Anda benar-benar berjalan. Kami akan bilang — jujur — apa yang paling layak dibangun lebih dulu.",
    cta: "Bicara dengan tim inti",
    email: "adithyanuzpratamaputra@gmail.com",
    lockedTitle: "Pemeriksaan sistem belum selesai",
    lockedBody: "Anda bisa menghubungi kami kapan saja — tapi gambaran utuhnya ada di atas. Diagnosis kekacauannya, perbaiki alurnya, rakit sistem Anda.",
    onlineTitle: "SISTEM ONLINE — 100%",
    onlineBody: "Anda sudah melihat satu putaran penuh: kekacauan terdiagnosis, alur diperbaiki, sistem terpasang. Persis seperti itulah rasanya bekerja dengan kami — minus confetti-nya.",
  },
  footer: {
    tagline: "Sistem kami menyesuaikan bisnis Anda — bukan sebaliknya.",
    rights: "MAKIR by M.I.N.O. Hak cipta dilindungi.",
  },
};
