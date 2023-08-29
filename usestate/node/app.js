

const items = [
	{
		id: 1,
		name: 'Item1'
	},
	{
		id: 2,
		name: 'Item2'
	},
	{
		id: 3,
		name: 'Item3'
	}
];

const newItems = [...items];

newItems[0].id = 5;

console.log('New Items', newItems);
console.log('Items', items);


console.log(items.splice(2));