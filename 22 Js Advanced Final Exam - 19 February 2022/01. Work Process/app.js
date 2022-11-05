function solve() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    let hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', addToTable);

    let tbody = document.getElementById('tbody');
    let sum = document.getElementById('sum');

    function addToTable(e) {
        e.preventDefault();
        if (fname.value === '' || lname.value === '' || email.value === '' ||
            birth.value === '' || position.value === '' || salary.value === '') {
            return;
        }

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = fname.value;
        let td2 = document.createElement('td');
        td2.textContent = lname.value;
        let td3 = document.createElement('td');
        td3.textContent = email.value;
        let td4 = document.createElement('td');
        td4.textContent = birth.value;
        let td5 = document.createElement('td');
        td5.textContent = position.value;
        let td6 = document.createElement('td');
        td6.textContent = salary.value;

        let td7 = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        firedBtn.addEventListener('click', firedM);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editM);

        td7.appendChild(firedBtn);
        td7.appendChild(editBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tbody.appendChild(tr);

        const currentSalary = Number(sum.textContent);
        sum.textContent = (Number(salary.value) + currentSalary).toFixed(2);

        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    }

    function editM(e) {
        e.preventDefault();
        let d = e.target.parentElement.parentElement.children;
        fname.value = d[0].textContent;
        lname.value = d[1].textContent;
        email.value = d[2].textContent;
        birth.value = d[3].textContent;
        position.value = d[4].textContent;
        salary.value = d[5].textContent;
        const currentSalary = Number(sum.textContent);
        sum.textContent = (Number(currentSalary - salary.value)).toFixed(2);
        e.target.parentElement.parentElement.remove();
    }

    function firedM(e) {
        e.preventDefault();
        let delSum = e.target.parentElement.parentElement.children[5].textContent;
        const currentSalary = Number(sum.textContent);
        sum.textContent = (Number(currentSalary - delSum)).toFixed(2);
        e.target.parentElement.parentElement.remove();
    }
}
solve()