$(document).ready(function(){
  $("#checkpoint-1").hide();
  $("#clipboard").hide();
  $("#information").hide();
  $('div#userInputM').hide();  
  $('div#userInputF').hide(); 

  function getGlobal() {
    var settings = {
      "url": "https://disease.sh/v3/covid-19/all", 
      "method": "GET",
      "timeout": 0,
      "headers": {
        //"Cookie": "__cfduid=d4e60a8e28f2e90c24e2a1fdcaaea8ead1611282633"
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      var casesG = response.cases;
      var criticalG = response.critical;
      var deathsG = response.deaths;
      var recoveredG = response.recovered;
  
      //display into html the global's content
      $("#globalCases").append(casesG);
      $("#globalCritical").append(criticalG);
      $("#globalDeaths").append(deathsG);
      $("#globalRecovered").append(recoveredG);
    });
  }
  getGlobal();
})

$("#ackn").click(function () {
  window.location.href = "acknowledge.html";
});

$("#start").click(function () {
  $("#startGame").fadeOut(2000, function(){
    $("#charInfo").append(`<h2 id="userHeading" style="text-align: center;">How Should We Address You?</h2>
  <div class="row">
    <div id="genderM" class="col-sm">
      <a href="#" id="male" role="button" style="text-decoration: none;">Male</a><br>
      <div id="userInputM" style="padding-top: 20px;">
      </div>
    </div>
    <div id="genderF" class="col-sm">
      <a href="#" id="female" role="button" style="text-decoration: none;">Female</a><br>
      <div id="userInputF" style="padding-top: 20px;">
      </div>
    </div>
  </div>`);
    userChar();
  });
});

var disp = "It's great to see you, Detective!";
var dom = "#heading";
typingline(disp, 150, dom);

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

function userChar(){
  $("#male").click(function () {
    if (document.getElementById('genderF'))
    {
        document.getElementById('genderF').remove(); 
        $("#userInputM").prepend(`<div id="userInputM" style="padding-top: 20px;">
        <label for="userName">Enter Your Name: </label>
        <input type="text" id="userNameM" name="userName" placeholder="Name" style="width: 300px;"><br>
        <label for="userName">Enter Your Age: </label>
        <input type="number" id="userAgeM" name="userAge" placeholder="Age" style="width: 300px;"><br>
        <label for="userName">Enter Your Country: </label>
        <input type="text" id="userCountryM" name="userCountry" placeholder="Country" style="width: 300px;"><br>
        </div>
        <button id="continueM" class="continueBtn" style="margin-top: 10px; text-align: center;">Continue</button>
        `); 
    }
    $('div#userInputM').show();  

    $("#continueM").click(function () {
      document.getElementById('charInfo').remove(); 
      scene1_2();
    });
  });

  $("#female").click(function () {
    if (document.getElementById('genderM'))
    {
        document.getElementById('genderM').remove();
        $("#userInputF").prepend(`<div id="userInputF" style="padding-top: 20px;">
        <label for="userName">Enter Your Name: </label>
        <input type="text" id="userNameF" name="userName" placeholder="Name" style="width: 300px;"><br>
        <label for="userName">Enter Your Age: </label>
        <input type="number" id="userAgeF" name="userAge" placeholder="Age" style="width: 300px;"><br>
        <label for="userName">Enter Your Country: </label>
        <input type="text" id="userCountryF" name="userCountry" placeholder="Country" style="width: 300px;"><br>
        </div>
        <button id="continueF" class="continueBtn" style="margin-top: 10px; text-align: center;">Continue</button>
        `);
    }
    $('div#userInputF').show(); 
  
    $("#continueF").click(function () {
      document.getElementById('charInfo').remove(); 
      scene1_2();
    });
  });
};

function scene1_2(){
  var disp1 = "Head Detective, you are in the meeting room in the Headquarter of Detectives and given the following information.";
  var dom1 = "#scene1-intro";

  var disp2 = "After understanding the whole situation, you left the meeting room and head out to find Sir Suriv...";
  var dom2 = "#scene2-intro";

  typingline(disp1, 100, dom1).then(function(){
    $("#scene1-intro").delay(800).fadeOut(1600, function(){
      $("#clipboard").fadeIn(1600);
      $("#clipboard").prepend(`
      <h4 style="text-align: left; padding: 20px;"><i>To Head Detective,</i></h4>
      <h4>Background Information</h4>
      <p>
          Name of Virus: <b>COVID-19</b><br>
          Name of Villain: <b>Sir Suriv</b><br>
          Villain Last Seen: <b>Viole City</b>
      </p>
      <h4 style="padding-top: 20px;">Mission</h4>
      <p>
          Locate Sir Suriv and find out what is his intention with that val<br>
          Apprehend him as soon as possible. The whole world is counting on you to bring about peace.
      </p>
      <h4 style="text-align: left; padding: 20px;"><i>From Global Task Force</i></h4>`);
    });
  });

  $("#misson").click(function () {
      $("#clipboard").fadeOut(1600, function(){
          typingline(disp2, 80, dom2).then(function(){
              $("#scene2-intro").delay(800).fadeOut(1600, function(){
                  map1();
              });
          });
      });
  });
};

