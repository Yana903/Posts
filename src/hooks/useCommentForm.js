import { useReducer} from "react";

const reducerCommentForm = (commentState, action) => {
    switch (action.type) {
        case "setName": 
            return {
                ...commentState,
                name: action.payload
            }
        case "setEmail": 
            return {
                ...commentState,
                email: action.payload
            }
        case "setComment": 
            return {
                ...commentState,
                comment: action.payload
            }
        default: 
            return commentState
    }    
};

const useCommentForm = () => {
    const initialState = {
        name: "",
        email: "",
        comment: ""
    };

    const [commentState, dispatch] = useReducer (reducerCommentForm, initialState);

    return [commentState, dispatch];
};

export default useCommentForm;
