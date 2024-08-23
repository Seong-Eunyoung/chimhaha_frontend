import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

import Header from "./Header";

export default function BoardDetail() {

    const { boardIdx } = useParams();

    const [board, setBoard] = useState({});

    const [category, setCategory] = useState('');
    const changeCategory = e => setCategory(e.target.value);

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const changeTitle = e => setTitle(e.target.value);
    const changeContents = e => setContents(e.target.value);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/detail/${boardIdx}`)
            .then(res => {
                res && res.data && setBoard(res.data);
                setTitle(res.data.title);
                setContents(res.data.contents);
                setCategory(res.data.category);
            })
            .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();
    

    const updateButtonClick = e => { 
        e.preventDefault();

        axios
            .put(`http://localhost:8080/update/${boardIdx}`, {title, contents, category})
            .then(res => {
                res && res.status === 200 && navigate(`/${category}/${boardIdx}`)
            })
            .catch(err => console.log(err));
    };

    return (
        <body class="board">
            <Header/>
            <div className="container">
                <h2>글쓰기</h2>
                <form id="frm" onSubmit={updateButtonClick}>
                    <div>
                        <select name='category' id='category' value={category} onChange={changeCategory}>
                            <option value='chim'>침착맨</option>
                            <option value='humor'>유머</option>
                            <option value='sports'>스포츠</option>
                            <option value='hobby'>취미</option>
                            <option value='internet'>인방</option>
                            <option value='daily'>일상</option>
                        </select>
                    </div>
                    <table className="board_detail">
                        <tbody>
                        <tr>
                            <td>제목</td>
                            <td><input type="text" id="title" name="title" value={title} onChange={changeTitle}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><textarea id="contents" name="contents" value={contents} onChange={changeContents}></textarea></td>
                        </tr>
                        </tbody>

                        <div className="file_list"> 
                        {   
                            board.fileInfoList && board.fileInfoList.map(
                                fileInfo => (
                                    <p>
                                            {fileInfo.originalFileName} ({fileInfo.fileSize}kb)
                                    </p>
                                )
                            )
                        }
                        </div>

                    </table>
                    <input type="submit" id="submit" value="저장" className="btn" />
                </form>
            </div>	
        </body>
    );
};