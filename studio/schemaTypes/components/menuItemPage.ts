import { defineField, defineType } from 'sanity'
import { baseLang } from '../../lib/lang'

export default defineType({
  name: 'menuItemPage',
  title: 'Menu Page Item',
  type: 'object',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page', title: 'Internal page'}, {type: 'localeString', title: 'External link'}],
    }),
  ]
})
