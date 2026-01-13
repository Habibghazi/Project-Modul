<?php
echo "Pilih Tahun : <select name='tahun'>";
$tahun = 1930;
while($tahun <= 2017)
{
echo "<option value='$tahun'>$tahun</option>";
$tahun++;
}
echo "</select>";
?>