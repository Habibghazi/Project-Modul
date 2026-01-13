<?php
$nim = array("A0197008","A0197009","A0197005","A0197002","A0197003");
$nama = array("Andi","Budi","Wati","Tono","Yudi");
array_multisort($nim, SORT_ASC, $nama);
for($i=0;$i<=count($nim)-1;$i++){
echo $nim[$i]." ".$nama[$i]."<br>";
}
?>