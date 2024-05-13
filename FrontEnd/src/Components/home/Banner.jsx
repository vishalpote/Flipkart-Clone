import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constant/data";
import styled from "@emotion/styled";

const Image = styled('img')(({theme})=>({
  width:'100%',
  height:280,
  // [theme.breakpoints.down('md')]:{
  //   height:180,
  //   objectFit:'cover'
  // }
}))
// const Image=styled('img')(({theme})=>({
//   width: '100%',
//   height: 280,
//   [theme.breakpoints.down('md')]:{
//     objectFit:'cover',
//     width:180
//   }
// }))
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Banner = () => {
  return (
    <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      keyBoardControl={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      autoPlaySpeed={2000}
      
    >
   

        {
          bannerData.map(item=>(
            <Image src={item.url} alt="banner" key={item.id} />
          ))
        }
    </Carousel>
  )
}

export default Banner;