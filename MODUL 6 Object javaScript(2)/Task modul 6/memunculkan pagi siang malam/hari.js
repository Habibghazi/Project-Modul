function tentukanSapaan() {
    const waktu = new Date();
    const jam = waktu.getHours();
    let pesanSapaan;

    if (jam >= 4 && jam < 11) {
        pesanSapaan = "Selamat Pagi";
    } else if (jam >= 11 && jam < 15) {
        pesanSapaan = "Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
        pesanSapaan = "Selamat Sore";
    } else {
        pesanSapaan = "Selamat Malam";
    }

    return pesanSapaan;
}

function tampilkanSapaan() {
    const sapaan = tentukanSapaan();
    
    alert(sapaan);

    const elemenMarquee = document.getElementById('sapaan-marquee');
    elemenMarquee.textContent = sapaan;
}

window.onload = tampilkanSapaan;