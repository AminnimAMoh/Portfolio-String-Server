import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { BoxProps } from './Box.interface';

export const BoxStyled = styled.div<BoxProps>`
  ${(props: BoxProps): FlattenSimpleInterpolation => {
    const {
      display = 'flex',
      alignItems = 'normal',
      alignContent = 'normal',
      justifyItems = 'normal',
      justifyContent = 'normal',
      direction = 'unset',
      wrap = 'unset',
      grow = 'unset',
      shrink = 'unset',
      isRelative,
    } = props;

    return css`
      display: ${display};
      alignitems: ${alignItems};
      align-content: ${alignContent};
      justify-items: ${justifyItems};
      justify-content: ${justifyContent};
      flex-direction: ${direction};
      flex-wrap: ${wrap};
      flex-grow: ${grow};
      flex-shrink: ${shrink};
      is-relative: ${isRelative ? 'relative' : 'unset'};
    `;
  }}
`;
