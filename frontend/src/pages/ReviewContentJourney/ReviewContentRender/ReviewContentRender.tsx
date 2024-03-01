import Menu from '@components/Menu/Menu';
import React, { memo } from 'react';
import ReviewContent from '../ReviewContent/ReviewContent';
import useStyle from './ReviewContentRender.styles';
import { useReviewContentStore } from '../ReviewContentStore/ReviewContentStore';
import { ReviewContentStore } from '../ReviewContentStore/ReviewContentStore.interface';
import { ReviewContentView } from '../ReviewContentJourney.constants';

function ReviewContentMenu() {
  const classes = useStyle();
  const { powerButtonState, step }: ReviewContentStore = useReviewContentStore();
  const isReviewPageOpen=powerButtonState && step!=ReviewContentView.Default

  return (
    <div className={isReviewPageOpen ? `${classes.root} open` : `${classes.root} close`}>
      <Menu />
      <ReviewContent />
    </div>
  );
}

export default memo(ReviewContentMenu);
