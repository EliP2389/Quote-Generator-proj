const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Get Quotes From API
async function getQuotes() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47d65fbff9msh0b32e6e97d91b11p165935jsn8a343138cd00",
      "X-RapidAPI-Host": "inspiring-quotes.p.rapidapi.com",
    },
  };
  await fetch("https://inspiring-quotes.p.rapidapi.com/random?author", options)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      quoteText.textContent = data.quote;
      authorText.textContent = data.author;
    })
    .catch((err) => console.error(err));
}

// On Load
getQuotes();
