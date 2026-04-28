
function searchBlogs(){
 const input=document.getElementById('searchInput').value.toLowerCase();
 const cards=document.querySelectorAll('.blog-card');
 cards.forEach(card=>{
   card.style.display=card.innerText.toLowerCase().includes(input)?'block':'none';
 });
}
