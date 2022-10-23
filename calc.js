window.onload = function() {

    

document.getElementById("calc").onclick = function () {
    //Numbers
    var currentGrade = parseInt(document.getElementById("number1").value);
    var wantedGrade = parseInt(document.getElementById("number2").value);
    var examWeight = parseInt(document.getElementById("number3").value);
    //alert(currentGrade + wantedGrade);
    //Output text
    var grade = document.getElementById("grade");

    //Button to calc
    var calc = document.getElementById("calc");

    var finalGrade = function finalGrade (currentGrade, wantedGrade, examWeight) {
        //return (wantedGrade -((1-examWeight) * currentGrade)) / wantedGrade;
        alert(currentGrade);
    }



    calc.addEventListener('click', finalGrade);


}

}