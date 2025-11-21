
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var bulan = ["Januari","Februari","Maret","April","Mei","Juni",
             "Juli","Agustus","September","Oktober","November","Desember"];

function updateDateTime() {
    var t = new Date();

    var hari_ini = hari[t.getDay()];
    var tanggal = t.getDate();
    var bulan_ini = bulan[t.getMonth()];
    var tahun = t.getFullYear();

    var jam = t.getHours();
    var menit = t.getMinutes();
    var detik = t.getSeconds();

    // Tampilkan ke HTML
    document.getElementById("tanggal").innerHTML =
        "Sekarang adalah hari: <b>" + hari_ini + "</b>, tanggal <b>" +
        tanggal + " " + bulan_ini + " " + tahun + "</b>";

    document.getElementById("jam").innerHTML =
        "Jam sekarang: <b>" + jam + ":" + menit + ":" + detik + "</b>";
}

// Update setiap detik
setInterval(updateDateTime, 1000);

// Tampilkan pertama kali
updateDateTime();
