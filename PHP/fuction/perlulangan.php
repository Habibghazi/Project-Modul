<?php
// Membuat Function
function ulang($angka, $tulisan)
{
for($i=0; $i<$angka; $i++)
{
echo "$tulisan <br>";
}
}
// Menggunakan atau memanggil function
// menampilkan tulisan sebanyak 10 kali
ulang(10,"Panduan Praktis Pemrograman PHP Untuk Pemula");
?>