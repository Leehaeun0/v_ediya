const nav = document.querySelector('.nav__content');
const navBtn = nav.querySelector('.nav__content__btn');

const items = document.querySelectorAll('.main__item');
const detail = document.querySelectorAll('.main__item__detail');
const mainBtn = document.querySelectorAll('.main__item__btn');

function navOC(e) {
    e.preventDefault();
    if(!(navBtn.classList.contains('navBtn'))) {
        navBtn.classList.add('navBtn');
       
    }
    else if(navBtn.classList.contains('navBtn')) {
        navBtn.classList.remove('navBtn');              
    }
}
for(let i=0; i<items.length; i++) {
    items[i].addEventListener('click', function() {
        detail[i].classList.add('itemAct');
    });  
               
}
// mainBtn.addEventListener('click', close);

// function close(e) {
//     e.stopPropagation();
//     let _this = e.target;   
//     let _parent = _this.parentNode;    
//     if(_parent.classList.contains('itemAct')) {
//         _parent.classList.remove('itemAct');
//     }
// }
for(let i=0; i<mainBtn.length; i++) {
    mainBtn[i].addEventListener('click', function(e) {        
        e.stopPropagation();
        let _this = e.target;   
        let _parent = _this.parentNode;    
        if(_parent.classList.contains('itemAct')) {
            _parent.classList.remove('itemAct');
        }
    });          
}



navBtn.addEventListener('click', navOC);
// window.addEventListener('click', itemAct);