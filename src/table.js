import Head from "./head";
import Row from './row';

export default class Table {
    constructor(data) {
        this._data = data;
    }

    render(container) {
        const newTable = document.createElement('table');
        container.appendChild(newTable);

        const head = new Head(this._data);
        head.render(newTable);
        for (let element of this._data) {
            let row = new Row(element);
            row.render(newTable);
        }

    }
}
