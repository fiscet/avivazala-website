import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigationMenu',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'menu',
      title: 'Menus',
      type: 'array',
      of: [{type: 'menuItem'}]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
})
