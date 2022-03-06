import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function TopPickCards(){
    const query = useStaticQuery (graphql`
        query MyQuery2 {
            allPrismicTopPickCards {
                nodes {
                    uid
                    data {
                        title { text }
                        price
                        ether { text }
                    }
                }
            }
        }
    `)
    const less:any = {borderLeft : '0.25rem solid #ED5B75',borderRadius:'3px',marginTop:'1.4rem'}
    const avg:any = {borderLeft : '0.25rem solid #FBB142',borderRadius:'3px',marginTop:'1.4rem'}
    const high:any = {borderLeft : '0.25rem solid #4FDFB1',borderRadius:'3px',marginTop:'1.4rem'}
    return(
        <>
        {query.allPrismicTopPickCards.nodes.map((items:any)=>(
            <Box key={items.uid} sx={((items.data.price<=400000)?less:(items.data.price<=700000)?avg:high)}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingLeft:'1rem'}}>
                    <Box sx={{flex:'1',display:'flex',alignItems:'flex-end',justifyContent:'space-between',paddingRight:'1rem'}}>
                        <Box>
                            <Typography variant='body1' >{items.data.title.text}</Typography>
                            <Typography variant="subtitle2" component="div" sx={{color:'#959595',fontWeight:'500',fontFamily:'Mulish'}}>
                                $ {items.data.price}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" component="div" sx={{color:'#959595',fontWeight:'500',fontFamily:'Mulish'}}>
                                {items.data.ether.text}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <ArrowForwardIos sx={{color:'#B5B5B5'}}/>
                    </Box>
                </Box>
            </Box>
        ))}       
        </>
    );
}