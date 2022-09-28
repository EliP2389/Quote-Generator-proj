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
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

// On Load
getQuotes();
