window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');

  let formBtn = document.getElementById('form-btn');

  let previewList = document.getElementById('preview-list');
  let main = document.getElementById('main');

  formBtn.addEventListener('click', addToList);

  function addToList(e) {
    e.preventDefault();
    if (firstName.value === '' || lastName.value === '' || age.value === '' ||
      storyTitle.value === '' || story.value === '') {
      return;
    }
    e.target.disabled = true;

    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    let p1 = document.createElement('p');
    p1.textContent = `Age: ${age.value}`;
    let p2 = document.createElement('p');
    p2.textContent = `Title: ${storyTitle.value}`;
    let p3 = document.createElement('p');
    p3.textContent = `Genre: ${genre.value}`;
    let p4 = document.createElement('p');
    p4.textContent = story.value;
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', saveData);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', editData);

    let delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.textContent = 'Delete Story';
    delBtn.addEventListener('click', delData);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    previewList.appendChild(li);
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    story.value = '';
  }
  function editData(e) {
    e.preventDefault();
    formBtn.disabled = false;

    let li = Array.from(e.target.parentElement.children);
    li[1].disabled = true;
    li[2].disabled = true;
    li[3].disabled = true;

    let article = Array.from(li[0].children);

    let nameInput = (article[0].textContent).split(': ');
    let fullName = nameInput[1].split(' ');
    firstName.value = fullName[0];
    lastName.value = fullName[1];

    let a1 = (article[1].textContent).split(': ');
    age.value = a1[1];

    let title = (article[2].textContent).split(': ');
    storyTitle.value = title[1];

    let s1 = article[4].textContent;
    story.value = s1;
    e.target.parentElement.remove();
  }
  function saveData(e) {
    e.preventDefault();
    let el = Array.from(main.children);
    el.forEach(e => {
      e.remove();
    });
    let h1 = document.createElement('h1');
    h1.textContent = "Your scary story is saved!";
    main.appendChild(h1);
  }
  function delData(e){
    e.preventDefault();
    e.target.parentElement.remove();
    formBtn.disabled = false;
  }
}
