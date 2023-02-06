// 1. covert radian to degree
function radianToDegree(radianToDegree) {
  const convertRadianToDegree = radianToDegree * 57.2958;
  return convertRadianToDegree;
}
const result = radianToDegree(3);
// console.log(result);

// 2. check whether the given file name is a javascript file or not
function isJavascriptFile(check) {
  const fileExtension = check.split(".").pop();
  if (fileExtension == "js") {
    return true;
  } else {
    return "Please write correct file format";
  }
}
const results = isJavascriptFile("assignment.js");
// console.log(results);

// 3. calculate the total oil price that I have to pay
/**
    diesel --> 114
    petrol --> 130
    octane --> 135
 */
function oilPrice(diesel, petrol, octane) {
  const dieselPrice = diesel * 114;
  const petrolPrice = petrol * 130;
  const octanePrice = octane * 135;

  const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
  return totalOilPrice;
}
const totalOil = oilPrice(5, 5, 10);
// console.log(totalOil);

// 4.
/*
    reserved bus ----> 50
    microbus ----> 11
    rest people will go by public bus
*/

function publiceBusFare(people) {
  const busSpace = 50;
  const microbusSpace = 11;
  const result = people % busSpace;
  const total = result % microbusSpace;
  const totalResult = total * 250;
  return totalResult;
}
const restPassenger = publiceBusFare(70);
// console.log(restPassenger);

// 5.

const friend1 = { name: "Tom", friend: "Rock" };
const friend2 = { name: "Rock", friend: "Tom" };

function isBestFriend(friend1, friend2) {
  if (
    friend1.name === "Tom" &&
    friend2.friend === "Tom" &&
    friend1.friend === "Rock" &&
    friend2.name === "Rock"
  ) {
    return true;
  } else {
    return false;
  }
}

const friends = isBestFriend(friend1, friend2);
console.log(friends);
