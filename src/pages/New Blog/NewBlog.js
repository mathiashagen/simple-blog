import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBlogPosts } from "../../components/Actions/dataActions";

export default function NewBlogPost() {

    const [title, setTitle] = React.useState("");
    const [paragraph, setParagraph] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [id, setId] = React.useState(0);

    const dispatch = useDispatch();
    const blogPosts = useSelector((state) => state.blogPosts);

    function handleSubmit(e) {
        e.preventDefault();

        const newBlogPost = {
            title: title,
            paragraph: paragraph,
            author: author,
            id: id
        };

        dispatch(setBlogPosts([...blogPosts, newBlogPost]));
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
            <div className="mb-3">
                <label className="form-label">ID</label>
                <input
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    type="number"
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
      </button>
        </form>
    );

}