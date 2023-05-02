import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { useState} from 'react';
import { TextareaAutosize } from '@mui/material';

const theme = createTheme();
function Signup() {
    const [name,setname]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const [address,setAddress]=useState("")
    const [state,setState]=useState("")
    const [pincode,setPincode]=useState("")

    const navigate=useNavigate()
    const Submit=(e)=>{
      e.preventDefault();
      if (!email||!name||!contact||!address||!state||!pincode)
      {
        alert("Enter the fields......")
      }
      else{
        navigate("/home")
      }
            
   }
   
   return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e)=>{
                    setname(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  name="contact"
                  autoComplete="contact"
                  onChange={(e)=>{
                    setContact(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={20}>

            <TextareaAutosize
                    aria-label="Address"
                    minRows={5}
                    placeholder="Address"
                    label="Address"
            style={{ width: 400 }}
            onChange={(e)=>{
            setAddress(e.target.value)}}
            />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                  onChange={(e)=>{
                    setState(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="pincode"
                  label="Pincode"
                  type="pincode"
                  id="pincode"
                  autoComplete="new-pincode"
                  onChange={(e)=>{
                    setPincode(e.target.value)
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Submit}
            >
              Sign Up
            </Button>         
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Signup