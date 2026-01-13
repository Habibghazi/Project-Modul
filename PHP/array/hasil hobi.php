<?php
echo "Hobi yang kamu pilih : <br>";
$hobi = $_POST['hobi'];
// Hitung jumlah hobi yang dicek atau dipilih
$jumlah_hobi = count($hobi);
for($i=0; $i<$jumlah_hobi; $i++)
{
echo "$hobi[$i] <br>";
}
?>