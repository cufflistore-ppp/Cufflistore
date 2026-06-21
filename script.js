
// Inisialisasi Swiper Slider
var swiper = new Swiper(".mySwiper", {
    loop: true, 
    speed: 600, 
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
});

// Animasi Menampilkan Sticky Navbar saat Scroll
window.addEventListener('scroll', function() {
    const stickyHeader = document.getElementById('sticky-header');
    if (window.scrollY > 150) {
        stickyHeader.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
        stickyHeader.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
        stickyHeader.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        stickyHeader.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
    }
});

// CONFIG BOT TELEGRAM
const TELEGRAM_TOKEN = "8991985702:AAGicJk8zF9Md2dSbFvxzsf12BcdH1yv9QU"; 
const TELEGRAM_CHAT_ID = "8817516070"; 

// State Aplikasi
let currentGameKey = "ff";
let currentGameLabel = "Free Fire";
let selectedNominal = "";
let selectedHarga = "";
let selectedPayMethod = "DANA";

// Data Rekening Admin
const adminAccounts = {
    "DANA": { number: "087722626689", name: "a.n MIMI" },
    "GOPAY": { number: "085771305771", name: "a.n CUFFLI ALL GEME" },
    "QRIS": { number: "Scan QRIS Utama", name: "a.n TOKO CUFFLI" }
};

