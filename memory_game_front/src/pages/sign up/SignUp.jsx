import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./signup.css"

import CusButton from '../../components/buttons/CusButton';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        nameError:null,
        emailError: null,
        passwordError: null
    });

    const navigate = useNavigate();

    const signIn = () =>{
        navigate('/signin');
    }

    const changeValues = (e) => {
        if(e.target.name === 'name'){
            setUserData({
                ...userData,
                name: e.target.value
            });
            setErrors({
                ...errors,
                nameError: e.target.value.length === 0 ? "This Field is Required"
                : e.target.value.length < 3 ? "please enter a valid name" : null
            })
        }else if(e.target.name === 'email'){
            setUserData({
                ...userData,
                email: e.target.value,
            });
            setErrors({
                ...errors,
                emailError: e.target.value.length === 0 ? "This Field is Required"
                : (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? null : 'invalid'
            })
        }else if(e.target.name === 'password'){
            setUserData({
                ...userData,
                password: e.target.value
            });
            setErrors({
                ...errors,
                passwordError: e.target.value.length === 0 ? 'Required':
                (e.target.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) ? null : 'invalid'
            });
        }
    }
    
    const submit = async (e) => {
        try{
            e.preventDefault();
        const res = await fetch('http://localhost:8080/api/v1/user/register',{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await res.json();
        navigate('/signin');
        }catch(err){
            console.log(err);
        }

    }

    return (
        <div className="landing">
            <div className="p15">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="main_title">memory</div>
                        <div className="signin__contianer">
                            <div className="signin__txt">Already have an account? &nbsp; </div>
                            {/* <div className="signin__btn"><span>Sign in</span></div> */}
                            <CusButton cusClass={'signin__btn'} callBackFn={signIn}><span>Sign in</span></CusButton>

                        </div>
                    </div >

                    <Row style={{ justifyContent: "center", marginTop: "20px" }}>
                        <Col xxl={5} xl={5} lg={7} md={9}>
                            <div className="form__container">
                                <div className="form__title">Sign up</div>
                                <Form onSubmit={(e) => submit(e)}>
                                    <Form.Group className="mb-1" controlId="formGroupName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name='name' value={userData.name} onChange={(e) => changeValues(e)}/>
                                        {errors && <p style={{ color: 'red', margin: '0',fontSize: '13px' }}>{errors.nameError}</p>}
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='email' value={userData.email} onChange={(e) => changeValues(e)}/>
                                        {errors && <p style={{ color: 'red', margin: '0', fontSize: '13px' }}>{errors.emailError}</p>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' value={userData.password} onChange={(e) => changeValues(e)}/>
                                        {errors && <p style={{ color: 'red', margin: '0', fontSize: '13px' }}>{errors.passwordError}</p>}
                                    </Form.Group>
                                    <Button type="submit" className="btn_sign" disabled={errors.nameError === null && errors.passwordError === null && errors.emailError === null ? false : true}>
                                        Sign up
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SignUp;