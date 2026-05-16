const nom =document .getElementById("name");
const email =document .getElementById("email");
const password =document .getElementById("password");

const submit =document .getElementById("submit");

console.log(nom);
console.log(email);
console.log(password);

submit.addEventListener("click", function(event){

    
    if (nom.value.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    else if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    else if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    
    else {         alert("Form submitted successfully!");
    }
    event.preventDefault();
    console.log("Button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);

    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});