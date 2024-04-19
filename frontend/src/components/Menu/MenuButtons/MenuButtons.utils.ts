import { ButtonPosition, ButtonPositionMetrics } from './MenuButton.interface';
import { NUMBER_OF_BUTTONS } from './MenuButtons.constants';

export const calculateButtonPosition = ({ index, size, state }: ButtonPositionMetrics, rootState: boolean): ButtonPosition => {
  if (rootState) {
    const inc = state ? 1.5 : 3;
    const rad = size / inc;
    const angle = ((2 * Math.PI) / NUMBER_OF_BUTTONS) * index;

    const buttonXPosition = rad * Math.cos(angle);
    const buttonYPosition = rad * Math.sin(angle);

    return { x: buttonXPosition, y: buttonYPosition };
  }

  // const phase = windowState.phase ? 8 : 20;
  const phase = 20;
  const inc = state ? 3 : 30;
  const angle = ((Math.PI * 2) / NUMBER_OF_BUTTONS + 2) * index;
  const rad = size / inc;

  const buttonXPosition = rad * 5 * Math.cos(angle) + 5 * (rad * Math.sin(angle)) - phase;
  const buttonYPosition = 0;

  return { x: buttonXPosition, y: buttonYPosition };
};
