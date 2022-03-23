import { createTheme, palette } from "@mui/system";
import "@fontsource/raleway";
import "@fontsource/mulish";

const SeconDark = '#5C5C5C';
const primLight = '#fff';
const primMain = '#959595';
const primDark = '#272727';

const theme = createTheme({
    palette:{
        ...palette,
        common:{
            white:primLight,
        },
        text:{
            primary:'raleway',
        },
        background:{
            default:primLight,
        },
        action: {
            focus: "#e6e6e6",
        },
        primary:{           //grey colors
            light:primLight,
            main:primMain,
            dark:primDark,
            contrastText:'#000',
        },
        secondary:{         //other colors
            light:'#FAFAFE',
            main:'#B5B5B5',
            dark:SeconDark,
            contrastText:'#F5F3FB',
        },
        info:{              //purple
            light:'#E6DCFD',
            main:'#B091F9',
            dark:'#7942FB',
        },
        error:{             //pink
            main:'#ED5B75',
        },
        success:{           //green
            main:'#4FDFB1',
        },
        warning:{           //yellow
            main:'#FBB142',
            dark:'#F7E08E',
        },
    },
    typography:{
        //fontFamily:'raleway,mulish',
        h1:{
            fontFamily:'raleway',
            color:SeconDark,
            fontWeight:'700',
            fontSize:'25px',
        },
        h4:{
            color:primLight,
            fontFamily:'mulish',
            fontWeight:'800',
        },
        h5:{
            color:primLight,
            fontFamily:'mulish',
            fontWeight:'600',
        },
        h6:{
            fontFamily:'raleway',
            fontWeight:'600',
            color:primDark,
        },
        body1:{
            color:primDark,
            fontFamily:'raleway',
            fontWeight:'700',
        },
        body2:{
            color:primLight,
            fontFamily:'mulish',
            fontWeight:'300',
        },
        subtitle1:{
            color:primMain,
            fontFamily:'mulish',
            fontWeight:'600',
        },
        subtitle2:{
            color:primMain,
            fontFamily:'mulish',
            fontWeight:'600',
        },
        caption:{
            color:primLight,
            fontfamily:'raleway',
            fontWeight:'700',
        },
    },
    components:{
        MuiList:{
            styleOverrides:{
                root:{
                    padding:'0',
                    margin :'0',
                    width:'100%',
                },
            },
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    width:'100%',
                    boxSizing:'border-box',
                    padding:'1rem 0',
                    margin:'1rem 0 ',

                },
            },
        },
        MuiListItemIcon:{
            styleOverrides:{
                root:{
                    display:'flex',
                    justifyContent:'center',
                    minWidth:'100%',
                },
            },
        },
        MuiCard:{
            styleOverrides:{
                root:{
                    backgroundColor:primLight,
                    borderradius:'10px',
                    padding:'.75rem',
                    width:'100%',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
              body: {
                margin: 0,
                padding: 0,
              },
            },
        },
    },
});
export default theme;