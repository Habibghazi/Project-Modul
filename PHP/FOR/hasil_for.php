<?php
$jumlah = $_POST['jumlah'];
for($i=1;$i<=$jumlah;$i++)
{
echo "File ke-$i : <input type='file' name='nama$i'> <br>";
}
?>