

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

document.addEventListener("DOMContentLoaded", getmeme());


function getjoke ()
{
   fetch("https://official-joke-api.appspot.com/random_joke")
  .then(Response => Response.json())
  .then(data => {
    const  setup = document.querySelector("#setup");
    const punchline = document.querySelector("#punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
    // punchline.classList.toggle('hidden')
  })
  .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded",getjoke());

document.addEventListener("DOMContentLoaded",function(){
document.getElementById('reveal-button').addEventListener('click', function() {
document.getElementById('punchline').classList.toggle('hidden');});
});