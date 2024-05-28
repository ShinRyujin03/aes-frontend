import {
	ESSAY_SCORING_FAIL,
	ESSAY_SCORING_REQUEST,
	ESSAY_SCORING_SUCCESS,
} from "../constants/essayConstants";

// const initialState = {
// 	loading: false,
// 	error: null,
// 	essayScore: null,
// };

export const essayScoringReducer = (state = {}, action) => {
	switch (action.type) {
		case ESSAY_SCORING_REQUEST:
			return { loading: true };
		case ESSAY_SCORING_SUCCESS:
			return { loading: false, success: true, listing: action.payload };
		case ESSAY_SCORING_FAIL:
			return { loading: false, error: action.payload };
		// case LISTING_CREATE_RESET:
		// 	return {};
		default:
			return state;
	}
};
