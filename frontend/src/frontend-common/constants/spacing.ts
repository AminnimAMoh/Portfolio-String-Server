export const SpacingFunction = (factor: number) => {
  return `${8 * factor}px`;
};

export interface spacing {
  spacingFunction: typeof SpacingFunction;
}
