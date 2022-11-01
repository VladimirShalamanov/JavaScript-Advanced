function solve() {
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');

    let listOfMails = document.getElementById('list');
    let sentList = document.getElementsByClassName('sent-list');
    let deleteList = document.getElementsByClassName('delete-list');

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', addMethod);
    resetBtn.addEventListener('click', resetMethod);

    function addMethod(e) {
        e.preventDefault();
        if (!recipientName.value || !title.value || !message.value) {
            return;
        }
        let li = document.createElement('li');

        let h4a = document.createElement('h4');
        h4a.textContent = `Title: ${title.value}`;

        let h4b = document.createElement('h4');
        h4b.textContent = `Recipient Name: ${recipientName.value}`;

        let span = document.createElement('span');
        span.textContent = message.value;

        let div = document.createElement('div');
        div.id = 'list-action';

        let sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', sentMethod);

        let delBtn = document.createElement('button');
        delBtn.type = 'submit';
        delBtn.id = 'delete';
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', delListMethod);

        div.appendChild(sendBtn);
        div.appendChild(delBtn);
        li.appendChild(h4a);
        li.appendChild(h4b);
        li.appendChild(span);
        li.appendChild(div);

        listOfMails.appendChild(li);
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function resetMethod(e) {
        e.preventDefault();
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function sentMethod(e) {
        e.preventDefault();
        let lio = e.target.parentElement.parentElement;
        let h4o = lio.getElementsByTagName('h4');
        let recName = `To: ${h4o[1].textContent.substring(15)}`;
        let title = h4o[0].textContent;
        lio.remove();

        let li = document.createElement('li');

        let span1 = document.createElement('span');
        span1.textContent = recName;

        let span2 = document.createElement('span');
        span2.textContent = title;

        let div = document.createElement('div');
        div.classList.add('btn');

        let delBtn = document.createElement('button');
        delBtn.type = 'submit';
        delBtn.classList.add('delete');
        delBtn.innerHTML = 'Delete';
        delBtn.addEventListener('click', delSendMethod);

        div.appendChild(delBtn);
        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(div);
        sentList[0].appendChild(li);
    }

    function delListMethod(e){
        e.preventDefault();
        let lio = e.target.parentElement.parentElement;
        let h4o = lio.getElementsByTagName('h4');
        let recName = `To: ${h4o[1].textContent.substring(15)}`;
        let title = h4o[0].textContent;
        lio.remove();
        let li = document.createElement('li');
        let span1 = document.createElement('span');
        span1.textContent = recName;
        let span2 = document.createElement('span');
        span2.textContent = title;
        li.appendChild(span1);
        li.appendChild(span2);
        deleteList[0].appendChild(li);
    }
    function delSendMethod(e){
        e.preventDefault();
        let li = e.target.parentElement.parentElement;
        e.target.parentElement.remove();
        deleteList[0].appendChild(li);
    }
    
}
solve()