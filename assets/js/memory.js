

document.addEventListener('DOMContentLoaded', () => {


//card options
const cardArray = [
    {
        name :'gato',
        img:'./memory/gato.jpg'
    },
    {
        name :'gato',
        img:'./memory/gato.jpg'
    },
    {
        name :'buho',
        img:'./memory/buho.jpg'
    },
    {
        name :'buho',
        img:'./memory/buho.jpg'
    },
    {
        name :'conejo',
        img:'./memory/conejito.jpg'
    },
    {
        name :'conejo',
        img:'./memory/conejito.jpg'
    },
    {
        name :'perro',
        img:'./memory/perro.jpg'
    },
    {
        name :'perro',
        img:'./memory/perro.jpg'
    },
    {
        name :'pez',
        img:'./memory/pez.jpg'
    },
    {
        name :'pez',
        img:'./memory/pez.jpg'
    },
    {
        name :'jirafa',
        img:'./memory/jirafa.jpg'
    },
    {
        name :'jirafa',
        img:'./memory/jirafa.jpg'
    }
   
]

cardArray.sort(()=> 0.5 - Math.random() );

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardChosen = [];
var cardChosenId = [];
var cardWon = [];

//create board
function createBoard(){
    for(let i= 0; i< cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', './memory/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', vercarta);
        grid.appendChild(card);
    }
}

//check matches
function checkMatch(){
   
    var cards= document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if(cardChosen[0]===cardChosen[1] &&  optionOneId !=  optionTwoId){
      //  alert('pareja!!');
        cards[optionOneId].setAttribute('src', './memory/white.jpg' );
        cards[optionTwoId].setAttribute('src', './memory/white.jpg' );
        cardWon.push(cardChosen);
    }else{
        cards[optionOneId].setAttribute('src', './memory/blank.jpg' );
        cards[optionTwoId].setAttribute('src', './memory/blank.jpg' );
       // alert('prueba otra vez!!');
    }

    cardChosen= [];
    cardChosenId= [];
    if(cardWon.length>0){
        resultDisplay.textContent =`!${cardWon.length} aciertos!` ;
    }
    if(cardWon.length === cardArray.length/2){
        resultDisplay.textContent = '¡Has encontrado todas las parejas!'
    }
}


//mostrar carta
function vercarta(){
    if(this.getAttribute('src') != './memory/white.jpg'){
        var cardID = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardID].name);
       
        cardChosenId.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);
        if(cardChosen.length === 2){
            
            setTimeout(checkMatch, 500);
        }
    }
 
    
}



createBoard();



})

