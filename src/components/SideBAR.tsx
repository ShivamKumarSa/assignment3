import { CssBaseline, List, ListItem, ListItemIcon } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import React from "react";
import theme from "../theme";
export default function SideBAR(){
  const linkObj = ['M6.35001 0.975006C9.73284 0.975006 12.475 3.71717 12.475 7.10001C12.475 10.4828 9.73284 13.225 6.35001 13.225C2.96717 13.225 0.225006 10.4828 0.225006 7.10001C0.225006 3.71717 2.96717 0.975006 6.35001 0.975006ZM6.35001 2.81251C3.98208 2.81251 2.06251 4.73208 2.06251 7.10001C2.06251 8.23436 2.50351 9.26642 3.22258 10.0333L3.31813 10.1313L4.18421 9.26581C3.63051 8.71088 3.28751 7.94526 3.28751 7.10001C3.28751 5.40889 4.65889 4.03751 6.35001 4.03751C6.62441 4.03751 6.89023 4.07364 7.14319 4.14163L8.10053 3.18491C7.56582 2.94603 6.97353 2.81251 6.35001 2.81251ZM10.2651 5.35009L9.30899 6.30682C9.37637 6.55978 9.41251 6.82561 9.41251 7.10001C9.41251 7.94526 9.06951 8.71088 8.51581 9.26581L9.38188 10.1319C10.1573 9.35584 10.6375 8.28397 10.6375 7.10001C10.6375 6.47648 10.5046 5.88419 10.2651 5.35009ZM8.94823 3.63509L6.66667 5.91604C6.56561 5.88909 6.45964 5.87501 6.35001 5.87501C5.67319 5.87501 5.12501 6.42319 5.12501 7.10001C5.12501 7.77682 5.67319 8.32501 6.35001 8.32501C7.02682 8.32501 7.57501 7.77682 7.57501 7.10001C7.57501 6.99037 7.56092 6.88441 7.53397 6.78334L9.81492 4.50117L8.94884 3.63509H8.94823Z',
                  'M11.3624 12.1376H2.78743C2.62499 12.1376 2.4692 12.073 2.35433 11.9582C2.23946 11.8433 2.17493 11.6875 2.17493 11.5251V6.01257H0.337433L6.66272 0.26242C6.77549 0.159813 6.92247 0.102951 7.07493 0.102951C7.2274 0.102951 7.37438 0.159813 7.48715 0.26242L13.8124 6.01257H11.9749V11.5251C11.9749 11.6875 11.9104 11.8433 11.7955 11.9582C11.6807 12.073 11.5249 12.1376 11.3624 12.1376ZM3.39993 10.9126H10.7499V4.88373L7.07493 1.54316L3.39993 4.88373V10.9126ZM7.07493 8.46257C6.66882 8.46257 6.27934 8.30124 5.99218 8.01408C5.70501 7.72691 5.54368 7.33743 5.54368 6.93132C5.54368 6.52521 5.70501 6.13573 5.99218 5.84856C6.27934 5.5614 6.66882 5.40007 7.07493 5.40007C7.48105 5.40007 7.87053 5.5614 8.15769 5.84856C8.44486 6.13573 8.60618 6.52521 8.60618 6.93132C8.60618 7.33743 8.44486 7.72691 8.15769 8.01408C7.87053 8.30124 7.48105 8.46257 7.07493 8.46257Z',
                  'M7.07504 12.8501C3.69221 12.8501 0.950043 10.1079 0.950043 6.72506C0.950043 3.98228 2.75263 1.66091 5.23754 0.880584V2.18153C4.18461 2.60909 3.31294 3.38921 2.77165 4.38844C2.23036 5.38768 2.05308 6.54395 2.27014 7.65946C2.48719 8.77497 3.08509 9.7804 3.96156 10.5038C4.83803 11.2271 5.93861 11.6235 7.07504 11.6251C8.05123 11.625 9.00518 11.3335 9.81466 10.7879C10.6241 10.2423 11.2523 9.46742 11.6186 8.56256H12.9195C12.1392 11.0475 9.81782 12.8501 7.07504 12.8501ZM13.1694 7.33756H6.46254V0.630684C6.66406 0.610472 6.86863 0.60006 7.07504 0.60006C10.4579 0.60006 13.2 3.34222 13.2 6.72506C13.2 6.93147 13.1896 7.13605 13.1694 7.33756ZM7.68754 1.86303V6.11256H11.9371C11.8007 5.03309 11.3092 4.02965 10.5398 3.26029C9.77045 2.49093 8.76701 1.99937 7.68754 1.86303Z',
                  'M4.01254 2.53744V0.699941C4.01254 0.537495 4.07707 0.381704 4.19194 0.266838C4.30681 0.151972 4.4626 0.0874405 4.62504 0.0874405H9.52504C9.68749 0.0874405 9.84328 0.151972 9.95815 0.266838C10.073 0.381704 10.1375 0.537495 10.1375 0.699941V2.53744H12.5875C12.75 2.53744 12.9058 2.60197 13.0206 2.71684C13.1355 2.8317 13.2 2.9875 13.2 3.14994V11.7249C13.2 11.8874 13.1355 12.0432 13.0206 12.158C12.9058 12.2729 12.75 12.3374 12.5875 12.3374H1.56254C1.4001 12.3374 1.24431 12.2729 1.12944 12.158C1.01457 12.0432 0.950043 11.8874 0.950043 11.7249V3.14994C0.950043 2.9875 1.01457 2.8317 1.12944 2.71684C1.24431 2.60197 1.4001 2.53744 1.56254 2.53744H4.01254ZM5.23754 7.43744H2.17504V11.1124H11.975V7.43744H8.91254V9.27494H5.23754V7.43744ZM11.975 3.76244H2.17504V6.21244H5.23754V4.98744H8.91254V6.21244H11.975V3.76244ZM6.46254 6.21244V8.04994H7.68754V6.21244H6.46254ZM5.23754 1.31244V2.53744H8.91254V1.31244H5.23754Z',
                  'M5.23754 0.187542V1.41254H8.91254V0.187542H10.1375V1.41254H12.5875C12.75 1.41254 12.9058 1.47707 13.0206 1.59194C13.1355 1.70681 13.2 1.8626 13.2 2.02504V11.825C13.2 11.9875 13.1355 12.1433 13.0206 12.2581C12.9058 12.373 12.75 12.4375 12.5875 12.4375H1.56254C1.4001 12.4375 1.24431 12.373 1.12944 12.2581C1.01457 12.1433 0.950043 11.9875 0.950043 11.825V2.02504C0.950043 1.8626 1.01457 1.70681 1.12944 1.59194C1.24431 1.47707 1.4001 1.41254 1.56254 1.41254H4.01254V0.187542H5.23754ZM11.975 4.47504H2.17504V11.2125H11.975V4.47504ZM8.93459 5.78334L9.80067 6.64942L6.76879 9.68129L4.60299 7.51549L5.47029 6.64942L6.76941 7.94914L8.9352 5.78334H8.93459Z',
                  'M0.770808 10.0875C0.511887 9.63977 0.310616 9.16109 0.171783 8.66285C0.473934 8.50917 0.727685 8.27491 0.904964 7.98597C1.08224 7.69703 1.17614 7.36469 1.17627 7.0257C1.17639 6.68672 1.08275 6.3543 0.905682 6.06523C0.72862 5.77617 0.475044 5.54171 0.173009 5.38781C0.44988 4.38667 0.977055 3.47249 1.70487 2.7314C1.98913 2.9162 2.31897 3.01876 2.65791 3.02771C2.99684 3.03667 3.33164 2.95167 3.62526 2.78213C3.91888 2.61259 4.15986 2.36512 4.32155 2.0671C4.48323 1.76909 4.55931 1.43215 4.54136 1.09357C5.54715 0.833641 6.60256 0.834063 7.60815 1.0948C7.59035 1.43337 7.66658 1.77026 7.82839 2.06819C7.9902 2.36612 8.23128 2.61348 8.52495 2.78288C8.81863 2.95229 9.15345 3.03715 9.49236 3.02806C9.83128 3.01898 10.1611 2.9163 10.4452 2.7314C10.7999 3.09277 11.1147 3.50376 11.3793 3.96252C11.6445 4.42129 11.843 4.89965 11.9783 5.3872C11.6762 5.54087 11.4224 5.77514 11.2452 6.06407C11.0679 6.35301 10.974 6.68535 10.9738 7.02434C10.9737 7.36333 11.0674 7.69574 11.2444 7.98481C11.4215 8.27388 11.6751 8.50833 11.9771 8.66223C11.7002 9.66337 11.1731 10.5776 10.4452 11.3186C10.161 11.1338 9.83114 11.0313 9.49221 11.0223C9.15328 11.0134 8.81847 11.0984 8.52486 11.2679C8.23124 11.4375 7.99025 11.6849 7.82857 11.9829C7.66688 12.281 7.59081 12.6179 7.60876 12.9565C6.60297 13.2164 5.54755 13.216 4.54197 12.9552C4.55976 12.6167 4.48354 12.2798 4.32173 11.9819C4.15992 11.6839 3.91884 11.4366 3.62516 11.2672C3.33149 11.0978 2.99667 11.0129 2.65775 11.022C2.31884 11.0311 1.98905 11.1337 1.70487 11.3186C1.34288 10.9493 1.02904 10.5356 0.770808 10.0875V10.0875ZM4.23756 10.2076C4.89025 10.584 5.381 11.1882 5.61568 11.9042C5.92132 11.933 6.22818 11.9336 6.53382 11.9048C6.76865 11.1887 7.25963 10.5845 7.91256 10.2082C8.565 9.83069 9.33388 9.70745 10.0716 9.86212C10.2492 9.61222 10.4024 9.34578 10.5298 9.0671C10.0272 8.5057 9.74952 7.77853 9.75006 7.02502C9.75006 6.25327 10.0379 5.53236 10.5298 4.98295C10.4015 4.70435 10.2477 4.43821 10.0704 4.18792C9.33312 4.34246 8.56474 4.21945 7.91256 3.84247C7.25986 3.46601 6.76912 2.86185 6.53443 2.14585C6.2288 2.11706 5.92193 2.11645 5.6163 2.14524C5.38146 2.86134 4.89049 3.46552 4.23756 3.84186C3.58511 4.21935 2.81624 4.34259 2.0785 4.18792C1.90122 4.438 1.74783 4.70418 1.62035 4.98295C2.12295 5.54434 2.4006 6.27152 2.40006 7.02502C2.40006 7.79677 2.11218 8.51768 1.62035 9.0671C1.74865 9.34569 1.90243 9.61183 2.07972 9.86212C2.817 9.70758 3.58537 9.83059 4.23756 10.2076ZM6.07506 8.86252C5.58772 8.86252 5.12035 8.66893 4.77575 8.32433C4.43115 7.97973 4.23756 7.51236 4.23756 7.02502C4.23756 6.53769 4.43115 6.07031 4.77575 5.72571C5.12035 5.38112 5.58772 5.18752 6.07506 5.18752C6.56239 5.18752 7.02977 5.38112 7.37437 5.72571C7.71897 6.07031 7.91256 6.53769 7.91256 7.02502C7.91256 7.51236 7.71897 7.97973 7.37437 8.32433C7.02977 8.66893 6.56239 8.86252 6.07506 8.86252ZM6.07506 7.63752C6.2375 7.63752 6.39329 7.57299 6.50816 7.45812C6.62303 7.34326 6.68756 7.18747 6.68756 7.02502C6.68756 6.86258 6.62303 6.70679 6.50816 6.59192C6.39329 6.47705 6.2375 6.41252 6.07506 6.41252C5.91261 6.41252 5.75682 6.47705 5.64195 6.59192C5.52709 6.70679 5.46256 6.86258 5.46256 7.02502C5.46256 7.18747 5.52709 7.34326 5.64195 7.45812C5.75682 7.57299 5.91261 7.63752 6.07506 7.63752V7.63752Z'];

  return( 
        <>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <svg width="35" height="35" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.62332 19.0563C9.85907 19.4647 10.4484 19.4647 10.6842 19.0563L12.6635 15.6281C12.8992 15.2198 12.6045 14.7094 12.133 14.7094H8.1745C7.703 14.7094 7.40831 15.2198 7.64406 15.6281L9.62332 19.0563Z" fill="#7942FB"/>
                      <path d="M9.62332 1.29375C9.85907 0.885416 10.4484 0.885417 10.6842 1.29375L12.6635 4.72192C12.8992 5.13026 12.6045 5.64067 12.133 5.64067H8.1745C7.703 5.64067 7.40831 5.13026 7.64406 4.72192L9.62332 1.29375Z" fill="#7942FB"/>
                      <path d="M19.1813 10.8517C19.5896 10.6159 19.5896 10.0265 19.1813 9.79078L15.7531 7.81152C15.3448 7.57577 14.8343 7.87046 14.8343 8.34196L14.8343 12.3005C14.8343 12.772 15.3448 13.0667 15.7531 12.8309L19.1813 10.8517Z" fill="#7942FB"/>
                      <path d="M1.41881 10.8517C1.01048 10.6159 1.01048 10.0265 1.41881 9.79078L4.84698 7.81152C5.25532 7.57577 5.76573 7.87046 5.76573 8.34196L5.76573 12.3005C5.76573 12.772 5.25532 13.0667 4.84698 12.8309L1.41881 10.8517Z" fill="#7942FB"/>
                      <circle cx="10.3001" cy="10.1749" r="2.7791" fill="#ED5B75"/>
                    </svg>
                  </ListItemIcon>   
                </ListItem>
                {linkObj.map((items)=>(
                  <ListItem sx={{ '&:hover':{borderLeft:'3px solid #ed5B75'} }}>
                    <ListItemIcon>
                      <svg width="25" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={items} fill="#959595"/>
                      </svg>
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <svg width="25" height="25" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.78724 1.50677L3.48978 2.51065C2.63606 3.10831 1.99513 3.96259 1.66008 4.94938C1.32503 5.93618 1.31332 7.0041 1.62665 7.998C1.93997 8.99191 2.56202 9.86003 3.40242 10.4763C4.24282 11.0925 5.2578 11.4248 6.29993 11.4248C7.34205 11.4248 8.35704 11.0925 9.19744 10.4763C10.0378 9.86003 10.6599 8.99191 10.9732 7.998C11.2865 7.0041 11.2748 5.93618 10.9398 4.94938C10.6047 3.96259 9.96379 3.10831 9.11008 2.51065L9.81262 1.50677C10.6199 2.07114 11.2789 2.82208 11.7337 3.69576C12.1885 4.56944 12.4256 5.54001 12.4249 6.52498C12.4249 9.90782 9.68277 12.65 6.29993 12.65C2.91709 12.65 0.174928 9.90782 0.174928 6.52498C0.174219 5.54001 0.411347 4.56944 0.866153 3.69576C1.32096 2.82208 1.98 2.07114 2.78724 1.50677ZM5.68743 6.52498V0.399979H6.91243V6.52498H5.68743Z" fill="#7942FB"/>
                    </svg>
                  </ListItemIcon>
                </ListItem>
              </List> 
            </Box>
          </ThemeProvider>
        </>
  );
}