import { Box, Typography } from "@mui/material";
import React from "react";

export default function MyCard(){
    return(
        <Box sx={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
            <Box sx={{background: 'rgba(239, 232, 255, 0.95)',height:'25vh',width:'90%',borderRadius:'20px'}}>
                <Box sx={{background: 'linear-gradient(68.24deg, #7942FB -3.47%, #B091F9 103.83%)',height:'23vh',width:'110%',marginLeft:'-5%',borderRadius:'20px',boxSizing:'border-box',position:'relative'}}>
                    <svg width="120" height="100" viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:"absolute",top:'0',right:'0'}}>
                        <circle cx="38.025" cy="15.625" r="31.2375" stroke="url(#paint0_linear_0_191)" stroke-opacity="0.8" stroke-width="12.25"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_191" x1="38.025" y1="-21.7375" x2="38.025" y2="52.9875" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.28"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <svg width="60" height="80" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:"absolute",bottom:'0',left:'0'}}>
                        <circle cx="6.34999" cy="38.3125" r="31.2375" stroke="url(#paint0_linear_0_190)" stroke-opacity="0.8" stroke-width="12.25"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_190" x1="6.34999" y1="0.949989" x2="6.34999" y2="75.675" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.28"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                    <Box sx={{padding:'1rem',position:'absolute',top:'0',left:'0',width:'100%'}}>
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
        </Box>   
    );
}