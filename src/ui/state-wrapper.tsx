import { type ComponentProps } from 'react';

export function LoadingWrapper(props: ComponentProps<'div'>) {
  return <div data-testid={'LoadingWrapper'} {...props} />;
}
export function ErrorWrapper(props: ComponentProps<'div'>) {
  return <div data-testid={'ErrorWrapper'} {...props} />;
}

export function SuccessWrapper(props: ComponentProps<'div'>) {
  return <div data-testid={'SuccessWrapper'} {...props} />;
}
