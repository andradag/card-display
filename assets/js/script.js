// target the parent container div
const containerDiv = document.querySelector(".container");

// call back function of a click event
const revealNumber = function (event) {
  // get target element
  const target = event.target;

  // get data attributes of target
  const number = target.dataset.number;
  const state = target.dataset.state;
  console.log(number, state);

  // check if click is coming from the box div
  console.log("clicked");
};

// add click event listener to parent container div
containerDiv.addEventListener("click", revealNumber);
