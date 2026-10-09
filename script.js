// Display Screen
const display = document.querySelector("#display")

// Number Buttons 
const btn0 = document.querySelector("#btn-0")
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")
const btn4 = document.querySelector("#btn-4")
const btn5 = document.querySelector("#btn-5")
const btn6 = document.querySelector("#btn-6")
const btn7 = document.querySelector("#btn-7")
const btn8 = document.querySelector("#btn-8")
const btn9 = document.querySelector("#btn-9")

// Operator Buttons
const btnAdd = document.querySelector("#btn-add")
const btnSubtract = document.querySelector("#btn-subtract")
const btnMultiply = document.querySelector("#btn-multiply")
const btnDivide = document.querySelector("#btn-divide")

// Action Buttons
const btnClear = document.querySelector("#btn-clear")
const btnDelete = document.querySelector("#btn-delete")
const btnEqual = document.querySelector("#btn-equal")

let isResult = false //if it's dsplaying ans
function appendValue(value) {
  if (isResult) {
    display.value = value
    isResult = false
    return
  }
  if (display.value === "0") {
    display.value = value
  } else {
    display.value += value
  }
}

btn0.addEventListener("click", () => { 
  appendValue("0") 
})
btn1.addEventListener("click", () => { 
  appendValue("1") 
})
btn2.addEventListener("click", () => { 
  appendValue("2") 
})
btn3.addEventListener("click", () => { 
  appendValue("3") 
})
btn4.addEventListener("click", () => { 
  appendValue("4") 
})
btn5.addEventListener("click", () => { 
  appendValue("5") 
})
btn6.addEventListener("click", () => { 
  appendValue("6") 
})
btn7.addEventListener("click", () => { 
  appendValue("7") 
})
btn8.addEventListener("click", () => { 
  appendValue("8") 
})
btn9.addEventListener("click", () => { 
  appendValue("9") 
})

btnAdd.addEventListener("click", () => { 
  appendValue("+") 
})
btnSubtract.addEventListener("click", () => { 
  appendValue("-") 
})
btnMultiply.addEventListener("click", () => { 
  appendValue("*") 
})
btnDivide.addEventListener("click", () => { 
  appendValue("/") 
})

btnClear.addEventListener("click", () => {
  display.value = "0"
  isResult = false
})

btnDelete.addEventListener("click", () => {
  if (display.value.length === 1 || display.value === "Error") {
    display.value = "0"
  } else {
    display.value = display.value.slice(0, -1)
  }
})

btnEqual.addEventListener("click", () => {
  let expression = display.value 
  let operator = ""
  if (expression.includes("+")) operator = "+"
  else if (expression.includes("-")) operator = "-"
  else if (expression.includes("*")) operator = "*"
  else if (expression.includes("/")) operator = "/"
  
  if (operator === "") return

  let parts = expression.split(operator)
  let num1 = parseInt(parts[0])
  let num2 = parseInt(parts[1])
  let result = 0

  if (operator === "+") result = num1 + num2
  if (operator === "-") result = num1 - num2
  if (operator === "*") result = num1 * num2
  if (operator === "/") {
    result = num2 === 0 ? "Error" : Math.floor(num1 / num2)
  }

  display.value = result
  isResult = true
})