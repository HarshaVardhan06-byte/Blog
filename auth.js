// const BASE_URL = "http://127.0.0.1:8000/auth";

// // 🔐 Signup
// async function signup() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     await fetch(`${BASE_URL}/signup`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ name, email, password })
//     });

//     alert("Signup successful 🎉");
//     window.location.href = "login.html";
// }

// // 🔐 Login
// async function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const res = await fetch(`${BASE_URL}/login`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();

//     if (data.message) {
//         alert("Login successful 🚀");
//         window.location.href = "home.html";
//     } else {
//         alert("Invalid credentials ❌");
//     }
// }

// async function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const res = await fetch("http://127.0.0.1:8000/auth/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();

//     if (data.access_token) {
//         localStorage.setItem("token", data.access_token);
//         window.location.href = "home.html";
//     } else {
//         alert("Login failed");
//     }
// }


const BASE_URL = "http://127.0.0.1:8000/auth";

// 🔐 Signup
async function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        console.log("Signup response:", data);

        alert("Signup successful 🎉");
        window.location.href = "login.html";

    } catch (err) {
        console.error(err);
        alert("Signup failed ❌");
    }                   
}


// 🔐 Login
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log("Login response:", data);

        // ✅ FIXED CONDITION
        if (data.access_token) {

            // ✅ STORE TOKEN
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("user", email);

            alert("Login successful 🚀");
            window.location.href = "home.html";

        } else {
            alert("Invalid credentials ❌");
        }

    } catch (err) {
        console.error(err);
        alert("Login failed ❌");
    }
}