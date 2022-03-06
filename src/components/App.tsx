import * as React from "react"
import "@fontsource/raleway";
import "@fontsource/mulish";
import SideBAR from "../components/SideBAR"
import Header from "../components/Header"
import Aside from "../components/aside";
import MainPart1a from "./MainPart1a";
import MainPart1b from "./MainPart1b";
import MainPart2a from "./MainPart2a";
import MainPart2b from "./MainPart2b";
import { Box, Grid } from "@mui/material";

export default function App(){
    return (
        <div>
            <Box sx={{display: 'flex',height:'100vh'}}>
                <Box sx={{flex:'6vw',borderRight:'2px solid #F5F3FB',display:'flex',justifyContent:'space-between',flexDirection:'column',height:'100%'}}>
                    <SideBAR/>
                </Box>
                <Box sx={{flex:'94vw',display:'flex',flexDirection:'column'}}>  
                    <Box style={{flex:'10vh',backgroundColor:'white',color:'black',borderBottom:'2px solid #F5F3FB'}}>
                        <Header/>
                    </Box>    
                    <Box sx={{flex:'90vh',display:'flex',width:'100%'}}>
                        <Box sx={{flex:'70vw',backgroundColor:'#fafafe',display:'flex',flexDirection:'column',height:'100%',padding:'2.5rem 1.5rem 1.5rem'}}>
                            <Box sx={{flex:'4fr',display:'flex',width:'100%',marginBottom:'2rem'}}>
                                <Box sx={{flex:'1fr',width:'100%',marginRight:'1.5rem'}}><MainPart1a/></Box>
                                <Box sx={{flex:'1fr',width:'100%'}}><MainPart1b/></Box>
                            </Box>
                            <Box sx={{flex:'5fr',display:'flex',width:'100%'}}>
                                <Box sx={{flex:'1fr',width:'50%',marginRight:'1.5rem'}}><MainPart2a/></Box>
                                <Box sx={{flex:'3fr',width:'150%'}}><MainPart2b/></Box>
                            </Box>        
                        </Box>
                        <Box sx={{flex:'24vw',borderLeft:'2px solid #F5F3FB',padding:'2.5rem 1.5rem 1.5rem',display:'flex',justifyContent:'space-between',flexDirection:'column',height:'100%'}}>
                            <Aside/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}


