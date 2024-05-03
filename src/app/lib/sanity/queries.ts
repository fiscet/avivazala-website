import { groq } from "next-sanity";

export const mainMenuQuery = groq`*[_type == "navigation" && navId.current == "main-menu"][0] { 
  items,
  "pages": items[].navigationItemLink.internalLink->{
    _id,
    _type,
    slug
  },
  "subpages": items[].navigationItemLink.submenu[].navigationItemLink.internalLink->{
    _id,
    _type,
    slug
  }
}`;

export const pageSlugsQuery = groq`*[_type == "page"] {
  slug
}`;

/* Not used yet */
export const languagesAvailableQuery = groq`*[_type == "languagesAvailable"][0] {
  languages,
  langDefault
}`;
