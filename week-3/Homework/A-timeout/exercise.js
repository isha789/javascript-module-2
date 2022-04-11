/*
==============
EXERCI 1
Task 1
using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (httpswww.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
//  var changeBackground = function () {
  //      var findHeading = document.querySelector("body");
  //      findHeading.style.backgroundColor =
  //        findHeading.style.backgroundColor == "yellow" ? "pink" : "yellow";
  //    };
  //   setInterval(changeBackground, 5000);
 

const body = document.querySelector("body")
body.style.backgroundColor="red"
console.log(body)

setInterval(() => {
  if (body.style.backgroundColor==="red"){
    return body.style.backgroundColor="green"
  }
  else {
    return body.style.backgroundColor="red"}
}, 5000);


