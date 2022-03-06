import { IAnswer, IExample } from '../../types'

// solve problem
export const SELECT_EXAMPLE = 'SELECT_EXAMPLE'
export const CANCEL_SELECTION = 'CANCEL_SELECTION'
export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS'
export const SUBMIT_ANSWER_FAILURE = 'SUBMIT_ANSWER_FAILURE'

// add answer
export const selectExample = (example: IExample) => (dispatch: Function) =>
	dispatch({
		type: SELECT_EXAMPLE,
		payload: example,
	})

export const cancelSelection = (example: IExample) => (dispatch: Function) =>
	dispatch({
		type: CANCEL_SELECTION,
		payload: example,
	})

// submit answer
export const submitAnswer = (answer: IAnswer) => (dispatch: Function) => {
	// submit to server
	// get result from server
	let ok = true;
	if (ok) {
		return dispatch({ type: SUBMIT_ANSWER_SUCCESS })
	} else {
		return dispatch({ type: SUBMIT_ANSWER_FAILURE })
	}
}