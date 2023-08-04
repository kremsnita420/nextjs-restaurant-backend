import { defineField } from "sanity";

export default {
    name: 'pizzas',
    type: 'document',
    title: 'Pizzas',
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
            name: 'pizzaList',
            title: 'Pizza List',
            type: 'array',
            of: [
                {
                    type: 'foodItem',
                }
            ],
        }
    ]
}