function clickevent(){
    randNum = Math.floor(Math.random() * 6) + 1;


    if(randNum == 1) {
        document.getElementById("diceFace").src = "../images/dice1.png";
    }
    else if(randNum == 2) {
        document.getElementById("diceFace").src = "../images/dice2.png";
    }
    else if(randNum == 3) {
        document.getElementById("diceFace").src = "../images/dice3.png";
    }
    else if(randNum == 4) {
                document.getElementById("diceFace").src = "../images/dice4.png";
    }
    else if(randNum == 5) {
        document.getElementById("diceFace").src = "../images/dice5.png";
    }
    else {
        document.getElementById("diceFace").src = "../images/dice6.png";
    }
}