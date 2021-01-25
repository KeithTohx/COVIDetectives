let acknowledge = document.getElementById('ackn');
acknowledge.addEventListener('click', function() {
    window.location.href = "acknowledge.html";
});

let start = document.getElementById('start');
start.addEventListener('click', function() {
    window.location.href = "start.html";
});

var disp = "It's great to see you, Detective!";
function typing(disp,speed){
    var char = 0;
    var test = setInterval(type,speed)
    function type(){
        if (char <= disp.length){
            var display = disp.slice(0,char);
            $("#heading").text(display)
            char++;
            console.log(char)
        }else{
            clearInterval(test)
        }
    }
}
typing(disp,150)