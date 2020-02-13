var nav = document.getElementsByClassName('nav__content')[0];
var navBtn = nav.getElementsByClassName('nav__content__btn')[0];

var items = document.getElementsByClassName('main__item');
var detail = document.getElementsByClassName('main__item__detail');
var mainBtn = document.getElementsByClassName('main__item__btn');

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
        //detail[i].classList.add('itemAct');
		this.getElementsByClassName('main__item__detail')[0].classList.add('itemAct');
    });  
               
}
// mainBtn.addEventListener('click', close);

// function close(e) {
//     e.stopPropagation();
//     var _this = e.target;   
//     var _parent = _this.parentNode;    
//     if(_parent.classList.contains('itemAct')) {
//         _parent.classList.remove('itemAct');
//     }
// }
for(var i=0; i<mainBtn.length; i++) {
    mainBtn[i].addEventListener('click', function(e) { 
        // e.preventDefault();       
        e.stopPropagation();
        var _this = e.target;   
        var _parent = _this.parentNode;    
        if(_parent.classList.contains('itemAct')) {
            _parent.classList.remove('itemAct');
        }
    });          
}



navBtn.addEventListener('click', navOC);
// window.addEventListener('click', itemAct);