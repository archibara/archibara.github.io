import { JSX, PropsWithChildren } from 'react';
import clsx from 'clsx';

export const H1 = (props: PropsWithChildren<JSX.IntrinsicElements['h1']>) => {
  const className = clsx('text-lg font-semibold', props.className);
  return <h1
    {...props}
    className={className}
  />
}

export const P = (props: PropsWithChildren<JSX.IntrinsicElements['p']>) => {
  const className = clsx('text', props.className);
  return <p
    {...props}
    className={className}
  />
}
