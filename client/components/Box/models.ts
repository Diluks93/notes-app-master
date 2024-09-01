import type { ReactNode } from 'react';

type TFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-revers';
type TFlexWrap = 'wrap' | 'nowrap';
type TAlignContent =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'stretch';
type TJustifyContent =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
type TAlignItems =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type TBox = {
  flexDirection?: TFlexDirection;
  flexWrap?: TFlexWrap;
  alignContent?: TAlignContent;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
} & { children: ReactNode };
