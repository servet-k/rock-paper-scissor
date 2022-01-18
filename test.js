

function computerPlay(){
    let list=["paper","rock","scissor"]
    return list[Math.floor(3*Math.random())]
}



function playRound(playerSelection,computerSelection){
    const winner={"paper":{"scissor":0,"rock":1},
                   "scissor":{"paper":1,"rock":0},
                   "rock":{"paper":0,"scissor":1}                             
                }
    if (playerSelection===computerSelection) {
        return `It is a tie.Both of you selected ${computerSelection}`
    } else {
        if (winner[playerSelection][computerSelection] ==1){
            return `you won! ${playerSelection} beats ${computerSelection}`
        } else {
            return `you lose! ${computerSelection} beats ${playerSelection}`
        }

    }
}

function game(){
    const score= {"player":0,"computer":0}
    for (let i=1;i<=5;i++){
        const computerSelection=computerPlay();
        const playerSelection=prompt("please enter your choice","paper,rock or scissor").toLowerCase();
        let result=playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("won")){
            score["player"]+=1;
        } else if (result.includes("lose")){
            score["computer"]+=1;
        }
      
    }
    
    return score;
}
console.log(game())
