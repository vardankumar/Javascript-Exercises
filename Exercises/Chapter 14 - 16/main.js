//  --------------- ARRAYS ------------------


// Declare an empty array using JS literal notation to store
// student names in future.


// let arr = [];


// ---------------------------------------------


// Declare an empty array using JS object notation to store
// student names in future.


// let arr = new Array()


// ---------------------------------------------




// Declare and initialize a strings array.

// let arr = ['Apple', 'Banana', 'Mangoes']



// ---------------------------------------------








// Declare and initialize a numbers array.

// let arr = [1, 10, 11, 100, 101, 110, 111]

// ---------------------------------------------






// Declare and initialize a boolean array.

// let boolArr = [true, false]


// ---------------------------------------------



// Declare and initialize a mixed array.



// let mixedArr = [1, 2, 'Apple', true]


// ---------------------------------------------




// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser 

// UNCOMMENT THE CODE BELOW


// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// let num = 0
// document.write(++num + ") "+qualifications[0] + "<br>")
// document.write(++num + ") "+qualifications[1] + "<br>")
// document.write(++num + ") "+qualifications[2] + "<br>")
// document.write(++num + ") "+qualifications[3] + "<br>")
// document.write(++num + ") "+qualifications[4] + "<br>")
// document.write(++num + ") "+qualifications[5] + "<br>")
// document.write(++num + ") "+qualifications[6] + "<br>")
// document.write(++num + ") "+qualifications[7] + "<br>")



// ---------------------------------------------




// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students


// UNCOMMENT THE CODE BELOW


// let students = ['Shahbaz', 'Saqib', 'Bilal']
// let scores = [391, 388,  389]
// let total = 500

// document.write('Score of ' + students[0] + " is : "+ scores[0] + ". Percentage : "+ (scores[0] / total) * 100 + "% <br/>")
// document.write('Score of ' + students[1] + " is : "+ scores[1] + ". Percentage : "+ (scores[1] / total) * 100 + "% <br/>")
// document.write('Score of ' + students[2] + " is : "+ scores[2] + ". Percentage : "+ (scores[2] / total) * 100 + "% <br/>")



// ---------------------------------------------



// Initialize an array with color names. Display the array
// elements in your browser.

// UNCOMMENT THE CODE BELOW


// a. 


// let arr = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+ " ")
// }

// // Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. 

// let beginningColor = prompt('Enter a color to add to the start of array')
// arr.unshift(beginningColor)
// document.body.innerHTML = ""
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+ ", ")
// }


// // Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. 
// let endingColor = prompt('Enter a color to add to the end of array')
// arr.push(endingColor)
// document.body.innerHTML = ""
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+ ", ")
// }


// // Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. 
// arr.splice(0, 0, "megento", "pink")
// document.body.innerHTML = ""
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+ ", ")
// }


// // Delete the first color in the array. Display the updated
// // array in your browser.
// // e. 
// arr.shift()
// document.body.innerHTML = ""
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+ ", ")
// }



// // Delete the last color in the array. Display the updated
// // array in your browser.
// // f. 
// arr.pop()
// document.body.innerHTML = ""
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+ ", ")
// }

// // Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. 
// let userIndex = Number(prompt('Which index you want to add color to'))
// let userColor = prompt('Enter the color you want to add  to '+ userIndex + " index")
// arr.splice(userIndex, 0, userColor)
// document.body.innerHTML = ""
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+ ", ")
// }

// // Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.



// ---------------------------------------------



// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.



// UNCOMMENT THE BELOW CODE

// let studentScores = [320, 340, 120, 119, 410]
// studentScores.sort((a, b) => a-b)
// for(let i=0; i<studentScores.length; i++){
//         document.write(studentScores[i]+ ", ")
//     }


// ---------------------------------------------




// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let arr = ['Our', 'goal', 'is', 'to', 'become', 'self-reliant']
// document.write(arr.join(" "))




// ---------------------------------------------



// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:



// UNCOMMENT THE BELOW CODE



// let phones = ['Apple', 'Samsung', "Motorola", "Nokia"]
// let html = "<select>"

// for(let i=0; i<phones.length; i++){
//     html += "<option value='>"+phones[i]+"'>"+phones[i]+"</option>"
// }

// html += "</select>"
// document.write(html)