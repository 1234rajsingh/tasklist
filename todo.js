let btnsw = document.querySelector("button")
let ul = document.querySelector("ul");
let int = document.querySelector("input");

btnsw.addEventListener("click",(ev)=>{
let items = document.createElement("li");
items.innerText = int.value;
let delbtn = document.createElement("button");
delbtn.innerText = "delete";
delbtn.classList.add("delete");

items.appendChild(delbtn)

ul.appendChild(items);
int.value = "";

});

ul.addEventListener("click",(ev)=>{
    if(ev.target.nodeName=="BUTTON"){
        let litmes = ev.target.parentElement;
        litmes.remove();
        console.log("deleteg")
    }
})