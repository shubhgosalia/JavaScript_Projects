let count=0
let saveEl=document.getElementById("entry")
function increment(){
    count=count+1
    document.getElementById("counted").innerText=count
}


function save()
{
   let e= count + " - "
   saveEl.textContent= saveEl.textContent + e
   count=-1
   increment()
}

