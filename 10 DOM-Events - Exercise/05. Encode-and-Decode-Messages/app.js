function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(event) {
        let currText = event.target.parentElement.children[1].value;
        
        let newMsg = "";
        for (let i = 0; i < currText.length; i++) {
            let currCh = currText[i].charCodeAt();
            newMsg += String.fromCharCode(currCh + 1);
        }

        let textAreas = document.querySelectorAll('textarea');

        let resultTextArea = textAreas[1];
        resultTextArea.value = newMsg;

        let currTextArea = textAreas[0];
        currTextArea.value = '';
    }

    function decode(event) {
        let currArea = event.target.parentElement.children[1];
        let currText = event.target.parentElement.children[1].value;

        let newMsg = '';
        for (let i = 0; i < currText.length; i++) {
            let currCh = currText[i].charCodeAt();
            newMsg += String.fromCharCode(currCh - 1);
        }

        currArea.value = newMsg;
    }
}