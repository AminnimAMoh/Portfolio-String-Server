export interface MenuButtonProps{
    buttonName: string,
    img: string,
    position: ButtonPosition
}

export interface ButtonPosition{
    buttonXPosition: number,
    buttonYPosition: number,
}

export interface mediaQueries {
    rootState: boolean;
    phase: boolean;
  }