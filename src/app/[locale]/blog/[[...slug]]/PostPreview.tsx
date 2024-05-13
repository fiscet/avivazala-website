'use client';

import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import { Post } from 'types/sanity.types';
import PostComponent from './PostComponent';
import { Locale } from '@lib/i18n';
import { preparePostQuery } from '@sanityLib/queries';

export type PostPreviewProps = {
  locale: Locale;
  postInitial: QueryResponseInitial<Post>;
};

export default function PostPreview({ locale, postInitial }: PostPreviewProps) {
  const { data } = useQuery<Post>(
    preparePostQuery(locale),
    { locale },
    {
      initial: postInitial,
    },
  );

  return data ? (
    <PostComponent post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}
