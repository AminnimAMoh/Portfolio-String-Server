import React, { memo, useMemo, useState } from 'react';

import useStyle from './AppStyle';
import { Snackbar, Slide } from '@material-ui/core';

//Importing the redux store type.
import { RootState } from '@hooks/useRootInfo/store';
import { useSelector, useDispatch } from 'react-redux';
import { rowGridToggleToReverse } from '@hooks/useRootInfo/redux/slices/ScreenSettingsSlice';
import { readDataAgain } from '@hooks/useRootInfo/redux/slices/fetchSlice';
import { useMediaQuery } from '@material-ui/core';

// import MenuButton from './views/MenuButton';
import ReviewContentJourney from '@pages/ReviewContentJourney/ReviewContentJourney';

const DataFetchPending = React.lazy(() => import('./components/PendingIndicator/PendingIndicator'));

function TransitionUp(props: any | undefined | null) {
  return <Slide {...props} direction="up" />;
}

function App(): React.ReactElement {
  // console.clear();
  const [svgSetupTrigger, setSVGSetupTrigger] = useState<boolean>(false);
  const [snackState, setSnackState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const windowState = useMediaQuery('(max-width:1280px)');

  const {
    buttonAction: { rootState, buttonTriggered },
    dataStore: { annualrain, slums, population, months },
  } = useSelector((state: RootState) => state);
  const classes = useStyle();

  useMemo(() => {
    if (windowState) {
      dispatch(rowGridToggleToReverse(window.innerWidth));
    }
  }, [windowState]);

  useMemo(() => {
    annualrain.state === 'fulfilled' &&
      slums.state === 'fulfilled' &&
      population.state === 'fulfilled' &&
      months.state === 'fulfilled' &&
      setSVGSetupTrigger(true);

    (annualrain.state === 'rejected' ||
      slums.state === 'rejected' ||
      population.state === 'rejected' ||
      months.state === 'rejected') &&
      setSnackState(true);
  }, [annualrain.state, slums.state, population.state, months.state]);

  //This function controls click action on the snack bar.
  const snackBarRefreshAction = () => {
    //First we set the 'refresh state of the 'fetchSlice' action to trigger the fetch
    //action on the asyncThunk function with state 'rejected'.
    //In this case only the rejected API will be called, not the rest. 🤯
    //More detail at 'fetchSlice.tsx'.
    dispatch(readDataAgain());
    //Close the snack bar.
    setSnackState(false);
  };

  return (
    <div className={rootState ? `${classes.root} open` : `${classes.root} close`}>
      {!svgSetupTrigger && buttonTriggered === 'D3' && (
        <div className={classes.loading}>
          <DataFetchPending />
        </div>
      )}
      <Snackbar
        open={snackState}
        TransitionComponent={TransitionUp}
        message={`Failed to fetch data. Click here to try again.`}
        onClick={snackBarRefreshAction}
        classes={{ root: classes.snackbar }}
      />
      <ReviewContentJourney />
    </div>
  );
}

export default memo(App);
