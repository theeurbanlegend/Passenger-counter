let inc=0;
let countY= document.getElementById("number");
function increment() {
    inc=inc+1;
    countY.innerText = inc;
 }
let saveEl = document.getElementById("save-el")
function save(){
    let countInc=inc + " - "
    console.log(inc)
    saveEl.innerText=saveEl.innerText + countInc
    console.log(inc)
}