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




