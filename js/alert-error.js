export const alertError = {
  mensage: document.querySelector('.alertError'),  

  open() {
    alertError.mensage.classList.add('open')      
  },

  close: function () {
    alertError.mensage.classList.remove('open') 
  }
}