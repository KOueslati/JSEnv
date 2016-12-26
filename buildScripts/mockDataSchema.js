export const schema = {
	"type": "object",
	"properties": {
		"orders": {
			"type": "array",
			"minItems": 3,
			"maxItems": 5,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "number",
						"unique": true,
						"minimum": 1
					},
					"customer":{
						"type": "string",
						"faker": "name.firstName"
					},
					"orderDate":{
						"type": "datetime",
						"faker": "date.future"
					}
				},
				"required": ['id', 'customer', 'orderDate']
			}
		}
	},
	"required": ['orders']
};
