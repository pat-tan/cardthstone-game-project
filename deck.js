export class Deck {
    //Deck constructor
    constructor() {
      this.deck = [];
      this.dealt_cards = [];
    }
  
    //Genrates deck of 52 cards
    generate_deck() {
      let card = (suit, value) => {
        this.name = value + ' of ' + suit;
        this.suit = suit;
        this.value = value;
  
        return {name:this.name, suit:this.suit, value:this.value}
      }
  
      let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
      let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']
      
  
      for(let s=0; s < suits.length; s++){
        for(let v=0; v < values.length; v++){
          this.deck.push(card(suits[s], values[v]));
        }
      }
  
    }
  
    //Prints out deck of cards
    print_deck(){
      if(this.deck.length == 0){
        console.log('Empty');
      }
      else {
        for(let c=0; c < this.deck.length; c++){
          console.log((this.deck[c].name));
        }
      }
    }
  
    //Shuffles cards
      shuffle(){
       let j, x, i;
       for (i = this.deck.length - 1; i > 0; i--) {
           j = Math.floor(Math.random() * (i + 1));
           x = this.deck[i];
           this.deck[i] = this.deck[j];
           this.deck[j] = x;
       }
      }
  
      //Deals one card
      deal(){
        let dealt_card = this.deck.shift();
        this.dealt_cards.push(dealt_card);
        return dealt_card;
      }
  
      //Return most recently dealt card back
      replace(){
        this.deck.unshift(this.dealt_cards.shift());
      }
  
      //Reset Deck
      clear_deck(){
        this.deck = [];
      }
  
  }
  