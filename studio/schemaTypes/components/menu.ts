import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Menu name',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
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
