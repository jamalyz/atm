// let student = [

//     { id: 21196, name: "junaid", city: "peshawar", smester: "6ths", hostal: "sadar" },
//     { id: 21257, name: "Zarar afridi", city: "kohat", smester: "6ths", hostal: "national" },
//     { id: 21431, name: "Malak Jamal", city: "DIR timergar", smester: "6ths", hostal: "spenzar" },
//     { id: 21836, name: " akhunzada Ziyad", city: "dir khall", smester: "6ths", hostal: "imarat" },
//     { id: 21175, name: "akhunzada amin ", city: "namsheer", smester: "4ths", hostal: "hostel 1" },

// ];
// let searchid = "junaid";
// let found = true;


// for (let i = 0; i < student.length; i++) {
//     if (student[i].name === searchid) {
//         console.log("student founds");
//         console.log("name :", student[i].name);
//         console.log(" city :", student[i].city);
//         console.log("smester :", student[i].smester);
//         console.log("hostel :", student[i].hostal)
//         founds = true;
//         break;
//     }
// }
// if (!found) {
//     console.log("Student not found");
// }
let students = [
    { id: 21196, name: "junaid", city: "peshawar", semester: "6ths", hostel: "sadar" },
    { id: 21257, name: "Zarar afridi", city: "kohat", semester: "6ths", hostel: "national" },
    { id: 21431, name: "Malak Jamal", city: "DIR timergar", semester: "6ths", hostel: "spenzar" },
    { id: 21836, name: "akhunzada Ziyad", city: "dir khall", semester: "6ths", hostel: "imarat" },
    { id: 21175, name: "akhunzada amin", city: "namsheer", semester: "4ths", hostel: "hostel 1" },
];

// 🔎 Search criteria
let searchName = "malak";   // try small letters, partial name
let searchCity = "dir";      // partial city
let minSemester = "6ths";    // filter by semester

console.log("Searching students...\n");

let foundAny = false;

for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // normalize strings for case-insensitive comparison
    let nameLower = student.name.toLowerCase();
    let cityLower = student.city.toLowerCase();

    // check all filters
    if (
        nameLower.includes(searchName.toLowerCase()) && 
        cityLower.includes(searchCity.toLowerCase()) &&
        student.semester === minSemester
    ) {
        console.log("Student Found:");
        console.log("ID:", student.id);
        console.log("Name:", student.name);
        console.log("City:", student.city);
        console.log("Semester:", student.semester);
        console.log("Hostel:", student.hostel);
        console.log("------------");
        foundAny = true;
    }
}

if (!foundAny) {
    console.log("No students matched the criteria");
}
else{
    console.log("err0r message")
}

