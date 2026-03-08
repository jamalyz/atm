let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let enterName = "jamal";
    let enterEmail = "jamal@gmail.c0m";
    let enterPassword = "5532";

    let name = "jamal";
    let Email = "jamal@gmail.c0m";
    let password = "5532"

    name = name.trim().toLowerCase();
    Email = Email.trim().toLowerCase();
    password = password.trim();
    if (name === "" || Email === "") {
        console.log("field required ");

    }
    else if (!Email.includes("@")) {
        console.log("invalid email form0t")
    }
    else if (password === "") {
        console.log("password format ir required ");
    }
    else if (password.length < 6) {
        console.log("length error")

    }
    else if (password === enterPassword && Email === enterEmail && name === enterName) {
        console.log("your succesfully login")

    }
    else {
        console.log("try agian ")
    }
});