let markHeight, markMass, johnHeight, johnMass, markBMI, johnBMI;

// TEST DATA#1
// Mark's:
markMass = 78;
markHeight = 1.69;
// John's:
johnMass = 92;
johnHeight = 1.95;

markBMI = markMass * markHeight ** 2;
johnBMI = johnMass * johnHeight ** 2;
// result
markHigherBMI = markBMI < johnBMI;

console.log(markHigherBMI);

// TEST DATA#2
// Mark's:
markMass = 95;
markHeight = 1.88;
// John's:
johnMass = 85;
johnHeight = 1.76;

// result
markBMI = markMass * markHeight ** 2;
johnBMI = johnMass * johnHeight ** 2;

markHigherBMI = markBMI < johnBMI;

console.log(markHigherBMI);
