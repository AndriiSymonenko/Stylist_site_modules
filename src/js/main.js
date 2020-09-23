import modals from './modules/modals';
import sliders from './modules/sliders';
import testCreate from './modules/test';
import toggleMenu from './modules/toggleMenu';
import validationForm from './modules/validator';

window.addEventListener('DOMContentLoaded', () => {
    validationForm();
    let stateTest = [];
    modals();
    sliders();
    try {
        testCreate(stateTest);
    } catch (e) {};

    // console.log(stateTest);
    toggleMenu();

    // console.log(screen.width);
});