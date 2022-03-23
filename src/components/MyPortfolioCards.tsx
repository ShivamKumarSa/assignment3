import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function MyPortfolioCards(){
    const query = useStaticQuery(graphql`
    query MyQuery4 {
        allPrismicMyPortfolioCard {
            nodes {
                uid
                data {
                    heading { text }
                    subheading { text }
                    arrow_icon_link { text }
                    buildingimage { fluid { src } }
                }
            }
        }
    } 
    `)
    return(
        <>
        { query.allPrismicMyPortfolioCard.nodes.map((items:any)=>(
            <Card key={items.uid} style={{ flex:'25%',backgroundColor:'white',borderRadius:'10px',padding:'.5rem',marginTop:'.75rem',marginRight:'1rem' }} elevation={0}>
                <Box sx={{display:'flex'}}>
                    <div>
                        <img src={items.data.buildingimage.fluid.src} alt="image"width={60} height={60} style={{borderRadius:'10px'}}/>
                    </div>
                    <div style={{paddingLeft:'1rem'}}>
                        <Typography variant='body1' >{items.data.heading.text}</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <svg width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d={items.data.arrow_icon_link.text} fill="#B5B5B5"/>
                            </svg>
                            <span style={{fontSize:'1.25rem',fontFamily:'Mulish',fontWeight:'600',color:'#B5B5B5'}}>
                                {items.data.subheading.text}</span> 
                        </Box>
                    </div>
                </Box>
            </Card>
        ))}
        </> 
    );
}