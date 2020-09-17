import modals from './modules/modals';
import sliders from './modules/sliders';
import testCreate from './modules/test';
import toggleMenu from './modules/toggleMenu';

window.addEventListener('DOMContentLoaded', () => {
    let stateTest = [];
    modals();
    sliders();
    testCreate(stateTest);
    // console.log(stateTest);
    toggleMenu();
});