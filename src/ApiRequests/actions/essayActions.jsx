import axios from 'axios';
import {
    ESSAY_BY_TOPIC_FAIL,
    ESSAY_BY_TOPIC_REQUEST,
    ESSAY_BY_TOPIC_SUCCESS,
    ESSAY_DETAILS_FAIL,
    ESSAY_DETAILS_REQUEST,
    ESSAY_DETAILS_SUCCESS,
    ESSAY_SCORING_FAIL,
    ESSAY_SCORING_REQUEST,
    ESSAY_SCORING_SUCCESS,
    ESSAY_SEARCH_FAIL,
    ESSAY_SEARCH_REQUEST,
    ESSAY_SEARCH_SUCCESS,
    ESSAY_LIST_REQUEST, 
    ESSAY_LIST_SUCCESS,
    ESSAY_LIST_FAIL,
// ... các hằng số khác cho các action liên quan đến danh sách bài luận

} from '../constants/essayConstants';

export const createEssayScore = (essayData) => async (dispatch) => {
  try {
    dispatch({ type: ESSAY_SCORING_REQUEST });

    // const baseURL = import.meta.env.VITE_API_BASE_URL;
    const postURL = `/api/check-grammar/`;

    console.log("API Post URL:", postURL); // Debug log for the URL

    const { data } = await axios.post(postURL, essayData);
    console.log("Response Data:", data); // Log the response data

    dispatch({
      type: ESSAY_SCORING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("API Error:", error); // Debug log for the error
    dispatch({
      type: ESSAY_SCORING_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const EssaysByTopic = (topic) => async (dispatch) => {
    try {
        dispatch({ type: ESSAY_BY_TOPIC_REQUEST});

        const { data } = await axios.get(`/api/essays_with_topic/${topic}`);

        dispatch({
            type: ESSAY_BY_TOPIC_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ESSAY_BY_TOPIC_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const getEssayDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ESSAY_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/essays_detail/${id}`);

        dispatch({
            type: ESSAY_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ESSAY_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const searchEssays = (query, page = 1) => async (dispatch) => {
    try {
        dispatch({ type: ESSAY_SEARCH_REQUEST});

        const { data } = await axios.get(`/api/essay_with_search_query/${query}/${page}`);

        dispatch({
            type: ESSAY_SEARCH_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ESSAY_SEARCH_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const listEssaysByBand = (band, page = 1) => async (dispatch) => {
    try {
        dispatch({ type: ESSAY_LIST_REQUEST });

        const { data } = await axios.get(`/api/essays_with_bandscore/${band}/${page}`);

        dispatch({
            type: ESSAY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ESSAY_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};