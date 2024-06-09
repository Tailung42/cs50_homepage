

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

