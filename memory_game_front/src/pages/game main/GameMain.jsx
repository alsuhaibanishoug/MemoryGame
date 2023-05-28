import React, { useEffect, useState } from "react";
import './gameMain.css'
import CusButton from "../../components/buttons/CusButton";
import { Col } from "react-bootstrap";
import Result from "../../components/game result/GameResult";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameMain = () => {

    const navigate = useNavigate();
    const [numberList6, setNumberList6] = useState([
        { id: 1, num: 1, state: '' },
        { id: 1, num: 1, state: '' },
        { id: 2, num: 2, state: '' },
        { id: 2, num: 2, state: '' },
        { id: 3, num: 3, state: '' },
        { id: 3, num: 3, state: '' },
        { id: 4, num: 4, state: '' },
        { id: 4, num: 4, state: '' },
        { id: 5, num: 5, state: '' },
        { id: 5, num: 5, state: '' },
        { id: 6, num: 6, state: '' },
        { id: 6, num: 6, state: '' },
        { id: 7, num: 7, state: '' },
        { id: 7, num: 7, state: '' },
        { id: 8, num: 8, state: '' },
        { id: 8, num: 8, state: '' },
        { id: 9, num: 9, state: '' },
        { id: 9, num: 9, state: '' },
        { id: 10, num: 10, state: '' },
        { id: 10, num: 10, state: '' },
        { id: 11, num: 11, state: '' },
        { id: 11, num: 11, state: '' },
        { id: 12, num: 12, state: '' },
        { id: 12, num: 12, state: '' },
        { id: 13, num: 13, state: '' },
        { id: 13, num: 13, state: '' },
        { id: 14, num: 14, state: '' },
        { id: 14, num: 14, state: '' },
        { id: 15, num: 15, state: '' },
        { id: 15, num: 15, state: '' },
        { id: 16, num: 16, state: '' },
        { id: 16, num: 16, state: '' },
        { id: 17, num: 17, state: '' },
        { id: 17, num: 17, state: '' },
        { id: 18, num: 18, state: '' },
        { id: 18, num: 18, state: '' },
    ].sort(() => Math.random() - 0.5));
    
    const [numberList4, setNumberList4] = useState([
        { id: 1, num: 1, state: '' },
        { id: 1, num: 1, state: '' },
        { id: 2, num: 2, state: '' },
        { id: 2, num: 2, state: '' },
        { id: 3, num: 3, state: '' },
        { id: 3, num: 3, state: '' },
        { id: 4, num: 4, state: '' },
        { id: 4, num: 4, state: '' },
        { id: 5, num: 5, state: '' },
        { id: 5, num: 5, state: '' },
        { id: 6, num: 6, state: '' },
        { id: 6, num: 6, state: '' },
        { id: 7, num: 7, state: '' },
        { id: 7, num: 7, state: '' },
        { id: 8, num: 8, state: '' },
        { id: 8, num: 8, state: '' }
    ].sort(() => Math.random() - 0.5))



    const [iconsList6, useIconList6] = useState([
        { id: 1, icon: "fa-solid fa-futbol", state: '' },
        { id: 1, icon: "fa-solid fa-futbol", state: '' },
        { id: 2, icon: "fa-solid fa-snowflake", state: '' },
        { id: 2, icon: "fa-solid fa-snowflake", state: '' },
        { id: 3, icon: "fa-solid fa-sun", state: '' },
        { id: 3, icon: "fa-solid fa-sun", state: '' },
        { id: 4, icon: "fa-solid fa-moon", state: '' },
        { id: 4, icon: "fa-solid fa-moon", state: '' },
        { id: 5, icon: "fa-solid fa-car", state: '' },
        { id: 5, icon: "fa-solid fa-car", state: '' },
        { id: 6, icon: "fa-solid fa-bug", state: '' },
        { id: 6, icon: "fa-solid fa-bug", state: '' },
        { id: 7, icon: "fa-solid fa-hand", state: '' },
        { id: 7, icon: "fa-solid fa-hand", state: '' },
        { id: 8, icon: "fa-solid fa-place-of-worship", state: '' },
        { id: 8, icon: "fa-solid fa-place-of-worship", state: '' },
        { id: 9, icon: "fa-solid fa-heart", state:''},
        { id: 9, icon: "fa-solid fa-heart", state: '' },
        { id: 10, icon: "fa-solid fa-headphones", state: '' },
        { id: 10, icon: "fa-solid fa-headphones", state: '' },
        { id: 11, icon: "fa-solid fa-palette", state: '' },
        { id: 11, icon: "fa-solid fa-palette", state: '' },
        { id: 12, icon: "fa-solid fa-bicycle", state: '' },
        { id: 12, icon: "fa-solid fa-bicycle", state: '' },
        { id: 13, icon: "fa-solid fa-feather", state: '' },
        { id: 13, icon: "fa-solid fa-feather", state: '' },
        { id: 14, icon: "fa-solid fa-leaf", state: '' },
        { id: 14, icon: "fa-solid fa-leaf", state: '' },
        { id: 15, icon: "fa-solid fa-tree", state: '' },
        { id: 15, icon: "fa-solid fa-tree", state: '' },
        { id: 16, icon: "fa-solid fa-vihara", state: '' },
        { id: 16, icon: "fa-solid fa-vihara", state: '' },
        { id: 17, icon: "fa-solid fa-turkish-lira-sign", state: '' },
        { id: 17, icon: "fa-solid fa-turkish-lira-sign", state: '' },
        { id: 18, icon: "fa-solid fa-music", state: '' },
        { id: 18, icon: "fa-solid fa-music", state: '' },
    ].sort(() => Math.random() - 0.5))

    const [iconsList4, setIconsList4] = useState([
        { id: 1, icon: "fa-solid fa-futbol", state: '' },
        { id: 1, icon: "fa-solid fa-futbol", state: '' },
        { id: 2, icon: "fa-solid fa-snowflake", state: '' },
        { id: 2, icon: "fa-solid fa-snowflake", state: '' },
        { id: 3, icon: "fa-solid fa-sun", state: '' },
        { id: 3, icon: "fa-solid fa-sun", state: '' },
        { id: 4, icon: "fa-solid fa-moon", state: '' },
        { id: 4, icon: "fa-solid fa-moon", state: '' },
        { id: 5, icon: "fa-solid fa-car", state: '' },
        { id: 5, icon: "fa-solid fa-car", state: '' },
        { id: 6, icon: "fa-solid fa-bug", state: '' },
        { id: 6, icon: "fa-solid fa-bug", state: '' },
        { id: 7, icon: "fa-solid fa-hand", state: '' },
        { id: 7, icon: "fa-solid fa-hand", state: '' },
        { id: 8, icon: "fa-solid fa-place-of-worship", state: '' },
        { id: 8, icon: "fa-solid fa-place-of-worship", state: '' }
    ].sort(() => Math.random() - 0.5));
    const [movesCounter, setMovesCounter] = useState(0);
    const [prev, setPrev] = useState(-1)
    const [isStarted, setIsStarted] = useState(false);
    const [time, setTime] = useState(0);
    const [finished, setFinished] = useState(false);

    const checkNumber6 = (curr) => {
        if (curr === prev || numberList6[prev].state === 'correct') {
            return
        }
        if (numberList6[prev].id === numberList6[curr].id) {
            numberList6[curr].state = 'correct';
            numberList6[prev].state = 'correct';
            setNumberList6([...numberList6]);
            setPrev(-1);
            setMovesCounter(movesCounter + 1);
        } else {
            numberList6[prev].state = 'wrong';
            numberList6[curr].state = 'wrong';
            setNumberList6([...numberList6]);
            setMovesCounter(movesCounter + 1);
            setTimeout(() => {
                numberList6[curr].state = '';
                numberList6[prev].state = '';
                setNumberList6([...numberList6]);
                setPrev(-1);
            }, 1000)
        }
    }

    const completedNumber6 = () => {
        let isCompleted = numberList6.every((ele) => ele.state === 'correct');
        if (isCompleted) {
            clearInterval(intervalId);
            setFinished(true);
        }
    }

    const handelClickNumber6 = (id) => {
        if (prev === -1) {
            if (numberList6[id].state !== 'correct') {
                numberList6[id].state = 'active';
                setNumberList6([...numberList6])
                setPrev(id);
            }
        } else {
            checkNumber6(id);
            completedNumber6();
        }

        if (isStarted === false) {
            setIsStarted(true);
        }
    }

    const checkNumber4 = (curr) => {
        if (curr === prev || numberList4[prev].state === 'correct') {
            return
        }
        if (numberList4[prev].id === numberList4[curr].id) {
            numberList4[curr].state = 'correct';
            numberList4[prev].state = 'correct';
            setNumberList4([...numberList4]);
            setPrev(-1);
            setMovesCounter(movesCounter + 1);
        } else {
            numberList4[prev].state = 'wrong';
            numberList4[curr].state = 'wrong';
            setNumberList4([...numberList4]);
            setMovesCounter(movesCounter + 1);
            setTimeout(() => {
                numberList4[curr].state = '';
                numberList4[prev].state = '';
                setNumberList4([...numberList4]);
                setPrev(-1);
            }, 1000)
        }
    }

    const completedNumber4 = () => {
        let isCompleted = numberList4.every((ele) => ele.state === 'correct');
        if (isCompleted) {
            clearInterval(intervalId);
            setFinished(true);
        }
    }

    const handelClickNumber4 = (id) => {
        if (prev === -1) {
            if (numberList4[id].state !== 'correct') {
                numberList4[id].state = 'active';
                setNumberList4([...numberList4])
                setPrev(id);
            }
        } else {
            checkNumber4(id);
            completedNumber4();
        }

        if (isStarted === false) {
            setIsStarted(true);
        }
    }
    

    const checkIcon6= (curr) => {
        if (curr === prev || iconsList6[prev].state === 'correct') {
            return
        }
        if (iconsList6[prev].id === iconsList6[curr].id) {
            iconsList6[curr].state = 'correct';
            iconsList6[prev].state = 'correct';
            useIconList6([...iconsList6]);
            setPrev(-1);
            setMovesCounter(movesCounter + 1);
        } else {
            iconsList6[prev].state = 'wrong';
            iconsList6[curr].state = 'wrong';
            useIconList6([...iconsList6]);
            setMovesCounter(movesCounter + 1);
            setTimeout(() => {
                iconsList6[curr].state = '';
                iconsList6[prev].state = '';
                useIconList6([...iconsList6]);
                setPrev(-1);
            }, 1000)
        }
    }

    const completedIcon6 = () => {
        let isCompleted = iconsList6.every((ele) => ele.state === 'correct');
        if (isCompleted) {
            clearInterval(intervalId);
            setFinished(true);
        }
    }

    const handelClickIcon6 = (id) => {
        if (prev === -1) {
            if (iconsList6[id].state !== 'correct') {
                iconsList6[id].state = 'active';
                useIconList6([...iconsList6])
                setPrev(id);
            }
        } else {
            checkIcon6(id);
            completedIcon6();
        }

        if (isStarted === false) {
            setIsStarted(true);
        }
    }

    const checkIcon4 = (curr) => {
        if (curr === prev || iconsList4[prev].state === 'correct') {
            return
        }
        if (iconsList4[prev].id === iconsList4[curr].id) {
            iconsList4[curr].state = 'correct';
            iconsList4[prev].state = 'correct';
            setIconsList4([...iconsList4]);
            setPrev(-1);
            setMovesCounter(movesCounter + 1);
        } else {
            iconsList4[prev].state = 'wrong';
            iconsList4[curr].state = 'wrong';
            setIconsList4([...iconsList4]);
            setMovesCounter(movesCounter + 1);
            setTimeout(() => {
                iconsList4[curr].state = '';
                iconsList4[prev].state = '';
                setIconsList4([...iconsList4]);
                setPrev(-1);
            }, 1000)
        }
    }

    const completedIcon4 = () => {
        let isCompleted = iconsList4.every((ele) => ele.state === 'correct');
        if (isCompleted) {
            clearInterval(intervalId);
            setFinished(true);
        }
    }

    const handelClickIcon4 = (id) => {
        if (prev === -1) {
            if (iconsList4[id].state !== 'correct') {
                iconsList4[id].state = 'active';
                setIconsList4([...iconsList4])
                setPrev(id);
            }
        } else {
            checkIcon4(id);
            completedIcon4();
        }

        if (isStarted === false) {
            setIsStarted(true);
        }
    }

    const location = useLocation();
    const [data, setData] = useState(location.state)
    let intervalId;
    useEffect(() => {
        if (isStarted) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isStarted, time])


    let minutes = Math.floor((time % 360000) / 6000);

    let seconds = Math.floor((time % 6000) / 100);


    const reset = () => {
        if(location.state.type === 'icons' && location.state.grid === 6){
            iconsList6.forEach(el => {
                el.state = ''
            });
            useIconList6([...iconsList6]);
        }else if(location.state.type === 'icons' && location.state.grid === 4){
            iconsList4.forEach(el => {
                el.state = ''
            });
            setIconsList4([...iconsList4]);
        }else if(location.state.type === 'numbers' && location.state.grid === 6){
            numberList6.forEach(el => {
                el.state = ''
            });
            setNumberList6([...numberList6]);
        }else if(location.state.type === 'numbers' && location.state.grid === 4){
            numberList4.forEach(el => {
                el.state = ''
            });
            setNumberList4([...numberList4]);
        }
        setMovesCounter(0);
        clearInterval(intervalId);
        setTime(0);
        setIsStarted(false);
    }


    return (
        <div className="game_main">
            <div className="header">
                <div className="memo" onClick={() => {
                    navigate('/startgame',{replace:true})
                }} >memory</div>
                <div className="buts">
                    <CusButton cusClass={'res'} callBackFn={reset}>Restart</CusButton>
                    <CusButton cusClass={'new'} callBackFn={() => {
                        navigate('/setTheme',{
                            replace: true
                        })
                    }}>New Game</CusButton>

                </div>
            </div>
            <div className="container">

                {data.type === 'icons' && data.grid === 6 ? iconsList6.map((item, index) => {
                    const cusClass1 = location.state.preview ? 'hideCard' : '';
                    const cusClass2 = location.state.preview ? 'hideChiled' : '';
                    const itemClass = item.state ? 'active ' + item.state : '';
                    return (
                        <div className={"card " + itemClass + ' ' + cusClass1} style={location.state.grid === 6 ? {width: '15%', height: '13%', fontSize: '40px'}: 'null'} key={index} onClick={() => handelClickIcon6(index)}><FontAwesomeIcon icon={item.icon} className={cusClass2}/></div>
                    )
                }): data.type === 'icons' && data.grid === 4 ? iconsList4.map((item, index) => {
                    const cusClass1 = location.state.preview ? 'hideCard' : '';
                    const cusClass2 = location.state.preview ? 'hideChiled' : '';
                    const itemClass = item.state ? 'active ' + item.state : '';
                    return (
                        <div className={"card " + itemClass + ' ' + cusClass1} style={location.state.grid === 6 ? {width: '15%', height: '13%', fontSize: '40px'}: null} key={index} onClick={() => handelClickIcon4(index)}><FontAwesomeIcon icon={item.icon} className={cusClass2}/></div>
                    )
                }): data.type === 'numbers' && data.grid === 6 ? numberList6.map((item, index) => {
                    const cusClass1 = location.state.preview ? 'hideCard' : '';
                    const cusClass2 = location.state.preview ? 'hideChiled' : '';
                    const itemClass = item.state ? 'active ' + item.state : '';
                    return (
                        <div className={"card " + itemClass+ ' ' + cusClass1} style={location.state.grid === 6 ? {width: '15%', height: '13%', fontSize: '40px'}: null} key={index} onClick={() => handelClickNumber6(index)}><div className={cusClass2}>{item.num}</div></div>
                    )
                }): numberList4.map((item, index) => {
                    const cusClass1 = location.state.preview ? 'hideCard' : '';
                    const cusClass2 = location.state.preview ? 'hideChiled' : '';
                    const itemClass = item.state ? 'active ' + item.state : '';
                    return (
                        <div className={"card " + itemClass + ' ' + cusClass1} style={location.state.grid === 6 ? {width: '15%', height: '13%', fontSize: '40px'}: null} key={index} onClick={() => handelClickNumber4(index)}><div className={cusClass2}>{item.num}</div></div>
                    )
                })}
            </div>
            <Col xxl={5} xl={6} lg={6} md={8} sm={12} xs={12} className="footer">
                <div className='tile'>
                    <div className='tile_title'>Time</div>
                    <div className='tile_content'>
                        {minutes.toString().padStart(1, "0")}:{seconds.toString().padStart(2, "0")}
                    </div>
                </div>
                <div className='tile'>
                    <div className='tile_title'>Moves</div>
                    <div className='tile_content'>{movesCounter}</div>
                </div>
            </Col>
            {finished && <Result moves={movesCounter} time={`${minutes.toString().padStart(1, "0")}:${seconds.toString().padStart(2, "0")}`} cb={() => {
                reset();
                setFinished(false);
            }}/>}
        </div>
    );
}

export default GameMain;