import { Box, Typography } from "@mui/material";
import React from "react";

export default function MyCard(){
    return(
        <Box sx={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
            <Box sx={{background: 'rgba(239, 232, 255, 0.95)',height:'25vh',width:'90%',borderRadius:'20px'}}>
                <Box sx={{background: 'linear-gradient(68.24deg, #7942FB -3.47%, #B091F9 103.83%)',height:'23vh',width:'110%',marginLeft:'-5%',borderRadius:'20px',padding:'1rem',boxSizing:'border-box'}}>
                    <Typography variant='body1'sx={{color:'white'}} >Balance</Typography>
                    <Typography variant='h3'sx={{paddingBottom:'1rem',color:'white'}}>$521,652</Typography>
                    <Typography variant='body1' sx={{marginBottom:'-.2rem',color:'white'}}>Monthly Profit</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
                        <Typography variant='h4' sx={{color:'white'}} >$14,225</Typography>
                        <Box sx={{padding:'.25rem .5rem',borderRadius:'40%',backgroundColor:'rgba(255,255,255,0.3)',color:'white' }}>
                            <Typography variant='subtitle2'>+10%</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>   
    );
}