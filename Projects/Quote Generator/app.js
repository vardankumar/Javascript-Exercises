// GET QUOTES FROM API
let apiQuotes = [];
let quote = document.getElementById('quote')
let authorName = document.getElementById('author')

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
    return quote
}

async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes"
    try {

        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        let {text, author} = newQuote()
        quote.innerHTML = text
        authorName.innerHTML = author
        
        
    } catch (error) {
        
    }
}


getQuotes()