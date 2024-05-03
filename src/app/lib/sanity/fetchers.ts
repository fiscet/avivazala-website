'use server';
import { sanityFetch } from "./fetch";
import { languagesAvailableQuery, mainMenuQuery, pageSlugsQuery, preparePageQuery } from "./queries";
import { LanguagesAvailable, LocaleSlug } from "types/sanity.types";
import { FullNavigation, WebPage } from "types/local.types";
import { Locale } from "@lib/i18n";

export const getMainMenu = () => sanityFetch<FullNavigation>({ query: mainMenuQuery });

export const getPageSlugs = () => sanityFetch<{ slug: LocaleSlug; }[]>({ query: pageSlugsQuery });

export const getSinglePage = (locale: Locale, slug: string) => sanityFetch<WebPage>({ query: preparePageQuery(locale), params: { locale, slug } });

/* Not used yet */
export const getAvailableLanguages = () => sanityFetch<LanguagesAvailable>({ query: languagesAvailableQuery });