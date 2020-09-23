const clearInput = (selectorForm, classDelete) => {
    let selector = document.querySelector(selectorForm);
    let inputs = selector.querySelectorAll('input')
    inputs.forEach((item) => {
        item.classList.remove(classDelete);
        item.style.border = "";
        item.innerHTML = "";
    });
};

export default clearInput;