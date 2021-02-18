//Variables
//List of Country
let jsonCountry = [
  {
    country: "Afghanistan",
  },
  {
    country: "Albania",
  },
  {
    country: "Algeria",
  },
  {
    country: "Andorra",
  },
  {
    country: "Angola",
  },
  {
    country: "Anguilla",
  },
  {
    country: "Antigua and Barbuda",
  },
  {
    country: "Argentina",
  },
  {
    country: "Armenia",
  },
  {
    country: "Aruba",
  },
  {
    country: "Australia",
  },
  {
    country: "Austria",
  },
  {
    country: "Azerbaijan",
  },
  {
    country: "Bahamas",
  },
  {
    country: "Bahrain",
  },
  {
    country: "Bangladesh",
  },
  {
    country: "Barbados",
  },
  {
    country: "Belarus",
  },
  {
    country: "Belgium",
  },
  {
    country: "Belize",
  },
  {
    country: "Benin",
  },
  {
    country: "Bermuda",
  },
  {
    country: "Bhutan",
  },
  {
    country: "Bolivia",
  },
  {
    country: "Bosnia",
  },
  {
    country: "Botswana",
  },
  {
    country: "Brazil",
  },
  {
    country: "British Virgin Islands",
  },
  {
    country: "Brunei",
  },
  {
    country: "Bulgaria",
  },
  {
    country: "Burkina Faso",
  },
  {
    country: "Burundi",
  },
  {
    country: "Cabo Verde",
  },
  {
    country: "Cambodia",
  },
  {
    country: "Cameroon",
  },
  {
    country: "Canada",
  },
  {
    country: "Caribbean Netherlands",
  },
  {
    country: "Cayman Islands",
  },
  {
    country: "Central African Republic",
  },
  {
    country: "Chad",
  },
  {
    country: "Channel Islands",
  },
  {
    country: "Chile",
  },
  {
    country: "China",
  },
  {
    country: "Colombia",
  },
  {
    country: "Comoros",
  },
  {
    country: "Congo",
  },
  {
    country: "Costa Rica",
  },
  {
    country: "Croatia",
  },
  {
    country: "Cuba",
  },
  {
    country: "Curaçao",
  },
  {
    country: "Cyprus",
  },
  {
    country: "Czechia",
  },
  {
    country: "Côte d'Ivoire",
  },
  {
    country: "DRC",
  },
  {
    country: "Denmark",
  },
  {
    country: "Diamond Princess",
  },
  {
    country: "Djibouti",
  },
  {
    country: "Dominica",
  },
  {
    country: "Dominican Republic",
  },
  {
    country: "Ecuador",
  },
  {
    country: "Egypt",
  },
  {
    country: "El Salvador",
  },
  {
    country: "Equatorial Guinea",
  },
  {
    country: "Eritrea",
  },
  {
    country: "Estonia",
  },
  {
    country: "Ethiopia",
  },
  {
    country: "Falkland Islands (Malvinas)",
  },
  {
    country: "Faroe Islands",
  },
  {
    country: "Fiji",
  },
  {
    country: "Finland",
  },
  {
    country: "France",
  },
  {
    country: "French Guiana",
  },
  {
    country: "French Polynesia",
  },
  {
    country: "Gabon",
  },
  {
    country: "Gambia",
  },
  {
    country: "Georgia",
  },
  {
    country: "Germany",
  },
  {
    country: "Ghana",
  },
  {
    country: "Gibraltar",
  },
  {
    country: "Greece",
  },
  {
    country: "Greenland",
  },
  {
    country: "Grenada",
  },
  {
    country: "Guadeloupe",
  },
  {
    country: "Guatemala",
  },
  {
    country: "Guinea",
  },
  {
    country: "Guinea-Bissau",
  },
  {
    country: "Guyana",
  },
  {
    country: "Haiti",
  },
  {
    country: "Holy See (Vatican City State)",
  },
  {
    country: "Honduras",
  },
  {
    country: "Hong Kong",
  },
  {
    country: "Hungary",
  },
  {
    country: "Iceland",
  },
  {
    country: "India",
  },
  {
    country: "Indonesia",
  },
  {
    country: "Iran",
  },
  {
    country: "Iraq",
  },
  {
    country: "Ireland",
  },
  {
    country: "Isle of Man",
  },
  {
    country: "Israel",
  },
  {
    country: "Italy",
  },
  {
    country: "Jamaica",
  },
  {
    country: "Japan",
  },
  {
    country: "Jordan",
  },
  {
    country: "Kazakhstan",
  },
  {
    country: "Kenya",
  },
  {
    country: "Kuwait",
  },
  {
    country: "Kyrgyzstan",
  },
  {
    country: "Lao People's Democratic Republic",
  },
  {
    country: "Latvia",
  },
  {
    country: "Lebanon",
  },
  {
    country: "Lesotho",
  },
  {
    country: "Liberia",
  },
  {
    country: "Libyan Arab Jamahiriya",
  },
  {
    country: "Liechtenstein",
  },
  {
    country: "Lithuania",
  },
  {
    country: "Luxembourg",
  },
  {
    country: "MS Zaandam",
  },
  {
    country: "Macao",
  },
  {
    country: "Macedonia",
  },
  {
    country: "Madagascar",
  },
  {
    country: "Malawi",
  },
  {
    country: "Malaysia",
  },
  {
    country: "Maldives",
  },
  {
    country: "Mali",
  },
  {
    country: "Malta",
  },
  {
    country: "Marshall Islands",
  },
  {
    country: "Martinique",
  },
  {
    country: "Mauritania",
  },
  {
    country: "Mauritius",
  },
  {
    country: "Mayotte",
  },
  {
    country: "Mexico",
  },
  {
    country: "Micronesia",
  },
  {
    country: "Moldova",
  },
  {
    country: "Monaco",
  },
  {
    country: "Mongolia",
  },
  {
    country: "Montenegro",
  },
  {
    country: "Montserrat",
  },
  {
    country: "Morocco",
  },
  {
    country: "Mozambique",
  },
  {
    country: "Myanmar",
  },
  {
    country: "Namibia",
  },
  {
    country: "Nepal",
  },
  {
    country: "Netherlands",
  },
  {
    country: "New Caledonia",
  },
  {
    country: "New Zealand",
  },
  {
    country: "Nicaragua",
  },
  {
    country: "Niger",
  },
  {
    country: "Nigeria",
  },
  {
    country: "Norway",
  },
  {
    country: "Oman",
  },
  {
    country: "Pakistan",
  },
  {
    country: "Palestine",
  },
  {
    country: "Panama",
  },
  {
    country: "Papua New Guinea",
  },
  {
    country: "Paraguay",
  },
  {
    country: "Peru",
  },
  {
    country: "Philippines",
  },
  {
    country: "Poland",
  },
  {
    country: "Portugal",
  },
  {
    country: "Qatar",
  },
  {
    country: "Romania",
  },
  {
    country: "Russia",
  },
  {
    country: "Rwanda",
  },
  {
    country: "Réunion",
  },
  {
    country: "S. Korea",
  },
  {
    country: "Saint Kitts and Nevis",
  },
  {
    country: "Saint Lucia",
  },
  {
    country: "Saint Martin",
  },
  {
    country: "Saint Pierre Miquelon",
  },
  {
    country: "Saint Vincent and the Grenadines",
  },
  {
    country: "Samoa",
  },
  {
    country: "San Marino",
  },
  {
    country: "Sao Tome and Principe",
  },
  {
    country: "Saudi Arabia",
  },
  {
    country: "Senegal",
  },
  {
    country: "Serbia",
  },
  {
    country: "Seychelles",
  },
  {
    country: "Sierra Leone",
  },
  {
    country: "Singapore",
  },
  {
    country: "Sint Maarten",
  },
  {
    country: "Slovakia",
  },
  {
    country: "Slovenia",
  },
  {
    country: "Solomon Islands",
  },
  {
    country: "Somalia",
  },
  {
    country: "South Africa",
  },
  {
    country: "South Sudan",
  },
  {
    country: "Spain",
  },
  {
    country: "Sri Lanka",
  },
  {
    country: "St. Barth",
  },
  {
    country: "Sudan",
  },
  {
    country: "Suriname",
  },
  {
    country: "Swaziland",
  },
  {
    country: "Sweden",
  },
  {
    country: "Switzerland",
  },
  {
    country: "Syrian Arab Republic",
  },
  {
    country: "Taiwan",
  },
  {
    country: "Tajikistan",
  },
  {
    country: "Tanzania",
  },
  {
    country: "Thailand",
  },
  {
    country: "Timor-Leste",
  },
  {
    country: "Togo",
  },
  {
    country: "Trinidad and Tobago",
  },
  {
    country: "Tunisia",
  },
  {
    country: "Turkey",
  },
  {
    country: "Turks and Caicos Islands",
  },
  {
    country: "UAE",
  },
  {
    country: "UK",
  },
  {
    country: "USA",
  },
  {
    country: "Uganda",
  },
  {
    country: "Ukraine",
  },
  {
    country: "Uruguay",
  },
  {
    country: "Uzbekistan",
  },
  {
    country: "Vanuatu",
  },
  {
    country: "Venezuela",
  },
  {
    country: "Vietnam",
  },
  {
    country: "Wallis and Futuna",
  },
  {
    country: "Western Sahara",
  },
  {
    country: "Yemen",
  },
  {
    country: "Zambia",
  },
  {
    country: "Zimbabwe",
  },
];
$(document).ready(function () {
  $("#checkpoint-1").hide();
  $("div#userInputM").hide();
  $("div#userInputF").hide();

  function getGlobal() {
    var settings = {
      url: "https://disease.sh/v3/covid-19/all",
      method: "GET",
      timeout: 0,
      headers: {
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
});

$("#ackn").click(function () {
  window.location.href = "acknowledge.html";
});
$("#leaderBoardBtn").click(function () {
  $("#startGame").remove();
  $("#content").append(
    `<div id="scenes" class="container" style="padding: 20px;">`
  );
  leaderboard();
});
$("#start").click(function () {
  $("#start,#ackn").remove();
  let pastGame = localStorage.checkpoint;
  if (pastGame > 0 && pastGame < 17) {
    $("#startGame").remove();
    $("#content").append(
      `<div id="scenes" class="container" style="padding: 20px;">`
    );
    if (pastGame == 1) {
      scene1_2();
    } else if (pastGame == 2) {
      map1();
    } else if (pastGame == 3) {
      scene3();
    } else if (pastGame == 4) {
      scene4();
    } else if (pastGame == 5) {
      scene5();
    } else if (pastGame == 6) {
      showdown1();
    } else if (pastGame == 7) {
      clue1();
    } else if (pastGame == 8) {
      scene6();
    } else if (pastGame == 9) {
      newspaper();
    } else if (pastGame == 10) {
      scene7();
    } else if (pastGame == 11) {
      scene8();
    } else if (pastGame == 12) {
      preEncounter();
    } else if (pastGame == 13) {
      hospitalScene();
    } else if (pastGame == 14) {
      overview();
    } else if (pastGame == 15) {
      mission();
    } else if (pastGame == 16) {
      missingVial();
    }
  } else {
    $("#startGame").fadeOut(750, function () {
      $("#content").append(
        `<div id="charInfo" class="container" style="padding: 30px;"></div>`
      );
      $(
        "#charInfo"
      ).append(`<h2 id="userHeading" style="text-align: center;">How Should We Address You?</h2>
    <div class="row">
    <div id="genderM" class="col-sm">
      <a href="#" id="male" role="button" style="text-decoration: none;">Male</a><br>
      <img id="maleImg" src="Images/male.png" style="height:260px;">
      <div id="userInputM" style="padding-top: 20px;">
      </div>
    </div>
    <div id="genderF" class="col-sm">
      <a href="#" id="female" role="button" style="text-decoration: none;">Female</a><br>
      <img id="femaleImg" src="Images/female.png" style="height:260px;">
      <div id="userInputF" style="padding-top: 20px;">
      </div>
    </div>
    </div>`);
      userChar();
    });
  }
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
    }
  });
}

function userChar() {
  $("#genderM").click(function () {
    document.getElementById("genderF").remove();
    $("#maleImg").remove();
    let dom = "#userInputM";
    localStorage.gender = "m";
    form(dom);
  });

  $("#genderF").click(function () {
    document.getElementById("genderM").remove();
    $("#femaleImg").remove();
    let dom = "#userInputF";
    localStorage.gender = "f";
    form(dom);
  });
  function form(dom) {
    $(dom).append(`<div id="userInput" style="padding-top: 20px;">
      <div id = "name"><label for="userName">Enter Your Name: </label>
        <input type="text" id="userName" name="userName" placeholder="Name" style="width: 300px;"></div><br>
      <div id = "age"><label for="userName">Enter Your Age: </label>
        <input type="number" id="userAge" name="userAge" placeholder="Age" style="width: 300px;"></div><br>
      <div id = "uCountry"><label for="userName">Enter Your Country: </label>
        <input type="text" id="userCountry" name="userCountry" placeholder="Country" style="width: 300px;"></div>
        <div id = "button"><button id="continue" class="continueBtn" style="margin-top: 10px; text-align: center;">Continue</button></div></div>
        `);
    $(dom).css({ width: "600px", margin: "0px auto" });
    $("div#name, div#age, div#uCountry").css({ "margin-top": "10px" });
    $("label").css({ float: "left" });
    $("input").css({ float: "right" });
    $("#userInput").css({
      padding: "0px",
      margin: "0px",
      "justify-content": "center",
    });
    $("button").css({
      float: "left",
      "border-width": "1px",
      "border-radius": "15px",
      "font-size": "12pt",
    });
    $("#button").css({ "text-align": "left" });
    //Search function
    $("#userCountry").keyup(function () {
      $("#countryList").remove();
      let userInput = $("#userCountry").val().toUpperCase();
      let inputLength = userInput.length;
      let index = [];

      for (i = 0; i < jsonCountry.length; i++) {
        let countryName = jsonCountry[i].country
          .slice(0, inputLength)
          .toUpperCase();

        if (userInput == countryName) {
          index.push(i);
          console.log(i);
          console.log(index);
        }
      }
      $("#uCountry").append("<div id='countryList'></div>");
      for (a = 0; a < index.length; a++) {
        let countryNumber = index[a];
        console.log(countryNumber);
        let countryName = jsonCountry[countryNumber].country;
        $("#countryList").append(
          `<div><button id = '${countryNumber}' class = "country" value = "${countryName}">${countryName}</button></div>`
        );
        $(`#${countryNumber}`).css({
          width: "298px",
          "border-style": "none",
          "background-color": "white",
        });
      }
      $("#countryList").css({
        "border-style": "none solid solid solid",
        width: "300px",
        "border-width": "1px",
        float: "right",
        "font-size": "10pt",
      });
      $(".country").click(function () {
        let country = $(this).val();
        $("#userCountry").val(country);
        $("#countryList").remove();
      });
    });
    //Validate Form
    $("#continue").click(function () {
      $("#userName,#userAge,#userCountry").css({ "background-color": "white" });
      let userName = $("#userName").val();
      let userAge = $("#userAge").val();
      let country = $("#userCountry").val();
      let countryFilled = false;
      if (country.length == 0) {
        $("#userCountry").css({ "background-color": "pink" });
      } else {
        let isInList = false;
        for (i = 0; i < jsonCountry.length; i++) {
          let countryName = jsonCountry[i].country;
          if (countryName == country) {
            isInList = true;
            break;
          } else {
            continue;
          }
        }
        if (isInList == true) {
          countryFilled = true;
        } else {
          $("#userCountry").css({ "background-color": "pink" });
        }
      }
      if ((userAge <= 0 || userAge == null) && userName.length == 0) {
        $("#userName").css({ "background-color": "pink" });
        $("#userAge").css({ "background-color": "pink" });
      } else if (userName.length == 0) {
        $("#userName").css({ "background-color": "pink" });
      } else if (userAge <= 0 || userAge == null) {
        $("#userAge").css({ "background-color": "pink" });
      } else {
        console.log("hi");
        if (countryFilled == true) {
          localStorage.name = userName;
          localStorage.country = country;
          let d = new Date();
          let time = d.getTime();
          localStorage.time = time;
          document.getElementById("charInfo").remove();
          $("#content").append(
            `<div id="scenes" class="container" style="padding: 20px;">`
          );
          loading();
        }
      }
    });
  }
}

function loading() {
  $("#scenes").append(`
  <div id="animation" class="animation-center">
    <div style="display:block;">
    <lottie-player src="https://assets3.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
  </div>
  <div id="loading-text" class="loading-text"></div>
  <h5 id="notice" class="loading-text" style="padding-top:50px;"></h5>`)

  var disp1 = "Loading... Please wait";
  var disp2 = "The following story is purely fictitious and any resemblance to real persons, living or dead, or events is coincidental.";
  var dom1 = "#loading-text";
  var dom2 = "#notice";

  typingline(disp1, 80, dom1).then(function(){
    $("#animation")
      .delay(1800)
      .fadeOut(1000)
    $("#loading-text")
      .delay(1800)
      .fadeOut(1000, function(){
        typingline(disp2, 80, dom2).then(function(){
          $("#notice")
            .delay(1800)
            .fadeOut(1000, function(){
              scene1_2()
            })
        })
      })
  })
}

function scene1_2() {
  localStorage.checkpoint = 1;
  let imageURL = "Images/hq.png";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    height: "600px",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  $("#scenes").append(`<h4 id="scene1-intro"></h4>
  <div class="clipboard" id="clipboard"></div>
  <h4 id="scene2-intro"></h4>`);
  $("#clipboard").hide();
  let name = localStorage.name;
  var disp1 = `Head Detective ${name}, you are in a meeting room in the Headquarter of Detectives and given the following information:`;
  var dom1 = "#scene1-intro";

  var disp2 =
    "After understanding the whole situation, you left the meeting room and head out to find Sir Suriv...";
  var dom2 = "#scene2-intro";

  typingline(disp1, 40, dom1).then(function () {
    $("#scene1-intro")
      .delay(1000)
      .fadeOut(1000, function () {
        $("#clipboard").fadeIn(1600);
        $("#clipboard").prepend(`
      <h4 style="text-align: left; padding: 20px;"><i>To Head Detective ${name},</i></h4>
      <h4>Background Information</h4>
      <p>
          Name of Virus: <b>COVID-19</b><br>
          Name of Villain: <b>Sir Suriv</b><br>
          Villain Last Seen: <b>Viole City</b><br>
          Sir Suriv has stole the only vial of COVID-19. This vial is necessary for scientist to formulate a vaccine to protect the people.
      </p>
      <h4 style="padding-top: 20px;">Mission</h4>
      <p>
          <h6>Head to Viole City</h6>
          Locate Sir Suriv and find out what is his intention with that vial<br>
          Apprehend him as soon as possible. The whole world is counting on you to bring about peace.
      </p>
      <h4 style="text-align: left; padding: 20px;"><i>From Global Task Force</i></h4>
      <button id="misson" class="missonBtn" style="margin: 10px;">Next</button>`);

        $("#misson").css({
          "font-size": "12pt",
          "margin-left": "70%",
          "border-style": "none",
        });
        $("#misson").click(function () {
          $("#misson").remove();
          $("#clipboard").fadeOut(1600, function () {
            let imageURL2 = "Images/exitHQ.png";
            $("body").css({
              "background-image": "url(" + imageURL2 + ")",
              height: "600px",
              "background-size": "100%",
              "background-repeat": "no-repeat",
            });

            typingline(disp2, 40, dom2).then(function () {
              $("#scene2-intro")
                .delay(1000)
                .fadeOut(1000, function () {
                  map1();
                });
            });
          });
        });
      });
  });
}

function map1() {
  localStorage.checkpoint = 2;
  $("body").css({ "background-image": "none" });
  var disp = "Click on the next city to proceed:";

  $("#scenes").append(
    `<h3></h3>
    <div id = "map1"><img class ="img-fluid" src="Images/map.png" alt="map image"></div>`
  );
  typingline(disp, 30, "h3");
  //when it is clicked
  $("#map1 img").click(function (evt) {
    var offset = $(this).offset();
    var x = offset.left;
    var y = offset.top;
    var mousex = evt.pageX - x;
    var mousey = evt.pageY - y;
    let width = $(this).width();
    let height = $(this).height();
    //If above selection is correct
    if (mousex < width * 0.75 && mousex > width * 0.25) {
      if (mousey < height * 0.5) {
        $("h3, #map1").remove();
        scene3();
      } else {
        alert("Wrong city!");
      }
    } else {
      alert("Wrong city!");
    }
  });
}

function scene3() {
  localStorage.checkpoint = 3;
  $("#scenes").append(`<h4 id="scene3-intro"></h4>
  <h4 id="scene3-text1"></h4>
  <h4 id="scene3-text2"></h4>`);

  let imageURL = "Images/city.png";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    height: "600px",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  $("#scenes").css({ background: "rgba(255,255,255,0.7)" });

  var disp1 =
    "As you walk into Viole city, you see symptoms of people getting sick.";
  var dom1 = "#scene3-intro";

  var disp2 = `A question pops into your head: "What happened here?"`;
  var dom2 = "#scene3-text1";
  var disp3 = "You then walk towards the administration office of the city...";
  var dom3 = "#scene3-text2";

  typingline(disp1, 50, dom1).then(function () {
    typingline(disp2, 50, dom2).then(function () {
      typingline(disp3, 50, dom3).then(function () {
        $("#scene3-intro").delay(1000).fadeOut(1000);
        $("#scene3-text1").delay(1000).fadeOut(1000);
        $("#scene3-text2")
          .delay(1000)
          .fadeOut(1000, function () {
            $("#scenes").css({ background: "rgba(255,255,255,0)" });
            scene4();
          });
      });
    });
  });
}

function scene4() {
  localStorage.checkpoint = 4;
  $("body").css({ "background-image": "none" });
  let imageURL = "Images/office.png";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    height: "600px",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });

  $("#scenes").append(`<h4 id="scene4-intro"></h4>
  <h4 id="scene4-text1"></h4>
  <h4 id="scene4-text2"></h4>
  <h4 id="scene4-text3"></h4>
  <h4 id="scene4-text4"></h4>
  <h4 id="scene4-text5"></h4>
  <h4 id="scene4-text6"></h4>`);
  let name = localStorage.name;
  var disp1 = "The Mayor of the city came to greet you.";
  var disp2 = `"Dear Head Detective ${name}, have you come to see the situation?"`;
  var disp3 = "You nodded you head.";
  var disp4 = `"Sir Suriv opened the vial of virus, releasing some of the virus into the city."`;
  var disp5 = "He then searched his drawers for a moment.";
  var disp6 = `"We are still investigating the situation. Here's what we know now. Please have a look."`;
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
      }
    });
  }

  typingline(disp1, 50, dom1).then(function () {
    $("#scene4-intro")
      .delay(1000)
      .fadeOut(1000, function () {
        typingline(disp2, 40, dom2).then(function () {
          typingline(disp3, 40, dom3).then(function () {
            typingline(disp4, 40, dom4).then(function () {
              typingline(disp5, 40, dom5).then(function () {
                typingline(disp6, 40, dom6).then(function () {
                  typingline(disp7, 40, dom7).then(function () {
                    $("#scene4-text1").delay(800).fadeOut(1600);
                    $("#scene4-text2").delay(800).fadeOut(1600);
                    $("#scene4-text3").delay(800).fadeOut(1600);
                    $("#scene4-text4").delay(800).fadeOut(1600);
                    $("#scene4-text5").delay(800).fadeOut(1600);
                    $("#scene4-text6")
                      .delay(800)
                      .fadeOut(1600, function () {
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
}

function scene5() {
  localStorage.checkpoint = 5;
  let imageURL = "Images/office.png";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    height: "600px",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });

  $("#scenes").append(`<div class="information" id="information"></div>`);
  $("#information").hide();

  $("#information").fadeIn(1600);
  $("#information").prepend(`
  <h4 style="padding: 15px;">Virus Information</h4>
  <div id="symptoms">
  <div class="row" id="symptomsCommon">
  <div class="col-sm" id="symptomCommonTitle"></div>
  <div class="col-sm" id="symptomCommonList"></div>
  </div>
  <div class="row" id="symptomsEarly">
  <div class="col-sm" id="symptomEarlyTitle"></div>
  <div class="col-sm" id="symptomEarlyList"></div>
  </div>
  <div class="row" id="symptomsOther">
  <div class="col-sm" id="symptomOtherTitle"></div>
  <div class="col-sm" id="symptomOtherList"></div>
  </div>
  </div>
  <button id="symptomsBtn1" class="symptomsBtn1" style="margin: 10px;">Next</button>`);
  $("#symptomsBtn1").css({
    "font-size": "12pt",
    "margin-left": "70%",
    "border-style": "none",
  });
  $("#symptomCommonTitle").append(
    `<h5 style="text-align: right">Common Symptom(s):</h5>`
  );
  $("#symptomCommonList").append(`<h5><ol>
  <li>Fever</li><li>Cough</li><li>Tiredness</li></ol></h5>`);

  $("#symptomEarlyTitle").append(
    `<h5 style="text-align: right">Early Symptom(s):</h5>`
  );
  $("#symptomEarlyList").append(`<h5><ol>
  <li>Lose sense of smell</li></ol></h5>`);

  $("#symptomOtherTitle").append(
    `<h5 style="text-align: right">Other Possible Symptom(s):</h5>`
  );
  $("#symptomOtherList").append(`<h5><ol>
  <li>Chills</li><li>Headache</li><li>Sore throat</li><li>Running nose</li><li>Shortness of breath</li></ol></h5>`);

  $("#symptomsBtn1").click(function () {
    $("#symptomsBtn1").remove();
    $("#symptoms").fadeOut(1600, function () {
      $("#information").append(`<h5>Cities informed: Ascend City, Ace City</h5>
        <h5>Villian Last Seen: Viole Secret Royal Lab</h5>
        <h5>Image of Lab:</h5>
        <img src="Images/lab.png" style="width:360px;padding:10px;">
        <button id="symptomsBtn2" class="symptomsBtn2" style="margin: 10px;">Next</button>`);
      $("#symptomsBtn2").css({
        "font-size": "12pt",
        "margin-left": "70%",
        "border-style": "none",
      });
      $("#symptomsBtn2").click(function () {
        $("#symptomsBtn2").remove();
        $("#information").fadeOut(1600, function () {
          showdown1();
        });
      });
    });
  });
}

function showdown1() {
  let officeURL = "Images/office.png";
  $("body").css({
    "background-image": "url(" + officeURL + ")",
    height: "600px",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  localStorage.checkpoint = 6;
  $("#scenes").append(`<h4 id="showdown1-text1"></h4>
  <h4 id="showdown1-text2"></h4>
  <h4 id="showdown1-text3"></h4>
  <h4 id="showdown1-text4"></h4>
  <h4 id="showdown1-intro"></h4>`);

  var disp1 = `You returned the pile of information to the Mayor.`;
  var disp2 = `The situation is worsening...`;
  var disp3 = `You decided to head towards the Lab.`;
  var disp4 = `BANG! You kicked open the lab door...`;
  var disp5 = `You are now in the Lab. Click on the 5 symptoms of COVID-19 to find traces left behind by the villian!`;

  var dom1 = "#showdown1-text1";
  var dom2 = "#showdown1-text2";
  var dom3 = "#showdown1-text3";
  var dom4 = "#showdown1-text4";
  var dom5 = "#showdown1-intro";

  typingline(disp1, 60, dom1).then(function () {
    typingline(disp2, 50, dom2).then(function () {
      typingline(disp3, 50, dom3).then(function () {
        $("#showdown1-text1").fadeOut(1600);
        $("#showdown1-text2").fadeOut(1600);
        $("#showdown1-text3").fadeOut(1600, function () {
          let imageURL = "Images/labDoor.png";
          $("body").css({
            "background-image": "url(" + imageURL + ")",
            height: "600px",
            "background-size": "100%",
            "background-repeat": "no-repeat",
          });
          typingline(disp4, 60, dom4).then(function () {
            $("#showdown1-text4").fadeOut(1600, function () {
              $("#scenes").css({ background: "rgba(255,255,255,0.7)" });
              let labURL = "Images/lab.png";
              $("body").css({
                "background-image": "url(" + labURL + ")",
                height: "600px",
                "background-size": "100%",
                "background-repeat": "no-repeat",
              });
              typingline(disp5, 30, dom5).then(function () {
                $(
                  "#showdown1-intro"
                ).append(`<div id="showdown1-quiz" class="flex-container2">
                <div id="nosebleed" style="background-color: cadetblue;"><p>#1 </br> Nosebleed</p></div>
                <div id="cough" style="background-color: cadetblue;"><p>#2 </br> Cough</p></div>
                <div id="fever" style="background-color: cadetblue;"><p>#3 </br> Fever</p></div>
                <div id="hunger" style="background-color: cadetblue;"><p>#4 </br> Hunger</p></div>
                <div id="smell" style="background-color: cadetblue;"><p>#5 </br> Lose sense of smell</p></div>
                <div id="chills" style="background-color: cadetblue;"><p>#6 </br> Chills</p></div>
                <div id="stomachache" style="background-color: cadetblue;"><p>#7 </br> Stomach ache</p></div>
                <div id="headache" style="background-color: cadetblue;"><p>#8 </br> Headache</p></div>
                </div>
                <button id="showdownSubmit" class="showdownSubmit">Submit</button>`);

                let count = 0;
                let correct = 0;
                let cough = false;
                let fever = false;
                let smell = false;
                let chills = false;
                let headache = false;
                let nosebleed = false;
                let stomachache = false;
                let hunger = false;
                $("#cough").click(function () {
                  if (cough == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      correct++;
                      $("#cough").css({
                        "background-color": "lightblue",
                      });
                      cough = true;
                    }
                  } else {
                    $("#cough").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    correct--;
                    cough = false;
                  }
                });
                $("#fever").click(function () {
                  if (fever == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      correct++;
                      $("#fever").css({
                        "background-color": "lightblue",
                      });
                      fever = true;
                    }
                  } else {
                    $("#fever").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    correct--;
                    fever = false;
                  }
                });
                $("#smell").click(function () {
                  if (smell == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      correct++;
                      $("#smell").css({
                        "background-color": "lightblue",
                      });
                      smell = true;
                    }
                  } else {
                    $("#smell").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    correct--;
                    smell = false;
                  }
                });
                $("#chills").click(function () {
                  if (chills == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      correct++;
                      $("#chills").css({
                        "background-color": "lightblue",
                      });
                      chills = true;
                    }
                  } else {
                    $("#chills").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    correct--;
                    chills = false;
                  }
                });
                $("#headache").click(function () {
                  if (headache == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      correct++;
                      $("#headache").css({
                        "background-color": "lightblue",
                      });
                      headache = true;
                    }
                  } else {
                    $("#headache").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    correct--;
                    headache = false;
                  }
                });
                $("#nosebleed").click(function () {
                  if (nosebleed == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      $("#nosebleed").css({
                        "background-color": "lightblue",
                      });
                      nosebleed = true;
                    }
                  } else {
                    $("#nosebleed").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    nosebleed = false;
                  }
                });
                $("#hunger").click(function () {
                  if (hunger == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      $("#hunger").css({
                        "background-color": "lightblue",
                      });
                      hunger = true;
                    }
                  } else {
                    $("#hunger").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    hunger = false;
                  }
                });
                $("#stomachache").click(function () {
                  if (stomachache == false) {
                    if (count == 5) {
                      alert(
                        "You have selected 5 symptoms already. Please click Submit."
                      );
                    }
                    if (count < 5) {
                      count++;
                      $("#stomachache").css({
                        "background-color": "lightblue",
                      });
                      stomachache = true;
                    }
                  } else {
                    $("#stomachache").css({
                      "background-color": "cadetblue",
                    });
                    count--;
                    stomachache = false;
                  }
                });

                $("#showdownSubmit").click(function () {
                  localStorage.firstQuiz = correct;
                  $("#showdownSubmit").remove();
                  $("#showdown1-intro").append(
                    `<h4 style="text-align: center;">Your score: ${correct}/5</h4>`
                  );
                  $("#showdown1-intro").append(
                    `<button id="showdownNext" class="showdownNext">Next</button>`
                  );

                  $("#showdownNext").css({
                    "font-size": "12pt",
                    "margin-left": "70%",
                    "border-style": "none",
                  });

                  $("#showdownNext").click(function () {
                    $("#showdownNext").remove();
                    $("#showdown1-intro").fadeOut(1600, function () {
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
  });
}
let domScene = "#scenes";
//Checkpoint 1 onwards
function clue1() {
  $("#scenes").css({ background: "rgba(255,255,255,0.7)" });
  let labURL = "Images/lab.png";
  $("body").css({
    "background-image": "url(" + labURL + ")",
    height: "600px",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  localStorage.checkpoint = 7;
  $(domScene).append(`<div id = "beforeClue1">
  <div id="firstSentence"></div>
  <div id="secondSentence"></div>
  </div> `);
  $("#beforeClue1").css({ "font-size": "15pt" });
  let firstSentence = "You found a plan written by Sir Suriv";
  let domFirst = "#firstSentence";
  let secondSentence = "You took a look at it";
  let domSecond = "#secondSentence";
  typingline(firstSentence, 40, domFirst).then(function () {
    typingline(secondSentence, 40, domSecond).then(function () {
      $("#beforeClue1").append(`<button id = "clue1Btn">See plan!</button>`);
      $("#clue1Btn").css({
        "font-size": "15pt",
        "margin-left": "70%",
        "border-style": "none",
      });
      $("#clue1Btn").click(function () {
        $("#scenes").css({ background: "rgba(255,255,255,0)" });
        $("#beforeClue1").remove();
        $(domScene).append(`<div id="clue1">
  <div id = "image"><img src="Images/Plan.png" alt="plan"></div><br><br>
  <h2></h2>
  <h6>Lab Personal: Sir Suriv</h6>
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
        $("img").css({
          height: "100px",
          float: "left",
          margin: "20px",
          "margin-bottom": "0px",
        });
        $("h2").css({ "margin-top": "50px" });
        $("h2,div").css({ "text-align": "center" });
        $("#clue1").css({
          "border-style": "solid",
          "border-width": "1px",
          "border-color": "black",
          "font-size": "20pt",
          "margin-top": "50px",
          "background-color": "#EEEEEE",
        });
        $("h3").css({ "text-align": "left" });
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
        let disp = "Viole Royal Lab Report";
        let dom = "#clue1 h2";
        typingline(disp, 120, dom);

        // transition to next show map
        $("#map2Button").click(function () {
          $("#scenes").css({ background: "rgba(255,255,255,0.7)" });
          $("#clue1").remove();
          $(domScene).append(`<div id = "afterClue1"></div>`);
          $("#afterClue1").css({ "font-size": "19pt" });
          typingline(
            "You look at the plan and realised you need to head to Ascend City",
            60,
            "#afterClue1"
          ).then(function () {
            $("#afterClue1")
              .delay(2000)
              .fadeOut(500, function () {
                $(domScene).append(
                  `<h3>Click on the next location</h3>
                  <div id = "map2"><img class ="img-fluid" src='Images/map.png' alt="map image"></div>`
                );
                //when it is clicked
                $("#map2 img").click(function (evt) {
                  var offset = $(this).offset();
                  var x = offset.left;
                  var y = offset.top;
                  var mousex = evt.pageX - x;
                  var mousey = evt.pageY - y;
                  let width = $(this).width();
                  let height = $(this).height();
                  //If above selection is correct
                  if (mousex < width * 0.75 && mousex > width * 0.25) {
                    if (mousey >= height * 0.5) {
                      $("h3, #map1").remove();
                      scene6();
                    } else {
                      alert("Wrong city!");
                    }
                  } else {
                    alert("Wrong city!");
                  }
                });
              });
          });
        });
      });
    });
  });
}
// Next function
function scene6() {
  //change scene
  $("#scenes").css({ background: "rgba(255,255,255,0)" });
  let desolateUrl = "Images/Desolate.png";
  $("body").css({
    "background-image": "url(" + desolateUrl + ")",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  localStorage.checkpoint = 8;
  $("#map2").remove();
  //setting up elements to append content
  $(domScene).append(`<div id ="scene6">
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
                $(domScene).append(
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
  localStorage.checkpoint = 9;
  $("#scene6, #newspaperButton").remove();
  $(domScene).append(`<div id = "newspaper">
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
  </div><br><br>
</div>`);
  $("button").hide();
  $("#newspaper").css({ "border-style": "solid double ridge ridge" ,background: "rgb(255,255,255)"});
  $(domScene).css({ "font-size": "14pt" });
  $("h2").css({ "text-align": "center" });
  $(".col-sm").css({ margin: "auto 40px" });
  $("#newspaperLeft p,#newspaperLeft h4,#newspaperRight").css({
    "margin-top": "30px",
  });
  $("#newspaperLeft button").css({
    "font-size": "9pt",
    "background-color": "white",
    "border-style": "none none solid none",
    "margin-left": "65%",
  });
  $("#newspaperLeft").css({ "margin-top": "0px" });
  let domh4 = "#newspaperLeft h4";
  let heading = "Safe Distancing Measures Implemented";
  typingline(heading, 10, domh4);
  let domp = "#newspaperLeft p";
  let paragraph = `With advance intel from Viole City, Ascend City 
has started to implement safe-distancing
measures. Citizens are to wear a mask at all 
times when they are out of their homes. Citizens
are to stay 1 meter or 6 feet apart when in queue.
Avoid crowded places. Now Ascend city is hunting
down Sir Suriv.`;
  $(domp).text(paragraph);
  $("button").show();

  let name = "Name : Sir Suriv";
  let lastScene = "Last Seen : Abandoned Factory";
  let status = "Status : Police cordoning of area suspected";
  typingline("Wanted", 10, "#newspaperRight h2").then(function () {
    typingline(name, 10, "#newspaperRightName").then(function () {
      typingline(lastScene, 10, "#newspaperRightLastSeen").then(function () {
        typingline(status, 10, "#newspaperRightStatus").then(function () {
          $("#newspaperRight").append(
            `<img src="Images/Newspaper-location.png" alt="map location">`
          );
        });
      });
    });
  });
  $("button").click(newspaperp2);
}
function newspaperp2() {
  $("#newspaper, #newspaperButton").remove();
  $(domScene).append(`<div id = "newspaperp2">
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
  $("#newspaperp2").css({ "border-style": "solid double ridge ridge" ,background: "rgb(255,255,255)"});
  $("#newspaperLeft, #safeMangementMeasure h4").css({ "margin-top": "0px" });
  $(domScene).css({ "font-size": "14pt" });
  $("h2").css({ "text-align": "center" });
  $(".col-sm").css({ margin: "auto 40px" });
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
  $(domh4).text(heading);
  $(domp).text(paragraph);
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
  // Mask portion
  let domMaskHeading = "#masks h4";
  let maskHeading = "Importance of wearing a mask";
  let dompMask = "#masks p";
  let maskP = `All citizens are to wear a masks when they leave their house. 
    Masks should be worn at all times except when exercising or eating.
    Wearing a mask helps to reduce the spread of virus.`;
  $(domMaskHeading).text(maskHeading);
  $(dompMask).text(maskP);
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
  let domSDMp = "#safeDistancingMeasure p";
  let domSDMh4 = "#safeDistancingMeasure h4";
  let headingSDM = "Safe Distancing Measures";
  let pSDM = `Safe distancing measures are implemented to keep citizens safe.
   Citizens are to stand at least 1m or 6 feet apart from one another in queue, indoor and outdoor spaces. 
   Covid-19 can be transmitted easily through close contact.`;
  $(domSDMh4).text(headingSDM);
  $(domSDMp).text(pSDM);
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
  let domTRp = "#travelRestriction p";
  let domTRh4 = "#travelRestriction h4";
  let headingTR = "Travel Restriction";
  let pTR = `During this period, citizens are not allowed to leave the city to travel to other city.
  This is to stop the spread of the virus. Citizens are also advised not to travel for activities 
  that are large social gathering such as party or mass events such as concert. Citizens are also advised
  not to go on a holiday cruise during this period`;
  $(domTRh4).text(headingTR);
  $(domTRp).text(pTR);
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
  $("#newspaperp2").append(`<button id="scene7Button">Read Finish-></button>`);
  $("#scene7Button").css({
    "font-size": "13pt",
    "background-color": "white",
    "border-style": "ridge",
    "border-radius": "15px",
    "border-width": "1px",
    "text-align":"center"
  });
  $("#scene7Button").click(scene7);
}
function scene7() {
  $(".container").css({ background: "rgba(255,255,255,0)" });
  let imageURL = "Images/Factory.svg";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  localStorage.checkpoint = 10;
  $("#newspaperp2").remove();
  $(domScene).append(`<div id ="scene7">
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
  $("#scene7").css({ background: "rgba(255,255,255,0.7)" });
  $(domScene).css({ "font-size": "18pt", "text-align": "left" });
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
  typingline(firstSentence, 40, domFirst).then(function () {
    typingline(secondSentence, 65, domSecond).then(function () {
      typingline(thirdSentence, 40, domThird).then(function () {
        typingline(fourthSentence, 40, domFourth).then(function () {
          typingline(fifthSentence, 40, domFifth).then(function () {
            typingline(sixthSentence, 40, domSixth).then(function () {
              typingline(sevenSentence, 400, domSeven).then(function () {
                let doorURL = "Images/Door.svg";
                $("body").css({
                  "background-image": "url(" + doorURL + ")",
                  "background-size": "100%",
                  "background-repeat": "no-repeat",
                });
                typingline(eightSentence, 40, domEight).then(function () {
                  $("#scene7").append(
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
  let imageURL = "Images/OpenDoor.svg";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  let name = localStorage.name;
  localStorage.checkpoint = 11;
  $("#scene7").remove();
  $(domScene).append(`<div id ="scene8">
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
  $(domScene).css({ "font-size": "18pt" });
  $("#scene8").css({ background: "rgba(255,255,255,0.7)" });
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
  let sixthSentence = `"Surrender yourself now. You have the right to remain silent and refuse to answer questions."`;
  let seventhSentence = `He replied,"Your reputation precedes you. Ha Ha Ha"`;
  typingline(firstSentence, 50, domFirst).then(function () {
    typingline(secondSentence, 50, domSecond).then(function () {
      typingline(thirdSentence, 50, domThird).then(function () {
        let roomURL = "Images/IntheRoom.svg";
        $("body").css({
          "background-image": "url(" + roomURL + ")",
          "background-size": "100%",
          "background-repeat": "no-repeat",
        });
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
  let roomURL = "Images/IntheRoom.svg";
  $("body").css({
    "background-image": "url(" + roomURL + ")",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  localStorage.checkpoint = 12;
  $("#scene8").remove();
  $(domScene).append(`<div id="pre-encounter">
  <h1>Encounter!</h1><br>
  <h3>Defeat Sir Suriv and obtain the vial of virus</h3><br>
  <h3>Try your best to answer all questions right</h3><br>
  <h3>There are 5 questions.</h3><br>
  <h3>Good luck.</h3>
  <button id="questionsButton">Arrest him!</button>
  </div>`);
  $("#pre-encounter").css({
    margin: "0px 200px",
    background: "rgba(255,255,255,0.7)",
  });
  $("#questionsButton").css({
    "border-style": "none",
    "background-color": "white",
    "font-size": "14pt",
    "margin-left": "60%",
  });
  $("#questionsButton").click(encounter);
}
function encounter() {
  let name = localStorage.name;
  $("#pre-encounter").remove();
  $(domScene).append(`<div id = "encounter">
  <div class ="row">
    <div class = "col-sm" id ="player">
      <h3>${name}</h3>
      <div class = "image"><img src ="#" alt= "Player character"></div>
      <div>
        <div class="healthBar">
            <p class ="health"id="playerHealth">Health</p>
        </div>
    </div>
    </div>
    <div class = "col-sm" id ="villain">
      <h3>Sir Suriv</h3>
      <div class = "image"><img src ="Images/Villain.svg" alt= "Villain character"></div>
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
  $("#encounter").css({
    background: "rgba(255,255,255,0.8)",
    "font-size": "15pt",
  });
  $("h3").css({ "text-align": "center" });
  $(".image").css({ "text-align": "center" });
  $("img").css({ height: "275px", margin: "15px auto" });
  if (localStorage.gender == "m") {
    $("#player img").attr("src", "Images/male.png");
  } else {
    $("#player img").attr("src", "Images/female.png");
  }
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
  let question1 = "Which option below is not effective in stopping covid-19?";
  let question2 = "When should you take off your mask?";
  let question3 =
    "Why must citizens stand 1 meter / 6 feet apart when they are out of their homes?";
  let question4 =
    "How can companies reduce the chance of catching covid-19 by their staffs?";
  let question5 = "What should citizens avoid doing during this period?";
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
    let optionA = "(A) Standing 1 meter apart.";
    let optionB = "(B) Wearing a mask.";
    let optionC = "(C) Not working from home.";
    let optionD = "(D) Refrain from participating in large social events";
    $(domQuestion1).text(question1);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
    let optionA = "(A) Eating or drinking";
    let optionB = "(B) Speaking to another person";
    let optionC = "(C) Riding the public transport";
    let optionD =
      "(D) Listening to lecturers teaching, while being out of your house";
    $(domQuestions).text(question2);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
    let optionA =
      "(A) Covid-19 can be transmitted easily through a far contact";
    let optionB = "(B) Because it is cool to stand 1 meter apart.";
    let optionC =
      "(C) Covid-19 can be transmitted easily through close contact";
    let optionD =
      "(D) Covid-19 cannot be trasmitted easily through close contact";
    $(domQuestions).text(question3);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
    let optionA = "(A) Force employees to work at the office.";
    let optionB = "(B) Allow employees to have close contact with one another.";
    let optionC = "(C) Force employees to work overtime.";
    let optionD =
      "(D) For work that can be done at home, employees are to work from home.";
    $(domQuestions).text(question4);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
    let optionA = "(A) Practice good hygiene";
    let optionB = "(B) Attend mass gatherings such as football matches.";
    let optionC = "(C) Stand 1 meter apart.";
    let optionD = "(D) Regular exercise and healthy diet";
    $(domQuestions).text(question5);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
  localStorage.secondQuiz = qRight;
  $("#encounter").remove();
  $(domScene).append(`<div id = "encounterReview">
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
  $("#encounterReview").css({
    background: "rgba(255,255,255,0.8)",
    "font-size": "20pt",
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
  let name = localStorage.name;
  $("#encounterReview").remove();
  $(domScene).append(`<div id ="postEncounter">
  <div id="firstSentence"></div>
  <div id="secondSentence"></div>
  <div id="thirdSentence"></div>
  <div id="fourthSentence"></div>
  <div id="fifthSentence"></div>
  <div id="sixthSentence"></div>
  <div id="sevenSentence"></div>
  <div id="eightSentence"></div>
  </div>`);
  $("#postEncounter").css({
    background: "rgba(255,255,255,0.8)",
    "font-size": "20pt",
  });
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
              let roomURL = "Images/Note.svg";
              $("body").css({
                "background-image": "url(" + roomURL + ")",
                "background-size": "100%",
                "background-repeat": "no-repeat",
              });
              typingline(seventhSentence, 250, domSeven).then(function () {
                typingline(eightSentence, 50, domSeven).then(function () {
                  typingline(nineSentence, 50, domEight).then(function () {
                    $("body").css({ background: "rgb(000,000,000)" });
                    //add button to next function
                    $(domScene).append(
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
  $("body").css({ background: "rgb(000,000,000)" });
  localStorage.checkpoint = 13;
  $("#postEncounter, #hospitalButton").remove();
  $(domScene).append(`<div id ="hospitalScene">
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
  $("#hospitalScene").css({
    background: "rgba(255,255,255,0.8)",
    "font-size": "20pt",
  });
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
          let imageURL = "Images/hospital.png";
          $("body").css({
            "background-image": "url(" + imageURL + ")",
            height: "600px",
            "background-size": "100%",
            "background-repeat": "no-repeat",
          });

          typingline(firstSentence, 75, domFirst).then(function () {
            typingline(secondSentence, 50, domSecond).then(function () {
              typingline(thirdSentence, 50, domThird).then(function () {
                typingline(fourthSentence, 125, domFourth).then(function () {
                  typingline(fifthSentence, 50, domFifth).then(function () {
                    typingline(sixthSentence, 50, domSixth).then(function () {
                      typingline(seventhSentence, 100, domSeven).then(
                        function () {
                          typingline(eightSentence, 50, domEight).then(
                            function () {
                              //Add button to next function
                              $("#hospitalScene").append(
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
function overview() {
  let imageURL = "Images/hospital.png";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  localStorage.checkpoint = 14;
  $("#hospitalScene").remove();
  $(domScene).append(`
  <div id="overview">
                <h1>Overview</h1>
                    <div id="firstSentence">Sir Suriv was caught in Ace City</div>
                    <h3>Debrief</h3>
                    <div id="secondSentence">Due to the alerts given by Viole city and WHO</div>
                    <div id="thirdSentence">Ace City was notified and managed to capture Sir Suriv</div>
                    <h4>Contact Tracing</h4>
                    <div id="fourthSentence">One of the method Ace City used is contact tracing</div>
                    <div id="fifthSentence">Contact tracing is used to identify people who had contact with an infected
                        person.
                        <br>By identifying and managing these people, the virus can be contained easily
                    </div>
                    <button class="infoBtn"><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/contact-tracing.html" target="blank">Click for more information</a></button>
                    <div id="sixthSentence">However, the vial of virus is still missing!</div>
            </div>`);
  $("#overview").css({
    "text-align": "center",
    "font-size": "14pt",
    width: "100%",
    background: "rgb(255,255,255)",
  });
  $(".infoBtn").css({
    "font-size": "9pt",
    "background-color": "white",
    "border-style": "ridge",
    "border-radius": "15px",
    "border-width": "1px",
    "text-decoration": "none",
  });
  $("#overview").append(`<button id = "missionButton">Mission!</button>`);
  $("#missionButton").css({
    "border-style": "none",
    "margin-left": "75%",
    "backgound-color": "white",
    "font-size": "10pt",
  });
  $("#missionButton").click(mission);
}
function mission() {
  let name = localStorage.name;
  let imageURL = "Images/hospital.png";
  $("body").css({
    "background-image": "url(" + imageURL + ")",
    "background-size": "100%",
    "background-repeat": "no-repeat",
  });
  localStorage.checkpoint = 15;
  $("#overview").remove();
  $(domScene).append(`
  <div id="mission">
  <br>
  <h3></h3>
  <h5></h5>
  <p></p>
  <div id = "filler"></div>
  <ol>
    <li id = "list1"></li>
    <li id = "list2"></li>
    <li id = "list3"></li>
  </ol>
  <div id = "filler2"></div>
  <div id = "time"></div>
  <div id="aim"></div>
  </div>`);
  $("#mission").css({
    "text-align": "center",
    "font-size": "18pt",
    width: "100%",
    background: "rgb(255,255,255)",
  });
  $("ol").css({ "margin-left": "15%" });
  typingline("Mission Report", 50, "h4");
  typingline(`Head Detective ${name}`, 75, "h5");
  typingline(
    `You are injured, However this
 is a pressing issue. As our best
 Detective...
 `,
    30,
    "p"
  );
  typingline("Head to Ace City", 50, "#list1").then(function () {
    typingline("Find the location of hidden vial of virus", 30, "#list2").then(
      function () {
        typingline(
          "Retrieve the vial of virus and deliver it back to headquarters",
          30,
          "#list3"
        );
      }
    );
  });
  typingline(
    "--------------------------------------------------------------------------------",
    50,
    "#filler, #filler2"
  ).then(function () {
    $("#mission").append(`<button id = "missingVialButton">Search!</button>`);
    $("#missingVialButton").css({
      "border-style": "none",
      "margin-left": "75%",
      "backgound-color": "white",
      "font-size": "10pt",
    });
    $("#missingVialButton").click(missingVial);
  });
  typingline("Time left: Not much time", 30, "#time");
  typingline("Aim: Maintain World Peace By Creating A Vaccine", 30, "#aim");
}
function missingVial() {
  $("body").css({ background: "rgb(255,255,255)" });
  localStorage.checkpoint = 16;
  $("#mission").remove();
  $(domScene).append(`<div id="missingVial">
  <h1>Missing Vial!</h1><br>
  <h3>Get information on the location of the vial of virus</h3><br>
  <h3>Try your best to answer all questions right</h3><br>
  <h3>There are 6 number of questions.</h3><br>
  <h3>Good luck.</h3>
  <button id="questionsButton">Start Finding!</button>
  </div>`);
  $("#missingVial").css({ margin: "0px 200px" });
  $("#questionsButton").css({
    "border-style": "none",
    "background-color": "white",
    "font-size": "14pt",
    "margin-left": "60%",
  });
  $("#questionsButton").click(finalQuiz);
}
//To update questions and layout
function finalQuiz() {
  $("#missingVial").remove();
  $(domScene).append(`<div id = "finalQuiz">
  <div><image src = "Images/MagnifyingGlass2.svg" height = "200px"></div>
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
  $("#finalQuiz").css({
    "font-size":"18pt"
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
  let question1 =
    "What should you do when you see someone unwell and not wearing a mask?";
  let question2 =
    "When you are unwell or have symptoms of covid-19, what should you do?";
  let question3 =
    "Where should you get information about Covid-19 or the situation of Covid-19 in your country?";
  let question4 =
    "What should you do if you want to enter a shop but that shop has reached maximum capacity?";
  let question5 = "What is the use of contact tracing?";
  //number of questions right
  let qRight = 0;
  let image = false;
  let count = 0;
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
            localStorage.finalQuiz = qRight;
            vialFound(qRight);
          });
        });
      });
    });
  });
  function validateOption(message) {
    if (message == "true") {
      qRight++;
    }
    if (image == false) {
      image = true;
      $("img").attr("src", "Images/MagnifyingGlass1.svg");
    } else {
      image = false;
      $("img").attr("src", "Images/MagnifyingGlass2.svg");
    }
    count++;
    let margin = count * 175;
    $("img").css({ "margin-left": margin + "px" });
  }
  function questionSet() {
    $("#question").remove();
    $("#finalQuiz").append(`
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
    let optionA = "(A) Take photos of him/ her and post them online.";
    let optionB = "(B) Stay away from him/ her";
    let optionC =
      "(C) Remind him/ her to wear a mask and visit the doctor as soon as possible";
    let optionD = "(D) Make fun of him/ her";
    $(domQuestion1).text(question1);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
    let optionA = "(A) Visit the doctor immediately";
    let optionB = "(B) Go out for gatherings with family and friends";
    let optionC = "(C) Continue to go to work or school";
    let optionD = "(D) Maintain unhygienic practices";
    $(domQuestions).text(question2);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
    let optionA =
      "(A) Forwarded messages from families or friends on messaging apps";
    let optionB = "(B) Official government/ news websites";
    let optionC = "(C) Suspicious online websites/ articles";
    let optionD = "(D) Word of mouth";
    $(domQuestions).text(question3);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
    return new Promise(function (resolve) {
      $(`${domOptionA},${domOptionC},${domOptionD}`).click(function () {
        resolve("false");
      });
      $(domOptionB).click(function () {
        resolve("true");
      });
    });
  }
  function fourthQuestion() {
    let optionA = "(A) Enter the shop as usual";
    let optionB = "(B) Make a big fuss for not being able to enter";
    let optionC = "(C) Enter from the back door of the shop";
    let optionD = "(D) Wait/ queue patiently outside the shop";
    $(domQuestions).text(question4);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
    let optionA = "(A) To stalk citizens";
    let optionB = "(B) To manage the spread of covid-19";
    let optionC = "(C) To increase contact of citizens with infected people";
    let optionD = "(D) To store your passwords";
    $(domQuestions).text(question5);
    $("#q1A").text(optionA);
    $("#q1B").text(optionB);
    $("#q1C").text(optionC);
    $("#q1D").text(optionD);
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
function vialFound(marks) {
  let name = localStorage.name;
  $("#finalQuiz").remove();
  $(domScene).append(`<div id ="vialFound">
  <div>You got ${marks}/5 correct</div>
  <div id="firstSentence"></div>
  <div id="secondSentence"></div>
  <div id="thirdSentence"></div>
  </div>`);
  $("#vialFound").css({
    "font-size":"18pt"
  });
  let domFirst = "#firstSentence";
  let domSecond = "#secondSentence";
  let domThird = "#thirdSentence";
  let firstSentence;
  let secondSentence;
  let thirdSentence;
  if (marks > 3) {
    firstSentence = "You found the location of the vial";
    secondSentence = "You secure the vial and sent it to the headquarters";
    thirdSentence = `Head Detective ${name} were awarded a medal of bravery`;
  } else {
    firstSentence =
      "You almost did not managed to find the vial. With your experience, you managed to locate the vial.";
    secondSentence = "You secure the vial and sent it to the headquarters";
    thirdSentence = `Head Detective ${name} were awarded a medal of bravery`;
  }
  typingline(firstSentence, 30, domFirst).then(function () {
    typingline(secondSentence, 30, domSecond).then(function () {
      typingline(thirdSentence, 30, domThird).then(function () {
        $(domScene).append(`<button id = "endOfGameButton">Finish!</button>`);
        $("#endOfGameButton").css({
          "border-style": "none",
          "margin-left": "75%",
          "backgound-color": "white",
          "font-size": "10pt",
        });
        $("#endOfGameButton").click(endOfGame);
      });
    });
  });
}

function endOfGame() {
  let country = localStorage.getItem("country");
  var settings = {
    url: `https://disease.sh/v3/covid-19/countries/${country}`,
    method: "GET",
    timeout: 0,
    error: function () {
      $("#Country").text(country);
      $("#Cases").text(0);
      $("#Recovered").text(0);
      $("#Critical").text(0);
      $("#Dead").text(0);
      $("#Test").text(0);
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response)
    $("#Country").text(country);
    $("#Cases").text(response.cases);
    $("#Recovered").text(response.recovered);
    $("#Critical").text(response.critical);
    $("#Dead").text(response.deaths);
    $("#Test").text(response.tests);
    $("img").attr("src",response.countryInfo.flag)
  });
  let apiKey = "6028ae7d5ad3610fb5bb5fe6";
  let username = localStorage.getItem("name");
  let d = new Date();
  let time = d.getTime() - localStorage.getItem("time");
  let point = parseInt(localStorage.firstQuiz) + parseInt(localStorage.secondQuiz) +parseInt(localStorage.finalQuiz);
  var jsondata = { name: username, points: point, time: time };
  var setting = {
    async: true,
    crossDomain: true,
    url: "https://leaderboard-30f1.restdb.io/rest/leaderboard",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    processData: false,
    data: JSON.stringify(jsondata),
  };

  $.ajax(setting).done(function (response) {
    console.log(response);
  });
  localStorage.removeItem("checkpoint");
  $("#vialFound,#endOfGameButton").remove();
  $(domScene).append(`
  <div id = "endOfGame">
  <div class = "row">
  <div class ="col-sm"><img src="#" alt="image of flag"></div>
  <div class ="col-sm">
  <h3></h3>
  <div>Country: <span id ="Country"></span></div>
  <div>Cases: <span id = "Cases"></span></div>
  <div>Recovered: <span id = "Recovered"></span></div>
  <div>Critical: <span id = "Critical"></span></div>
  <div>Dead: <span id = "Dead"></span></div>
  <div>Number of tests: <span id = "Test"></span></div>
  </div>
  </div>
  <div>Reminder:</div>
  <div id = "reminder"></div>
  </div>
  
  `);
  $("#endOfGame").css({
    "font-size":"18pt"
  });
  $("img").css({"border-style":"ridge","border-width":"4px","width":"450px"})
  
  typingline("Statistics", 50, "h3");
  typingline(
    `
  Everyone has to do their part to stop the spread of a pandemic. By following trusted 
  news source, guidance from governments and heath organisations and reacting calmly, we will
  be able to tide through this crisis`,
    15,
    "#reminder"
  ).then(function () {
    $("#reminder").append(`<div><button>Leaderboard</button></div>`);
    $("button").css({
      "border-style": "ridged",
      "background-color": "white",
      "font-size": "14pt",
    });
    $("button").click(leaderboard);
  });
}
function leaderboard() {
  localStorage.clear();
  $("#endOfGame,button").remove();
  $(domScene).append(`<div id="leaderBoard"><div>
  <h2>Leader Board</h2>
  <table width="70%">
    <tr>
      <th>Name</th>
      <th>Point</th>
      <th>Time taken</th>
    </tr>
  </table><br></div>
</div>`);
  $("#leaderBoard").css({
    "background-color": "lightyellow",
    "text-align": "center",
    "font-size": "14pt",
  });
  $("table").css({ margin: "20px auto" });
  $("th").css({ "border-width": "1px", "border-style": "solid" });
  let apiKey = "6028ae7d5ad3610fb5bb5fe6";
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://leaderboard-30f1.restdb.io/rest/leaderboard",
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
  };
  $.ajax(settings).done(function (response) {
    response.sort(sortTime);
    response.sort(sortPoints);
    let len;
    if (response.length < 30) {
      len = response.length;
    } else {
      len = 30;
    }
    for (i = 0; i < len; i++) {
      let data = response[i];
      let dataName = data.name;
      let dataPoint = data.points;
      let dataTime = data.time;
      //Convert to Seconds
      dataTime = Math.floor(dataTime / 1000);
      //Calculate min
      let sec;
      let min;
      let hour;
      let disp;
      sec = dataTime % 60;
      dataTime -= sec;
      disp = `${sec} Second`;
      if (dataTime > 0) {
        let totalMin = dataTime / 60;
        min = totalMin % 60;
        disp = `${min} Minute ` + disp;
        totalMin -= min;
        if (totalMin > 0) {
          hour = totalMin / 60;
          disp = `${hour} Hour ` + disp;
        }
      }
      $("table").append(
        `<tr><td>${dataName}</td><td>${dataPoint}</td><td class="dispTime">${disp}</td></tr>`
      );
      $("td").css({ "border-width": "1px", "border-style": "solid" });
      $(".dispTime").css({ "text-align": "right" });
    }

    $("#leaderBoard").append(
      `<button><a href="index.html">Home Page</a></button>`
    );
    $("button").css({
      "border-style": "ridged",
      "background-color": "white",
      "font-size": "12pt",
      "border-radius": "10px",
      "text-decoration": "none",
    });

    function sortTime(task1, task2) {
      if (task1.time > task2.time) {
        return 1;
      } else if (task1.time < task2.time) {
        return -1;
      } else {
        return 0;
      }
    }
    function sortPoints(task1, task2) {
      if (task1.points < task2.points) {
        return 1;
      } else if (task1.points > task2.points) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}
