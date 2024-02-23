import React, {memo} from 'react';
import { JourneyTrackingProvider } from './ReviewContenJourneyTracking/ReviewContenJourneyTracking';
import ReviewContent from './ReviewContent/ReviewContent';
import Menu from '@components/Menu/Menu';
import { ReviewContentStoreProvider } from './ReviewContentStore/ReviewContentStore';
import { DEFAULT_REVIEW_CONTENT_STORE } from './ReviewContentStore/ReviewContentStore.constants';

function ContentJourney() {
  return (
    <JourneyTrackingProvider>
      <ReviewContentStoreProvider store={{ ...DEFAULT_REVIEW_CONTENT_STORE }}>
        <Menu />
        <ReviewContent />
      </ReviewContentStoreProvider>
    </JourneyTrackingProvider>
  );
}

export default memo(ContentJourney);
