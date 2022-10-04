function toggle() {
    let button = document.querySelector("span.button");
    let exra = document.getElementById("extra");

    if (button.textContent == "More") {
        exra.style.display = 'block';
        button.textContent = 'Less';
    }
    else if (button.textContent == "Less"){
        exra.style.display = 'none';
        button.textContent = 'More';
    }
}