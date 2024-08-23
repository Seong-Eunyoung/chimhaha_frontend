import Header from "./Header.js";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Board() {

    const [user, setUser] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        name: '',
        email: '',
        
      });
    
    const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios({
            method: 'POST', 
            url: 'http://localhost:8080/joinProc', 
            data: user
        })
        .then(res => {
            res && res.status === 200 && navigate('/login');
        })
        .catch(err => console.log(err));
    };


      return (
        <body class="board">
            <Header/>
            <div class="container">
            <h2>회원가입</h2>
            <form id="frm" onSubmit={handleSubmit}>
                <input type="text" id="username" value={user.username} placeholder="아이디" onChange={handleChange} />
                <input type="text" id="password" value={user.password} placeholder="비밀번호" onChange={handleChange} />
                <input type="text" id="passwordConfirm" value={user.passwordConfirm} placeholder="비밀번호 확인" onChange={handleChange} />
                <input type="text" id="name" value={user.name} placeholder="이름" onChange={handleChange} />
                <input type="text" id="email" value={user.useremail} placeholder="이메일" onChange={handleChange} />
                <button type="submit" className="btn">회원가입</button>
            </form>
            </div>
        </body>
      );


}



