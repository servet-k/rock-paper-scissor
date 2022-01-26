

function computerPlay(){
    let list=["paper","rock","scissors"]
    return list[Math.floor(3*Math.random())]
}

function playRound(playerSelection,computerSelection){
    const winner={"paper":{"scissors":0,"rock":1},
                   "scissors":{"paper":1,"rock":0},
                   "rock":{"paper":0,"scissors":1}                             
                }
    if (playerSelection==computerSelection) {
        document.querySelector(".result").style.background="grey";
        return `It is a tie.Both of you selected ${computerSelection}`
    } else {
        if (winner[playerSelection][computerSelection] ==1){
            document.querySelector(".result").style.background="green";
            return `you won! ${playerSelection} beats ${computerSelection}`
        } else {
            document.querySelector(".result").style.background="red";
            return `you lose! ${computerSelection} beats ${playerSelection}`
        }

    }
}

let computerSelection=computerPlay();

let playerSelection;
document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(e)=>
    {playerSelection=e.target.value;
    //e.target.style.background="pink";
    computerSelection=computerPlay();
    game();
    //playRound(playerSelection,computerSelection);
    //computerSelection=computerPlay();

    })
})



const score= {"player":0,"computer":0}
        
function game(){
  
 
     
                     
        let result=playRound(playerSelection, computerSelection);
        document.querySelector(".result").innerHTML=result;
        if (result.includes("won")){
            score["player"]+=1;
        } else if (result.includes("lose")){
            score["computer"]+=1;
        }
      
  
    document.querySelector(".player").innerHTML=score["player"]
    document.querySelector(".computer").innerHTML=score["computer"]
    
    return score;
}

function reset() {
    score.player=0;
    score.computer=0;
    document.querySelector(".player").innerHTML=score["player"]
    document.querySelector(".computer").innerHTML=score["computer"]
    document.querySelector(".result").innerHTML=""
}
//document.querySelector(".result").innerHTML=playRound(playerSelection,computerSelection);
//document.querySelector(".score").innerHTML=game();