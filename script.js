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

const colorPalettes = {
    green: ["#4CAF50", "#81C784", "#66BB6A", "#43A047", "#388E3C"],
    yellow: ["#FFC107", "#FFD54F", "#FFE082", "#FFB300", "#FFA000"],
    blue: ["#2196F3", "#64B5F6", "#42A5F5", "#1E88E5", "#1976D2"],
    orange: ["#FF5722", "#FF8A65", "#FF7043", "#F4511E", "#E64A19"]
};

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function displayRandomFortune() {
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.textContent = getRandomItem(fortunes);
}

function applyTheme(palette) {
    const fortuneText = document.getElementById('fortune-text');
    const fortuneBox = document.getElementById('fortune-box');

    // Display a new random fortune
    displayRandomFortune();

    // Change text color
    fortuneText.style.color = getRandomItem(palette);

    // Change background color
    fortuneBox.style.backgroundColor = getRandomItem(palette);

    // Change border color
    fortuneBox.style.borderColor = getRandomItem(palette);

    // Change font family and size
    fortuneText.style.fontFamily = getRandomItem(fonts);
    fortuneText.style.fontSize = Math.floor(Math.random() * (24 - 16 + 1) + 16) + 'px';
}

function applyGreenTheme() {
    applyTheme(colorPalettes.green);
}

function applyYellowTheme() {
    applyTheme(colorPalettes.yellow);
}

function applyBlueTheme() {
    applyTheme(colorPalettes.blue);
}

function applyOrangeTheme() {
    applyTheme(colorPalettes.orange);
}

window.addEventListener('load', displayRandomFortune);

document.getElementById('text-color-btn').addEventListener('click', applyGreenTheme);
document.getElementById('bg-color-btn').addEventListener('click', applyYellowTheme);
document.getElementById('border-color-btn').addEventListener('click', applyBlueTheme);
document.getElementById('font-btn').addEventListener('click', applyOrangeTheme);
