let slider = document.querySelector('#slider');
let displaySliderValue = document.querySelector('.displaySliderValue');
let sliderValue;
let gridContainer = document.querySelector('.gridContainer');
let gridItemArray = [];
let lastNum = 16;

slider.oninput = function(){
    displaySliderValue.textContent = this.value;
    sliderValue = parseInt(this.value);
    makeGrid();

    console.log(this.value);

    if(lastNum < this.value){
        console.log('increasing');
    } else {
        console.log('decreasing');
    };
    lastNum = this.value;
    console.log(`oninput: ${this.value}`);

    return sliderValue;
};

slider.onchange = function () {
    console.log(`onchange: ${this.value}`);
}




function makeGrid(){
    document.getElementById('gridContainer').style.setProperty(`grid-template-columns`, `repeat(${sliderValue}, 1fr)`);
    document.getElementById('gridContainer').style.setProperty(`grid-template-rows`, `repeat(${sliderValue}, 1fr)`);
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

