let isScrolling = false;
const sections = document.querySelectorAll('section'); // Все секции на странице

function scrollToSection(target) {
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function getCurrentSection() {
  // Получаем все секции, и находим ту, которая наиболее близка к верхней части экрана
  const sectionsArray = Array.from(sections);
  let currentSection = sectionsArray.find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  });
  
  // Если не нашли секцию, возвращаем первую или последнюю, если мы не на первой/последней
  if (!currentSection) {
    currentSection = sections[0]; // или sections[sections.length - 1]
  }
  return currentSection;
}

window.addEventListener('wheel', function (e) {
  if (isScrolling) return; // Если уже прокручивается, не повторяем

  // Проверяем, если прокрутка идет вверх или вниз
  const scrollDirection = e.deltaY > 0 ? 'down' : 'up'; 

  const currentSection = getCurrentSection(); // Получаем текущую видимую секцию

  // Прокручиваем только в пределах секций
  let targetSection;

  if (scrollDirection === 'down') {
    // Если мы на последней секции, не прокручиваем страницу
    if (currentSection === sections[sections.length - 1]) {
      e.preventDefault();
      return;
    }
    targetSection = currentSection.nextElementSibling || sections[0]; // Следующая секция
  } else if (scrollDirection === 'up') {
    // Если мы на первой секции, не прокручиваем страницу
    if (currentSection === sections[0]) {
      e.preventDefault();
      return;
    }
    targetSection = currentSection.previousElementSibling || sections[sections.length - 1]; // Предыдущая секция
  }

  if (targetSection) {
    scrollToSection(targetSection);
  }

  isScrolling = true;
  setTimeout(() => {
    isScrolling = false; // Разрешаем следующую прокрутку через небольшой интервал
  }, 200); // Пауза, чтобы предотвратить слишком быстрые прокрутки
});
