import { getMainMenu } from '@lib/sanity/fetchers';
import { internalGroqTypeReferenceTo } from 'types/sanity.types';

export default async function MobileMenuComponent() {
  const res = await getMainMenu();

// console.log(res.items[0].navigationItemUrl?.internalLink)
console.log(res.pages[0].slug?.hu)
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
}
