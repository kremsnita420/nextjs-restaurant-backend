import { WarningFilledIcon } from '@sanity/icons'

export default {
    name: 'foodItem',
    type: 'document',
    title: 'Food item',
    icon: WarningFilledIcon,
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