const amount = document.querySelector("#amount")
const numberOfPeople = document.querySelector("#numberOFPeople")
const customTip = document.querySelector("#customTip")
const buttons = document.querySelectorAll(".btn")
const submit = document.querySelectorAll("#gennerateBillBtn")
const reset = document.querySelectorAll("#reset")
var tipPercent

amount.addEventListener("input",() =>{
    let inputAmount = parseInt(amount.value) 
    console.log(inputAmount)
    customTip.removeAttribute('disabled')
})

buttons.forEach(btn =>{
    btn.addEventListener("click",() =>{
        tipPercent = parseInt(btn.innerText)
console.log(tipPercent)

    })
})
console.log(tipPercent)


