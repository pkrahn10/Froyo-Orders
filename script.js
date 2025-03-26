const userInputString = prompt(
  "What flavors of froyo would you like to order?",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const stringArray = userInputString.split(",");
console.log(stringArray);
const froyoObj = {};
for (let i = 0; i < stringArray.length; i++) {
  if (stringArray[i] in froyoObj) {
    froyoObj[stringArray[i]] += 1;
  } else {
    froyoObj[stringArray[i]] = 1;
  }
}
console.table(froyoObj);
