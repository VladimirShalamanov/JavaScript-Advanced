window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');

    let addBtn = document.getElementById('add-btn');

    let allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
    let totalLikes = document.getElementsByClassName('likes')[0].children[0];
    let savedContainer = document.getElementsByClassName('saved-container')[0];

    addBtn.addEventListener('click', addToContainer);

    function addToContainer(e) {
        e.preventDefault();

        if (genre.value === '' ||
            name.value === '' ||
            author.value === '' ||
            date.value === '') {
            return;
        }

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = './static/img/img.png';

        let h2a = document.createElement('h2');
        h2a.textContent = `Genre: ${genre.value}`;

        let h2b = document.createElement('h2');
        h2b.textContent = `Name: ${name.value}`;

        let h2c = document.createElement('h2');
        h2c.textContent = `Author: ${author.value}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Date: ${date.value}`;

        let saveSbtn = document.createElement('button');
        saveSbtn.classList.add('save-btn');
        saveSbtn.textContent = 'Save song';
        let likeSbtn = document.createElement('button');
        likeSbtn.classList.add('like-btn');
        likeSbtn.textContent = 'Like song';
        let delSbtn = document.createElement('button');
        delSbtn.classList.add('delete-btn');
        delSbtn.textContent = 'Delete';

        likeSbtn.addEventListener('click', likeSong);
        saveSbtn.addEventListener('click', saveSong);
        delSbtn.addEventListener('click', deleteCollSong);

        div.appendChild(img);
        div.appendChild(h2a);
        div.appendChild(h2b);
        div.appendChild(h2c);
        div.appendChild(h3);
        div.appendChild(saveSbtn);
        div.appendChild(likeSbtn);
        div.appendChild(delSbtn);
        allHitsContainer.appendChild(div);
        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }

    function likeSong(e) {
        e.preventDefault();
        let text = totalLikes.textContent;
        let arr = text.split(': ');
        let likes = Number(arr[1]);
        likes++;
        totalLikes.textContent = `Total Likes: ${likes}`;
        e.target.disabled = true;
        e.target.style.color = 'grey';
    }
    function saveSong(e) {
        e.preventDefault();
        let div = e.target.parentElement;
        div.children[5].remove();
        div.children[5].remove();
        div.remove();
        savedContainer.appendChild(div);
        div.children[5].addEventListener('click', deleteSaveSong);
    }
    function deleteCollSong(e) {
        e.preventDefault();
        e.target.parentElement.remove();
    }
    function deleteSaveSong(e) {
        e.preventDefault();
        e.target.parentElement.remove();
    }
}