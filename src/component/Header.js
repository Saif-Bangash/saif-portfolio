            import {
            AppBar,
            Box,
            Divider,
            Drawer,
            IconButton,
            Link,
            Toolbar,
            Typography,
            } from "@mui/material";
            import React, { useState } from "react";
            import MenuIcon from "@mui/icons-material/Menu";

            function Header() {
            const [mobileOpen, setMobileOpen] = useState();

            const handleDrawerToggle = () => {
                setMobileOpen(!mobileOpen);
            };

            const drawer = (
                <Box onClick={handleDrawerToggle} sx={{textAlign:'center', width:150}} >
                <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold", color:'rgb(216, 158, 11)' }}>
                    Portfolio
                </Typography>
                 <Divider />

                    <ul className="mobile-nevigation">
                    <li>
                        <Link href="home"> Home </Link>
                    </li>
                    <li>
                        <Link href="#about"> About </Link>
                    </li>
                    
                    <li>
                        <Link href="#project"> Project </Link>
                    </li>
                    <li>
                        <Link href="#contact"> Contact </Link>
                    </li>
                    </ul>
                </Box>
                
            );
            return (
                <Box>
                <AppBar sx={{ bgcolor: "#080E4B", height: 70 }}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: " none " } }}

                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bolder" }}>
                        Portfolio
                    </Typography>

                    <Box sx={{ mx: "10%", display: { xs: " none ", lg: " block " } }}>
                        <ul className="nevigation-menu">
                        <li>
                            <Link href="home"> Home </Link>
                        </li>
                        <li>
                            <Link href="#about"> About </Link>
                        </li>
                       
                        <li>
                            <Link href="#project"> Project </Link>
                        </li>
                        <li>
                            <Link href="#contact"> Contact </Link>
                        </li>
                        </ul>
                    </Box>
                    </Toolbar>
                </AppBar>

                    <Box component='nav'>
                          <Drawer variant="temporary"  open={mobileOpen} onClose={handleDrawerToggle}  sx={{display: {xs: ' block ',  sm: ' none '}}}>
                            {drawer}
                          </Drawer>
                    </Box>
                  <Toolbar/>
                </Box>
            );
            }

            export default Header;
