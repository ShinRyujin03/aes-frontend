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
	ESSAY_SEARCH_REQUEST,
    ESSAY_SEARCH_SUCCESS,
    ESSAY_SEARCH_FAIL,
	ESSAY_LIST_REQUEST,
	ESSAY_LIST_SUCCESS,
	ESSAY_LIST_FAIL,
    ESSAY_SAMPLE_REQUEST,
    ESSAY_SAMPLE_SUCCESS,
    ESSAY_SAMPLE_FAIL,
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

export const essayByTopicReducer = (state = { essays: [] }, action) => {
    switch (action.type) {
        case ESSAY_BY_TOPIC_REQUEST:
            return { loading: true, essays: [] };
        case ESSAY_BY_TOPIC_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_BY_TOPIC_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essayDetailsReducer = (state = { essay: {} }, action) => {
    switch (action.type) {
        case ESSAY_DETAILS_REQUEST:
            return { loading: true, ...state };
        case ESSAY_DETAILS_SUCCESS:
            return { loading: false, essay: action.payload };
        case ESSAY_DETAILS_FAIL :
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essaySearchReducer = (state = { essays: [] }, action) => {
    switch (action.type) {
        case ESSAY_SEARCH_REQUEST:
            return { loading: true, essays: [] };
        case ESSAY_SEARCH_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_SEARCH_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essayListByBandReducer = (state = { essays: []}, action) => {
    switch (action.type) {
        case ESSAY_LIST_REQUEST:
            return { loading: true, essays: []};
        case ESSAY_LIST_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_LIST_FAIL 	:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essaySampleReducer = (state = { essays: [] }, action) => {
    switch (action.type) {
        case ESSAY_SAMPLE_REQUEST:
            return { loading: true, essays: [] };
        case ESSAY_SAMPLE_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_SAMPLE_FAIL 	:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};