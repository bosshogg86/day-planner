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

  // On btn click stores text input
  $(".time-block").each(function () {
    $(".saveBtn").on("click", function () {
      userInputs.push($(this).siblings(".textarea").val());
      localStorage.setItem("input", JSON.stringify(userInputs));
    });
  });
});
