var $screen = $("#screen");
var $number = $(".number");
var op = null;
var num1 = false;
var num2 = false;
var answer = null;
var currentNumber = 1;
var click = 0;

$number.on("click", function(){
  click++;
  if(click > 8){
    return;
  }
    var numberPressed = $(this).html();
    $screen.append(numberPressed);

  if(currentNumber === 1){
    if(num1 === false){
      num1 = numberPressed;
    }
    else{
      num1 = num1 + numberPressed;
    }
  }

  if(currentNumber === 2){
    if(num2 === false){
      num2 = numberPressed;
    }
    else{
      num2 = num2 + numberPressed;
    }
  }
});

function findAnswer(){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
    if(op == "+"){
      answer = num1 + num2;
    }
    if(op == "-"){
      answer = num1 - num2;
    }
    if(op == "x"){
      answer = num1 * num2;
    }
    if(op == "/"){
      answer = num1 / num2;
    }
    num1 = answer;
    num2 = false;
    currentNumber = 2;
}

function more(){
  if(click > 8){
    click = click - 5;
  }
  if(currentNumber === 2){
    findAnswer();
    $screen.empty();
    $screen.append(num1);
  }
  currentNumber = 2;
}


$("#plus").on("click", function(){
  more();
  $screen.append("+");
  op = "+";
})

$("#minus").on("click", function(){
  more();
  $screen.append("-");
  op = "-";
})

$("#multiply").on("click", function(){
  more();
  $screen.append("x");
  op = "x";
})

$("#divide").on("click", function(){
  more();
  $screen.append("/");
  op = "/";
})

$("#clear").on("click", function(){
  $screen.empty();
  num1 = false;
  num2 = false;
  currentNumber = 1;
  click = 0;
})

$("#equal").on("click", function(){
  $screen.append("=");
  findAnswer();
  if(click > 8){
    $screen.empty();
    var answerLength = answer.toString();
    click = answerLength.length;
    consol.log(click);
  }
  $screen.append(answer);
})
