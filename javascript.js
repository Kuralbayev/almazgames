const burgerMenu = document.querySelector('.burger-menu');
const navbarUl = document.querySelector('.navbar ul');

burgerMenu.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-btn, .cta-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.open('https://youtube.com', '_blank');
    });
});

// перевод на казахский
const translations = {
    ru: {
        header_logo: "Alluring Treasure",
        nav_home: "Главная",
        nav_about: "О игре",
        nav_reviews: "Отзывы",
        offer: "🔥Только 50 коробок!",
        cta_buy: "Купить",
        hero_title: "Игра для настоящих искателей приключений!",
        hero_subtitle: "Ограниченный тираж – только 50 коробок!",
        info_text: "Погрузитесь в мир приключений и сокровищ! В этой игре вам предстоит искать артефакты, сражаться с соперниками и добывать золото. Только самый хитрый и удачливый станет победителем!",
        info_cta: "Купить игру",
        how_to_play_title: "Как играть?",
        how_to_play_desc: "В игре Alluring Treasure игроки отправляются на поиски древних артефактов, преодолевают ловушки и участвуют в стратегических сражениях.",
        mechanic_search_title: "Поиск артефактов",
        mechanic_search_desc: "Исследуйте мир в поисках древних сокровищ.",
        mechanic_wheel_title: "Колесо фортуны",
        mechanic_wheel_desc: "Испытайте удачу на колесе фортуны.",
        mechanic_trap_title: "Стратегические ловушки",
        mechanic_trap_desc: "Используйте ловушки для победы над соперниками.",
        video_preview: "",
        faq_title: "Часто задаваемые вопросы",
        faq_q1: "Сколько длится доставка?",
        faq_a1: "Доставка по Казахстану занимает от 2 до 7 дней.",
        faq_q2: "Какие способы оплаты доступны?",
        faq_a2: "Оплату можно произвести через Kaspi Магазин и онлайн-платежи.",
        faq_q3: "Будет ли ещё партия игр?",
        faq_a3: "Пока что это ограниченный тираж, следите за обновлениями.",
        faq_q4: "Игра подходит для детей?",
        faq_a4: "Да, рекомендован возраст – от 8 лет.",
        faq_q5: "Можно ли купить игру в розничных магазинах?",
        faq_a5: "Нет, игра доступна только онлайн.",
        faq_q6: "Входит ли инструкция в коробку?",
        faq_a6: "Да, подробная инструкция на русском и казахском языках включена.",
        faq_q7: "Как узнать, сколько коробок осталось?",
        faq_a7: "На сайте отображается актуальное количество оставшихся игр."
    },
    kz: {
        header_logo: "Alluring Treasure",
        nav_home: "Басты",
        nav_about: "Ойын жайлы",
        nav_reviews: "Пікірлер",
        offer: "🔥Тек 50 дана!",
        cta_buy: "Сатып алу",
        hero_title: "Шындық іздеушілеріне арналған ойын!",
        hero_subtitle: "Шектеулі басылым – тек 50 дана!",
        info_text: "Қазыналар мен шытырман оқиғалар әлеміне еніп, ежелгі реликвияларды іздеңіз, қарсыластарына қарсы күресіңіз және алтын жинаңыз. Ең айлакері мен сәттісі жеңімпаз болады!",
        info_cta: "Ойынды сатып алу",
        how_to_play_title: "Қалай ойнау керек?",
        how_to_play_desc: "Alluring Treasure ойынында ойыншылар ежелгі реликвияларды іздеп, тұзақтарды жеңіп, стратегиялық шайқастарға қатысады.",
        mechanic_search_title: "Реликвияларды іздеу",
        mechanic_search_desc: "Ежелгі қазыналарды табу үшін әлемді зерттеңіз.",
        mechanic_wheel_title: "Бақы талдау дөңгелегі",
        mechanic_wheel_desc: "Бақыңызды дөңгелекте сынап көріңіз.",
        mechanic_trap_title: "Стратегиялық тұзақтар",
        mechanic_trap_desc: "Қарсыластарды жеңу үшін тұзақтарды пайдаланыңыз.",
        video_preview: "",
        faq_title: "Жиі қойылатын сұрақтар",
        faq_q1: "Жеткізу қанша уақыт алады?",
        faq_a1: "Қазақстан бойынша жеткізу 2-7 күнді құрайды.",
        faq_q2: "Қандай төлем әдістері бар?",
        faq_a2: "Kaspi дүкені және онлайн төлем арқылы төлеуге болады.",
        faq_q3: "Тағы ойын партиясы шыға ма?",
        faq_a3: "Қазіргі уақытта бұл шектеулі басылым, жаңартуларды бақылаңыз.",
        faq_q4: "Ойын балаларға қолайлы ма?",
        faq_a4: "Иә, ұсынылған жас – 8 жастан жоғары.",
        faq_q5: "Ойынды бөлшек сауда дүкендерінен сатып алуға болады ма?",
        faq_a5: "Жоқ, ойын тек онлайн режимінде қолжетімді.",
        faq_q6: "Қаптамада нұсқаулық бар ма?",
        faq_a6: "Иә, орыс және қазақ тілдерінде толық нұсқаулық кіреді.",
        faq_q7: "Қанша ойын қорабы қалды?",
        faq_a7: "Сайтта нақты қалған ойындар саны көрсетіледі."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

const langButtons = document.querySelectorAll('.language-switch .lang-btn');

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const selectedLang = button.getAttribute('data-lang');
        console.log("Выбран язык:", selectedLang);
        updateContent(selectedLang);
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
