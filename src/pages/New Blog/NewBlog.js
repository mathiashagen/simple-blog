import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBlogPost } from "../../components/Actions/dataActions";

export default function NewBlogPost() {

    const [title, setTitle] = React.useState("");
    const [paragraph, setParagraph] = React.useState("");
    const [author, setAuthor] = React.useState("");

    const dispatch = useDispatch();
    const blogPost = useSelector((state) => state.blogPost);

    function handleSubmit(e) {
        e.preventDefault();

        const newBlogPost = {
            title: title,
            paragraph: paragraph,
            author: author
        };

        dispatch(setBlogPost([...blogPost, newBlogPost]));
    }

    return (
        <form
            style={{ maxWidth: 400, width: "100%", margin: "30px auto" }}
            onSubmit={handleSubmit}
        >
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Paragraph</label>
                <input
                    onChange={(e) => setParagraph(e.target.value)}
                    value={paragraph}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Author</label>
                <input
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    type="text"
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
      </button>
        </form>
    );

}