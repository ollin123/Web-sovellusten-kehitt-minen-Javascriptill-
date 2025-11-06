function parseData() {
  const quotes = document.getElementsByTagName("quote");
  const authors = document.getElementsByTagName("author");

  let output = "<h3>Quotes:</h3>";

  for (let i = 0; i < Math.min(quotes.length, authors.length); i++) {
    const quoteText = quotes[i].textContent;
    const authorText = authors[i].textContent;
    output += `<p>${quoteText} By: ${authorText}</p>`;
  }

  document.getElementById("xml-output").innerHTML = output;
}



