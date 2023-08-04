import { IceCreamIcon } from '@sanity/icons'

export default {
    name: 'desserts',
    type: 'document',
    title: 'Desserts',
    icon: IceCreamIcon,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'dessertsList',
            title: 'Desserts List',
            type: 'array',
            of: [
                {
                    type: 'foodItem',
                }
            ],
        }
    ]
}