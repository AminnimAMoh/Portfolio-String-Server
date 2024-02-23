import React, { PropsWithChildren, ReactElement, createContext, useContext, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';

const JourneyTrackingContext = createContext<Nullable<string>>(null);

export const JourneyTrackingProvider = ({ children }: PropsWithChildren<unknown>): ReactElement => {
  const journeyIdRef = useRef<Nullable<string>>(null);

  if (!journeyIdRef.current) {
    journeyIdRef.current = uuidV4();
  }

  return <JourneyTrackingContext.Provider value={journeyIdRef.current}>{children}</JourneyTrackingContext.Provider>;
};

export const useJourneyId = (): Nullable<string> => {
  const journeyId = useContext(JourneyTrackingContext);

  return journeyId;
};
