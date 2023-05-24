import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';
const SignIn = () => {


    const navigate = useNavigate()
    const [remeber, setRemember] = useState(true);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const changeValues = (e) => {
        if (e.target.name === 'email') {
            setUserData({
                ...userData,
                email: e.target.value,
            });
        } else if (e.target.name === 'password') {
            setUserData({
                ...userData,
                password: e.target.value
            });
        }
    }


    const submit = async (e) => {
        try {
            e.preventDefault();
            const res = await fetch('http://localhost:8080/api/v1/user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await res.json();
            localStorage.setItem('userId', data.id);
            localStorage.setItem('token', data.token)
            if(remeber){
                localStorage.setItem('remember', true)
            }else{
                localStorage.setItem('remember', false)
            }
            navigate('/startgame',{
                replace: true
            },);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="landing">
            <div className="p15">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="main_title">memory</div>
                    </div >

                    <Row style={{ justifyContent: "center", marginTop: "20px" }}>
                        <Col xxl={5} xl={5} lg={7} md={9}>
                            <div className="form__container">
                                <div className="form__title">Sign in</div>
                                <Form onSubmit={(e) => submit(e)}>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='email' value={userData.email} onChange={(e) => changeValues(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' value={userData.password} onChange={(e) => changeValues(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type={"checkbox"}
                                            label={`Remember me?`}
                                            checked={remeber}
                                            onChange={(e) => {
                                                setRemember(!remeber);
                                            }}
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="btn_sign" disabled={userData.email === '' || userData.password === '' ? true: false}>
                                        Sign in
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

export default SignIn;