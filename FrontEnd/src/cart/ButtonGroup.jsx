import {  Button, ButtonGroup, styled } from "@mui/material"
import { useState } from "react";

const Component=styled(ButtonGroup)`
    margin-top:30px;
`;

const StyledButton=styled(Button)`
     border-radius:50%;
`

const GroupedButton = ({item}) => {

    const [quantities,setQuantity]=useState(item.quantity);
    // const quantity=item.quantity;

    const addQuantity=()=>{
      setQuantity(quantities +1)
    }
    const decreseQuantity =()=>{
        setQuantity(quantities=>quantities-1 >0 ? quantities-1:1);
      }
    
  
 

  return (
    <>
    <Component>
        <StyledButton onClick={decreseQuantity}> - </StyledButton>
                  <Button > {quantities} </Button>
              <StyledButton onClick={addQuantity}> + </StyledButton>
    </Component>
    </>
  )
}

export default GroupedButton;
