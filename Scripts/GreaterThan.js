const inputField = document.getElementById('Number1Input');
const inputField2 = document.getElementById('Number2Input')
const outputBox = document.getElementById('outputBox');
const submitBTN = document.getElementById('submitBTN');
const resetBTN = document.getElementById('resetButton');
const GetAPI= async (num1,num2) => {
    const res = await fetch (`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/GreaterThanLessThan/Comparing/${num1}/${num2}`)
    const data = await res.text();
    return data;
}
submitBTN.addEventListener('click', async () => {
    const input1 = inputField.value
    const input2 = inputField2.value
    outputBox.innerText =await GetAPI(input1,input2)
})
resetBTN.addEventListener('click',() => {
    inputField.value = "";
    inputField2.value="";
    outputBox.innerText = "Please enter two number and I will tell you which is greater.";
})