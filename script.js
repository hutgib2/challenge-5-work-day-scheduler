// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){

  var now = dayjs();
  console.log(now.get('hour'));



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  for (let i = 9; i < 18; i++) {
    $('#hour-' + i + ' button').on('click', function() {
      localStorage.setItem(i, $('#hour-' + i + ' .description').val());
      console.log($('#hour-' + i + ' .description').val());
      $("#log-messages").html("Appointment Added to <span>localStorage</span>");
    });
  }
  
  // .click(function name(params) {
  //     console.log("clicked");
  // })
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //changes color of tme blocks
  for (let i = 9; i < 18; i++) {
    if (i < now.get('hour')) {
      $('#hour-' + i).addClass("past");
    }
    else if (i == now.get('hour')) {
      $('#hour-' + i).addClass("present");
    }
    else if (i > now.get('hour')) {
      $('#hour-' + i).addClass("future");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for (let i = 9; i < 18; i++){
    let description = localStorage.getItem(i);
    console.log(description);
    $('#hour-' + i + ' .description').val(description);
  }

  // TODO: Add code to display the current date in the header of the page.
  
  $('#currentDay').html(now.format('dddd, MMMM DD YYYY'));
  
});
