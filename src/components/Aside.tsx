import { Circle, MoreHorizOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MyCard from "./MyCard";
import TopPickCards from "./TopPickCards";

export default function Aside(){
    return(
        <>
            <Box>
                <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'700',color:'#272727'}}>
                    My Cards
                </Typography>
                <MyCard/>
                <Box sx={{display:'flex',justifyContent:'center',marginTop:'1.5rem'}}>
                    <Circle  sx={{fontSize:'1rem',color:'#986EFA',marginRight:'1rem'}} />
                    <Circle  sx={{fontSize:'1rem',color:'#E6DCFD',marginRight:'1rem'}} />
                    <Circle  sx={{fontSize:'1rem',color:'#E6DCFD',marginRight:'1rem'}} />
                </Box>
            </Box>
            <Box>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'700',color:'#272727'}}>
                        Top Picks
                    </Typography>
                    <MoreHorizOutlined/>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                    <TopPickCards/>
                </Box>
            </Box>
        </>
    );
}