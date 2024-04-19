import styled from 'styled-components';

export const StyledMenuContainer = styled.div`
  box-sizing: content-box;
  position: relative;
  padding: 0 ${(props) => props.theme.spacing(20)};
  z-index: 1;
  transition: ${(props) => props.theme.animation.liner[100]};

  @media ${(props) => props.theme.breakpoint.m} {
    padding-top: ${(props) => props.theme.spacing(15)};
  }

  @media ${(props) => props.theme.breakpoint.s} {
    padding-top: ${(props) => props.theme.spacing(7)};
  }

  @media ${(props) => props.theme.breakpoint.xs} {
    padding-top: ${(props) => props.theme.spacing(1)};
  }
`;

// export const menuButtons = styled.div`
//   position: 'absolute';
// `;
// export const textOnPath = styled.div`
// position: "absolute",
// "&>path": {
//   transform: "translate(-693.7247px, -269.9313px)",
//   // fill: 'transparent',
// },
// "&>text": {
//   fill: "white",
// },
// },
// `;
// export const introTexts_container = styled.div`
// position: "absolute",
// width: "max-content",
// transform: "translate(0, -50%)",
// top: "50%",
// left: "100%",
// paddingLeft: theme.spacing(2),
// zIndex: -3,
// },
// `;
// export const introTexts_text = styled.div`
// position: "relative",
// zIndex: 0,
// display: 'block',
// color: '#e4e5e7',
// padding: theme.spacing(1, 1, 1, 2),
// "&::before": {
//   content: '""',
//   display: "block",
//   // backgroundColor: "#e4e5e7",
//   position: "absolute",
//   top: 0,
//   bottom: 0,
//   left: "-40%",
//   right: 0,
//   zIndex: -3,
//   borderRadius: '6px'
// },
// "&::after": {
//   content: '""',
//   display: "block",
//   backgroundColor: "#061621",
//   position: "absolute",
//   transform: "scale(1.1)",
//   top: 0,
//   bottom: 0,
//   left: "-30%",
//   right: 0,
//   zIndex: 1,
//   transition: 'width 1s ease-in-out 1.1s, transform 1s ease-in-out'
// },
// "&.open": {
//   "&::after": {
//     width: 0,
//     transform: 'translateX(100%) scale(1.1)',
//   },
// },
// "&.close": {
//   "&::after": {
//     width: '130%',
//     transform: 'translateX(0) scale(1.1)'
//   },
// },
// },
// }));
// `;
