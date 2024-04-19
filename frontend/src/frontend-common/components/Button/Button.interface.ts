import { HTMLProps } from "react";

export type ButtonSize= 'large'|'small';
export interface ButtonProps extends HTMLProps<HTMLDivElement>{
    icon: string,
    buttonName?: string,
    squareSize: ButtonSize
}
