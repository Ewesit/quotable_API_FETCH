async function getRandomQuote() {
    const apiUrl = 'https://api.quotable.io/random'; // Quotable API endpoint

    try {
        const response = await fetch(apiUrl); // We send a request to the library.
        const data = await response.json();  // The library gives us a saying in a magical language (JSON).


        const quoteText = data.content;
        const quoteAuthor = data.author;

        // We take the saying and show it on our webpage.
        document.getElementById('quote-text').innerText = `"${quoteText}"`;
        document.getElementById('quote-author').innerText = `- ${quoteAuthor}`;

    } catch (error) {
        // If something goes wrong, we console.log (write in our magical diary) the problem.
        console.error('Error fetching quote:', error);
    }
}

// Load a random quote on page load// by calling the function
getRandomQuote();