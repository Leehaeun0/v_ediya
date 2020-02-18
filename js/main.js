var nav = document.getElementsByClassName('nav__content')[0];
var navBtn = nav.getElementsByClassName('nav__content__btn')[0];
var items = document.getElementsByClassName('main__item');
var detail = document.getElementsByClassName('main__item__detail');
var mainBtn = document.getElementsByClassName('main__item__btn');
var btnClose = document.getElementsByClassName('itemAct');
function navOC(e) {
    e.preventDefault();
    if(!(navBtn.classList.contains('navBtn'))) {
        navBtn.classList.add('navBtn');
    }
    else if(navBtn.classList.contains('navBtn')) {
        navBtn.classList.remove('navBtn');
    }
}
for(var i=0; i<items.length; i++) {
    items[i].addEventListener('click', function() {
        this.getElementsByClassName('main__item__detail')[0].classList.add('itemAct');
        this.getElementsByClassName('main__item__detail')[0].classList.remove('visualHidden');
    });
}
for(var i=0; i<mainBtn.length; i++) {
    mainBtn[i].addEventListener('click', function(e) {
        // e.preventDefault();
        e.stopPropagation();
        var _this = e.target;
        var _parent = _this.parentNode;
        if(_parent.classList.contains('itemAct')) {
            _parent.classList.add('visualHidden');
            setTimeout(function (){
                _parent.classList.remove('itemAct');
            }, 1000);
        }
    });
}
navBtn.addEventListener('click', navOC);
// const nav = document.querySelector('.nav__content');
// const navBtn = nav.querySelector('.nav__content__btn');
// const items = document.querySelectorAll('.main__item');
// const detail = document.querySelectorAll('.main__item__detail');
// const mainBtn = document.querySelectorAll('.main__item__btn');
// function navOC(e) {
//     e.preventDefault();
//     if(!(navBtn.classList.contains('navBtn'))) {
//         navBtn.classList.add('navBtn');
//     }
//     else if(navBtn.classList.contains('navBtn')) {
//         navBtn.classList.remove('navBtn');
//     }
// }
// for(let i=0; i<items.length; i++) {
//     items[i].addEventListener('click', function() {
//         detail[i].classList.add('itemAct');
//     });
// }
// for(let i=0; i<mainBtn.length; i++) {
//     mainBtn[i].addEventListener('click', function(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         let _this = e.target;
//         let _parent = _this.parentNode;
//         if(_parent.classList.contains('itemAct')) {
//             _parent.classList.remove('itemAct');
//         }
//     });
// }
// navBtn.addEventListener('click', navOC);
