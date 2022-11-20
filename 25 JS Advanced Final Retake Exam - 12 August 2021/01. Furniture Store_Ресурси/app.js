window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let addBtn = document.getElementById('add');
    let furnitureList = document.getElementById('furniture-list');
    let totalPrice = document.getElementsByClassName('total-price')[0];


    addBtn.addEventListener('click', addData);

    function addData(e) {
        e.preventDefault();
        if (model.value === '' || year.value === '' || description.value === '' ||
            price.value === '' || year.value < 0 || price.value < 0) {
            return;
        }

        let tr = document.createElement('tr');
        tr.classList.add('info');

        let tdMod = document.createElement('td');
        tdMod.textContent = model.value;
        let tdPrice = document.createElement('td');
        tdPrice.textContent = Number(price.value).toFixed(2);
        let tdBtns = document.createElement('td');
        let moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';
        moreBtn.addEventListener('click', moreData);

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', buyRemove);

        tdBtns.appendChild(moreBtn);
        tdBtns.appendChild(buyBtn);
        tr.appendChild(tdMod);
        tr.appendChild(tdPrice);
        tr.appendChild(tdBtns);
        furnitureList.appendChild(tr);

        let tr2 = document.createElement('tr');
        tr2.classList.add('hide');
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year.value}`;
        let tdDes = document.createElement('td');
        tdDes.colSpan = '3';
        tdDes.textContent = `Description: ${description.value}`;
        tr2.appendChild(tdYear);
        tr2.appendChild(tdDes);
        furnitureList.appendChild(tr2);
        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }
    function moreData(e) {
        e.preventDefault();
        e.target.textContent = 'Less Info';
        let row = Number(e.target.parentElement.parentElement.rowIndex) + 1;
        let hideData = e.target.parentElement.parentElement.parentElement.childNodes[row];
        hideData.style = 'display: contents';

        e.target.addEventListener('click', lessInfo);
    }
    function lessInfo(e) {
        e.preventDefault();
        e.target.textContent = 'More Info';
        let row = Number(e.target.parentElement.parentElement.rowIndex) + 1;
        let hideData = e.target.parentElement.parentElement.parentElement.childNodes[row];
        hideData.style = 'display: none';
    }
    function buyRemove(e) {
        e.preventDefault();
        let price = e.target.parentElement.parentElement.children[1];
        price = Number(price.textContent);

        let currP = Number(totalPrice.textContent);
        totalPrice.textContent = (currP + price).toFixed(2);
        let row = Number(e.target.parentElement.parentElement.rowIndex) + 1;
        let hideData = e.target.parentElement.parentElement.parentElement.childNodes[row];
        e.target.parentElement.parentElement.remove();
        hideData.remove();
    }
}