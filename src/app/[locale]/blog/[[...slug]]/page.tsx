import { unstable_setRequestLocale } from 'next-intl/server';
import { draftMode } from 'next/headers';
import { Locale } from '@lib/i18n';
import { getTranslations, getLocale } from 'next-intl/server';
import { loadPostSlugs } from 'sanity-conf/lib/fetchers';
import { Slug } from 'types/sanity.types';
import { slugPerType } from '@lib/website.config';
import type { Metadata } from 'next';
import PostsContainer from './Posts.container';
import SuspenseLoading from '@components/SuspenseLoading';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  robots: process.env.ROBOTS,
};

export async function generateStaticParams() {
  const allSlugs = (await loadPostSlugs()).data;

  const res = allSlugs!.flatMap(
    (slugItem: { slug: { [s: string]: unknown } | ArrayLike<unknown> }) => {
      const fieldArray = Object.entries(slugItem.slug);

      const localizedSlugs = fieldArray.filter((item) => item[0] !== '_type');

      const slugTrunk = slugPerType.get('post');

      return localizedSlugs.map((field) => {
        if (field[0] !== '_type') {
          const slug =
            (field[1] as Slug).current === '/'
              ? ''
              : (field[1] as Slug).current;

          return { slug: [field[0], slugTrunk, slug] };
        }
      });
    },
  );

  return res;
}

export default async function BlogPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const t = await getTranslations('Home');
  const locale = (await getLocale()) as Locale;
  const slug = params?.slug;
  const isDraftMode = draftMode().isEnabled;

  unstable_setRequestLocale(locale);

  return slug ? (
    <main>
      <SuspenseLoading>
        Blog Page {t('hello')}: {locale} | {params.slug?.join(', ')}
        {/* <SanityContent
        className="mx-auto max-w-2xl"
        value={post.content as PortableTextBlock[]}
      /> */}
      </SuspenseLoading>
    </main>
  ) : (
    <main>
      <SuspenseLoading>
        <PostsContainer locale={locale} isDraftMode={isDraftMode} />
      </SuspenseLoading>
    </main>
  );
}
