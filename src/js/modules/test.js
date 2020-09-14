const testCreate = (stateTest) => {
    const button = document.querySelector('.button-test');
    let testFormGet = document.querySelector('.test-popup-window--list');
    let getInput = testFormGet.querySelectorAll('input');
    let getQuestion = document.querySelector('.test-popup-container > h3');
    let getAnswer = testFormGet.querySelectorAll('label');

    function changeElementText(element, text) {
        element.innerHTML = text;
    };

    function clearInput() {
        getInput.forEach(item => {
            item.checked = false;
        });
    };

    let arrQuestions = ['Lorem ipsum_1', 'Lorem ipsum_2', 'Lorem ipsum_3', ]
    let arrAnswers = [
        ['Lorem 1', 'Lorem 2', 'Lorem 3'],
        ['Lorem 4', 'Lorem 5', 'Lorem 6'],
        ['Lorem 7', 'Lorem 8', 'Lorem 9']
    ];

    let counterQuestion = 0;
    let counterAnswer = 0;
    let counterArrayAnswer = 0;
    testFormGet.addEventListener('input', (event) => {
        let target = event.target;
        counterAnswer++;
        counterQuestion++;
        if (target.tagName === 'INPUT') {
            setTimeout(changeElementText, 500, getQuestion, arrQuestions[counterQuestion - 1]);

            getAnswer[0].innerHTML = arrAnswers[counterArrayAnswer][0];
            getAnswer[1].innerHTML = arrAnswers[counterArrayAnswer][0 + counterAnswer];
            getAnswer[2].innerHTML = arrAnswers[counterArrayAnswer][1 + counterAnswer];
            counterArrayAnswer++;
            counterAnswer--;
            setTimeout(clearInput, 500);
        }
    });

};

export default testCreate;