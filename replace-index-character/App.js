// constants
const pos = 1;
const astrix = "*";

// input
let publicName = "ultrakeypoint";

// operation
let nameChars = publicName.split("");
if (1 < nameChars.length) {
  nameChars.splice(pos, pos, astrix);
}

// output
const privateName = nameChars.join("");

console.log(privateName);
