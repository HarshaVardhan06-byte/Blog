
function searchBlogs(){
 const input=document.getElementById('searchInput').value.toLowerCase();
 const cards=document.querySelectorAll('.blog-card');
 cards.forEach(card=>{
   card.style.display=card.innerText.toLowerCase().includes(input)?'block':'none';
 });
}


window.onload = function () {
    const randomNum = Math.floor(Math.random() * 1000);

    const img = document.getElementById("randomBlogImage");

    if (img) {
        img.src = `https://picsum.photos/900/500?random=${randomNum}`;
    }
};
