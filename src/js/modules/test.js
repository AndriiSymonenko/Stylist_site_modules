const testCreate = (testArr) => {

    const feedbackTest = document.querySelector('.feedback-test');
    const feedbackText = document.querySelector('.feedback-test__text');
    let testFormGet = document.querySelector('.test-popup-window--list');
    let getInput = testFormGet.querySelectorAll('input');
    let getQuestion = document.querySelector('.test-popup-container > h3');
    let getAnswer = testFormGet.querySelectorAll('label');

    let arrQuestions = ['Lorem ipsum_1', 'Lorem ipsum_2', 'Lorem ipsum_3', ]
    let arrAnswers = [
        ['Lorem 1', 'Lorem 2', 'Lorem 3'],
        ['Lorem 4', 'Lorem 5', 'Lorem 6'],
        ['Lorem 7', 'Lorem 8', 'Lorem 9']
    ];


    function changeElementText(element, text) {
        element.innerHTML = text;
    };

    function clearInput() {
        getInput.forEach(item => {
            item.checked = false;
        });
    };

    let counterQuestion = 0;
    let counterAnswer = 0;
    let counterArrayAnswer = 0;
    testFormGet.addEventListener('input', (event) => {
        let target = event.target;
        counterAnswer++;
        counterQuestion++;

        if (target.tagName === 'INPUT') {
            setTimeout(changeElementText, 500, getQuestion, arrQuestions[counterQuestion - 1]);

            testArr.push(target.id); // information

            if (counterQuestion === 3) {
                feedbackTest.style.display = 'block';
                let sumArr = testArr.map(numStr => parseInt(numStr)).reduce((accum, curentValue) => accum + (curentValue));
                if (sumArr >= 3 && sumArr < 6) {
                    feedbackText.innerHTML = 'Test 3';
                } else if (sumArr >= 6 && sumArr < 9) {
                    feedbackText.innerHTML = 'Test 6';
                } else {
                    feedbackText.innerHTML = 'Test 9';
                }

            } //test
            getAnswer[0].innerHTML = arrAnswers[counterArrayAnswer][0];
            getAnswer[1].innerHTML = arrAnswers[counterArrayAnswer][0 + counterAnswer];
            getAnswer[2].innerHTML = arrAnswers[counterArrayAnswer][1 + counterAnswer];
            counterArrayAnswer++;
            counterAnswer--;
            setTimeout(clearInput, 500);
        }
    });
}






export default testCreate;