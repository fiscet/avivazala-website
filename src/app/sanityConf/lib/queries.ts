import { Locale } from "@lib/i18n";
import { groq } from "next-sanity";

/** Navigation */
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

/** Pages */
export const pageSlugsQuery = groq`*[_type == "page"] {
  slug
}`;

export const preparePageQuery = (locale: Locale) => `*[_type == "page" && slug[$locale].current == $slug][0] {
  title{${locale}},
  body{${locale}},
  "pageImage": {
    "url": mainImage.asset->url,
    "dimensions": mainImage.asset->metadata.dimensions
  }
}`;

/** Posts */
export const postSlugsQuery = groq`*[_type == "post"] {
  slug
}`;

export const postsQuery = groq`*[_type == "post"]`;

export const preparePostQuery = (locale: Locale) => `*[_type == "post" && slug[$locale].current == $slug][0] {
  title{${locale}},
  body{${locale}},
  "pageImage": {
    "url": mainImage.asset->url,
    "dimensions": mainImage.asset->metadata.dimensions
  }
}`;

/* Not used yet */
export const languagesAvailableQuery = groq`*[_type == "languagesAvailable"][0] {
  languages,
  langDefault
}`;
