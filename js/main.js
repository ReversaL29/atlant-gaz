
// typesTackSection

var $btnSmall = document.querySelector('#btnSmall');
var $btnMidle = document.querySelector('#btnMidle');
var $btnStandart = document.querySelector('#btnStandart');
var $btnBig = document.querySelector('#btnBig');

var $l2000 = document.querySelector('#l2000');
var $l6000 = document.querySelector('#l6000');
var $l10000 = document.querySelector('#l10000');
var $l40000 = document.querySelector('#l40000');


$btnSmall.addEventListener('click', e => {
    e.preventDefault()

    $btnSmall.style.backgroundColor = '#2194FF';
    $btnMidle.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnStandart.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnBig.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';

    $l2000.style.display = 'block';
    $l6000.style.display = 'none';
    $l10000.style.display = 'none';
    $l40000.style.display = 'none';
})

$btnMidle.addEventListener('click', e => {
    e.preventDefault()

    $btnSmall.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnMidle.style.backgroundColor = '#2194FF';
    $btnStandart.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnBig.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';

    $l2000.style.display = 'none';
    $l6000.style.display = 'block';
    $l10000.style.display = 'none';
    $l40000.style.display = 'none';
})

$btnStandart.addEventListener('click', e => {
    e.preventDefault()

    $btnSmall.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnMidle.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnStandart.style.backgroundColor = '#2194FF';
    $btnBig.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';

    $l2000.style.display = 'none';
    $l6000.style.display = 'none';
    $l10000.style.display = 'block';
    $l40000.style.display = 'none';
})

$btnBig.addEventListener('click', e => {
    e.preventDefault()

    $btnSmall.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnMidle.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnStandart.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $btnBig.style.backgroundColor = '#2194FF';

    $l2000.style.display = 'none';
    $l6000.style.display = 'none';
    $l10000.style.display = 'none';
    $l40000.style.display = 'block';
})

// feedbackSection

var $feedbackbtn1 = document.querySelector('#feedbackbtn1');
var $feedbackbtn2 = document.querySelector('#feedbackbtn2');
var $feedbackbtn3 = document.querySelector('#feedbackbtn3');
var $feedbackbtn4 = document.querySelector('#feedbackbtn4');
var $feedbackbtn5 = document.querySelector('#feedbackbtn5');

var $olga = document.querySelector('#olga');
var $sergey = document.querySelector('#sergey');
var $vadim = document.querySelector('#vadim');
var $andrey = document.querySelector('#andrey');
var $ivan = document.querySelector('#ivan');

var $feedbackName = document.querySelector('#feedbackName');
var $feedbackCountry = document.querySelector('#feedbackCountry');
var $feedbackText = document.querySelector('#feedbackText');


$feedbackbtn1.addEventListener('click', e => {
    e.preventDefault()

    $feedbackbtn1.style.backgroundColor = '#2194FF';
    $feedbackbtn2.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn3.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn4.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn5.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';

    $olga.style.display = 'block';
    $sergey.style.display = 'none';
    $vadim.style.display = 'none';
    $andrey.style.display = 'none';
    $ivan.style.display = 'none';

    $feedbackName.textContent = "Ольга И.";
    $feedbackCountry.textContent = "Красногорск";
    $feedbackText.textContent = "Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.";
})

$feedbackbtn2.addEventListener('click', e => {
    e.preventDefault()

    $feedbackbtn1.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn2.style.backgroundColor = '#2194FF';
    $feedbackbtn3.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn4.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn5.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';

    $olga.style.display = 'none';
    $sergey.style.display = 'block';
    $vadim.style.display = 'none';
    $andrey.style.display = 'none';
    $ivan.style.display = 'none';

    $feedbackName.textContent = "Сергей Б.";
    $feedbackCountry.textContent = "Москва.";
    $feedbackText.textContent = "Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия.";
})

$feedbackbtn3.addEventListener('click', e => {
    e.preventDefault()

    $feedbackbtn1.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn2.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn3.style.backgroundColor = '#2194FF';
    $feedbackbtn4.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn5.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';

    $olga.style.display = 'none';
    $sergey.style.display = 'none';
    $vadim.style.display = 'block';
    $andrey.style.display = 'none';
    $ivan.style.display = 'none';

    $feedbackName.textContent = "Вадим А.";
    $feedbackCountry.textContent = "Красногорск.";
    $feedbackText.textContent = "Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений.";
})

$feedbackbtn4.addEventListener('click', e => {
    e.preventDefault()

    $feedbackbtn1.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn2.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn3.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn4.style.backgroundColor = '#2194FF';
    $feedbackbtn5.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';

    $olga.style.display = 'none';
    $sergey.style.display = 'none';
    $vadim.style.display = 'none';
    $andrey.style.display = 'block';
    $ivan.style.display = 'none';

    $feedbackName.textContent = "Андрей Л.";
    $feedbackCountry.textContent = "Курск.";
    $feedbackText.textContent = "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.";
})

$feedbackbtn5.addEventListener('click', e => {
    e.preventDefault()

    $feedbackbtn1.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn2.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn3.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn4.style.backgroundColor = 'rgba(241, 241, 241, 0.2)';
    $feedbackbtn5.style.backgroundColor = '#2194FF';

    $olga.style.display = 'none';
    $sergey.style.display = 'none';
    $vadim.style.display = 'none';
    $andrey.style.display = 'none';
    $ivan.style.display = 'block';

    $feedbackName.textContent = "Иван Т.";
    $feedbackCountry.textContent = "Томск.";
    $feedbackText.textContent = "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Значимость этих проблем .";
})

// feedbackSectionSlidershow

const reviews = [
    {
        id: 1,
        name: "Ольга И.",
        city: "Красногорск",
        img: "../images/olga.png",
        text:
            "Я  всегда боюсь газа , а особенно боюсь что он может взорваться, как же мне помог Андрей водитель-экспедитор показал что бояться тут нечего и самое главное моего присутствие даже не понадобится.  Спасибо  компании за то что они все закрыли  этот вопрос под ключ.",
    },
    {
        id: 2,
        name: "Сергей Б.",
        job: "Москва.",
        img: "../images/sergey.png",
        text:
            "Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия.",
    },
    {
        id: 3,
        name: "Вадим А.",
        job: "Красногорск.",
        img: "../images/vadim.png",
        text:
            "Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений.",
    },
    {
        id: 4,
        name: "Андрей Л.",
        job: "Курск.",
        img: "../images/andrey.png",
        text:
            "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.",
    },
    {
        id: 5,
        name: "Иван Т.",
        job: "Томск.",
        img: "../images/ivan.png",
        text:
            "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Значимость этих проблем .",
    },
];
const img = document.getElementById("olga");
const author = document.getElementById("feedbackName");
const city = document.getElementById("feedbackCountry");
const text = document.getElementById("feedbackText");

const prevBtn = document.querySelector("#feedbackLeft");
const nextBtn = document.querySelector("#feedbackRight");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    city.textContent = item.city;
    text.textContent = item.text;
});
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    city.textContent = item.city;
    text.textContent = item.text;
}
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;

    }
    showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});