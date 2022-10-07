function solve() {
  let buttons = document.querySelectorAll('button');

  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {
    let currItems = JSON.parse(document.querySelectorAll('textarea')[0].value);
    let tableBody = document.getElementsByTagName('tbody')[0];

    for (const item of currItems) {
      let tableRow = document.createElement('tr');

      tableRow.innerHTML =
        `<td><img src="${item.img}"></td>` +
        `<td><p>${item.name}</p></td>` +
        `<td><p>${item.price}</p></td>` +
        `<td><p>${item.decFactor}</p></td>` +
        `<td><input type = "checkbox"></td>`;
      tableBody.appendChild(tableRow);
    }
  }

  function buy() {
    let resArea = document.querySelectorAll('textarea')[1];
    let table = Array.from(document.querySelectorAll('tbody tr'));

    let res = [];
    for (const el of table) {
      if (el.querySelector("input[type=checkbox]:checked")) {

        let tableData = Array.from(el.querySelectorAll('td'));
        let info = {
          name: tableData[1].children[0].textContent,
          price: tableData[2].children[0].textContent,
          decFactor: tableData[3].children[0].textContent,
        };

        res.push(info);
      }
    }

    let names = [];
    let totalPrice = 0;
    let decFactor = 0;

    for (const it of res) {
      names.push(it.name);
      totalPrice += Number(it.price);
      decFactor += Number(it.decFactor);
    }

    decFactor /= res.length;

    resArea.value = `Bought furniture: ${names.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
  }
}