let slider = document.querySelector('#slider');
let displaySliderValue = document.querySelector('.displaySliderValue');
let sliderValue = 16;
let gridContainer = document.querySelector('.gridContainer');
let gridItemArray = [];
let lastNum = 16;
let lastNumSquared = lastNum * lastNum

function makeGrid(){
    document.getElementById('gridContainer').style.setProperty(`grid-template-columns`, `repeat(${sliderValue}, 1fr)`);
    document.getElementById('gridContainer').style.setProperty(`grid-template-rows`, `repeat(${sliderValue}, 1fr)`);
}

for(i=0; i<lastNumSquared; i++){
    displaySliderValue.textContent = sliderValue;
    makeGrid();
    let griditem = document.createElement(`div`);
    griditem.classList.add('griditem');
    gridItemArray.push(griditem);
    gridContainer.appendChild(griditem);
    };


slider.oninput = function(){
    sliderValue = parseInt(this.value);
    displaySliderValue.textContent = sliderValue;

    if(lastNum < sliderValue){
        gridItemArray = [];
        let lastNumSquared = lastNum * lastNum;
        let newNumSquared = sliderValue * sliderValue;

        for(let i = lastNumSquared; i<newNumSquared; i++){
            let griditem = document.createElement('div');
            griditem.classList.add('griditem');
            gridItemArray.push(griditem);
            gridContainer.appendChild(griditem);
        };
        
    } else if(lastNum > sliderValue) {
        gridItemArray = [];
        let lastNumSquared = lastNum * lastNum;
        let newNumSquared = sliderValue * sliderValue;

        for(let i = lastNumSquared; i>newNumSquared; i--){
            let griditem = document.querySelector('div');
            gridItemArray.pop(griditem);
            gridContainer.removeChild(griditem);
        };
        }
        
        makeGrid(); //might need to be moved / placement matters.
    lastNum = sliderValue;
    

    return sliderValue;
};

//?this is a meteor example. change only takes place once the user lets go of the mouse drag/click.
// slider.onchange = function () {
//     console.log(`onchange: ${this.value}`);
// }


displaySliderValue.textContent = parseInt(slider.value);

