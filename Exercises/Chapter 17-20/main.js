// ---------- ARRAYS AND LOOP ----------------



// Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let arr = [[]]

// ---------------------------------------------







// Declare and initialize a multidimensional array
// representing the following matrix


// let arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ]



// ---------------------------------------------


// Write a program to print numeric counting from 1 to 10

// for(let i=1; i<11; i++){
//     document.write(i+"<br>")
// }







// ---------------------------------------------




// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let table = Number(prompt('Enter number to show multipication table'))
// let length = Number(prompt('Enter length multiplication table'))
// let start = 1;

// for(let i=1; i <= length; i++){
//     document.write(table+"X"+start+++"="+(table*i)+"<br>")
// }

// ---------------------------------------------




// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// let fruits = ['cherry', 'mango', 'peach', 'orange', 'papaya']
// for(let i=0; i<fruits.length; i++){
//     document.write('Element at index '+ i + ' is ' + fruits[i] + '<br>')
// }






// ---------------------------------------------






// Generate the following series in your browser. See
// example output.


// UNCOMMENT THE CODE BELOW


// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// for(let i=1; i<=15; i++){
//     document.write(i+" ")
// }


// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write('<br>')
// for(let i=10; i>0; i--){
//     document.write(i+" ")
// }



// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write('<br>')
// for(let i=0; i<=20; i++){
//     if(i%2 === 0){
//         document.write(i+" ")
//     }
// }



// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write('<br>')
// for(let i=0; i<=20; i++){
//     if(i%2 != 0){
//         document.write(i+" ")
//     }
// }
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write('<br>')
// for(let i=1; i<=20; i++){
//     if(i%2 === 0){
//         document.write(i+"k ")
//     }
// }





// ---------------------------------------------


// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:






// let items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// let userSearch = prompt('What do you want?')

// let isAvailable = items.find((elem) => elem === userSearch)
// console.log(isAvailable);
// if(isAvailable){
//     document.write(userSearch + " is <b>available</b> at index " + items.indexOf(userSearch.toLowerCase()) + " in our bakery <br>")
// }else{
//     document.write('We are sorry '+userSearch+ " is <b>not available</b> in our backery <br>")
// }





// ---------------------------------------------






