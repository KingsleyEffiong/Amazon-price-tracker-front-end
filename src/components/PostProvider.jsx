import React from 'react'
import { createContext, useContext, useReducer } from 'react'
import PropTypes from "prop-types";


PostProvider.propTypes = {
    children: PropTypes.any.isRequired,
};



const initialState = {
    username: "",
    password: "",
    email: "",
    errors: null,
    chartModal: false,
    chartData: [],
    url: null
}
const PostContext = createContext();
function PostProvider({ children }) {

    function reducer(state, action) {
        switch (action.type) {
            case 'USERNAME':
                return {
                    ...state,
                    username: action.user
                }
                break;
            case 'PASSWORD':
                return {
                    ...state,
                    password: action.pass
                }
                break;
            case 'EMAIL':
                return {
                    ...state,
                    email: action.userEmail
                }
                break;
            case 'ERRORS':
                return {
                    ...state,
                    errors: action.errors
                }
            case 'CHARTMODAL':
                return {
                    ...state,
                    chartModal: action.modal
                }
            case 'CHARTDATA':
                return {
                    ...state,
                    chartData: action.chart
                }
            case 'url':
                return {
                    ...state,
                    url: action.url
                }
                break;
            default:
                return state;
        }
    }
    const [{ username, password, email, errors, chartModal, chartData, url }, dispatch] = useReducer(reducer, initialState);
    return (
        <PostContext.Provider value={{
            username,
            password,
            email,
            errors,
            chartModal,
            chartData,
            url,
            dispatch
        }}>{children}</PostContext.Provider>
    )
}

function useProvider() {
    const context = useContext(PostContext);
    if (context === undefined) throw new Error('PostContext was used outside the postProvider');
    return context
}


export { PostProvider, useProvider }