//  STRING METHODS

// Q1 Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt('Enter your first name')
// let lastName = prompt('Enter your last name')
// let fullName = `${firstName} ${lastName}`
// alert(`Hello ${fullName}`)



// Q2 Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let phoneModel = prompt('Please enter your favourite mobile phone')
// document.write(`My favourite phone is ${phoneModel} <br> Length of string: ${phoneModel.length}`)





// Q3 Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let string = 'Pakistani'
// document.write("String: ", string, "<br>" )
// for (let i = 0; i < string.length; i++) {
//     if(string.at(i) === 'n'){
//         document.write("Index of 'n' is :", i)
//     }
// }




// Q4 Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let string = "Hello World"
// document.write("String: ", string, "<br>" )
// document.write(`Index of "l" is : ${string.lastIndexOf('l')}` )





// Q5 Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let string = "Pakistan"
// document.write("String: ", string, "<br>" )
// document.write(`Character at index 3 : ${string.charAt(3)}` )





// Q6 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let city = 'Hyderabad';
// document.write(`City : ${city} <br>`);
// document.write(`After replacement : ${city.replace("Hyder", "Islam")}`)




// Q7 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let message = "Ali and Sami are best friends. They play cricket and football together"
// document.write(`Message: ${message} <br>`)
// document.write(`Message: ${message.replaceAll('and', "&")}`)







// Q8 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let number = "472"
// document.write(`Value: ${number}<br>`)
// document.write(`Type: ${typeof number}<br>`)

// number = Number(number)
// document.write(`Value: ${number}<br>`)
// document.write(`Type: ${typeof number}<br>`)








// Q9 Write a program that takes user input. Convert and
// show the input in capital letters.

// let userInput = prompt('Enter a text to get uppercase')
// document.write(`User input: ${userInput} <br>`)
// document.write(`Upper case: ${userInput.toUpperCase()} <br>`)






// Q10 Write a program that takes user input. Convert and
// show the input in title case.

// let userInput = prompt('Enter any test to get titlecase')
// let firstLetter = userInput.slice(0, 1)
// let remianingText = userInput.substring(1, userInput.length)
// document.write(firstLetter.toUpperCase() + remianingText)






// Q11 Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;
// var numAsString = num.toString();
// var numWithoutDot = numAsString.replace('.', '');
// document.write(numWithoutDot)





// Math Methods

// Q1 Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let number = prompt('Enter a number')
// console.log(`Number : ${number}`)
// console.log(`Round off value : ${Math.round(number)}`)
// console.log(`Ceil value : ${Math.ceil(number)}`)
// console.log(`Floor value : ${Math.floor(number)}`)






// Q2 Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number




// let negNumber = prompt('Write a negative number')
// console.log(`Number : ${negNumber}`)
// console.log(`Round off value : ${Math.round(negNumber)}`)
// console.log(`Ceil value : ${Math.ceil(negNumber)}`)
// console.log(`floor value : ${Math.floor(negNumber)}`)





// Q3 Write a program that displays the absolute value of a
// number.

// let number = prompt('Write a number to get abs of it')
// console.log(`Number is ${number}`)
// console.log(`Absolute of Number is ${Math.abs(number)}`)





// Q4 Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// document.write((Math.floor(Math.random() * 6)) + 1 )





// Q5 Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// let number = ((Math.floor(Math.random() * 2)) + 1 )
// document.write(number)
// document.write('<br>')
// if(number === 1){
//     document.write('Random coin value: ' + "Heads")
// } else {
//     document.write('Random coin value: ' + "Tails")
// }


// Q6 Write a program that shows a random number between 1
// and 100 in your browser.


// document.write(`Random number between 1 and 100 is ${(Math.floor(Math.random() * 100)) + 1}`)







// Date Methods

// document.write(new Date())

// Q2 Write a program that alerts the current month in words.
// For example December.

alert(`Current month : ${new Date().getMonth().toLocaleString('default', {month : 'long'})}`)