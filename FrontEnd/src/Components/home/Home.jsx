import NavBar from "./NavBar";
import Banner from "./bANNER.JSX";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlider from "./MidSlider";
import MideSection from "./MideSection";
// import MidSlider from './MidSlider';

const Container = styled(Box)`
  background: #f2f2f2;
  padding: 10px;
`;
const Home = () => {
  const getproducts = useSelector((state) => state.getProducts);
  const products = getproducts.products.product;
  console.log(getproducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Banner></Banner>
        <MidSlider
          products={products}
          title="Deal Of The Day"
          timer={true}
        ></MidSlider>
        <MideSection></MideSection>
        <Slide
          products={products}
          timer={false}
          title="Top Accessories"
        ></Slide>
        <Slide
          products={products}
          timer={false}
          title=" Discount For You"
        ></Slide>
        <Slide
          products={products}
          timer={false}
          title="Treanding Offers"
        ></Slide>
        <Slide
          products={products}
          timer={false}
          title=" Season's Top Picks"
        ></Slide>
        <Slide
          products={products}
          timer={false}
          title=" Suggested Items"
        ></Slide>
      </Container>
    </>
  );
};

export default Home;
