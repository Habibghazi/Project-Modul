
var a = 10;
var b = 5;


var besar = Math.max(a, b);
document.getElementById("max").innerHTML =
    "Antara " + a + " dan " + b + " lebih besar adalah: <b>" + besar + "</b>";


var pangkat = Math.pow(b, a);
document.getElementById("pangkat").innerHTML =
    b + " pangkat " + a + " adalah: <b>" + pangkat + "</b>";


var ran = Math.round(Math.random() * 50000);
document.getElementById("random").innerHTML =
    "Anda adalah pengunjung yang ke: <b>" + ran + "</b>";


var akar = Math.sqrt(ran);
document.getElementById("akar").innerHTML =
    "Akar dari " + ran + " adalah: <b>" + akar + "</b>";
