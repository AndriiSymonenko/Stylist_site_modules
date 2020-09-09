const testCreate = (stateTest) => {
    const button = document.querySelector('.button-test');

    const answerLabel = document.querySelectorAll('.test-popup-window--list > li > label');

    class TestForm {
        constructor(question, answer_1, answer_2, answer_3, parentSelector) {
            this.question = question;
            this.answer_1 = answer_1;
            this.answer_2 = answer_2;
            this.answer_3 = answer_3;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('test-popup-container')
            element.innerHTML = `
            <h3>${(this.question)}</h3>
    <ul class="test-popup-window--list">
        <li class="test-popup-window--list__item">
          <input type="checkbox" name="answer_1">
          <label data-answer="1" for="answer_1">${(this.answer_1)}</label>
        </li>
        <li class="test-popup-window--list__item">
          <input type="checkbox" name="answer_2">
          <label data-answer="2" for="answer_2">${(this.answer_2)}</label>
        </li>
        <li class="test-popup-window--list__item">
          <input type="checkbox" name="answer_3">
          <label data-answer="3" for="answer_3">${(this.answer_3)}</label>
        </li>
    </ul>
      
    `;
            this.parent.prepend(element);
        }
    };

    new TestForm(
        'Lorem ipsum',
        'Lorem 1',
        'Lorem 2',
        'Lorem 3',
        ".test-popup-window"

    ).render();

    let testFormGet = document.querySelector('.test-popup-window > div > ul');
    console.log(testFormGet);
    testFormGet.addEventListener('input', (event) => {
        let target = event.target
        if (target.tagName === 'INPUT') {
            console.log('input!')
        }
    });

    // answerCheckbox.forEach(item => {
    //     item.addEventListener('input', () => {
    //         if (item.checked = true) {
    //             item.checked = false;
    //         }
    //     })
    // });



};

export default testCreate;