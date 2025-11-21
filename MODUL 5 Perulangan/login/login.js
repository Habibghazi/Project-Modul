document.getElementById("btnLogin").onclick = function () {
    let pass = document.getElementById("password").value;

    if (pass === "UNIKOM") {
        alert("Login Berhasil!");
        window.location.href = "welcome.html";
    } else {
        alert("Password salah! Coba lagi.");
    }
};
