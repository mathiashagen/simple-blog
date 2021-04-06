import React from "react";
import { useSelector } from "react-redux";

import { blogPostList } from "../../blogPostList";
import BlogPost from "../../components/BlogPost/BlogPost";

export default function Home() {
    const [searchWord, setSearchWord] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchWord(event.target.value);
    };
    React.useEffect(() => {
        const results = blogPostList.filter(blogPostList =>
            blogPostList.title.includes(searchWord)
        );
        setSearchResults(results);
    }, [searchWord]);

    const blogPosts = useSelector((state) => state.blogPosts);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
            }}
        >
            <input
                type="text"
                placeholder="Search"
                value={searchWord}
                onChange={handleChange}
            />

            {blogPosts.map(function (item) {
                return (
                    <BlogPost

                        id={item.id}
                        title={item.title}
                        paragraph={item.paragraph}
                    />
                );
            })}
        </div>
    );
}