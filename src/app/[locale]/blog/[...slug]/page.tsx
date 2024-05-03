import { PortableTextBlock } from 'next-sanity';
import { Locale } from '@lib/i18n';
import type { Metadata } from 'next';
import { getTranslations, getLocale } from 'next-intl/server';
import SanityContent from '@components/SanityContent';
import { getPageSlugs } from '@lib/sanity/fetchers';
import { Slug } from 'types/sanity.types';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  robots: process.env.ROBOTS,
};

// export async function generateStaticParams() {
//   const allSlugs = await getPageSlugs();

//   const res = allSlugs.flatMap((slugItem, i) => {
//     const fieldArray = Object.entries(slugItem.slug);

//     const localizedSlugs = fieldArray.filter((item) => item[0] !== '_type');

//     return localizedSlugs.map((field) => {
//       if (field[0] !== '_type') {
//         const slug =
//           (field[1] as Slug).current === '/' ? '' : (field[1] as Slug).current;

//         return `/${field[0]}/${slug}`;
//       }
//     });
//   });

//   return res;
// }

export default async function BlogPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('Home');

  return (
    <main>
      Blog Page {t('hello')}: {locale} | {params.slug?.join(', ')}
      {/* <SanityContent
        className="mx-auto max-w-2xl"
        value={post.content as PortableTextBlock[]}
      /> */}
    </main>
  );
}
