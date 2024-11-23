let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector("msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
box.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log(" box was clicked");
    if(turn0){
        box.innerText="0";
        turn0=false;
    }
    else{
        box.innerText="x";
        turn0=true;
    }
    box.disabled = true;
    ckeckwinner();
  })
});

const  showWinner=(winner) => {
  msg.innerText=`congratulation winner is ${winner}`;

}

const ckeckwinner=()=>{
    for(let pattern of winpattern){
       
    let  pos1val=  box[pattern[0]].innerText;
    let  pos2val=  box[pattern[1]].innerText;
    let  pos3val=  box[pattern[2]].innerText;
    if(pos1val!="" && pos2val !="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
           let b= console.log("winner",pos1val);
           showWinner(pos1val);
        }
    }
    }

    
}