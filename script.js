const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "The journey of a thousand miles begins with a single step.",
    "Your creativity will lead you to remarkable places.",
    "A smile is your passport to the hearts of others.",
    "The best way to predict the future is to create it.",
    "Your kindness will return to you in unexpected ways.",
    "Embrace the challenges ahead - they will make you stronger.",
    "Success is not final, failure is not fatal.",
    "The greatest adventure lies ahead of you.",
    "Every sunset brings the promise of a new dawn.",
    "Your positive attitude will guide you through any storm.",
    "Fortune favors the bold and the persistent."
];

const fonts = [
    "'Arial', sans-serif",
    "'Georgia', serif",
    "'Verdana', sans-serif",
    "'Palatino', serif",
    "'Trebuchet MS', sans-serif"
];

const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4",
    "#FFEEAD", "#D4A5A5", "#9B59B6", "#3498DB"
];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function displayRandomFortune() {
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.textContent = getRandomItem(fortunes);
}

function changeTextColor() {
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.style.color = getRandomItem(colors);
}

function changeBackgroundColor() {
    const fortuneBox = document.getElementById('fortune-box');
    fortuneBox.style.backgroundColor = getRandomItem(colors);
}

function changeBorderColor() {
    const fortuneBox = document.getElementById('fortune-box');
    fortuneBox.style.borderColor = getRandomItem(colors);
}

function changeFont() {
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.style.fontFamily = getRandomItem(fonts);
    fortuneText.style.fontSize = Math.floor(Math.random() * (24 - 16 + 1) + 16) + 'px';
}

window.addEventListener('load', displayRandomFortune);