import { combineReducers } from 'redux';
import { answerReducer } from './answer/answerReducer';
import { problemReducer } from './problem/problemReducer';
import { testReducer } from './test/testReducer';

const reducers = {
	problem: problemReducer,
	answer: answerReducer,
	test: testReducer,
}

export default combineReducers(reducers);