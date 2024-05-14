import { Box, Button, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/actions/cartAction";
import { useState } from "react";
import { host, oneProductRoute } from "../../utils/apiRoutes";
import axios from "axios";
import { payUsingPaytem } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px',
  }
}))


const Image = styled('img')({
  // width: '90%',
  padding: '14px',
})

const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: '50px',
  marginTop: '5px',
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width: '46%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%',
  }
}))

const ActionItem = ({ product }) => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {_id}=product;

  // const [quantity,setQuantity] = useState(1);  
  let quantity=1

  const handleCart=()=>{
    // setQuantity(quantity+1);
    dispatch(addTocart(_id,quantity));
      navigate('/cart');
  };

  const buyNow=async()=>{
    const response=await payUsingPaytem({amount:500,email:"vishal90904545@gmail.com"})
    let information={
      action :"",
      params:response
    }
    post(information);
  }
  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0' }}>
        <Image src={product.url} alt="image" style={{width:'90%'}}/>
      </Box>
      <StyledButton onClick={handleCart} variant="contained" style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon /> Add To Cart</StyledButton>
      <StyledButton variant="contained" onClick={()=>buyNow()} style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem
