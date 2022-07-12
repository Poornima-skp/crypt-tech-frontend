import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import { GoogleLogin } from 'react-google-login'
import { gapi } from "gapi-script";
import HttpsIcon from '@mui/icons-material/Https';

import Input from './Input'

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    gapi.load("client:auth2", () => {
        gapi.client.init({
            clientId:
                "*****.apps.googleusercontent.com",
            plugin_name: "chat",
        });
    });

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        // console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token } })

            navigate('/forum');
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error);
        // console.log("Google Sign In Failed")
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }} elevation={3} >

                <Avatar sx={{ margin: 1, backgroundColor: 'red' }}>
                    <HttpsIcon />
                </Avatar>
                <Typography variant="h5"> {isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form onSubmit={handleSubmit} sx={{ margin: 3 }}>
                    <Grid container direction={'column'} rowSpacing={2} >
                        {
                            isSignUp && (
                                <>
                                    <Input name='firstname' label="First Name" handleChange={handleChange} half />
                                    <Input name='lastname' label="Last Name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmpassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>

                    {/* SINGN UP or SIGN IN */}
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 3 }}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>

                    {/* GOOGLE LOGIN */}
                    <GoogleLogin
                        clientId='773343765276-f7v1psg6nrqvo5b9jtm8c4cnt9q3efl1.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button
                                sx={{ spacing: 2, marginTop: 2 }}
                                color="primary"
                                fullWidth onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                // startIcon={<Icon />} 
                                variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />


                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>


            </Paper>
        </Container>
    )
}


export default Auth;
