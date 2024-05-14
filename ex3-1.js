// Exercise 3.1

/*
  const calculateTotalCost = (transaction) => {
  const fixedFee = 3;  //every transation is a $3 fee
  const interestRate = 0.001;  //every transation is a $0.1% (0.001) interest fee.

  const interestFee = transaction * interestRate;  //every transation is add $0.1% (0.001) interest fee.
  const totalCost = fixedFee + interestFee;  //total cost is add $3 fee and $0.1% (0.001) interest fee.
  console.log("Total cost for Maria's payments: $" + totalCost.toFixed(2));
}

calculateTotalCost(300); 
*/

// ขอยาดลูปครับ เผื่อเงินเยอะ transactions เยอะ
const calculateTotalCost = (transactions) => {
  const fixedFee = 3;
  const interestRate = 0.001;
  let totalCost = 0;

  for (let transaction of transactions) {
    const interestFee = transaction * interestRate;
    totalCost += fixedFee + interestFee;
  }

  console.log("Total cost for Maria's payments: $" + totalCost.toFixed(2));
}

const transactions = [100, 555, 999, 12312, 123, 3534, 909];
calculateTotalCost(transactions);