import { IQuestion } from '../../types'
// create problem
// problem consists of question.
// question consists of question and answers.
export const SET_PROBLEM_INFORMATION = 'SET_PROBLEM_INFORMATION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const SUBMIT_PROBLEM_SUCCESS = 'SUBMIT_PROBLEM_SUCCESS'
export const SUBMIT_PROBLEM_FAILURE = 'SUBMIT_PROBLEM_FAILURE'

// create problem
// problem consists of question.
// question consists of question and answers.

// set tiltle and author
export const setProblemInformation = (title: string, author: string, description = '') => ({
	type: SET_PROBLEM_INFORMATION,
	payload: {
		title,
		author,
		description,
	},
})

// add problem
export const addQuestion = (question: IQuestion) => (dispatch: Function) =>
	dispatch({
		type: ADD_QUESTION,
		payload: question
	})

// update problem
export const updateQuestion = (questionId: string | number, question: IQuestion) => (dispatch: Function) =>
	dispatch({
		type: UPDATE_QUESTION,
		payload: { questionId, question }
	})

// remove problem
export const removeQuestion = (questionId: string | number) => (dispatch: Function) =>
	dispatch({
		type: REMOVE_QUESTION,
		payload: questionId,
	})

// submit problem
export const submitProblem = () => (dispatch: Function) => {
	// submit to server
	// get result from server
	let ok = true;
	if (ok) {
		return dispatch({ type: SUBMIT_PROBLEM_SUCCESS })
	} else {
		return dispatch({ type: SUBMIT_PROBLEM_FAILURE })
	}
}