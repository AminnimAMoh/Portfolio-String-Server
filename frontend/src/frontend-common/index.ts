import { DefaultTheme } from 'styled-components';
import { AmberColor, BlackColor, GreyColor, Media, PrimaryBlueColor, RedColor, WhiteColor } from './constants'
import { CubicAnimation, LinierAnimation } from './constants/animations';
import { SpacingFunction } from './constants/spacing';

export const theme: DefaultTheme = {
  palette: {
    white: WhiteColor,
    black: BlackColor,
    primaryBlue: PrimaryBlueColor,
    amber: AmberColor,
    red: RedColor,
    grey: GreyColor,
    transparent: '#ffffff00'
  },
  animation:{
    cubic: CubicAnimation,
    liner: LinierAnimation,
  },
  spacing: (factor: number)=> SpacingFunction(factor),
  breakpoint: Media
};

export * from './components'
