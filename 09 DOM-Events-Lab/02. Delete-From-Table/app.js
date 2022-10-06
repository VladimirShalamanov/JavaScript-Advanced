function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondCol = document.querySelectorAll("#customers tr td:nth-child(2)");

    for (const td of secondCol) {
        if (td.textContent == email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted";
            return;
        }

        document.getElementById('result').textContent = "Not found";
    }
}