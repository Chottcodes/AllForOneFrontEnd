const outputBox = document.getElementById('outputBox');
const inputBox =document.getElementById('inputBox');
const submitBTN =document.getElementById('SubmitBTN');
const resetBTN= document.getElementById('resetButton');
const GetAPI = async (input) => {
    const res = await fetch(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ReverseItNumbers/Reversenumber/${input}`);
    const data = await res.text();
    return data;
}
submitBTN.addEventListener('click', async () => {
    const userInput = inputBox.value;
    const userInputConverted = parseInt(userInput);
    if(userInputConverted == ''|| userInputConverted == isNaN){
        outputBox.innerText = "Invalid,enter a number";
        return
    }
    outputBox.innerText = await GetAPI(userInputConverted);
})
resetBTN.addEventListener('click', () => {
    outputBox.innerText = 'Enter a number for me to reverse';
    inputBox.value = '';
})