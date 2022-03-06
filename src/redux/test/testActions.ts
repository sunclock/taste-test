// init states
export const START_SERVER_RENDER = 'START_SERVER_RENDER'
export const START_CLIENT_RENDER = 'START_CLIENT_RENDER'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

// INITIALIZE STATE ON SERVER
export const serverRenderState = () => (dispatch: Function) =>
	dispatch({
		type: START_SERVER_RENDER,
		payload: { light: false },
	})

// INITIALIZE STATE ON CLIENT
export const clientRenderState = () => (dispatch: Function) =>
	setInterval(() => {
		dispatch({
			type: START_CLIENT_RENDER,
			payload: { light: true },
		})
	}, 1000)

export const incrementCount = () => ({ type: INCREMENT })
export const decrementCount = () => ({ type: DECREMENT })
export const resetCount = () => ({ type: RESET })