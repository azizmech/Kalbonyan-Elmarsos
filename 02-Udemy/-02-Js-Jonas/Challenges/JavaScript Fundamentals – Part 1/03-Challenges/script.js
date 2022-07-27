// MAIN TEST DATA

const dolphinsFirstScore = 96;
const dolphinsSecondScore = 108;
const dolphinsThirdScore = 89;

const koalasFirstScore = 88;
const koalasSecondScore = 91;
const koalasThirdScore = 110;

// BONUS #1 TEST DATA
// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;
// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 123;

// // BONUS #2 TEST DATA
// //Dolphins' scores
// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;
// //Koalas' scores
// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 106;

// The Averages
const dolphinsAverage =
  (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
const koalasAverage =
  (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

console.log(
  `Dolphins' Average = (${dolphinsAverage}), Koalas' Average = (${koalasAverage})`
);
// if (dolphinsAverage < koalasAverage) {
//   console.log(
//     `The Winner is Dolphins' Team with average score of (${dolphinsAverage}!)`
//   );
// } else if (dolphinsAverage > koalasAverage) {
//   console.log(
//     `The Winner is Koalas' Team with average score of (${koalasAverage}!)`
//   );
// } else {
//   console.log(`The final result is Draw`);
// }

// BONUS #1
//Dolphins' scores

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log(
//     `The Winner is Dolphins' team with average score of (${dolphinsAverage})!`
//   );
// } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
//   console.log(
//     `The Winner is Koalas' team with average score of (${koalasAverage})!`
//   );
// } else {
//   console.log(`The final result is Draw`);
// }

// BONUS #2
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(
    `The Winner is Dolphins' team with average score of (${dolphinsAverage})!`
  );
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log(
    `The Winner is Koalas' team with average score of (${koalasAverage})!`
  );
} else if (
  dolphinsAverage === koalasAverage &&
  koalasAverage >= 100 &&
  dolphinsAverage >= 100
) {
  console.log(`The final result is Draw`);
} else {
  console.log(`Sorry, No team meet the minimum requirements`);
}
