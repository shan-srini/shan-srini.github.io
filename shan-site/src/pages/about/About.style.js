import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    aboutPageContainer: {
        height: '100vh',
        minHeight: '600px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(5, 10),
        transition: 'background-color 0.75s cubic-bezier(0.8, 0, 0.2, 1) 0s',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            padding: theme.spacing(0, 3)
        },
    },
    aboutMeCardsGridContainer: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
        height: '100%',
        width: '80%',
        [theme.breakpoints.down('xs')]: {
            height: '80%',
            width: '100%',
        }
    }
}))

export default style;