import Menu from '@components/Menu/Menu';
import React, { memo } from 'react';
import ReviewContent from '../ReviewContent/ReviewContent';
import { useReviewContentStore } from '../ReviewContentStore/ReviewContentStore';
import { ReviewContentStore } from '../ReviewContentStore/ReviewContentStore.interface';
import { ReviewContentView } from '../ReviewContentJourney.constants';
import { StyledContainer } from './ReviewContentRender.styles';

function ReviewContentMenu() {
  const { powerButtonState, step }: ReviewContentStore = useReviewContentStore();
  const isReviewPageOpen = powerButtonState && step != ReviewContentView.Default;
  
  return (
    <StyledContainer
      className={isReviewPageOpen ? 'open' : 'close'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction="row"
    >
      <ReviewContent/>
      <Menu />
    </StyledContainer>
  );
}

export default memo(ReviewContentMenu);
