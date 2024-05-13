import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const Smalltext = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & >p{
        font-size:14px;
        margin-top:10px;
    }
`;

const Badge = styled(LocalOfferIcon)`
    margin-right:10px;
    color:#00cc00;
    font-size:15px;
`;

const Columntext=styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    & > td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>8 rating && 1 Review
                <Box component="span"><img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: 'green' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Availble Offers</Typography>
            <Smalltext>
                <Typography><Badge></Badge>Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
                <Typography><Badge></Badge>Get extra 13% off (price inclusive of discount) T&C </Typography>
                <Typography><Badge></Badge>Get extra 10% off on HSBC Bank Credit Card Transactions, up to ₹1,250 on orders of ₹15,000 and aboveT&C </Typography>
                <Typography><Badge></Badge>Get extra 27% off (price inclusive of cashback/coupon)T&C </Typography>
                <Typography><Badge></Badge>No Cost EMI* with Flipkart Pay Later EMIT&C </Typography>
                <Typography><Badge></Badge>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More </Typography>
            </Smalltext>
            <Table>
                <TableBody>
                    <Columntext>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivered By {date.toDateString()} | ₹40</TableCell>
                    </Columntext>
                    <Columntext>
                        <TableCell style={{color:'#878787'}}>Warrenty</TableCell>
                        <TableCell style={{color:"#2874f0"}}>No Warrenty</TableCell>
                    </Columntext>
                    <Columntext>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell style={{marginTop:20}} >
                            <Box component="span" style={{ color: '#2874f0' }}>
                                RetailNet</Box>
                                    <ul>
                                <li>7 Days Replacement Policy</li>
                                <li>GST invoice available?</li>
                                    </ul>
                        </TableCell>
                    </Columntext>

                    <Columntext>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt="flipkartpoint" />
                        </TableCell>
                    </Columntext>
{/* 
                    <Columntext>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>{product.description}</TableCell>
                    </Columntext> */}
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
