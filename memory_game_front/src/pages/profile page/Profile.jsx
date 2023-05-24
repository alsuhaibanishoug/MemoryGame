import React, { useEffect, useState } from 'react';
import './profile.css'
import prof from "./profile.png"

const Profile = () => {

    const token = localStorage.getItem('token');
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    });

    const [games, setGames] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/api/v1/user/',{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data)=>{
            setGames(data.games);
            setUserData({
                name: data.user.name,
                email: data.user.email
            })
        })
        .catch((e) => console.log(e));
    },[])


    return (
        <div className='profile_container'>
            <div className='p16'>
                <div className='memo'>memory</div>
                <div className='profile_inner'>
                    <div className='flex'>
                    <div className='profile__info'>
                        <div className='profile__image'>
                            <img src={prof} alt="" width={"100%"}/>
                        </div>
                        <div >
                            {userData.name}
                        </div>
                        <div>
                           {userData.email}
                        </div>
                    </div>
                    <div className='horizontal_divider'></div>
                    <div className='top_3_games'>
                        <div className='score_main_title'>Top 3 Scores</div>
                        {games.length > 0 ? games.map((e, index) => (
                            <div className='single_score_item mb-5'>
                            <div className='num'>{index + 1}</div>
                            <div className='game_info'>
                                <div className='tile'>
                                    <div className='tile_title'>Time Elapsed</div>
                                    <div className='tile_content'>{e.time}</div>
                                </div>
                                <div className='tile'>
                                    <div className='tile_title'>Moves Taken</div>
                                    <div className='tile_content'>{e.moves}</div>
                                </div>
                            </div>
                        </div>
                        )): (
                            <h2>You didnt play any games yet.</h2>
                        )}
                        {/* <div className='single_score_item mb-5'>
                            <div className='num'>1</div>
                            <div className='game_info'>
                                <div className='tile'>
                                    <div className='tile_title'>Time Elapsed</div>
                                    <div className='tile_content'>0:53</div>
                                </div>
                                <div className='tile'>
                                    <div className='tile_title'>Moves Taken</div>
                                    <div className='tile_content'>25 Moves</div>
                                </div>
                            </div>
                        </div>
                        <div className='single_score_item mb-5'>
                            <div className='num'>2</div>
                            <div className='game_info'>
                                <div className='tile'>
                                    <div className='tile_title'>Time Elapsed</div>
                                    <div className='tile_content'>0:53</div>
                                </div>
                                <div className='tile'>
                                    <div className='tile_title'>Moves Taken</div>
                                    <div className='tile_content'>25 Moves</div>
                                </div>
                            </div>
                        </div>
                        <div className='single_score_item mb-5'>
                            <div className='num'>3</div>
                            <div className='game_info'>
                                <div className='tile'>
                                    <div className='tile_title'>Time Elapsed</div>
                                    <div className='tile_content'>0:53</div>
                                </div>
                                <div className='tile'>
                                    <div className='tile_title'>Moves Taken</div>
                                    <div className='tile_content'>25 Moves</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile