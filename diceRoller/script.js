var randNum;
var diceRoller = document.getElementById("diceRoller");

function clickD4(){
    randNum = Math.floor(Math.random() * 4) + 1;
    document.getElementById("diceImg").src = "../Images/d4.png";
    document.getElementById("rollResult").innerHTML = randNum;
}
function clickD6(){
    randNum = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceImg").src = "../Images/d6.png";
    document.getElementById("rollResult").innerHTML = randNum;
}
function clickD8(){
    randNum = Math.floor(Math.random() * 8) + 1;
    document.getElementById("diceImg").src = "../Images/d8.png";
    document.getElementById("rollResult").innerHTML = randNum;
}
function clickD10_10(){
    randNum = Math.floor(Math.random() * 9) + 1;
    document.getElementById("diceImg").src = "../Images/d10_10.png";
    document.getElementById("rollResult").innerHTML = randNum;
}
function clickD10_100(){
    randNum = Math.floor(Math.random() * 90) + 10;
    document.getElementById("diceImg").src = "../Images/d10_100.png";
    document.getElementById("rollResult").innerHTML = randNum;
}
function clickD12(){
    randNum = Math.floor(Math.random() * 12) + 1;
    document.getElementById("diceImg").src = "../Images/d12.png";
    document.getElementById("rollResult").innerHTML = randNum;
}
function clickD20(){
    randNum = Math.floor(Math.random() * 20) + 1;
    document.getElementById("diceImg").src = "../Images/d20.png";
    document.getElementById("rollResult").innerHTML = randNum;
}
