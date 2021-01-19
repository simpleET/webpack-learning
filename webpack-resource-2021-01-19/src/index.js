import add from '../images/add.svg';
import noData from '../images/nodata.png';
import text from './example.txt';

const index = {
	init() {
		let cont = document.getElementById('container');
		cont.style.background = `url(./${noData}) center center`;
		cont.innerHTML = text;
	},
}
index.init();