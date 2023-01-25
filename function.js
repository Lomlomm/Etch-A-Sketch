
document.addEventListener("DOMContentLoaded", function(){
    createBoard(32)
   
})

function createBoard(size){
    let grid = document.querySelector('.grid')
    grid.style.display = "grid"
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size*size; i++){
        div = document.createElement('div'); 
        div.style.border = '1px solid #dbd7d7'
        div.classList = 'casilla'
        div.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'black'
        })
        grid.insertAdjacentElement('beforeend', div)
        
    }
}


// grid-template-columns: 60px 60px;
// grid-template-columns: repeat(2, 60px);
// grid-template-columns: 1fr repeat(2, 60px);
   