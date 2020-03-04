import {
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_ERROR,
    GET_ARTICLES_PENDING,
  } from "./articleActions";

const initialState = {
    articles: {
        items: [],
    },
    pending: false
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_PENDING:
                return {
                    ...state,
                    pending: true
                }
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.articles,
                pending: false
            }
        case GET_ARTICLES_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export const getArticles = state => state.articles;
export const getArticlesPending = state => state.pending;
export const getArticlesError = state => state.error

export default rootReducer