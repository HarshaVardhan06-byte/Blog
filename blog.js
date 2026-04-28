const blog = JSON.parse(localStorage.getItem("selectedBlog"));

document.getElementById("blogTitle").innerText = blog.title;
document.getElementById("blogContent").innerText = blog.content;
document.getElementById("blogImage").src = blog.image;

function likeBlog() {
    let liked = JSON.parse(localStorage.getItem("likedBlogs")) || [];

    liked.push(blog);
    localStorage.setItem("likedBlogs", JSON.stringify(liked));

    alert("❤️ Liked!");
}