// let storedEmail = "jamal@gmail.com";
// let storedPassword = "5532";

// let Email = "jamal@gmail.com";
// let password = "5532";

// if (Email === "") {
//     console.log(" Email field requred ")

// }
// else if (password === "") {
//     console.log("password requrid ")

// } else if (Email !== storedEmail) {
//     console.log("wr0ng Email");
// } else if (password !== storedPassword) {
//     console.log("wr0ng password")
// } else  {
//     console.log("Your are successfull")
// }


// let student = {
//     name: "farhan",
//     age: 20,
//     grade: "B+",
//     city: "velle",
//     idpass: "5532",
   
// };
// console.log(student.name)
// student.grade = "A+"
// console.log(student.city)
//     console.log(student.grade);
let students = [
    { name: "Farhan", age: 20 },
    { name: "Ali", age: 21 },
    { name: "Sara", age: 19 }
];

// Function to greet all students
function greetAll(students) {
    for (let student of students) {
        console.log("Hello " + student.name);
    }
}

greetAll(students);