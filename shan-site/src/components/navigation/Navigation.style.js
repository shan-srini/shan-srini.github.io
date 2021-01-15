import { makeStyles } from '@material-ui/core/styles'

const transformBreakpoint = 'xs'

const style = makeStyles((theme) => ({
    hideOnSmall: {
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    navBar: {
        backgroundColor: theme.palette.background.default,
        height: theme.spacing(8),
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 10),
        alignItems: 'center',
        [theme.breakpoints.down(transformBreakpoint)]: {
            padding: theme.spacing(0, 4)
        }
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'block'
        }
    },
    navBarItem: {
        cursor: 'pointer',
        color: 'white',
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    },
    logoContainer: {
        order: 0,
        flexGrow: 3,
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        borderRadius: '50%',
        transition: 'transform .3s ease-in-out',
        '&:hover': {
            transform: 'translate3d(0px, -3px, 0px)',
            boxShadow: `0px 1px 10px ${theme.palette.secondary.main}`
        }
    },
    about: {
        order: 1,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    projects: {
        order: 2,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    work: {
        order: 3,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    volunteer: {
        order: 4,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    collapsedPageNavBarOptions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    fullSizeNavBarOptions: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    externalNavigationContainer: {
        position: 'absolute',
        left: theme.spacing(2),
        bottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 'fit-content',
        width: 'fit-content',
        padding: theme.spacing(3, 3, 2, 3)
    },
    resumeContainer: {
        position: 'absolute',
        right: theme.spacing(2),
        bottom: theme.spacing(2),
        padding: theme.spacing(3, 3, 2, 0),
        height: 'fit-content',
        width: 'fit-content'
    },
    icon: {
        fontSize: '30px'
    }
}))

export default style;