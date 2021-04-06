import React from "react";
import { blogPostList } from "../../blogPostList";
import { useParams } from "react-router-dom";


export default function Detail() {
    const [blogPost, setBlogPost] = React.useState({});

    let { id } = useParams();

    React.useEffect(() => {
        const foundBlogPost = blogPostList.find(function (item) {
            if (item.id === id) {
                return true;
            } else {
                return false;
            }
        });
        setBlogPost(foundBlogPost);
    }, [id]);

    //TODO
    function remove(id) {
        console.log(id);
    }

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.paragraph}</p>
            <h4 style={{ paddingBottom: 30 }}>Author: {blogPost.author}</h4>
            <button type="button" className="btn btn-danger" onClick={() => remove(blogPost.id)}>Delete</button>
        </div>
    )
}
