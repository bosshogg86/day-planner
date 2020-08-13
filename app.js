$(document).ready(function () {
  const $textArea = $(".textarea");
  const $saveBtn = $(".saveBtn");
  const m = moment();

  // Storage array
  let userInputs = [];

  // Display Date
  let date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);

  // Grabs current time
  let currentTime = m.hours();

  // Checks if time-block is past, present, future
  $textArea.each(function (i) {
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
    $($saveBtn).on("click", function () {
      userInputs.push($(this).siblings(".textarea").val());
      localStorage.setItem("input", JSON.stringify(userInputs));
    });
  });
});
