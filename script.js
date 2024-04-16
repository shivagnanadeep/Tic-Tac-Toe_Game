let boxes=document.querySelectorAll(".box");
let resetGameBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnX=true;
let turnO=false;
 //playerX,playerO
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turnX=true;
    turnO=false;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            turnX=true;
            // console.log("O");
        }
        else if(turnX){
            box.innerText="X";
            turnO=true;
            turnX=false;
            // console.log("X");
        }
        box.disabled=true; //disables the box after it is clicked
        checkWinner();
    });
});
let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let checkWinner=()=>{
    for(let pattern of winPatterns){
        pos1val=boxes[pattern[0]].innerText;
        pos2val=boxes[pattern[1]].innerText;
        pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val != "" && pos3val != "")
        {
            //check if all the values are same
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("player "+pos1val+" Wins");
                showWinner(pos1val);
            }
        }
    }
}
const showWinner=(winner)=>{
    msg.innerText= `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

resetGameBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);