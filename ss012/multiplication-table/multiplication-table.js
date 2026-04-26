let container = document.querySelector('.multiplication-table');
let table = document.createElement('table')
table.style.border = "1px solid black";
for (let i = 1; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 2; j < 10; j++) {
        let td = document.createElement('td');
        td.style.border = "1px solid black";
        td.style.padding = "5px";
        td.style.width = "100px";
        td.innerHTML = `${j}x${i}= ${j * i}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
container.appendChild(table);
