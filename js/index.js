
var squareOrder = new Array,
    number = 0
newGame = true,
    randSquare = 0,
    cubeOne = 1,
    cubeTwo = 2,
    cubeThree = 3,
    cubeFour =4,
    level=1;



$(document).keypress(function (e) {

    if ((e.key == "A" || e.key == "a") && newGame == true) {
        gameStart();

    }
    else {

    }
});
function randAsignSquare() {
    console.log("Am intrat in functia de randomizare.");
    return Math.floor(Math.random() * 4 + 1);
}
function paternClick(arg) {
    switch (arg) {
        case 1:
            $(".square-1").animate({
                width: "350px",
                height: "350px",
            }, 350).animate({
                width: "300px",
                height: "300px",
            }, 350);
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;
        case 2:
            $(".square-2").animate({
                width: "350px",
                height: "350px",
            }, 350).animate({
                width: "300px",
                height: "300px",
            }, 350);
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;

        case 3:
            $(".square-3").animate({
                width: "350px",
                height: "350px",
            }, 350).animate({
                width: "300px",
                height: "300px",
            }, 350);
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;
        case 4:
            $(".square-4").animate({
                width: "350px",
                height: "350px",
            }, 500).animate({
                width: "300px",
                height: "300px",
            }, 500);
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;
    }
}
function makeArray() {
    console.log("Am intrat in functia de array");
    randSquare = randAsignSquare();
    squareOrder.push(randSquare);
    paternClick(randSquare);

    for (var i = 0; i < squareOrder.length; i++) {
        console.log("[" + i + "]=" + squareOrder[i])
    }
}

function gameLost(){
    $("h1").text("Lost the game. Press A to start a new game.");
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
    //reintializare variabile;
    newGame = true;
    location.reload();
}
function nextLevel(){
    console.log("Am trecut la urmatorul nivel");
    if(squareOrder.length==number){
        number = 0;
        setTimeout(makeArray, 1000);
        level++;
        setLevel(level);
    }
}
function setLevel(arg){
    function local(){

     $("h1").text("Level "+arg);
    }
    setTimeout(local,1000);
}
function gameLogic(arg){
    console.log("Aici decid daca ai pierdut sau castigat");
    if (squareOrder[number] == arg) {
        console.log("Ar trebui sa ma maresc2");
        paternClick(squareOrder[number]);
        number++;
        nextLevel();
    }
    else {
        console.log("Game lost");
        gameLost(event);
        
    }
}

function gameStart() {
    newGame = false;
    $("h1").text("Level 1");
    setTimeout(makeArray, 500);
    console.log("ajjung in gameStar");

    $(".square-1").click(function () {
        console.log("Imi dai click la square 1");
        if (squareOrder.length > number) {
                gameLogic(cubeOne);
        }

    })
    $(".square-2").click(function () {
        console.log("Imi dai click la square 2");
        if (squareOrder.length > number) {
            gameLogic(cubeTwo);
        }

    })
    $(".square-3").click(function () {
        console.log("Imi dai click la square 3");
        if (squareOrder.length > number) {
            gameLogic(cubeThree);

        }
    })
    $(".square-4").click(function () {
        console.log("Imi dai click la square 4");
        if (squareOrder.length > number) {
            gameLogic(cubeFour);
        }
 
    })

}
