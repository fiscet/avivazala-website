'use server';
import { LanguagesAvailable, LocaleSlug, NavigationItem, Page, Post } from "types/sanity.types";
import { sanityFetch } from "./fetch";
import { languagesAvailableQuery, mainMenuQuery, pageSlugsQuery } from "./queries";
import { FullNavigation } from "types/local.types";

export const getMainMenu = () => sanityFetch<FullNavigation>({ query: mainMenuQuery });

export const getPageSlugs = () => sanityFetch<{ slug: LocaleSlug; }[]>({ query: pageSlugsQuery });

/* Not used yet */
export const getAvailableLanguages = () => sanityFetch<LanguagesAvailable>({ query: languagesAvailableQuery });