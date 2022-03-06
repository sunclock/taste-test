import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../redux/test/testActions'

const Counter = () => {
	const test = useSelector((state: any) => state.test)
	const dispatch = useDispatch()

	return (
		<div>
			<h1>
				Count: <span>{test.count}</span>
			</h1>
			<h1>
				Light: <span>{test.light}</span>
			</h1>
			<button onClick={() => dispatch(incrementCount())}>+1</button>
			<button onClick={() => dispatch(decrementCount())}>-1</button>
			<button onClick={() => dispatch(resetCount())}>Reset</button>
		</div>
	)
}

export default Counter
