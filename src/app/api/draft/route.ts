import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { client } from "@sanityLib/client";
import { token } from "@sanityLib/token";

const clientWithToken = client.withConfig({ token });

export async function GET(request: Request) {
  const { isValid, redirectTo = "/hu/blog/" } = await validatePreviewUrl(
    clientWithToken,
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();

  redirect('/hu/blog/');
  // redirect(redirectTo);
}