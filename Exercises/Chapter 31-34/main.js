//  ---------------- DATE METHODS ---------------


// Write a program that displays current date and time in
// your browser.

let date = new Date()
// let months = ['January', "February", 'March', "April", "May", "June", "July", "August", "September", "October", "November", 
// "December"
// ]



// document.write(date + "<br>")
// document.write("Current Month : " + months[date.getMonth()] + "<br>")






// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// document.write("Current Day : " + days[date.getDay()] + "<br>")





// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// if(days[date.getDay()] === 'Sat' || days[date.getDay()] === 'Sun'){
//     document.write('Its Fun Day')
// }







// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


let curDate = new Date()
document.write('Current date : '+ curDate)
document.write('Elipsed millseconds since January 1, 1970 : '+ curDate.getTime() + "<br>")
document.write('Elipsed minutes since January 1, 1970 : '+ ((curDate.getTime() / 1000) / 60) + "<br>")