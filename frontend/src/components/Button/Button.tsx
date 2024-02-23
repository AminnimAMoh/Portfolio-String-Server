import React, { ReactElement, memo } from 'react';
import useStyle from './Button.style';
import { ButtonProps } from './Button.interface';

const Button = (props: ButtonProps): ReactElement => {
  const { icon, ...restProps } = props;
  const classes = useStyle();

  return (
    <div className={classes.buttonContainer} {...restProps}>
      <button className={classes.iconButtons} style={{backgroundImage: `url(${icon})`}}></button>
    </div>
  );
};

export default memo(Button);
