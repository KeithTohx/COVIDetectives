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

$("#clipboard").hide();
userChar();

function userChar(){
    $('div#userInputM').hide();  
    $('div#userInputF').hide(); 

    let genderMale = document.getElementById('male');
    genderMale.addEventListener('click', function() {
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
            </div>`); 
        }
        $('div#userInputM').show();  
    });

    let genderFemale = document.getElementById('female');
    genderFemale.addEventListener('click', function() {
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
            </div>`);
        }
        $('div#userInputF').show(); 
    });

    let continueM = document.getElementById('continueM');
    continueM.addEventListener('click', function() {
        document.getElementById('genderM').remove(); 
        document.getElementById('userHeading').remove();
        scene1_2();
    });

    let continueF = document.getElementById('continueF');
    continueF.addEventListener('click', function() {
        document.getElementById('genderF').remove(); 
        document.getElementById('userHeading').remove();
        scene1_2();
    });
};

function scene1_2(){
    var disp1 = "Head Detective, you are in the meeting room in the Headquarter of Detectives and given the following information.";
    var dom1 = "#scene1-intro"

    var disp2 = "You left the meeting room and head out to find Sir Suriv...";
    var dom2 = "#scene2-intro"

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

    let clipboard = document.getElementById('misson');
    clipboard.addEventListener('click', function() {
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
        scene3();
    });
};

function scene3(){
    var disp1 = "As you walk into Viole city, you see symptoms of people getting sick.";
    var dom1 = "#scene3-intro"

    var disp2 = `A question pops into your head: What happened here?"`;
    var dom2 = "#scene3-text1";
    var disp3 = "You then head towards the administration office of the city.";
    var dom3 = "#scene3-text2";

    typingline(disp1, 100, dom1).then(function(){
    typingline(disp2, 100, dom2).then(function(){
        typingline(disp3, 100, dom3).then(function(){
            $("#scene3-intro").delay(800).fadeOut(1600);
            $("#scene3-text1").delay(800).fadeOut(1600);
            $("#scene3-text2").delay(800).fadeOut(1600);
            });
        });
    });
}