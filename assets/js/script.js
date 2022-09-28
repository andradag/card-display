// target the parent container div
const containerDiv = document.querySelector(".container");

// call back function of a click event
const revealNumber = function () {
  // check if click is coming from the box div
  console.log("clicked");
};

// add click event listener to parent container div
containerDiv.addEventListener("click", revealNumber);
