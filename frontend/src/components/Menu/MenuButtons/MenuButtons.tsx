import React, { Fragment, memo, useCallback } from 'react';
import Button from '../../Button/Button';
import { ReviewContentView } from '@pages/ReviewContentJourney/ReviewContentJourney.constants';
import { setActiveButton } from '../Menu.utils';
import { useMediaQuery } from '@material-ui/core';
import { useReviewContentStore } from '@pages/ReviewContentJourney/ReviewContentStore/ReviewContentStore';
import { calculateButtonPosition } from './MenuButtons.utils';
import { NUMBER_OF_BUTTONS } from './MenuButtons.constants';
import { ButtonPosition, MenuButtonProps } from './MenuButton.interface';

function RenderMenuButtons() {
  const { powerButtonState: isOpen, powerButtonSize, setStepSelected } = useReviewContentStore();
  const windowState = {
    rootState: useMediaQuery('(min-width:1280px)'),
    phase: useMediaQuery('(max-width:560px)'),
  };

  const setButtonPosition = useCallback(
    (index: number): ButtonPosition => {
      return calculateButtonPosition(index, NUMBER_OF_BUTTONS, powerButtonSize, isOpen, windowState);
    },
    [NUMBER_OF_BUTTONS, powerButtonSize, isOpen, windowState],
  );

  const handleMenuButtonClick = useCallback((triggeredElement): void => {
    triggeredElement.preventDefault();
    const selectedButtonElement = triggeredElement.target as HTMLDivElement;
    
    setActiveButton(selectedButtonElement);

    setStepSelected(selectedButtonElement.id);
  }, []);

  const services: MenuButtonProps[] = [
    {
      buttonName: ReviewContentView.DataAnalytics,
      img: 'images/Button/Menu_List/Map.png',
      position: setButtonPosition(0),
    },
    {
      buttonName: ReviewContentView.Resume,
      img: 'images/Button/Menu_List/CV.png',
      position: setButtonPosition(1),
    },
    {
      buttonName: ReviewContentView.UserExperimentDesign,
      img: 'images/Button/Menu_List/UX.png',
      position: setButtonPosition(2),
    },
    {
      buttonName: ReviewContentView.UserInterfaceDesign,
      img: 'images/Button/Menu_List/UI.png',
      position: setButtonPosition(3),
    },
  ];

  return (
    <Fragment>
      {services.map(({ buttonName, position, img }: MenuButtonProps) => {
        return (
            <Button
              key={buttonName}
              onClick={handleMenuButtonClick}
              style={{
                transform: `translate(${position.buttonXPosition}px, ${position.buttonYPosition}px)`,
              }}
              icon={img}
              buttonName={buttonName}
            />
        );
      })}
      ;
    </Fragment>
  );
}

export default memo(RenderMenuButtons);
