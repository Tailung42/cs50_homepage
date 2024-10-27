document.addEventListener("DOMContentLoaded",getjoke());
document.addEventListener("DOMContentLoaded", getmeme());


function getmeme()
{
  fetch("https://meme-api.com/gimme")
  .then(Response => Response.json())
  .then(data => 
    {let link = data.url;
      document.querySelector("#meme").src = link;
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
    }
    else {

      setup.innerHTML = data.joke;

    }
  })
  .catch(error => console.error(error));
}


document.addEventListener("DOMContentLoaded",function(){
document.getElementById('reveal-button').addEventListener('click', function() {
document.getElementById('punchline').classList.toggle('hidden');});
});