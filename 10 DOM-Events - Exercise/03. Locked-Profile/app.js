function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(b => b.addEventListener('click', chowHide));

    function chowHide(event) {
        let button = event.target;
        let profile = button.parentNode;
        let moreInfo = profile.getElementsByTagName('div')[0];
        let lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInfo.style.display = 'inline-block';
                button.textContent = 'Hide it';
            }
            else if (button.textContent === 'Hide it') {
                moreInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}