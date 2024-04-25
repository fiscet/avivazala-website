import { defineType, defineField } from 'sanity'
import { supportedLanguages } from '../../lib/lang';

const fields = supportedLanguages.map((lang) => (
  defineField({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    fieldset: lang.isDefault ? undefined : 'blockTranslations'
  })
));

export default defineType({
  title: 'Localized block',
  name: 'localeBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'blockTranslations',
      options: { collapsible: true }
    }
  ],
  fields,
})