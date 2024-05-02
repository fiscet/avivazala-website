import { groq } from "next-sanity";

export const mainMenuQuery = groq`*[_type == "navigation" && navId.current == "main-menu"][0] { 
  items,
  "pages": items[].navigationItemLink.internalLink->{
    _id,
    slug
  },
  "subpages": items[].navigationItemLink.submenu[].navigationItemLink.internalLink->{
    _id,
    slug
  }
}`;

export const languagesAvailableQuery = groq`*[_type == "languagesAvailable"][0] {
  languages,
  langDefault
}`;
