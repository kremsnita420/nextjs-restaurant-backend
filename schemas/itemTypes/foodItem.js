import { SchemaIcon } from '@sanity/icons'

export default {
    name: 'foodItem',
    type: 'document',
    title: 'Food item',
    icon: SchemaIcon,
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