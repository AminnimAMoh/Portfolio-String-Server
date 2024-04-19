import React, { ReactElement, memo } from 'react';
import { ButtonProps } from './Button.interface';
import { ButtonContainerStyled, IconButtonsStyles } from './Button.style';

const Button = (props: ButtonProps): ReactElement => {
  const { icon, buttonName, squareSize, ...restProps } = props;

  return (
    <ButtonContainerStyled  {...restProps}>
      <IconButtonsStyles id={buttonName} icon={icon} squareSize={squareSize}></IconButtonsStyles>
    </ButtonContainerStyled>
  );
};

export default memo(Button);
