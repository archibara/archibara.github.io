import logo from 'src/assets/pwa-192x192.png';
import { NavBar } from 'src/components/NavBar';
import { ProfileDropdown } from 'src/components/ProfileDropdown';
import { Avatar } from 'src/uikit/Avatar';
import { Typography } from 'src/uikit/Typography';

export const Header = () => {
  return (
    <header className='z-1 sticky top-0 border-b bg-white pl-6'>
      <div className='flex h-12 items-center justify-between'>
        <div className='flex h-full items-center'>
          <Avatar
            src={logo}
            alt='logo'
          />
          <Typography
            variant={'h3'}
            className='ml-1'
          >
            Archibara Network
          </Typography>
          <NavBar />
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
