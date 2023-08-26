import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'preamble',
  title: 'Preamble',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'string'
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'string'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
