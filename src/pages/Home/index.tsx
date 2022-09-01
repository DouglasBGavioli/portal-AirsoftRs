import { Post } from "../../components/Post"
import "./style.min.css"

import Buteco1 from "../../assets/images/buteco1.png"

export function Home() {
    return (
        <div className="home">

            <div className="home__posts">
                <Post title="Buteco do airsoft com a equipe marechais " img={Buteco1} data="20/11/2022" local="Youtube" link="/login" writer="Douglas biassi asdsadas" />
                <Post title="Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais " img={Buteco1} data="20/11/2022" local="Youtube" link="/" writer="Douglas" />
                <Post title="Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais Buteco do airsoft com a equipe marechais " img={Buteco1} data="20/11/2022" local="Youtube" link="/" writer="Douglas" />
            </div>
        </div>
    )
}