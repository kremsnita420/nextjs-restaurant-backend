import { StarIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default {
    name: 'mainDishes',
    type: 'document',
    title: 'Main Dishes',
    icon: StarIcon,
    fields: [
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,

        }),
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