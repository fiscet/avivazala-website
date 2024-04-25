import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'menuItemLink',
  title: 'External link item',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'External link',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    }),
  ]
})
