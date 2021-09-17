
function dices() {
    var images = ["./images/dice1.png", "./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
    var x = Math.floor(Math.random() * 6);
    document.getElementById("myPicture1").src = images[x];
    var y = Math.floor(Math.random() * 6);
    document.getElementById("myPicture2").src = images[y];
    var z = 0;
    if (x < y) {
        z = 1;
    } else if (x > y) {
        z = 0;
    } else if (x === y) {
        z = 2;
    }
    var winners = ["Player 1 WINS", "Player 2 WINS", "TIE"]
    document.getElementById("winner").innerHTML = winners[z];
}
