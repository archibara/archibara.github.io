import { Link as TanstackLink } from '@tanstack/react-router';
import { Typography } from 'src/uikit/Typography';

export const Link: typeof TanstackLink = (props) => (
  <Typography
    as={'span'}
    variant={'a'}
  >
    <TanstackLink {...props} />
  </Typography>
);
