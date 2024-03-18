// Assignment 4

// Q1 Declare an empty array using JS literal notation to store
// student names in future.

// let StudentName = []




// Q2 Declare an empty array using JS object notation to store
// student names in future.

// let StudentName = [{}]



// Q3 Declare and initialize a strings array.

// let studentsName = ['John', "Peter", "Ali", "Abbas"]



// Q4 Declare and initialize a numbers array.

// let studentsGrade = [1, 2, 3, 4]




// Q5 Declare and initialize a boolean array.

// let isFeePaid = [true, false, false, false]




// Q6 Declare and initialize a mixed array.

// let mixedArr = [1, 2, 3, 4, "Student", "Admin", false, false, false]





// Q7 Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser



// const degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]

// document.write('Qualifications: ')
// for(let i = 0; i < degrees.length; i++){
//     document.write(`<h4>${i}) ${degrees[i]}</h4><br>`)
// }




// Q8 Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students

// let studentNames = ['Micheal', 'John', "Tony"]
// let studentScores = [320, 230, 480]
// let totalMarks = 500

// for (let i = 0; i < studentNames.length; i++) {
//     document.write(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${ ((studentScores[i] / totalMarks) * 100) }%<br><br>`)
// }





// Q9 Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// Arrays | JAVASCRIPT

// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// let colors = ['Pink', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta']

// for (const color of colors) {
//     document.write(`${color}<br>`)
// }

// let beginingColorByUser = prompt('What color you want to add to the begining?')
// const updatedArr = [beginingColorByUser, ...colors]
// colors = []
// console.log(updatedArr)
// document.open()
// // location.reload()

// for (const color of updatedArr) {
//     document.write(`${color}<br>`)
// }





// -----------------ATTEMPTED Q9 BUT COULD NOT SUCCEED ------------------------------







// Q10 Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let StudentScores = [320, 230, 480, 120]
// console.log(StudentScores.sort((a, b) => a- b))







// Q11 Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cityNames = ['Karachi', 'Lahore', 'Quetta', 'Peshawar', 'Berlin']
// let selectedCities = cityNames.slice(2, 5)
// console.log(selectedCities)






// Q12 Write a program to create a single string from the
// below mentioned array:

// let arr = ["This ", " is ", " my ", " cat"];
// const newArr = arr.join('');
// console.log(newArr)








// Q13 Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// const devices = []
// devices.push('Keyboard')
// devices.push('Mouse')
// devices.push('Printer')
// devices.push('Monitor')

// console.log(devices)







// Q14 Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


// let devices = []
// devices.unshift('Monitor')
// devices.unshift('Printer')
// devices.unshift('Mouse')
// devices.unshift('Keyboard')
// console.log(devices)





// Q15 Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


// const devices = ["Apple", "Samsung", 'Motorola', "Nokia", "Sony"]


// document.write(`<select>${
//     devices.forEach(device =>} <option value=`${device}``>${device}</option>)    
// }</select>`)

// Touch to complete