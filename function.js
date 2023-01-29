
document.addEventListener("DOMContentLoaded", function(){
    createBoard(16)
    chooseSize()
    selectColor()
    let selectButton = document.querySelector('#select'); 
    let resetButton = document.querySelector('.reset');
    let value = document.querySelector('.value');
    selectButton.addEventListener("click", function(){
        deletePreviousDivs()
        createBoard(parseInt(value.textContent))
    });
    resetButton.addEventListener("click", function(){
        deletePreviousDivs()
        createBoard(parseInt(value.textContent))
    });
})

function selectColor(){
    let color = document.querySelector('.color')
    let colorText = document.querySelector('.colorText')
    colorText.textContent = color.value
    color.addEventListener("input", (event)=>{
        colorText.textContent = `${event.target.value}`
    } )
}
function getColor(){
    let color = document.querySelector('.color')
    return color.value
}
function deletePreviousDivs(){
    let divs = document.querySelectorAll('.casilla')
    divs.forEach((div) => {
        div.remove()
    } )
}

function chooseSize(){
    let range = document.querySelector('.range'); 
    let value = document.querySelector('.value'); 
    value.textContent = `${range.value}x${range.value}`
    range.addEventListener("input", (event) => {
        value.textContent = `${event.target.value}x${event.target.value}`
    })
}

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
                this.style.backgroundColor = getColor();
            }
            
        }); 
        div.addEventListener('mouseover', function(){
            if (clicked == true){
                this.style.backgroundColor = getColor();
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
   