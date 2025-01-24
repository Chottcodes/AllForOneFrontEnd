const outPutDisplay = document.getElementById('outputBox');
const userInput = document.getElementById('inputField');
const submitBTN = document.getElementById('submitBTN');
const resetBTN = document.getElementById('resetButton');

const sayHelloRespownse = async (input) => {
    const promise = await fetch(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/HelloWorld/SayHello/${input}`)
    const data = await promise.text();
    return data;
}

submitBTN.addEventListener('click',async ()=>{
    
    const input = userInput.value;
    if(input == ""){
        outPutDisplay.innerText = "Invalid, please enter name."
        return;
    }
    outPutDisplay.innerText = await sayHelloRespownse(input);
})

resetBTN.addEventListener('click', ()=>{
    outPutDisplay.innerText = 'Please enter you name';
    userInput.value = '';

})