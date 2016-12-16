import 'whatwg-fetch';

const baseURL = 'http://localhost:4095';
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };

export function getOrders(){
	return get(`${baseURL}/api/orders`);
}

function get(url){
	return fetch(url, myInit).then((response) => {
		return response.json();
	}, (error) => {
			console.log(error); //eslint-disable-line no-console
	});
}
