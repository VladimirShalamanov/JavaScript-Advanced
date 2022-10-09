function solve() {
    let centralCinema = document.getElementById('container');
    let name = centralCinema.children[0];
    let hall = centralCinema.children[1];
    let ticketPrice = centralCinema.children[2];
    let bntOnScreen = centralCinema.children[3];

    let ulMovies = document.querySelector('#movies > ul');
    let ulArchive = document.querySelector('#archive > ul');
    let btnClear = document.querySelector('#archive > button');

    bntOnScreen.addEventListener('click', e => {
        e.preventDefault();

        if (name.value === '' || hall.value === '' || ticketPrice.value === '' || !Number(ticketPrice.value)) {
            return;
        }

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = name.value;

        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall.value}`;

        li.appendChild(span);
        li.appendChild(strong);

        let div = document.createElement('div');
        let dStrong = document.createElement('strong');
        dStrong.textContent = Number(ticketPrice.value).toFixed(2);

        let dInput = document.createElement('input');
        dInput.setAttribute('placeholder', 'TicketsSold');

        let buttonArchive = document.createElement('button');
        buttonArchive.textContent = 'Archive';

        div.appendChild(dStrong);
        div.appendChild(dInput);
        div.appendChild(buttonArchive);

        li.appendChild(div);
        ulMovies.appendChild(li);

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        buttonArchive.addEventListener('click', e => {
            e.preventDefault();

            if (!Number(dInput.value)) {
                return;
            }
            if (Number(dInput.value) == 0) {
                return;
            }

            let currPrice = Number(dStrong.textContent) * Number(dInput.value);

            let liAr = document.createElement('li');
            let spanName = document.createElement('span');
            spanName.textContent = e.currentTarget.parentElement.parentElement.firstChild.textContent;
            let strongPrice = document.createElement('strong');
            strongPrice.textContent = `Total amount: ${Number(currPrice).toFixed(2)}`;
            let btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';

            liAr.appendChild(spanName);
            liAr.appendChild(strongPrice);
            liAr.appendChild(btnDelete);

            ulArchive.appendChild(liAr);
            e.currentTarget.parentElement.parentElement.remove();

            btnDelete.addEventListener('click', e => {
                e.preventDefault();

                e.currentTarget.parentElement.remove();
            })
            
            btnClear.addEventListener('click', e => {
                e.preventDefault();


                //ulArchive.innerHTML = "";
                // let allLi = (e.currentTarget.parentElement.children[1].children);
                // for (const li of allLi) {
                //     li.remove();
                // }
            })
        })
    })
}