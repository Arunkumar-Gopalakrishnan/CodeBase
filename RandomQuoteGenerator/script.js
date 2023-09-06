
// accessing DOM Elements 
let quotesText = document.querySelector('.quotesText');
let authorOfQuote = document.querySelector('.authorOfQuote');
let newQuote = document.querySelector('.newQuote');
function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const quote = data.content;
            const author = data.author;
            quotesText.textContent = quote;
            authorOfQuote.textContent = author;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
newQuote.addEventListener('click', fetchRandomQuote);
fetchRandomQuote();

// quotes without api call
// random function based on index,
    // let RandomQuoteGernerator = (quotesArray) => {
    //     let quoteData = Math.floor(Math.random() * quotesArray.length);
    //     console.log(quoteData)
    //     let randomQuote = quotesArray[quoteData];
    //     console.log(randomQuote)
    //     return randomQuote;

    // }
    //  addevenelistener to button and using the random function.
    // newQuote.addEventListener('click', function () {
    //     let RetrievedQuote = RandomQuoteGernerator(quotesArray);
    //     quotesText.textContent = `${RetrievedQuote.quote}`;
    //     authorOfQuote.textContent = `${RetrievedQuote.author}`;
    // });
    // Create an array of objects, where each object represents a quote.
    // const quotesArray = [
    //     {
    //         quote: "The only way to do great work is to love what you do.",
    //         author: "Steve Jobs"
    //     },
    //     {
    //         quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    //         author: "Winston Churchill"
    //     },
    //     {
    //         quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    //         author: "Martin Luther King Jr."
    //     },
    //     // Add more quotes as needed
    // ];
    // using external api use fetch function

