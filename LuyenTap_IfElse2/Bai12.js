function result(){
    let tien = +document.getElementById('tien').value;
    let kyhan = +document.getElementById('kyhan').value;
    let laisuat = +document.getElementById('laisuat').value;
    let dukien = Math.round(tien*(laisuat/100)*kyhan)/12;
    document.getElementById('dukien').innerHTML = dukien;
    let sum = tien + dukien;
    document.getElementById('sum').innerHTML = sum;
}