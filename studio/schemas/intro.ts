import {defineField, defineType} from 'sanity'

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
      name: 'branddescription',
      title: 'Brand Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'blockContent'
    })
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
