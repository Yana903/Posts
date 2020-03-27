import { useEffect, useReducer } from "react";
import {requestGet} from "../lib/requestGet";

const initialState = {
    isLoading: false,
    data: null,
    error: null,
}
const reducer = (state, action) => {
    switch (action.type) {
        case "init":
            return {
                ...state,
                isLoading: true,
                data: null,
                totalCount: 0,
                error: null,
            }
        case "success":
            console.log("dispatch:"+action.totalCount);
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                totalCount: action.totalCount,
                error: null
            }
        case "error":
            return {
                ...state,
                isLoading: false,
                data: null,
                totalCount: 0,
                error: action.payload,
            }
        default:
            return state;
    }
}

const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        dispatch({type: "init"})
        requestGet(url)
        .then(response => {
            let totalCount = response.totalCount;
            response.jsonData.json()
            .then(data => dispatch({type: "success", payload: data, totalCount}))   
            .catch(error => dispatch({type: "error", payload: error}));
        })
        .catch(error => dispatch({type: "error", payload: error}));
      }, [url]);

      return [state];
}

export default useFetch;