let text = document.querySelector("#text");
let fontColor = document.querySelector("#FontColor");
let fontSize = document.querySelector("#FontSize");
let output = document.querySelector("#outputText");
let range = document.querySelector("#rangeNumber");

range.innerHTML = fontSize.value+ "px";

fontSize.oninput = function(){
    range.innerHTML = this.value + "px"
}


document.getElementById("formControl").addEventListener("submit",function(e){
    e.preventDefault();
    output.innerText=text.value;
    output.style.color= fontColor.value;
    output.style.fontSize = fontSize.value + "px";
    this.reset();

})
