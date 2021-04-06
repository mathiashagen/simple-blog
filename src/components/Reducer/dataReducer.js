const initialState = {
    blogPosts: []
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_BLOGPOSTS":
            return {
                ...state,
                blogPosts: action.blogPosts
            };
        default:
            return state;
    }
}





export default dataReducer;
