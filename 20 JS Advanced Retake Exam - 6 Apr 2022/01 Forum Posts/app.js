window.addEventListener("load", solve);

function solve() {
  let postTitle = document.getElementById('post-title');
  let postCaategory = document.getElementById('post-category');
  let postContent = document.getElementById('post-content');

  let pubbtn = document.getElementById('publish-btn');
  let clearBtn = document.getElementById('clear-btn');

  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list');

  pubbtn.addEventListener('click', forReview);

  function forReview() {
    if (postTitle.value === '' || postCaategory.value === '' || postContent.value === '') {
      return;
    }
    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = postTitle.value;

    let p1 = document.createElement('p');
    p1.textContent = `Category: ${postCaategory.value}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${postContent.value}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';

    approveBtn.addEventListener('click', approve);

    li.appendChild(article);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);

    reviewList.appendChild(li);
    postTitle.value = '';
    postCaategory.value = '';
    postContent.value = '';
  };

  function edit(e) {
    let currPost = e.target.parentElement;
    let article = currPost.getElementsByTagName('article')[0].children;

    postTitle.value = article[0].textContent;
    postCaategory.value = article[1].textContent.substring(10);
    postContent.value = article[2].textContent.substring(9);
    currPost.remove();
  };

  function approve(e) {
    let currPost = e.target.parentElement;
    publishedList.appendChild(currPost);
    Array.from(currPost.querySelectorAll('button')).forEach(b => b.remove());
  };

  clearBtn.addEventListener('click', (e) => {
    Array.from(publishedList.children).forEach(li => li.remove());
  });
}