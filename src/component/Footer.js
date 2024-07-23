
 import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import GMobiledataIcon from '@mui/icons-material/GMobiledata';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 
 function Footer() {
   return (
  
     <Box sx={{bgcolor:'#000223', color:'white', textAlign:'center', pt:5}}>
        <Typography sx={{fontSize:40, fontWeight:'bold', '@media (max-width: 600px)':{fontSize:25}}}>Contact me</Typography> 
        
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:5, '@media (max-width: 600px)': {mt:2}}}>
        <Typography  sx={{mx:2,  fontSize:'20px', '@media (max-width: 600px)':{  fontSize:15}}} > saifbangash480@gmail.com</Typography>
        <Typography  sx={{mx:3, fontWeight:'bold', fontSize:'20px' ,'@media (max-width: 600px)':{  fontSize:16}}} >  Linkedin</Typography>
         
        </Box>
        <hr className='hrline'/>
        <Box sx={{textAlign:'center', mt:3}}>

             <Typography sx={{fontWeight:'bold', fontSize:'20px', pb:5, '@media (max-width: 600px)':{fontSize:13}}}>Copyright@ 2024: Design by Saif... Bangash</Typography>
        </Box>
     </Box>
        
    
   )
 }
 
 export default Footer
 