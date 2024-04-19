import React, { memo, useCallback, useEffect } from 'react';
import { useReviewContentStore } from '@pages/ReviewContentJourney/ReviewContentStore/ReviewContentStore';
import useMeasure from 'react-use-measure';
import { resetActiveButton } from '../Menu.utils';
import { ReviewContentView } from '@pages/ReviewContentJourney/ReviewContentJourney.constants';
import { StyledPowerButton } from './PowerButton.styles';

const PowerButton = () => {
  const { powerButtonState, setPowerButtonSize, togglePowerButtonState, setStepSelected } = useReviewContentStore();
  const [buttonMeasures, { width }] = useMeasure();

  const handlePowerClick = useCallback((): void => {
    resetActiveButton();

    togglePowerButtonState();

    setStepSelected(ReviewContentView.Default);
  }, []);

  useEffect(() => {
    setPowerButtonSize(400);
  }, []);

  return (
    <StyledPowerButton
      onClick={handlePowerClick}
      icon="images/Button/Menu_Trigger/Power_Button-Stoke.png"
      buttonName="powerButton"
      squareSize="large"
      className={powerButtonState ? 'open' : 'close'}
    />
  );
};

export default memo(PowerButton);
