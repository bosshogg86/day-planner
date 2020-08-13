$(document).ready(function () {
  
  // Declare storage array
  let userInputs = [];

  // Call moment
  moment();

  // Display Date
  let date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);

  // Grabs current time
  let currentTime = moment().hours();
  
  // Checks if time-block is past, present, future
  $(".textarea").each(function (i) {
    if (currentTime === i + 9) {
      $(this).addClass("present");
    } else if (currentTime > i + 9) {
      $(this).addClass("past");
    } else if (currentTime < i + 9) {
      $(this).addClass("future");
    }
  });

  // Check local storage
  init();
  
  function init() {
    if (localStorage.getItem("userInputs")) {
      const savedInputs = JSON.parse(localStorage.getItem("userInputs"));
      userInputs.push(...savedInputs);
      renderInputs();
    }
  }

  function renderInputs() {
    for (let i = 0; i < userInputs.length; i++) {
      const userInput = userInputs[i];
      $(".textarea").text(userInput);
      $(".textarea").attr("data-index", i);
      console.log(userInput);
    }
  }

  // Stores text input
  $(".saveBtn").on("click", function () {
    userInputs.push($(this).siblings(".textarea").val());
    localStorage.setItem("userInputs", JSON.stringify(userInputs));
  });

});
