export interface IExample {
	id: string | number;
	questionId: string;
	content: string;
}

export interface IQuestion {
	id: string | number;
	question: string;
	answers: IExample[];
}

export interface IProblem {
	id: string | number;
	title: string;
	author: string;
	description: string;
	questions: IQuestion[];
}

export interface IAnswer {
	id: string | number;
	user: string;
	problemId: string;
	answers: IExample[];
}
