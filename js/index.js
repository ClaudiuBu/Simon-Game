
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
            break;
        case 2:
            $(".square-2").animate({
                width: "350px",
                height: "350px",
            }, 350).animate({
                width: "300px",
                height: "300px",
            }, 350);
            break;

        case 3:
            $(".square-3").animate({
                width: "350px",
                height: "350px",
            }, 350).animate({
                width: "300px",
                height: "300px",
            }, 350);
            break;
        case 4:
            $(".square-4").animate({
                width: "350px",
                height: "350px",
            }, 500).animate({
                width: "300px",
                height: "300px",
            }, 500);
            break;
    }
}
function makeArray() {
    randSquare = randAsignSquare();
    squareOrder.push(randSquare);
    paternClick(randSquare);

    for (var i = 0; i < squareOrder.length; i++) {
        console.log("[" + i + "]=" + squareOrder[i])
    }
}

function gameLost(){

}
function nextLevel(){
    if(squareOrder.length==number){
        setTimeout(makeArray, 1000);
        number = 0;
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
    if (squareOrder[number] == arg) {
        console.log("Ar trebui sa ma maresc2");
        paternClick(squareOrder[number]);
        number++;
        nextLevel();
    }
    else {
       // gameLost();
        console.log("Game lost");
    }
}

function gameStart() {
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
