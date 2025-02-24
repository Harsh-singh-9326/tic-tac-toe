 
 let turn = "0"
 const board = document.querySelector(".board")
 board.addEventListener('click',(event)=>{
    console.log(event.target.id)

    const cell = event.target
    if(turn ==='0'){
    cell.innerHTML = "0"
    turn = "X"
}else{
    cell.innerHTML = 'X'
    turn = '0'
}

 })