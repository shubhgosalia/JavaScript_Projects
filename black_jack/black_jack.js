let players={
    name:"Shubh",
    chips:150
}
let messageEl=document.getElementById("message")
let firstCard=getRandomCard()
let secondCard=getRandomCard()
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let sumEl=document.getElementById("summ")
let cardsEl=document.getElementById("card")
let playerEl=document.getElementById("player")

playerEl.textContent=players.name + ": $" + players.chips

function getRandomCard(){

    randno=Math.floor(Math.random()*13)+1
    if (randno===1)
    {
          return 11
    }
    else if(randno>10){
        return 10
    }
    else{
        return randno
    }
}
function startGame(){

    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard

    renderGame()
}

  function renderGame(){

    cardsEl.textContent="Cards:"

    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+= cards[i] + " "
    }

    sumEl.textContent="Sum:" + sum


    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="You've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You're out of the game!"
        isAlive=false
    }

    messageEl.textContent=message

  }
    
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
        sum=sum+card
        cards.push(card)
        renderGame()    
    }
    else{
           messageEl.textContent="Oops! Game Over, start new game"
    } 
}