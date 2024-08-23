import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function BoardList() {
    const [datas, setDatas] = useState([]);
    let { category } = useParams();
    
    if (category === undefined){category='best'};

    useEffect(() => {
        axios
            .get(`http://localhost:8080/list/${category}`)
            .then(res => {
                res && res.data && setDatas(res.data);
            })
            .catch(err => console.log(err));
    }, [category]);

    return (
        <main>
        <body class='board'>
            <section id="title">
                <h1>
                    <div>{category==='all'&&'전체게시글' ||
                    category==='best'&&'인기글' ||
                    category==='chim'&&'침착맨' ||
                    category==='humor'&&'웃음' ||
                    category==='sports'&&'스포츠' ||
                    category==='hobby'&&'취미' ||
                    category==='internet'&&'인방' ||
                    category==='daily'&&'일상'||
                    category==='wish'&&'소원의 돌'}</div>
                </h1>
            </section>


            <section id="boardList">
                
                {
                    datas.length !== 0 && datas.map(board => (
                        <div class="item">
                            <Link to={`/${category}/${board.boardIdx}`}>
                                <div class="titleContainer">
                                    <span class="category">{board.category==='best'&&'인기' ||
                                                            board.category==='chim'&&'침착맨' ||
                                                            board.category==='humor'&&'웃음'||
                                                            board.category==='sports'&&'스포츠' ||
                                                            board.category==='hobby'&&'취미' ||
                                                            board.category==='internet'&&'인방' ||
                                                            board.category==='daily'&&'일상'||
                                                            board.category==='wish'&&'소원의 돌'}</span>
                                    <span class="title">{board.title}</span>
                                </div>
                                <div class="etc">
                                    <div class="nickname">{board.creatorId}</div>
                                    <div class="dot"> </div>
                                    <div class="datetime">{board.createdDatetime}</div>
                                    <div class="dot"> </div>
                                    <div class="viewCount">{parseInt(board.hitCnt/2)}</div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
                {
                    datas.length === 0 && (
                        <tr>
                            <td colSpan="4">조회된 결과가 없습니다.</td>
                        </tr>
                    )
                }
               
            
            </section>
        </body>
        </main>
    );
};