import { Box, styled,  } from "@mui/material"
import Slide from './Slide'


const Component=styled(Box)`
    display:flex;
`

const LeftComponent=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}))

const RightComponent=styled(Box)(({theme})=>({
    marginTop:10,
    marginLeft:10,
    background:'#FFFFFF',
    padding:5,
    width:'17%',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
    display: 'none'
}
}))
const MidSlider = ({ products, title, timer } ) => {
    const adURL = 'https://img.freepik.com/free-photo/black-board-cart-black-friday_23-2147695978.jpg?t=st=1714993287~exp=1714996887~hmac=d294157ede43bb1e28e227e0a8b35c20ba24db0e8a0216b715f30519998affda&w=360';
  return (
    <>
          <Component>
              <LeftComponent>
                  <Slide products={products} timer={timer} title={title}></Slide>
              </LeftComponent>    
              <RightComponent>
                <img src={adURL} alt="ad" style={{width:217}}/>
            </RightComponent>
          </Component> 
    </>
  )
}

export default MidSlider
