var x_turn  = true;
var playerTurn = document.getElementById("playerTurn");
playerTurn.textContent = "Player X Turn"

    let btn0 = document.getElementById("btn0");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
   
    function game(){

    
    btn0.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn0.innerHTML = "X";
            btn0.disabled = true;
        }else{
            btn0.disabled = true;
            playerTurn.textContent = "Player X Turn"
            btn0.innerHTML = "O";
        }
        x_turn = !x_turn;
        winner();
    });
    
    btn1.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn1.innerHTML = "X";
            btn1.disabled = true;

        }else{
             playerTurn.textContent = "Player X Turn"
            btn1.innerHTML = "O";
            btn1.disabled = true;

        }
        x_turn = !x_turn;
        winner();
    });
   
    btn2.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn2.innerHTML = "X";
            btn2.disabled = true;

        }else{
             playerTurn.textContent = "Player X Turn"
            btn2.innerHTML = "O";
            btn2.disabled = true;

        }
        x_turn = !x_turn;
        winner();
    });
   
    btn3.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn3.innerHTML = "X";
            btn3.disabled = true;

        }else{
             playerTurn.textContent = "Player X Turn"
            btn3.innerHTML = "O";
            btn3.disabled = true;

        }
        x_turn = !x_turn;
        winner();
    });
    
    btn4.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn4.innerHTML = "X";
            btn4.disabled = true;

        }else{
             playerTurn.textContent = "Player X Turn"
            btn4.innerHTML = "O";
            btn4.disabled = true;

        }
        x_turn = !x_turn;
        winner();
    });
    
    btn5.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn5.innerHTML = "X";
            btn5.disabled = true;

        }else{
             playerTurn.textContent = "Player X Turn"
            btn5.innerHTML = "O";
            btn5.disabled = true;

        }
        x_turn = !x_turn;
        winner();
    });
    
    btn6.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn6.innerHTML = "X";
            btn6.disabled = true;

        }else{
             playerTurn.textContent = "Player X Turn"
            btn6.innerHTML = "O";
            btn6.disabled = true;
        }
        x_turn = !x_turn;
        winner();
    });
    
    btn7.addEventListener('click', ()=>{
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn7.innerHTML = "X";
            btn7.disabled = true;
        }else{
             playerTurn.textContent = "Player X Turn"
            btn7.innerHTML = "O";
            btn7.disabled = true;
        }
        x_turn = !x_turn;
        winner();
    });
    
   
    btn8.addEventListener('click', ()=>{
        
        if(x_turn){
            playerTurn.textContent = "Player O Turn"
            btn8.innerHTML = "  X";
            btn8.disabled = true;
        }else{
            btn8.disabled = true;
             playerTurn.textContent = "Player X Turn"
            btn8.innerHTML = "O";
        }
        x_turn = !x_turn;
        winner();
    });
}

game();



    function winner() {
        if (
            (btn0.innerHTML === btn1.innerHTML && btn0.innerHTML === btn2.innerHTML && btn0.innerHTML !== "") ||
            (btn3.innerHTML === btn4.innerHTML && btn3.innerHTML === btn5.innerHTML && btn3.innerHTML !== "") ||
            (btn6.innerHTML === btn7.innerHTML && btn6.innerHTML === btn8.innerHTML && btn6.innerHTML !== "") ||
            // Columns
            (btn0.innerHTML === btn3.innerHTML && btn0.innerHTML === btn6.innerHTML && btn0.innerHTML !== "") ||
            (btn1.innerHTML === btn4.innerHTML && btn1.innerHTML === btn7.innerHTML && btn1.innerHTML !== "") ||
            (btn2.innerHTML === btn5.innerHTML && btn2.innerHTML === btn8.innerHTML && btn2.innerHTML !== "") ||
            // Diagonals
            (btn0.innerHTML === btn4.innerHTML && btn0.innerHTML === btn8.innerHTML && btn0.innerHTML !== "") ||
            (btn2.innerHTML === btn4.innerHTML && btn2.innerHTML === btn6.innerHTML && btn2.innerHTML !== "")
          ) {
            if(playerTurn.textContent == "Player O Turn"){
                alert("Player X Winner!");
            }
            else{
                alert("Player O Winner!");
            }
          
          playerTurn.textContent = "Player O Turn"

          btn0.innerHTML = "";
          btn0.disabled = false;

          btn1.innerHTML = "";
          btn1.disabled = false;

          btn2.innerHTML = "";
          btn2.disabled = false;

          btn3.innerHTML = "";
          btn3.disabled = false;

          btn4.innerHTML = "";
          btn4.disabled = false;

          btn5.innerHTML = "";
          btn5.disabled = false;

          btn6.innerHTML = "";
          btn6.disabled = false;

          btn7.innerHTML = "";
          btn7.disabled = false;

          btn8.innerHTML = "";
          btn8.disabled = false;


        }
      }
      

