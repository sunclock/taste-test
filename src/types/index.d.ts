export interface IExample {
	id: string;
	questionId: string;
	content: string;
}
export interface IQuestion {
	id: string;
	question: string;
	answers: IExample[];
}

export interface IProblem {
	id: string;
	title: string;
	author: string;
	description: string;
	questions: IQuestion[];
}

export interface IAnswer {
	id: string;
	user: string;
	problemId: string;
	answers: IExample[];
}
