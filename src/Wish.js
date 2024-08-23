import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BoardList from './BoardList.js' 
import Header from "./Header.js";
import stone from "./stone.jpg"

function Main() {
    const [auth, setAuth] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:8080/checkAuth`)
            .then(res => {
                res && res.data && setAuth(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return(
        <body class="board">
            <Header/>
                <section id="title">
                    <h1>
                        <div>소원의 돌</div>
                    </h1>
                </section>
                <section id="stone">
                    <img src={stone} width="400"/>  
                </section>
                           
        </body>
    );
}

export default Main;