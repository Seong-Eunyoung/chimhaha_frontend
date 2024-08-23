import { Link, Route, Routes } from "react-router-dom";
import Main from './Main';
import Board from "./Board";
import BoardWrite from './BoardWrite.js';
import BoardDetail from "./BoardDetail.js";
import Login from "./Login.js"
import Join from "./Join.js"
import Wish from "./Wish.js"
import BoardUpdate from "./BoardUpdate.js";
import './App.css';
import './Write.css'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/write" element={<BoardWrite/>}/>
        <Route path="/:category" element={<Board/>}/>
        <Route path="/:category/:boardIdx" element={<BoardDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/wish" element={<Wish/>}/>
        <Route path="/update/:category/:boardIdx" element={<BoardUpdate/>}/>
      </Routes>
    </>

  );
}

export default App;
