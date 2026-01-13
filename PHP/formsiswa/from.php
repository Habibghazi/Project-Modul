<html>
<head>
    <title>FORM mhs</title>
</head>
<body>
    <form action="proses.php" method="get">
        <h2>Data Mahasiswa</h2>
        <label>Nama :</label>
        <input type="text" name="nama"><br>
        
        <label>NIM :</label>
        <input type="text" name="nim"><br>
        
        <label>Jenis Kelamin :</label>
        <select name="jekel">
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
        </select><br>
        
        <label>Tempat Lahir :</label>
        <input type="text" name="tempat_lahir"><br>
        
        <label>Tanggal Lahir :</label>
        <input type="date" name="tanggal_lahir"><br>

        <hr>
        <h2>Input Nilai</h2>
        <label>Nilai Quis (10%) :</label>
        <input type="text" name="quis"><br>
        
        <label>Nilai Tugas (20%) :</label>
        <input type="text" name="tugas"><br>
        
        <label>Nilai UTS (30%) :</label>
        <input type="text" name="UTS"><br>
        
        <label>Nilai UAS (40%) :</label>
        <input type="text" name="UAS"><br>
        
        <br>
        <input type="submit" value="Simpan Data">
        <input type="reset" value="Batal">
    </form>
</body>
</html>