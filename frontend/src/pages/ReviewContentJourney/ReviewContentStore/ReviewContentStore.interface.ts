import { ReviewContentView } from '../ReviewContentJourney.constants';

export interface ReviewContentStore {
  setStepSelected: (name: string) => void;
  togglePowerButtonState: () => void;
  setPowerButtonSize: (size: number)=>void;
  powerButtonState: boolean;
  step: ReviewContentView;
  powerButtonSize: number;
}

export interface ReviewContentStoreProviderProps {
  store: ReviewContentStore;
}
