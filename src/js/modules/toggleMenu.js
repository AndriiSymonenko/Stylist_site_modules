const toggleMenu = () => {
    function bindToogle(toggleButtonOpen, toggleButtonClose, toggleMenu) {
        const toggleOpen = document.querySelector(toggleButtonOpen),
            toggleClose = document.querySelector(toggleButtonClose),
            toggle = document.querySelector(toggleMenu);

        toggleOpen.addEventListener("click", function () {
            toggle.classList.add("toggle-open");
        });

        toggleClose.addEventListener("click", function () {
            toggle.classList.remove("toggle-open");
        });

    }
    bindToogle(".toggle-menu", ".toggle-close", ".toggle-container");
};

export default toggleMenu;