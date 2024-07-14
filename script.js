// SEARCH //

document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search');
    const searchForm = document.querySelector('.search-form');

    searchIcon.addEventListener('click', () => {
        if (searchForm.style.transform === 'scaleY(1)') {
            searchForm.style.transform = 'scaleY(0)';
        } else {
            searchForm.style.transform = 'scaleY(1)';
        }
    });
});


//  SLIDE //
let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let navBtns = document.querySelectorAll('.nav-btn');
let totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-100 * index}%)`;
        navBtns[i].classList.remove('active');
    });
    navBtns[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlide(currentIndex);
}

navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => currentSlide(index + 1));
});

setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide(currentIndex);


// SLIDE MENU //

$(document).ready(function(){
    function slideMenu(containerId, direction) {
        let container = $(`#${containerId} .menu`);
        let scrollAmount = 0;
        let slideTimer = setInterval(function() {
            if (direction === 'left') {
                container.scrollLeft(container.scrollLeft() - 10);
            } else {
                container.scrollLeft(container.scrollLeft() + 10);
            }
            scrollAmount += 10;
            if (scrollAmount >= 150) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    }

    $('.next').on('click', function() {
        let containerId = $(this).siblings('.menu').attr('id');
        slideMenu(containerId, 'right');
    });

    $('.prev').on('click', function() {
        let containerId = $(this).siblings('.menu').attr('id');
        slideMenu(containerId, 'left');
    });
});








