function solve() {
    let open = document.getElementsByTagName('section')[1];
    let inProgress = document.getElementsByTagName('section')[2];
    let complete = document.getElementsByTagName('section')[3];

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let btnAdd = document.getElementById('add');

    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    btnAdd.addEventListener('click', e => {
        e.preventDefault();

        if (task.value == '' || description.value == '' || date.value == '') {
            return;
        }

        let article = createElement('article');
        let h3 = createElement('h3', task.value);
        let pDesk = createElement('p', 'Description: ' + description.value);
        let pDate = createElement('p', 'Due Date: ' + date.value);
        let classFlex = createElement('div', undefined, 'flex');
        let greenBtn = createElement('button', 'Start', 'green');
        let redBtn = createElement('button', 'Delete', 'red');

        classFlex.appendChild(greenBtn);
        classFlex.appendChild(redBtn);

        article.appendChild(h3);
        article.appendChild(pDesk);
        article.appendChild(pDate);
        article.appendChild(classFlex);

        open.children[1].appendChild(article);
        task.value = '';
        description.value = '';
        date.value = '';

        redBtn.addEventListener('click', e => {
            article.remove();
        });

        greenBtn.addEventListener('click', e => {
            inProgress.children[1].appendChild(article);

            let fisnishBtn = createElement('button', 'Finish', 'orange');
            greenBtn.remove();
            classFlex.appendChild(fisnishBtn);
            fisnishBtn.addEventListener('click', e => {
                complete.children[1].appendChild(article);
               classFlex.remove(); 
            })
        });
    });
}