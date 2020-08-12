$(document).ready(function () {
  const $textArea = $(".textarea");
  console.log($textArea);
  const m = moment();

  // Array of time-blocks
  const $timeBlock = $(".time-block");
  console.log($timeBlock);

  // Display Date
  let date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);

  // Current time
  let currentTime = m.hours();
  console.log(currentTime);

  $textArea.each(function (i) {
    if (currentTime === i + 9) {
      $(this).addClass("present");
    } else if (currentTime > i + 9) {
      console.log("past true");
      $(this).addClass("past");
    } else if (currentTime < i + 9) {
      $(this).addClass("future");
    }
    console.log(currentTime);
  });
});
