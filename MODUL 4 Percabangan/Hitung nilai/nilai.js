function hitungip() {
    var quis = parseFloat(document.fform.iquis.value);
    var tugas = parseFloat(document.fform.itugas.value);
    var uts = parseFloat(document.fform.iuts.value);
    var uas = parseFloat(document.fform.iuas.value);

    var ip = "";
    var ket = "";
    var na = (0.10 * quis) + (0.20 * tugas) + (0.30 * uts) + (0.40 * uas);

    if (na > 80 && na <= 100) {
        ip = "A";
        ket = "Lulus dengan Sangat Baik";
    } else if (na > 68 && na <= 80) {
        ip = "B";
        ket = "Lulus dengan Baik";
    } else if (na > 55 && na <= 68) {
        ip = "C";
        ket = "Lulus dengan Cukup";
    } else if (na > 38 && na <= 55) {
        ip = "D";
        ket = "Lulus dengan Kurang";
    } else {
        ip = "E";
        ket = "Tidak Lulus";
    }

    document.fform.oip.value = ip;
    document.fform.oket.value = ket;
}
