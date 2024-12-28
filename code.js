let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let winnermsg = document.querySelector(".msg-container");
let massage = document.querySelector("#msg");
let turn0=true;
const winningpattern = [

    [0,1,2] , [3,4,5] , [6,7,8] ,
    [0,3,6] , [1,4,7] , [2,5,8] ,
    [0,4,8] , [2,4,6]
    
];

const resetgame = () => {
    turn0=true;
    enableboxes();
    winnermsg.classList.add("hide");
};

boxes.forEach ((box) => {

    box.addEventListener("click", () => {

        console.log("clicked!");
       
        if(turn0){

            box.innerText="X";
            turn0=false;
        } else {

            box.innerText="o";
            turn0 = true;
        }

        box.disabled = true;

        checkwinner();

    });

});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }

};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

};

const showwinner = (pst1) => {

        massage.innerText = ["congaratulations!! ", pst1];
        winnermsg.classList.remove("hide");
}

const checkwinner = () => {

      for(patterns of winningpattern){

        let pst1 = boxes[patterns[0]].innerText;
        let pst2 = boxes[patterns[1]].innerText;
        let pst3 = boxes[patterns[2]].innerText;

        if(pst1 != "" && pst2 != "" && pst3 != ""){
            if(pst1 === pst2 && pst2 === pst3){
                console.log("winner is ",pst1);
                disableboxes();
                showwinner(pst1);
            }

        }
      }
};

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);