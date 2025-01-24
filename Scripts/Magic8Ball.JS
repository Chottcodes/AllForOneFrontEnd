const outputBox = document.getElementById('outputBox');
const inputBox = document.getElementById('inputBox');
const submitBTN = document.getElementById('submitBTN');
const resetBTN = document.getElementById('resetButton');
const get8BallAPI = async (input) => {
    const respownse = await fetch(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/Magic8Ball/Magic8Ball/${input}`)
    const data = await respownse.text();
    return data;
};
submitBTN.addEventListener('click',async () => {
    const userInput = inputBox.value;
    if(userInput == ""){
        outputBox.innerText = "Invalid Respownse"
        return;
    }
    outputBox.innerText = await get8BallAPI(userInput);
})
resetBTN.addEventListener('click',()=>{
    outputBox.innerText = "Ask me a question";
    inputBox.value = '';
})