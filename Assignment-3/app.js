// ASSIGNMENT 3


//  Q1 Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


// const cityName = prompt('Enter city name.')

// if(cityName.toLowerCase() === 'karachi'){
//     document.write('Welcome to city of lights')
// }







// Q2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.



// let userGender = prompt('Enter your gender')

// if(userGender.toLowerCase() === "male"){
//     document.write('Hello Sir')
// } else {document.write('Hello Maam')}








// Q3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// let signalInput = prompt('Enter Signal Color')
// if(signalInput.toLowerCase() === 'red'){
//     document.write('Must Stop')

// } else if(signalInput.toLowerCase() === 'yellow'){
//     document.write('Ready to move.')

// } else if(signalInput.toLowerCase() === 'green'){
//     document.write('Move now.')

// }






// Q4 Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// let carFuel = prompt('Enter enter the amount of fuel in your car.')
// if(+carFuel <= 0.25){
//     document.write('Please refill the fuel in your car. ')
// }








// Q5 Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade


// let subject1 = +prompt('Please enter first subject marks')
// let subject2 = +prompt('Please enter second subject marks')
// let subject3 = +prompt('Please enter third subject marks')
// let totalMarks = 300

// let percentage =  ((subject1 + subject2 + subject3) / totalMarks ) * 100
// let grade;
// let remarks;

// if(percentage >= 80) {
//     grade = 'A1'
//     remarks = "Excellent"
// } else if(percentage >= 70){
//     grade = 'A'
//     remarks = "Good"
// } else if(percentage >= 60){
//     grade = 'B'
//     remarks = "You need to improve"
// } else {
//     grade = 'Fail'
//     remarks = "Sorry"
// }


// document.write('<h1>Mark Sheet</h1><br><br><br>')
// document.write(`Total Marks : ${totalMarks}<br>`)
// document.write(`Marks obtained : ${subject1 + subject2 + subject3}<br>`)
// document.write(`Percentage : ${percentage}%<br>`)
// document.write(`Grade : ${grade}<br>`)
// document.write(`Remarks : ${remarks}<br>`)












// Q6 Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.



// let secretNumber = 9
// let userGuess = +prompt('Guess a number between 1 and 10')

// if(userGuess === secretNumber) {
//     document.write(`Bingo! Correct`)
// } else {
//     userGuess = +prompt('Wrong number, Guess Again')
// }







// Q7 Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.



// let givenNumber = +prompt('Check if a number is divisible by 3 or not')

// if(givenNumber % 3 === 0) {
//     document.write(`Yes ${givenNumber} is divisible by 3`)
// } else {
//     document.write(`No ${givenNumber} is not divisible by 3`)
// }









// Q8 Write a program that checks whether the given input is an
// even number or an odd number.



// let givenNumber = +prompt('Check if a number is even or odd.')

// if(givenNumber % 2 === 0 ){
//     document.write(`${givenNumber} is even`)
// } else {
//     document.write(`${givenNumber} is odd`)

// }









//  Q10 Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”\

// let temp = prompt('What temperatur is today.')

// if(+temp >= 40 ){
//     document.write(`Its too hot outside.<br>`)
// } else if(+temp >= 30){
//     document.write(`The weather today is normal.<br>`)
// } else if(+temp >= 20){
//     document.write(`Today’s Weather is cool.`)
// } else if(+temp >= 10){
//     document.write(`OMG! Today’s weather is so Cool.`)
// }