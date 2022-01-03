const quote = document.querySelector(".quote"),
author = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
sound = document.querySelector(".sound"),
copy = document.querySelector(".copy"),
tweet = document.querySelector(".twitter");

function randomQuotes(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quote.innerText = result.content;
        author.innerText = `— ${result.author}`;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote!";
    });
}

sound.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText},., by ${author.innerText}`);
    voices = window.speechSynthesis.getVoices();
    speechSynthesis.rate = 1.5;
    utterance.voice = voices[7];
    speechSynthesis.speak(utterance);
})
copy.addEventListener("click", () =>{
    navigator.clipboard.writeText(`${quote.innerText} Find More Quotes at therealsidd.com/quotes`);
})
tweet.addEventListener("click", () =>{
    let tweetURL = `https://twitter.com/intent/tweet?url=${quote.innerText}%20${author.innerText}%20%23QuoteOfTheDay%20@the_real_sidd01`;
    window.open(tweetURL, "_blank");
})
quoteBtn.addEventListener("click", randomQuotes);