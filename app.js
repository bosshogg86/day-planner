$(document).ready(function () {
  
  // Declare storage array
  let userInputs = [];
  let $value;
    let $time;
  // let $value = $(this).siblings(".textarea").val();
  // let $time = $(this).siblings(".hour").attr("id");
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
    if (localStorage.getItem($time)) {
      const savedInputs = localStorage.getItem($time, $value);
      userInputs.push(...savedInputs);
      renderInputs();
    }
  }
  // Render stored
  function renderInputs() {
    for (let i = 9; i < 18; i++) {
      let userInput = $value;
      console.log($value);
      console.log(userInput);
    }
  }

  // Stores text input
  $(".saveBtn").on("click", function () {
    let $value = $(this).siblings(".textarea").val().trim();
    let $time = $(this).siblings(".hour").attr("id");
    localStorage.setItem($time, $value);
  });
});


