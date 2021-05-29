const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput ==='scissors' || userInput==='paper' || userInput ==='bomb'){
    return userInput
  }else{
    console.log('Choice a valid input')
  }
}

const getComputerChoice = ()=>{
  let number = Math.floor(Math.random()*(2+1));
  if(number === 0){ 
    return 'paper';
  }else if (number === 1){
    return 'scissors';
  }
  else{
    return 'rock';
  } 
}

const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice ==='bomb'){
    return 'user won'
  }
  if(userChoice === computerChoice){
    return 'Game Tie'
  }
  if(userChoice ==='rock'){
    if(computerChoice ==='paper'){
      return 'computer won'
    }else {
      return 'user won'
    }
  }
    if(userChoice ==='paper'){
      if(computerChoice ==='scissors'){return 'computer won'
      }else{
        return 'user won'
      }
    }
    if (userChoice ==='scissors'){
      if(computerChoice ==='rock'){
        return 'computer won'
      }else {
        return 'user won'
      }
    }
}

function playGame (input){
  let userChoice = getUserChoice(input)
  let computerChoice = getComputerChoice();
  console.log('User choose', userChoice);
  console.log('Computer choose' , computerChoice)
  ;
  console.log(determineWinner(userChoice, computerChoice))
}

playGame('paper')



  
