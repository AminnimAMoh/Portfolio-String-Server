export interface MenuButtonsProps {
  name: string;
  img: string;
  toolKit: string;
  info: string;
  index: number;
  buttonCount: number;
  buttonSize: number;
  isOpen: boolean;
}

export interface buttonPosition {
  buttonXPosition: number;
  buttonYPosition: number;
}

export interface mediaQueries {
  rootState: boolean;
  phase: boolean;
}
