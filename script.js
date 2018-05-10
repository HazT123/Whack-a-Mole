document.getElementById("whack1").style.display = "none";
document.getElementById("whack2").style.display = "none";
document.getElementById("whack3").style.display = "none";
document.getElementById("whack4").style.display = "none";
document.getElementById("whack5").style.display = "none";
document.getElementById("whack6").style.display = "none";
document.getElementById("whack7").style.display = "none";
document.getElementById("whack8").style.display = "none";

var score = 0;
var lives = 3;
var moley = Math.ceil(Math.random() * 8);

document.getElementById("whack" + moley).style.display = "grid";

setInterval(function(){
    var moley = Math.ceil(Math.random() * 8);
    document.getElementById("whack" + moley).style.display = "grid";
}, 3000)

setInterval(function(){
    var groley = Math.ceil(Math.random() * 8);
    document.getElementById("whack" + groley).style.display = "none";
}, 1000)

document.addEventListener("click", function(e){
    if(e.target.id.includes("whack")) {
        score += 1;
        document.getElementById("score").innerHTML = "SCORE - " + score;
        if(score >= 10) {
            var element = e.target.id.includes("whack")
            element.className.remove("moleMove");
            element.className.replace("moleDie");
            document.getElementById("outcome").innerHTML = "WINNER"
        }
    } else {
        lives -= 1;
        document.getElementById("lives").innerHTML = "LIVES - " + lives;
        if(lives <= 0) {
            document.getElementById("outcome").innerHTML = "YOU LOSE"
            setTimeout(function() {
                location.reload(true);
            }, 1500)
        }
    }
})