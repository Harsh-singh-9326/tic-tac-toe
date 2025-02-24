 
 let turn = "0"
let total_turn = 0
 let winner = [
    [0,1,2],[3,4,5],[6,7,8] ,
    [0,3,6],[1,4,7],[2,5,8] ,
    [0,4,8],[2,4,6]
 ]

 let array_board = new Array(9).fill('E')
//  if (array_board[cell.id]==='E')
   function checkwinner(){
    for (let [index0,index1,index2] of winner) {
        if (array_board[index0] !== 'E' && array_board[index0] === array_board[index1] && array_board[index1] === array_board[index2]) {
            return 1
        
    }

 }
}

   let printer = event=>{ 
    const cell = event.target
    if (array_board[cell.id]==='E')
         { 
        total_turn++
        if(turn ==='0'){
        cell.innerHTML = "0"
        array_board[cell.id] = '0'
        if (checkwinner()){
            document.querySelector("#winning_message").innerHTML= "winner is 0" 
            board.removeEventListener("click",printer)
            return


        }
        turn = "X"
    }else{
        cell.innerHTML = 'X'
        if (checkwinner()){
            document.querySelector("#winning_message").innerHTML= "winner is X"
            board.removeEventListener("click",printer)
            return
 
        }
        turn = '0'
    }
    if(total_turn===9){
        document.querySelector("#winning_message").innerHTML= `GAME IS DRAW ${"\n"}GAME OVER!!!`
    
    
       }
    
     }}
   
   const board = document.querySelector(".board")
   board.addEventListener('click',printer)

   const restart = document.querySelector("#restartbutton");

   restart.addEventListener("click", () => {
       // Reset game variables
       turn = "0";
       total_turn = 0;
       array_board = new Array(9).fill('E');
       
       // Clear winning message
       document.querySelector("#winning_message").innerHTML = "";
   
       // Clear board cells
       document.querySelectorAll(".cell").forEach(cell => {
           cell.innerHTML = "";
       });
   
       // Re-enable board click event
       board.removeEventListener("click", printer);
       board.addEventListener("click", printer);
   });
   

   
 
