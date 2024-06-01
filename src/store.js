import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
	essayByTopicReducer,
	essayDetailsReducer,
	essayListByBandReducer,
	essayScoringReducer,
	essaySearchReducer,
	essaySampleReducer,
	essayGrammarReducer,
} from "./ApiRequests/reducers/essayReducers";

const reducer = combineReducers({
	essayScoreCreate: essayScoringReducer,
	essayGrammarCreate: essayGrammarReducer,
	essayTopicGet: essayByTopicReducer,
	essayDetailGet: essayDetailsReducer,
	essaySearchGet: essaySearchReducer,
	essayBandGet: essayListByBandReducer,
	essaySampleGet: essaySampleReducer,
});

// const userInfoFromStorage = localStorage.getItem("userInfo")
// 	? JSON.parse(localStorage.getItem("userInfo"))
// 	: null;

const initialState = {
	// userInfo: userInfoFromStorage,
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
