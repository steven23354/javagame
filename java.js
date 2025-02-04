let firstcard = getRandomcard()
let secondcard = getRandomcard()
let card = [firstcard, secondcard]
let sum = firstcard + secondcard
let  hasblackjack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById("sum-el")
 let messageEL = document.getElementById("message-el")
 let cardEL = document.getElementById("card-el")


function getRandomcard(){
    return 5
}

 
function startgame(){
    rendergame()
}

function rendergame(){
   for (let i = 0; i < card.length; i ++){
    cardEL.textContent += card[i]
   }
    cardEL.textContent = "card: " + card[0] + " " + card[1]
    sumEl.textContent = "sum: " + sum 
    if (sum <= 20) {
      message = "Do You Want To Draw a New Card! "
    } else if (sum === 21){ 
        message = "Wohoo! You've Got a BlackJack! "
        hasblackjack = true
    } else if (sum > 21){
        message = "You Are Out Of The Game!" 
        isAlive = false
    }
     messageEL.textContent = message
};

function Newcard(){
    console.log("drawing a new card ")

    let card = 6  
    sum += card

    
    rendergame()

}