import React, { PropsWithChildren, ReactElement, createContext, useContext, useState } from 'react';
import { ReviewContentStore, ReviewContentStoreProviderProps } from './ReviewContentStore.interface';
import { DEFAULT_REVIEW_CONTENT_STORE } from './ReviewContentStore.constants';
import { ReviewContentView } from '../ReviewContentJourney.constants';
import useToggle from '@hooks/useToggle/useToggle';

const ReviewContentStoreContext = createContext<ReviewContentStore>(DEFAULT_REVIEW_CONTENT_STORE);

export const ReviewContentStoreProvider = (props: PropsWithChildren<ReviewContentStoreProviderProps>): ReactElement => {
  const { store = DEFAULT_REVIEW_CONTENT_STORE, children } = props;
  const [step, setStep]=useState<ReviewContentView>(DEFAULT_REVIEW_CONTENT_STORE.step)

  const [powerButtonState, togglePowerButtonState]=useToggle(DEFAULT_REVIEW_CONTENT_STORE.powerButtonState)

  const [powerButtonSize, setPowerButtonSizeValue]=useState<number>(DEFAULT_REVIEW_CONTENT_STORE.powerButtonSize)

  const setPowerButtonSize=(size: number)=>{
    setPowerButtonSizeValue(size)
  }

  const setStepSelected = (name: ReviewContentView) => {
    switch (name) {
      case ReviewContentView.UserInterfaceDesign:
        setStep(ReviewContentView.UserInterfaceDesign);

        break;
      case ReviewContentView.Resume:
        setStep(ReviewContentView.Resume);

        break;
      case ReviewContentView.UserExperimentDesign:
        setStep(ReviewContentView.UserExperimentDesign);

        break;
      case ReviewContentView.DataAnalytics:
        setStep(ReviewContentView.DataAnalytics);

        break;
      case ReviewContentView.Default:
        setStep(ReviewContentView.Default);

        break;
      default:
        break;
    }
  };

  return (
    <ReviewContentStoreContext.Provider
      value={Object.freeze<ReviewContentStore>({
        setStepSelected,
        togglePowerButtonState,
        setPowerButtonSize,
        powerButtonState,
        powerButtonSize,
        step
      })}
    >
      {children}
    </ReviewContentStoreContext.Provider>
  );
};

export const useReviewContentStore = (): ReviewContentStore =>
  useContext<ReviewContentStore>(ReviewContentStoreContext);
