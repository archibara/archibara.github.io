import { useCallback, useRef, useState } from 'react';
import { Clickable } from 'src/uikit/Clickable';
import { useClickAway } from 'react-use';
import { Typography } from 'src/uikit/Typography';
import { Avatar } from 'src/uikit/Avatar';
import logo from 'src/assets/pwa-192x192.png';

export const ProfileDropdown = () => {
  const [expand, setExpand] = useState(false)
  const refContainer = useRef(null);
  const close = useCallback(() => setExpand(false), []);
  const toggle = useCallback(() => setExpand(v => !v), []);
  useClickAway(refContainer, close);
  return (
    <div className="columns-1">
      <Clickable ref={refContainer} className="relative flex items-center h-full px-4" onClick={toggle}>
        <Typography variant={'p'}>Full Name</Typography>
        <Avatar src={logo} alt="avatar" className="ml-2"/>
      </Clickable>
      {
        expand && <div
          className="fixed mt-3 w-56 bg-white border-b"
        >
          <Clickable className="py-1">
            <button className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
            >Sign out
            </button>
          </Clickable>
        </div>
      }
    </div>
  )
}