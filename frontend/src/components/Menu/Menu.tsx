import React, { memo } from 'react';
import useStyle from './Menu.styles';

import PowerButton from './PowerButton/PowerButton';
import RenderMenuButtons from './MenuButtons/MenuButtons';

function Menu(): React.ReactElement {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <PowerButton />
      <RenderMenuButtons/>
    </div>
  );
}

export default memo(Menu);
