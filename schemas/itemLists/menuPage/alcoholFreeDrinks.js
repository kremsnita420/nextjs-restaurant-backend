import { BottleIcon } from '@sanity/icons'

export default {
    name: 'alcoholFreeDrinks',
    type: 'document',
    title: 'Alcohol Free Drinks',
    icon: BottleIcon,
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