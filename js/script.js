// Фиксированная шапка при скролле
window.onscroll = function () {
  myFunction()
};

var header = document.getElementById("navbarSticky");
var sticky = header.offsetTop;
var desktops = document.documentElement.clientWidth > 767;

function myFunction() {
  if (desktops && window.pageYOffset >= sticky) {
    header.classList.add("navbar-sticky");
  } else if (desktops && window.pageYOffset < sticky) {
    header.classList.remove("navbar-sticky");
  }
}


// Карта
ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map("map", {
    center: [42.973462, 47.483568],
    zoom: 18,
    controls: []
  });

  if (document.documentElement.clientWidth < 576) {
    myMap.setCenter([42.973462, 47.484768], 15);
  }

  myMap.controls.add('fullscreenControl', {
    float: 'none',
    position: {
      top: 15,
      right: 15
    }
  });

  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
      top: 60,
      right: 15
    }
  });

  myPlacemark = new ymaps.Placemark([42.973462, 47.484768], {
    hintContent: 'Центродент'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/icons/map-marker.svg',
    // Размеры метки.
    iconImageSize: [41, 54],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-20, -53]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');
}
