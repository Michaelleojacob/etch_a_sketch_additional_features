let slider = document.querySelector('#slider');
let displaySliderValue = document.querySelector('.displaySliderValue');
let userInputFromSlider;
let gridContainer = document.querySelector('.gridContainer');
let gridItemArray = [];

slider.oninput = function(){
    displaySliderValue.textContent = this.value;
    userInputFromSlider = parseInt(this.value);
    makeGrid();
    return userInputFromSlider;
};





function makeGrid(){
    document.getElementById('gridContainer').style.setProperty(`grid-template-columns`, `repeat(${userInputFromSlider}, 1fr)`);
    document.getElementById('gridContainer').style.setProperty(`grid-template-rows`, `repeat(${userInputFromSlider}, 1fr)`);
}

for(i=0; i<256; i++){
    const griditem = document.createElement(`div`);
    griditem.classList.add('griditem');
    gridItemArray.push(griditem);
    gridItemArray.forEach(item => {
        gridContainer.appendChild(item)
    })
};

displaySliderValue.textContent = parseInt(slider.value);

