import { Link } from "react-router-dom";
import BoardList from './BoardList.js' 
import Header from "./Header.js";
import youtube from "./youtube.png";

function Main() {
    return(
        <body class="board">
            <Header/>
            <div class="stream">
                <div class="youtube">
                    <h2 class="title">
                        <span>
                            <img src={youtube}/>
                            <a href="https://www.youtube.com/watch?v=rugj7XQ1YYI">최신 침착맨</a>
                        </span>
                    </h2>
                    <iframe width="313" height="176" src="https://www.youtube.com/embed/rugj7XQ1YYI?si=Uo-LHlQgWkM2iMEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="youtube">
                    <h2 class="title">
                        <span>
                            <img src={youtube}/>
                            <a href="https://www.youtube.com/watch?v=v0rIZ1S-f78&list=PLrTC7IMrpfqLVX4ag8-euwo1lS-B940uL">최신 침착맨 게임</a>
                        </span>
                    </h2>
                    <iframe width="313" height="176" src="https://www.youtube.com/embed/v0rIZ1S-f78?si=6UNyAGVvkGqfup7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="youtube">
                    <h2 class="title">
                        <span>
                            <img src={youtube}/>
                            <a href="https://youtu.be/Kb-fYGIOPc4?si=gpttLzgvyDxgxYWF">최신 생방송</a>
                        </span>
                    </h2>
                    <iframe width="313" height="176" src="https://www.youtube.com/embed/Kb-fYGIOPc4?si=nDAs_-Oh7iKO5549" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <BoardList/>
            
            <Link to={'/write'} className="btn">글쓰기</Link>
        </body>
    );
}

export default Main;