const myPet = {
    name: "Itty Bitty",
    species: "Kitten",
    happiness: 50,

play() {
  this.happiness += 10;
  console.log(
    `You played with ${this.name}! Happiness is now ${this.happiness}.`
  );
},

feed() {
  this.happiness += 20;
  console.log(`You fed ${this.name}! Happiness is now ${this.happiness}.`);
},

status() {
  console.log(
    `${this.name} the ${this.species} has a happiness level of ${this.happiness}.`
  );
},

rename(newName) {
  this.name = newName;
  return `Your kitten's new name is ${newName}!`;
}
};

console.log(myPet);

console.log(`Happiness before playing: ${myPet.happiness}`);
myPet.play();
console.log(`Happiness after playing: ${myPet.happiness}`);

console.log(`Happiness before feeding: ${myPet.happiness}`);
myPet.feed();
console.log(`Happiness after feeding: ${myPet.happiness}`);

myPet.status();

console.log(myPet.rename("Dude"));