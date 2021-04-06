const initialState = {
    blogPost: []
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_BLOGPOST":
            return {
                ...state,
                blogPost: action.blogPost
            };
        default:
            return state;
    }
}





export default dataReducer;
