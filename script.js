//making an array of all the given memory cards that we have 
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard=false;
let firstCard,secondCard;

function flipCard()
{
    //console.log("I was clicked");
    //console.log(this);
    //this.classList.toggle('flip');
    //what toggle does is if class is there remove it else give it
    
    this.classList.add('flip');//add the flip class to it

    if(!hasFlippedCard)
    {
        //firstclick
        hasFlippedCard=true;//when card is clicked first it is set to false
        firstCard = this;
        //console.log(firstCard.id);
        //console.log(hasFlippedCard,firstCard);
    }

    else
    {
        hasFlippedCard = false;
        secondCard = this;
        //do cards match
        console.log(firstCard.childNodes);
        if(firstCard.dataset.framework=== secondCard.dataset.framework && firstCard.id!=secondCard.id)
        {
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click',flipCard);
            setTimeout(()=>{
            firstCard.style.visibility='hidden';
            secondCard.style.visibility='hidden';
            },500);
            

            
        }
        else{
            //not match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                
            },500);
            
        }
    }



}

cards.forEach(card=>card.addEventListener('click',flipCard));
