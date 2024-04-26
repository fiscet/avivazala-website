import { NavigationItem, Page, Post } from "types/sanity.types";
import { sanityFetch } from "./fetch";
import { mainMenuQuery } from "./queries";

export const getMainMenu = () => sanityFetch<{ items: NavigationItem[], pages: Partial<Page | Post>[] }>({ query: mainMenuQuery });