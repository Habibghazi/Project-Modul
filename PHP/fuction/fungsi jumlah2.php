<?php
function jumlah($a,$b)
{
$c =$a + $b;
return $c;
}
$hasil = jumlah(jumlah(3,5),jumlah(7,6));
echo "Hasil Penjumlahan : " .$hasil;
?>