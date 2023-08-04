

export default {
    name: 'pizzas',
    type: 'document',
    title: 'Pizzas',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'pizzaList',
            title: 'Pizza List',
            type: 'array',
            of: [
                {
                    type: 'foodItem',
                }
            ],
        }
    ]
}