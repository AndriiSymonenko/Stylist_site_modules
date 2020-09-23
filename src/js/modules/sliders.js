const sliders = () => {

    function bindSlider(slideSelector, nextBtn, prevBtn) {
        let slide = document.querySelectorAll(slideSelector),
            next = document.querySelector(nextBtn),
            prev = document.querySelector(prevBtn);
        let indexSlide = 1;

        showSlide(1);

        function showSlide(n) {
            if (n > slide.length) {
                indexSlide = 1;
            }
            if (n < 1) {
                indexSlide = slide.length - 1;
            }
            slide.forEach((item) => {
                item.classList.remove("active-slide");
                if (screen.width < 768) {
                    slide[indexSlide - 1].classList.add("active-slide");
                } else {
                    slide[indexSlide - 1].classList.add("active-slide");
                    slide[indexSlide].classList.add("active-slide");
                }
            });


            console.log(indexSlide);
        }



        function plusSlide(n) {
            showSlide((indexSlide += n));
        }

        prev.addEventListener("click", () => {
            if (screen.width < 768) {
                plusSlide(-1);
            } else {
                plusSlide(-2);
            }

        });

        next.addEventListener("click", () => {
            if (screen.width < 768) {
                plusSlide(1);
            } else {
                plusSlide(2);
            }
        });
    }
    try {
        bindSlider(".blog-list--item", ".next-button", ".prev-button");
        bindSlider(".reviews-list--item", ".next-button__feedback", ".prev-button__feedback");
    } catch (e) {};

}

export default sliders;