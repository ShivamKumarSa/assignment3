import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import LineChart from "./graph";
import MyPortfolioCards from "./MyPortfolioCards";

export default function MainPart2b(){
    return(
        <>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
                <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'700',color:'#272727'}}>
                    My Portfolio</Typography>
                <Box>
                <ArrowBackIos sx={{color:'#000',backgroundColor:'#fff',borderRadius:'50%',padding:'.5rem',fontSize:'2rem',marginRight:'1rem'}}/>
                <ArrowForwardIos sx={{color:'#fff',backgroundColor:'#7942FB',borderRadius:'50%',padding:'.5rem',fontSize:'2rem',}}/>
                </Box>       
            </Box>
            <Box sx={{overflowX:'hidden',width:'100%'}}>
                <Box sx={{width:'120%',display:'flex',justifyContent:'space-between',}}>
                    <MyPortfolioCards/>
                </Box>
            </Box>
            <Box sx={{marginTop:'1rem',backgroundColor:'white',width:'100%',height:'14rem',borderRadius:'10px',boxSizing:'border-box',padding:'1rem 1.5rem' }}>
                <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'600',color:'#272727'}}>
                    Total Distributions</Typography>
                <Box sx={{width:'90%'}}>
                    <LineChart/>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-around',color:'#959595',marginTop:'-10px'}}>
                    <Typography variant="caption">Mon</Typography>
                    <Typography variant="caption">Tue</Typography>
                    <Typography variant="caption">Wed</Typography>
                    <Typography variant="caption">Thu</Typography>
                    <Typography variant="caption">Fri</Typography>
                    <Typography variant="caption">Sat</Typography>
                    <Typography variant="caption">Sun</Typography>
                </Box>
            </Box>
        </>
    );
}