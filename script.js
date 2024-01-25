const APIURL="https://api.github.com/users/";
const main=document.querySelector("#card");
const searchbox=document.querySelector(".form-control")
const getuser= async(username)=>{// its a promise in which meanwhile the response is generated the compiler is doing other work
const response= await fetch(APIURL+username);
const data= await response.json()
const card= `<div class="card-horizontal">
<img src="${data.avatar_url}" class="card-img-top " alt="User Image">
<div class=""card-body"">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text">${data.bio}</p>
</div>
</div>
<ul class="list-group list-group-flush list-group-horizontal">
  <li class="list-group-item">${data.followers}<strong> Followers</strong></li>
  <li class="list-group-item">${data.following}<strong> Following</strong></li>
  <li class="list-group-item">${data.public_repos}<strong> Repos</strong></li>
</ul>
<div id="repos" class="horizontal-repos">
  
</div>
`


// converting static UI into dynamic UI-> practice of desiging a user interface to adapt according to user input.
main.innerHTML=card;
getrepos(username)
}
getuser("PranavBarthwal")

const getrepos=async (username)=>{
    const repos=document.querySelector("#repos")
    const response= await fetch(APIURL+username +"/repos")
    const data=await response.json()
    //user ki saari repos fetch ho gai
    data.forEach((item) => 
    {
        const elem=document.createElement("a")//anchor tag create krre h
        elem.classList.add("repo")// anchor tag k andr hmare pass class bhi thi toh usko add kra rhe h
        elem.href=item.html_url
        elem.innerText=item.name
        elem.target="_blank"// so that it opens in next tab
        repos.appendChild(elem)
        
    });


}
const formsubmit= ()=>{
    const searchbox=document.querySelector(".form-control")
    if(searchbox.value!=""){
        getuser(searchbox.value);
        searchbox.value=""
    }
    return false;//next page pr ni khulega issse

}
searchbox.addEventListener(
    "focusout", function(){
        formsubmit()
    }
)
/*
<a class="repo" href="#" target="_blank">Repo 1</a>
  <a class="repo" href="#" target="_blank">Repo 2</a>
  <a class="repo" href="#" target="_blank">Repo 3</a> */
