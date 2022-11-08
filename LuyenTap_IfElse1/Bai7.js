function result(){
    let a = 22000;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    let d = +document.getElementById('d').value;
    let noimang = b*790;
        document.getElementById('noimang').innerHTML = noimang;
    let ngoaimang = c*1090;
        document.getElementById('ngoaimang').innerHTML = ngoaimang;
    let hotro = d*2000;
        document.getElementById('hotro').innerHTML = hotro;
    let sum = a + noimang + ngoaimang + hotro;
    document.getElementById('sum').innerHTML = sum;
}

