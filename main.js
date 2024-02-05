// DAY ONE CHALLENGE
const github = document.getElementById('github');
const instagram = document.getElementById('instagram');
const skoob = document.getElementById('skoob');
const linkedin = document.getElementById('linkedin');

github.addEventListener('click', () => {
  window.open('https://github.com/gabriel-adsv', '_blank')
});

instagram.addEventListener('click', () => {
  window.open('https://instagram.com/ciencialiteraria', '_blank');
});

skoob.addEventListener('click', () => {
  window.open('https://www.skoob.com.br/usuario/5538919', '_blank');
});

linkedin.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/gabriel-adsv/', '_blank');
});


// DAY TWO CHALLENGE
const stacks = [
  'HTML,',
  'CSS,',
  'JavaScript,',
  'React,',
  'Node.JS,',
  'React Native,',
  'Python.',
  'E muito mais...'
];

let currentIndex = 0;

setInterval(() => {
  const satcksText = document.getElementById('stacks');

  satcksText.innerHTML = stacks[currentIndex];

  if(currentIndex + 1 >= stacks.length) {
    currentIndex = 0;
  } else {
    currentIndex++;
  };
}, 1000);

// DAY FOUR CHALLENGE
const starOne = document.getElementById('star-one');
const starTwo = document.getElementById('star-two');
const starThree = document.getElementById('star-three');
const starFour = document.getElementById('star-four');
const starFive = document.getElementById('star-five');

starOne.addEventListener('mouseover', function(event) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#555555';
  starThree.style.color = '#555555';
  starFour.style.color = '#555555';
  starFive.style.color = '#555555';
});

starTwo.addEventListener('mouseover', function(event) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#555555';
  starFour.style.color = '#555555';
  starFive.style.color = '#555555';
});

starThree.addEventListener('mouseover', function(event) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#FFFF00';
  starFour.style.color = '#555555';
  starFive.style.color = '#555555';
});

starFour.addEventListener('mouseover', function(evento) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#FFFF00';
  starFour.style.color = '#FFFF00';
  starFive.style.color = '#555555';
});

starFive.addEventListener('mouseover', function(event) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#FFFF00';
  starFour.style.color = '#FFFF00';
  starFive.style.color = '#FFFF00';
});

starOne.addEventListener('mouseout', function(event) {
  starOne.style.color = '#555555';
  starTwo.style.color = '#555555';
  starThree.style.color = '#555555';
  starFour.style.color = '#555555';
  starFive.style.color = '#555555';
});

starTwo.addEventListener('mouseout', function(event) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#555555';
  starFour.style.color = '#555555';
  starFive.style.color = '#555555';
});

starThree.addEventListener('mouseout', function(event) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#FFFF00';
  starFour.style.color = '#555555';
  starFive.style.color = '#555555';
});

starFour.addEventListener('mouseout', function(evento) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#FFFF00';
  starFour.style.color = '#FFFF00';
  starFive.style.color = '#555555';
});

starFive.addEventListener('mouseout', function(event) {
  starOne.style.color = '#FFFF00';
  starTwo.style.color = '#FFFF00';
  starThree.style.color = '#FFFF00';
  starFour.style.color = '#FFFF00';
  starFive.style.color = '#FFFF00';
});

/* WHEN TO USE SCROLL */
window.addEventListener('scroll', () => {
  let scroll = document.querySelector('.scrollTop');
  if (window.scrollY > 50) {
    scroll.classList.add('active');
  } else {
    scroll.classList.remove('active');
  }
});

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};