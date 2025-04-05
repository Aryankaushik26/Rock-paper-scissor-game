let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userBoard=document.querySelector("#userScore");
let compBoard=document.querySelector("#compScore");
let msgContainer=document.querySelector(".msgContainer");

const genCompChoice=()=>{
    const options=["paper","rock","scissor"];
    const randIx=Math.floor(Math.random()*3);
    return options[randIx];
}

const playGame=(userChoice)=>{
    console.log("user's choice = ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer's choice = ", compChoice);

    if(userChoice==compChoice){
        console.log("draw");
        msg.innerText="It was a Draw";
        msgContainer.style.backgroundColor="#081b31";
    }
    if(userChoice==="paper" && compChoice==="rock"){
        compScore+=1;
        console.log("computer's score = ",compScore);
        console.log("user's score = ",userScore);
        userBoard.innerText=userScore;
        compBoard.innerText=compScore;
        msg.innerText="Computer beats You";
        msgContainer.style.backgroundColor="red";
    }
    if(userChoice==="rock" && compChoice==="paper"){
        userScore+=1;
        console.log("computer's score = ",compScore);
        console.log("user's score = ",userScore);
        userBoard.innerText=userScore;
        compBoard.innerText=compScore;
        msg.innerText="You beat Computer";
        msgContainer.style.backgroundColor="green";
    }
    if(userChoice==="paper" && compChoice==="scissor"){
        compScore+=1;
        console.log("computer's score = ",compScore);
        console.log("user's score = ",userScore);
        userBoard.innerText=userScore;
        compBoard.innerText=compScore;
        msg.innerText="Computer beats You";
        msgContainer.style.backgroundColor="red";
    }
    if(userChoice==="scissor" && compChoice==="paper"){
        userScore+=1;
        console.log("computer's score = ",compScore);
        console.log("user's score = ",userScore);
        userBoard.innerText=userScore;
        compBoard.innerText=compScore;
        msg.innerText="You beat Computer";
        msgContainer.style.backgroundColor="green";
    }
    if(userChoice==="scissor" && compChoice==="rock"){
        compScore+=1;
        console.log("computer's score = ",compScore);
        console.log("user's score = ",userScore);
        userBoard.innerText=userScore;
        compBoard.innerText=compScore;
        msg.innerText="Computer beats You";
        msgContainer.style.backgroundColor="red";
    }
    if(userChoice==="rock" && compChoice==="scissor"){
        userScore+=1;
        console.log("computer's score = ",compScore);
        console.log("user's score = ",userScore);
        userBoard.innerText=userScore;
        compBoard.innerText=compScore;
        msg.innerText="You beat Computer";
        msgContainer.style.backgroundColor="green";
    }
    

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        console.log(userChoice," was clicked");
        playGame(userChoice);
    });
});
