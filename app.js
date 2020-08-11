$(document).ready(function () {
    const $textArea = $('.textarea');
    const m = moment();

    // Array of time-blocks
    const $timeBlock = $('.time-block')
    console.log($timeBlock);

    // Display Date
    let date = moment().format('dddd, MMMM Do');
    $("#currentDay").text(date);

    // Current time
    let currentTime = m.hours();
    console.log(currentTime);

    for (i = 0; i < $timeBlock.length; i++) {
        if ((currentTime - 9) === i) {
        $textArea.addClass('present');
        } else if ((currentTime - 9) > i) {
        console.log('past true');
        $textArea.addClass('past');
        } else if ((currentTime - 9) < i) {
        $textArea.addClass('future');
        } console.log(currentTime);
    }

}); 