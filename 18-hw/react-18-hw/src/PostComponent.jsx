import React from "react";
import "./PostComponent.scss"

const PostComponent = ({data}) => {
    const {author, content, image, date} = data;
    const {name, photo, nickname} = author;
    return (
        <div className="post">
            <img src={photo} alt="" className="photo"/>
            <div>
                <div className="header">{name} <span>{nickname} · {date}</span></div>
                <div className="content">{content}</div>
                <img src={image} alt="" className="image"/>
            </div>
        </div>
    )
}

export default PostComponent;