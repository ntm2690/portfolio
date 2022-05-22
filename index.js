function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
reveal();

// slide div
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll(".slide");
const numberOfSlides  = slides.length;
var slideNumber  = 0

// next div
nextBtn.addEventListener('click', ()=>{
  slides.forEach((slide)=>{
    slide.classList.remove('active2','opacity')
  })
  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }
  slides[slideNumber].classList.add('active2','opacity')


  // if(a.classList.contains('active2')){
  //   console.log("1")
  // }else{console.log("2")}
})

// prev div
prevBtn.addEventListener('click', ()=>{
  slides.forEach((slide)=>{
    slide.classList.remove('active2')
  })
  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1
  }
  slides[slideNumber].classList.add('active2')
})