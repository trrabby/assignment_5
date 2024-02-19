function getInnerTextById(elementId){
    const innertext= document.getElementById(elementId).innerText
    return innertext
}

function removeAttributeById(btnId){
    const removeAttributeBtn= document.getElementById(btnId)
    removeAttributeBtn.removeAttribute("disabled")
}

function setInnerTextById(textId, value){
    const display= document.getElementById(textId)
    display.innerText= value;
}

function getInputValueById(inputId){
    const inputField= document.getElementById(inputId)
    const value= inputField.value
    console.log(value)
}