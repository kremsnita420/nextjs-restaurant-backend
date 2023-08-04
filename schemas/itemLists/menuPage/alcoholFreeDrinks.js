import { BottleIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default {
    name: 'alcoholFreeDrinks',
    type: 'document',
    title: 'Alcohol Free Drinks',
    icon: BottleIcon,
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