import React, { ReactElement, memo } from 'react';

import PowerButton from './PowerButton/PowerButton';
import RenderMenuButtons from './MenuButtons/MenuButtons';
import { StyledMenuContainer } from './Menu.styles';

function Menu(): ReactElement {
  return (
    <StyledMenuContainer>
      <PowerButton />
      <RenderMenuButtons />
    </StyledMenuContainer>
  );
}

export default memo(Menu);
