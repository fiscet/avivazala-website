import { defineField, defineType } from 'sanity'
import { baseLang } from '../../lib/lang'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Item text',
      type: 'localeString',
    }),
    defineField({
      name: 'linkTo',
      title: 'Link to',
      type: 'array',
      of: [{type: 'menuItemPage'}, {type: 'menuItemLink'}],
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLang.id}`,
    }
  }
})
