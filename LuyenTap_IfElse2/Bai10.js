function result(){
    let a = +document.getElementById('1').value;
    let b = +document.getElementById('2').value;
    let c = +document.getElementById('3').value;
    let d = +document.getElementById('4').value;
    let e = +document.getElementById('5').value;
    let f = +document.getElementById('6').value;
    let bac1 = a*1549;
    let bac2 = b*1600;
    let bac3 = c*1858;
    let bac4 = d*2340;
    let bac5 = e*2615;
    let bac6 = f*2927;
    let g = a + b + c +d + e +f;
    let sum = bac1 + bac2 + bac3 +bac4 + bac5 + bac6;
    document.getElementById('bac1').innerHTML = bac1;
    document.getElementById('bac2').innerHTML = bac2;
    document.getElementById('bac3').innerHTML = bac3;
    document.getElementById('bac4').innerHTML = bac4;
    document.getElementById('bac5').innerHTML = bac5;
    document.getElementById('bac6').innerHTML = bac6;
    document.getElementById('g').innerHTML= g;
    document.getElementById('sum').innerHTML = sum;

}