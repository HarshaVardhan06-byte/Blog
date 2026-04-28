// // const API_URL = "http://127.0.0.1:8000/blogs/";

// // // 🔥 Load blogs from backend
// // async function loadBlogs() {
// //     try {
// //         const response = await fetch(API_URL);
// //         const data = await response.json();

// //         console.log("DATA:", data); // debug

// //         const blogList = document.getElementById("blogList");
// //         blogList.innerHTML = "";

// //         data.blogs.forEach(blog => {
// //             const card = document.createElement("div");
// //             card.className = "blog-card";

// //             card.innerHTML = `
// //                 <img src="https://picsum.photos/400/200?random=${Math.random()}">
// //                 <div class="blog-card-content">
// //                     <h3>${blog.title}</h3>
// //                     <p>${blog.content}</p>
// //                 </div>
// //             `;

// //             blogList.appendChild(card);
// //         });

// //     } catch (error) {
// //         console.error("Error fetching blogs:", error);
// //     }
// // }
// // // 🔐 Check login
// // if (!localStorage.getItem("user")) {
// //     window.location.href = "login.html";
// // }

// // window.onload = loadBlogs;
// // function showUser() {
// //     const user = localStorage.getItem("user");
// //     const section = document.getElementById("userSection");

// //     if (user) {
// //         section.innerHTML = `
// //             <span>👤 ${user}</span>
// //             <button onclick="logout()">Logout</button>
// //         `;
// //     }
// // }

// // function logout() {
// //     localStorage.removeItem("user");
// //     window.location.href = "login.html";
// // }
// // window.onload = () => {
// //     loadBlogs();
// //     showUser();
// // };

// const API_URL = "http://127.0.0.1:8000/blogs/";

// let allBlogs = [];

// /* LOAD BLOGS */
// async function loadBlogs() {
//     try {
//         const res = await fetch(API_URL);
//         const data = await res.json();

//         allBlogs = data.blogs.length ? data.blogs : sampleBlogs();

//         displayBlogs(allBlogs);
//         showRecent();
//     } catch {
//         allBlogs = sampleBlogs();
//         displayBlogs(allBlogs);
//         showRecent();
//     }
// }
// function viewBlog(blog) {
//     localStorage.setItem("selectedBlog", JSON.stringify(blog));
//     window.location.href = "blog.html";
// }

// function likeFromHome(blog) {
//     let liked = JSON.parse(localStorage.getItem("likedBlogs")) || [];

//     liked.push(blog);
//     localStorage.setItem("likedBlogs", JSON.stringify(liked));

//     alert("❤️ Liked!");
// }
// function showLiked() {
//     const liked = JSON.parse(localStorage.getItem("likedBlogs")) || [];
//     const container = document.getElementById("likedBlogs");

//     container.innerHTML = "";

//     liked.forEach(blog => {
//         container.innerHTML += `
//             <div class="blog-card">
//                 <h3>${blog.title}</h3>
//             </div>
//         `;
//     });
// }

// /* SAMPLE BLOGS */
// function sampleBlogs() {
//     return [
//         { title: "AI Future", content: "AI is growing fast", category: "Tech" },
//         { title: "Startup Tips", content: "Build fast", category: "Business" },
//         { title: "Frontend Tricks", content: "UI matters", category: "Design" }
//     ];
// }

// /* DISPLAY BLOGS */
// // function displayBlogs(blogs) {
// //     const container = document.getElementById("blogList");
// //     container.innerHTML = "";

// //     blogs.forEach(blog => {
// //         const card = document.createElement("div");
// //         card.className = "blog-card";

// //         card.innerHTML = `
// //             <div class="blog-card-content">
// //                 <h3>${blog.title}</h3>
// //                 <p>${blog.content}</p>
// //                 <span>${blog.category || "General"}</span>
// //             </div>
// //         `;

// //         card.onclick = () => saveRecent(blog);

// //         container.appendChild(card);
// //     });
// // }
// function displayBlogs(blogs) {
//     const container = document.getElementById("blogList");
//     container.innerHTML = "";

//     blogs.forEach((blog, index) => {

//         const card = document.createElement("div");
//         card.className = "blog-card";

//         card.innerHTML = `
//             <img src="${blog.image || 'https://picsum.photos/400/200?random=' + index}">
//             <div class="blog-card-content">
//                 <h3>${blog.title}</h3>
//                 <p>${blog.content.substring(0, 80)}...</p>

//                 <button onclick='viewBlog(${JSON.stringify(blog)})'>Read More</button>
//                 <button onclick='likeFromHome(${JSON.stringify(blog)})'>❤️</button>
//             </div>
//         `;

//         container.appendChild(card);
//     });
// }

// /* SEARCH */
// function searchBlogs() {
//     const query = document.getElementById("searchInput").value.toLowerCase();

//     const filtered = allBlogs.filter(blog =>
//         blog.title.toLowerCase().includes(query) ||
//         blog.content.toLowerCase().includes(query)
//     );

//     displayBlogs(filtered);
// }

// /* SORT */
// function sortBlogs(type) {
//     let sorted = [...allBlogs];

//     if (type === "title") {
//         sorted.sort((a,b) => a.title.localeCompare(b.title));
//     }

//     if (type === "category") {
//         sorted.sort((a,b) => (a.category || "").localeCompare(b.category || ""));
//     }

//     displayBlogs(sorted);
// }

// /* RECENTLY VIEWED */
// function saveRecent(blog) {
//     let recent = JSON.parse(localStorage.getItem("recent")) || [];

//     recent.unshift(blog);
//     recent = recent.slice(0, 3);

//     localStorage.setItem("recent", JSON.stringify(recent));
//     showRecent();
// }

// function showRecent() {
//     const recent = JSON.parse(localStorage.getItem("recent")) || [];
//     const container = document.getElementById("recentViewed");

//     container.innerHTML = "";

//     recent.forEach(blog => {
//         container.innerHTML += `<div class="blog-card">${blog.title}</div>`;
//     });

//     document.getElementById("recentBlogs").innerHTML =
//         allBlogs.slice(-3).map(b => `<div class="blog-card">${b.title}</div>`).join("");
// }

// /* USER */
// function showUser() {
//     const user = localStorage.getItem("user");
//     const section = document.getElementById("userSection");

//     if (user) {
//         section.innerHTML = `
//             👤 ${user}
//             <button onclick="logout()">Logout</button>
//         `;
//     } else {
//         section.innerHTML = `
//             <a href="login.html">Login</a>
//         `;
//     }
// }

// function logout() {
//     localStorage.clear();
//     window.location.href = "login.html";
// }

// window.onload = () => {
//     loadBlogs();
//     showUser();
//     showLiked();
// };