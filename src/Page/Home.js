import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Home() {
  return (
    <Box zIndex={'home'}>
      <Grid container className="color" sx={{ height: "600px",}}>
        <Grid item xs={12} lg={4} order={{ xs: 2, sm: 2, lg: 1 }}>
          <Box
            sx={{
              mx: 10,
              "@media (max-width: 600px)": { mx: 4 },
            }}
          >
            <img src="whatsappA (3).jpeg" className="img" />
          </Box>
        </Grid>

        <Grid item xs={12} lg={8} order={{ xs: 1, sm: 1, lg: 2 }}>
          <Box sx={{ pt:20, mx:26, '@media (max-width: 600px)':{pt:5, mx:1}}}>
            <Typography sx={{fontSize:20}}>Hello ! I am  <span className="spantag">saif...Bangash</span> </Typography>
            <Typography
              sx={{
                mt:2,
                fontSize: "18px",
                fontWeight:'bold',
                 px:10,
                "@media (max-width: 600px)": { fontSize: "20px", px:5 },
                pt: 1,
              }}
            >
          
             I am a frontend developer{" "}
            </Typography>
            <Typography sx={{fontSize:15, textAlign:'center', '@media (max-width: 600px)':{fontSize:15, textAlign:'match-parent'}}} lineHeight={3}>
              "As a front-end developer, I craft engaging user interfaces and
              responsive web applications using HTML, CSS, JavaScript, and
              frameworks like Bootstrap, React, or Next....
            </Typography>
            <ArrowForwardIosIcon sx={{fontSize:40, mx:25, pt:3, '@media (max-width: 600px)':{mx:1, fontSize:25, pt:3} }} /> 
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
