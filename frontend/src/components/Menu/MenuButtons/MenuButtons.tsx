import React, { memo, useCallback } from 'react';
import { ReviewContentView } from '@pages/ReviewContentJourney/ReviewContentJourney.constants';
import { setActiveButton } from '../Menu.utils';
import { useReviewContentStore } from '@pages/ReviewContentJourney/ReviewContentStore/ReviewContentStore';
import { MenuButtonProps } from './MenuButton.interface';
import { StyledMenuButton, StyledMenuButtonsContainer } from './MenuButton.styled';

function RenderMenuButtons() {
  const { powerButtonState: isOpen, powerButtonSize, setStepSelected } = useReviewContentStore();

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
    },
    {
      buttonName: ReviewContentView.Resume,
      img: 'images/Button/Menu_List/CV.png',
    },
    {
      buttonName: ReviewContentView.UserExperimentDesign,
      img: 'images/Button/Menu_List/UX.png',
    },
    {
      buttonName: ReviewContentView.UserInterfaceDesign,
      img: 'images/Button/Menu_List/UI.png',
    },
  ];

  return (
    <StyledMenuButtonsContainer>
      {services.map(({ buttonName, img }: MenuButtonProps, index) => {
        return (
          <StyledMenuButton
            key={buttonName}
            onClick={handleMenuButtonClick}
            positionMetrics={{ index: index, size: powerButtonSize, state: isOpen }}
            icon={img}
            buttonName={buttonName}
            squareSize="small"
          />
        );
      })}
    </StyledMenuButtonsContainer>
  );
}

export default memo(RenderMenuButtons);
