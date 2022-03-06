import { IQuestion } from '../../types'
// create problem
// problem consists of question.
// question consists of question and answers.
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const SUBMIT_PROBLEM_SUCCESS = 'SUBMIT_PROBLEM_SUCCESS'
export const SUBMIT_PROBLEM_FAILURE = 'SUBMIT_PROBLEM_FAILURE'

// create problem
// problem consists of question.
// question consists of question and answers.
// add problem
export const addQuestion = () => () => ({ type: ADD_QUESTION })

// update problem
export const updateQuestion = (questionId: string, question: IQuestion) => (dispatch: Function) =>
	dispatch({
		type: UPDATE_QUESTION,
		payload: { questionId, question }
	})

// remove problem
export const removeQuestion = (questionId: string) => (dispatch: Function) =>
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