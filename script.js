document.addEventListener("DOMContentLoaded",() => {
  getjoke();
  getmeme();
})


function getmeme()
{
  fetch("https://api.apileague.com/retrieve-random-meme?api-key=455d9344f1364f71837644c7fd8dcf0b")
  .then(Response => Response.json())
  .then(data => 
    {
      document.querySelector("#meme-image").src = data.url;
    })
  .catch(error => console.error(error));

}



function getjoke ()
{
  const  setup = document.querySelector("#setup");
  const punchline = document.querySelector("#punchline");

   fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw")
  .then(Response => Response.json())
  .then(data => {
    if (data.type === "twopart") {
      setup.innerHTML = data.setup;
      punchline.innerHTML = data.delivery;
      document.getElementById('punchline').classList.remove('hidden');
 
    }
    else {

      setup.innerHTML = data.joke;
      document.getElementById('punchline').classList.add('hidden');


    }
  })
  .catch(error => console.error(error));
}