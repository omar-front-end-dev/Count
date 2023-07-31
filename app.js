const numberCount = document.querySelector(".count");
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const colors = ["#6e1938","#adff2f", "#23752f", "#8d4a4a", "#464646", "#754b0d"];


btnIncrease.onclick = () =>{
    numberCount.textContent++;
    numberCount.parentElement.style.backgroundColor = randomColors()
};
btnDecrease.onclick = () =>{
    if (numberCount.textContent != 0) {
        numberCount.textContent--;
        numberCount.parentElement.style.backgroundColor = randomColors()
    };
};

randomColors = () =>{
    let arrayRandom =parseInt(Math.random() * 6)
    return colors[arrayRandom]
}