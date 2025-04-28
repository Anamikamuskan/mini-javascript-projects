const counter = document.querySelector(".counter-value")
const increaseBtn = document.querySelector("#increase")
const decreaseBtn = document.querySelector("#decrease")
const changeBy = document.querySelector("#input")
const reset = document.querySelector("#reset")

increaseBtn.addEventListener("click",() =>{
    const counterValue = parseInt(counter.innerText)
    const value = parseInt(changeBy.value)
    counter.innerText = counterValue + value
})

decreaseBtn.addEventListener("click",() =>{
    const counterValue = parseInt(counter.innerText)
    const value = parseInt(changeBy.value)
    counter.innerText = counterValue - value
})

reset.addEventListener("click",() =>{
    counter.innerText = 0
})