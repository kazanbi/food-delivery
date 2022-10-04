const showBtn = document.querySelector('.show-more__btn'),
      visibleCard = document.querySelectorAll('.kat__item--hidden'),
      hiddenBtn = document.querySelector('.show-more__btn--hidden');

showBtn.addEventListener('click', function(){
    visibleCard.forEach(function(item){
        item.classList.remove('kat__item--hidden');
    })
})