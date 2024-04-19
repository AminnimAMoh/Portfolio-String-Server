export const PrimaryBlueColor = {
  900: '#9c3c41',
};

export const AmberColor = {
  200: '#ffe082',
  400: '#ffca28',
  700: '#ffa000',
};

export const RedColor = {
  400: '#5C3B42',
};

export const WhiteColor = {
  500: '#ffffff',
};

export const GreyColor = {
  100: '#e4e5e7',
};

export const BlackColor = {
  900: '#000000',
};

export interface ColorPallet {
  amberColor: typeof AmberColor;
  primaryBlue: typeof PrimaryBlueColor;
  greyColor: typeof GreyColor;
  whiteColor: typeof WhiteColor;
  blackColor: typeof BlackColor;
}
