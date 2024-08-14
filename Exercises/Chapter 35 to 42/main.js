// ------------- FUNCTION --------------

// Write a function that displays current date & time in your
// browser.

function displayTime(){
    let date = new Date()
    document.write(date)
}

// displayTime()


function greetUser(){
    let firstName = prompt('Enter Your First Name.')
    let lastName = prompt('Enter Your Last Name.')
    alert('Greetings, ' + firstName + " " + lastName)
}

// greetUser()

// let num = Number(prompt('Enter a number to get square of it'))
function square(num){
    document.write('Square of ' + num + " is " + num*num)
}

// square(num)

// Write a function that computes factorial of a number.

function factorial(num1){
    let factorial = 1;
    for(let i=1; i<=num1; i++){
        factorial *= i
    }
    document.write(factorial)
}

// factorial(5)








// Write a function that take start and end number as inputs
// & display counting in your browser.


function printCounting(start, end){
    for(let i=start; i<=end; i++){
        document.write(i, " ")
    }
}

printCounting(0, 111)

