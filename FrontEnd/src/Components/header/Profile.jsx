// import React from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Menu, MenuItem, Typography,styled } from "@mui/material"
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const  Component=styled(Menu)`
 margin-top:5px;
`

const Logout=styled(Typography)`
    margin-left:20px;
    font-size:14px;
`
const Profile = ({ account, setAccount }) => {

    const [open,setOpen]=useState(false);

    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    const logout=()=>{
        setAccount('');
    }
  return (
    <>
     <Box onClick={handleClick}>
              <Typography style={{ marginTop: 2 ,cursor:"pointer"}}>{account}</Typography>    
    </Box> 

          <Component
              id="basic-menu"
              anchorEl={open}
              open={Boolean(open)}
              onClose={handleClose}
          >
              <MenuItem onClick={()=>{handleClose(); logout()}}>
                  <PowerSettingsNewIcon color='primary' fontSize='small'></PowerSettingsNewIcon>
                  <Logout>Logout</Logout>
              </MenuItem>
          </Component>
          
    </>
  )
}

export default Profile
