
document.addEventListener("DOMContentLoaded", function(){
    createBoard(16)
   
})

function createBoard(size){
    let grid = document.querySelector('.grid')
    let clicked = false
    grid.style.display = "grid"
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size*size; i++){
        div = document.createElement('div'); 
        div.style.border = '1px solid #dbd7d7'
        div.classList = 'casilla'
        div.addEventListener('click', function(){
            if (clicked == true){
                clicked = false
            }
            else{
                clicked = true
                this.style.backgroundColor = 'black';
            }
            
        }); 
        div.addEventListener('mouseover', function(){
            if (clicked == true){
                this.style.backgroundColor = 'black'
            }
            
        })

        grid.insertAdjacentElement('beforeend', div)
        
    }
}

function draw(div){
    
}

// grid-template-columns: 60px 60px;
// grid-template-columns: repeat(2, 60px);
// grid-template-columns: 1fr repeat(2, 60px);
   