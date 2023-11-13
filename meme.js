const memebtn =document.getElementById("memegenbtn")
const newtitle = document.getElementById("memetitle")
const newimage =document.getElementById("newmeme")
const newauthors = document.getElementById("memeauthor")

const update=(url, author, title)=>{
      newimage.setAttribute("src", url)
    newtitle.innerHTML=title;
    newauthors.innerHTML=author;
}
function generatememe(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data)=>{
        update(data.url, data.author, data.title)
    })
}

// const nee =()=>
// memebtn.addEventListener("click", generatememe)

    
generatememe();