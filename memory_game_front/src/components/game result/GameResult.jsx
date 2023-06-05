import React, { useEffect } from "react";
import './gameResult.css'
import { Col } from "react-bootstrap";
import CusButton from "../buttons/CusButton";
import { useNavigate } from "react-router-dom";

const Result = ({time, moves, cb}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        const obj = {
            moves: moves,
            time: time
        }
        fetch('http://localhost:8080/api/v1/game/add',{
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(obj)
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((e) => console.log(e));
    },[])
    return (
        <div>
            <div className="result_modal">

            </div>
            <div className="result_modal_content">
                <Col xxl={5} xl={5} lg={7} md={8} sm={10} xs={11} className="inner_content">
                    <div className="title mb-1">You did it!</div>
                    <div className="subtitle mb-2">Game over! Here's how you got on...</div>
                    <div className='tile mb-3'>
                        <div className='tile_title'>Time Elapsed</div>
                        <div className='tile_content'>{time}</div>
                    </div>
                    <div className='tile mb-5'>
                        <div className='tile_title'>Moves Taken</div>
                        <div className='tile_content'>{moves} Moves</div>
                    </div>
                    <div className="footer">
                        <CusButton cusClass={'reset'} callBackFn={() => cb()}>Restart</CusButton>
                        <CusButton cusClass={'newgame'} callBackFn={() => {
                            navigate('/setTheme',{
                                replace: true
                            })
                        }}>Setup New Game</CusButton>
                    </div>
                </Col>

            </div>
        </div>
    );
}

export default Result;