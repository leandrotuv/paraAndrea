
const textAcept = "Sí 😁"
const textNoAcept = "No 😒"

const buttonOne = document.getElementById('one')
const buttonTwo = document.getElementById('two')
const buttons = document.querySelectorAll(".btn")

buttonOne.textContent = textAcept
buttonTwo.textContent = textNoAcept

buttonOne.addEventListener('mouseover', () => {
  if (buttonOne.textContent === textNoAcept) {
    swapButtons(buttonOne, buttonTwo);
  }
});

buttonTwo.addEventListener('mouseover', () => {
  if (buttonTwo.textContent === textNoAcept) {
    swapButtons(buttonTwo, buttonOne);
  }
});

function swapButtons(buttonA, buttonB) {
  [buttonA.textContent, buttonB.textContent] = [buttonB.textContent, buttonA.textContent];
  buttonA.classList.toggle('green-button');
  buttonA.classList.toggle('red-button');
  buttonB.classList.toggle('green-button');
  buttonB.classList.toggle('red-button');
}

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button.textContent = textAcept){
            showModal("¡Qué sorpresa! Dijiste que sí. ¡Ya somos panita de confianza osea mejoro ❤️😁!");
        }
    })
})

  function showModal(message) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.textContent = message;
  
    document.body.appendChild(modal);
  
    setTimeout(() => {
      modal.remove();
    }, 5000);
  }
