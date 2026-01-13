<html>
<head>
    <title>Aritmatika & Perbandingan PHP</title>
</head>
<body>
<?php
    // Inisialisasi Variabel
    $bil1 = 10;
    $bil2 = 2;

    // --- BAGIAN 1: OPERASI ARITMATIKA ---
    $tambah   = $bil1 + $bil2;
    $kurang   = $bil1 - $bil2;
    $kali     = $bil1 * $bil2;
    $bagi     = $bil1 / $bil2;
    $modulus  = $bil1 % $bil2; 

    echo "<h2>Hasil Operasi Aritmatika</h2>";
    echo "Bilangan 1: $bil1 <br>";
    echo "Bilangan 2: $bil2 <br>";
    echo "<hr>";
    
    echo "Hasil Penjumlahan ($bil1 + $bil2) = $tambah <br>";
    echo "Hasil Pengurangan ($bil1 - $bil2) = $kurang <br>";
    echo "Hasil Perkalian ($bil1 * $bil2) = $kali <br>";
    echo "Hasil Pembagian ($bil1 / $bil2) = $bagi <br>";
    echo "Sisa Hasil Bagi ($bil1 % $bil2) = $modulus <br>";

    echo "<br><br>"; 

   
    echo "<h2>Hasil Operasi Perbandingan</h2>";
    
    $sama_dengan      = $bil1 == $bil2;
    $tidak_sama       = $bil1 != $bil2;
    $lebih_besar_sama = $bil1 >= $bil2;
    $lebih_kecil      = $bil1 < $bil2;

    echo "Apakah $bil1 == $bil2 ? Hasilnya: $sama_dengan <br>";
    echo "Apakah $bil1 != $bil2 ? Hasilnya: $tidak_sama <br>";
    echo "Apakah $bil1 >= $bil2 ? Hasilnya: $lebih_besar_sama <br>";
    echo "Apakah $bil1 < $bil2 ? Hasilnya: $lebih_kecil <br>";
    
    echo "<p><i>Catatan: Jika hasil 1 berarti <b>True</b> (Benar), jika kosong berarti <b>False</b> (Salah).</i></p>";
?>
</body>
</html>