import Button from '@frontend-common/components/Button/Button';
import styled from 'styled-components';
import { ButtonPosition, ButtonPositionMetrics, StyledMenuButtonProps } from './MenuButton.interface';
import { calculateButtonPosition } from './MenuButtons.utils';

const buttonPosition = (props: ButtonPositionMetrics, rootState: boolean): ButtonPosition =>
  calculateButtonPosition(props, rootState);

export const StyledMenuButtonsContainer = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
`;

export const StyledMenuButton = styled(Button)<StyledMenuButtonProps>`
  position: absolute;
  transition: transform 1s in-out;

  @media ${(props) => props.theme.breakpoint.utils.from.l} {
    ${(props) => {
      const { x, y } = buttonPosition(props.positionMetrics, true);
      return `transform: translate(${x}px, ${y}px)`;
    }};
  }

  @media ${(props) => props.theme.breakpoint.utils.to.l} {
    ${(props) => {
      const { x, y } = buttonPosition(props.positionMetrics, false);
      return `transform: translate(${x}px, ${y}px)`;
    }};
  }
`;
