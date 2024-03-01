import React, { useCallback, memo } from 'react';
import { useReviewContentStore } from '../ReviewContentStore/ReviewContentStore';
import { ReviewContentStore } from '../ReviewContentStore/ReviewContentStore.interface';
import { ReviewContentView } from '../ReviewContentJourney.constants';
import { CV, D3, UI, UX, Undeveloped } from '../ReviewContenPageContent';
import useStyle from './ReviewContent.style';

function ReviewContent() {
  const classes=useStyle()
  const { step }: ReviewContentStore = useReviewContentStore();

  const pageContent = useCallback(() => {
    switch (step) {
      case ReviewContentView.UserExperimentDesign:
        return <UX />;
      case ReviewContentView.UserInterfaceDesign:
        return <UI />;
      case ReviewContentView.DataAnalytics:
        return <D3 />;
      case ReviewContentView.Resume:
        return <CV />;
      default:
        return <Undeveloped />;
    }
  }, [step]);

  return (
    <div className={step === ReviewContentView.Default ? `${classes.root} close` : `${classes.root} open`}>
      {pageContent()}
    </div>
  );
}

export default memo(ReviewContent);
