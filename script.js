const header = document.getElementById('vincent');
const navbar = document.querySelector('nav'); 

const aboutme = document.getElementById('aboutme');
const cert2 = document.getElementById('cert1');

const projects1 = document.getElementById('projects1');



window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.style.backgroundColor = 'rgba(26,26,36,0.8)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});

header.addEventListener('click', () => {

  window.scrollTo({ top: 0, behavior: 'smooth' });
});


aboutme.addEventListener('click', () => {


let mainContent = document.getElementById('mainContent')
if(mainContent){
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

})


cert2.addEventListener('click', () => {


let cert2 = document.getElementById('cert2')
if(cert2){
    cert2.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

})


projects1.addEventListener('click', () => {


let projects2 = document.getElementById('projects2')

if(projects2){
    projects2.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}

})

