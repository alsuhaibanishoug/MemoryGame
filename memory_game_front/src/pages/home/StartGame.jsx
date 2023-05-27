import React from 'react';
import { Container } from 'react-bootstrap';
import CusButton from '../../components/buttons/CusButton';
import './startgame.css'
import { useNavigate } from 'react-router-dom';

const StartGame = () => {
    const navigate = useNavigate();

    const goToProfile = () =>{
        navigate('/profile');
    }

    const themeModal = () => {
        navigate('/setTheme')
    }
    return(
        <div className="landing">
            <div className="p15">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="main_title">memory</div>
                    {/* <div className="signin">Sign in</div> */}
                    <div className="d-flex justify-content-between align-items-center gap-2" >
                    <CusButton cusClass={'signin__btn'} callBackFn={goToProfile}><span>Account</span></CusButton>
                    <CusButton cusClass={'signin__btn'} callBackFn={()=>{
                        localStorage.clear();
                        navigate('/',{replace: true});
                    }}><span>Log Out</span></CusButton>
                    </div>
                </div >
                <div className="bTxt">
                    <span>Uncover to matching cardsat once to</span> <br />
                    <span>eleminate them from the game</span> <br /> <br />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    {/* <div className="signup__btn"><p>Sign up</p></div> */}
                    <CusButton cusClass={'signup__btn'} callBackFn={themeModal}><p>Start Game</p></CusButton>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default StartGame;