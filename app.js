$(document).ready(function () {
    const $nine = $('#nine');
    const m = moment();
    

    // Display Date
    let date = moment().format('dddd, MMMM Do');
    $("#currentDay").text(date);

    // Current time
    let currentTime = m.hours();
    console.log(currentTime);

    console.log($nine.value);

});