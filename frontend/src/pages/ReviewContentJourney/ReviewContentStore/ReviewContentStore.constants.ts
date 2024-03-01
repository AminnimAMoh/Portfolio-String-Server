import { ReviewContentView } from "../ReviewContentJourney.constants";

export const DEFAULT_REVIEW_CONTENT_STORE={
    setStepSelected: (): void=>{},
    togglePowerButtonState: ():void=>{},
    setPowerButtonSize: (): void=>{},
    powerButtonState: false,
    step: ReviewContentView.Default,
    powerButtonSize: 0,
}