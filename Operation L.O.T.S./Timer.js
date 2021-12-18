var timedown;
var currTime = 51;

function startTime() {   
  countDown();
  noise();
}
function countDown() {
  timedown = setInterval(function() {
    currTime = currTime - 1;
    document.getElementById("countdowntimer").innerHTML = "Warning! Countdown to launch has begun! Time left: " + currTime;
    if (currTime == 0) {
      clearInterval(timedown);
      document.getElementById('myimage').style.display = 'block';
      document.getElementById("countdowntimer").innerHTML = "";}
       else if (currTime <= 25) {
      document.getElementById("countdowntimer").innerHTML = "Warning! Less than 25 seconds left to launch! Time left: " + currTime;

    }
  }, 1000);
}
function stopCount() {
  clearInterval(timedown)
;
document.getElementById("sound").pause();
};
function noise(){
document.getElementById("sound").play();
}