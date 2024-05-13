
import { Box, InputBase,List,ListItem,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';
// import {AiOutlineSearch} from 'react-icons'
const Input=styled(InputBase)`
padding-left:20px;
width:100%;
`;

const SearchContainer =styled(Box)`
background:white;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`;

// const SearchContainer=styled(Box)`
// color:blue;
// display:flex;
// `;

const ListWrapper=styled(List)`
  position:absolute;
  background:#FFFFFF;
  color:#000;
  margin-top:36px;
`
const SearchBar = () => {
  const[text,setText]=useState('');

  const {products} = useSelector((state) => state.getProducts);
  const products1 = products.product;
  // console.log(products1);

  console.log(products1)
  
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getProducts());
  },[dispatch])
  const getText=(text)=>{
    setText(text);
  }
  return (
    <>
        <SearchContainer>
            <Input placeholder='Search for Items and Products,Brands'
              onChange={(e)=>getText(e.target.value)}
              value={text}
              >
              </Input>
                        <SearchIcon ></SearchIcon>   

                        {
                          text &&
                          <ListWrapper>
                            {
                              products1.filter((product)=>
                                product.title.longTitle.toLowerCase().includes(text.toLowerCase())
                              ).map((product)=>(
                                <>
                                <ListItem>
                                  <Link to={`/product/${product._id}`} onClick={()=>setText('')}
                                    style={{textDecoration:'none',color:'inherit'}}
                                  >
                                      {product.title.longTitle}
                                  </Link>
                                </ListItem>
                                </>
                              ))
                            }
                          </ListWrapper>
                        }         
                  </SearchContainer>

    </>
  )
}

export default SearchBar