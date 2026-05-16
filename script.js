const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

console.log(nom, email, password);

// Populate fields from localStorage on page load
const savedUser = JSON.parse(localStorage.getItem("user")) || null;
if (savedUser) {
    nom.value = savedUser.name || '';
    email.value = savedUser.email || '';
    password.value = savedUser.password || '';
}

submit.addEventListener("click", function(event) {
    event.preventDefault();

    if (nom.value.trim() === "") {
        alert("Please enter your name.");
        return;
    } else if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    } else if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    console.log("Button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);

    const user = {
        name: nom.value,
        email: email.value,
        password: password.value
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Form submitted successfully!\n\nName: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});