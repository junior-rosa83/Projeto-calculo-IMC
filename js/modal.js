export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  mensage: document.querySelector('.tittle'),
  buttonClose: document.querySelector('.btnClose'),
  
  open: function() {
    Modal.wrapper.classList.add('open')  
  },
  /*Posso declarar função no objeto desses dois jeitos*/
  close() {
    Modal.wrapper.classList.remove('open')  
  }
}

Modal.buttonClose.onclick = function () {
  Modal.close()  
}

window.addEventListener ('keydown', handleKeydown)

function handleKeydown (event) {
  if (event.key === 'Escape') {
    Modal.close()      
  }
}