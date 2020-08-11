$(document).ready(function () {
    let date = moment().format('dddd, MMMM Do');
    $("#currentDay").text(date);
});