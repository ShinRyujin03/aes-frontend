import axios from "axios";
import {
	ESSAY_SCORING_FAIL,
	ESSAY_SCORING_REQUEST,
	ESSAY_SCORING_SUCCESS,
} from "../constants/essayConstants";

export const createEssayScore = (essayData) => async (dispatch) => {
	try {
		dispatch({ type: ESSAY_SCORING_REQUEST });
		const { data } = await axios.post("/api/check-grammar/", essayData);
		dispatch({
			type: ESSAY_SCORING_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ESSAY_SCORING_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
