const apiURL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const outhor = document.getElementById("author");
const newQuote = document.getElementById("new");
const tweetPost = document.getElementById("tweet")
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
   quote.innerHTML = data.content
   outhor.innerHTML = data.author
}

newQuote.onclick = function(){
    getquote(apiURL);
    // console.log("clicked")
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML ,"Tweet window", "width=600, height=300")
}

tweetPost.onclick = function(){
    tweet();
    console.log("clicked")
}