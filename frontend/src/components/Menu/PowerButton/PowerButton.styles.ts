import Button from '@frontend-common/components/Button/Button';
import styled from 'styled-components';

export const StyledPowerButton = styled(Button)`
  z-index: 2;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 35px;
    bottom: 0;
    left: 35px;
    right: 0;
    width: 330px;
    height: 330px;
    transform: scale(1);
    border-radius: 50%;
    opacity: 1;
    filter: blur(10px);
    transition: ${(props)=> props.theme.animation.cubic[100]}
  }

  ,
  &.open {
    &::before {
      filter: blur(15px);
      transform: scale(1.05);
      background-color: ${(props)=> props.theme.palette.red[400]};
      opacity: .5;
      }};
    }
  }

  &.close {
    &::before {
      filter: blur(5px);
      background-color: ${(props)=> props.theme.palette.grey[100]};
    }
  }
`;
