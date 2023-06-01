let inc=0;
let countY= document.getElementById("number");
function increment() {
    inc=inc+1;
    countY.textContent = inc;
 }
let saveEl = document.getElementById("save-el")
function save(){
    let countInc=inc + " - "
    saveEl.textContent=saveEl.innerText + countInc
    countY.textContent=0;
    inc=0;
}
alert("Lets count People")
