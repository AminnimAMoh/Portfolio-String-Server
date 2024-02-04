import React, { useCallback, useEffect, useMemo, useRef } from "react";
import useStyle from "./MenuButtons.style";
import { containerStateToggle } from "@redux/slices/buttonActionSlice";
import { useDispatch } from "react-redux";
import { MenuButtonsProps, buttonPosition } from "./MenuButtons.interface";
import { calculateButtonPosition } from "./MenuButtons.utils";
import { useMediaQuery } from "@material-ui/core";

const MenuButtons = ({
  name,
  img,
  index,
  isOpen,
  buttonCount,
  buttonSize,
}: MenuButtonsProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const classes = useStyle();
  const dispatch = useDispatch();
  const windowState = {
    rootState: useMediaQuery("(min-width:1280px)"),
    phase: useMediaQuery("(max-width:560px)"),
  };

  useEffect(()=>{
    console.log('buttonRender', name);
    
  }, [])

  const { buttonXPosition, buttonYPosition }: buttonPosition = useMemo(
    () =>
      calculateButtonPosition(
        index,
        buttonCount,
        buttonSize,
        isOpen,
        windowState
      ),
    [isOpen, buttonSize]
  );

  const handleClick = useCallback(() => {
    const buttonList = document.querySelectorAll(".makeStyles-iconButtons-14");
    const activatedButton = buttonRef.current;

    if (activatedButton) {
      buttonList.forEach((button: HTMLDivElement) => {
        button.classList.remove("focused");
      });

      activatedButton?.classList.add("focused");

      dispatch(containerStateToggle(activatedButton.id));
    }
  }, []);

  return (
    <div
      className={classes.buttonContainers}
      style={{
        transform: `translate(${buttonXPosition}px, ${buttonYPosition}px)`,
      }}
    >
      {/* {info != "" && (
      <div className={classes.introTexts_container}>
        <Typography
          variant="body1"
          className={
            showInfo && !powerState
              ? `${classes.introTexts_text} open`
              : `${classes.introTexts_text} close`
          }
        >
          {info}
        </Typography>
      </div>
    )} */}
      <div
        id={name}
        className={classes.iconButtons}
        ref={buttonRef}
        style={{
          width: 100,
          height: 100,
          backgroundImage: `url(${img})`,
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default MenuButtons;
