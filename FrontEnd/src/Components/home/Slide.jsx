import { Box, Button, Divider, styled, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component=styled(Box)`
    margin-top:10px;
    background:#FFFFFF
`


const Deal=styled(Box)`
    padding:15px 20px;
    display:flex;
`

const Timer=styled(Box)`
    display:flex;
    align-items:center;
    margin-left:10px;
    color:#7f7f7f;
`


const Dealtext=styled(Typography)`
    font-size:22px;
    font-weight:600;
    margin-right:25px;
    line-height:20px;
`;

const Viewall=styled(Button)`
    margin-left:auto;
    background-color:#2874f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600;
`;


const Image=styled('img')({
   margin:'auto',
    height:150
});

const Text=styled(Typography)`
    font-size:14px;
    margin-top:5px;
`

const Slide = ({products,title,timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
       
            return <span>{hours}:{minutes}:{seconds} Left</span>;
        
    };

  return (
    <>
          <Component>
              <Deal>
                  <Dealtext>
                      {title}
                </Dealtext>
                  {
                    timer &&
                      <Timer>
                          <img src={timerURL} alt="timer" style={{ width: 24 }} />
                          <Countdown date={Date.now() + 50000000} renderer={renderer} />
                      </Timer>
                  }
                  <Viewall variant='contained' color="primary">View All</Viewall>
              </Deal>
              <Divider></Divider>

              <Carousel
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  centerMode={true}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  containerClass="carousel-container"
              > 
                  {
                      products.map((product) => (
                          <>
                          <Link to={`product/${product._id}`} style={{textDecoration:'none'}}>
                              <Box textAlign="center" style={{padding:"20px 15px"}}>
                                  <Image src={product.url} alt="product" />
                                  <Text style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Text>
                                  <Text style={{color:'green'}}>{product.discount}</Text>
                                  <Text style={{color:'#212121', opacity:'0.6   '}}>{product.tagline}</Text>
                              </Box>
                          </Link>
                          </>
                      ))
                  }
              </Carousel>
          </Component>
    </>
  )
}

export default Slide
