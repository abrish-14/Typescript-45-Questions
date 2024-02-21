//Question 44 Sandwichies:

function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!");
  }
  
  makeSandwich('bread', 'cheese', 'ham');
  makeSandwich('bread', 'lettuce', 'tomato', 'bacon');
  makeSandwich('bread', 'peanut butter', 'jelly');
  
  
