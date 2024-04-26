import { groq } from "next-sanity";

export const mainMenuQuery = groq`*[_type == "navigation" && navId.current == "main-menu"][0] { 
  items,
  "pages": items[].navigationItemUrl.internalLink->{
    _id,
    slug
  }
}`;
