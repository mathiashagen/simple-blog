export function setBlogPost(blogPost) {
    return function (dispatch) {
        dispatch({
            type: "SET_BLOGPOST",
            blogPost: blogPost
        });
    };
}