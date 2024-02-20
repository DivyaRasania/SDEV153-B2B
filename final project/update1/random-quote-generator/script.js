const API_KEY = "lGsAyLWYhrP/sOLMrrdxIA==BzCJrJut9g98gwzm";
const API_URL = "https://api.api-ninjas.com/v1/quotes?limit=1&category=funny";

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': API_KEY
    }
}

const generate = async () => {
    const quotes = await fetch(API_URL, options);
    const data = await quotes.json();

    let author = data[0].author;
    let quote = data[0].quote;

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}