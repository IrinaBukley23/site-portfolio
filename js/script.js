const hamburgerEl = document.querySelector('.hamburger'),
      menuEl = document.querySelector('.menu'),
      closeEL = document.querySelector('.menu__close');

hamburgerEl.addEventListener( 'click', function(){
    menuEl.classList.add('active');
} );

closeEL.addEventListener( 'click', function(){
    menuEl.classList.remove('active');
} );

const counters = document.querySelectorAll('.level__item-rating'),
      lines = document.querySelectorAll('.level__item-inner');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});