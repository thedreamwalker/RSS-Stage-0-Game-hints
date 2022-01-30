console.log(`Оценка: 85 из 85\n
— Вёрстка соответствует макету. Ширина экрана 768px +48 \(выполнено и проверено через pixelperfect\)\n
— Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 (Прокрутки не появляется и контент остается)\n
— На ширине экрана 768рх и меньше реализовано адаптивное меню +22 (адаптивное меню реализовано)`);

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'email': 'E-mail',
    'telephone': 'Phone',
    'text--message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'email': 'Почтовый адрес',
    'telephone': 'Телефон',
    'text-message': 'Сообщение'
  }
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-item');
const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelector('.buttons');
const portfolioBtnAll = document.querySelectorAll('.portfolio-btn');

const openMenu = () => {
  menu.classList.toggle('is-active');
  hamburger.classList.toggle('is-active');
}

/*
const closeMenu = (event) => {
    menu.classList.remove('is-active');
    hamburger.classList.remove('is-active');
}

menuLinks.forEach((el) => el.addEventListener('click', closeMenu));
*/

const closeMenu = (event) => {
  if (event.target && event.target.closest('.nav-item a')) {
    menu.classList.remove('is-active');
    hamburger.classList.remove('is-active');
  }
}

hamburger.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);

const changeImage = (event) => {
  if (event.target.classList.contains('portfolio-btn')) {

    // смена active
    portfolioBtnAll.forEach((btn) => btn.classList.remove('is-active'));
    event.target.classList.add('is-active');

    // здесь код функции, меняющей src изображений
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/portfolio-img-${index + 1}.jpg`);
  }
}

portfolioBtns.addEventListener('click', changeImage);

/*--------------------КЭШИРОВАНИЕ ИЗОБРАЖЕНИЙ В ПОРТФОЛИО -----------------------*/

function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach((season) => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/portfolio-img-${i}.jpg`;
    }
  });

}
preloadImages();

/*--------------------СМЕНА ЯЗЫКА -----------------------*/
const langRu = document.querySelector('.ru');
const langEn = document.querySelector('.en');

const getTranslate = (lang) => {
  const AllData = document.querySelectorAll('[data-i18]');
  AllData.forEach((el) => {
    el.textContent = i18Obj[lang][el.dataset.i18]
    if (el.placeholder) {
      el.placeholder = el.textContent;
      el.textContent = '';
    }})
};

langRu.addEventListener('click', () => {
  getTranslate('ru');
  langEn.classList.remove('is-active');
  langRu.classList.add('is-active');
})
langEn.addEventListener('click', () => {
  getTranslate('en');
  langRu.classList.remove('is-active');
  langEn.classList.add('is-active');
})