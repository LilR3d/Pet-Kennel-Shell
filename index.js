// Create a pet object
const myPet = {
    name: "Itty Bitty",
    species: "kitten",
    happiness: 50,

// Play method
play() {
  this.happiness += 10; //Increases happiness by 10
  return `You played with ${this.name}! Happiness is now ${this.happiness}.`; 
},

// Feed method
feed() {
  this.happiness += 20; //Increases happiness by 20
  return `You fed ${this.name}! Happiness is now ${this.happiness}.`;
}, 

// Status method
status() {
  console.log(`${this.name} the ${this.species} has a happiness level of ${this.happiness}.`); 
},

// Bonus: rename
rename(newName) {
  this.name = newName;
  return `Your kitten's new name is ${newName}!`;
} //Returns a message: "Your kitten's new name is Dude!"
};

console.log(myPet);

// Play with pet
console.log(`Happiness before playing: ${myPet.happiness}`); //Output: "Happiness before playing: 50"
myPet.play(); //Output: "You played with Itty Bitty! Happiness is now 60."
console.log(`Happiness after playing: ${myPet.happiness}`); //Output: "Happiness after playing: 60"

// Feed pet
console.log(`Happiness before feeding: ${myPet.happiness}`); //Output: "Happiness before feeding: 60"
myPet.feed(); //Output:"You fed Itty Bitty! Happiness is now 80."
console.log(`Happiness after feeding: ${myPet.happiness}`); //Output: "Happiness after feeding: 80"

myPet.status(); //Output: "Itty Bitty the kitten has a happiness level of 80.""

console.log(myPet.rename("Dude")); //Output: "Your kitten's new name is Dude!"