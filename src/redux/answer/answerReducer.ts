import { IAnswer } from '../../types'
import * as types from './answerActions'

interface initialAnswerStateType {
	answer: IAnswer;
	status: string;
}

const initialAnswerState: initialAnswerStateType = {
	answer: {
		id: '',
		user: '',
		problemId: '',
		answers: []
	},
	status: '',
}

// ANSWER REDUCER
export const answerReducer = (state = initialAnswerState, { type, payload }: { type: string, payload: any }) => {
	switch (type) {
		case types.SELECT_EXAMPLE:
			return {
				...state,
				answer: {
					...state.answer,
					answers: [...state.answer.answers, payload]
				}
			}
		case types.CANCEL_SELECTION:
			return {
				...state,
				answer: {
					...state.answer,
					answers: state.answer.answers.filter(answer => answer.id !== payload.id)
				}
			}
		case types.SUBMIT_ANSWER_SUCCESS:
			return {
				...state,
				status: 'success'
			}
		case types.SUBMIT_ANSWER_FAILURE:
			return {
				...state,
				status: 'failure'
			}
		default:
			return state
	}
}