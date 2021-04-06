export function setBlogPosts(blogPosts) {
    return function (dispatch) {
        dispatch({
            type: "SET_BLOGPOSTS",
            blogPosts: blogPosts
        });
    };
}