import { Box, styled, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Component=styled(Box)(({theme})=>({

  height:'65vh',
  width:'80%',
  background:'#fff',
  margin:'80px 140px',
}))


const Container=styled(Box)(({theme})=>({
  
  textAlign:'center',
  paddingTop:'70px',
  [theme.breakpoints.down('sm')]:{
    textAlign:'start',
  }
}))


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
    <>
        <Component>
              <Container>
                <img src={imgurl} alt="" style={{width:'25%'}}/>
                <Typography>Your Cart Is Empty..!!</Typography>
                <Typography>Add Item Now..!! Go <Link to={'/'} style={{fontWeight:600,textDecoration:'none'}}>Home</Link></Typography>
              </Container>

      </Component>
    </>
  )
}

export default EmptyCart
