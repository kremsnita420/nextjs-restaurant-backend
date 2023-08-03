export default {
    name: 'drinkItem',
    type: 'document',
    title: 'Drink item',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'quantity',
            type: 'string',
            title: 'Quantity'
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
        },
        {
            title: 'Put on front page?',
            name: 'promoteToFront',
            type: 'boolean'
        }

    ]
}