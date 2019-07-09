import Table from './table';
import {data} from './data';



require('normalize.css/normalize.css');
require('./styles/index.scss');



let container = document.querySelector('.container');
const table = new Table(data);
table.render(container);
