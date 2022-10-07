function addItem() {
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');

    if (newText.value !== '' && newValue.value !== '') {
        let menu = document.getElementById('menu');
        let el = document.createElement('option');
        el.value = newValue.value;
        el.textContent = newText.value;
        menu.appendChild(el);

        newText.value = '';
        newValue.value = '';
    }
}