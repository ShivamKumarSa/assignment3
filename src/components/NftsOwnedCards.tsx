import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function NftsOwnedCards(){
    const query = useStaticQuery(graphql`
        query MyQuery {
            allPrismicNftsOwnedCard {
                nodes {
                    data {
                        title { text }
                        maintitle { text }
                        subcontent { text }
                        curve_link
                        arrow_icon_link
                    }
                    uid
                }
            }
        }  
    `)
    const positive:any = {color : '#4FDFB1'}
    const negative:any = {color : '#ED5B75'}
    return (
        <> 
            {query.allPrismicNftsOwnedCard.nodes.map((items:any)=>(    
                <Card key={items.uid}  sx={{ width:'100%',backgroundColor:'white',borderRadius:'10px',padding:'.5rem',marginTop:'1.2rem' }} elevation={0}>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <div>
                            <Typography variant='body2' >{items.data.title.text}</Typography>
                            <Box sx={{display:'flex',alignItems:'center'}}>
                                <svg width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d={items.data.arrow_icon_link} fill= "#272727"/>
                                </svg>
                                <span style={{fontSize:'1.3rem',fontFamily:'Mulish',fontWeight:'bold'}}>{items.data.maintitle.text}</span>   
                            </Box>
                        </div>
                        <div>
                            <svg width="40" height="20" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={items.data.curve_link} stroke={(items.data.subcontent.text.charAt(0)=='-')?"#ED5B75":"#4FDFB1"} stroke-width="0.91875" stroke-linecap="round"/>
                            </svg>
                            <Typography variant='subtitle2' align="center" sx={(items.data.subcontent.text.charAt(0)=='-')?negative:positive} >
                                {items.data.subcontent.text}
                            </Typography>
                        </div>
                    </Box>
                </Card>
            ))}
        </>
    );
}