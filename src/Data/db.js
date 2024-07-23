
import { Button } from '@mui/material';
import image1 from '../images/Resturent.jpg';
import image2 from '../images/coffeeA (1).jpg';
import image3 from '../images/university.jpg';
import image4 from '../images/3dpic.jpg'

 export const ProjectCard =[
{
      Img: image1,
      Title:'Resturent Project',
      Text:'You never get a second chance to make a first impression. Now more than ever, it happens on your restaurant',
      h2:  <Button  variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}}  >GitHub</Button>,
      h3:  <Button  variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}}  >Linkedin</Button>
},
{
      Img: image2,
      Title:'Coffee Project',
      Text:'Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. tea is fantastic',
      h2:  <Button  variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}}  >GitHub</Button>,
      h3:  <Button variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}} >Linkedin</Button>
},
{
    Img:image3,
    Title:'University Project',
    Text:' present or occurring everywhere. : existent or operative everywhere or under all conditions. universal cultural patterns.',
    h2:  <Button  variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}}  >GitHub</Button>,
    h3:  <Button  variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}}  >Linkedin</Button>
},
{
      Img:image4,
      Title:'Figma Design',
      Text:'Figma Design is for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences.',
      h2:  <Button  variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}}  >GitHub</Button>,
      h3:  <Button  variant='contained' sx={{bgcolor:'rgb(224, 203, 81)', color:'black'}}  >Linkedin</Button>    
}


 ]