<?php
$namaSiswa[0] = "Budi";
$namaSiswa[1] = "Dadang";
$namaSiswa[2] = "Made";
echo "Nama Siswa :" , $namaSiswa[0]."<br>";
echo "Nama Siswa :" , $namaSiswa[1]."<br>";
echo "Nama Siswa :" , $namaSiswa[2]."<br>";

echo "==========================<br>";

for($i=0;$i<count($namaSiswa);$i++)
echo "Nama Siswa :".$namaSiswa[$i]."<br>";
?>