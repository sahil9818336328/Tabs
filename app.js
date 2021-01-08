const tabBtn = document.querySelectorAll('.tab-btn');
// console.log(tabBtn);
const aboutContent = document.querySelectorAll('.content');
//console.log(aboutContent);
const aboutSection = document.querySelector('.about');
// console.log(aboutSection);

aboutSection.addEventListener('click',function(e){
    tabBtn.forEach(function(btn){
        btn.classList.remove('active');
    })
    e.target.classList.add('active')
    const id = e.target.dataset.id;
    //console.log(id);
    const element = document.getElementById(id);
    
    aboutContent.forEach(function(item){
        item.classList.remove('active')
        if(id === element.getAttribute('id')){
        element.classList.add('active')
    }
    })
    
    
})


