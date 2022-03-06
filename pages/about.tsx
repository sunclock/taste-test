import { ReactElement } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/components/Link';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/Copyright';
import Layout from '../src/components/Layout';

export default function About() {
	return (
		<>
			<Typography variant="h4" component="h1" gutterBottom>
				MUI v5 + Next.js with TypeScript example
			</Typography>
			<Box maxWidth="sm">
				<Button variant="contained" component={Link} noLinkStyle href="/">
					Go to the home page
				</Button>
			</Box>
			<ProTip />
			<Copyright />
		</>
	);
};

About.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}