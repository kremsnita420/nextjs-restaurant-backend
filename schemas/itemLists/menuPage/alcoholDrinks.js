import { defineField } from "sanity";
import { BottleIcon } from '@sanity/icons'

export default {
    name: 'alcoholDrinks',
    type: 'document',
    title: 'Alcohol Drinks',
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