// -------------------- MATH EXPRESSIONS ----------------------



// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser. 

var a = 10;
var b = 20;
var sum = a + b

// document.write('Sum of '+ a +" and " + b + " is " + sum + "<br/>")



// Repeat task1 for subtraction, multiplication, division & modulus.

var diff = a - b
// document.write('Subtraction of '+ a +" and " + b + " is " + diff + "<br/>")


var product = a * b
// document.write('Multiplication of '+ a +" and " + b + " is " + product + "<br/>")



var division = a / b
// document.write('Division of '+ a +" and " + b + " is " + division + "<br/>")







// Do the following using JS Mathematic Expressions
// a. Declare a variable.

// UNCOMMENT THE BELOW CODE

//     var num;

// // b. Show the value of variable in your browser like “Value
// // after variable declaration is: ??”.

//     document.write('Value after variable declaration is: '+num+"<br>")

// // c. Initialize the variable with some number.

//     num = 7;

// // d. Show the value of variable in your browser like “Initial
// // value: 5”.

//     document.write('Initial value: '+num+"<br>")

// // e. Increment the variable.

//     num++

// // f. Show the value of variable in your browser like “Value
// // after increment is: 6”.

//     document.write('Value after increment is: '+num+"<br/>")

// // g. Add 7 to the variable.

//     num += 7

// // h. Show the value of variable in your browser like “Value
// // after addition is: 13”.

//     document.write('Value after addition is: '+num+"<br/>")


// // i. Decrement the variable.

//     num--;


// // j. Show the value of variable in your browser like “Value
// // after decrement is: 12”.

// document.write('Value after decrement is: '+num+"<br/>")


// // k. Show the remainder after dividing the variable’s value
// // by 3.


// num %= 3


// // l. Output : “The remainder is : 0”.

// document.write('The remiander is is: '+num+"<br/>")






// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// UNCOMMENT THE BELOW CODE


// var ticketCost = 1200;
// var totalTickets = 12;
// var cost = totalTickets * ticketCost

// document.write('Total cost to buy '+ totalTickets + " to the movie is " + cost)





// Write a script to display multiplication table of any
// number in your browser.

// UNCOMMENT THE BELOW CODE


// var table = 9;
// var start = 0;

// document.write('Table of '+table+"<br/>")
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')
// document.write(table+"X"+(++start)+"="+table*start+'<br/>')







// . The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.

// UNCOMMENT THE BELOW CODE



// a. Store a Celsius temperature into a variable.

// var celcius = 32;

// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.

// var fahrenheit = (celcius * (9/5) + 32)
// document.write(celcius + '<sup>o</sup>'+"C is "+fahrenheit +"<sup>o</sup>F"+"<br/>")

// // c. Now store a Fahrenheit temperature into a variable.

// // d. Convert it to Celsius & output “NNoF is NNoC”.
// celcius = (fahrenheit - 32) * (9/5)
// document.write(fahrenheit + '<sup>o</sup>'+"F is "+celcius +"<sup>o</sup>C"+"<br/>")





// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables


// a. Price of item 1


// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


// UNCOMMENT THE BELOW CODE


// var item1 = 129.99
// var item2 = 149.99
// var quantity1 = 3
// var quantity2 = 5
// var shipping = 200

// document.write('Price of item 1 : ' + item1 + "<br>")
// document.write('Quantity of item 1 : ' + quantity1 + "<br>")
// document.write('Price of item 2 : ' + item2 + "<br>")
// document.write('Quantity of item 2 : ' + quantity2 + "<br>")
// document.write('Shipping charges ' + shipping + "<br>")


// document.write('Total cost of your order is '+ ((item1 * quantity1) + (item2 * quantity2) + shipping))








// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// UNCOMMENT THE BELOW CODE


// var totalMarks = 800;
// var marksObtained = 686;

// let result = (marksObtained / totalMarks) * 100

// document.write('<h2>Mark Sheet</h2>')
// document.write('Total Marks ' + totalMarks + '<br>')
// document.write('Marks Obtained ' + marksObtained + '<br>')
// document.write('Percentage: ' + result + '<br>')









// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// UNCOMMENT THE BELOW CODE



// var totalUsd = 10;
// var totalRiyal = 25;

// document.write('<h1>Currency in PKR</h1>')
// document.write('Total currency in PKR: '+(totalUsd * 104.80 + totalRiyal * 28))










// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// UNCOMMENT THE BELOW CODE


// var digit = 15;
// (((digit += 5) *10) /2)






// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.



// UNCOMMENT THE BELOW CODE


let currentYear = 2024
let birthYear = 1998

document.write("<h1>The Age Calculator</h1>")
document.write('Current Year : '+currentYear + "<br>")
document.write('Bith Year : '+birthYear + "<br>")
document.write('Your age is '+ (currentYear - birthYear) + "<br>")