function map1(){
  var disp = "Click on the next city to proceed:";
  var dom = "#map1-intro"

  typingline(disp, 100,dom).then(function(){
      $("#map1-intro").append(`<ul>
      <li>Headquarter</li>
      <li>Viole City</li>
      <li>Ascend City</li>
      <li>Ace City</li>
      </ul>`);
      //need fix map1
      $("#map1-intro").delay(1000).fadeOut(1600, function(){
          scene3();
      });
  });
};

function scene3(){
  var disp1 = "As you walk into Viole city, you see symptoms of people getting sick.";
  var dom1 = "#scene3-intro";

  var disp2 = `A question pops into your head: "What happened here?"`;
  var dom2 = "#scene3-text1";
  var disp3 = "You then walk towards the administration office of the city...";
  var dom3 = "#scene3-text2";

  typingline(disp1, 100, dom1).then(function(){
      typingline(disp2, 100, dom2).then(function(){
          typingline(disp3, 100, dom3).then(function(){
              $("#scene3-intro").delay(800).fadeOut(1600);
              $("#scene3-text1").delay(800).fadeOut(1600);
              $("#scene3-text2").delay(800).fadeOut(1600, function(){
                  scene4();
              });
          });
      });
  });
};

function scene4(){
  var disp1 = "The Mayor of the city came to greet you.";
  var disp2 = `"Dear Head Detective, have you come to see the situation?"   `;
  var disp3 = "You nodded you head.   ";
  var disp4 = `He replied, "Well, this is the doing of Sir Suriv testing out a type of virus..."    `
  var disp5 = "He then searched his drawers for a moment.    ";
  var disp6 = `"We are still investigating the situation. Here's what we know at this moment. Please have a look."   `
  var disp7 = "He handed you a deck of information:";
  
  var dom1 = "#scene4-intro";
  var dom2 = "#scene4-text";
  
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
  
  typingline(disp1, 100, dom1).then(function(){
    $("#scene4-intro").delay(800).fadeOut(1600, function(){
      typingline(disp2, 120, dom2).then(function(){
        typingline(disp3, 120, dom2).then(function(){
          typingline(disp4, 120, dom2).then(function(){
            typingline(disp5, 120, dom2).then(function(){
              typingline(disp6, 120, dom2).then(function(){
                typingline(disp7, 100, dom2).then(function(){
                  $("#scene4-text").delay(800).fadeOut(1600, function(){
                    $("#information").fadeIn(1600);
                    $("#information").prepend(`
                    <h4>Virus Information</h4>`);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};

//Checkpoint 1 onwards
function clue1() {
  $("#startGame").hide();
  $("#checkpoint-1").append(`<div id="clue1">
  <h2></h2>
  <div>
      ------------------------------------------------------------------------------
  </div>
  <section>
      <h3>Objective :</h3>
      <ol>
          <li>Head to Ascend</li>
          <li>Spread the virus</li>
          <li>Create Panic</li>
      </ol>
  </section>
  <div>
      ------------------------------------------------------------------------------
  </div>
  <section>
      <div>
          Time left : Not much time!
      </div>
      <div>Target : Whole world</div>
      <div>Aim : Disrupt World Peace</div>
  </section>
  <button id ="map2Button">Next</button>
  <div id="clue1-filler"></div>
</div>`);
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
});}
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
//Missing newspaper page 2 function to be added soon
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
function scene8(){
  $("#scene7, #scene8Button").remove();
  $("#checkpoint-1").append(`<div id ="scene8">
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
  //Sentences
  let firstSentence =`"Boom!"`
  let secondSentence="The doors burst open!"
  let thirdSentence = "Sir Suriv turn around with a look of surprise"
  let fourthSentence = `"Well Well Well. Look who is here. Head Detective ${name}"`
  let fifthSentence = `You snorted,"Freeze! By the way am I famous?"`
  let sixthSentence = `"Surrender yourself now. You have the right to remain silent and refuse to answer questions. Anything you say may be used against you in a court of law. You have the right to consult an attorney before speaking to the police and to have an attorney present during questioning now or in the future."`
  let seventhSentence = `He replied,"Your reputation precedes you. Ha Ha Ha"`
  typingline(firstSentence,50,domFirst).then(function(){
    typingline(secondSentence,50,domSecond).then(function(){
      typingline(thirdSentence,50,domThird).then(function(){
        typingline(fourthSentence,50,domFourth).then(function(){
          typingline(fifthSentence,50,domFifth).then(function(){
            typingline(sixthSentence,30,domSixth).then(function(){
              typingline(seventhSentence,50,domSeven).then(function(){
                typingline("           ", 400, "#eightSentence").then(function(){
                  preEncounter()
                })
              })
            })
          })
        })
      })
    })
  })
}
function preEncounter(){
  $("#scene8").remove();
  var noOfQuestion = 5;
  $("#checkpoint-1").append(`<div id="pre-encounter">
  <h1>Encounter!</h1><br>
  <h3>Defeat Sir Suriv and obtain the vial of virus</h3><br>
  <h3>Try your best to answer all questions right</h3><br>
  <h3>There are X number of questions.</h3><br>
  <h3>Good luck.</h3>
  <button id="questionsButton">Arrest him!</button>
  </div>`);
  $("#pre-encounter").css({"margin":"0px 200px"})
  $("#questionsButton").css({"border-style":"none","background-color":"white","font-size":"14pt","margin-left":"60%"})
}