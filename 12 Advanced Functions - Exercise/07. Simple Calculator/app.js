function calculator() {
    let s1;
    let s2;
    let resS;

    let run = {
        init: (firstSelector, secondSelector, resSelector) => {
            s1 = document.querySelector(firstSelector);
            s2 = document.querySelector(secondSelector);
            resS = document.querySelector(resSelector);
        },
        add: () => {
            let n1 = Number(s1.value);
            let n2 = Number(s2.value);
            let sum = n1 + n2;
            resS.value = sum;
        },
        subtract: () => {
            let n1 = Number(s1.value);
            let n2 = Number(s2.value);
            let sum = n1 - n2;
            resS.value = sum;
        }
    }

    return run;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 