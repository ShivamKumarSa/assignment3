import { ThemeProvider } from "@emotion/react";
import { Avatar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../static/logo.svg";

export default function Header(){
    return(
         <Toolbar>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 ,color: '#5C5C5C',fontFamily:'Raleway',fontWeight:'900',fontSize:'25px'}}>
                    Dashboard</Typography>
                <IconButton>
                    <Badge overlap='circular' color='secondary' badgeContent=" " variant="dot" >
                        <svg width="25" height="25" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.325 10.1749H12.55V11.3999H0.300034V10.1749H1.52503V5.88743C1.52503 4.58787 2.04128 3.34153 2.96021 2.4226C3.87914 1.50368 5.12547 0.987427 6.42503 0.987427C7.72459 0.987427 8.97093 1.50368 9.88986 2.4226C10.8088 3.34153 11.325 4.58787 11.325 5.88743V10.1749ZM10.1 10.1749V5.88743C10.1 4.91276 9.71285 3.97801 9.02365 3.28881C8.33446 2.59961 7.3997 2.21243 6.42503 2.21243C5.45036 2.21243 4.51561 2.59961 3.82642 3.28881C3.13722 3.97801 2.75003 4.91276 2.75003 5.88743V10.1749H10.1ZM4.58753 12.6249H8.26253V13.8499H4.58753V12.6249Z" fill="black"/>
                        </svg>
                    </Badge> 
                </IconButton>
                <Avatar alt="Img"  src={logo} variant="square" sx={{ width: 35, height: 35 , marginLeft:'6vw',marginRight:'1vw'}}/>
                <Typography variant="subtitle1" component="div" sx={{color:'#959595',fontWeight:'500',fontFamily:'Mulish'}}>
                    Rowena Ravenclaw</Typography>
          </Toolbar>
    );
}