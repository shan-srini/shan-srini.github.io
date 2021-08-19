import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    container: {
        padding: '5%',
        width: '100%',
        // paddingRight: 100,
        zIndex: 2,
        height: 'fit-content',
        color: 'azureblue',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
        // marginTop: 300
    }
}))

export default style;