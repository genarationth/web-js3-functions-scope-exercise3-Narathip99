// ผมชอบท่านี้ที่สุดครับ ท่าสองก็ดี ท่าสามล้มเหลวครับ 5555
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

greetWithAges("naay", 2002, "John", 1999, "Matty", 1975);  


/* ------------------------------------------------------------------------------- */

/* 
// define person
const friends = [
  { name: "naay", birthYear: 2002 },
  { name: "Jhon", birthYear: 1999 },
  { name: "Matty", birthYear: 1975 }
];

// age cal
const calAge = (birthYear) => new Date().getFullYear() - birthYear;

// greeting with age
const greetWithAges = (friends) =>
  {
    for (const friend of friends) {
      const age = calAge(friend.birthYear);
      console.log(`Welcome ${friend.name}, you are ${age}.`);
    }
}

// call func
greetWithAges(friends); */


/* ------------------------------------------------------------------------------- */


/* 
const sawaddee = (name1, name2, name3) => console.log(`Welcome ${name1}, ${name2}, ${name3}.`);

const calAge = (birthYear, callback) => {
  const age = new Date().getFullYear() - birthYear;
  callback(age);
};

const greetWithAges = (name1, birthYear1, name2, birthYear2, name3, birthYear3) => {
  calAge(birthYear1, (age1) => {
    calAge(birthYear2, (age2) => {
      calAge(birthYear3, (age3) => {
        calAge(birthYear3, (age4) => {
          console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}, ${age4}`);
        });
      });
    });
  });
};

greetWithAges("naay", 2002, "John", 1999, "Matty", 1975, "Jasdasd", 1399); 
*/