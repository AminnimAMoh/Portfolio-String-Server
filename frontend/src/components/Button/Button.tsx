import React, { ReactElement, memo } from 'react';
import useStyle from './Button.style';
import { ButtonProps } from './Button.interface';

const Button = (props: ButtonProps): ReactElement => {
  const { icon, buttonName, ...restProps } = props;
  const classes = useStyle();

  return (
    <div className={classes.buttonContainer}  {...restProps}>
      <button className={classes.iconButtons} id={buttonName} style={{backgroundImage: `url(${icon})`}}></button>
    </div>
  );
};

export default memo(Button);
