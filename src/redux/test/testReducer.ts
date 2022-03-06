import * as types from './testActions'

const initialTestState = {
	light: false,
	count: 0,
}

export const testReducer = (state = initialTestState, { type, payload }: { type: string, payload: any }) => {
	switch (type) {
		case types.START_SERVER_RENDER:
			return {
				...state,
				light: payload.light,
			}
		case types.START_CLIENT_RENDER:
			return {
				...state,
				light: payload.light,
			}
		case types.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			}
		case types.DECREMENT:
			return {
				...state,
				count: state.count - 1,
			}
		case types.RESET:
			return {
				...state,
				count: 0,
			}
		default:
			return state
	}
}