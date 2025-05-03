const burgerMenu = document.querySelector('.burger-menu');
const navbarUl = document.querySelector('.navbar ul');

burgerMenu.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-btn, .cta-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.open('https://kaspi.kz/shop/p/alluring-treasure-manjaschee-sokrovische-137212688/?c=151010000&sr=1&qid=0f71a031eb6d613aa871ed64de60d569&ref=shared_link', '_blank');
    });
});

let swiper1 = new Swiper(".mySwiper1", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

let swiper2 = new Swiper(".mySwiper2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;
        document.querySelector(".countdown").textContent =
            (hours < 10 ? "0" : "") + hours + ":" +
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
startCountdown(86400);

window.onscroll = function () {
    const btn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
