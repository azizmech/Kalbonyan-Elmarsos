// const billValue = 275;
// const billValue = 40;
const billValue = 430;

const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `The bill is ${billValue} and the tip is ${tip} and the total value is ${
    billValue + tip
  } `
);
