import BoardList from './BoardList.js' 
import Header from "./Header.js";

export default function Board() {
    return(
        <body class="board">
            <Header/>
            <BoardList/>
        </body>
    );
}