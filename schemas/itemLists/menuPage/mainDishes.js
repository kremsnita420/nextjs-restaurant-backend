import { StarIcon } from '@sanity/icons'

export default {
    name: 'mainDishes',
    type: 'document',
    title: 'Main Dishes',
    icon: StarIcon,
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