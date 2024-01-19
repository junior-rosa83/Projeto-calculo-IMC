import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { notNumber, IMC, displayResult } from './functions.js'

const form = document.querySelector('form')
const altura = document.querySelector('#altura')
const kg = document.querySelector('#kg')

form.onsubmit = (event) => {
  event.preventDefault()
  
  const height = altura.value
  const weight = kg.value
  
  const checkIsNumber = notNumber(height) || notNumber(weight)

  if (checkIsNumber) {
    alertError.open()
    return
  }
  
  alertError.close()
  const result = IMC(weight, height)
  displayResult(result)
}

window.addEventListener ('keydown', function (event) {
  if (event.key === 'Enter') {
    Modal.open()      
  }
})

kg.oninput = function (event) {
  alertError.close()  
}

altura.oninput = function (event) {
  alertError.close()  
}

