import nav, { foot } from "../components/nav.js";
document.getElementById("tatacliq").innerHTML = nav()
document.getElementById("footer").innerHTML = foot

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");

    form.addEventListener("submit", displaydata);

    document.getElementById("name").addEventListener("input", validateName);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("password").addEventListener("input", validatePassword);
});

const displaydata = (e) => {
    e.preventDefault();
    
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    
    const nameregex = /^[a-zA-Z ]{2,30}$/;
    const emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passregex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const nameIsValid = nameregex.test(user.name);
    const emailIsValid = emailregex.test(user.email);
    const passwordIsValid = passregex.test(user.password);

    const nameError = document.getElementById("n_err");
    const emailError = document.getElementById("e_err");
    const passwordError = document.getElementById("p_err");

    if (!nameIsValid) {
        nameError.textContent = "Invalid name";
    } else {
        nameError.textContent = "";
    }

    if (!emailIsValid) {
        emailError.textContent = "Invalid email";
    } else {
        emailError.textContent = "";
    }

    if (!passwordIsValid) {
        passwordError.textContent = "Password is not strong";
    } else {
        passwordError.textContent = "";
    }

    if (nameIsValid && emailIsValid && passwordIsValid) {
        fetch(`http://localhost:3000/user?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    alert("User Already Logged In");
                    setTimeout(() => {
                        window.location.href = "/pages/login.html";
                    }, 1000);
                } else {
                    try {
                        fetch("http://localhost:3000/user", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(user)
                        });
                        localStorage.setItem("loggedIn", true);
                    } catch (error) {
                        alert("Error!!!!");
                    }
                }
            });
    }
}

const validateName = () => {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("n_err");
    const nameregex = /^[a-zA-Z ]{2,30}$/;

    if (!nameregex.test(nameInput.value)) {
        nameError.textContent = "Invalid name";
    } else {
        nameError.textContent = "";
    }
};

const validateEmail = () => {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("e_err");
    const emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailregex.test(emailInput.value)) {
        emailError.textContent = "Invalid email";
    } else {
        emailError.textContent = "";
    }
};

const validatePassword = () => {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("p_err");
    const passregex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!passregex.test(passwordInput.value)) {
        passwordError.textContent = "Password is not strong";
    } else {
        passwordError.textContent = "";
    }
};
