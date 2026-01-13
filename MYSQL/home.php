<?php
session_start();

// Hanya cek username, karena password tidak diset di proses_login.php
if (isset($_SESSION['username'])) {
    echo "<h3>Selamat Datang!</h3>";
    echo "SESSION USERNAME = " . $_SESSION['username'];
    echo "<br><br>";
    echo "<a href='logout.php'>LOGOUT</a>";
} else {
    echo "HALAMAN TIDAK BISA DIAKSES KARENA BELUM LOGIN. <a href='login.php'>Login di sini</a>";
}
?>