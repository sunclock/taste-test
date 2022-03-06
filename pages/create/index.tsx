import { ReactElement, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '../../src/components/Link';
import Layout from '../../src/components/Layout';
import TextField from '@material-ui/core/TextField';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import ShowReduxState from '../test/show-redux-state';
import { setProblemInformation } from '../../src/redux/problem/problemActions';

export default function Create() {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	return (
		<>
			<Typography variant="h4" component="h1" gutterBottom>
				테스트 만들기
			</Typography>
			<Stack spacing={2}>
				<TextField
					placeholder="테스트 제목을 입력하세요"
					label="문제 제목"
					value={title}
					onChange={(text) => {
						setTitle(text.target.value);
					}} />
				<TextField
					placeholder="작성자를 입력하세요"
					label="작성자"
					value={author}
					onChange={(text) => {
						setAuthor(text.target.value)
					}} />
				<Button variant="contained" component={Link} noLinkStyle onClick={() => dispatch(setProblemInformation(title, author))} href="/create/problem">
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