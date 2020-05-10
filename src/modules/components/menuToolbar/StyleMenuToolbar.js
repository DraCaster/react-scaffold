import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;

export const styles = makeStyles(theme => ({
    container:{
      height: "100vh",
        backgroundColor: "#c9c1ab",
        flexGrow: 1,
    },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        paddingLeft:5
      },
      root: {
        display: 'flex',
      },
      hide:{
        display:'none',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      Typography:{
        color: '#ffffff',
      },
      link:{
        textDecoration: 'none',
      },
  }));

  