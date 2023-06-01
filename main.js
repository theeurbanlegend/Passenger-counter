let inc=0;
let countY= document.getElementById("number");
function increment() {
    inc=inc+1;
    countY.innerText = inc;
 }
let saveEl = document.getElementById("save-el")
function save(){
    console.log(inc)
    saveEl.innerText=`${inc} - `
}