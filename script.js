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
    sliderValue = parseInt(this.value);
    makeGrid();
    let griditem = document.createElement(`div`);
    griditem.classList.add('griditem');
    gridItemArray.push(griditem);
    gridItemArray.forEach(item => {
        gridContainer.appendChild(item)
    });
};


slider.oninput = function(){
    sliderValue = parseInt(this.value);
    displaySliderValue.textContent = sliderValue;

    if(lastNum < sliderValue){
        console.log('increasing');
        let lastNumSquared = lastNum * lastNum;
        let newNumSquared = sliderValue * sliderValue;

        for(let i = lastNumSquared; i<newNumSquared; i++){
            let griditem = document.createElement('div');
            griditem.classList.add('griditem');
            gridItemArray.push(griditem);
            gridItemArray.forEach(item => {
                gridContainer.appendChild(item);
            });
        };
        
    } else if(lastNum > sliderValue) {
        console.log('decreasing');
        let lastNumSquared = lastNum * lastNum;
        let newNumSquared = sliderValue * sliderValue;

        for(let i = lastNumSquared; i>newNumSquared; i--){
            let griditem = document.querySelector('div');
            gridItemArray.pop(griditem);
            // gridItemArray.forEach(item=>{            //not sure if this is doing anything.
            //     gridContainer.appendChild(item);        //commenting out for now.
            // });     
        };
        }
        
    console.log(sliderValue);
    lastNum = sliderValue;
    
    makeGrid(); //might need to be moved / placement matters.

    return sliderValue;
};

//?this is a meteor example. change only takes place once the user lets go of the mouse drag/click.
// slider.onchange = function () {
//     console.log(`onchange: ${this.value}`);
// }



// function makeGrid(){
//     document.getElementById('gridContainer').style.setProperty(`grid-template-columns`, `repeat(${sliderValue}, 1fr)`);
//     document.getElementById('gridContainer').style.setProperty(`grid-template-rows`, `repeat(${sliderValue}, 1fr)`);
// }


displaySliderValue.textContent = parseInt(slider.value);

