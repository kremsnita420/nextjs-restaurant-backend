export default {
    name: 'mainDishes',
    type: 'document',
    title: 'Main Dishes',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'mainDishesList',
            title: 'Main Dishes List',
            type: 'array',
            of: [
                {
                    type: 'foodItem',
                }
            ],
        }
    ]
}