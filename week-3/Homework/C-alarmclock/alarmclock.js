 
   function setAlarm(addvalue) {
    var addvalue = document.querySelector("#alarmSet").value
   addvalue.addEventListener("click",addvalue) 

  }

  function countRem()
    if (addvalue< 0 ){
      clearInterval(id);
      playAlarm();
  }

//   function setAlarm() {
//   var timeSet = document.getElementById("alarmSet").value;
//   let ourVar = parseInt(timeSet);
  //   function countRem() {
  //     if (ourVar < 0) {
  //       clearInterval(id);
  //       playAlarm();
  //     } else {
  //       document.getElementById("timeRemaining").innerText =
  //         "Time Remaining: 00:" + ourVar;
  //       ourVar--;
  //     }
  //   }
  //   var id = setInterval(countRem, 1000);
  // }

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
