import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    workPageContainer: {
        position: 'relative',
        height: '100%',
        padding: theme.spacing(5, 10),
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(5, 1)
        }
    },
    tab: {
        width: '50%'
    }
}))

export default style;