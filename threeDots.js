const ages = [12, 15, 16, 15, 14,19];
const ages2 = [15, 16, 15, 14, 19, 16];
const ages3 = [15, 14, 19, 16];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);
const business = 650;
const Minister = 550;
const Shochib = 450;
const takaPoisha = [650, 550, 450]
// const Maximum = Math.max(business, Minister, Shochib);
const Maximum = Math.max(...takaPoisha);
console.log(Maximum)