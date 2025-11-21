const dataJurusan = {
    Ekonomi: ["Manajemen", "Akutansi", "Manajemen Informatika"],
    Pendidikan: ["Bahasa Indonesia", "Bahasa Inggris", "Matematika"],
    Pertanian: ["Agro Teknologi", "Agri Bisnis", "Peternakan"],
    Hukum: ["Hukum"]
};

document.getElementById("fakultas").addEventListener("change", function () {
    let fak = this.value;
    let jurusanSelect = document.getElementById("jurusan");

    jurusanSelect.innerHTML = "<option disabled selected>Pilih Jurusan</option>";

    dataJurusan[fak].forEach(function (jur) {
        let opt = document.createElement("option");
        opt.value = jur;
        opt.textContent = jur;
        jurusanSelect.appendChild(opt);
    });
});

document.getElementById("kirim").addEventListener("click", function () {

    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let jk = document.getElementById("jk").value;
    let agama = document.getElementById("agama").value;
    let status = document.getElementById("status").value;
    let fak = document.getElementById("fakultas").value;
    let jurusan = document.getElementById("jurusan").value;
    let komentar = document.getElementById("komentar").value;

    let output = `
        <h3 style="text-shadow:0 0 10px #00eaff;">HASIL INPUT DATA</h3>
        <p><b>NIM:</b> ${nim}</p>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Jenis Kelamin:</b> ${jk}</p>
        <p><b>Agama:</b> ${agama}</p>
        <p><b>Status:</b> ${status}</p>
        <p><b>Fakultas:</b> ${fak}</p>
        <p><b>Jurusan:</b> ${jurusan}</p>
        <p><b>Komentar:</b> ${komentar}</p>
    `;

    let box = document.getElementById("output");
    box.style.display = "block";
    box.innerHTML = output;
});
