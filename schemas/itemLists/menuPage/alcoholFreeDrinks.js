export default {
    name: 'alcoholFreeDrinks',
    type: 'document',
    title: 'Alcohol Free Drinks',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'alcoholFreeDrinksList',
            title: 'Alcohol Free Drinks List',
            type: 'array',
            of: [
                {
                    type: 'drinkItem',
                }
            ],
        }

    ]
}