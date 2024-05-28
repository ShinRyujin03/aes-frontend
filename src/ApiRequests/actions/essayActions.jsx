import axios from 'axios';
import {
  ESSAY_SCORING_FAIL,
  ESSAY_SCORING_REQUEST,
  ESSAY_SCORING_SUCCESS,
} from '../constants/essayConstants';

export const createEssayScore = (essayData) => async (dispatch) => {
  try {
    dispatch({ type: ESSAY_SCORING_REQUEST });

    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const postURL = `${baseURL}/check-grammar/`;

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