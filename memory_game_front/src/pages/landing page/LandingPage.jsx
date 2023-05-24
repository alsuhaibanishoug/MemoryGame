import React from 'react';


import { Container } from "react-bootstrap";
import "./LandingPage.css"
import CusButton from '../../components/buttons/CusButton';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();
    const signUp = () =>{
        navigate('/signup');
    }

    const signIn = () =>{
        navigate('/signin');
    }


    return(
        <div className="landing">
            <div className="p15">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="main_title">memory</div>
                    {/* <div className="signin">Sign in</div> */}
                    <CusButton callBackFn={signIn} cusClass={'signin'}>Sign in</CusButton>
                </div >
                <div className="bTxt">
                    <span>Uncover to matching cardsat once to</span> <br />
                    <span>eleminate them from the game</span> <br /> <br />
                    Sign up/in to save results. 
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    {/* <div className="signup__btn"><p>Sign up</p></div> */}
                    <CusButton callBackFn={signUp} cusClass={'signup__btn'}><p>Sign up</p></CusButton>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default LandingPage;