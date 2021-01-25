$('div#userInputM').hide();  
$('div#userInputF').hide(); 

let genderMale = document.getElementById('male');
genderMale.addEventListener('click', function() {
    if (document.getElementById('genderF'))
    {
        document.getElementById('genderF').remove();  
    }
    $('div#userInputM').show();  
});

let genderFemale = document.getElementById('female');
genderFemale.addEventListener('click', function() {
    if (document.getElementById('genderM'))
    {
        document.getElementById('genderM').remove();
    }
    $('div#userInputF').show(); 
});

let continueM = document.getElementById('continueM');
continueM.addEventListener('click', function() {
    document.getElementById('genderM').remove(); 
    document.getElementById('userHeading').remove();
});

let continueF = document.getElementById('continueF');
continueF.addEventListener('click', function() {
    document.getElementById('genderF').remove(); 
    document.getElementById('userHeading').remove();
});