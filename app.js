$(document).ready(function () {
  const $textArea = $(".textarea");
  const $saveBtn = $(".saveBtn");
  const m = moment();
//   let userInput = $textArea.text();
  let userInputs = [];

  // Array of time-blocks
  const $timeBlock = $(".time-block");

  // Display Date
  let date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);

  // Current time
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

  // 
//   $textArea.on("keyup change", function() {
//     $textArea.text(this.value);
//  });

//   $saveBtn.on("click", function() {
//     localStorage.setItem("userInputs", JSON.stringify($(".textarea")));
//   });

  $saveBtn.on('click', function () {
    userInputs.push($this.$textArea.val());
    localStorage.setItem("item", JSON.stringify(userInputs));
});
});
