import { useEffect } from "react"
import { getProductDetails } from "../../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { Box, Grid, styled, Typography } from '@mui/material'
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
  background:#f2f2f2;
  matgin-top:55px;
`

const Container = styled(Grid)(({theme})=>({
  background:'#FFFFFF',
  display:'flex',
  [theme.breakpoints.down('md')]:{
    margin:0,
  }
}))


const Rightcontainer = styled(Grid)`
  margin-top:55px;
`

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);


  return (
    <>
      <Component>
        {
          product && Object.keys(product).length &&
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product}></ActionItem>
            </Grid>


              <Rightcontainer  item lg={8} md={8} sm={8} xs={12}>
                <ProductDetail  product={product}></ProductDetail>
            </Rightcontainer>
          </Container>
        }
      </Component>
    </>
  )
}

export default DetailView
