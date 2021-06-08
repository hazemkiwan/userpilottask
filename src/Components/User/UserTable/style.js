import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    table: {
    },
    userAreaRoot: {
        width: '85%',
        margin: '0 auto',
        border: '1px solid #DFE0EB',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        borderRadius: '8px',
        marginTop: '30px'
    },
    userAreaHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 15px'
    },
    userFilterField: {
        width: '200px',
        marginRight: '5px'
    }
}));

export { useStyles };