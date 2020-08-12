$(document).ready(function () {
  const $textArea = $(".textarea");
  // const $saveBtn = $(".saveBtn");
  const m = moment();
//   let userInput = $textArea.text();
  let userInputs0 = [];
  let userInputs1 = [];
  let userInputs2 = [];
  let userInputs3 = [];
  let userInputs4 = [];
  let userInputs5 = [];
  let userInputs6 = [];
  let userInputs7 = [];
  let userInputs8 = [];

  // const $timeBlock = $(".time-block");

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

$("#btn0").on('click', function () {
    userInputs0.push($('#input0').val());
    localStorage.setItem("item", JSON.stringify(userInputs0));
});

$("#btn1").on('click', function () {
  userInputs1.push($('#input1').val());
  localStorage.setItem("item", JSON.stringify(userInputs1));
});

$("#btn2").on('click', function () {
  userInputs2.push($('#input2').val());
  localStorage.setItem("item", JSON.stringify(userInputs2));
});

$("#btn3").on('click', function () {
  userInputs3.push($('#input3').val());
  localStorage.setItem("item", JSON.stringify(userInputs3));
});

$("#btn4").on('click', function () {
userInputs4.push($('#input4').val());
localStorage.setItem("item", JSON.stringify(userInputs4));
});

$("#btn5").on('click', function () {
userInputs5.push($('#input5').val());
localStorage.setItem("item", JSON.stringify(userInputs5));
});

$("#btn6").on('click', function () {
  userInputs6.push($('#input6').val());
  localStorage.setItem("item", JSON.stringify(userInputs6));
});

$("#btn7").on('click', function () {
userInputs7.push($('#input7').val());
localStorage.setItem("item", JSON.stringify(userInputs7));
});

$("#btn8").on('click', function () {
userInputs8.push($('#input8').val());
localStorage.setItem("item", JSON.stringify(userInputs8));
});

});
