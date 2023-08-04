import { defineField } from "sanity";

export default {
    name: 'salads',
    type: 'document',
    title: 'Salads',
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
            name: 'saladsList',
            title: 'Salads List',
            type: 'array',
            of: [
                {
                    type: 'foodItem',
                }
            ],
        }
    ]
}