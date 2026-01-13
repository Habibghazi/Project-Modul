<?php
session_start();
include "koneksi.php"; 

$username = $_POST['username'];
$password = $_POST['password'];

if (!empty($username) && !empty($password)) {
    // Menggunakan variabel $conn yang benar dari koneksi.php
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    $query = "SELECT * FROM admin WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);
    $cek = mysqli_num_rows($result);

    if ($cek > 0) {
        $_SESSION['username'] = $username;
        header("location:home.php");
    } else {
        echo "Username atau Password tidak ditemukan. <a href='login.php'>Kembali</a>";
    }
} else {
    echo "Input tidak boleh kosong. <a href='login.php'>Kembali</a>";
}
?>