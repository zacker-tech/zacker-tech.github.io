const lightbulbSwitch = document.querySelector('#lightbulb-switch');
const lightbulbImage = document.querySelector('#lightbulb-image');

let isLighbulbOn = false;

lightbulbSwitch.addEventListener('click', function() {
    if (isLighbulbOn) {
        lightbulbImage.src = 'off.png'
        isLighbulbOn = false;
    } else {
        lightbulbImage.src = 'on.png'
        isLighbulbOn = true;
    }
})
