// Assignment 2

// Chapter 4

// Q2 Declare 5 legal & 5 illegal variable names.

// legal variable names

// let legal;
// let illegal;
// let school;
// let schoolling;
// let student;


// Illegal variable names

// let var;
// let name;
// let alert;
// let class;
// let function;



// Q3 

// Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


// document.write("<h1>Rules for naming JS variables</h1>")
// document.write(`Variable names can only contain . numbers, $ and _ . For example : $my_1stVariable`)
// document.write(`Variable names must begin with a letter, $ or _ . For example : $name, _name or name`)
// document.write('Variable names are case sensitive')
// document.write('Variable names should be not JS keywords')



// Chapter 5

// Q1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// const a = 3
// const b = 5
// const sum = a + b


// document.write("Sum of " + a  +" and " + b +" is "+ sum)

// Q2 Repeat task1 for subtraction, multiplication, division &
// modulus.

// const difference = a - b
// const multiplication = a * b
// const division = a / b
// const modulus = a % b

// document.write("Subtraction of " + a  +" and " + b +" is "+ difference)
// document.write("Multiplication of " + a  +" and " + b +" is "+ multiplication)
// document.write("Division of " + a  +" and " + b +" is "+ division)
// document.write("Modulus of " + a  +" and " + b +" is "+ modulus)



//  Q3 Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value

// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.




// let variable;

// document.write(`<h2>Value of variable declaration is ${variable}</h2>`)


// variable = 1

// document.write(`<h3>Initial value : ${variable}</h3>`)

// variable++


// document.write(`<h3>Value after increment is: ${variable}</h3>`)

// variable += 7

// document.write(`<h3>Value after addition is: ${variable}</h3>`)

// variable--

// document.write(`<h3>Value after decrement is: ${variable}</h3>`)

// variable /= 3

// document.write(`<h3>Output: The reminder is: ${variable}</h3>`)










//  Q4 Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:




// let ticketPrice = 600;
// let totalTickets = 5

// let totalCost = totalTickets * ticketPrice;

// document.write(`<h3>Total cost to buy ${totalTickets} to a movie is ${totalCost}PKR.</h3>`)







// Q5 Write a script to display multiplication table of any number in your browser.

// const table = prompt('Please enter a number')

// for (let i = 1; i <= 10; i++) {
//     document.write(`${table} X ${i} = ${table * (i)} <br>`)
// }






// Q7 Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables



// let item1 = prompt("Enter the prie of item1.")
// let item1Quantity = prompt("Enter the quantity of item1.")
// let item2 = prompt("Enter the prie of item2.")
// let item2Quantity = prompt("Enter the quantity of item2.")
// let shippingCharges = 100


// document.write(`Price of item 1 is ${item1}<br>`)
// document.write(`Quantity of item 1 is ${item1Quantity}<br>`)
// document.write(`Price of item 2 is ${item2}<br>`)
// document.write(`Quantity of item 2 is ${item2Quantity}<br>`)
// document.write(`Shipping charges ${shippingCharges}<br>`)
// document.write(`Total cost of your order is ${(item1 * item1Quantity) + (item2 * item2Quantity) + shippingCharges}<br>`)






// Q8 Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// let totalMarks = +prompt('Enter Total Marks')
// let obtainedMarks = +prompt('Enter obtained Marks')
// const result = (obtainedMarks / totalMarks) * 100

// document.write(`Total marks: ${totalMarks}<br>`)
// document.write(`Obtained marks: ${obtainedMarks}<br>`)
// document.write(`Percentage : ${result}%<br>`)


// Q9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let usd = 10
// let riyal = 25
// let usdExchangeRate = 280
// let riyalExchangeRate = 83

// let totalAmountPkr = ((riyal * riyalExchangeRate) + (usd * usdExchangeRate))

// document.write(`Total currency in PKR: ${totalAmountPkr}`)











// Q10 Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression




// let number = 7
// // console.log((((number += 5) * 10) / 2))
// document.write((((number += 5) * 10) / 2))









//  Q3 The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


// let favourateSnack = 'Black Chocolate'
// let myCurrentAge = 24;
// let maximumAge = 85;
// let estimatedSnackPerDay = 0.5
// let totalAge = maximumAge - myCurrentAge;
// console.log(totalAge);
// let leapDays = (totalAge / 4).toFixed(0);
// console.log(leapDays);
// let totalSnacksNeeded = estimatedSnackPerDay * (totalAge * 365) + leapDays
// console.log(totalSnacksNeeded)


// document.write('<h1>The Lifetime Supply Calculator</h1><br>')
// document.write(`Favourite Snack : ${favourateSnack}<br>`)
// document.write(`CurrentAge : ${myCurrentAge}<br>`)
// document.write(`EstimatedMaxAge : ${maximumAge}<br>`)
// document.write(`Amount of snacks per day : ${estimatedSnackPerDay}<br>`)
// document.write(`You will need ${totalSnacksNeeded} ${favourateSnack} to last you untill the ripe old age of ${maximumAge}<br>`)












// CHAPTER 6











// Q1 Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let num = 5

// document.write(`Result:<br>`)
// document.write(`The value of num is ${num}<br><hr><br>`)
// document.write(`The value of ++num is ${++num}<br>`)
// document.write(`Now the value of ++num is ${num}<br><br>`)
// document.write(`The value of num++ is ${num++}<br>`)
// document.write(`Now the value of num++ is ${num}<br><br>`)
// document.write(`The value of --num is ${--num}<br>`)
// document.write(`Now the value of --num is ${num}<br><br>`)
// document.write(`The value of num-- is ${num--}<br>`)
// document.write(`Now the value of num-- is ${num}<br><br>`)




// Q2 What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; 
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// let a = 2;
// let b = 1;
// let result = --a - --b + ++b + b--

// --a;               // 1
// --a - --b;         // 1 - 0
// --a - --b + ++b;   // 1 - 0 + 2
// --a - --b + ++b + b--;  // 1 - 0 + 2 + 2


// document.write(`a is ${a}<br>`)
// document.write(`b is ${b}<br>`)
// document.write(`result is ${result}<br>`)





// Q3 Write a program that takes input a name from user &
// greet the user.

// let userName = prompt('Enter your name.')
// document.write(`Hello ${userName}`)






// Q5 Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// const table = prompt('Please enter a number' , 5)

// for (let i = 1; i <= 10; i++) {
//     document.write(`${table} X ${i} = ${table * (i)} <br>`)
// }