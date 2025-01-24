
const outputBox = document.getElementById('outputText');
const inputputBox = document.getElementById('inputBox');
const submitBTN = document.getElementById('submitBTN');
const resetBTN = document.getElementById('resetButton');

const GetAPI = async (input) => {
    const res = await fetch(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ReverseItAlpha/Reversestring/${input}`);
    const data = await res.text();
    return data;
}
submitBTN.addEventListener('click',async () => {
    const userInput = inputputBox.value;
    if(userInput==""){
        outputBox.innerText = "Enter a word to reverse"
        return
    }
    outputBox.innerText = await GetAPI(userInput);
})
resetBTN.addEventListener('click',() => {
    outputBox.innerText = "Enter a word to reverse";
    inputputBox.value = "";
})