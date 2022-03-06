import { MoreHorizOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NftsOwnedCards from "./NftsOwnedCards";

export default function MainPart2a(){
    return(
        <>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'700',color:'#272727'}}>
                    NFTs Owned</Typography>
                <MoreHorizOutlined/>
            </Box>     
            <NftsOwnedCards/>
        </>
    );
}