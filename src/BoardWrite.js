import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";


export default function BoardWrite() {
        // 0. 게시판 선택
    const [category, setCategory] = useState('chim');
    const changeCategory = e => setCategory(e.target.value);
		
		// 1. 입력 처리
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const changeTitle = e => setTitle(e.target.value);
    const changeContents = e => setContents(e.target.value);
		
		// 2. 파일 처리
    const refFiles = useRef();
    const [files, setFiles] = useState([]);
    
    const handlerChangeFiles = e => {
        const files = e.target.files;      
        setFiles([...files]);
    };
		

	const navigate = useNavigate();
		
    let datas = {category, title, contents};

    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(datas)], {type : 'application/json'}));
    Object.values(files).forEach(file => formData.append('files', file));

    const handlerSubmit = e => {
        e.preventDefault();
        axios({
            method: 'POST', 
            url: 'http://localhost:8080/write', 
            data: formData, 
            headers: {'Content-Type' : 'multipart/form-data'}
        })
        .then(res => {
            res && res.status === 200 && navigate(`/${category}`);
        })
        .catch(err => console.log(err));
    };


    return (
        <body class="board">
            <Header/>
            <div className="container">
                <h2>글쓰기</h2>
                <form id="frm" onSubmit={handlerSubmit}>
                    <div>
                        <select name='category' id='category' onChange={changeCategory}>
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
                            <td><input type="text" id="title" name="title" onChange={changeTitle}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><textarea id="contents" name="contents" onChange={changeContents}></textarea></td>
                        </tr>
                        </tbody>
                    </table>
                    <input ref={refFiles} onChange={handlerChangeFiles} type="file" id="files" name="files" multiple="multiple" />
                    <input type="submit" id="submit" value="저장" className="btn" />
                </form>
            </div>	
        </body>
    );
};