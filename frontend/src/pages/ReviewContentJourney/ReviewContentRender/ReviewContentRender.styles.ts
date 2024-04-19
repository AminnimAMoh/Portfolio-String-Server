import Box from '@frontend-common/components/Box/Box';
import styled from 'styled-components';

export const StyledContainer = styled(Box)`
  height: "100%";
  
  &.open{
    padding-right: 160px;
    ${(props) =>
      `@media ${props.theme.breakpoint.m}{
        padding-right: 0;
      }`}
  }

  &.close{
    padding-right; 0;
  }
  
  ${(props) =>
    `@media ${props.theme.breakpoint.m}{
      flex-direction: column;
    }`}
`;
