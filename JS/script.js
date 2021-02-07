$(document).ready(function(){
  $("#checkpoint-1").hide();
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
  $("#startGame").fadeOut(1600, function(){
    $("body").append(`<div id="charInfo" class="container" style="padding: 30px;"></div>`);
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
      $("body").append(`<div id="scenes" class="container" style="padding: 20px;">`);
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
      $("body").append(`<div id="scenes" class="container" style="padding: 20px;">`);
      scene1_2(); 
    });
  });
};

function scene1_2(){
  $("#scenes").append(`<h4 id="scene1-intro"></h4>
  <div class="clipboard" id="clipboard"></div>
  <h4 id="scene2-intro"></h4>`);
  $("#clipboard").hide();

  var disp1 = "Head Detective, you are in a meeting room in the Headquarter of Detectives and given the following information:";
  var dom1 = "#scene1-intro";

  var disp2 = "After understanding the whole situation, you left the meeting room and head out to find Sir Suriv...";
  var dom2 = "#scene2-intro";

  typingline(disp1, 80, dom1).then(function(){
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
      <h4 style="text-align: left; padding: 20px;"><i>From Global Task Force</i></h4>
      <button id="misson" class="missonBtn" style="margin: 10px;">Next</button>`);

      $("#misson").click(function () {
        $("#clipboard").fadeOut(1600, function(){
            typingline(disp2, 80, dom2).then(function(){
                $("#scene2-intro").delay(800).fadeOut(1600, function(){
                    map1();
                });
            });
        });
      });
    });
  });
};

function map1(){
  $("#scenes").append(`<h4 id="map1-intro"></h4>`);
  var disp = "Click on the next city to proceed:";
  var dom = "#map1-intro"

  typingline(disp, 100,dom).then(function(){
      $("#map1-intro").append(`<ul>
      <li>Headquarter</li>
      <li>Viole City</li>
      <li>Ascend City</li>
      <li>Ace City</li>
      </ul>`);
      //need fix map1 (replace with img)
      $("#map1-intro").delay(1000).fadeOut(1600, function(){
          scene3();
      });
  });
};

function scene3(){
  $("#scenes").append(`<h4 id="scene3-intro"></h4>
  <h4 id="scene3-text1"></h4>
  <h4 id="scene3-text2"></h4>`);

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
  $("#scenes").append(`<h4 id="scene4-intro"></h4>
  <h4 id="scene4-text1"></h4>
  <h4 id="scene4-text2"></h4>
  <h4 id="scene4-text3"></h4>
  <h4 id="scene4-text4"></h4>
  <h4 id="scene4-text5"></h4>
  <h4 id="scene4-text6"></h4>`);

  var disp1 = "The Mayor of the city came to greet you.";
  var disp2 = `"Dear Head Detective, have you come to see the situation?"`;
  var disp3 = "You nodded you head.";
  var disp4 = `He replied, "Well, this is the doing of Sir Suriv testing out a type of virus..."`
  var disp5 = "He then searched his drawers for a moment.";
  var disp6 = `"We are still investigating the situation. Here's what we know at this moment. Please have a look."`;
  var disp7 = "He handed you a deck of information:";
  
  var dom1 = "#scene4-intro";
  var dom2 = "#scene4-text1";
  var dom3 = "#scene4-text2";
  var dom4 = "#scene4-text3";
  var dom5 = "#scene4-text4";
  var dom6 = "#scene4-text5";
  var dom7 = "#scene4-text6";
  
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
      typingline(disp2, 80, dom2).then(function(){
        typingline(disp3, 80, dom3).then(function(){
          typingline(disp4, 80, dom4).then(function(){
            typingline(disp5, 80, dom5).then(function(){
              typingline(disp6, 80, dom6).then(function(){
                typingline(disp7, 80, dom7).then(function(){
                  $("#scene4-text1").delay(800).fadeOut(1600);
                  $("#scene4-text2").delay(800).fadeOut(1600);
                  $("#scene4-text3").delay(800).fadeOut(1600);
                  $("#scene4-text4").delay(800).fadeOut(1600);
                  $("#scene4-text5").delay(800).fadeOut(1600);
                  $("#scene4-text6").delay(800).fadeOut(1600, function(){
                    scene5();
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

function scene5(){
  $("#scenes").append(`<div class="information" id="information"></div>`);
  $("#information").hide();

  $("#information").fadeIn(1600);
  $("#information").prepend(`
  <h4 style="padding-bottom: 20px;">Virus Information</h4>
  <div class="row" id="symptoms"">
  <div class="col-sm" id="symptomTitle"></div>
  <div class="col-sm" id="symptomList"></div>
  </div>
  <button id="symptomsBtn1" class="symptomsBtn1" style="margin: 10px;">Next</button>`);

  $("#symptomTitle").append(`<h5 style="text-align: right">Symptoms of Virus:</h5>`);
  $("#symptomList").append(`<h5><ol>
  <li>Fever</li><li>Cough</li><li>Chills</li><li>Lose sense of smell</li><li>Headache</li></ol></h5>`);
  $("#symptoms").after(`<div id="rates" class="flex-container">
  <div style="padding: 30px; background-color:lightgrey;"><h5 id="deathRate">Death Rate:</h5></div>
  <div style="padding: 30px; background-color:lightgrey;"><h5 id="infectedRate">Infected Rate:</h5></div>
  </div>`);

  $("#symptomsBtn1").click(function(){
    $("#symptoms").fadeOut(1600);
    $("#rates").fadeOut(1600);
    $("#symptomsBtn1").fadeOut(1600, function(){
        $("#information").append(`<h5>Cities informed: Ascend City, Ace City</h5>
        <h5>Villian Last Seen: Viole Secret Royal Lab</h5>
        <h5>Image of Lab:</h5>
        <button id="symptomsBtn2" class="symptomsBtn2" style="margin: 10px;">Next</button>`);

        $("#symptomsBtn2").click(function(){
            $("#information").fadeOut(1600, function(){
              showdown1();
            });
        });
    });
  });
}

function showdown1(){
  $("#scenes").append(`<h4 id="showdown1-text1"></h4>
  <h4 id="showdown1-text2"></h4>
  <h4 id="showdown1-text3"></h4>
  <h4 id="showdown1-text4"></h4>
  <h4 id="showdown1-intro"></h4>`);

  var disp1 = `You returned the pile of information to the Mayor.`;
  var disp2 = `The situation is worsening...`;
  var disp3 = `You decided to head towards the Lab.`;
  var disp4 = `BANG! You kicked open the lab door...`;
  var disp5 = `You are now in the Lab. Click on the symptoms of COVID-19 to find traces left behind by the villian!`;

  var dom1 = "#showdown1-text1";
  var dom2 = "#showdown1-text2";
  var dom3 = "#showdown1-text3";
  var dom4 = "#showdown1-text4";
  var dom5 = "#showdown1-intro";

  typingline(disp1, 100, dom1).then(function(){
    typingline(disp2, 80, dom2).then(function(){
        typingline(disp3, 80, dom3).then(function(){
            $("#showdown1-text1").fadeOut(1600);
            $("#showdown1-text2").fadeOut(1600);
            $("#showdown1-text3").fadeOut(1600, function(){
                typingline(disp4, 100, dom4).then(function(){
                    $("#showdown1-text4").fadeOut(1600, function(){
                        typingline(disp5, 100, dom5).then(function(){
                          $("#showdown1-intro").append(`<div id="showdown1-quiz" class="flex-container2">
                            <div style="background-color: cadetblue;"><p>#1 </br> Nosebleeds</p></div>
                            <div style="background-color: cadetblue;"><p>#2 </br> Cough</p></div>
                            <div style="background-color: cadetblue;"><p>#3 </br> Fever</p></div>
                            <div style="background-color: cadetblue;"><p>#4 </br> Hunger</p></div>
                            <div style="background-color: cadetblue;"><p>#5 </br> Lose sense of smell</p></div>
                            <div style="background-color: cadetblue;"><p>#6 </br> Chills</p></div>
                            <div style="background-color: cadetblue;"><p>#7 </br> Stomach ache</p></div>
                            <div style="background-color: cadetblue;"><p>#8 </br> Headache</p></div>
                            </div>
                            <button id="showdownSubmit" class="showdownSubmit">Submit</button>`);

                          $("#showdownSubmit").click(function(){
                            $("#showdown1-intro").fadeOut(1600, function(){
                              clue1();
                            });
                          });
                        });
                    });
                });
            });
        });
    });
  });
}

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
  $("button").hide();
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
  typingline(heading, 70, domh4);
  let domp = "#newspaperLeft p";
  let paragraph = `With advance intel from Viole City, Ascend City 
has started to implement safe-distancing
measures. Citizens are to wear a mask at all 
times when they are out of their homes. Citizens
are to stay 1 meter or 6 feet apart when in queue.
Avoid crowded places. Now Ascend city is hunting
down Sir Suriv.`;
  typingline(paragraph, 20, domp).then(function () {
    $("button").show();
  });
  let name = "Name : Sir Suriv";
  let lastScene = "Last Seen : Abandoned Factory";
  let status = "Status : Police cordoning of area suspected";
  typingline("Wanted", 100, "#newspaperRight h2").then(function () {
    typingline(name, 30, "#newspaperRightName").then(function () {
      typingline(lastScene, 30, "#newspaperRightLastSeen").then(function () {
        typingline(status, 30, "#newspaperRightStatus").then(function () {
          $("#newspaperRight").append(`<img src="#" alt="map location">`);
        });
      });
    });
  });
  $("button").click(newspaperp2);
}
function newspaperp2() {
  $("#newspaper, #newspaperButton").remove();
  $("#checkpoint-1").append(`<div id = "newspaperp2">
  <h2>The Current Times</h2>
  <div class ="row">
    <div class = "col-sm" id = "newspaperLeft">
    <div id = "safeMangementMeasure">
      <h4></h4>
      <p></p>
      </div>
      <div id="masks">
      <h4></h4>
      <p></p>
      </div>    
    </div>
    <div class = "col-sm" id = "newspaperRight">
      <div id = "safeDistancingMeasure">
      <h4>Safe Distancing Measure</h4>
      <p></p>
      </div>
      <div id ="travelRestriction">
      <h4></h4>
      <p></p>
      </div>
    </div>
  </div>
  <br>
</div>`);
  $("#checkpoint-1").css({ "font-size": "14pt" });
  $("#checkpoint-1 h2").css({ "text-align": "center" });
  $("#checkpoint-1 .col-sm").css({ margin: "auto 40px" });
  $("#newspaperLeft p,#newspaperLeft h4,#newspaperRight").css({
    "margin-top": "30px",
  });
  //Safe Distancing Measures portion
  let domp = "#safeMangementMeasure p";
  let domh4 = "#safeMangementMeasure h4";
  let heading = "Safe Management Measures";
  let paragraph = `Company are to review their workplace measures. Jobs that can be done at home, 
  employees should work from home.
  Employers should ensure that there is work-life balance for employees working at home.`;
  typingline(heading, 75, domh4);
  typingline(paragraph, 20, domp).then(function () {
    $("#safeMangementMeasure").append(
      `<nav><button><a href = "https://www.mom.gov.sg/covid-19/requirements-for-safe-management-measures" target ="blank">Click for more information</a></button></nav>`
    );
    $("#safeMangementMeasure button").css({
      "font-size": "9pt",
      "background-color": "white",
      "border-style": "ridge",
      "border-radius": "15px",
      "border-width": "1px",
      "text-decoration": "none",
    });
  });
  // Mask portion
  let domMaskHeading = "#masks h4";
  let maskHeading = "Importance of wearing a mask";
  let dompMask = "#masks p";
  let maskP = `All citizens are to wear a masks when they leave their house. 
    Masks should be worn at all times except when exercising or eating.
    Wearing a mask helps to reduce the spread of virus.`;
  typingline(maskHeading, 75, domMaskHeading);
  typingline(maskP, 20, dompMask).then(function () {
    $("#masks").append(
      `<nav><button><a href = "https://www.gov.sg/article/the-science-behind-why-masks-help-prevent-covid-19-spread" target ="blank">Click for more information</a></button></nav>`
    );
    $("#masks button").css({
      "font-size": "9pt",
      "background-color": "white",
      "border-style": "ridge",
      "border-radius": "15px",
      "border-width": "1px",
      "text-decoration": "none",
    });
  });
  let domSDMp = "#safeDistancingMeasure p";
  let domSDMh4 = "#safeDistancingMeasure h4";
  let headingSDM = "Safe Distancing Measures";
  let pSDM = `Safe distancing measures are implemented to keep citizens safe.
   Citizens are to stand at least 1m or 6 feet apart from one another in queue, indoor and outdoor spaces. 
   Covid-19 can be transmitted easily through close contact.`;
  typingline(headingSDM, 75, domSDMh4);
  typingline(pSDM, 20, domSDMp).then(function () {
    $("#safeDistancingMeasure").append(
      `<nav><button><a href = "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html" target ="blank">Click for more information</a></button></nav><br>`
    );
    $("#safeDistancingMeasure button").css({
      "font-size": "9pt",
      "background-color": "white",
      "border-style": "ridge",
      "border-radius": "15px",
      "border-width": "1px",
      "text-decoration": "none",
    });
  });
  let domTRp = "#travelRestriction p";
  let domTRh4 = "#travelRestriction h4";
  let headingTR = "Travel Restriction";
  let pTR = `During this period, citizens are not allowed to leave the city to travel to other city.
  This is to stop the spread of the virus. Citizens are also advised not to travel for activities 
  that are large social gathering such as party or mass events such as concert. Citizens are also advised
  not to go on a holiday cruise during this period`;
  typingline(headingTR, 75, domTRh4);
  typingline(pTR, 15, domTRp).then(function () {
    $("#travelRestriction").append(
      `<nav><button><a href = "https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html" target ="blank">Click for more information</a></button></nav>`
    );
    $("#travelRestriction button").css({
      "font-size": "9pt",
      "background-color": "white",
      "border-style": "ridge",
      "border-radius": "15px",
      "border-width": "1px",
      "text-decoration": "none",
    });
    $("#newspaperp2").append(
      `<button id="scene7Button">Read Finish-></button>`
    );
    $("#scene7Button").css({
      "font-size": "13pt",
      "background-color": "white",
      "border-style": "ridge",
      "border-radius": "15px",
      "border-width": "1px",
      "margin-left": "45%",
    });
    $("#scene7Button").click(scene7);
  });
}
function scene7() {
  $("#newspaperp2").remove();
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
  $("#checkpoint-1").css({ "font-size": "18pt" });
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
  let firstSentence =
    "You rushed over to the abandoned factory location seen from the newspaper";
  let secondSentence =
    "When you arrived at the location, you see police tape around the building";
  let thirdSentence =
    "You tried to cross over the tape, and a police officer tried to stop you";
  let fourthSentence =
    "You showed your detective pass and entered the abandoned building";
  let fifthSentence = `"HA HA HA HA HA HA HA HA"`;
  let sixthSentence =
    "You heard a maniac laughter a distance away, and you walked towards the sound";
  let sevenSentence = ". . . . .";
  let eightSentence = "The laughter seems to be behind these doors";
  typingline(firstSentence, 50, domFirst).then(function () {
    typingline(secondSentence, 75, domSecond).then(function () {
      typingline(thirdSentence, 50, domThird).then(function () {
        //Maybe can allow player to choose the police pass
        typingline(fourthSentence, 50, domFourth).then(function () {
          typingline(fifthSentence, 50, domFifth).then(function () {
            typingline(sixthSentence, 50, domSixth).then(function () {
              typingline(sevenSentence, 500, domSeven).then(function () {
                typingline(eightSentence, 50, domEight).then(function () {
                  $("#checkpoint-1").append(
                    `<button id = "scene8Button">Kick the doors open!</button>`
                  );
                  $("#scene8Button").css({
                    "border-style": "none",
                    "margin-left": "75%",
                    "backgound-color": "white",
                    "font-size": "10pt",
                  });
                  $("#scene8Button").click(scene8);
                });
              });
            });
          });
        });
      });
    });
  });
}
function scene8() {
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
  $("#checkpoint-1").css({ "font-size": "18pt" });
  //The element selector
  let domFirst = "#firstSentence";
  let domSecond = "#secondSentence";
  let domThird = "#thirdSentence";
  let domFourth = "#fourthSentence";
  let domFifth = "#fifthSentence";
  let domSixth = "#sixthSentence";
  let domSeven = "#sevenSentence";
  //Sentences
  let firstSentence = `"Boom!"`;
  let secondSentence = "The doors burst open!";
  let thirdSentence = "Sir Suriv turn around with a look of surprise";
  let fourthSentence = `"Well Well Well. Look who is here. Head Detective ${name}"`;
  let fifthSentence = `You snorted,"Freeze! By the way am I famous?"`;
  let sixthSentence = `"Surrender yourself now. You have the right to remain silent and refuse to answer questions. Anything you say may be used against you in a court of law. You have the right to consult an attorney before speaking to the police and to have an attorney present during questioning now or in the future."`;
  let seventhSentence = `He replied,"Your reputation precedes you. Ha Ha Ha"`;
  typingline(firstSentence, 50, domFirst).then(function () {
    typingline(secondSentence, 50, domSecond).then(function () {
      typingline(thirdSentence, 50, domThird).then(function () {
        typingline(fourthSentence, 50, domFourth).then(function () {
          typingline(fifthSentence, 50, domFifth).then(function () {
            typingline(sixthSentence, 30, domSixth).then(function () {
              typingline(seventhSentence, 50, domSeven).then(function () {
                typingline("           ", 400, "#eightSentence").then(
                  function () {
                    preEncounter();
                  }
                );
              });
            });
          });
        });
      });
    });
  });
}
function preEncounter() {
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
  $("#pre-encounter").css({ margin: "0px 200px" });
  $("#questionsButton").css({
    "border-style": "none",
    "background-color": "white",
    "font-size": "14pt",
    "margin-left": "60%",
  });
  $("#questionsButton").click(encounter);
}
function encounter() {
  $("#pre-encounter").remove();
  $("#checkpoint-1").append(`<div id = "encounter">
  <div class ="row">
    <div class = "col-sm" id ="player">
      <h3>${name}</h3>
      <img src ="#" alt= "Player character">
      <div>
        <div class="healthBar">
            <p class ="health"id="playerHealth">Health</p>
        </div>
    </div>
    </div>
    <div class = "col-sm" id ="villain">
      <h3>Sir Suriv</h3>
      <img src ="#" alt= "Villain character">
      <div>
        <div class="healthBar">
            <div class ="health"id="villainHealth"><span>Health</span></div>
        </div>
    </div>
    </div>
  </div>
  <div id="question">
    <div id="question1"></div>
    <div id = "q1A"></div>
    <div id = "q1B"></div>
    <div id = "q1C"></div>
    <div id = "q1D"></div>
    <div>Click on the options below</div>
    <div class="row">
      <button class = "col-sm" id = "optionA">A</button>
      <button class = "col-sm" id = "optionB">B</button>
      <button class = "col-sm" id = "optionC">C</button>
      <button class = "col-sm" id = "optionD">D</button>
    </div>
  </div>
</div>`);
  $(".healthBar").css({
    width: "80%",
    "border-style": "solid",
    "border-width": "1px",
    margin: "0px auto",
    "border-radius": "10px",
  });
  $(".health").css({
    margin: "0px",
    "text-align": "center",
    "background-color": "lightgreen",
    "border-radius": "10px",
  });
  $("button").css({
    margin: "5px",
    "border-radius": "5px",
    "border-width": "1px",
  });
  // dom buttons
  let domOptionA = "#optionA";
  let domOptionB = "#optionB";
  let domOptionC = "#optionC";
  let domOptionD = "#optionD";
  // dom question
  let domQuestion1 = "#question1";
  let domQuestions = "#questions";
  //Questions
  // To be created later
  let question1 = "Answer is c";
  let question2 = "Answer is A";
  let question3 = "Answer is C";
  let question4 = "Answer is D";
  let question5 = "Answer is B";
  //number of questions right
  let qRight = 0;
  let playerHealth = 100;
  let villainHealth = 100;
  firstQuestion().then(function (message) {
    validateOption(message);
    //Remove question and add new question
    questionSet();
    secondQuestion().then(function (message) {
      validateOption(message);
      questionSet();
      thirdQuestion().then(function (message) {
        validateOption(message);
        questionSet();
        fourthQuestion().then(function (message) {
          validateOption(message);
          questionSet();
          fifthQuestion().then(function (message) {
            validateOption(message);
            encounterReview(qRight);
          });
        });
      });
    });
  });
  function validateOption(message) {
    if (message == "true") {
      //Need add points
      villainHealth -= 19.8;
      let disp = villainHealth + "%";
      $("#villainHealth").css({ width: disp });
      if (villainHealth < 25) {
        $("#villainHealth").css({ "background-color": "red" });
      } else if (villainHealth < 45) {
        $("#villainHealth").css({ "background-color": "orange" });
      } else if (villainHealth < 65) {
        $("#villainHealth").css({ "background-color": "yellow" });
      }
      qRight += 1;
    } else {
      playerHealth -= 19.9;
      let disp = playerHealth + "%";
      // need deduct point
      $("#playerHealth").css({ width: disp });
      if (playerHealth < 25) {
        $("#playerHealth").css({ "background-color": "red" });
      } else if (playerHealth < 45) {
        $("#playerHealth").css({ "background-color": "orange" });
      } else if (playerHealth < 65) {
        $("#playerHealth").css({ "background-color": "yellow" });
      }
    }
  }
  function questionSet() {
    $("#question").remove();
    $("#encounter").append(`
    <div id="question">
    <div id="questions"></div>
    <div id = "q1A"></div>
    <div id = "q1B"></div>
    <div id = "q1C"></div>
    <div id = "q1D"></div>
    <div>Click on the options below</div>
    <div class="row">
      <button class = "col-sm" id = "optionA">A</button>
      <button class = "col-sm" id = "optionB">B</button>
      <button class = "col-sm" id = "optionC">C</button>
      <button class = "col-sm" id = "optionD">D</button>
    </div>
  </div>`);
    $("button").css({
      margin: "5px",
      "border-radius": "5px",
      "border-width": "1px",
    });
  }
  function firstQuestion() {
    let optionA = "A is wrong";
    let optionB = "B is wrong";
    let optionC = "C is correct";
    let optionD = "D is wrong";
    typingline(question1, 50, domQuestion1);
    typingline(optionA, 50, "#q1A");
    typingline(optionB, 50, "#q1B");
    typingline(optionC, 50, "#q1C");
    typingline(optionD, 50, "#q1D");
    return new Promise(function (resolve) {
      $(`${domOptionA},${domOptionB},${domOptionD}`).click(function () {
        resolve("false");
      });
      $(domOptionC).click(function () {
        resolve("true");
      });
    });
  }
  function secondQuestion() {
    let optionA = "A is right";
    let optionB = "B is wrong";
    let optionC = "C is wrong";
    let optionD = "D is wrong";
    typingline(question2, 50, domQuestions);
    typingline(optionA, 50, "#q1A");
    typingline(optionB, 50, "#q1B");
    typingline(optionC, 50, "#q1C");
    typingline(optionD, 50, "#q1D");
    return new Promise(function (resolve) {
      $(`${domOptionC},${domOptionB},${domOptionD}`).click(function () {
        resolve("false");
      });
      $(domOptionA).click(function () {
        resolve("true");
      });
    });
  }
  function thirdQuestion() {
    let optionA = "A is wrong";
    let optionB = "B is wrong";
    let optionC = "C is correct";
    let optionD = "D is wrong";
    typingline(question3, 50, domQuestions);
    typingline(optionA, 50, "#q1A");
    typingline(optionB, 50, "#q1B");
    typingline(optionC, 50, "#q1C");
    typingline(optionD, 50, "#q1D");
    return new Promise(function (resolve) {
      $(`${domOptionA},${domOptionB},${domOptionD}`).click(function () {
        resolve("false");
      });
      $(domOptionC).click(function () {
        resolve("true");
      });
    });
  }
  function fourthQuestion() {
    let optionA = "A is wrong";
    let optionB = "B is wrong";
    let optionC = "C is wrong";
    let optionD = "D is right";
    typingline(question4, 50, domQuestions);
    typingline(optionA, 50, "#q1A");
    typingline(optionB, 50, "#q1B");
    typingline(optionC, 50, "#q1C");
    typingline(optionD, 50, "#q1D");
    return new Promise(function (resolve) {
      $(`${domOptionC},${domOptionB},${domOptionA}`).click(function () {
        resolve("false");
      });
      $(domOptionD).click(function () {
        resolve("true");
      });
    });
  }
  function fifthQuestion() {
    let optionA = "A is wrong";
    let optionB = "B is right";
    let optionC = "C is wrong";
    let optionD = "D is wrong";
    typingline(question5, 50, domQuestions);
    typingline(optionA, 50, "#q1A");
    typingline(optionB, 50, "#q1B");
    typingline(optionC, 50, "#q1C");
    typingline(optionD, 50, "#q1D");
    return new Promise(function (resolve) {
      $(`${domOptionC},${domOptionD},${domOptionA}`).click(function () {
        resolve("false");
      });
      $(domOptionB).click(function () {
        resolve("true");
      });
    });
  }
}
function encounterReview(qRight) {
  $("#encounter").remove();
  $("#checkpoint-1").append(`<div id = "encounterReview">
  <h1>You got <span id ="qRight"></span>/5 questions correct!</h1>
  <div id ="statement"></div>
  <button>Next</button>
</div>`);
  $("button").css({
    "border-style": "none",
    "margin-left": "55%",
    "backgound-color": "white",
    "font-size": "10pt",
  });
  $("#qRight").text(qRight);
  if (qRight > 3) {
    let statement = "Excellent work detective!";
    $("#statement").text(statement);
  } else {
    let statement = "Try again next time detective";
    $("#statement").text(statement);
  }
  $("#encounterReview button").click(function () {
    postEncounter(qRight);
  });
}
function postEncounter(qRight) {
  $("#encounterReview").remove();
  $("#checkpoint-1").append(`<div id ="postEncounter">
  <div id="firstSentence"></div>
  <div id="secondSentence"></div>
  <div id="thirdSentence"></div>
  <div id="fourthSentence"></div>
  <div id="fifthSentence"></div>
  <div id="sixthSentence"></div>
  <div id="sevenSentence"></div>
  <div id="eightSentence"></div>
  </div>`);
  let domFirst = "#firstSentence";
  let domSecond = "#secondSentence";
  let domThird = "#thirdSentence";
  let domFourth = "#fourthSentence";
  let domFifth = "#fifthSentence";
  let domSixth = "#sixthSentence";
  let domSeven = "#sevenSentence";
  let domEight = "#eightSentence";
  let firstSentence;
  let secondSentence;
  let thirdSentence;
  if (qRight > 3) {
    firstSentence = "You thought you got him";
    secondSentence = "His reaction was faster, he stunt you with a taser!";
    thirdSentence = `"Close one! Too naive Head Detective ${name}`;
  } else {
    firstSentence = "You almost got him!";
    secondSentence =
      "You let him slipped away and stunt you due to your mistakes!";
    thirdSentence = `"See you next time Head Detective ${name}, I am the first to escape from your grasp`;
  }
  let fourthSentence = `Ha Ha Ha"`;
  let fifthSentence =
    "He laughed as he walked away and escape via the sewers under the factory";
  let sixthSentence =
    "As you lie on the floor groaning and cursing, you saw a note on the wall";
  let seventhSentence = "        ";
  let eightSentence = `"Ace City!"`;
  let nineSentence = "You panicked and soon lost consciousness";
  typingline(firstSentence, 75, domFirst).then(function () {
    typingline(secondSentence, 50, domSecond).then(function () {
      typingline(thirdSentence, 50, domThird).then(function () {
        typingline(fourthSentence, 150, domFourth).then(function () {
          typingline(fifthSentence, 50, domFifth).then(function () {
            typingline(sixthSentence, 50, domSixth).then(function () {
              typingline(seventhSentence, 250, domSeven).then(function () {
                typingline(eightSentence, 50, domSeven).then(function () {
                  typingline(nineSentence, 50, domEight).then(function () {
                    //add button to next function
                    $("#checkpoint-1").append(
                      `<button id = "hospitalButton">Next</button>`
                    );
                    $("#hospitalButton").css({
                      "border-style": "none",
                      "margin-left": "75%",
                      "backgound-color": "white",
                      "font-size": "10pt",
                    });
                    $("#hospitalButton").click(hospitalScene);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}
function hospitalScene() {
  $("#postEncounter, #hospitalButton").remove();
  $("#checkpoint-1").append(`<div id ="hospitalScene">
  <div><span id = "firstSpan"></span> <span id = "secondSpan"></span> <span id = "thirdSpan"></span> <span id = "fourthSpan"></span></div>
  <div id="firstSentence"></div>
  <div id="secondSentence"></div>
  <div id="thirdSentence"></div>
  <div id="fourthSentence"></div>
  <div id="fifthSentence"></div>
  <div id="sixthSentence"></div>
  <div id="sevenSentence"></div>
  <div id="eightSentence"></div>
  </div>`);

  let domFirst = "#firstSentence";
  let domSecond = "#secondSentence";
  let domThird = "#thirdSentence";
  let domFourth = "#fourthSentence";
  let domFifth = "#fifthSentence";
  let domSixth = "#sixthSentence";
  let domSeven = "#sevenSentence";
  let domEight = "#eightSentence";
  let domSpan1 = "#firstSpan";
  let domSpan2 = "#secondSpan";
  let domSpan3 = "#thirdSpan";
  let domSpan4 = "#fourthSpan";
  $(domSpan1).css({ "font-size": "20pt" });
  $(domSpan2).css({ "font-size": "18pt" });
  $(domSpan3).css({ "font-size": "16pt" });
  $(domSpan4).css({ "font-size": "14pt" });
  let span = `"HA"`;
  let firstSentence =
    "You woke up in a start! The laugther continued to ring in your head";
  let secondSentence = `"Good Morning, Head Detective ${name}! I hope that you are not badly hurt from the incident"`;
  let thirdSentence = `Someone wearing a neat business suit greeted you.`;
  let fourthSentence = `You focused your eyes and looked at that person`;
  let fifthSentence = `'Minister of Health!'`;
  let sixthSentence = "You exclaimed inwardly.";
  let seventhSentence = `'What is he doing here?'`;
  let eightSentence =
    "Seeing your puzzled look, the minister handed you a report.";
  typingline(span, 100, domSpan1).then(function () {
    typingline(span, 100, domSpan2).then(function () {
      typingline(span, 100, domSpan3).then(function () {
        typingline(span, 100, domSpan4).then(function () {
          typingline(firstSentence, 75, domFirst).then(function () {
            typingline(secondSentence, 50, domSecond).then(function () {
              typingline(thirdSentence, 50, domThird).then(function () {
                typingline(fourthSentence, 150, domFourth).then(function () {
                  typingline(fifthSentence, 50, domFifth).then(function () {
                    typingline(sixthSentence, 50, domSixth).then(function () {
                      typingline(seventhSentence, 250, domSeven).then(
                        function () {
                          typingline(eightSentence, 50, domEight).then(
                            function () {
                              //Add button to next function
                              $("#checkpoint-1").append(
                                `<button id = "viewReportButton">View Report</button>`
                              );
                              $("#viewReportButton").css({
                                "border-style": "none",
                                "margin-left": "75%",
                                "backgound-color": "white",
                                "font-size": "10pt",
                              });
                              $("#viewReportButton").click(overview);
                            }
                          );
                        }
                      );
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}