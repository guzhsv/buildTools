import {formatError} from "./common.js";
import { diffDate, diffToHtml } from "./diff.js";

const formElement = document.getElementById('dateCalc-form');
const resultElement = document.getElementById('dateCalc-result');

formElement.addEventListener('submit', handleSubmit);


function handleSubmit(event){
    event.preventDefault(); //переопределить по умолчанию
    resultElement.innerHTML = ''; //чтобы ошибка исчезала

    let {firstDate, secondDate}=event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;
    console.log(firstDate, secondDate);

    if(firstDate && secondDate){
        let result = diffToHtml(diffDate(firstDate, secondDate));
        resultElement.innerHTML = result;

    } else resultElement.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба значения!");
}
