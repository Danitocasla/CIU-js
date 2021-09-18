var buttonMoney = document.querySelector('#mon')
var buttonMiami = document.querySelector('#mia')
var buttonRiki = document.querySelector('#fort')

var imageMoney = document.querySelector('#money')
var imageMiami = document.querySelector('#miami')
var imageRiki = document.querySelector('#riki')

buttonMoney.addEventListener("click",function(){
    imageMoney.classList.toggle("oculto")
})
buttonMiami.addEventListener("click",function(){
    imageMiami.classList.toggle("oculto")
})
buttonRiki.addEventListener("click",function(){
    imageRiki.classList.toggle("oculto")
})