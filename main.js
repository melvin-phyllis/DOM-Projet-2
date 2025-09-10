let btn = document.querySelector("#change-color-btn")

let box = document.querySelector("#color-box")

function getRandomColor(){
   let colors = [
   "#FF6B6B",
   "#4ECDC4",
   "#45B7D1",
   "#96CEB4",
   "#FFEAA7",
   "#DDA0DD",
   "#98D8C8",
   "#F7DC6F",
   "#BB8FCE",
   "#85C1E2",
   "#F8B739",
   "#52D681",
   "#FF7675",
   "#A29BFE",
   "#FD79A8"
   ];
   return colors[Math.floor(Math.random()*colors.length)]
}


document.addEventListener("DOMContentLoaded",function(){
   btn.addEventListener("click",function(){
    box.style.backgroundColor = getRandomColor()
})
})