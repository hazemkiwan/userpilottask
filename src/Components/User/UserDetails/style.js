import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      userDetailsDrawer: {
        position: "relative"
      },
      userDetailsDrawerContent: {
        width: "300px",
        textAlign: "center"
      },
      userDetailsDrawerAvatarContainer: {
        position: 'relative',
        height: '160px',
        backgroundColor: '#528CFC'
      },
      userDetailsDrawerAvatar: {
        position: 'absolute', 
        left: '0', 
        right: '0', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        width: '70px',
        height: '70px',
        top: '125px'
      },
      userDetailsDrawerMainTitle: {
        color: theme.colors.primary,
        fontSize: '18px',
        marginTop: '40px'
      },
      userDetailsDrawerSubTitle: {
        color: theme.colors.secondery,
        fontSize: '14px'
      }
}));

export { useStyles };