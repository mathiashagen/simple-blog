import React from "react";
import { Link } from "react-router-dom";

export default function BlogPost(blogPost) {
    const { id, title, paragraph } = blogPost;

    return (
        <div className="blogPost" style={{ width: 1000 }}>
            <div className="blogPost-body">
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <Link to={`/details/${id}`} className="btn btn-primary">Blog info</Link>
            </div>
        </div>
    )

}