<?php

setcookie("nama_pengguna", "budi", time() + 3600); 


if (isset($_COOKIE['nama_pengguna'])) {
    echo $_COOKIE['nama_pengguna'];
} else {
    echo "Cookie baru saja dibuat. Silakan refresh halaman untuk melihat hasilnya.";
}
?>