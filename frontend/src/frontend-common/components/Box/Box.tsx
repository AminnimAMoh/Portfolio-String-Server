import React, { PropsWithChildren, ReactElement, memo } from 'react';
import { BoxProps } from './Box.interface';
import { BoxStyled } from './Box.styles';

function Box(props: PropsWithChildren<BoxProps>): ReactElement {
  const { children, className, ...rest } = props;

  return (
    <BoxStyled className={className} {...rest}>
      {children}
    </BoxStyled>
  );
}

export default memo(Box);
