import './index.css';
import {getOrders} from './api/orderApi';

//Populate a table of orders without details

getOrders().then(result => {
	let orderBody = "";

	result.forEach(order => {
		orderBody+= `<tr>
			<td>${order.id}</td>
			<td>${order.customer}</td>
			<td>${order.orderDate}</td>
		</tr>`
	});

	global.document.getElementById("orders").innerHTML = orderBody;
});
