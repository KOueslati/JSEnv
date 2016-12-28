import 'whatwg-fetch';
import getBaseUrl from './baseURL';

const baseURL = getBaseUrl();

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };

export function getOrders(){
	return get('orders');
}

/*function get(url){
	return fetch(baseURL + url, myInit).then((response) => {
		return response.json();
	}, (error) => {
			console.log(error); //eslint-disable-line no-console
	});
}*/

function get(url) {
  return fetch(baseURL + url, myInit).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
