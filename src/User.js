import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:8080/checkAuth`)
            .then(res => {
                res && res.data && setUsername(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    if (username) {
        
        return(
                <section id='sub'>
                    <ul>
                        <li><Link to={'/join'}>회원가입</Link></li>
                        <li><Link to={'/login'}>로그인</Link></li>
                    </ul>
                </section>
        );
    } else {
        return(
                <section id='sub'>
                    <ul>
                        <li><Link to={'/mypage'}>마이페이지</Link></li>
                        <li><a href="http://localhost:8080/logout">로그아웃</a></li>
                    </ul>
                </section>
        );
    }
    
}

