import { defineField, defineType } from 'sanity'
import { baseLang } from '../lib/lang'

export default defineType({
  name: 'postCategory',
  title: 'Post Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLang.id}`,
    }
  }
})
