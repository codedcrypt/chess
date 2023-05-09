const chess = document.getElementById("chess")
const squares = document.querySelectorAll(".square")
const info = document.getElementById("info")
let chesspiece;

chess.addEventListener("dragstart", (e) =>{
    chesspiece = e.target;
})
    
chess.addEventListener("drag", (e) =>{
   info.textContent = "you're dragging me" 
})

squares.forEach(square => {
    square.addEventListener("dragover", (e) => {
        e.preventDefault()
    })

    square.addEventListener("drop", (e) => {
        e.target.append(chesspiece)
    })
})