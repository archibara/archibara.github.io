import logo from 'src/assets/pwa-192x192.png';
import { Avatar } from 'src/uikit/Avatar';
import { NavBar } from 'src/components/NavBar';
import { ProfileDropdown } from 'src/components/ProfileDropdown';
import { Typography } from 'src/uikit/Typography';

export const Header = () => {
  return (
    <header className="pl-6 sticky top-0 z-1 bg-white border-b">
      <div className="flex justify-between items-center h-12">
        <div className="flex items-center h-full">
          <Avatar src={logo} alt="logo"/>
          <Typography variant={'h3'} className="ml-1">Archibara Network</Typography>
          <NavBar/>
        </div>
        <ProfileDropdown/>
      </div>
    </header>
  )
}