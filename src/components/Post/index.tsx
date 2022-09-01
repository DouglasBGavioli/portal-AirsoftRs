import { Link } from "react-router-dom"
import "./style.min.css"

type PostProps = {
    img: string
    title: string
    data: string
    local: string
    writer?: string
    link: string
}

export function Post(props: PostProps) {
    return (
        <Link to={props.link} className="post">
            <div className="post__image">
                <img src={props.img} alt={props.title} />
                <div className="post__image-data">
                    <h1>DATA: {props.data}</h1>
                </div>
            </div>
            <div className="post__content">
                <div className="post__content-title">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </Link>
    )
}