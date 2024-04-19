import styled from 'styled-components';
import { ButtonProps, ButtonSize } from './Button.interface';

const MIN_BUTTON_SIZE = 100;
const getButtonSize = (prop: ButtonSize): number => (prop === 'large' ? MIN_BUTTON_SIZE * 4 : MIN_BUTTON_SIZE);
const buttonSize = (props: ButtonProps) => getButtonSize(props.squareSize);

export const ButtonContainerStyled = styled.div`
  transition: transform 1s ease-in-out;
`;

export const IconButtonsStyles = styled.div<ButtonProps>`
  position: relative;
  background-image: url(${(props) => props.icon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  width: ${buttonSize}px;
  height: ${buttonSize}px;

  &::after, &::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
  }
  
  &::after {
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: scale(${(props)=> -0.000633*buttonSize(props) + 1.1132});
    background: linear-gradient(155deg, rgba(122, 145, 147, 1) 0%, rgba(6, 22, 33, 1) 100%);
    transition: transform .5s ease-in; filter 500ms linear;
    -webkit-transition:
    -webkit-filter 500ms linear; -webkit-transform .5s ease-in;
  };
  
  &::before {
    top: -1px;
    left: -1px;
    z-index: -2;
    background: rgba(0,0,0,.5);
    filter: blur(12px);
    transition: transform .2s ease-in-out;
  };

  &:hover, &:focus {
    &::after {
      transform: rotate(180deg) scale(${(props)=> (-0.000633*buttonSize(props) + 1.1132)+.04});
      filter: blur(3px);
    };
    &::before{
      transform: scale(1.2);
      background: rgba(18,57,61,.2);
    };
  };
  &.focused {
    &::before {
      transform: scale(1.2);
      filter: blur(12px);
      background: rgba(18,57,61,1);
    };
  };
`;