// Data Nominal Paket Game
const mlData = [{d:"2 Diamonds", p:"Rp2.000"}, {d:"5 Diamonds", p:"Rp3.000"}, {d:"12 Diamonds", p:"Rp4.000"}, {d:"19 Diamonds", p:"Rp5.500"}, {d:"28 Diamonds", p:"Rp8.000"}, {d:"59 Diamonds", p:"Rp16.000"}, {d:"112 Diamonds", p:"Rp30.000"}, {d:"172 Diamonds", p:"Rp46.000"}, {d:"381 Diamonds", p:"Rp105.000"}, {d:"429 Diamonds", p:"Rp115.000"}, {d:"1136 Diamonds", p:"Rp294.000"},{d:"wdp", p:"Rp35.000"},{d:"wdp ×2", p:"Rp70.000"},{d:"wdp ×3", p:"Rp100.000"},{d:"wdp ×4", p:"Rp135.000"},{d:"wdp ×5", p:"Rp160.000"},{d:"stalight membership (300 diamonds)", p:"Rp95.000"},{d:"stalight membership plus (750 diamonds)", p:"Rp120.000"}];
const bsData = [{d:"100 + 5 Golds", p:"Rp11.000"}, {d:"300 + 20 Golds", p:"Rp35.000"}, {d:"500 + 40 Golds", p:"Rp58.000"}, {d:"600 + 45 Golds", p:"Rp70.000"}, {d:"800 + 60 Golds", p:"Rp93.000"}, {d:"1000 + 100 Golds", p:"Rp117.000"}, {d:"1200 + 110 Golds", p:"Rp140.000"}, {d:"1500 + 140 Golds", p:"Rp175.000"}, {d:"2000 + 260 Golds", p:"Rp234.000"}, {d:"2500 + 300 Golds", p:"Rp292.000"}];
const ffData = [{d:"5 Diamonds", p:"Rp1.500"}, {d:"10 Diamonds", p:"Rp2.000"}, {d:"12 Diamonds", p:"Rp2.200"}, {d:"15 Diamonds", p:"Rp3.000"}, {d:"20 Diamonds", p:"Rp4.000"}, {d:"25 Diamonds", p:"Rp5.000"}, {d:"50 Diamonds", p:"Rp8.000"}, {d:"70 Diamonds", p:"Rp10.000"}, {d:"140 Diamonds", p:"Rp19.000"}, {d:"355 Diamonds", p:"Rp49.000"}, {d:"720 Diamonds", p:"Rp99.000"}, {d:"1450 Diamonds", p:"Rp197.000"}];
const pubgData = [{d:"60 UC global", p:"Rp20.000"},{d:"120 uc global", p:"35.000"},{d:"300 + 25 uc global", p:"Rp82.000"},{d:"325 +  UC global", p:"Rp98.000"},{d:"600 + 60 uc global", p:"Rp160.000"},{d:"660 + 120 uc global", p:"190.000"},{d:"1.500 + 300 uc global", p:"390.000"},{d:"2.100 + 360 uc global", p:"557.000"},{d:"3.000 + 850 uc global", p:"778.000"},{d:"6.000 + 2.100 uc global", p:"1.563.000"}];
const vloData = [{d:"472 vp", p:"Rp51.000"}, {d:"1.000 vp", p:"Rp101.000"},{d:"1.475 vp", p:"Rp150.000"},{d:"2.050 vp", p:"Rp200.000"},{d:"2.525 vp", p:"Rp249.000"},{d:"3.050 vp", p:"Rp300.000"},{d:"3.650 vp", p:"Rp345.000"},{d:"4.125 vp", p:"Rp395.000"},{d:"4.650 vp", p:"445.000"},{d:"5.350 vp", p:"Rp496.000"},{d:"5.700 vp", p:"Rp544.000"},{d:"5.825 vp", p:"Rp550.000"},{d:"6.350 vp", p:"Rp599.000"},{d:"7.400 vp", p:"Rp694.000"},{d:"9.000 vp", p:"Rp840.000"},{d:"11.000 vp", p:"Rp974.000"},{d:"11.475 vp", p:"Rp1.023.000"}];
const codData = [{d:"31 cp", p:"Rp10.000"}, {d:"63 cp", p:"Rp13.000"},{d:"128 cp", p:"Rp25.000"},{d:"321 cp", p:"Rp60.000"},{d:"645 cp", p:"Rp105.000"},{d:"800 cp", p:"Rp125.000"},{d:"1.373 cp", p:"Rp220.000"},{d:"2.060 cp", p:"Rp320.000"},{d:"2.750 cp", p:"Rp370.000"},{d:"3.564 cp", p:"Rp520.000"},{d:"5.618 cp",p:"Rp720.000"},{d:"7.656 cp", p:"Rp1.000.000"}];
const kcData = [
    {d:"4 + 6 Diamonds", p:"Rp 9.000"}, {d:"10 + 16 Diamonds", p:"Rp 19.000"}, {d:"10 + 16 Diamonds x3", p:"Rp 56.000"},
    {d:"50 + 82 Diamonds", p:"Rp 85.000"}, {d:"100 + 168 Diamonds", p:"Rp 166.000"}, {d:"50 + 82 Diamonds x3", p:"Rp 249.000"},
    {d:"300 + 510 Diamonds", p:"Rp 486.000"}, {d:"100 + 168 Diamonds x3", p:"Rp 492.000"}, {d:"500 + 860 Diamonds", p:"Rp 804.000"},
    {d:"300 + 510 Diamonds x3", p:"Rp 1.452.000"}, {d:"1000 + 1750 Diamonds", p:"Rp 1.603.000"}, {d:"500 + 860 Diamonds x3", p:"Rp 2.422.000"},
    {d:"1000 + 1750 Diamonds x3", p:"Rp 4.811.000"}, {d:"Weekly Card", p:"Rp 9.000"}, {d:"Monthly Card", p:"Rp 36.000"},
    {d:"Diamonds Weekly Card", p:"Rp 36.000"}, {d:"Yearly Card", p:"Rp 310.000"}, {d:"Lunar Blessing", p:"Rp 136.000"}
];
const hokData = [{d:"16 Tokens", p:"Rp5.000"}, {d:"80 Tokens", p:"Rp18.000"},{d:"240 Tokens", p:"Rp48.000"},{d:"400 Tokens", p:"Rp79.000"},{d:"560 Tokens", p:"Rp109.000"},{d:"800 + 30 Tokens", p:"Rp152.000"},{d:"1.200 + 45 Tokens", p:"Rp225.000"},{d:"2.400 + 108 Tokens", p:"Rp448.000"},{d:"4000 + 180 Tokens", p:"744.000"},{d:"8000 + 360 Tokens", p:"Rp1.477.000"},{d:"weekly card", p:"Rp19.000"},{d:"weekly card plus", p:"Rp52.000"}];
const fcData = [
    {d:"40 FC Points", p:"Rp 8.000"}, {d:"100 FC Points", p:"Rp 18.000"}, {d:"520 FC Points", p:"Rp 77.000"},
    {d:"1070 FC Points", p:"Rp 151.000"}, {d:"2200 FC Points", p:"Rp 308.000"}, {d:"5750 FC Points", p:"Rp 738.000"},
    {d:"12000 FC Points", p:"Rp 1.470.000"}, {d:"39 Silver", p:"Rp 8.000"}, {d:"99 Silver", p:"Rp 18.000"},
    {d:"499 Silver", p:"Rp 77.000"}, {d:"999 Silver", p:"Rp 151.000"}, {d:"1999 Silver", p:"Rp 308.000"},
    {d:"4999 Silver", p:"Rp 738.000"}, {d:"9999 Silver", p:"Rp 1.470.000"}
];
const gidata = [
   {d:"60 crystals", p:"Rp20.000"},{d:"300 +30 crystals", p:"Rp100.000"},{d:"980 + 110 crystals", p:"Rp280.000"},{d:"1.980 + 260 crystals", p:"Rp520.000"},{d:"3.280 + 600 crystals", p:"Rp850.000"},{d:"6.480 + 1.600 crystals", p:"Rp1.700.000"},{d:"belessing welkin moon", p:"Rp110.000"}];
