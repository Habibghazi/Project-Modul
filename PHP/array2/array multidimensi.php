<?php
$dataKaryawan = array
(
array("Ivan","Supervisor",30),
array("Made","Kepala Cabang",33),
array("Langgeng","HRD",32),
array("Mulyana","Bendahara",32)
);
echo $dataKaryawan[0][0]." Sebagai
".$dataKaryawan[0][1].", Umur:
".$dataKaryawan[0][2]."<br>";
echo $dataKaryawan[1][0]." Sebagai
".$dataKaryawan[1][1].", Umur:
".$dataKaryawan[1][2]."<br>";
echo $dataKaryawan[2][0]." Sebagai
".$dataKaryawan[2][1].", Umur:
".$dataKaryawan[2][2]."<br>";
echo $dataKaryawan[3][0]." Sebagai
".$dataKaryawan[3][1].", Umur:
".$dataKaryawan[3][2]."<br>";
echo "==========================<br>";
echo "menggunakan perulangan <br>";

$dataKaryawan = array
(
array("Ivan","Supervisor",30),
array("Made","Kepala Cabang",33),
array("Langgeng","HRD",32),
array("Mulyana","Bendahara",32)
);
for($i=0;$i<=3;$i++){
echo $dataKaryawan[$i][0]."
Sebagai ".$dataKaryawan[$i][1].",
Umur: ".$dataKaryawan[$i][2]."<br>";
}
?>