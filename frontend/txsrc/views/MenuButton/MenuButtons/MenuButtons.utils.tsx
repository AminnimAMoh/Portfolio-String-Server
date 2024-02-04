import { buttonPosition, mediaQueries } from "./MenuButtons.interface";

export const calculateButtonPosition = (
  index: number,
  length: number,
  size: number,
  state: boolean,
  windowState: mediaQueries
): buttonPosition => {
    
  if (windowState.rootState) {
    const inc = state ? 1.5 : 3;
    const rad = size / inc;
    const angle = ((2 * Math.PI) / length) * index;

    const buttonXPosition = rad * Math.cos(angle);
    const buttonYPosition = rad * Math.sin(angle);

    return { buttonXPosition, buttonYPosition };
  }

  const phase = windowState.phase ? 8 : 20;
  const inc = state ? 3 : 30;
  const angle = ((Math.PI * 2) / length + 2) * index;
  const rad = size / inc;

  const buttonXPosition =
    rad * 5 * Math.cos(angle) + 5 * (rad * Math.sin(angle)) - phase;
  const buttonYPosition = 0;

  return { buttonXPosition, buttonYPosition };
};
