import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    projectsPageContainer: {
        position: 'relative',
        height: '100%',
        minHeight: '800px',
        padding: theme.spacing(5, 10),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(5, 1),
        }
    }
}))

export default style;