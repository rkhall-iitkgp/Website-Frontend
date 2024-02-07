import { makeStyles } from '@mui/styles';
import { Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
// import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';
const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
// const theme = createTheme();
const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 50,
    color: '#fff',
    backgroundColor: '#000',
  },
}));

const ScrollToTopButton = () => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.root}
      onClick={handleScrollToTop}
    >
      <KeyboardArrowUp />
    </Fab>
  );
};

export default ScrollToTopButton;