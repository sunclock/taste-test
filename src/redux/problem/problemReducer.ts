import { IProblem, IQuestion } from '../../types'
import * as types from './problemActions'

interface initialProblemStateType {
	problem: IProblem;
	status: string;
}

const initialProblemState: initialProblemStateType = {
	problem: {
		id: '',
		title: '',
		author: '',
		description: '',
		questions: [],
	},
	status: '',
}

// PROBLEM REDUCER
export const problemReducer = (state = initialProblemState, { type, payload }: { type: string, payload: any }) => {
	switch (type) {
		case types.SET_PROBLEM_INFORMATION:
			return {
				...state,
				problem: {
					...state.problem,
					title: payload.title,
					author: payload.author,
					description: payload.description,
				},
			}
		case types.ADD_QUESTION:
			return {
				...state,
				problem: {
					...state.problem,
					questions: [
						...state.problem.questions,
						payload,
					],
				},
			}
		case types.UPDATE_QUESTION:
			return {
				...state,
				problem: {
					...state.problem,
					questions: state.problem.questions.map((question: IQuestion) => {
						if (question.id === payload.questionId) {
							return {
								...question,
								question: payload.question.question,
								answers: payload.question.answers,
							}
						} else {
							return question
						}
					}),
				},
			}
		case types.REMOVE_QUESTION:
			return {
				...state,
				problem: {
					...state.problem,
					questions: state.problem.questions.filter((question: IQuestion) => question.id !== payload),
				},
			}
		case types.SUBMIT_PROBLEM_SUCCESS:
			return {
				problems: [],
				status: 'success',
			}
		case types.SUBMIT_PROBLEM_FAILURE:
			return {
				...state,
				status: 'error',
			}
		default:
			return state
	}
}