// Factory function: createPet(name, species, happiness, energy)
function createPet(name, species, happiness, energy) {
  // Per-species max energy (bonus). Defaults to 100 if species not listed.
  const speciesMax = {
    Dog: 120,
    Cat: 110,
    Parrot: 95,
    Bunny: 105,
    Lizard: 85,
  };
  const maxEnergy = speciesMax[species] ?? 100;

  // Clamp helpers
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  energy = clamp(energy, 0, maxEnergy); // Keep starting energy valid
  happiness = clamp(happiness, 0, 100); // Keep starting happiness valid

  return {
    // Core state
    name,
    species,
    energy,
    happiness,
    maxEnergy, // Bonus field

    // Show current state
    status() {
      console.log(
        `Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}/${this.maxEnergy}`
      );
    },

    // Eat: +energy, +happiness
    feed() {
      // Prevent energy from exceeding per-pet maxEnergy (bonus + requirement)
      this.energy = Math.min(this.energy + 20, this.maxEnergy);
      this.happiness = Math.min(this.happiness + 20, 100);
      return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}/${this.maxEnergy}.`;
    },

    // Play: -energy, +happiness; if too tired,  →  small happiness drop (game mechanic)
    play() {
      if (this.energy < 20) {
        // Too tired to play well  →  small happiness dip to make it feel like a game
        this.happiness = Math.max(this.happiness - 5, 0);
        return `${this.name} is too tired to play. Happiness slipped to ${this.happiness}.`;
      }
      this.energy = Math.max(this.energy - 20, 0); //Prevent going below 0
      this.happiness = Math.min(this.happiness + 10, 100);
      return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}/${this.maxEnergy}.`;
    },

    // Bonus: fully restore energy to this pet's own maxEnergy
    rest() {
      this.energy = this.maxEnergy;
      return `${this.name} has rested. Energy is fully restored to ${this.maxEnergy}.`;
    },

    // Bonus: a simple "time passes" mechanic to decrease happiness
    wait() {
      this.happiness = Math.max(this.happiness - 5, 0);
      return `${this.name} got a bit bored... Happiness is now ${this.happiness}.`;
    },
  };
}

// Create multiple pets
const pet1 = createPet("Tod", "Fox", 100, 60);
const pet2 = createPet("Copper", "Hound", 95, 55);
const pet3 = createPet("Pinky", "Mouse", 80, 70);
const pet4 = createPet("Brain", "Mouse", 90, 65);
const pet5 = createPet("Thumper", "Bunny", 60, 50);
const pet6 = createPet("Viper", "Snake", 85, 40);

// Initialize kennel array
const kennel = [];

// Add pets with push
kennel.push(pet1, pet2, pet3, pet4, pet5);

// Add remaining pet wiht bracket notation
kennel[kennel.length] = pet6; // Adds at the end

// Log kennel contents
console.log("\n--- Kennel (console.log) ---");
console.log(kennel);

// Bonus: console.table for a clean overview
console.log("\n--- Kennel (console.table) ---");
console.table(
  kennel.map((p) => ({
    name: p.name,
    species: p.species,
    energy: `${p.energy}/${p.maxEnergy}`,
    happiness: p.happiness,
  }))
);

// Demo: Use the mothods
console.log("\n--- Demo Actions ---");
kennel[0].status();
console.log(kennel[0].play());
console.log(kennel[0].feed());
kennel[0].status();

// Bonus: forEach to rest every pet
console.log("\n--- Everyone takes a nap (forEach + rest) ---");
kennel.forEach((p) => console.log(p.rest()));

// Show updated table after resting
console.log("\n--- Kennel After Rest (console.table) ---");
console.table(
  kennel.map((p) => ({
    name: p.name,
    species: p.species,
    energy: `${p.energy}/${p.maxEnergy}`,
    happiness: p.happiness,
  }))
);

// Bonus: make happiness fluctuate with the simple boredom mechanic
console.log("\n--- Time passes... pets get a little bored ---");
kennel.forEach((p) => console.log(p.wait()));

// Final status printout
console.log("\n--- Final Status ---");
kennel.forEach((p) => p.status());
