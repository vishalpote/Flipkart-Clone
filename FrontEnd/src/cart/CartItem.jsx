import { Box, Button, styled, Typography } from "@mui/material"
import GroupedButton from '../cart/ButtonGroup'
import { useDispatch } from "react-redux";
import { removeTocart } from "../redux/actions/cartAction";


const Component=styled(Box)`
    border:1px solid #f0f0f0;
    display:flex;
`;

const LeftComponent=styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
`;

const Sellertext=styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
`;

const Remove=styled(Button)`
    margin-top:20px;
    font-size:16px;
    color:#000;
    font-weight:600;
`

const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const title = item.title.longTitle;
    const dispatch=useDispatch()
    const removeitemformcart=(id)=>{
        dispatch(removeTocart(id));
    }
    console.log(item);
  return (
    <>
          <Component>
              <LeftComponent>
                <img src={item.url} alt="product" style={{height:110,width:110}}/>
                  <GroupedButton item={item} />
            </LeftComponent>    
            <Box style={{margin:20}}>
                <Typography>{title.length >50 ?title.slice(0,40) + '...' :title}</Typography>
                <Sellertext>seller:RetailNet
                    <Box component="span">
                        <img src={fassured} style={{width:60, marginLeft:10}} alt="flipkartassured" />
                    </Box>
                </Sellertext>
                  <Typography style={{margin:'20px 0'}}>
                      <Box component="span" style={{ fontWeight: 600 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                      <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                      <Box component="span" style={{ color: 'green' }}>{item.price.discount}</Box>
                  </Typography>
                  <Remove onClick={()=>removeitemformcart(item._id)}>Remove</Remove>
            </Box>
        </Component>
    </>
  )
}

export default CartItem
