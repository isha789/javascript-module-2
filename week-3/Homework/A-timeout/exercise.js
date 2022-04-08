/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
//     document.styleSheets.backgroundColor = "red"
//   }
// function myStopFunction() {
//     clearTimeout(myTimeout);
//   }


// var c = ["blue", "black", "yellow", "red"];

// function changeColor() {
//   setTimeout(function loop() {
//     document.backgroundColor = c.shift();
//     if (c.length) {
//       setTimeout(loop, 5000);
//     }
//   }, 5000);
// }
// console.log(changeColor)

// var changeBackground = function () {
//     var findHeading = document.querySelector("body");
//     findHeading.style.backgroundColor =
//       findHeading.style.backgroundColor == "yellow" ? "pink" : "yellow";
//   };
//   setInterval(changeBackground, 5000);

  var changebackground = function(){
      var heading = document.querySelector("body")
      heading.style.backgroundColor="yellow"
  }
setInterval(changebackground, 5000)