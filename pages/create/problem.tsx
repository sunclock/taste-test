import { ReactElement, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '../../src/components/Link';
import Layout from '../../src/components/Layout';
import TextField from '@material-ui/core/TextField';
import { Stack } from '@mui/material';

export default function Problem() {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState(['']);
	return (
		<>
			<Typography variant="h4" component="h1" gutterBottom>
				질문
			</Typography>
			<Stack spacing={2}>
				<TextField
					placeholder="질문을 입력하세요"
					label="질문"
					value={question}
					onChange={(text) => {
						setQuestion(text.target.value);
					}} />
				{answer.map((text, index) => (
					<TextField
						placeholder="선택지를 입력하세요"
						label={'선택지 ' + (index + 1)}
						value={answer[index]}
						onChange={(text) => {
							setAnswer(answer.map((t, i) => i === index ? text.target.value : t));
						}} />
				))}
				<Button variant="outlined" onClick={() => {
					setAnswer([...answer, '']);
				}}>
					선택지 추가하기
				</Button>
				<Box maxWidth="md">
					<Button sx={{ mr: 1 }} variant="outlined" component={Link} noLinkStyle href="/">
						이전 문제로 돌아가기
					</Button>
					<Button variant="contained" component={Link} noLinkStyle href="/">
						다음 문제 입력하기
					</Button>
				</Box>
				<Button variant="outlined" component={Link} noLinkStyle href="/">
					홈페이지로 돌아가기
				</Button>
			</Stack>
		</>
	);
};

Problem.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}