import React, { useState } from 'react'
import {AppBar,Box,Drawer,IconButton,List,ListItem,Toolbar,Typography,styled} from '@mui/material'
import SearchBar from './SearchBar';
import CustomeButton from './CustomeButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderBar=styled(AppBar)`
background: #2874f0;
height:55px;
`;

const Div=styled(Box)`
margin-left:12%;
line-height:0;
`;

const SubHead=styled(Typography)`
font-size:10px;
font-style:italic;
`;

const PluseImg=styled('img')({
  
  width:10,
  height:10,
  marginLeft:4
});

const CustomeButtonBox=styled(Box)(({theme})=>({
  margin:'0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display:'none',
  }
}));

const Component=styled(Link)`
  text-decoration:none;
  margin-left:12%;
  line-height:0;
  color:inherit;
`;

const MenuButton=styled(IconButton)(({ theme })=>({
  display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block',
  }
}))

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const [open,setOpen]=useState(false);

  const handleOpen = () =>{
      setOpen(true);
  }

  const handleClose = () =>{
      setOpen(false);
  };

  const list=()=>(
    <Box style={{width:200}} onClick={handleClose}>
      <List>
        <ListItem>
          <CustomeButton></CustomeButton>
        </ListItem>
      </List>
    </Box>
  )
  return (
    <>
          <HeaderBar>
                  <Toolbar style={{minHeight:55}}>
                    <MenuButton color='inherit' onClick={handleOpen}>
                        <MenuIcon></MenuIcon>
                    </MenuButton>

          <Drawer open={open}  onClose={handleClose}>{list()}</Drawer>
                  <Component to='/'>
                        <Div>
                            <img src={logoURL} alt="logo"  style={{width:75}}/>
                            <Box style={{display:'flex'}}>
                                <SubHead>Explore&nbsp;
                                    <Box component="span" style={{color:"yellow"}}>Plus</Box>  
                                    <PluseImg src={subURL} alt="suburl" />
                                </SubHead>
                            </Box>
                        </Div>
                    </Component>
                        <SearchBar></SearchBar>
                        <CustomeButtonBox>
                          <CustomeButton></CustomeButton>
                        </CustomeButtonBox>
                  </Toolbar>
          </HeaderBar>
    </>
  )
}

export default Header