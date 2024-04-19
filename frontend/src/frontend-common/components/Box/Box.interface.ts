import { DOMAttributes } from "react";

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'unset';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'safe start'
  | 'safe end'
  | 'unsafe start'
  | 'unsafe end'
  | 'inherit'
  | 'initial'
  | 'unset';

export type JustifyItems =
  | 'auto'
  | 'normal'
  | 'baseline'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right';

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'start'
  | 'end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

export interface BoxVariants {
  display?: 'flex' | 'inline-flex';
  direction?: FlexDirection;
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  isRelative?: boolean;
  wrap?: FlexWrap;
  grow?: string;
  shrink?: string;
  className: string;
}

export type BoxProps= Partial<BoxVariants> & DOMAttributes<HTMLDivElement> 