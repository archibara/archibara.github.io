import { ComponentType, PropsWithChildren } from 'react';
import { Header } from 'src/components/Header';
import { SideBar } from 'src/components/SideBar';

export const PageTemplate: ComponentType<PropsWithChildren> = ({
  children,
}) => {
  return (
    <main className='min-h-screen bg-gray-100'>
      <Header />
      <div className='flex'>
        <SideBar />
        <div>{children}</div>
      </div>
    </main>
  );
};
