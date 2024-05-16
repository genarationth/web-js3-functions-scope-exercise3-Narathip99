/* const gradeRubric = (score) => {
  const isPassing = score >= 5;

  switch (true) {
    case score === 11:
      console.log("Perfect");
      break;
    case score > 8:
      console.log("Excellent");
      break;
    default:
      break;
  }

  return isPassing;
};

console.log(gradeRubric(11)); */


/* 
const gradeRubric = (score) => {
  const isPassing = score >= 5;
  const gradeComment = score === 11 ? "Perfect" : score > 8 ? "Excellent" : "";

  if (gradeComment) {
    console.log(gradeComment);
  }

  return isPassing;
};

console.log(gradeRubric(11));
*/


const gradeRubric = score => score === 11 ? 'Perfect' : score >= 8 ? 'Excellent' : score >= 5;
console.log(gradeRubric(3));