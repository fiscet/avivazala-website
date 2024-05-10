import { Locale } from "@lib/i18n";
import { getPost } from "@sanityLib/fetchers";
import Post from "./Post";

export type PostContainerProps = {
  locale: Locale
  slug: string
}

export default async function PostContainer({ locale, slug }: PostContainerProps) {

  const post = await getPost(locale, slug);

  <Post post={post!} />
}