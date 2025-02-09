function toggleMenu() {
  const menu = document.getElementById('navbar-links');
  menu.classList.toggle('active');
}

let isScrolling = false;
const sections = document.querySelectorAll('section');

function scrollToSection(target) {
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function getCurrentSection() {

  const sectionsArray = Array.from(sections);
  let currentSection = sectionsArray.find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  });
  
  if (!currentSection) {
    currentSection = sections[0];
  }
  return currentSection;
}

window.addEventListener('wheel', function (e) {
  if (isScrolling) return;

  const scrollDirection = e.deltaY > 0 ? 'down' : 'up'; 

  const currentSection = getCurrentSection();

  let targetSection;

  if (scrollDirection === 'down') {
  
    if (currentSection === sections[sections.length - 1]) {
      e.preventDefault();
      return;
    }
    targetSection = currentSection.nextElementSibling || sections[0];
  } else if (scrollDirection === 'up') {
 
    if (currentSection === sections[0]) {
      e.preventDefault();
      return;
    }
    targetSection = currentSection.previousElementSibling || sections[sections.length - 1];
  }

  if (targetSection) {
    scrollToSection(targetSection);
  }

  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 200);
});
