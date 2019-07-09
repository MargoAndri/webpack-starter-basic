export default class Head {
    constructor(data) {
        this._data = data;
    }

    render(table) {
        const tHead = document.createElement('thead');
        table.appendChild(tHead);
        const tr = document.createElement('tr');
        tHead.appendChild(tr);
        let headers = Object.keys(this._data[0]);
        for (let i = 1; i < headers.length; i++) {
            let td = document.createElement('td');
            td.textContent = headers[i];
            tr.appendChild(td);
        }
    }
}
