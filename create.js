const API_URL = "http://127.0.0.1:8000/blogs/";


async function createBlog() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const token = localStorage.getItem("token");

    await fetch("http://127.0.0.1:8000/blogs/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ title, content })
    });

    alert("Blog created");
    window.location.href = "home.html";
}