var seEjecutaEvento = function(){
    document.querySelector('body').insertAdjacentHTML("beforeend", "<p> BEEP </p>")
    document.querySelector('body').classList.toggle("color")
  }

document.querySelector("button").addEventListener("click", seEjecutaEvento)