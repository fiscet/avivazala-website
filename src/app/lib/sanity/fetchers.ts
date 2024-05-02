'use server';
import { LanguagesAvailable, NavigationItem, Page, Post } from "types/sanity.types";
import { sanityFetch } from "./fetch";
import { languagesAvailableQuery, mainMenuQuery } from "./queries";
import { FullNavigation } from "types/local.types";

export const getMainMenu = () => sanityFetch<FullNavigation>({ query: mainMenuQuery });

export const getAvailableLanguages = () => sanityFetch<LanguagesAvailable>({ query: languagesAvailableQuery });