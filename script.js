window.addEventListener('scroll', function () {
  var header = document.querySelector('nav');
  var height = window.innerHeight;
  var width = window.innerWidth;
  header.classList.toggle('sticky', window.scrollY > 0.7 * height);
});

msliderprops = [
  {
    color: '#419dce',
    title: 'aaaaaa',
    desc: 'This is description 1 for the event 1',
  },
  {
    color: '#8422f3',
    title: 'bbbbbb',
    desc: 'This is decription 2 for the event 2',
  },
  {
    color: '#ffffffc9',
    title: ' Speak Up',
    desc: 'This is description 3 for the event 3',
  },
];
var val = 0;
var slideIndex = 1;
handleSlider(slideIndex);

function plusDivs(n) {
  handleSlider((slideIndex += n));
}

function arrowClicked(n) {
  clearInterval(slider);
  slider = setInterval(function () {
    plusDivs(+1);
  }, 2000);
  plusDivs(n);
}

function handleSlider(n) {
  var i;
  var x = 3; //No of Posters

  //Web
  if (n > x) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x;
  }
  var offset = -1 * 100 * (slideIndex - 1);
  var dots = document.getElementsByClassName('pagination-dot');

  for (let d of dots) {
    d.classList.remove('active');
  }
  dots[slideIndex - 1].classList.add('active');
  document.getElementsByClassName('slidercontainer')[0].style.left =
    offset + '%';
  document.getElementsByClassName('mslidercontainer')[0].style.left =
    offset + '%';

  //Mobile
  var area = document.getElementsByClassName('m-pagination-progress-bar');
  if (area) {
    area[0].style.width = slideIndex * (100 / 3) + '%';
  }
  var logo = document.getElementsByClassName('m-logo');

  var logos = document.getElementsByClassName('card');

  if (slideIndex == 1) {
    setTransform(logos[slideIndex + 1], -100, -180);
    setTransform(logos[slideIndex], 100, 180);
  } else {
    setTransform(logos[(slideIndex - 2) % 3], -100, -180);
    setTransform(logos[slideIndex % 3], 100, 180);
  }
  setTransform(logos[(slideIndex - 1) % 3], 0, 0);

  var btmhalf = document.getElementsByClassName('btmhalf');
  var title = document.getElementsByClassName('title');
  var desc = document.getElementsByClassName('desc');
  var area = document.getElementsByClassName('m-pagination-progress-bar');

  btmhalf[0].style.background = msliderprops[slideIndex - 1].color;
  title[0].innerHTML = msliderprops[slideIndex - 1].title;
  desc[0].innerHTML = msliderprops[slideIndex - 1].desc;
}

var slider = setInterval(function () {
  plusDivs(+1);
}, 2000);

function setTransform(element, translate, rotate) {
  var transfromString =
    'translateX(' + translate + '%) rotateY(' + rotate + 'deg )';
  element.style.transform = transfromString;
  if (translate == -100) {
    element.style.transform_orign = 'center right';
  }
  if (translate == 100) {
    element.style.visibility = 'hidden';
    element.style.transform_orign = 'center right';
  }
  if (translate == 0) element.style.visibility = 'visible';
}
