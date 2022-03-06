import { CameraAlt, MoreHorizOutlined, Star } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import nftImage from "../static/NftMarketplaceImage.svg";
import menAvatar from "../static/menAvatar.svg";
import React from "react";

export default function MainPart1a(){
    return(
        <>
        <Box sx={{display:'flex',justifyContent:'space-between',marginBottom:'.75rem',alignItems:'center'}}>
                <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'700',color:'#272727'}}>
                    NFT MarketPlace</Typography>
                <MoreHorizOutlined/>
        </Box>
        <Box sx={{position:'relative'}}>
            <img src={nftImage} alt="image" style={{width:'100%',borderRadius:'10px'}} />
            <Box sx={{borderRadius:'10px',background: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.61) 100%)',width:'100%',position:'absolute',top:'0',left:'0',padding:'1rem 1.5rem',display:'flex',flexDirection:'column',justifyContent:'space-between',height:'97%'}}>
                <Box sx={{display:'flex',}}>
                    <Typography variant="caption" component="div" sx={{color:'#fff',fontWeight:'600',fontFamily:'Raleway',padding:'0.3rem 1.5rem',marginRight:'1rem',borderRadius: '20px',background: 'rgba(255, 255, 255, 0.4)'}}>
                        Top Picks</Typography>
                    <Typography variant="caption" component="div" sx={{color:'#fff',fontWeight:'600',fontFamily:'Raleway',padding:'0.3rem 1.5rem',marginRight:'1rem',borderRadius: '20px',background: 'rgba(255, 255, 255, 0.4)'}}>
                        Featured</Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box>
                        <Typography variant="h6" sx={{fontFamily:'Raleway',fontWeight:'900',letterSpacing:'-1px',color:'#fff'}}>
                            House Andromeda</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3846 7.01533L6.72016 9.18103L3.05573 7.01533L6.72016 0.935085L10.3846 7.01533ZM-4.90437 18.9396C-4.84283 18.9396 -4.79122 18.888 -4.79122 18.8265C-4.79122 18.1198 -5.3252 17.4627 -6.06166 17.4647C-6.79812 17.4647 -7.32416 18.1237 -7.32416 18.8304C-7.32416 19.5371 -6.8001 20.1961 -6.06166 20.1961C-5.6309 20.1961 -5.1922 20.0076 -4.97186 19.6225C-4.96193 19.6026 -4.95201 19.5828 -4.95796 19.547C-4.96392 19.5113 -4.98774 19.4815 -5.0195 19.4676C-5.07905 19.4418 -5.12669 19.4696 -5.15846 19.5133C-5.3788 19.8269 -5.66862 19.9758 -6.06166 19.9758C-6.63534 19.9758 -7.04228 19.4815 -7.09786 18.9396H-4.90437ZM-6.06166 17.6811C-5.48798 17.6811 -5.0731 18.1754 -5.02546 18.7173H-7.09786C-7.04228 18.1754 -6.63534 17.6811 -6.06166 17.6811ZM-2.02206 17.6275C-2.02206 17.5739 -2.06771 17.5183 -2.13124 17.5183H-2.71683V16.6707C-2.71683 16.6012 -2.77439 16.5516 -2.84784 16.5635C-2.90144 16.5714 -2.93717 16.621 -2.93717 16.6746V17.5183H-3.50291C-3.56445 17.5183 -3.61209 17.5719 -3.61209 17.6275C-3.61209 17.689 -3.56643 17.7367 -3.50291 17.7367H-2.93717V20.0433C-2.93717 20.0969 -2.89151 20.1525 -2.82799 20.1525C-2.76645 20.1525 -2.71881 20.0989 -2.71881 20.0433V17.7367H-2.13124C-2.0697 17.7367 -2.02206 17.691 -2.02206 17.6275ZM1.45577 20.0294V18.6319C1.45577 18.0364 1.08655 17.4707 0.443391 17.4707C0.0523338 17.4707 -0.285128 17.6989 -0.473709 18.0364V15.4399C-0.473709 15.3863 -0.519365 15.3308 -0.582887 15.3308C-0.644423 15.3308 -0.692065 15.3844 -0.692065 15.4399V20.0294C-0.692065 20.0989 -0.634498 20.1485 -0.56105 20.1366C-0.507453 20.1287 -0.471723 20.079 -0.471723 20.0254V18.9773C-0.471723 18.974 -0.473085 18.9602 -0.474681 18.944C-0.476939 18.921 -0.479663 18.8933 -0.479663 18.884C-0.519365 18.2786 -0.229546 17.691 0.445375 17.691C0.971416 17.691 1.23742 18.1615 1.23742 18.6319V20.0294C1.23742 20.0909 1.28307 20.1386 1.34659 20.1386C1.40019 20.1386 1.45577 20.0929 1.45577 20.0294ZM5.27305 18.9396C5.33459 18.9396 5.3862 18.888 5.3862 18.8265C5.38421 18.1198 4.85221 17.4627 4.11576 17.4647C3.3793 17.4647 2.85326 18.1237 2.85326 18.8304C2.85326 19.5371 3.37731 20.1961 4.11576 20.1961C4.54651 20.1961 4.98521 20.0076 5.20556 19.6225C5.21548 19.6026 5.22541 19.5828 5.21945 19.547C5.2135 19.5113 5.18967 19.4815 5.15791 19.4676C5.09836 19.4418 5.05072 19.4696 5.01896 19.5133C4.79862 19.8269 4.5088 19.9758 4.11576 19.9758C3.54207 19.9758 3.13513 19.4815 3.07955 18.9396H5.27305ZM4.11377 17.6811C4.68745 17.6811 5.10233 18.1754 5.14997 18.7173H3.07757C3.13315 18.1754 3.54009 17.6811 4.11377 17.6811ZM7.9767 17.7367C8.03824 17.7287 8.07794 17.691 8.07794 17.6195C8.07794 17.556 8.01442 17.5183 7.96082 17.5163C7.58564 17.5163 7.22436 17.8061 7.04372 18.1118V17.6255C7.04372 17.556 6.98616 17.5064 6.91271 17.5183C6.85911 17.5262 6.82338 17.5759 6.82338 17.6295V20.0215C6.82338 20.0909 6.88095 20.1406 6.9544 20.1287C7.00799 20.1207 7.04372 20.0711 7.04372 20.0175V18.9694C7.04372 18.356 7.33354 17.83 7.9767 17.7367ZM11.5657 18.9396C11.6272 18.9396 11.6788 18.888 11.6788 18.8265C11.6769 18.1198 11.1449 17.4627 10.4084 17.4647C9.67195 17.4647 9.1459 18.1237 9.1459 18.8304C9.1459 19.5371 9.66996 20.1961 10.4084 20.1961C10.8392 20.1961 11.2779 20.0076 11.4982 19.6225C11.5081 19.6026 11.5181 19.5828 11.5121 19.547C11.5061 19.5113 11.4823 19.4815 11.4506 19.4676C11.391 19.4418 11.3434 19.4696 11.3116 19.5133C11.0913 19.8269 10.8014 19.9758 10.4084 19.9758C9.83472 19.9758 9.42778 19.4815 9.3722 18.9396H11.5657ZM10.4064 17.6811C10.9801 17.6811 11.395 18.1754 11.4426 18.7173H9.37021C9.4258 18.1754 9.83274 17.6811 10.4064 17.6811ZM15.2182 20.0433V17.6473C15.2182 17.5977 15.1864 17.552 15.1388 17.5362C15.0614 17.5143 14.9979 17.5778 14.9979 17.6414V18.5366C14.9979 19.2969 14.8252 19.9877 14.0867 19.9877C13.5607 19.9877 13.2947 19.5173 13.2947 19.0468V17.6414C13.2947 17.5878 13.249 17.5322 13.1855 17.5322C13.124 17.5322 13.0763 17.5858 13.0763 17.6414V19.0468C13.0763 19.6423 13.4376 20.2081 14.0887 20.2081C14.4976 20.2081 14.8192 19.95 14.9999 19.5887V20.0433C14.9999 20.1048 15.0455 20.1525 15.109 20.1525C15.1626 20.1525 15.2182 20.1068 15.2182 20.0433ZM20.7645 20.0294V18.624C20.7645 18.0285 20.3953 17.4707 19.7541 17.4687C19.2995 17.4687 18.9462 17.7585 18.7655 18.1674C18.6246 17.7505 18.2792 17.4687 17.8325 17.4687C17.4415 17.4687 17.104 17.689 16.9154 18.0265V17.6255C16.9154 17.556 16.8579 17.5064 16.7844 17.5183C16.7308 17.5262 16.6951 17.5759 16.6951 17.6295V20.0294C16.6951 20.0989 16.7527 20.1485 16.8261 20.1366C16.8797 20.1287 16.9154 20.079 16.9154 20.0254V18.9694C16.9209 18.9639 16.9189 18.9474 16.9171 18.9324C16.9162 18.9254 16.9154 18.9188 16.9154 18.9138C16.8916 18.215 17.1656 17.689 17.8325 17.689C18.3586 17.689 18.6246 18.1515 18.6246 18.622V20.0274C18.6246 20.089 18.6702 20.1366 18.7338 20.1366C18.7873 20.1366 18.8429 20.0909 18.8429 20.0274V18.9456C18.8429 18.3977 19.095 17.691 19.7541 17.691C20.2801 17.691 20.5461 18.1535 20.5461 18.624V20.0294C20.5461 20.0909 20.5918 20.1386 20.6553 20.1386C20.7089 20.1386 20.7645 20.0929 20.7645 20.0294ZM10.3867 7.71034L6.72026 12.8735L3.05584 7.71034L6.72026 9.87405L10.3867 7.71034Z" fill="#fff"/>
                            </svg>
                            <span style={{fontSize:'1rem',fontWeight:'500',color:'#fff'}}>
                                1.44 Ether</span>
                            <Star  sx={{color:'#F7E08E',fontSize:'1rem'}}/>
                            <Star  sx={{color:'#F7E08E',fontSize:'1rem'}}/>
                            <Star  sx={{color:'#F7E08E',fontSize:'1rem'}}/>
                            <Star  sx={{color:'#F7E08E',fontSize:'1rem'}}/>
                            <Star  sx={{color:'#FFF',fontSize:'1rem'}}/>
                        </Box>
                        <Typography variant="body2" component="div" sx={{color:'#fff',fontWeight:'300',fontFamily:'Mulish'}}>
                        (24 bidders)</Typography>
                    </Box>
                    <Box sx={{display:'flex'}}>
                        <Avatar alt="Img"  src={menAvatar} variant="circular" sx={{ width: 40, height: 40 , marginLeft:'1rem'}}/>
                        <Avatar alt="Img"  variant="circular" sx={{ borderRadius:'50%',width: 40, height: 40 , marginLeft:'1rem'}}>
                            <CameraAlt/>
                        </Avatar>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
}