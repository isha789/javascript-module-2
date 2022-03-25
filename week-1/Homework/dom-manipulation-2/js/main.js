

var alertBlueClick = document.querySelector("#blueBtn");
alertBlueClick.addEventListener("click", forBlue);
function forBlue() {
  var findJumbotron = document.querySelector(".jumbotron");
  findJumbotron.style.backgroundColor = "#588fbd";
  var findDonateBike = document.querySelector(".btn-primary.Btn-lrg");
  findDonateBike.style.backgroundColor = "#ffa500";
var VolunteerButton = document.querySelector(".btn btn-secondary btn-lrg")
VolunteerButton.style.backgroundColor = "green";
 }





  var alertOrangeClick = document.querySelector("#orangeBtn");
alertOrangeClick.addEventListener("click", forOrange);
function forOrange() {
  var findJumbotron = document.querySelector(".jumbotron");
  findJumbotron.style.backgroundColor = "#f0ad4e";
  var findDonateBike = document.querySelector(".btn-primary.Btn-lrg");
  findDonateBike.style.backgroundColor = "#5751fd";
}


var alertGreenClick = document.querySelector("#greenBtn");
alertGreenClick.addEventListener("click", forGreen);
function forGreen() {
  var findJumbotron = document.querySelector(".jumbotron");
  findJumbotron.style.backgroundColor = "#87ca8a";
  var findDonateBike = document.querySelector(".btn-primary.Btn-lrg");
  findDonateBike.style.backgroundColor = "black";
}







function onButtonPress(buttonId, newClassToAssign) {
    const button = document.querySelector(buttonId);
    button.addEventListener("click", function () {
      const jumbatronDiv = document.querySelector(".jumbotron");
      jumbatronDiv.className = "jumbotron " + newClassToAssign;
    });
  }
  onButtonPress("#bluebtn", "blue");
  onButtonPress("#orangeBtn", "orange");
  onButtonPress("#greenBtn", "green");

/*part 2*/

const submitButton = document.querySelector("form button");
submitButton.addEventListener("click", function () {
  const allInputs = document.querySelectorAll("form input,textarea");
  let allInputsValid = true;
  allInputs.forEach(function (el) {
    if (el.value === "" || (el.type === "email" && !el.value.includes("@"))) {
      el.style.backgroundColor = "red";
      allInputsValid = false;
    }
  });
  if (allInputsValid) {
    alert("Thank you!");
    allInputs.forEach(function (el) {
      el.value = "";
    });
  }
});