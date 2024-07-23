 import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { ProjectCard } from '../Data/db'
 
 function Project() {
   return (
       <Box sx={{bgcolor:'#000223',py:10}}>
         <Typography sx={{color:'white', fontSize:'30px', fontWeight:'bold', textAlign:'center', py:5, '@media (max-width: 600px)':{ fontSize:20, pt:10,} }}>Personal Projects</Typography>
     <Box className='slide-up' sx={{display:'flex', justifyContent:'center', alignItems: 'center', bgcolor:'#000223', borderColor:'gray', flexWrap:'wrap'}}>
         {
            ProjectCard.map((item) => {
                return(
                    <Box className='box' sx={{bgcolor:'#000223'}} id="project">      
                        <Card  sx={{width: '250px',height: '420px', mx:2, p:2, border:3, borderRadius:5, bgcolor:'#000223', color:'white', '@media (max-width: 600px)':{mt:5, mx:3, height:380, width:250,   }}} >
                            <CardMedia component={'img'} src={item.Img} sx={{borderRadius:2, width:250}} />
                            <CardContent>
                                <Typography sx={{fontSize:'15px', color:'gold', }}>{item.Title}</Typography>

                                <Typography sx={{mt:2,  '@media (max-width: 600px)':{mt:.5}}}> {item.Text} </Typography>
                                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mt:3, '@media (max-width: 600px)':{mt:1}}}>
                                <Typography  > {item.h2} </Typography>
                                <Typography  > {item.h3} </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card className='overlay' sx={{ width: '250px', height: '420px', mx:2, p:2, border:3, borderRadius:5, bgcolor:'#000223', color:'white', '@media (max-width: 600px)':{mt:5, mx:3, height:380, width:250,  }}} >
                            <CardMedia component={'img'} src={item.Img} sx={{borderRadius:2,}} />
                            <CardContent>
                                <Typography sx={{fontSize:'15px', color:'black', }}>{item.Title}</Typography>

                                <Typography sx={{mt:2, '@media (max-width: 600px)':{mt:.5}}}> {item.Text} </Typography>
                                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mt:3, '@media (max-width: 600px)':{mt:1}}}>
                                <Typography > {item.h2} </Typography>
                                <Typography > {item.h3} </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box> 
                )
            })
         }

          <Box sx={{m:7}}>
             <Typography sx={{color:'white', fontFamily:'cursive'}}>Images from Freepik</Typography>
             <button  className='btnproject' >LEARN MORE...</button>
          </Box>
     </Box>
     </Box>
   )
 }
 
 export default Project
 