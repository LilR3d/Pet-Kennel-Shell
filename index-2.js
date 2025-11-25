// Pet factory function
function createPet(name, species, happiness, energy) {
    return {
        name,
        species,
        happiness,
        energy,

// Play method
play() {
    this.happiness += 10;
    this.energy -= 20;
    return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
},
    
// Feed method
feed() {
    this.happiness += 20;
    this.energy += 20;
    return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
},

// Rest method
    rest() {
      this.energy = 100;
      return (
        `${this.name} has rested! Energy is now fully restored to ${this.energy}.`);
},
    
//Status method
    status() {
      console.log(
        `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
}
};
}
   
// Create pets
const pets = [
createPet("Fatty Tatty", "Cat", 50, 100),
createPet("June Bugg", "Dog", 60, 70),
createPet("Polly", "Parrot", 80, 100)
];

// Initial status for all pets
console.log("\n---Initial status of pets---");
pets.forEach((pet) => console.log(pet.status()));

// Playing with each pet
console.log("\n---Playing with pets---");
pets.forEach((pet) => {
  console.log(pet.play());
  pet.status();
});

// Feeding each pet
console.log("\n---Feeding pets---");
pets.forEach((pet) => {
  console.log(pet.feed());
  pet.status();
});

// Bonus: Resting one pet
console.log("\n---Bonus: Resting Polly---");
console.log(pets[2].rest()); //Polly rests
pets[2].status();
