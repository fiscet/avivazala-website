import { GiHamburgerMenu } from 'react-icons/gi';

export default function MobileMenuButtonComponent() {
  return (
    <div
      tabIndex={0}
      role="button"
      className="btn btn-circle bg-lime-500 lg:hidden">
      <GiHamburgerMenu size={24} />
    </div>
  );
}
