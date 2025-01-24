const cityInput = document.getElementById("cityInput");
const animeInput = document.getElementById("animeInput");
const adjectiveInput = document.getElementById("adjectiveInput");
const foodInput = document.getElementById("foodInput");
const gameInput = document.getElementById("gameInput");
const famouspersonInput = document.getElementById("famousInput");
const animalInput = document.getElementById("animalInput");
const cartoonInput = document.getElementById("cartoonInput");
const carInput = document.getElementById("carInput");
const teamInput = document.getElementById("teamInput");
const outputBox = document.getElementById("outputBox");
const resetBTN = document.getElementById("resetBTN");
const submitBTN = document.getElementById("SubmitBTN")
let inputField = [
 cityInput,
 animeInput,
 adjectiveInput,
 foodInput,
 gameInput,
 famouspersonInput,
 animalInput,
 cartoonInput,
 carInput,
 teamInput
];
const GetAPI = async (
  cityName,
  favBacketballTeam,
  favFood,
  dreamCar,
  favCartoonChar,
  favVideoGame,
  famousPersonName,
  adjective,
  animeCharacter,
  animal
) => {
  const res = await fetch(
    `https://foroneapi-b2gme8fgcka0etga.westus-01.azurewebsites.net/Madlib/Madlib/${cityName}/${favBacketballTeam}/${favFood}/${dreamCar}/${favCartoonChar}/${favVideoGame}/${famousPersonName}/${adjective}/${animeCharacter}/${animal}`
  );
  const data = await res.text();
  return data;
};


submitBTN.addEventListener("click",async () => {
  const userCity = cityInput.value;
  const userAnime = animeInput.value;
  const userAdjective = adjectiveInput.value;
  const userFood = foodInput.value;
  const userGame = foodInput.value;
  const userFamous = famouspersonInput.value;
  const userAnimal = animalInput.value;
  const userCartoon = cartoonInput.value;
  const userCar = carInput.value;
  const userTeam = teamInput.value;
  outputBox.innerText = await GetAPI(
    userCity,
    userAnime,
    userAdjective,
    userFood,
    userGame,
    userFamous,
    userAnimal,
    userCartoon,
    userCar,
    userTeam
  );
});
resetBTN.addEventListener("click", () => {
  outputBox.innerText = "";
  
  inputField.forEach((n) => {
    n.value = "";
  })

});
