import { useSelector } from 'react-redux'
import Link from 'next/link'
import Counter from '../../src/components/Counter'
import { ReactElement } from 'react'
import Layout from '../../src/components/Layout'

const codeStyle = {
	background: '#ebebeb',
	width: 400,
	padding: 10,
	border: '1px solid grey',
	marginBottom: 10,
}

const ShowReduxState = () => {
	const state = useSelector((state) => state)

	return (
		<>
			<Counter />
			<pre style={codeStyle}>
				<code>{JSON.stringify(state, null, 4)}</code>
			</pre>
			<Link href="/">
				<a>Go Back Home</a>
			</Link>
		</>
	)
}

export default ShowReduxState

ShowReduxState.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}