
const randomNumberEl = document.querySelector("#random-number");
randomNumberEl.addEventListener("click", () => {
    document.querySelector("#result").textContent =  Math.floor(Math.random() * 100) + 1;
});
function getRandomNumber(min, max) {
    return Math.random() * (max - min ) + min;
}