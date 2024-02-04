import React, { useRef, memo, useCallback, useEffect } from "react";
import { RootState } from "../../store";
import useStyle from "./style";
import useMeasure from "react-use-measure";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";

import {
  containerStateToggle,
  onDelayStateChange,
  // addButtonsPosition
} from "../../redux/slices/buttonActionSlice";
import MenuButtons from "./MenuButtons/MenuButtons";
import { MenuButtonsProps } from "./MenuButtons/MenuButtons.interface";
import useToggle from "@hooks/useToggle/useToggle";

// import { Positions } from "./types";
// import { Typography } from "@material-ui/core";

function MenuButton(): React.ReactElement {
  const classes = useStyle();
  const dispatch: AppDispatch = useDispatch();

  useEffect(()=>{
    console.log('HomeScreen is rendered');
  }, [])

  // const [showInfo, setShowInfo] = useState<boolean>(false);
  // const [buttonPositions, setButtonsPosition] = useState<Positions[]>([
  //   { x: 0, y: 0 },
  // ]);
  const parentElement = useRef<HTMLDivElement>(null);
  const {
    buttonAction: { rootState, delayState, data },
    screenAction: { screenState },
  } = useSelector((state: RootState) => state);
  const [buttonMeasures, { width }] = useMeasure();
  const [powerState, togglePowerState] = useToggle(false);

  const handlePowerClick = useCallback(() => {
    const parentChilrdernLength = parentElement.current?.childElementCount;
    const prentArray = parentElement.current?.children;
    if (parentChilrdernLength && prentArray) {
      for (let i = 1; i < parentChilrdernLength; i++) {
        prentArray[i].children[0].classList.remove("focused");
      }
    }
    if (rootState) {
      dispatch(containerStateToggle("PowerButton"));
      setTimeout(() => {
        dispatch(onDelayStateChange());
      }, 500);
    } else {
      togglePowerState();
    }
  }, []);

  return (
    <div
      className={classes.root}
      ref={parentElement}
      style={
        screenState === "wide" && !rootState && !delayState
          ? { paddingRight: 0 }
          : screenState === "limited" && !rootState
          ? { paddingTop: 0 }
          : {}
      }
    >
      <div
        className={
          powerState
            ? `${classes.powerButton} open`
            : `${classes.powerButton} close`
        }
        onClick={handlePowerClick}
        // onMouseOver={() => setShowInfo(true)}
        // onMouseOut={() => setShowInfo(false)}
      >
        <img
          ref={buttonMeasures}
          src="images/Button/Menu_Trigger/Power_Button-Stoke.png"
          alt="content-asset"
        />
      </div>

      {data.map((props: MenuButtonsProps, index: number) => {
        return (
          <MenuButtons
            key={props.name}
            {...props}
            index={index}
            isOpen={powerState}
            buttonCount={data.length}
            buttonSize={width}
          />
        );
      })}
    </div>
  );
}

export default memo(MenuButton);
