import modals from './modules/modals';
import sliders from './modules/sliders';
import testCreate from './modules/test';
window.addEventListener('DOMContentLoaded', () => {
    let stateTest = [];
    modals();
    sliders();
    testCreate(stateTest);
    console.log(stateTest);

});