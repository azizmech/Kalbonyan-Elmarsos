// TEST DATA#1
// Mark's:
// const markMass = 78;
// const markHeight = 1.69;
// // John's:
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// // result
// const markHigherBMI = markBMI < johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// TEST DATA#2
// // Mark's:
// const markMass = 95;
// const markHeight = 1.88;
// // John's:
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// // result
// const markHigherBMI = markBMI < johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// TEST DATA#1
// Mark's:

const markMass = 78;
const markHeight = 1.69;
// John's:
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`Johns BMI (${johnBMI}) is higher than Marks! (${markBMI})`);
}
