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
  $("#checkpoint-1").css({ "margin-top": "100px" });
  $("#checkpoint-1 h2").css({ "margin-top": "50px" });
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
  $("#clue1-filler").css({ "margin-bottom": "50px" });
  $("#map2Button").css({
    "font-size": "12pt",
    "margin-left": "70%",
    "border-style": "none",
  });
  let disp = "Eric Royal Lab Report";
  let dom = "#clue1 h2";
  typing(disp, 120, dom);
}
// transition to next show map
$("#map2Button").click(function () {
  $("#checkpoint-1").append(
    `<div id = "map2"><img class ="img-fluid" src='#' alt="map image"></div>`
  );
  $("#clue1").remove();
  //when it is clicked
  $("#map2 img").click(function (evt) {
    var offset = $(this).offset();
    var x = offset.left;
    var y = offset.top;
    var mousex = evt.pageX - x;
    var mousey = evt.pageY - y;
    //If above selection is correct
    scene6();
  });
});
// Next function
function scene6() {
  $("#map2").remove();
  //setting up elements to append content
  $("#checkpoint-1").append(`<div id ="scene6">
  <div id="firstSentence"></div>
  <div id="secondSentence"></div>
  <div id="thirdSentence"></div>
  <div id="fourthSentence"></div>
  <div id="fifthSentence"></div>
  <div id="sixthSentence"></div>
  <div id="eclipses1"></div>
  <div id="sevenSentence"></div>
  <div id="eightSentence"></div>
  </div>`);
  $("#scene6").css({
    "font-size": "16pt",
    "text-align": "center",
  });
  //setting up elements to change text and the respective text
  let firstSentence = "You rush to Ascend City";
  let domFirst = "#firstSentence";
  let secondSentence = "A once glamorous city now looks desolate . . .";
  let domSecond = "#secondSentence";
  let thirdSentence = "Looking around . . .";
  let domThird = "#thirdSentence";
  //fourth - sixth display at the same time
  let fourthSentence = "Few people are walking on the streets!";
  let domFourth = "#fourthSentence";
  let fifthSentence = "People are rushing to buy food!";
  let domFifth = "#fifthSentence";
  let sixthSentence = "Many people had masks on their faces!";
  let domSixth = "#sixthSentence";
  let domEclipse1 = "#eclipses1";
  let seventhSentence =
    "The wind blew, and a piece of newspaper rolled towards your feet.";
  let domSeven = "#sevenSentence";
  let eightSentence = "You picked it up and saw . . .";
  let domEight = "#eightSentence";
  let eclipses = "-----------------------------------------";
  //Codes to create typing effect
  typingline(firstSentence, 50, domFirst).then(function () {
    typingline(secondSentence, 75, domSecond).then(function () {
      typingline(thirdSentence, 50, domThird).then(function () {
        typingline(fourthSentence, 50, domFourth);
        typingline(fifthSentence, 60, domFifth);
        typingline(sixthSentence, 60, domSixth).then(function () {
          typingline(eclipses, 125, domEclipse1).then(function () {
            typingline(seventhSentence, 40, domSeven).then(function () {
              typingline(eightSentence, 50, domEight).then(function () {
                $("#checkpoint-1").append(
                  `<button id = "newspaperButton">Pick newspaper up!</button>`
                );
                $("#newspaperButton").css({
                  "border-style": "none",
                  "margin-left": "75%",
                });
                $("#newspaperButton").click(newspaper);
              });
            });
          });
        });
      });
    });
  });
}
function newspaper() {
  $("#scene6, #newspaperButton").remove();
  $("#checkpoint-1").append(`<div id = "newspaper">
  <h2>The Current Times</h2>
  <div class ="row">
    <div class = "col-sm" id = "newspaperLeft">
      <h4></h4>
      <p></p>
      <button>Read More On Page 2 -></button>
    </div>
    <div class = "col-sm" id = "newspaperRight">
      <h2></h2>
      <div id = "newspaperRightName"></div>
      <div id = "newspaperRightLastSeen"></div>
      <div id ="newspaperRightStatus"></div>
    </div>
  </div>
</div>`);
  $("#checkpoint-1").css({ "font-size": "14pt" });
  $("#checkpoint-1 h2").css({ "text-align": "center" });
  $("#checkpoint-1 .col-sm").css({ margin: "auto 40px" });
  $("#newspaperLeft p,#newspaperLeft h4,#newspaperRight").css({
    "margin-top": "30px",
  });
  $("#newspaperLeft button").css({
    "font-size": "9pt",
    "background-color": "white",
    "border-style": "none none solid none",
    "margin-left": "65%",
  });
  let domh4 = "#newspaperLeft h4";
  let heading = "Safe Distancing Measures Implemented";
  typingline(heading, 100, domh4);
  let domp = "#newspaperLeft p";
  let paragraph = `With advance intel from Viole City, Ascend City 
has started to implement safe-distancing
measures. Citizens are to wear a mask at all 
times when they are out of their homes. Citizens
are to stay 1 meter or 6 feet apart when in queue.
Avoid crowded places. Now Ascend city is hunting
down Sir Suriv.`;
  typingline(paragraph, 30, domp);
  let name = "Name : Sir Suriv";
  let lastScene = "Last Seen : Abandoned Factory";
  let status = "Status : Police cordoning of area suspected";
  typingline("Wanted", 125, "#newspaperRight h2").then(function () {
    typingline(name, 50, "#newspaperRightName").then(function () {
      typingline(lastScene, 50, "#newspaperRightLastSeen").then(function () {
        typingline(status, 50, "#newspaperRightStatus").then(function () {
          $("#newspaperRight").append(`<img src="#" alt="map location">`);
        });
      });
    });
  });
}
function scene7() {
  $("#newspaperPage2").remove();
  $("#checkpoint-1").append(`<div id ="scene7">
  <div id="firstSentence"></div>
  <div id="secondSentence"></div>
  <div id="thirdSentence"></div>
  <div id="fourthSentence"></div>
  <div id="fifthSentence"></div>
  <div id="sixthSentence"></div>
  <div id="sevenSentence"></div>
  <div id="eightSentence"></div>
  </div>`);
  //Css styling
  $("#checkpoint-1").css({"font-size":"18pt"})
  //The element selector
  let domFirst = "#firstSentence";
  let domSecond = "#secondSentence";
  let domThird = "#thirdSentence";
  let domFourth = "#fourthSentence";
  let domFifth = "#fifthSentence";
  let domSixth = "#sixthSentence";
  let domSeven = "#sevenSentence";
  let domEight = "#eightSentence";
  //Sentences
  let firstSentence= "You rushed over to the abandoned factory location seen from the newspaper"
  let secondSentence="When you arrived at the location, you see police tape around the building"
  let thirdSentence = "You tried to cross over the tape, and a police officer tried to stop you"
  let fourthSentence = "You showed your detective pass and entered the abandoned building"
  let fifthSentence = `"HA HA HA HA HA HA HA HA"`
  let sixthSentence = "You heard a maniac laughter a distance away, and you walked towards the sound"
  let sevenSentence = ". . . . ."
  let eightSentence = "The laughter seems to be behind these doors"
  typingline(firstSentence,50,domFirst).then(
    function(){
      typingline(secondSentence,75,domSecond).then(function(){
        typingline(thirdSentence,50,domThird).then(function(){
          //Maybe can allow player to choose the police pass
          typingline(fourthSentence,50,domFourth).then(function(){
            typingline(fifthSentence,50,domFifth).then(function(){
              typingline(sixthSentence,50,domSixth).then(function(){
                typingline(sevenSentence,500,domSeven).then(function(){
                  typingline(eightSentence,50,domEight).then(function(){
                    $("#checkpoint-1").append(`<button id = "scene8Button">Kick the doors open!</button>`)
                    $("#scene8Button").css({
                      "border-style": "none",
                      "margin-left": "75%",
                      "backgound-color":"white",
                      "font-size":"10pt"
                    });
                    $("#scene8Button").click(scene8)
                  })
                })
              })
            })
          })
        })
      })
    }
  )
}