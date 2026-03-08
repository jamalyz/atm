// let student = [
//     {id:"21431", name: "Malak Jamal", semester: "6th BS CS" , city: " DIR" , Gpa: 3.0},
//     {id:"21836", name: "ziyad", semester: "6th BS CS" , city: " KHAll" , Gpa: 3.40},
//     {id:"21257", name: "zarar", semester: "6th BS CS" , city: " kohat" , Gpa: 3.80},
//     {id:"21196", name: "Hamza", semester: "6th BS CS" , city: "KHEMA" , Gpa: 3.70}
// ]
// serachid = 21431 ;

// function address(serachid){
//     for(let i = 0; i < student.length; i++){
//         if (student[i].id === serachid){
//             console.log("student found ")
//             console.log("name" , student[i].name.trim())
//             console.log("semester" , student[i].semester)
//             console.log("city" , student[i].city)
//             console.log("GPA"  , student[i].Gpa)
//         }
//         else{
//             console.log("student is not found")
//         }
//     }
        
// }
// address("21431");
// address("21836");
// address("21196");

// 🟢 Store items
let store = [
    { name: "apple", price: 50, quantity: 10 },
    { name: "mango", price: 80, quantity: 5 },
    { name: "banana", price: 20, quantity: 20 }
];

// 🟢 Customer request (simulate input)
let customerItem = "mango";
let customerQty = 5;

// 🟢 Total price variable
let total = 0;

// 🟢 Flag to check item found
let found = false;

// 🟢 Loop to search item
for (let i = 0; i < store.length; i++) {

    // 🟢 Step 1 — match item
    if (store[i].name === customerItem) {
        found = true;

        // 🟢 Step 2 — check stock
        if (customerQty <= store[i].quantity) {

            // 🟢 Step 3 — calculate total
            total = store[i].price * customerQty;

            // 🟢 Step 4 — update stock
            store[i].quantity = store[i].quantity - customerQty;

            console.log("✅ Purchase successful");
            console.log("Item:", store[i].name);
            console.log("Total:", total);
            console.log("Remaining stock:", store[i].quantity);

        } else {
            console.log("❌ Not enough stock");
        }
    }
}

// 🟢 If item not found
if (!found) {
    console.log("❌ Item not found in store");
}


// let fruit = ["banana", "grapes", "mang0"];
// console.log(fruit.includes("banana"))



// let username = "malak@jamal";
// console.log(username.includes("@"))
//  if ( found ) {
//     console.log("valid")
//  }
//  else  {
//     console.log("invalid")
//  }

 let name = "javascript"

 let found = username.includes("script")
 if (found) {
    console.log("valid")
 }
 else{
    console.log("invalid")
 }