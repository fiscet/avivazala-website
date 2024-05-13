import { Locale } from '@lib/i18n';
import { loadPost } from '@sanityLib/fetchers';
import PostComponent from './PostComponent';
import PostPreview from './PostPreview';

export type PostsContainerProps = {
  locale: Locale;
  slug: string;
  isDraftMode: boolean;
};

export default async function PostsContainer({
  locale,
  slug,
  isDraftMode = false,
}: PostsContainerProps) {
  const postInitial = await loadPost(locale, slug, isDraftMode);

  return isDraftMode ? (
    <PostPreview locale={locale} postInitial={postInitial} />
  ) : (
    <PostComponent post={postInitial.data} />
  );
}
