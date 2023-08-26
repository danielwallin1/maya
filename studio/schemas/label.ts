import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'label',
  title: 'Label',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    })
  ],
})
