$(document).ready(function(){
  $("#checkpoint-1").hide();
})

let acknowledge = document.getElementById("ackn");
acknowledge.addEventListener("click", function () {
  window.location.href = "acknowledge.html";
});

let start = document.getElementById("start");
start.addEventListener("click", function () {
  window.location.href = "start.html";
});

var disp = "It's great to see you, Detective!";
var dom = "#heading"
typing(disp, 150,dom);
function typing(disp, speed, dom) {
  var char = 0;
  var test = setInterval(type, speed);
  function type() {
    if (char <= disp.length) {
      var display = disp.slice(0, char);
      $(dom).text(display);
      char++;
      console.log(char);
    } else {
      clearInterval(test);
    }
  }
}
function typingline(disp, speed, dom) {
  var char = 0;
  //Create a promise so that .then can the next function will wait till this
  // function execute finish. Promise will return a result
  return new Promise(function (resolve) {
    //At set interval, the function will change the text on the screen
    //when it is finish it will clear interval
  var test = setInterval(type, speed);
  function type() {
    if (char <= disp.length) {
      var display = disp.slice(0, char);
      $(dom).text(display);
      char++;
    } else {
      clearInterval(test);
      resolve("done");
    }
  }}) 
}

//Checkpoint 1 onwards
function clue1() {
$("#startGame").hide();
$("#checkpoint-1").show();
$("#checkpoint-1 h2").css({ "margin-top": "100px" });
$("#checkpoint-1 h2,#checkpoint-1 div").css({ "text-align": "center" });
$("#clue1").css({
  "border-style": "solid",
  "border-width": "1px",
  "border-color": "black",
  "font-size": "20pt",
  "margin-top": "50px",
});
$("#checkpoint-1 h3").css({ "text-align": "left" });
$("#clue1 li").css({ "text-align": "left" });
$("#clue1 ol").css({ "margin-left": "25px", padding: "0px" });
$("#clue1 section").css({ "margin-left": "145px" });
$("#clue1 section div").css({ "text-align": "left" });
$("#clue1-filler").css({ "margin-bottom": "100px" });
$("#map2Button").css({
  "font-size": "12pt",
  "margin-left": "70%",
  "border-style": "none",
});
let disp = "Eric Royal Lab Report"
let dom = "#clue1 h2"
typing(disp,120,dom)
}
// transition to next show map
$("#map2Button").click(function(){
  $("#checkpoint-1").append(`<div id = "map2"></div>`)
  $("#clue1").remove()
})
// Next function
