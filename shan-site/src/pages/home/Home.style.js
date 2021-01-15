import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles((theme) => ({
    homeContainer: {
        display: 'flex',
        height: '100vh',
        maxHeight: '-webkit-fill-available',
        minHeight: 'fit-content',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    welcomeText: {
        // color: theme.palette.primary.dark
    },
    profilePic: {
        display: "block",
        borderRadius: '50%',
        maxHeight: '300px',
        maxWidth: '100%',
        height: 'auto',
        width: 'auto',
        boxShadow: `0px 0px 30px ${theme.palette.primary.light}`,
        objectFit: "cover",
        objectPosition: "center",
        marginBottom: theme.spacing(2)
    },
}))

export default style;