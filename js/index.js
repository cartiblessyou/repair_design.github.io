const image = document.getElementById("slider_img");
const dots = document.querySelectorAll(".project_dot");
const names = document.querySelectorAll(".project_names_item")
const text = document.querySelectorAll(".project_info_text")
let slideNumber = 0;

const info = [
    {
      img: '../images/project/project_img1.png',
      city: 'Rostov-on-Don<br>LCD admiral',
      area: '81.5 m2<br>&nbsp',
      time: '3.5 months'
    },
    {
      img: '../images/project/project_img2.png',
      city: 'Sochi<br>Thieves',
      area: '105 m2<br>&nbsp',
      time: '4 month'
    },
    {
      img: '../images/project/project_img3.png',
      city: 'Rostov-on-Don<br>Patriotic',
      area: '93 m2<br>&nbsp',
      time: '3 month'
    }
];

function slideDisplay(index) {
    slideNumber = index;
    image.src = info[index].img;
    text[0].innerHTML = info[index].city
    text[1].innerHTML = info[index].area
    text[2].innerHTML = info[index].time
    displayDot(index);
    displayName(index);
    
};

function displayDot(index) {
    dots.forEach((dot) => dot.classList.remove("project_dot_active"));
    dots[index].classList.add("project_dot_active");
};

function displayName(index) {
    names.forEach((name) => name.classList.remove("project_names_active"));
    names[index].classList.add("project_names_active");
};

function slideRight() {
    if (slideNumber === 2) {
      slideNumber = 0; 
    } else {
      slideNumber++; 
    }
    slideDisplay(slideNumber);
};

function slideLeft() {
    if (slideNumber === 0) {
      slideNumber = 2; 
    } else {
      slideNumber--; 
    }
    slideDisplay(slideNumber);
};