const mcdata = [
   {d:"Minecraft 1720 Minecoins", p:"Rp170.000"},{d:"Minecraft 3500 Minecoins", p:"Rp299.000"}];
const rbdata = [
   {d:"1 robux [5 hari]", p:"Rp2.500"},{d:"5 robux [5 hari]", p:"Rp3.500"},{d:"10 robux [5 hari]", p:"Rp4.500"},{d:"15 [5 hari]", p:"Rp5.000"},{d:"20 robux [5 hari]", p:"Rp6.000"},{d:"25 robux [5 hari]", p:"Rp6.500"},{d:"50 robux [5 hari]", p:"Rp11.000"},{d:"100 robux [5 hari]", p:"Rp18.000"},{d:"200 robux [5 hari]", p:"Rp34.000"},{d:"300 robux [5 hari]", p:"Rp49.000"},{d:"400 robux [5 hari]", p:"Rp60.000"},{d:"500 robux [5 hari]", p:"Rp79.000"},{d:"600 robux [5 hari]", p:"Rp85.000"},{d:"700 robux [5 hari]", p:"Rp111.000"},{d:"800 robux [5 hari]", p:"Rp140.000"},{d:"900 robux[5 hari]", p:"Rp150.000"},{d:"1.000 robux [5 hari]", p:"Rp180.000"}];

// Fungsi untuk membuat elemen kartu produk di HTML
function renderCards(data, elementId, gameLabel, uniquePrefix, iconClass = "fa-gem") {
    const container = document.getElementById(elementId);
    if(!container) return;
    container.innerHTML = data.map((item, idx) => {
        const cardId = `${uniquePrefix}-card-${idx}`;
        return `
            <div onclick="selectProduct('${cardId}', '${item.d}', '${item.p}')" id="${cardId}" class="product-card bg-gray-950/40 border border-gray-900 rounded-2xl p-4.5 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-md py-4">
                <div>
                    <div class="w-8 h-8 rounded-xl bg-gray-900/80 border border-gray-800 text-cyan-400 flex items-center justify-center text-xs font-bold mb-3.5 shadow-inner group-hover:bg-cyan-950/30 group-hover:border-cyan-500/30 transition-all"><i class="${iconClass}"></i></div>
                    <h4 class="font-bold text-sm text-gray-300 group-hover:text-white transition-colors tracking-wide">${item.d}</h4>
                </div>
                <p class="text-xs font-black text-amber-400 mt-3 tracking-wide">${item.p}</p>
            </div>
        `;
    }).join('');
}

// Menjalankan Render Kartu Produk saat Website Dimuat
renderCards(ffData, 'pane-ff', 'Free Fire', 'ff', 'fa-solid fa-gem');
renderCards(mlData, 'pane-ml', 'Mobile Legends', 'ml', 'fa-solid fa-gem');
renderCards(bsData, 'pane-bs', 'Blood Strike', 'bs', 'fa-solid fa-coins');
renderCards(pubgData, 'pane-pubg', 'PUBG Mobile', 'pubg', 'fa-solid fa-gun');
renderCards(vloData, 'pane-vlo', 'Valorant', 'vlo', 'fa-solid fa-crosshairs');
renderCards(codData, 'pane-cod', 'Call Of Duty', 'cod', 'fa-solid fa-skull');
renderCards(kcData, 'pane-kc', "King's Chalce", 'kc', 'fa-solid fa-gem');
renderCards(hokData, 'pane-hok', 'Honor Of Kings', 'hok', 'fa-solid fa-shield-halved');
renderCards(fcData, 'pane-fc', 'FC Mobile', 'fc', 'fa-solid fa-soccer-ball');
renderCards(gidata, 'pane-gi', 'Genshin Impact', 'gi', 'fa-solid fa-dragon')
renderCards(mcdata, 'pane-mc', 'Minecraft', 'mc', 'fa-solid fa-cube')
renderCards(rbdata, 'pane-rb', 'Roblox' 'rb', 'fa-solid fa-cubes')

