import styled from '@emotion/styled';
import {Box, Button, Dialog, TextField, Typography} from '@mui/material';
import {  useContext, useState } from 'react';
import { authnaticationSignup } from '../../service/api';
import { Datacontext } from '../../../context/Dataprovider';
import { loginRoute, signupRoute } from '../../utils/apiRoutes';
import axios from 'axios';
import {toast, Toaster } from 'react-hot-toast';
const Component = styled(Box)`
        height:70vh;
        width:90vh;
    `;

const Image = styled(Box)`
        background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
        height:80%;
        width:28%;
        padding:45px 35px;
        & >h5 ,& >p{
            color:#ffffff;
            font-weight:600;
        }
    `

const Wrapper = styled(Box)`
        display:flex;
        flex-direction:column;
        padding:0px 30px;
        flex:1;
        & >div ,& > button, & > p{
            margin-top:20px;
        }
    `

const LoginButton = styled(Button)`
        text-transform:none;
        background-color:#fb641b;
        color:#fff;
        height:48px;
        border-radius:2px;
    `

const Requestotp = styled(Button)`
        text-transform:none;
        background-color:#fff;
        color:#2874f0;
        height:48px;
        border-radius:2px;
        box-shadow:0 2px 5px 0 rgba(0 0 0/20%);
    `;

const Text = styled(Typography)`
        font-size:12px;
        color:#878787;
    `;

const Creatacc = styled(Typography)`
        font-size:14px;
        text-align:center;
        color:#2874f0;
        font-weight:600;
        cursor:pointer;
    `;

const Logindialog = ({open,setOpen}) => {
    const accountswitch={
        login:{
            view:"login",
            heading:"Login",
            subHeading:"Get Access To Your Order,whishlist and recomdations"
        },
        signup:{
            view:"signup",
            heading:"Look's Like You Are New here",
            subHeading:"Sign up With Your Mobile Number To get Started"
        }
    }

    const [account,toggleAcoount]=useState(accountswitch.login);

    const {setAccount}=useContext(Datacontext);

    const togglesignup =()=>{
        toggleAcoount(accountswitch.signup);
    }
    const handleclose = () => {
        setOpen(false);
        toggleAcoount(accountswitch.login);
    };

    const signupvalue={
        firstname:'',
        lastname:'',
        username:'',    
        email:'',
        password:'',
    };

   
    const [signup,setSignup]=useState(signupvalue);

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const onInputchange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        // console.log(signup);
    };
   

    
    const signupUser=async()=>{
        try {
            const res = await axios.post(signupRoute, signup, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = res.data.data;
            if(data.firstname!==username && data.password!==password){
                toast.error("Please enter a username and password..!!");
            }
            setAccount(data.firstname);
            handleclose();
            // console.log(data);
        } catch (error) {
            console.log(error.message);
           return toast.error(error.message);
        }
            
    }


    const handleLogin=async()=>{
        try {
            const res = await axios.post(loginRoute, {username,password},{
                headers:{
                    "Content-Type": "application/json"
                }
            })

            const data=res.data.data;
            setAccount(data.firstname);
            handleclose();  
            // console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <>
          <Dialog open={open} onClose={handleclose} PaperProps={{sx:{maxWidth:'unset'}}}>

              <Component>
                <Box style={{display:'flex',height:'100%'}}>
                {
                    account.view==="login" ?
                    (
                                  <Image style={{height:"80%"}}>
                                      <Typography variant='h5'>{account.heading}</Typography>
                                      <Typography>{account.subHeading}</Typography>
                                  </Image>
                    ) 
                    :
                    (
                                  <Image style={{height:"80%"}}>
                                      <Typography variant='h5'>{account.heading}</Typography>
                                      <Typography>{account.subHeading}</Typography>
                                  </Image>
                    )
                }
                {
                        account.view==="login" ?
                       ( <Wrapper>
                                  <TextField variant='standard' label="Enter Email Or Name" value={username} name="username" onChange={(e) => setUsername(e.target.value)}></TextField>
                                  <TextField variant='standard' label="Enter Your Password Here" value={password} name="password" onChange={(e) =>setPassword(e.target.value) }></TextField>
                            <Text>By Continuing,you agree to flipkart's Terms of Us and Privacy policy</Text>
                            <LoginButton onClick={handleLogin}>Login</LoginButton>
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <Requestotp>Request OTP</Requestotp>
                            <Creatacc onClick={()=>togglesignup()}>New To Flipkart? Create an account</Creatacc>
                    </Wrapper>)
                    :
                        
                        (<Wrapper>
                                  <TextField variant='standard' name="firstname" onChange={(e)=>onInputchange(e)} label="Enter FirstName"></TextField>
                                  <TextField variant='standard' name="lastname" onChange={(e)=>onInputchange(e)} label="Enter LastName"></TextField>
                                  <TextField variant='standard' name="username" onChange={(e)=>onInputchange(e)} label="Enter UserName"></TextField>
                                  <TextField variant='standard' name="email" onChange={(e)=>onInputchange(e)} label="Enter Email"></TextField>
                                  {/* <TextField variant='standard' name="phone" onChange={(e)=>onInputchange(e)} label="Enter Phone"></TextField> */}
                                  <TextField variant='standard' name="password" onChange={(e)=>onInputchange(e)} label="Enter Your Password Here"></TextField>
                                  
                                  <LoginButton onClick={signupUser}>Continue..</LoginButton>
                                  
                        </Wrapper>)

                }

                  </Box>
            </Component>
              <Toaster></Toaster>
            </Dialog> 
    </>
  )
}

export default Logindialog
