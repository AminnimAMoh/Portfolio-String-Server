import styled from 'styled-components';

export const root = styled.div`
  width: "100%",
  display: "flex",
  flexFlow: "row-reverse",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 1s ease-in",
  marginLeft: 0,
  marginRight: "auto",
  direction: "ltr",
  `;
export const topic_grid = styled.div`
  color: "white",
  '& > .MuiGrid-item img': {
    width: '100%'
  },
  '&>*': {
    padding: theme.spacing(4)
  },
  '&>*:nth-child(n+4)': {
    paddingTop: theme.spacing(20)
  },
},
`;
export const onlineLink = styled.div``;
export const link_ToExternals = styled.div`
  color: '#5C3B42';
`;

export const inner_GridContainer = styled.div`
  '& > *': {
    paddingTop: theme.spacing(10)
    `;
export const video_container = styled.div`
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: -1,
  `;
export const video_root = styled.div`
  width: '100%',
  position: 'relative',
  `;
export const video_responsive = styled.div`
overflow: 'hidden',
/* 16:9*/
position: 'relative',
width: '100%',
`;
export const divider = styled.div`
  backgroundcolor: 'white !important';
`;
