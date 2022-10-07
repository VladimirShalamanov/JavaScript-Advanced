function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type = button]'));

    for (const button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        let value = Number(event.target.parentElement.querySelector('input[type = text]').value);
        let unit = event.target.id;

        switch (unit) {
            case 'daysBtn':
                calc(value);
                break;
            case 'hoursBtn':
                calc(value / 24);
                break;
            case 'minutesBtn':
                calc(value / 24 / 60);
                break;
            case 'secondsBtn':
                calc(value / 24 / 60 /60);
                break;
        }
    }

    function calc(value){
        let inputs = Array.from(document.querySelectorAll('input[type = text]'));

        inputs.shift().value = value;
        value *= 24;
        for (const input of inputs) {
            input.value = value;
            value *= 60;
        }
    }
}