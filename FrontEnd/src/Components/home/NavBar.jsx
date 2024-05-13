import React from 'react'
import { navData } from '../../constant/data';
import { Box,Typography,styled} from '@mui/material'

const Component=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0 130px',
justifyContent:'space-between',
[theme.breakpoints.down('lg')]:{
      margin:0
}
}));

const Container=styled(Box)`
padding:12px 8px;
text-align:center;
`;

const Text=styled(Typography)`
font-size:14px;
font-weight:bold;
font-family:inherit;
`
const NavBar = () => {
  return (
    <>
            <Component>
                  {
                        navData.map((data)=>{
                              return (
                                    <Container key={data.id}>
                                          <img src={data.url} alt="data" style={{width:65}} />
                                          <Text>{data.text}</Text>
                                    </Container>
                              )
                        })
                  }
            </Component>
    </>
  )
}

export default NavBar