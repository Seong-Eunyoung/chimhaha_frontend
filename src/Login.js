import Header from "./Header.js";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Board() {
    const [user, setUser] = useState({
        username: '',
        password: '',
      });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({ ...user, [id]: value });
        };

    const navigate = useNavigate();

    const handlerSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        //formData.append('username', new Blob([JSON.stringify(user.username)], {type : 'application/json'}));
        //formData.append('password', new Blob([JSON.stringify(user.password)], {type : 'application/json'}));
        formData.append('username', user.username);
        formData.append('password', user.password);

        axios({
            method: 'POST', 
            url: 'http://localhost:8080/loginProc', 
            data: formData,
            withCredentials: true,
        })
        .then(res => {
            console.log(res.status);
            res && res.status === 200 && navigate('/');
        })
        .catch(err => console.log(err));
    };

    return(
        <body class="board">
            <Header/>
            <div class="container">
                <h2>로그인</h2>
                
                <form id="frm" onSubmit={handlerSubmit}>
                    <input type="text" name="username" onChange={handleChange} placeholder="ID를 입력하세요."/>
                    <input type="text" name="password" onChange={handleChange} placeholder="패스워드를 입력하세요."/>
                    <input type="submit" className="btn" value="로그인" />
                </form>
            </div>

        </body>
    );
}