<html>
<head>
    <title>Method Get Proses</title>
</head>
<body>
    <?php 

        $ambil_nama          = $_GET["nama"];
        $ambil_NIM           = $_GET["nim"];
        $ambil_Jenis_kelamin = $_GET["jekel"];
        $ambil_tempat_lahir  = $_GET["tempat_lahir"];
        $ambil_tanggal_lahir = $_GET["tanggal_lahir"];
        $ambil_nilai_quis    = $_GET["quis"];
        $ambil_nilai_tugas   = $_GET["tugas"];
        $ambil_nilai_uts     = $_GET["UTS"];
        $ambil_nilai_uas     = $_GET["UAS"];

        $nilai_akhir = ($ambil_nilai_quis * 0.1) + ($ambil_nilai_tugas * 0.2) + ($ambil_nilai_uts * 0.3) + ($ambil_nilai_uas * 0.4);

       
        echo "<h2>Data Mahasiswa</h2>";
        echo "Nama: $ambil_nama <br>";
        echo "NIM: $ambil_NIM <br>";
        echo "Jenis Kelamin: $ambil_Jenis_kelamin <br>";
        echo "Tempat, Tanggal Lahir: $ambil_tempat_lahir, $ambil_tanggal_lahir <br>";
        
        echo "<h2>Daftar Nilai</h2>";
        echo "Nilai Quis (10%): $ambil_nilai_quis <br>";
        echo "Nilai Tugas (20%): $ambil_nilai_tugas <br>";
        echo "Nilai UTS (30%): $ambil_nilai_uts <br>";
        echo "Nilai UAS (40%): $ambil_nilai_uas <br>";
        
        echo "===================================";
        echo "<h3>Nilai Akhir: $nilai_akhir</h3>";

       
    ?>
</body>
</html>
</html>