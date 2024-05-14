// Part 1 input 3 names of his friends.
const sawaddee = (name1, name2, name3) => console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
sawaddee("naay", "ney", "ayn");

// Part 2 takes a birth year and returns the age.
const calAge = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calAge(2002));

// Part 3 prints out
const greetWithAges = (name1, birthYear1, name2, birthYear2, name3, birthYear3) => {
  const age1 = calAge(birthYear1);
  const age2 = calAge(birthYear2);
  const age3 = calAge(birthYear3);

  console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);
}

greetWithAges("naay", 2002, "Jhon", 1999, "Matty", 1975);