import { defineField, defineType } from 'sanity'
import { baseLang } from '../lib/lang'

export default defineType({
  name: 'eventType',
  title: 'Event Type',
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
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'If this will be visible in your websiste',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLang.id}`,
    }
  }
})
