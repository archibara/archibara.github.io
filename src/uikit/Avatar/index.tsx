import clsx from 'clsx';
import { JSX, PropsWithChildren } from 'react';

export const Avatar = (
  props: PropsWithChildren<JSX.IntrinsicElements['img']>,
) => {
  const className = clsx(
    'w-8 h-8 rounded-full ring-2 ring-black',
    props.className,
  );
  return (
    <img
      {...props}
      className={className}
    />
  );
};
