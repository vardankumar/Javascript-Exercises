// Arrays and Loops

// Q1 Declare and initialize a multidimensional array
// representing the following matrix:

// let arr = [[0, 1, 2, 3], [1, 0 , 1, 2], [2, 1, 0, 1]]




// Q2 Write a program to print numeric counting from 1 to 10.


// for (let i = 1; i < 11; i++){
//     console.log(i)
// }


// Q3 Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// const table = prompt("Enter a number to show its multiplication table.")
// const tableLength = prompt("Enter the length of the multiplication table")

// for (let i = 1; i <= tableLength; i++){
//     document.write(`${table} X ${i} = ${table * i} <br>`)
// }



// Q4 Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`)
// }






// Q5 Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write('Counting: ')
// for (let i = 1; i < 16; i++) {
//     document.write(`${i} `)
// }

// document.write('<br> Reverse counting: ')
// for(let i = 10; i > 0; i-- ){
//     document.write(`${i} `)
// }

// document.write('<br> Even: ')
// for (let i = 0; i < 21; i++) {
//     if(i % 2 === 0){
//         document.write(`${i} `)
//     }
// }

// document.write('<br> Odd: ')
// for (let i = 0; i < 21; i++) {
//     if(i % 2 !== 0){
//         document.write(`${i} `)
//     }
// }

// document.write('<br> Series: ')
// for (let i = 1; i < 21; i++) {
//     if(i % 2 === 0){
//         document.write(`${i}k `)
//     }
// }






// Q6 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let fruits = ['cake', 'applepie', 'cookie', 'chips', 'patties']

// let isPresent = prompt('Find if fruit of your choice is available')

// let available = false

// for (let i = 0; i < fruits.length; i++) {
//     if(isPresent === fruits[i]) {
//         document.write(`Yes, ${fruits[i]} is available`)
//         available = true
//     }
// }

// // document.write(`${notAvailable} ? Sorry ${isPresent} is not available.`)

// if(!available) {
//     document.write(`Sorry ${isPresent} is not available`)
// }

// notAvailable = false








// Q7 Write a program to identify the largest number in the
// given array.

// let arr = [24, 53, 78, 91, 12]

// let num = 0

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > num){
//         num = arr[i]
//     }
// }

// console.log(num)


// Q8 Write a program to identify the smallest number in the
// given array.

// let arr = [24, 53, 78, 91, 12]
// let num = Infinity
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < num) num = arr[i]
// }
// console.log(num)


// Q9 Write a program to print multiples of 5 ranging 1 to
// 100.

// for(let i = 1; i < 101; i++) {
//     document.write(`${i * 5}, `)
//     if(i === 100) document.write(`${i * 5}`) 
// }