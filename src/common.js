export function formatError (text){
    return `<span style = "color:red">
                ${text}
            </span>
    `
}

export function toggleVisible(element){
    if(element.style.display == 'none'){
        element.style.display = 'block';
    }
    else{
        element.style.display = 'none';
    }
}
