let userInput = document.getElementById("userInput")
let list = document.getElementById('para')
console.log(userInput);

let typing = document.getElementById('Typing')

function response(str, sec=1){
    setTimeout(() => {
        list.innerHTML += `<li class="response">${str}</li>`
        typing.style.display = 'none'
    }, sec * 1000)
}


function sendMessage(){
    // document.querySelector('#para').innerHTML += `<li>${userInput.value}</li>`
    if(event.keyCode == 13){
        let element = event.target
        list.innerHTML += `<li class='prompt'>${element.value}</li>`
        typing.style.display = 'block'
        if(['hi', 'hello', 'hy', 'how are you', 'salam', 'assalam walakum'].indexOf(element.value.toLowerCase()) !== -1){
            response('Hello', 1)
            response('How are you?', 1.8)
        }
        else if(['fine', 'very well', 'good', 'what about you', 'awsome'].indexOf(element.value.toLowerCase()) !== -1){
            response('How can we help you today?', 1.2)
        }
        else if(['need admission in saylani', 'admission', 'want admission', 'smit admission', 'i want admission in smit'].indexOf(element.value.toLowerCase()) !== -1){
            response(`Please visit SMIT facebook page to know if admissions are opened.`)
        }
        else{
            response('Sorry, I could not understand your query. Please try again')
        }
        element.value = ""
    }
}