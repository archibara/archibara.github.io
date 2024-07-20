import { TypographyTags } from './types.ts';

export const VARIANT_CLASSNAME: Record<TypographyTags, string> = {
  h1: 'text-3xl font-semibold',
  h2: 'text-2xl font-semibold',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-semibold',
  h5: 'text-base font-semibold',
  h6: 'text-sm font-semibold',
  p: 'text-base',
  span: 'text-base',
  a: 'text-base font-medium text-blue-600 dark:text-blue-500 hover:underline',
  div: 'text-base',
};