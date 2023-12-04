// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourNineBtn = $('#btn-9')
var hourTenBtn  = $('#btn-10')
var hourElevenBtn = $('#btn-11') 
var hourTwelveBtn = $('#btn-12')
var hourOneBtn = $('#btn-1')
var hourTwoBtn = $('#btn-2')
var hourThreeBtn = $('#btn-3')
var hourFourBtn = $('#btn-4')
var hourFiveBtn = $('#btn-5')
var hourBtnArray = [hourNineBtn, hourTenBtn, hourElevenBtn, hourTwelveBtn, hourOneBtn, hourTwoBtn, hourThreeBtn, hourFourBtn, hourFiveBtn]

var hourNine = $("#hour-9");
var hourTen = $("#hour-10");
var hourEleven = $("#hour-11");
var hourTwelve = $("#hour-12");
var hourOne = $("#hour-1");
var hourTwo = $("#hour-2");
var hourThree = $("#hour-3");
var hourFour = $("#hour-4");
var hourFive = $("#hour-5");
var workDayIds = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive]

$(document).ready(function() {
  workDayIds.forEach(function(hour) {
  hour.children("textarea").text(localStorage.getItem(hour.attr("id")))
  })
})

//Lines 15-21 Are responsible for showing the current date within the header. 3rd Child within HTML header
//review date using jQuery instead
var currentDate = new Date();
var editDateInfo = currentDate.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});
  document.querySelector("#currentDate").textContent = editDateInfo

//selects hours from currentDate
currentTimeHour = currentDate.getHours()

//Loop to check what the current time is and update visual classes.
//Need to use military time to more easily compare the values.
var workHour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
   for (var i = 0; i < workHour.length+1; i++) {
     if (workHour[i] < currentTimeHour) {
        workDayIds[i].addClass('past') //updating to jquery is .addClass('')
        workDayIds[i].removeClass('present')//updating to jquery remove is .removeClass('')
        workDayIds[i].removeClass('future')
     } else if (workHour[i]  > currentTimeHour) {
        workDayIds[i].removeClass('past')
        workDayIds[i].removeClass('present')
        workDayIds[i].addClass('future')
     } else if (workHour[i] == currentTimeHour) {
        workDayIds[i].addClass('present')
        workDayIds[i].removeClass('past')
        workDayIds[i].removeClass('future')
     }
}

hourBtnArray.forEach(function(hourBtn) {
  hourBtn.on("click", function() {
    let textInput = hourBtn.siblings("textarea").val()
    localStorage.setItem(hourBtn.parent().attr("id"), textInput)
  })
})





  /* Pseudo code
    TODO: Create save button functionality to remember in local storage what the user inserted.
      *Upon button click with function {} need for it to look at the correlating hour to see if it has text
        ? something like if #hourNineID === 'clicked' && hourNine has text 
        ? Then if they match, create a local storage to save that text information within that hour
  */

  // TODO: Add a listener for click events on the save button. This code should
  // *use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  /*
  comments
  comments
  */
