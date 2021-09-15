/* grabs elements from index by div id */
var miniGame = document.getElementById('miniGame');
var gamePiece = document.getElementById('gamePiece'); 
var obstacle = document.getElementById("obstacle");

document.addEventListener('click', jump); 
obstacle.style.animation = "none"; // stop obstacble animation

function startGame() {
    obstacle.style.animation = "obstacle 1s infinite linear";
}

function jump() {
    if(gamePiece.classList == "animate") {// stops function from running again if in progress
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
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left")); // left bc user can only move right
    // 20 = width/height of obstacle, -20 = animation left, 130 = top of obstacle
    if(obstacleLeft < 20 && obstacleLeft > -20 && gamePieceTop >= 130){ // all true = overlap
        obstacle.style.animation = "none"; // stop obstacble animation
        alert( "Game Over \
        Score: " + Math.floor(score)); //rounds score to largest integer less than or equal to current number (5.9 -> 5) 
        score = 0; //reset the score
        obstacle.style.animation = "obstacle 1s infinite linear"; // restart obstacle animation 
    } else {
        score++; //increase score as long as user is does not hit an obstacle
        document.getElementById("scoreSpan").innerHTML = Math.floor(score);
    }
}, 10); // calls function every 10 ms
