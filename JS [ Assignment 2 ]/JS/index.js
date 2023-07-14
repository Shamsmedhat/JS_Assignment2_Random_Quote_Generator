var a = `
<img src="imgs/mm.jpg" alt="Marilyn Monroe" />
“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br>
<span class="pt-3">― Marilyn Monroe</span>
`;

var b = `
<img src="imgs/ae.jpg" alt="Albert Einstein" />
“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br>
<span class="pt-3">― Albert Einstein</span>
`;

var c = `
<img src="imgs/fz.jpg" alt="Frank Zappa" />
“So many books, so little time.” <br>
<span class="pt-3">― Frank Zappa</span>
`;

var d = `
<img src="imgs/mtc.jpeg" alt="Marcus Tullius Cicero" />
“A room without books is like a body without a soul.” <br>
<span class="pt-3">― Marcus Tullius Cicero</span>
`;

var e = `
<img src="imgs/rf.jpg" alt="Robert Frost" />
“In three words I can sum up everything I've learned about life: it goes on.” <br>
<span class="pt-3">― Robert Frost</span>
`;

var f = `
<img src="imgs/mg.avif" alt="Mahatma Gandhi" />
“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br>
<span class="pt-3">― Mahatma Gandhi</span>
`;

var g = `
<img src="imgs/ow.jpg" alt="Oscar Wilde" />
“To live is the rarest thing in the world. Most people exist, that is all.” <br>
<span class="pt-3">― Oscar Wilde</span>
`;

var k = `
<img src="imgs/hjb.jpg" alt="H. Jackson Brown Jr" />
“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” <br>
<span class="pt-3">― H. Jackson Brown Jr., P.S. I Love You</span>
`;

var myQuotes = [a, b, c, d, e, f, g, k];
var previousQuote = null;

function getRandomQuote() {
  var randomQuote = myQuotes[Math.floor(Math.random() * myQuotes.length)];
  if (randomQuote === previousQuote) {
    return getRandomQuote();
  }
  previousQuote = randomQuote;
  return randomQuote;
}

function displayRandomQuote() {
  var quote = getRandomQuote();
  document.getElementById("yourQuotes").innerHTML = `<p>${quote}</p>`;
}

// var myQuotes = [a, b, c, d, e, f, g, k];
// var repetedQuotes = "";
// var randomQuotes = myQuotes[Math.floor(Math.random() * myQuotes.length)];

// function quotes() {
//   while (randomQuotes === repetedQuotes) {
//     randomQuotes = myQuotes[Math.floor(Math.random() * myQuotes.length)];
//     document.getElementById("yourQuotes").innerHTML = `<p>
//     ${myQuotes[Math.floor(Math.random() * myQuotes.length)]}
//     </p>`;
//   }
//   repetedQuotes = randomQuotes;
//   return myQuotes;
// }
