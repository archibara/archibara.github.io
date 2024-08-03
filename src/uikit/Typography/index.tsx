import clsx from 'clsx';
import React, { ForwardedRef, forwardRef } from 'react';
import { VARIANT_CLASSNAME } from './constants.ts';
import { TypographyProps, TypographyTags } from './types.ts';

const render = <T extends TypographyTags>(
  props: TypographyProps<T>,
  ref: ForwardedRef<React.JSX.IntrinsicElements[T]>,
) => {
  const { as: Component = props.variant || 'p', variant, ...rest } = props;

  return React.createElement(Component, {
    ...rest,
    ref,
    className: clsx(VARIANT_CLASSNAME[variant || Component], rest.className),
  });
};

export const Typography = forwardRef(render) as <T extends TypographyTags>(
  props: TypographyProps<T>,
) => React.ReactElement;
