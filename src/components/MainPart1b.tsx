import { MoreHorizOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InvestmentCards from "./InvestmentCards";

export default function MainPart1b(){
    return(
        <>
        <Box sx={{display:'flex',justifyContent:'space-between',marginBottom:'.75rem',alignItems:'center'}}> 
            <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'700',color:'#272727'}}>
                Investments Stats</Typography>
            <MoreHorizOutlined/>  
        </Box>
        <Box sx={{width:'100%',height:'85%',backgroundColor:'white',borderRadius:'10px ',boxSizing:'border-box',padding:'1.5rem 2rem'}}>
            <Box sx={{display:'flex',justifyContent:'space-between',height:'100%'}}>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <InvestmentCards/>
                </Box>
                <Box sx={{display:'flex'}}>
                    <Box sx={{height:'100%',width:'8rem',zIndex:'1',borderTop: '1px solid #F5F5F5',borderBottom: '1px solid #F5F5F5',position: 'relative' }}> 
                        <Box sx={{margin:'0 8%',width:'8%',height:'99%',borderRadius:'5px',backgroundColor:'#F6F6FA',display:'inline-block',position:'relative'}}> 
                            <Box sx={{position:'absolute',bottom:'0',borderRadius:'5px',width:'100%',backgroundColor:'#FBB142',height:'75%'}}></Box>
                        </Box>
                        <Box sx={{margin:'0 8%',width:'8%',height:'99%',borderRadius:'5px',backgroundColor:'#F6F6FA',display:'inline-block',position:'relative'}}>
                            <Box sx={{position:'absolute',bottom:'0',borderRadius:'5px',width:'100%',backgroundColor:'#4FDFB1' ,height:'90%'}}></Box>
                        </Box>
                        <Box sx={{margin:'0 8%',width:'8%',height:'99%',borderRadius:'5px',backgroundColor:'#F6F6FA',display:'inline-block',position:'relative'}}>
                            <Box sx={{position:'absolute',bottom:'0',borderRadius:'5px',width:'100%',backgroundColor:'#ED5B75',height:'55%'}}></Box>
                        </Box>
                    </Box>
                    <Box sx={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:'0.5rem'}}>
                        <Typography variant="subtitle2" component="div" sx={{color:'#B5B5B5',fontWeight:'500',fontFamily:'Mulish'}}>
                            Max</Typography>
                        <Typography variant="subtitle2" component="div" sx={{color:'#B5B5B5',fontWeight:'500',fontFamily:'Mulish'}}>
                            Min</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
}