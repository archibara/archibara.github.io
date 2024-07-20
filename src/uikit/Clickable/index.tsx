import { forwardRef, JSX, PropsWithChildren } from 'react';
import clsx from 'clsx';

export const Clickable = forwardRef<HTMLDivElement, PropsWithChildren<JSX.IntrinsicElements['div']>>((props, ref) => {
  const className = clsx('hover:bg-gray-100 cursor-pointer ', props.className);
  return <div
    {...props}
    ref={ref}
    className={className}
  />
});