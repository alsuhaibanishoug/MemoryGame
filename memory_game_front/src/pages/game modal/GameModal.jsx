import React, { useState } from "react";
import './gameModal.css'
import { Col } from "react-bootstrap";
import CusButton from "../../components/buttons/CusButton";
import { useNavigate } from "react-router-dom";
const GameModal = () => {

    const navigate = useNavigate();

    const [gameTheme, setGameTheme] = useState({
        type: 'numbers',
        preview: true,
        grid: 4
    });

    const [buttonsClasses, setButtonsClasses] = useState({
        numbers: true,
        icons: false,
        dnShow: false,
        show: true,
        grid6: false,
        grid4: true
    });

    const  changeThemeSettings = (type) => {
        if(type === 'numbers'){
            setButtonsClasses({
                ...buttonsClasses,
                numbers: true,
                icons: false
            });

            setGameTheme({
                ...gameTheme,
                type: 'numbers'
            })
        }
        else if(type === 'icons'){
            setButtonsClasses({
                ...buttonsClasses,
                numbers: false,
                icons: true
            });

            setGameTheme({
                ...gameTheme,
                type: 'icons'
            })
        }
        else if(type === 'dnShow'){
            setButtonsClasses({
                ...buttonsClasses,
                dnShow: true,
                show: false
            });

            setGameTheme({
                ...gameTheme,
                preview: false
            })
        }
        else if(type === 'show'){
            setButtonsClasses({
                ...buttonsClasses,
                dnShow: false,
                show: true
            });

            setGameTheme({
                ...gameTheme,
                preview: true
            })
        }
        else if(type === 'grid4'){
            setButtonsClasses({
                ...buttonsClasses,
                grid4: true,
                grid6: false
            });

            setGameTheme({
                ...gameTheme,
                grid: 4
            })
        }else{
            setButtonsClasses({
                ...buttonsClasses,
                grid4: false,
                grid6: true
            });

            setGameTheme({
                ...gameTheme,
                grid: 6
            })
        }

       
    }

    const start = () => {
        navigate('/game',{state:gameTheme});
    }
    return (
        <div className="modal_bg">
            <div className="modal_header" onClick={() => {
                    navigate('/startgame',{replace:true})
                }} >memory</div>
            <Col xxl={5} xl={5} lg={7} md={8} sm={10} xs={11} className="modal_content ">
                <div className="close_btn_container">
                <div className="close_btn" onClick={() => {navigate(-1)}}>
                    <img src="./cross.png" alt="" />
                </div>
                </div>
                <div className="modal_content_inner">
                    <div className="mb-4">
                        <div>Select theme</div>
                        <div className="theme_buttons">
                            <CusButton cusClass={`but ${ buttonsClasses.numbers ? 'active' : ''}`} callBackFn={() => changeThemeSettings('numbers')}>Numbers</CusButton>
                            <CusButton cusClass={`but ${ buttonsClasses.icons ? 'active' : ''}`} callBackFn={() => changeThemeSettings('icons')}>Icons</CusButton>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>Preview</div>
                        <div className="theme_buttons">
                            <CusButton cusClass={`but ${ buttonsClasses.dnShow ? 'active' : ''}`} callBackFn={() => changeThemeSettings('dnShow')}>Don't show cards</CusButton>
                            <CusButton cusClass={`but ${ buttonsClasses.show ? 'active' : ''}`} callBackFn={() => changeThemeSettings('show')}>Show cards</CusButton>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>Grid size</div>
                        <div className="theme_buttons">
                            <CusButton cusClass={`but ${ buttonsClasses.grid4 ? 'active' : ''}`} callBackFn={() => changeThemeSettings('grid4')}>4x4</CusButton>
                            <CusButton cusClass={`but ${ buttonsClasses.grid6 ? 'active' : ''}`} callBackFn={() => changeThemeSettings('grid6')}>6x6</CusButton>
                        </div>
                    </div>
                    <CusButton cusClass={'start_btn'} callBackFn={() => start()}>Start Game</CusButton>
                </div>
            </Col>
        </div>
    )
}

export default GameModal;