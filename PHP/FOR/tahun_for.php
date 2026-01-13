<?php
echo "Tahun Angkatan : <select name='tahun'>";
for($tahun=1930;$tahun<=2026;$tahun++)
{
echo "<option value='$tahun'>$tahun</option>";
}
echo "</select>";
?>