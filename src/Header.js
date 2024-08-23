import { Link } from "react-router-dom";
import React from 'react';
import User from "./User.js"

export default function Header(props) {
    return(
        <body>
        <header>
            <section id='sub'>
                <ul>
                    <li><Link to={'/join'}>회원가입</Link></li>
                    <li><Link to={'/login'}>로그인</Link></li>
                </ul>
            </section>
            <section id='main'>
                <div class='logo'>
                    <Link to={'/'}>
                        <span class="title">침하하</span>
                    </Link>
                </div>
            </section>
            <section id='nav'>
                <nav>
                    <ul>
                        <li>
                            <div class='menu' style={{backgroundColor:'#0B4C5F'}}>
                            <Link to={'/best'} style={{color:'#fef72f'}}>인기글</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/all'}>전체글</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/chim'}>침착맨</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/humor'}>웃음</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/sports'}>스포츠</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/hobby'}>취미</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/internet'}>인방</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/daily'}>일상</Link>
                            </div>
                        </li>
                        <li>
                            <div class='menu'>
                            <Link to={'/wish'}>소원의 돌</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
        </body>
    );
}

