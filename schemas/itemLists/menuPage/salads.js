export default {
    name: 'salads',
    type: 'document',
    title: 'Salads',
    fields: [
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