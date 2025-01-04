console.log("Hello World") //validate javascript works

//global vars
//array of possible options
const options =["rock","paper","scissors"]
let humanScore = 0, computerScore=0 //track of scores


//returns a string value of rock paper or scissors
function getComputerChoice()
{

    let value = Math.random() * 100
    if(value <= 33)
    {
        return options[0]
    }
    else if (value <= 66) 
    {
        return options[1]
    } 
    else 
    {
        return options[2]
    }
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

    return choice
    
}

function winner(score,name)
{
    console.log(`The ${name} has won! Their score is now ${++score}`)
}





function playGame()

{
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
                            console.log('The results are tied, the score remains the same')
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
                            console.log('The results are tied, the score remains the same')
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
                            console.log('The results are tied, the score remains the same')
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
    }

    for(let i = 0; i <5; i++)
    {
        playRound(getHumanChoice(),getComputerChoice())
    }
    humanScore > computerScore ? console.log("Human has won") : (humanScore < computerScore ? console.log("Computer has won") : console.log('Tie')) 
    console.log('closing game')
    humanScore = 0, computerScore=0
    return 0

}
