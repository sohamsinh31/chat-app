import { Button } from "@mui/material";
import styled  from "styled-components";
import { Head } from "next/document";
import {auth } from "../firebase";

function login() {

    const SignIn = () => {
        auth.SignInWithPopup(provider).catch(alert)
    }

    return  (
        <Container>
            <Head>
                <title> Login </title>
            </Head>

            <LoginContainer>
                <Logo src = ""/>
                <Button onclick={SignIn} variant="outlined" > 
                Sign in with Google
                </Button>
            </LoginContainer>
        </Container>
        
    );
}

export default login

const Container = styled.div`
    display: grid;
    place-items: center;
    height:100vh;
    background-color:whitesmoke ;
`;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction  : column;
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow : 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height:200px ;
    width:200px ;
    margin-bottom:50px ;
`;