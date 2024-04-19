import { ButtonProps } from '@frontend-common/components';

export type mediaQueries = {
  rootState: boolean;
  phase: boolean;
};
export type ButtonPositionMetrics = {
  index: number;
  size: number;
  state: boolean;
};
export interface ButtonPosition{
    x: number;
    y: number;
}
export interface MenuButtonProps {
  buttonName: string;
  img: string;
}
export interface StyledMenuButtonProps extends ButtonProps{
    positionMetrics: ButtonPositionMetrics;
}
