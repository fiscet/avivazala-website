import { defineType, defineField } from 'sanity'
import { supportedLanguages } from '../../lib/lang';

const fields = supportedLanguages.map((lang) => (
  defineField({
    title: lang.title,
    name: lang.id,
    type: 'slug',
    options: {
      source: `title[${lang.id}]`,
      maxLength: 96,
    },
    fieldset: lang.isDefault ? undefined : 'translations'
  })
));

export default defineType({
  title: 'Localized slug',
  name: 'localeSlug',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields,
})