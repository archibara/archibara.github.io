import { Link as TanstackLink } from '@tanstack/react-router';
import { ComponentProps } from 'react';
import { Typography } from 'src/uikit/Typography';

const defaultChildrenArgs = {
  isActive: false,
  isTransitioning: false,
};

export const Link = ({
  to,
  children,
  ...props
}: ComponentProps<typeof TanstackLink>) => (
  <Typography
    as={'span'}
    variant={'a'}
  >
    <a
      {...(props as ComponentProps<'a'>)}
      href={props.href || to}
    >
      {typeof children === 'function'
        ? children(defaultChildrenArgs)
        : children}
    </a>
  </Typography>
);
