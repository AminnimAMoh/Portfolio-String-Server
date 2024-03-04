import React, { memo, useCallback, useEffect } from 'react';
import { useReviewContentStore } from '@pages/ReviewContentJourney/ReviewContentStore/ReviewContentStore';
import useStyle from './PowerButton.styles';
import useMeasure from 'react-use-measure';
import { resetActiveButton } from '../Menu.utils';
import { ReviewContentView } from '@pages/ReviewContentJourney/ReviewContentJourney.constants';

const PowerButton = () => {
  const classes = useStyle();
  const { powerButtonState, setPowerButtonSize, togglePowerButtonState, setStepSelected } = useReviewContentStore();
  const [buttonMeasures, { width }] = useMeasure();

  const handlePowerClick = useCallback((): void => {
    resetActiveButton();

    togglePowerButtonState();

    setStepSelected(ReviewContentView.Default);
  }, []);

  useEffect(() => {
    setPowerButtonSize(width);
  }, [width]);

  return (
    <div
      onClick={handlePowerClick}
      className={powerButtonState ? `${classes.powerButton} open` : `${classes.powerButton} close`}
    >
      <img ref={buttonMeasures} src="images/Button/Menu_Trigger/Power_Button-Stoke.png" alt="content-asset" />
    </div>
  );
};

export default memo(PowerButton);
