const outputBox = document.getElementById("outputBox");
const nameInput = document.getElementById("nameInput");
const wakeUpTime = document.getElementById("wakeUpInput");
const submitBTN = document.getElementById("submitBTN");
const resetBTN = document.getElementById("resetButton");

const getQuestionsAPI = async (name, time) => {
  const promise = await fetch(
    `https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/AskingQuestions/Asking/${name}/${time}`
  );
  const data = await promise.text();
  return data;
};

submitBTN.addEventListener("click", async () => {
  const getName = nameInput.value;
  const getTime = wakeUpTime.value;
  if (getName == "" || getTime == "") {
    outputBox.innerText = "Invalid,please enter your name and wake up time";
    return;
  }
  outputBox.innerText = await getQuestionsAPI(getName, getTime);
});

resetBTN.addEventListener("click", () => {
  nameInput.value = "";
  wakeUpTime.value = "";
  outputBox.innerText = "Please enter your name and the time you woke up.";
});
