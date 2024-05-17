import { defineField, defineType } from 'sanity';
import { defaultLocale } from '@lib/i18n';;
import { GrDocument } from "react-icons/gr";

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: GrDocument,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'localeBlockContent' }],
    }),
  ],

  preview: {
    select: {
      title: `title.${defaultLocale}`,
      media: 'mainImage',
    }
  },
});
