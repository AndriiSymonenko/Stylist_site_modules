const testCreate = (stateTest) => {
    const button = document.querySelector('.button-test');

    const answerLabel = document.querySelectorAll('.test-popup-window--list > li > label');


    class AnswerQuestionConstructor {
        constructor(question, answer_1, answer_2, answer_3, parentQuestionSelector, parentAnswerSelector_1, parentAnswerSelector_2, parentAnswerSelector_3, ) {
            this.question = question;
            this.answer_1 = answer_1;
            this.answer_2 = answer_2;
            this.answer_3 = answer_3;
            this.parentQuestion = document.querySelector(parentQuestionSelector);
            this.parentAnswer_1 = document.querySelector(parentAnswerSelector_1);
            this.parentAnswer_2 = document.querySelector(parentAnswerSelector_2);
            this.parentAnswer_3 = document.querySelector(parentAnswerSelector_3);
        }

        renderQuize() {
            this.parentQuestion.insertAdjacentHTML('afterbegin', `<h3>${this.question}</h3>`);
            this.parentAnswer_1.insertAdjacentHTML('afterend', `<label data-answer="1" for="answer_1">${this.answer_1}</label>`);
            this.parentAnswer_2.insertAdjacentHTML('afterend', `<label data-answer="2" for="answer_2">${this.answer_2}</label>`);
            this.parentAnswer_3.insertAdjacentHTML('afterend', `<label data-answer="3" for="answer_3">${this.answer_3}</label>`);
        }


    }

    new AnswerQuestionConstructor(
        'Lorem ipsum',
        'Lorem 1',
        'Lorem 2',
        'Lorem 3',
        '.test-popup-container',
        '#answer_1',
        '#answer_2',
        '#answer_3',
    ).renderQuize();


    // let testFormGet = document.querySelector('.test-popup-window > div > ul');
    // console.log(testFormGet);
    // testFormGet.addEventListener('input', (event) => {
    //     let target = event.target
    //     if (target.tagName === 'INPUT') {

    //     }
    // });

    // answerCheckbox.forEach(item => {
    //     item.addEventListener('input', () => {
    //         if (item.checked = true) {
    //             item.checked = false;
    //         }
    //     })
    // });

    // const questionObj = {
    //     question_1: 'Lorem ipsum 1',
    //     question_2: 'Lorem ipsum 2',
    // }

    // function getKey(obj) {
    //     let arr = [];
    //     for (let key in obj) {
    //         arr.push(obj[key]);
    //     }
    //     return arr
    // }

    // let quest = getKey(questionObj);


    // console.log(quest);

    // function changeElementText(element, text) {
    //     element.innerHTML = text;
    // }


    // let testFormGet = document.querySelector('.test-popup-window--list');
    // let getInput = testFormGet.querySelectorAll('input');
    // let getQuestion = document.querySelector('.test-popup-container > h3');

    // function clearInput() {
    //     getInput.forEach(item => {
    //         item.checked = false;
    //     });
    // }

    // //Rewrite to function
    // testFormGet.addEventListener('click', (event) => {
    //     let target = event.target;
    //     if (target.tagName === 'INPUT') {

    //         setTimeout(changeElementText, 700, getQuestion, questionObj.question_1);
    //         setTimeout(clearInput, 700);
    //     }
    // })

};

export default testCreate;