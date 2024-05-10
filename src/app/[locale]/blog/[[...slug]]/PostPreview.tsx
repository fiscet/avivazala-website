// ./components/PostPreview.tsx

"use client";

import { preparePostQuery } from "@sanityLib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";

import Post from "./Post";
import { Locale } from "@lib/i18n";

export type PostPreviewProps = {
  locale: Locale
  slug: string
}

export default function PostPreview({
  initial,
  params
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument | null>(
    POST_QUERY,
    params,
    { initial }
  );

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}