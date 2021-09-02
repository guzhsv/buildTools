import { playTimerSound } from "./sound.js";

const inputHour = document.getElementById('hour');
const inputMinute = document.getElementById('minute');
const inputSecond = document.getElementById('second');

const buttonStartStop = document.getElementById('start-stop');

buttonStartStop.addEventListener('click', handleStartStop);
let totalSeconds;
let timer;

function handleStartStop(event){
    event.preventDefault();

    if(event.target.textContent == 'Запустить'){
        event.target.textContent = 'Остановить';

        totalSeconds = inputHour.value * 3600 + inputMinute.value * 60 + inputSecond.value * 1;

        timer = setInterval(function(){
            totalSeconds--;
            let { hours, minutes, seconds } = getTimePartsFromSeconds(totalSeconds);
            inputHour.value = hours;
            inputMinute.value = minutes;
            inputSecond.value = seconds;
            if(totalSeconds <=0){
                playTimerSound();
                clearInterval(timer);
            }
        }, 1000);
    }
    else {
        event.target.textContent = 'Запустить';
        clearInterval(timer);
    }

    
}

let getTimePartsFromSeconds = function(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds - (hours * 3600) - (minutes * 60)
    }
}
