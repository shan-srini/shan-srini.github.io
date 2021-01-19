import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    footerContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'fit-content',
        backgroundColor: 'black',
        alignItems: 'center',
        padding: theme.spacing(2, 12, 6, 12),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 2, 5, 2)
        },
    },
    footerName: {
        letterSpacing: '6px',
        fontWeight: '800',
        fontSize: '1rem',
        alignSelf: 'flex-start'
    },
    footerButton: {
        width: '100%',
        maxWidth: '700px',
        transition: 'all .2s ease-in',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    footerLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export default style;