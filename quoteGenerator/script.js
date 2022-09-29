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
    .then(
      (quotes = (quoteData) => {
        // Checks if Author field is blank and replaces it with 'Unknown!'
        !quoteData
          ? (authorText.textContent = "Unknown!")
          : (authorText.textContent = quoteData.author);
        // Check Quote length to determine styling'
        quoteData.quote.length > 120
          ? quoteText.classList.add("long-quote")
          : quoteText.classList.remove("long-quote");
        quoteText.textContent = quoteData.quote;
      })
    )
    .catch((err) => console.error(err));
}

// Tweet Quote
tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

// Event Listener
twitterBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', getQuotes)

// On load
getQuotes();