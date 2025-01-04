console.log("Hello World") //validate javascript works

//global vars
//array of possible options
const options =["rock","paper","scissors"]
let humanScore = 0, computerScore=0 //track of scores
let humanChoice, computerChoice; //global variables to hold choices; NEW branch


//DOM JS

//buttons
const computer = document.querySelector(".computer-turn"); //get result of computer after clicking button
computer.addEventListener("click", getComputerChoice);

const player = document.querySelector(".player-turn"); //get result of human after clicking button
player.addEventListener("click", getHumanChoice);

const round = document.querySelector(".play-round"); //get winner after clicking button
round.addEventListener("click", () =>playRound(humanChoice,computerChoice));


const textDisplay = document.querySelector(".winner-text"); //display winner in div .winner-text


//returns a string value of rock paper or scissors
function getComputerChoice()
{

    let value = Math.random() * 100
    if(value <= 33)
    {
        computerChoice = options[0];
        // return options[0]
    }
    else if (value <= 66) 
    {
        computerChoice = options[1];
        // return options[1]
    } 
    else 
    {
        computerChoice = options[2];
        // return options[2]
    }
    textDisplay.textContent = `The computer has chosen`
}

//validate human input
function validateChoice(choice)
{

    if(options.includes(choice))
    {
        return true
    }
    else
    {
        console.log("Enter a valid value")
        return false
    }

}

//a function to get input by a human and return that value
function getHumanChoice()
{
    let choice = ""
    let valid = true //loop flag
    do //loop until user input is valid
    {
        choice = prompt("Choose rock paper or scissors").toLowerCase()
        valid = validateChoice(choice)
    }while(!valid)
    
    textDisplay.textContent = `You chose ${choice}`
    humanChoice = choice;
    return choice
    
}

function winner(score,name)
{
    // console.log(`The ${name} has won! Their score is now ${++score}`) //helper text; REMOVE after
    textDisplay.textContent = `The ${name} has won! Their score is now ${++score}`
}

function tie()
{
    textDisplay.textContent = 'The results are tied, the score remains the same'
}




function playGame()

{
       
// play 5 rounds
    // for(let i = 0; i <5; i++)
    // {
    //     playRound(getHumanChoice(),getComputerChoice())
    // }
    humanScore > computerScore ? console.log("Human has won") : (humanScore < computerScore ? console.log("Computer has won") : console.log('Tie')) 
    console.log('closing game')
    humanScore = 0, computerScore=0
    return 0

}




function playRound(humanChoice,computerChoice)
{
    if(validateChoice(humanChoice))
    {
        switch (humanChoice)
        {
            case "rock":
                switch (computerChoice)
                {
                    case "rock":
                        tie()
                        break
                    case "paper":
                        winner(computerScore++,'computer')
                        break
        
                    case "scissors":
                        winner(humanScore++,'human')
                        break
                }
                break

            case "paper":
                switch (computerChoice)
                {
                    case "rock":
                        winner(humanScore++,'human')
                        break
                    case "paper":
                        tie()
                        break
        
                    case "scissors":
                        winner(computerScore++,'computer')
                        break
                }
                break

            case "scissors":
                switch (computerChoice)
                {
                    case "rock":
                        winner(computerScore++,'computer')
                        break
                    case "paper":
                        winner(humanScore++,'human')
                        break
        
                    case "scissors":
                        tie()
                        break
                }
                break
        }

    }
    else
    {
        console.log("Odd error of incorrect human input, closing")
        return -1
    }

    if(humanScore ==5 || computerScore == 5)
    {
        humanScore == 5 ? textDisplay.textContent = 'The human has won the game!' : textDisplay.textContent = 'The computer has won the game!';
        humanScore = 0;
        computerScore = 0;
    }
}





