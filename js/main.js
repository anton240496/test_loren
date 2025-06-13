const main_btn = document.querySelector('.main_btn');
const popup_inner = document.querySelector('.popup_inner');
const popup = document.querySelector('.popup');
const popclose = document.querySelector('.popup_close');
const zatem = document.querySelector('.zatem');
const main = document.querySelector('.main');
const menu_btn = document.querySelector('.menu_btn');
const header_menu = document.querySelector('.header_menu');
const menu_close = document.querySelector('.menu_close');

main_btn.addEventListener('click', () => {
    popup.classList.add('popup_open');
    if (window.innerWidth < 600) {
        popclose.style.width = '40px';
    } else {
        popclose.style.width = '65px';
    }
    popup_inner.classList.add('popup_inner_a');
    zatem.classList.add('zatem_open');
})

popclose.addEventListener('click', () => {
    popup.classList.remove('popup_open');
    popclose.style.width = '0px';
    popup_inner.classList.remove('popup_inner_a');
    zatem.classList.remove('zatem_open');
})

zatem.addEventListener('click', () => {
    popup.classList.remove('popup_open');
    popclose.style.width = '0px';
    popup_inner.classList.remove('popup_inner_a');
    zatem.classList.remove('zatem_open');
})


menu_btn.addEventListener('click', () => {
    header_menu.classList.add('header_menu_open');
    zatem.classList.add('zatem_open');
})

menu_close.addEventListener('click', () => {
    header_menu.classList.remove('header_menu_open');
    zatem.classList.remove('zatem_open');
})


if (window.innerWidth < 1141) {

    const slides = document.querySelector('.slides');

    // Определяем количество слайдов
    const slideCount = document.querySelectorAll('.slide').length;

    // Находим кнопки «Назад» и «Вперёд»

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0; // Переменная для хранения текущего слайда

    // Функция смены слайдов
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
        } else if (index >= slideCount) {
            index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
        }

        currentIndex = index; // Запоминаем текущий слайд
        slides.style.transform = `translateX(${-index * 100}% ) `; // Сдвигаем контейнер со слайдами
    }

    // Добавляем обработчик клика для кнопки «Назад»
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    // Добавляем обработчик клика для кнопки «Вперёд»
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // Устанавливаем первый активный слайд при загрузке страницы
    goToSlide(0);


    // const slider = document.querySelector('.slides');
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    slides.addEventListener('touchstart', function (event) {
        touchStartX = event.changedTouches[0].screenX;
        touchStartY = event.changedTouches[0].screenY;
    }, false);

    slides.addEventListener('touchend', function (event) {
        touchEndX = event.changedTouches[0].screenX;
        touchEndY = event.changedTouches[0].screenY;
        handleSwipeGesture();
    }, false);

    function handleSwipeGesture() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                goToSlide(currentIndex - 1);

            } else {
                goToSlide(currentIndex + 1);
            }
        }

    }
}

