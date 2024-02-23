import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  powerButton: {
    cursor: 'pointer',
    zIndex: 2,
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '18%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '25%',
    },
    '&>img': {
      width: '100%',
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      top: '10%',
      bottom: 0,
      left: '10%',
      right: 0,
      width: '80%',
      height: '80%',
      borderRadius: '50%',
      opacity: 1,
      filter: 'blur(10px)',
      transition:
        'background-color 1s cubic-bezier(0, 1.51, 0.12, -0.29), -webkit-filter 2000ms cubic-bezier(0, 1.51, 0.12, -0.29)',
    },
    '&.open': {
      '&::before': {
        filter: 'blur(15px)',
        transform: 'scale(1.05)',
        backgroundColor: '#12393D',
      },
    },
    '&.close': {
      '&::before': {
        filter: 'blur(5px)',
        backgroundColor: '#E4E5E7',
      },
    },
  },
}));

export default useStyle;
