<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "db_2025";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Pesan sukses dihapus agar tidak muncul di halaman login
?>