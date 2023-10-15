const boxes_fly_in = document.querySelector('.about-us-img');

window.addEventListener('scroll', box_fly_in);

function box_fly_in(){
    const TriggerBottom1 = window.innerHeight / 5 * 4;
    const boxTop = boxes_fly_in.getBoundingClientRect().top;
    if (boxTop < TriggerBottom1) {
        boxes_fly_in.classList.add('show_fly_in');
    }
    else
        boxes_fly_in.classList.remove('show_fly_in');
}

const text_fly_in = document.querySelectorAll('.about-us-slider');

window.addEventListener('scroll', about_us_fly_in);

function about_us_fly_in() {
    const TriggerBottom2 = window.innerHeight / 5 * 4;
    text_fly_in.forEach((text_top) => {
        const gettop = text_top.getBoundingClientRect().top;
        if (gettop < TriggerBottom2) {
            text_top.classList.add('show_text_fly_in');
        }
        else
            text_top.classList.remove('show_text_fly_in');
    })
}

let DisplayValues = document.querySelectorAll('.num');
let interval = 5000;

DisplayValues.forEach((DisplayValue) => {
    let start = 0;
    let end = parseInt(DisplayValue.getAttribute("data-val"));
    let duration = 0;
    if (end <= 2000)
    {
        interval = 8000;
        duration = Math.floor(interval / end);    
        console.log(duration);
    }
    else if (end > 2000)
    {
        interval = 0;
        duration = Math.floor(interval / end);
        console.log(duration);
    }
    let counter = setInterval(function () {
        start += 1;
        DisplayValue.textContent = start;
        if (start == end) {
            clearInterval(counter);
        }
    }, duration);
});