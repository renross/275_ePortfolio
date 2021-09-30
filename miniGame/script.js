/* grabs elements from index by div id */
var miniGame = document.getElementById('miniGame');
var gamePiece = document.getElementById('gamePiece'); 
var obstacle = document.getElementById("obstacle");

var score = 0;
var gameStart = false;

document.addEventListener('click', jump); 
obstacle.style.animation = "none"; // stop obstacble animation until start

function startGame() {
    gameStart = true;
    score = 0;
    obstacle.style.animation = "obstacle 1s infinite linear"; // start obstacle animation
}

function jump() {
    if(gamePiece.classList == "animate") { // stops function from running again if in progress
        return;
    } 
    gamePiece.classList.add("animate"); // from class, add animate to character
    setTimeout(removeJump, 300); // 300 ms = length of jump animation
}

function removeJump() {
    gamePiece.classList.remove("animate"); // remove the animation from the character
}

var checkStatus = setInterval(function() {
    // check to see if user hit an obstacle, which should end the game
    let gamePieceTop = parseInt(window.getComputedStyle(gamePiece).getPropertyValue("top"));
    let gamePieceLeft = parseInt(window.getComputedStyle(gamePiece).getPropertyValue("left"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left")); // left bc user can only move right
    let obstacbleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    if (gameStart) {
        if(obstacleLeft < 130 && gamePieceTop <= 95){ // collision
            obstacle.style.animation = "none"; // stop obstacble animation
            alert( "Game Over \
            Score: " + Math.floor(score/100)); //rounds score to largest integer less than or equal to current number (5.9 -> 5) 
        } else {
            score++; //increase score as long as user is does not hit an obstacle
            document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
        }
}}, 10); // calls function every 10 ms
