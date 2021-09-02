import { toggleVisible } from "./common.js";

const buttonHideShow = document.getElementById('timerCalc');
const timerBlock = document.getElementById('timer');
const dateCalcBlock = document.getElementById('dateCalc');

buttonHideShow.addEventListener('click', handleHideShow);

function handleHideShow(event){
    if(event.target.textContent == 'Таймер'){
        event.target.textContent = 'Калькулятор дат';
    }
    else{
        event.target.textContent = 'Таймер';
    }
    toggleVisible(timerBlock);
    toggleVisible(dateCalcBlock);
}