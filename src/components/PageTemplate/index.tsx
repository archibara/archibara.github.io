import { ComponentType, PropsWithChildren } from 'react';
import { Header } from 'src/components/Header';
import { SideBar } from 'src/uikit/SideBar';

export const PageTemplate: ComponentType<PropsWithChildren> = ({ children }) => {
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