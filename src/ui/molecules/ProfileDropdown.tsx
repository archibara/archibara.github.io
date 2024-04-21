import logo from '../../assets/pwa-192x192.png';
import { ImgAvatar } from '../atoms/ImgAvatar.tsx';
import { P } from '../atoms/Typography.tsx';
import { useCallback, useRef, useState } from 'react';
import { BoxClickable } from '../atoms/Box.tsx';
import { useClickOutside } from '../hooks/useClickOutside.ts';

export const ProfileDropdown = () => {
  const [expand, setExpand] = useState(false)
  const refContainer = useRef(null);
  const close = useCallback(() => setExpand(false), []);
  const toggle = useCallback(() => setExpand(v=>!v), []);
  useClickOutside(refContainer, close);
  return (
    <div className="columns-1">
      <BoxClickable ref={refContainer} className="relative flex items-center h-full px-4"  onClick={toggle}>
        <P>Full Name</P>
        <ImgAvatar src={logo} alt="avatar" className="ml-2"/>

      </BoxClickable>
      {
        expand && <div
        // todo: fix fixed position
          className="fixed mt-3 w-56 bg-white border-b"
        >
          <BoxClickable className="py-1">
            <button className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
            >Sign out
            </button>
          </BoxClickable>
        </div>
      }
    </div>
  )
}