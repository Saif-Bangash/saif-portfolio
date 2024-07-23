import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box sx={{ bgcolor: "#000223" }} id="about">
      <Typography
        
        sx={{
          mx:25,
        
          color: "white",
          fontWeight: "bolder",
          fontSize:85,
          '@media (max-width: 600px)':{mx:10, pt:25, fontSize:40 }
        }}
      >
        portfolio
      </Typography>
         <Typography sx={{fontSize:100, mx:25, color:'white', fontWeight:'bold', pt:20, '@media (max-width: 600px)':{mx:5, color:'white', fontSize:40, pt:15}}}>Design</Typography>
      <Typography sx={{mx:25, color:'white', fontWeight:'bold', fontSize:35, '@media (max-width: 600px)':{mx:5,fontSize:18} }}>outside, tasty on the inside.
      </Typography>
      <Typography sx={{mx:25, pt:3, textAlign:'center', fontSize:20, color:'white', '@media (max-width: 600px)':{mx:5, fontSize:15, textAlign:'justify'}}} lineHeight={2}>
        A front-end developer is a type of software developer who specializes in
        creating and designing the user interface (UI) and user experience (UX)
        of websites and web applications. The primary responsibility of a
        front-end developer is to ensure that the visual and interactive aspects
        of a website or application are user-friendly, aesthetically pleasing,
        and functionally efficient
      </Typography>
       <button className="aboutbtn">Learn more...</button>
    </Box>
  );
}

export default About;
