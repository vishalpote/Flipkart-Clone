import { Badge, Box, Button, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import Logindialog from '../login/Logindialog';
import {  useContext, useState } from 'react';
import { Datacontext } from '../../../context/Dataprovider';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper=styled(Box)(({theme})=>({

  
  display:'flex',
  margin:'0 3% 0 auto',
  '& > *' :{
    marginRight:'30px !important',
    fontSize:'16px',
    alignItems:'center',
  },
  [theme.breakpoints.down('sm')]:{
    display:'block',
  }
  }))

const LoginButton=styled(Button)`
color:#2874f0;
background-color:white;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;

`

const BoxContainer=styled(Link)(({ theme })=>({
  display:'flex',
  textDecoration: 'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block',
  }
}))
const CustomeButton = () => {

  const [open,setOpen]=useState(false);

  const handleclick=()=>{
    setOpen(true);
  }

  const { account, setAccount } =useContext(Datacontext);
  // console.log(account);


  const {cartItems}=useSelector(state=>state.cart);
  return (
    <>
      <Wrapper>
        {
          account ? 
            <Profile account={account} setAccount={setAccount}></Profile>
          : 
          (<LoginButton variant='contained' onClick={() => handleclick()}>Login</LoginButton>)
        }
            
            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>

            <BoxContainer to="/cart">
          <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartIcon></ShoppingCartIcon>
          </Badge>
                  <Typography style={{marginLeft:10}}>Cart</Typography>
            </BoxContainer>
            <Logindialog open={open} setOpen={setOpen}></Logindialog>
      </Wrapper>
    </>
  )
}

export default CustomeButton