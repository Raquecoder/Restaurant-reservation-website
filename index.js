const openBtn = document.getElementById('open-btn')
console.log(openBtn);
const navList = document.getElementById('nav-list')
console.log(navList)
const closeBtn = document.getElementById('close-btn')
console.log(closeBtn)

openBtn.addEventListener('click',function(){
    navList.style.display= "block";
})


closeBtn.addEventListener('click',function(){
    navList.style.display= "none";
})