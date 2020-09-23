console.log('catch');
const validationForm = () => {

    function bindValidation(buttonValidate, classElement, formSelector, nameSelector, phoneSelector) {

        let btnEvent = document.querySelectorAll(buttonValidate);
        btnEvent.forEach(item => {
            item.disabled = true;
        })


        const regExpName = /^([a-zа-яё]+|\d+)$/i;
        const regExpPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

        function inputValidate(selector, classElement, regExp = true) {
            let input = document.querySelector(selector);
            input.addEventListener("input", () => {
                if (!input.value || !regExp.test(input.value) || !input) {
                    btnEvent.forEach(item => {
                        item.disabled = true;
                    });
                    input.classList.add(classElement);
                    input.style.border = "";
                } else {
                    input.classList.remove(classElement);
                    input.style.border = "2px solid #80bd57";
                    btnEvent.forEach(item => {
                        item.disabled = false;
                    });
                    submitForm();
                }

            });

        }

        inputValidate(nameSelector, classElement, regExpName);
        inputValidate(phoneSelector, classElement, regExpPhone);



        function submitForm() {
            const form = document.querySelector(formSelector);
            const Name = document.querySelector(nameSelector);
            const Phone = document.querySelector(phoneSelector);
            form.addEventListener("click", function (event) {
                if (Name.value === "" || Name.value === null) {
                    event.preventDefault();
                    Name.classList.add('invalid-field');
                } else {
                    Name.style.border = "2px solid #80bd57";;
                }
                if (Phone.value === "" || Phone.value === null) {
                    event.preventDefault();
                }
            });
        }
    }
    try {
        bindValidation('.validate-button', 'invalid-field', '.contact-form', '#name-contacts', '#phone-contacts');
    } catch (e) {
        bindValidation('.validate-button', 'invalid-field', '.main-form', '#name', '#phone');
        bindValidation('.validate-button', 'invalid-field', '.test-form', '#name-test', '#phone-test');
    };








};

export default validationForm;