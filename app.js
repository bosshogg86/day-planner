$(document).ready(function () {
  // Declare storage array
  let userInputs = [];
  let value;
  let time;

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
    if (localStorage.getItem(time)) {
      value = localStorage.getItem(time);
      console.log(value);
      renderInputs();
    }
  }

  // Render stored
  function renderInputs() {
    $(".textarea").empty();
    for (let i = 0; i < userInputs.length; i++) {
      $(".textarea").text(userInputs[i]);
      console.log(userInputs[i]);
    }
  }

  // Stores text input
  $(".saveBtn").on("click", function () {
    value = $(this).siblings(".textarea").val().trim();
    time = $(this).siblings(".hour").attr("id");
    localStorage.setItem(time, value);
    init();
  });
});
