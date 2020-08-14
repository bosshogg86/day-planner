$(document).ready(function () {
  // Declare storage array
  // let userInputs = [];
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
  renderInputs();

  function renderInputs() {
    for (let i = 9; i < 18; i++) {
      value = localStorage.getItem(i);
      $("#hour-" + i).val(value);
      console.log(value);
    }
  }

  // Stores text input
  $(".saveBtn").on("click", function () {
    value = $(this).siblings(".textarea").val().trim();
    time = $(this).siblings(".hour").attr("id");
    localStorage.setItem(time, value);
    renderInputs();
  });
});
