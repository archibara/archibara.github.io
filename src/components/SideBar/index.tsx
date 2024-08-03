import { ComponentType, PropsWithChildren } from 'react';
import { Clickable } from 'src/uikit/Clickable';

const Li: ComponentType<PropsWithChildren> = ({ children }) => {
  return (
    <li className="bg-gray-50 mt-0.5 mr-0.5 rounded">
      <Clickable className="px-4 py-2">
        {children}
      </Clickable>
    </li>
  )
}

export const SideBar = () => {
  return (
    <div className="w-60 bg-gray-300">
      <ul>
        <Li>My Page</Li>
        <Li>Contacts</Li>
        <Li>Messages</Li>
      </ul>
    </div>
  )
}