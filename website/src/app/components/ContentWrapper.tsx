import { ReactNode } from 'react';

export type ContentWrapperProps = {
  children: ReactNode;
};

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className="px-10 lg:px-16">{children}</div>;
}
