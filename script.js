const APIURL="https://api.github.com/users/";
const main=document.querySelector("#card");
const getuser= async(username)=>{// its a promise in which meanwhile the response is generated the compiler is doing other work
const response= await fetch(APIURL+username);
const data= await response.json()
const card= `<div class="card">
<img src="${data.avatar_url}" class="card-img-top " alt="User Image">
<div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">${data.bio}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${data.followers}<strong> Followers</strong></li>
  <li class="list-group-item">${data.following}<strong> Following</strong></li>
  <li class="list-group-item">${data.public_repos}<strong> Repos</strong></li>
</ul>
<div id="repos">
  
</div>
</div>`

// converting static UI into dynamic UI-> practice of desiging a user interface to adapt according to user input.
main.innerHTML=card;

}
getuser("PranavBarthwal")


/*
<a class="repo" href="#" target="_blank">Repo 1</a>
  <a class="repo" href="#" target="_blank">Repo 2</a>
  <a class="repo" href="#" target="_blank">Repo 3</a> */
