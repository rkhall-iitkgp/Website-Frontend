const Script = () => {
const track = document.querySelector(".testimonialsContent2");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".rightArrow");
const prevBtn = document.querySelector(".leftArrow");
const slideWidth = slides[0].getBoundingClientRect().width;
for(var i=0;i<slides.length;i++){
    arrangeSlide(i, slides[i]);
}
function arrangeSlide(num, slide) {
    slide.style.left = num * slideWidth + "px";
}

prevBtn.addEventListener("click",moveSlidePrev);

function moveSlidePrev() {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;

    track.style.transform = "translateX(-" + amountToMove + ")";
}



nextBtn.addEventListener("click", moveSlideNext);

function moveSlideNext() {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform = "translateX(-" + amountToMove + ")";
}
}

export default Script;

