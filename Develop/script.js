// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourNine = document.querySelector("#hour-9");
var hourTen = document.querySelector("#hour-10");
var hourEleven = document.querySelector("#hour-11");
var hourTwelve = document.querySelector("#hour-12");
var hourOne = document.querySelector("#hour-1");
var hourTwo = document.querySelector("#hour-2");
var hourThree = document.querySelector("#hour-3");
var hourFour = document.querySelector("#hour-4");
var hourFive = document.querySelector("#hour-5");
//Lines 15-21 Are responsible for showing the current date within the header. 3rd Child within HTML header

var currentDate = new Date();
var editDateInfo = currentDate.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});
  document.querySelector("#currentDate").textContent = editDateInfo

//selects hours from currentDate
currentTimeHour = currentDate.getHours()

jqueryCall = $('#hour-10')

//Loop to check what the current time is and update visual classes.
//Need to use military time to more easily compare the values.
workDayIds = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive]
var workHour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
   for (var i = 0; i < workHour.length+1; i++) {
     if (workHour[i] < currentTimeHour) {
        workDayIds[i].classList.add('past')
        workDayIds[i].classList.remove('present')
        workDayIds[i].classList.remove('future')
     } else if (workHour[i]  > currentTimeHour) {
        workDayIds[i].classList.remove('past')
        workDayIds[i].classList.remove('present')
        workDayIds[i].classList.add('future')
     } else if (workHour[i] == currentTimeHour) {
        workDayIds[i].classList.add('present')
        workDayIds[i].classList.remove('past')
        workDayIds[i].classList.remove('future')
     }
}


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});





/**
PSEUDO CODE
----need variable where if time < current time
        ----add classlist that grey's out those times
 */