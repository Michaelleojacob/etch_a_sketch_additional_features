let slider = document.querySelector('#slider');
let displaySliderValue = document.querySelector('.displaySliderValue');
let userInputFromSlider;

slider.oninput = function(){
    displaySliderValue.textContent = this.value;
    userInputFromSlider = parseInt(this.value);
    return userInputFromSlider;
};

displaySliderValue.textContent = parseInt(slider.value);

