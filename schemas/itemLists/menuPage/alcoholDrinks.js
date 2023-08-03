export default {
    name: 'alcoholDrinks',
    type: 'document',
    title: 'Alcohol Drinks',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'alcoholDrinksList',
            title: 'Alcohol Drinks List',
            type: 'array',
            of: [
                {
                    type: 'drinkItem',
                }
            ],
        }

    ]
}