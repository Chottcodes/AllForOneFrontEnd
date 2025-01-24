const num1Input=document.getElementById('numOneInput');
const num2Input =document.getElementById('numTwoInput');
const resetBTN = document.getElementById('resetButton');
const submitBTN =document.getElementById('submitBTN');
const outputBox = document.getElementById('outputBox');
const GetAPI= async (num1,num2) =>{
    const res = await fetch(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/AddingTwoNumbers/Adding/${num1}/${num2}`);
    const data = await res.text();
    return data;
}
submitBTN.addEventListener('click',async () => {
    const userInput1 = num1Input.value
    const userInput2 =num2Input.value;
    outputBox.innerText = await GetAPI(userInput1,userInput2);
})
resetBTN.addEventListener('click', () => {
    num1Input.value = "";
    num2Input.value = "";
    outputBox.innerText = "";
})