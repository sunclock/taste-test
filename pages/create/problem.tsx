import { ReactElement, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '../../src/components/Link';
import Layout from '../../src/components/Layout';
import TextField from '@material-ui/core/TextField';
import { Stack } from '@mui/material';
import ShowReduxState from '../test/show-redux-state';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../../src/redux/problem/problemActions';
import { IExample, IQuestion } from '../../src/types';

const initialQuestion = (questions: IQuestion[], question: string, example: IExample[]) => ({
	id: 'q' + questions.length,
	question,
	answers: example
})

const initialExample = (example: IExample[] | [], questions: IQuestion[]) => {
	let qId = example === [] ? questions.length + 1 : questions.length;
	return ({
		id: 'e' + example.length,
		questionId: 'q' + qId,
		content: ''
	})
}

export default function Problem() {
	const dispatch = useDispatch();
	const questions = useSelector((state: any) => state.problem.problem.questions);
	const [question, setQuestion] = useState('');
	const [example, setExample] = useState([initialExample([], questions)]);
	const newQuestion = initialQuestion(questions, question, example);
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
				{example.map((e, index) => (
					<TextField
						placeholder="선택지를 입력하세요"
						label={'선택지 ' + (index + 1)}
						value={example[index].content}
						key={index}
						onChange={(text) => {
							setExample(example.map((item, i) => i === index ? {
								id: 'e' + index,
								questionId: 'q' + questions.length,
								content: text.target.value
							} : item));
						}} />
				))}
				<Button variant="outlined" onClick={() => {
					setExample([...example, initialExample(example, questions)]);
				}}>
					선택지 추가하기
				</Button>
				<Box maxWidth="md">
					<Button sx={{ mr: 1 }} variant="outlined" component={Link} noLinkStyle href="/">
						이전 문제로 돌아가기
					</Button>
					<Button variant="contained" onClick={() => {
						dispatch(addQuestion(newQuestion))
						setQuestion('');
						setExample([initialExample([], questions)]);
					}
					}>
						다음 문제 입력하기
					</Button>
				</Box>
				<Button variant="outlined" component={Link} noLinkStyle href="/">
					홈페이지로 돌아가기
				</Button>
				<ShowReduxState />
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