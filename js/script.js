const quote = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');
const author = document.getElementById('author');
const copyQuoteBtn = document.getElementById('copy-quote');
const quoteText = document.querySelector('.quote-text');


const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data);

    if(data.content.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quote.innerText = data.content;
    author.innerText = data.author
}

const copyQuote = async () => {

    let copyText = quote.innerText  + ' by ' + author.innerText
    try{
        await navigator.clipboard.writeText(copyText);
        console.log(copyText);
        // alert(`Text Copied ${quote.innerText}`);
    }catch(err){
        console.log('Failed to copy', err);
    }
}



document.addEventListener('DOMContentLoaded', getQuote)
newQuoteBtn.addEventListener('click', getQuote );
copyQuoteBtn.addEventListener('click', copyQuote)