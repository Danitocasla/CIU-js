var $div = document.querySelector("div")
$div.classList.add("square")

setInterval(()=>{
    $div.classList.toggle("square")
},1000
)