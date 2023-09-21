const $burger = document.querySelector('.header-content__burger'),
    $nav = document.querySelector('.header-content__nav'),
    $x = document.querySelector('.header-content__x'),
    $list = document.querySelector('.header-content__list'),
    $tel = document.createElement('li');

$burger.addEventListener('click', function () {
    $nav.classList.add('header-content__active');
    $x.classList.remove('close');
    $burger.style.display = 'none';

    $tel.classList.add('header-content__item');
    $tel.innerHTML = '<a class="header-content__tel" style="display:block" href="tel:+79636893383"><svg class="header-content__tel-svg" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><use xlink:href="./images/sprite.svg#tel"></use></svg>+7 (963) 689-33-83</a>';

    $list.append($tel);
});

$x.addEventListener('click', function () {
    $nav.classList.remove('header-content__active');
    $burger.style.removeProperty('display');
    $x.classList.add('close');
    $tel.remove();
});

document.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.header-content__burger') && !target.closest('.header-content__active')) {
        $nav.classList.remove('header-content__active');
        $x.classList.add('close');
        $burger.style.display = '';
        $tel.remove();
    };
});
