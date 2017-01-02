/*eslint-disable no-console*/
import 'whatwg-fetch';

import getBaseUrl from './baseURL';

const baseURL = getBaseUrl();

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

var myInit = { method: 'GET',
               headers: myHeaders,
								mode: 'cors',

};

export function getOrders(){
	return get('orders');
}

function get(url){
	return fetch(baseURL + url, myInit).then((response) => {
		return response.json();
	}, (error) => {
			console.log(error);
	});
}

