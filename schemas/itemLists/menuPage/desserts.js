import { IceCreamIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default {
    name: 'desserts',
    type: 'document',
    title: 'Desserts',
    icon: IceCreamIcon,
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