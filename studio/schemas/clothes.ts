import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'clothes',
    title: 'Clothes',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Product name',
        type: 'string',
      }),
      defineField({
        name: 'label',
        title: 'Product label',
        type: 'string',
      }),
      defineField({
        name: 'image',
        title: 'Product image',
        type: 'image'
      }),
      defineField({
        name: 'text',
        title: 'Product text',
        type: 'string',
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'string',
      }),
      defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
      })
    ]
  })