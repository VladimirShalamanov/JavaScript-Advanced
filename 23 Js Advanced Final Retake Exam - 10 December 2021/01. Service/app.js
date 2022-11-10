window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let submitBtn = document.querySelector('form > button');
    submitBtn.addEventListener('click', sendForm);

    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');
    let clearBtn = document.getElementsByClassName('clear-btn')[0].addEventListener('click', clearData);

    function sendForm(e) {
        e.preventDefault();
        if (description.value === '' ||
            clientName.value === '' ||
            clientPhone.value === '') {
            return;
        }

        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType.value}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description.value}`;

        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';
        startBtn.addEventListener('click', startRepair)

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;
        finishBtn.style.color = 'gray';
        finishBtn.addEventListener('click', finishRepair)

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        receivedOrders.appendChild(div);
        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
    }

    function startRepair(e) {
        e.preventDefault();
        let finishB = e.target.parentElement.children[4];
        finishB.disabled = false;
        finishB.style.color = '';
        e.target.disabled = true;
        e.target.style.color = 'gray';
    }

    function finishRepair(e) {
        e.preventDefault();
        let allEl = e.target.parentElement;
        allEl.children[4].remove();
        allEl.children[3].remove();
        allEl.remove();
        completedOrders.appendChild(allEl);
    }

    function clearData(e) {
        e.preventDefault();
        let data = Array.from(e.target.parentElement.children);
        for (let i = data.length - 1; i >= 3; i--) {
            data[i].remove();
        }
    }
}