import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Brand Description',
      type: 'string'
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'string'
    })
  ]
})
