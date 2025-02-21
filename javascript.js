const burgerMenu = document.querySelector('.burger-menu');
const navbarUl = document.querySelector('.navbar ul');

burgerMenu.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

var swiper1 = new Swiper(".mySwiper1", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

var swiper2 = new Swiper(".mySwiper2", {
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
    startCountdown(86400); // 24 часа в секундах

  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 200);
});
