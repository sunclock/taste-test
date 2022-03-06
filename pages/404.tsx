import { ReactElement } from 'react'
import Layout from '../src/components/Layout'

export default function Custom404() {
	return <h1>🥺404 - Page Not Found🥺</h1>
}

Custom404.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}