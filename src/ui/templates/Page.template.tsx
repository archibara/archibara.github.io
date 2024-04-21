import { ComponentType, PropsWithChildren } from 'react';
import { Header } from '../organisms/Header.tsx';
import { SideBar } from '../organisms/SideBar.tsx';

export const PageTemplate: ComponentType<PropsWithChildren> = ({children}) => {
  return (
    <main className="min-h-screen bg-gray-100 text-xs">
      <Header/>
      <SideBar/>
      <div className="w-full  overflow-y-auto">
        {children}
      </div>
    </main>
  )
}