const homeBTN = document.getElementById('homeBTN');
const changepage = (page)=>{
    window.location.href = String(page)
}
homeBTN.addEventListener('click', ()=>{
    changepage('../index.html');
})