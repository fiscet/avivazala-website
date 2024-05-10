import { Link, Locale } from "@lib/i18n";
import { Post } from "types/sanity.types";

export default function Posts({ posts, curLocale }: { posts: Post[]; curLocale: Locale }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      Posts:
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            href={post.slug[curLocale]!.current as string}
          >
            <h2 className="p-4 hover:bg-blue-50">{post.title[curLocale]}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </main>
  );
}