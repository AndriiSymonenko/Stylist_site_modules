const modals = () => {

    function clearInput(selectorForm, classDelete) {
        let selector = document.querySelectorAll(selectorForm);
        selector.forEach((item) => {
            item.classList.remove(classDelete);
            item.style.border = "";
            item.innerHTML = "";
        });
    }

    function bindModal(triggerSelector, modalSelector, closeSelector, overFlowSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            overFlow = document.querySelector(overFlowSelector);
        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }
                modal.classList.add('open');
                if (modal.classList.contains('test-popup-window')) {
                    document.body.style.overflow = "";
                    overFlow.classList.add("overflow-show");
                } else {
                    document.body.style.overflow = "hidden";
                    overFlow.classList.add("overflow-show");
                }


            });
        });
        close.addEventListener('click', () => {
            console.log('close');
            let form = document.querySelector('.main-form');
            form.reset();
            modal.classList.remove('open');
            document.body.style.overflow = "";
            overFlow.classList.remove("overflow-show");
            clearInput('.main-form > input', "invalid-field");

        });

        overFlow.addEventListener('click', (event) => {
            if (event.target === overFlow) {
                console.log(event.target);
                console.log('close');
                modal.classList.remove('open');
                document.body.style.overflow = "";
                overFlow.classList.remove("overflow-show");
            }
        });

    }

    function timeModalOpen(selector, time, classActive) {
        setTimeout(() => {
            document.querySelector(selector).classList.add(classActive);
            document.body.style.overflow = "hidden";
            overFlow.classList.add("overflow-show");
        }, time);
    }

    bindModal(".button-request", ".popup", ".modal-close", ".black-wrapper");
    bindModal(".button-test", ".test-popup-window", ".modal-test-close", ".black-wrapper");
    // timeModalOpen(".popup", 3000, "open");
}

export default modals;