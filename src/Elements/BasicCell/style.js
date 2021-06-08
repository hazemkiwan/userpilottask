import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    basicCellMainContent: {
        color: theme.colors.primary,
        fontSize: '16px'
    },
    basicCellSubContent: {
        color: theme.colors.secondery,
        fontSize: '14px'
    }
}));

export { useStyles };