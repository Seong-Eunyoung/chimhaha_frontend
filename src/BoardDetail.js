import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import BoardUpdate from "./BoardUpdate.js"

export default function BoardDetail() {
    const [board, setBoard] = useState({});

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    
    const { category, boardIdx } = useParams();

    const navigate = useNavigate();

    const deleteButtonClick = e => { 
        e.preventDefault();

        axios 
            .delete(`http://localhost:8080/detail/${boardIdx}`)
            .then(res => {
                res && res.status === 200 && navigate(`/${category}`)
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/detail/${boardIdx}`)
            .then(res => {
                res && res.data && setBoard(res.data);
                setTitle(res.data.title);
                setContents(res.data.contents);
            })
            .catch(err => console.log(err));
    }, []);

    const handlerDownload = (e, fileInfo) => {
        e.preventDefault();

        const { boardIdx, idx, originalFileName } = fileInfo;
        axios({
            url: `http://localhost:8080/file/${boardIdx}/${idx}`,
            method: 'GET',
            responseType: 'blob'
        })
        .then(res => {
            const href = URL.createObjectURL(res.data);

            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', originalFileName);
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        })
    }


    return (
        <body class="board">
            <Header/>
            <main>
                <article id="article">
                    <div class="sub">
                        <div class="back" style={{fontSize: 14}}>
                            <Link to={`/${category}`}>
                                {category==='all'&&'전체게시글 >' ||
                                category==='best'&&'인기글 >' ||
                                category==='chim'&&'침착맨 >' ||
                                category==='humor'&&'웃음 >' }
                            </Link>
                        </div>
                    </div>
                    <div class="item">
                        <div class="titleContainer">
                            <span class="category" style={{fontSize: 15}}>
                                <Link to={`/${board.category}`}>
                                    {board.category==='all'&&'전체게시글' ||
                                    board.category==='best'&&'인기글' ||
                                    board.category==='chim'&&'침착맨' ||
                                    board.category==='humor'&&'웃음' }
                                </Link>
                            </span>
                            <span class="title" style={{fontSize: 18}}>{title}</span>
                        </div>
                        <div class="etc" style={{fontSize: 14}}>
                            <div class="nickname">{board.creatorId}</div>
                            <div class="dot"> </div>
                            <div class="datetime">{board.createdDatetime}</div>
                            <div class="dot"></div>
                            <div class="viewcount">{parseInt(board.hitCnt/2)}</div>
                            </div>
                        </div>
                        <div class="content">
                            <p>{contents}</p>
                        </div>
                        <div className="file_list"> 
                        {   
                            board.fileInfoList && board.fileInfoList.map(
                                fileInfo => (
                                    <p>
                                        <a onClick={e => handlerDownload(e, fileInfo)}>
                                            {fileInfo.originalFileName} ({fileInfo.fileSize}kb)</a>
                                    </p>
                                )
                            )
                        }
                        
                    </div>
                    <Link to={`/update/${category}/${boardIdx}`} className="btn">수정하기</Link>
                    <input type="button" id="delete" className="btn" value="삭제하기" onClick={deleteButtonClick}/>
                        
                </article>
            </main>	
        </body>
    );
};