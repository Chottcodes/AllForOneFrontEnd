
const sayHello = document.getElementById('sayHello');
const askingQuestions = document.getElementById('askingQuestions');
const restaurantPicker = document.getElementById('restaurantPicker');
const magic8Ball = document.getElementById('magic8Ball');
const addingNumbers = document.getElementById('addingNumbers');
const reverseWord = document.getElementById('reverseWord');
const reverseTheNumber =document.getElementById('reverseTheNumber');
const OddOrEven =document.getElementById('OddOrEven');
const madlib = document.getElementById('madlib');
const greaterThan=document.getElementById('greaterThan');
const changepage = (page)=>{
    window.location.href = String(page)
}
sayHello.addEventListener('click', () => {
    changepage('pages/SayHello.html');
})
askingQuestions.addEventListener('click', () => {
    changepage('pages/AskingQuestions.html')
})
restaurantPicker.addEventListener('click', () => {
    changepage('pages/RestaurantPicker.html')
})
magic8Ball.addEventListener('click',() =>{
    changepage('pages/Magic8Ball.html')
})
addingNumbers.addEventListener('click', () =>{
    changepage('pages/AddingNumbers.html')
})
reverseWord.addEventListener('click', () => {
    changepage('pages/ReverseItWords.html')
})
reverseTheNumber.addEventListener('click', () => {
    changepage('pages/ReverseItNumbers.html')
})
OddOrEven.addEventListener('click',() => {
    changepage('pages/OddorEven.html')
})
madlib.addEventListener('click', () => {
    changepage('pages/Madlib.html')
})
greaterThan.addEventListener('click', () => {
    changepage('pages/GreaterThanrLessThan.html')
})
export {changepage};