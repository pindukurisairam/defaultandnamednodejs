const { studentDetails, carDetails } = require("./sample.js");

const newStudentDetails = new studentDetails("sai", 26);

console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new carDetails("Audi", "60Kmphs");

console.log(newCarDetails);
console.log(newCarDetails.name);
