import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    collapsedCard: {
        position: 'relative',
        borderRadius: '15px',
        height: '30%',
        maxHeight: '200px',
        width: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: theme.spacing(2),
        // backgroundColor: 'rgba(0, 0, 0, .3)',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    collapsedProjectDescriptionContainer: {
        padding: theme.spacing(1),
        // backgroundColor: 'rgba(17, 157, 244, .8)',
        backgroundColor: 'rgba(0, 0, 0, .8)',
        borderRadius: '15px',
        zIndex: 2,
        width: '500px',
        position: 'absolute',
        left: '70%',
        top: '50%',
        transform: 'translateY(-50%)',
        maxWidth: '150%',
        height: 'fit-content',
        [theme.breakpoints.down('xs')]: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            transform: 'translateY(0)',
            width: '100%',
            height: '100%'
        }
    },
    collapsedExternalLinks: {
        marginTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        width: '100%',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
            bottom: theme.spacing(1),
        }
    },
    externalLink: {
        cursor: 'pointer',
        marginRight: theme.spacing(1),
        transition: 'transform .25s linear',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    collapsedFullScreenIcon: {
        position: 'absolute',
        right: '16px'
    },
    gitLinksContainer: {
        backgroundColor: theme.palette.grey[900],
        padding: theme.spacing(1, 2),
        margin: 0,
        textAlign: 'center',
        listStyleType: 'none',
    },
    gitLink: {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
        borderBottom: '1px solid white'
    },
    openCardContainer: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100vh',
        height: '-webkit-fill-available',
        height: 'fill-available',
        height: '-moz-available',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, .75)',
        scrollBehavior: 'none',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: theme.zIndex.appBar + 100,
        padding: theme.spacing(2, 5),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2, 0),
        }
    },
    expandedQuickDescription: {
        border: `1px solid ${theme.palette.primary.light}`,
        padding: theme.spacing(1),
        maxWidth: '75vw',
        marginTop: theme.spacing(1),
        color: theme.palette.primary.main,
        backgroundColor: 'black'
    },
    expandedFullDescription: {

    },
    expandedTitle: {
        position: 'absolute',
        top: '30%',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        padding: '4px',
        borderRadius: '15px'
    },
    closeIcon: {
        position: 'absolute',
        top: '16px',
        right: '16px'
    },
    expandedExternalLinks: {
        marginTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        width: '100%',
        display: 'flex',
    }
}))

export default style;