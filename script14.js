//tamrin 14//

const data = [
  { userName: 'Sam', accountBalance: 2000, visitCount: 5, transactionType: 1, transactionAmount: 4000 },
  { userName: 'Gerard', accountBalance: 20400, visitCount: 2, transactionType: 2, transactionAmount: 300 },
  { userName: 'Lawliet', accountBalance: 500000, visitCount: 1, transactionType: 1, transactionAmount: 60000 },
  { userName: 'Ken', accountBalance: 300, visitCount: 4, transactionType: 2, transactionAmount: 50 },
];

data.map(item => {
  let output = item.accountBalance; 

  if (item.transactionType === 1) {
    output += item.transactionAmount;
  
  } else if (item.transactionType === 2) {
    output -= item.transactionAmount;
  }

  console.log ("Client: ", item.userName, " , Balance: ", output);
})

