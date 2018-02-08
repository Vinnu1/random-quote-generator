var quotes;
var tweet = document.getElementById("tweet");
$.getJSON("https://vinnu1.github.io/quotes/", function(a) {
  quotes=a;
  getQuote();
});
  var Parent = document.getElementById("quote");
  var Div = document.createElement('div');
  Div.id="divId"; 
  Parent.appendChild(Div);

var btn = document.querySelector('#btn');
btn.addEventListener("click",function(){ 
  getQuote();
})

function getQuote(){
  var rand = Math.floor(Math.random()*100);
  Div.innerHTML= quotes[rand].quote +"<p>&mdash; " + quotes[rand].author + "</p>";
  tweet.href="https://twitter.com/intent/tweet?text="+quotes[rand].quote+" -"+quotes[rand].author;
}