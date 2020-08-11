$(document).ready(function () {
    
    const m = moment();
    
    // Display Date
    let date = moment().format('dddd, MMMM Do');
    $("#currentDay").text(date);

    // Current time
    let currentTime = m.hours();
    console.log(currentTime);
    // if (currentTime.toString === ) {

    // }

});