'use server';
import { sanityFetch } from "./fetch";
import { languagesAvailableQuery, mainMenuQuery, pageSlugsQuery, postSlugsQuery, postsQuery, preparePageQuery, preparePostQuery } from "./queries";
import { LanguagesAvailable, LocaleSlug, Post } from "types/sanity.types";
import { FullNavigation, WebPage } from "types/local.types";
import { Locale } from "@lib/i18n";

/** Navigation */
export const getMainMenu = () => sanityFetch<FullNavigation>({ query: mainMenuQuery });

/** Pages */
export const getPageSlugs = () => sanityFetch<{ slug: LocaleSlug; }[]>({ query: pageSlugsQuery });

export const getPage = (locale: Locale, slug: string) => sanityFetch<WebPage>({ query: preparePageQuery(locale), params: { locale, slug } });

/** Posts */
export const getPostSlugs = () => sanityFetch<{ slug: LocaleSlug; }[]>({ query: postSlugsQuery });

export const getPosts = () => sanityFetch<Post[]>({ query: postsQuery });

export const getPost = (locale: Locale, slug: string) => sanityFetch<Post>({ query: preparePostQuery(locale), params: { locale, slug } });

/* Not used yet */
export const getAvailableLanguages = () => sanityFetch<LanguagesAvailable>({ query: languagesAvailableQuery });