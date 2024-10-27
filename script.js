
const meme = document.querySelector("#meme-image");
const  setup = document.querySelector("#setup");
const punchline = document.querySelector("#punchline");
const  quote = document.querySelector("#quote");
const quotee = document.querySelector("#quotee");


document.addEventListener("DOMContentLoaded",() => {
  getjoke();
  getmeme();
  getquote();
})


function getmeme()
{

  // fetch("https://api.apileague.com/retrieve-random-meme?api-key=455d9344f1364f71837644c7fd8dcf0b")
  fetch("https://meme-api.com/gimme")
  .then(Response => Response.json())
  .then(data => 
    {
      meme.src = data.url;
    })
  .catch(error => console.error(error));

}



function getjoke ()
{

   fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw")
  .then(Response => Response.json())
  .then(data => {
    if (data.type === "twopart") {
      setup.innerHTML = data.setup;
      punchline.innerHTML = data.delivery;
      punchline.classList.remove('hidden');
 
    }
    else {

      setup.innerHTML = data.joke;
      punchline.classList.add('hidden');


    }
  })
  .catch(error => console.error(error));
}

function getquote() {
  fetch("https://quotes-api-self.vercel.app/quote")
  .then(response => response.json())
  .then(data => {
    quote.innerHTML = data.quote;
    quotee.innerHTML = `- ${data.author}`;
  }
  )
  .catch(error => console.error(error));
}