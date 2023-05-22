var buttoncolor=["green","red","blue","yellow"];

var gamepattern=[];
var userClickedPattern=[];

var start=false;
var level=0;
$(document).keypress(function() {
    if(!start){
    $("#level-title").text("level "+level);
    nextsequence();
    start=true;
    }
});

$(".btn").click(function(){
    var userclickedbutton=$(this).attr("id");
    userClickedPattern.push(userclickedbutton);
    playsound(userclickedbutton);
    animatepress(userclickedbutton);
    checkAnswer(userClickedPattern.length-1,userclickedbutton);
});
function checkAnswer(currentLevel,colorbutton) {
    if(gamepattern[currentLevel]===userClickedPattern[currentLevel]) {
        if(userClickedPattern.length===gamepattern.length) {
            setTimeout(function() {
                nextsequence();
            }, 100);
        } 
    } else {
        playsound("wrong");
        
        $("body").addClass("game-over");
        $("#level-title").text("Game-over, press any key restart");
        setTimeout(function()  {
            $("body").removeClass("game-over");
        }, 600);
        startOver();
    }
}
function nextsequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("level "+level);
    var randonNumber=Math.floor(Math.random()*4);
    var randomchosencolor=buttoncolor[randonNumber];

    gamepattern.push(randomchosencolor);
    $("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosencolor);
}

function animatepress(currentcolor) {
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function () {
        $("#"+currentcolor).removeClass("pressed");
    }, 100);
}
function playsound(name) {
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function startOver() {

    level = 0;
    gamepattern = [];
    start = false;
  }

$("button").click(function() {
    $("h1").text("press A key to start");
    startOver();
});
  