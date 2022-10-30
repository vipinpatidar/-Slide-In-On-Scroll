// this function is used to improve performance and stop the repotion of the scroll event

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImage = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImage.forEach((slideImage) => {
    //  console.log(
    //    window.scrollY,
    //    "scrollY",
    //    window.innerHeight,
    //    "height",
    //    slideImage.height / 2
    //  );
    const slidePosition =
      window.scrollY + window.innerHeight - slideImage.height / 2.2;
    console.log(slidePosition);

    const imageBottom = slideImage.offsetTop + slideImage.height;

    const isHalfShown = slidePosition > slideImage.offsetTop;
    const isBottomNotGone = window.scrollY < imageBottom;

    if (isBottomNotGone && isHalfShown) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));

// let boxes = document.querySelectorAll(".slide-in");

// window.addEventListener("scroll", checkBoxes);

// function checkBoxes() {
//   const triggerPoint = (window.innerHeight / 5) * 4.1;
//   // console.log(triggerPoint);
//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;
//     const boxBottom = box.getBoundingClientRect().bottom;
//     console.log(boxTop + " and " + boxBottom + " " + triggerPoint);

//     if (boxTop < triggerPoint) {
//       box.classList.add("active");
//     } else {
//       box.classList.remove("active");
//     }
//   });
// }

// checkBoxes();
