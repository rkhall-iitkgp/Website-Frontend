import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';

const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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