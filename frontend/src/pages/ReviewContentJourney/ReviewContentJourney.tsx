import React, { memo } from 'react';
import { JourneyTrackingProvider } from './ReviewContenJourneyTracking/ReviewContenJourneyTracking';
import { ReviewContentStoreProvider } from './ReviewContentStore/ReviewContentStore';
import { DEFAULT_REVIEW_CONTENT_STORE } from './ReviewContentStore/ReviewContentStore.constants';
import ReviewContentRender from './ReviewContentRender/ReviewContentRender';

function ContentJourney() {
  return (
    <JourneyTrackingProvider>
      <ReviewContentStoreProvider store={{ ...DEFAULT_REVIEW_CONTENT_STORE }}>
        <ReviewContentRender />
      </ReviewContentStoreProvider>
    </JourneyTrackingProvider>
  );
}

export default memo(ContentJourney);
