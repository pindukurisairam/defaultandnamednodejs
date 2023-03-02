import { StudentDetails, CarDetails } from "./sample.mjs";

const newStudentDetails = new StudentDetails("sai", 26);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new CarDetails("Audi", "80kmphs");
console.log(newCarDetails);
console.log(newCarDetails.name);
console.log(newCarDetails.speed);
