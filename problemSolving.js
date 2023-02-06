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
console.log(results);
