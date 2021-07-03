import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";
const theme = createMuiTheme({
    palette: {
        primary:{
            main: blue[800]
        },
        secondary: {
            main:orange[200]
        } 
        
    }
})
export default theme;