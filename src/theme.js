import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#0c1117',
        },
        primary: {
            dark: '#3d74b2',
            main: '#58a6ff',
            light: '#79b7ff'
        },
        text: {
            primary: '#FFFFFF'
        }
    },
});

export default theme;