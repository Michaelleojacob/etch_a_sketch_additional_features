let slider = document.querySelector('#slider');
let displaySliderValue = document.querySelector('.displaySliderValue');
let sliderValue = 16;
let gridContainer = document.querySelector('.gridContainer');
let gridItemArray = [];
let lastNum = 16;
let lastNumSquared = lastNum * lastNum;

//dynamically creating the css grid using js variables.
function makeGrid(){
    document.getElementById('gridContainer').style.setProperty(`grid-template-columns`, `repeat(${sliderValue}, 1fr)`);
    document.getElementById('gridContainer').style.setProperty(`grid-template-rows`, `repeat(${sliderValue}, 1fr)`);
}

//reset button
const resetbtn = document.querySelector('#reset');
resetbtn.addEventListener('click', function(){
    griditem = document.querySelectorAll('.griditem');
    griditem.forEach(item => {
        item.classList.remove('permMouseOver');
    });
});

//default layout, on page refresh
for(i=0; i<lastNumSquared; i++){
    displaySliderValue.textContent = sliderValue;
    makeGrid();
    let griditem = document.createElement(`div`);
    griditem.classList.add('griditem');
    gridItemArray.push(griditem);
    gridContainer.appendChild(griditem);
    griditem.addEventListener('mouseover', function(){
        griditem.classList.add('permMouseOver');
    });
};

//!to change from meteor to scaled just change onchange to oninput
//? slider.oninput
//? vs
//? slider.onchange

// the actual logic for the entire slider.
slider.onchange = function(){
    sliderValue = parseInt(this.value);
    displaySliderValue.textContent = sliderValue;

    griditem = document.querySelectorAll('.griditem');
    griditem.forEach(item => {
        item.classList.remove('permMouseOver');
    })
    
    if(lastNum < sliderValue){
        gridItemArray = [];
        let lastNumSquared = lastNum * lastNum;
        let newNumSquared = sliderValue * sliderValue;
        
        for(let i = lastNumSquared; i<newNumSquared; i++){
            let griditem = document.createElement('div');
            griditem.classList.add('griditem');
            gridItemArray.push(griditem);
            gridContainer.appendChild(griditem);
            griditem.addEventListener('mouseover', function(){
                griditem.classList.add('permMouseOver');
            });
        };
        
    }
    if(lastNum > sliderValue) {
        gridItemArray = [];
        let lastNumSquared = lastNum * lastNum;
        let newNumSquared = sliderValue * sliderValue;
        
        for(let i = lastNumSquared; i>newNumSquared; i--){
            let griditem = document.querySelector('div');
            gridItemArray.pop(griditem);
            gridContainer.removeChild(griditem);
            griditem.addEventListener('mouseover', function(){
                griditem.classList.add('permMouseOver');
            });
        };
        }
        
    makeGrid();
    lastNum = sliderValue;
    return sliderValue;
};


displaySliderValue.textContent = sliderValue;