import { forwardRef } from 'react';
import {
  createPolymorphicComponent,
  Button as MantineButton,
  type ButtonProps as MantineButtonProps
} from '@mantine/core';

type ButtonProps = MantineButtonProps;

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    return (
      <MantineButton
        {...props}
        ref={ref}
      >{props.children}</MantineButton>
    );
  })
);
