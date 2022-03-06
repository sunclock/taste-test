import { ReactElement } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '../../src/components/Link';
import Layout from '../../src/components/Layout';
import TextField from '@material-ui/core/TextField';
import { Stack } from '@mui/material';

export default function Create() {
	return (
		<>
			<Typography variant="h4" component="h1" gutterBottom>
				테스트 만들기
			</Typography>
			<Stack spacing={2}>
				<TextField
					placeholder="테스트 제목을 입력하세요"
					label="문제 제목" />
				<TextField
					placeholder="작성자를 입력하세요"
					label="작성자" />
				<Button variant="contained" component={Link} noLinkStyle href="/create/problem">
					문제 입력하기
				</Button>
				<Button variant="outlined" component={Link} noLinkStyle href="/">
					홈페이지로 돌아가기
				</Button>
			</Stack>
		</>
	);
};

Create.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}