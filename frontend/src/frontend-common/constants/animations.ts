export const CubicAnimation={
    100: "background-color 1s cubic-bezier(0, 1.51, 0.12, -0.29), -webkit-filter 2000ms cubic-bezier(0, 1.51, 0.12, -0.29)",
}

export const LinierAnimation={
    100: "transform 1s ease-in"
}

export interface Animations{
    cubicAnimation: typeof CubicAnimation;
    linierAnimations: typeof LinierAnimation;
}