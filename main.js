function kiemtracannang(){
    let weight = Number(document.getElementById("weight").value)
    let height = Number(document.getElementById("height").value)
    let BMI = weight/(height*height)
    document.getElementById("BMI_1").innerText = BMI
    if (BMI < 18){
        document.getElementById("BMI").innerText = "Chỉ số cơ thể: Underweight"
    } else if (BMI < 25){
        document.getElementById("BMI").innerText = "Chỉ số cơ thể: Normal"
    } else if (BMI < 30){
        document.getElementById("BMI").innerText = "Chỉ số cơ thể: Overweight"
    } else{
    document.getElementById("BMI").innerText = "Chỉ số cơ thể: Obese"
    }
}