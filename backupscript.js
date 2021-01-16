const gridContainer = document.querySelector('.gridContainer');
let griditem;
const resetbtn = document.querySelector('#reset');
let gridItemArray = [];

for(i=0; i<256; i++){
    const griditem = document.createElement(`div`);
    griditem.classList.add('griditem');
    gridItemArray.push(griditem);
    gridItemArray.forEach(item => {
        gridContainer.appendChild(item)
    })
    
    
    // !two addEvents. One toggles, the other is a permanent change
    // griditem.addEventListener('mouseover', function(e){
    //     this.classList.toggle('toggleMouseOver')
    // });
    griditem.addEventListener('mouseover', function(e){
        this.classList.add('permMouseOver')

        resetbtn.addEventListener('click', function (e){
            griditem.classList.remove('permMouseOver');
        })
    });
}
