//  ---------------- IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS --------------




// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)


// UNCOMMENT THE CODE BELOW



// var input = prompt('Enter a number or character')
// if(typeof +input === 'number'){
//     alert('NUMBER')
// }else if(charCodeAt(+input) >= 65 && charCodeAt(+input) <=90){
//     alert('UPPERCASE')
// }else if(charCodeAt(+input) >= 97 && charCodeAt(+input) <=122){
//     alert('LOWERCASE')
// }






// -------------------------------------------------------------



// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// UNCOMMENT THE CODE BELOW



// let int1 = Number(prompt('Enter the first integer'))
// let int2 = Number(prompt('Enter the second integer'))

// if(int1 === int2){
//     alert('Both integers are equal')
// }else if(int1 > int2){
//     alert(int1 + " is the largest")
// }else{
//     alert(int2 + " is the largest" )
// }






// -------------------------------------------------------------


// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.



// UNCOMMENT THE CODE BELOW


// let userInput = Number(prompt('Enter a number'))
// if(userInput === 0){
//     alert(+ ' Number is 0')
// }else if(userInput > 0){
//     alert(userInput + " is greater than 0")
// }else{
//     alert(userInput + " is less than 0")

// }




// -------------------------------------------------------------


// Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


// UNCOMMENT THE CODE BELOW


// let char = prompt('Enter a character')
// char = char.toLowerCase()
// switch (char) {
//     case "a":
//         alert(char + ' is vowel')
//         break;
//     case "e":
//         alert(char + ' is vowel')
//         break;
//     case "i":
//         alert(char + ' is vowel')
//         break;
//     case "o":
//         alert(char + ' is vowel')
//         break;
//     case "u":
//         alert(char + ' is vowel')
//         break;

//     default:
//         alert(char + " is not vowel")
//         break;
// }




// -------------------------------------------------------------



// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


// UNCOMMENT THE CODE BELOW


// let password = 'herrapheri'
// let userPass = prompt('Enter your password')


// if(!userPass){
//     alert('Please enter your password')
// }else if(password === userPass.toLowerCase()){
//     alert('Correct! The password you entered matches the original password')
// }else {
//     alert('Incorrect Password')
// }





// -------------------------------------------------------------


// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements



// UNCOMMENT THE CODE BELOW


// let userTime = Number(prompt('Enter the time'))
// if(userTime >= "0000" && userTime < '1200'){
//     alert('Good Morning')
// }else if(userTime >= "1200" && userTime < '1700'){
//     alert('Good Afternoon')
// }else if(userTime >= "1700" && userTime < '2100'){
//     alert('Good Evening')
// }else if(userTime >= "2100" && userTime < '2359'){
//     alert('Good Night')
// }



// -------------------------------------------------------------