// Fungsi Menampilkan Kustomisasi Alert Modal Elegan
function showCustomAlert(title, message, isSuccess = true) {
    const modal = document.getElementById('custom-alert-modal');
    const iconBg = document.getElementById('alert-icon-bg');
    const icon = document.getElementById('alert-icon');
    const titleEl = document.getElementById('alert-title');
    const msgEl = document.getElementById('alert-message');

    titleEl.innerText = title;
    msgEl.innerText = message;

    if (isSuccess) {
        iconBg.className = "w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
        icon.className = "fa-solid fa-circle-check animate-bounce";
    } else {
        iconBg.className = "w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-lg bg-red-500/10 text-red-400 border border-red-500/20";
        icon.className = "fa-solid fa-circle-exclamation animate-shake";
    }

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('div').classList.remove('scale-95');
}

function closeAlertModal() {
    const modal = document.getElementById('custom-alert-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('div').classList.add('scale-95');
}

// Fungsi Memilih Produk Item Nominal
function selectProduct(cardId, nominal, harga) {
    document.querySelectorAll('.product-card').forEach(el => {
        el.className = "product-card bg-gray-950/40 border border-gray-900 rounded-2xl p-4 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-md py-4";
    });
    const activeCard = document.getElementById(cardId);
    if(activeCard) {
        activeCard.className = "product-card bg-cyan-950/10 border-2 border-cyan-500 rounded-2xl p-4 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl shadow-cyan-500/5 py-4";
    }
    selectedNominal = nominal;
    selectedHarga = harga;

    const accountSection = document.getElementById('account-section');
    if (accountSection) {
        accountSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Fungsi Navigasi Mengganti Tampilan List Game
function switchGame(gameKey, scrollToSection = false) {
    currentGameKey = gameKey;
    selectedNominal = ""; selectedHarga = "";

    const labels = {ff:"Free Fire", ml:"Mobile Legends", bs:"Blood Strike", pubg:"PUBG Mobile", vlo:"Valorant", cod:"Call Of Duty", kc:"King's Chalce", hok:"Honor Of Kings", fc:"FC Mobile", gi:'Genshin Impact', mc:'Minecraft', rb:'Roblox'};
    currentGameLabel = labels[gameKey] || gameKey;

    document.querySelectorAll('.game-pane').forEach(el => el.classList.add('hidden'));
    const targetPane = document.getElementById(`pane-${gameKey}`);
    if(targetPane) targetPane.classList.remove('hidden');

    document.querySelectorAll('.product-card').forEach(el => {
        el.className = "product-card bg-gray-950/40 border border-gray-900 rounded-2xl p-4 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-md py-4";
    });

    document.querySelectorAll('.game-nav-btn > div').forEach(div => {
        div.className = "w-16 h-16 rounded-2xl overflow-hidden border-2 border-transparent shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-gray-700";
    });
    document.querySelectorAll('.game-nav-btn > span').forEach(span => {
        span.className = "text-[11px] font-bold mt-2.5 text-gray-400 transition-colors group-hover:text-white line-clamp-2";
    });

    const activeBtn = document.getElementById(`btn-${gameKey}`);
    if (activeBtn) {
        activeBtn.querySelector('div').className = "w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-xl transition-all duration-300 group-hover:scale-105";
        activeBtn.querySelector('span').className = "text-[11px] font-bold mt-2.5 text-cyan-400 transition-colors line-clamp-2";
    }

    const zoneWrapper = document.getElementById('zone-id-wrapper');
    if (gameKey === 'ml') {
        zoneWrapper.classList.remove('hidden');
    } else {
        zoneWrapper.classList.add('hidden');
        document.getElementById('zone-id').value = "";
    }
   const zoneWrapper = document.getElementById('choone server-uid-wrapper');
    if (gameKey === 'gi') {
        zoneWrapper.classList.remove('hidden');
    } else {
        zoneWrapper.classList.add('hidden');
        document.getElementById('choone server-uid').value = "";
    }

    if (scrollToSection) {
        const targetSection = document.getElementById('nominal-section');
        if (targetSection) { 
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
    }
}

// Fungsi Memilih Metode Pembayaran
function selectPaymentMethod(methodName, element) {
    selectedPayMethod = methodName;
    document.querySelectorAll('.pay-card').forEach(el => {
        el.className = "pay-card border border-gray-800 bg-gray-950/30 rounded-2xl py-5 text-center cursor-pointer font-black text-2xl tracking-widest text-gray-400 hover:border-gray-700 hover:bg-gray-950/50 transition-all duration-300 flex items-center justify-center gap-2";
    });
    element.className = "pay-card border-2 border-emerald-500 bg-gray-950/50 rounded-2xl py-5 text-center cursor-pointer font-black text-2xl tracking-widest text-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/5 flex items-center justify-center gap-2";
}

// Fungsi Validasi & Membuat Tampilan Invoice Transaksi 
function prosesPembayaran() {
    if (!selectedNominal || !selectedHarga) {
        showCustomAlert("Pilih Nominal", "Silakan pilih paket koin/diamond kamu terlebih dahulu di Langkah 1!", false);
        return;
    }

    const nick = document.getElementById('player-nickname').value.trim();
    const idPlayer = document.getElementById('player-id').value.trim();
    const idZone = document.getElementById('zone-id').value.trim();

    if (!nick) {
        showCustomAlert("Nickname Kosong", "Mohon masukkan Nickname akun game kamu!", false);
        return;
    }
    if (!idPlayer) {
        showCustomAlert("ID Akun Kosong", "Mohon lengkapi kolom User ID game kamu!", false);
        return;
    }
    if (currentGameKey === 'ml' && !idZone) {
        showCustomAlert("Zone ID Kosong", "Khusus Mobile Legends, mohon isi Zone ID dalam kurung kamu!", false);
        return;
    }

    let akunTujuan = idPlayer;
    if (currentGameKey === 'ml') { akunTujuan += ` (${idZone})`; }

    document.getElementById('inv-game').innerText = currentGameLabel;
    document.getElementById('inv-item').innerText = selectedNominal;
    document.getElementById('inv-id').innerText = akunTujuan;
    document.getElementById('inv-nick').innerText = nick;
    document.getElementById('inv-method').innerText = selectedPayMethod;
    document.getElementById('inv-total').innerText = selectedHarga;

    const currentAcc = adminAccounts[selectedPayMethod] || { number: "-", name: "-" };
    document.getElementById('admin-account-number').innerText = currentAcc.number;
    document.getElementById('admin-account-name').innerText = currentAcc.name;

    const qrisContainer = document.getElementById('qris-image-container');
    if (selectedPayMethod === 'QRIS') {
        qrisContainer.classList.remove('hidden');
    } else {
        qrisContainer.classList.add('hidden');
    }

    const invWrapper = document.getElementById('invoice-receipt-wrapper');
    invWrapper.classList.remove('hidden');
    invWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Fungsi Mengirim Data Order ke API Bot Telegram
function kirimKeTelegram() {
    const nick = document.getElementById('player-nickname').value.trim();
    const idPlayer = document.getElementById('player-id').value.trim();
    const idZone = document.getElementById('zone-id').value.trim();
    
    let akunTujuan = idPlayer;
    if (currentGameKey === 'ml') { akunTujuan += ` (${idZone})`; }

    const pesan = `🛒 *PESANAN BARU MASUK*\n\n` +
                  `🎮 *Game:* ${currentGameLabel}\n` +
                  `💎 *Paket:* ${selectedNominal}\n` +
                  `👤 *Nickname:* ${nick}\n` +
                  `🆔 *ID Akun:* \`${akunTujuan}\`\n` +
                  `💳 *Metode:* ${selectedPayMethod}\n` +
                  `💵 *Harga:* ${selectedHarga}\n\n` +
                  `⚡ _Status: User menyatakan sudah transfer ke ${selectedPayMethod}. Mohon segera dicek!_`;

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: pesan, parse_mode: "Markdown" })
    })
    .then(res => {
        if(res.ok) {
            showCustomAlert("Berhasil Kirim!", "Pesanan Anda sukses diteruskan ke Admin. Proses top-up segera diproses!", true);
        } else {
            showCustomAlert("Pengiriman Gagal", "Terjadi kegagalan komunikasi dengan bot. Silakan laporkan manual.", false);
        }
    })
    .catch(err => {
        console.error("Telegram error:", err);
        showCustomAlert("Kesalahan Jaringan", "Gagal menghubungi server Telegram. Periksa koneksi internet Anda.", false);
    });
}

