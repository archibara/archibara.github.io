import { ComponentProps } from 'react';

export type TypographyTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'div';

export type TypographyProps<T extends TypographyTags> = {
  as?: T;
  variant?: T;
} & ComponentProps<T>;
