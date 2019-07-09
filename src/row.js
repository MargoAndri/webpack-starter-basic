export default class Row {
    constructor(data) {
        this._data = data;
    }

    render(table) {
        const tBody = document.createElement('tbody');
        table.appendChild(tBody);
        const tr = document.createElement('tr');
        tBody.appendChild(tr);
        for (let i in this._data) {
            let td = document.createElement('td');
            td.textContent = this._data[i];
            tr.appendChild(td);
        }
    }
}
