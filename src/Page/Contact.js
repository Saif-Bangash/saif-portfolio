import { Box, Grid,  Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from "react";
import { TextField } from "@mui/material";

function Contact() {
  return (
    <Box sx={{bgcolor:'rgb(224, 203, 81)'}} id="contact" >
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box sx={{ mx: 20, pt: 13, '@media (max-width: 600px)':{mx:5, pt:5} }}>
            <TextField
              id="standard-basic"
              label="Enter Name"
              variant="standard"
              sx={{ width: "400px", '@media (max-width: 600px)':{width:250} }}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Enter Your Email"
              variant="standard"
              sx={{ width: "400px", mt: 5, '@media (max-width: 600px)':{width:250, mt:3}  }}
            />

            <TextField
              helperText="Please enter text"
              id="demo-helper-text-aligned"
              label="Text"
               sx={{width:'400px', mt:10, '@media (max-width: 600px)':{width:250, mt:5} }}
            />

             <button className="contactbtn">SUBMIT</button>
          </Box>
        </Grid>

         <Grid item xs={12}  lg={6}  >
              <Box sx={{mx:15, pt:15 ,pb:10, '@media (max-width: 600px)':{mx:5, pt:7} }}>
              <Typography sx={{fontSize:30, fontWeight:'bold', '@media (max-width: 600px)':{fontSize:20}}}>CONTACT US</Typography>
               <FacebookOutlinedIcon sx={{mx:1, fontSize:25, pt:2, '@media (max-width: 600px)':{fontSize:20}}} />
                <TwitterIcon sx={{mx:1, fontSize:25,  '@media (max-width: 600px)':{fontSize:20, mx:0}}} />
                <InstagramIcon  sx={{mx:1, fontSize:25,  '@media (max-width: 600px)':{fontSize:20} }}/>
                <WhatsAppIcon sx={{mx:1, fontSize:25,  '@media (max-width: 600px)':{fontSize:20, mx:0} }} />

               </Box>

                <Box sx={{mx:15,  pb:15, '@media (max-width: 600px)':{mx:5, pb:5, }}}>
                     <Typography sx={{fontSize:30, '@media (max-width: 600px)':{fontSize:20,}}} >0332 - 6767 615</Typography>
                     <Typography sx={{fontSize:30, '@media (max-width: 600px)':{fontSize:20,}}} >0315 - 9832 216 </Typography>
                </Box>
         </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
