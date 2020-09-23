var slides = document.querySelector('.slider-items').children;
var nextBtn = document.querySelector('.right-slide');
var prevBtn = document.querySelector('.left-slide');
var totalSlides=slides.length;
var index=0;

nextBtn.onclick= function () {
    next('next')
}
prevBtn.onclick= function () {
    next('prev')
}

function next(direction) {
    if (direction=='next') {
        index++;
        if (index==totalSlides) {
            index=0;
        }
    } else {
        if (direction=='prev') {
            index--;
            if (index==-1) {
                index=totalSlides-1;
            }
        }
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');       
    }
    slides[index].classList.add('active');
}