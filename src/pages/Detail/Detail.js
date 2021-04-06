import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBlogPosts } from "../../components/Actions/dataActions";
import { Link } from "react-router-dom";



export default function Detail() {
    const [blogPost, setBlogPost] = React.useState(null);

    const blogPosts = useSelector((state) => state.blogPosts);
    const dispatch = useDispatch();

    let { id } = useParams();

    React.useEffect(() => {
        const foundBlogPost = blogPosts.find(function (item) {
            if (item.id === id) {
                return true;
            } else {
                return false;
            }
        });
        setBlogPost(foundBlogPost);
    }, [id, blogPosts]);

    //TODO
    function remove(id) {
        let remainingBlogposts = blogPosts.filter((blogPost) => blogPost.id !== id);
        dispatch(setBlogPosts(remainingBlogposts));
        console.log(id);
    }

    return blogPost ? (
        <div>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.paragraph}</p>
            <h4 style={{ paddingBottom: 30 }}>Author: {blogPost.author}</h4>
            <Link to="/home"><button type="button" className="btn btn-danger" onClick={() => remove(blogPost.id)}>Delete</button></Link>
        </div>
    ) : null;
}
