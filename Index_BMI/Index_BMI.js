function Test() {
    let can_nang = document.getElementById("can_nang").value;
    let chieu_cao = document.getElementById("chieu_cao").value;
    let bmi = can_nang / ( Math.pow(chieu_cao, 2) )
    let result = "";
    if (bmi < 18.5)
        result = "Gầy độ 1";
    else if (bmi < 22.9)
        result = "Bình thường";
    else if (bmi < 24.9)
        result = "Thừa cân";
    else if (bmi < 29.9)
        result = "Béo phì độ 1";
    else if (bmi > 30)
        result = "Béo phì độ 2";

    document.getElementById("result").innerHTML = "Chỉ số BMI là:"+ bmi + "<br>"+ "Kết quả :" + result ;
}