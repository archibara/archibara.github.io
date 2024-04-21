import { NavBar } from '../molecules/NavBar.tsx';
import logo from './../../assets/pwa-192x192.png';
import { ProfileDropdown } from '../molecules/ProfileDropdown.tsx';
import { ImgAvatar } from '../atoms/ImgAvatar.tsx';
import { H1 } from '../atoms/Typography.tsx';

export const Header = () => {
  return (
    <header className="pl-6 sticky top-0 z-1 bg-white border-b">
      <div className="flex justify-between items-center h-12">
        <div className="flex items-center h-full">
          <ImgAvatar src={logo} alt="logo"/>
          <H1 className="ml-1">Archibara Network</H1>
          <NavBar/>
        </div>
        <ProfileDropdown/>
      </div>
    </header>
  )
}