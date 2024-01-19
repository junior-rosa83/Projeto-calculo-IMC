import { Modal } from "./modal.js"

export function IMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2) 
}

export function notNumber (value) {
  return isNaN(value) || value == ''
}

export function displayResult (result) {
  const mensagem = `Seu IMC é ${result}`
  Modal.mensage.innerHTML = mensagem
  Modal.open()  
}