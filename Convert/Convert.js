
    function Nhap() {
    let giatrinhap = document.getElementById('Tien').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    if (select1 == select2) {
        document.getElementById("KQ").innerHTML = giatrinhap ;
}
    if (select1=="a" && select2=="b") {
        document.getElementById("KQ").innerHTML = giatrinhap*23000 ;
}
    if (select1=="b" && select2=="a") {
        document.getElementById("KQ").innerHTML = giatrinhap/23000 ;
}
}

document.getElementById()