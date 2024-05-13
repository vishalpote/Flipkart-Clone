import {Box, styled, Typography} from '@mui/material';
import { useEffect, useState } from 'react';


const Header=styled(Box)`
  padding:15px 24px;
  border-bottom:1px solid #f2f2f2;
`;

const Heading=styled(Typography)`
  color:#878787;
`;

const Container=styled(Box)`
    padding:15px 24px;
    & > p{
      margin-bottom:20px;
      font-size:14;
    }
    & > h6{
      margin-bottom:20px; 
    }
`;


const Price=styled(Box)`
    float:right;
`;

const Discount=styled(Typography)`
    color:green;
    font-weight:500;
`

const TotalBalance = ({cartItems}) => {

  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState(0)

  useEffect(()=>{
    gettotal();
  },[cartItems]);



  const gettotal=()=>{
    let price=0;
    let discount=0;

    cartItems.map((item)=>{
      price +=price+item.price.mrp;
      discount+=(item.price.mrp - item.price.cost);
  })
  setPrice(price);
  setDiscount(discount);
  }
  return (
    <>
        <Box>
        <Header>
          <Heading>PRODUCT DERTAILS</Heading>
        </Header>
        <Container>
              <Typography>price ({cartItems?.length} item)
            <Price component="span">₹{price}</Price>
              </Typography>
              <Typography>Discount
            <Price component="span">-₹{discount}</Price>
              </Typography>
              <Typography>Delivery Charge
            <Price component="span">₹50</Price>
              </Typography>
              <Typography variant='h6'>Total Amount
            <Price component="span">₹{price-discount+50}</Price>
              </Typography>
          <Discount>You will save ₹{discount-50} on this order</Discount>
        </Container>
        </Box>
    </>
  )
}

export default TotalBalance
