const outputBox = document.getElementById("outputBox");
const submitBTN = document.getElementById("submitBTN");
const input = document.getElementById("inputBox");
const resetBTN = document.getElementById("resetButton");

const getPick = async (input) => {
    const respownse = await fetch(`https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/ResturantPicker/${input}`)
    const data = await respownse.text();
    return data;
}
submitBTN.addEventListener('click',async ()=>{
    const userInput = input.value;
    if (userInput==""){
        outputBox.innerText = "Invalid response."
        return
    }
    outputBox.innerText = await getPick(userInput);
})
resetBTN.addEventListener('click',() => {
    outputBox.innerText = 'Select a catagory';
    input.value='';
})
