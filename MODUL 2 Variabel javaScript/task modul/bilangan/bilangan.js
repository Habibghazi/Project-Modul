function ambilNilai() {
    var bil1 = parseFloat(document.fform.bilangan1.value);
    var bil2 = parseFloat(document.fform.bilangan2.value);

    if (isNaN(bil1)) bil1 = 0;
    if (isNaN(bil2)) bil2 = 0;

    return { bil1: bil1, bil2: bil2 };
}

function jumlah() {
    var nilai = ambilNilai();
    var hasil = nilai.bil1 + nilai.bil2;
    alert("Hasil Penjumlahan = " + hasil);
}

function kali() {
    var nilai = ambilNilai();
    var hasil = nilai.bil1 * nilai.bil2;
    alert("Hasil Perkalian = " + hasil);
}

function bagi() {
    var nilai = ambilNilai();
    
    if (nilai.bil2 === 0) {
        alert("Pembagian dengan nol tidak diperbolehkan.");
    } else {
        var hasil = nilai.bil1 / nilai.bil2;
        alert("Hasil Pembagian = " + hasil);
    }
}